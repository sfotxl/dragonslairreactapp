import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { FaDrumstickBite } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='site-footer text-center text-md-start mt-5'>
      <Container>
        <Row className='mt-3'>
          <Col
            className='footer-links text-center'
            sm={{
              offset: 1,
              size: '5'
            }}
          >
            <h5>Links</h5>
            <Container>
              <Row className='align-items-center'>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center justify-content-center'
                    to='/'
                  >
                    <i className='fa fa-home fa-lg px-1' />
                    <span className='footer-links px-1'>Home</span>
                  </Link>
                </Col>

                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/about'
                  >
                    <i className='fa fa-address-card fa-lg px-1' />
                    <span className='footer-links px-1'>About</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/products'
                  >
                    <i className='fa fa-lg px-1'>
                      <FaDrumstickBite />
                    </i>
                    <span className='footer-links px-1'>Products</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/health'
                  >
                    <i className='fa fa-heartbeat fa-lg px-1' />
                    <span className='footer-links px-1'>Health</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/vendor'
                  >
                    <i className='fa fa-usd fa-lg px-1' />
                    <span className='footer-links px-1'>Vendor Info</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/contact'
                  >
                    <i className='fa fa-address-book fa-lg' />
                    <span className='footer-links px-1'>Contact Us</span>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className='footer-social text-center' sm='2'>
            <h5 className='pt-sm-0 pt-4'>Social</h5>
            <a
              className='btn btn-social-icon btn-instagram'
              href='http://instagram.com/'
            >
              <i className='fa fa-instagram footer-links' />
            </a>{' '}
            <a
              className='btn btn-social-icon btn-facebook'
              href='http://www.facebook.com/'
            >
              <i className='fa fa-facebook footer-links' />
            </a>{' '}
          </Col>
          <Col className='footer-contact' sm='3'>
            <h5 className='pt-sm-0 pt-4'>Contact</h5>
            <section className='d-flex flex-column align-items-center'>
              <a
                className='text-decoration-none text-nowrap'
                href='tel:+12065551234'
              >
                <i className='fa fa-phone px-2' />
                <span className='footer-links px-1'>1-206-555-1234</span>
              </a>
              <a
                className='text-decoration-none text-nowrap'
                href='mailto:notreal@notreal.co'
              >
                <i className='fa fa-envelope-o px-2' />
                <span className='footer-links px-1'>emailhere@gmail.com</span>
              </a>
            </section>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
