import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <Row>
          <Col xs={{ size: 2, offset: 1 }} sm='3'>
            <h5>Links</h5>
            <Link role='button' className='btn btn-link text-decoration-none ' to='/home'>
              <i className='fa fa-home fa-lg' /> <p className='footer-links '>Home</p>
            </Link>

            <Link role='button' className='btn btn-link text-decoration-none ' to='/about'>
              <i className='fa fa-address-card fa-lg' /><p className='footer-links '>About</p>
            </Link>

            <Link role='button' className='btn btn-link text-decoration-none ' to='/products'>
              <i className='fa fa-cutlery fa-lg' /> <p className='footer-links '>Products</p>
            </Link>

            <Link role='button' className='btn btn-link text-decoration-none ' to='/health'>
              <i className='fa fa-heartbeat fa-lg' /> <p className='footer-links '>Health</p>
            </Link>

            <Link role='button' className='btn btn-link text-decoration-none ' to='/vendor'>
              <i className='fa fa-usd fa-lg' /> <p className='footer-links '>Vendor Info</p>
            </Link>

            <Link role='button' className='btn btn-link text-decoration-none ' to='/contact'>
              <i className='fa fa-address-book fa-lg' /> <p className='footer-links '>Contact Us</p>
            </Link>
          </Col>

          <Col xs='6' sm='3' className='text-center'>
            <h5>Social</h5>
            <a
              className='btn btn-social-icon btn-instagram '
              href='http://instagram.com/'
            >
              <i className='fa fa-instagram' />
            </a>{' '}
            <a
              className='btn btn-social-icon btn-facebook'
              href='http://www.facebook.com/'
            >
              <i className='fa fa-facebook' />
            </a>{' '}
          </Col>

          <Col sm='4' className='text-center'>
            <a role='button' className='btn btn-link text-decoration-none' href='tel:+12065551234'>
              <i className='fa fa-phone' /> <p className='footer-links'>1-206-555-1234</p>
            </a>
            <br />
            <a
              role='button'
              className='btn btn-link text-decoration-none'
              href='mailto:notreal@notreal.co'
            >
              <i className='fa fa-envelope-o' /> <p className='footer-links'>emailhere@gmail.com</p>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
