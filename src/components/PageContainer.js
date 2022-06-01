import { useEffect, useState, useRef } from 'react'
import Header from './Header'
import Footer from './Footer'

/**
 * Wraps app pages, handles header, footer, and page height. 
 * Ensures the footer is at the bottom of the page by adding a min-height to the main content.
 * @props { node }  children  Child components
 */
const PageContainer = ({ children }) => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const [footerHeight, setFooterHeight] = useState(0)
  const headerRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight)
    setFooterHeight(footerRef.current.offsetHeight)
  }, [])

  const calcContentHeight = {
    minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
  }

  return (
    <div className=''>
      <span ref={headerRef} className='wrapper'>
        <Header />
      </span>
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
  )
}

export default PageContainer
