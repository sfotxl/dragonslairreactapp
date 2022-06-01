import { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Wraps app pages, handles header, footer, and page height.
 * Ensures the footer is at the bottom of the page by adding a min-height to the main content.
 * @props { node }  children  Child components
 */
const PageContainer = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const innerNavBarRef = useRef(null);

  useEffect(() => {
    // Get header height
    innerNavBarRef.current = headerRef.current.querySelector('.navbar');

    setHeaderHeight(innerNavBarRef.current.offsetHeight);
    setFooterHeight(footerRef.current.offsetHeight);

    const handleResize = () => {
      setHeaderHeight(innerNavBarRef.current.offsetHeight);
      setFooterHeight(footerRef.current.offsetHeight);
    };
    // Reseizes header spacer to fill empty space for fixed header
    window.addEventListener('resize', handleResize);

    // Scroll hides/shows header
    var doc = document.documentElement;
    var w = window;

    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;

    var header = document.getElementById('site-header');

    var checkScroll = function () {
      /*
       ** Find the direction of scroll
       ** 0 - initial, 1 - up, 2 - down
       */

      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        //scrolled up
        direction = 2;
      } else if (curScroll < prevScroll) {
        //scrolled down
        direction = 1;
      }

      if (direction !== prevDirection) {
        toggleHeader(direction, curScroll);
        setMenuOpen(false);
      }

      prevScroll = curScroll;
    };

    var toggleHeader = function (direction, curScroll) {
      if (direction === 2 && curScroll > 52) {
        //replace 52 with the height of your header in px

        header.classList.add('hide');
        prevDirection = direction;
      } else if (direction === 1) {
        header.classList.remove('hide');
        prevDirection = direction;
      }
    };

    window.addEventListener('scroll', checkScroll);

    // Removes event listener on unmount
    return () => {
      window.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calcContentHeight = {
    minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`
  };

  return (
    <div className=''>
      <div style={{ height: headerHeight }} />

      <div ref={headerRef} className='wrapper'>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      <main
        className='w-100 mx-auto d-flex flex-column my-3'
        style={calcContentHeight}
      >
        {children}
      </main>
      <span ref={footerRef} className='wrapper'>
        <Footer />
      </span>
    </div>
  );
};

export default PageContainer;
