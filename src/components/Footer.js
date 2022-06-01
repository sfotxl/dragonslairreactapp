import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import {
  FaDrumstickBite,
  FaHome,
  FaAddressCard,
  FaHeartbeat,
  FaAddressBook,
  FaFacebookF
} from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='site-footer text-center text-md-start mt-0'>
      <Container>
        <Row className='mt-3'>
          <Col
            className='link-warning text-center'
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
                    <FaHome size='32' className='react-icons px-1' />
                    <span className='link-warning px-1'>Home</span>
                  </Link>
                </Col>

                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none p-1 d-flex align-items-center justify-content-center'
                    to='/about'
                  >
                    <FaAddressCard size='32' className='react-icons px-1' />
                    <span className='link-warning px-1'>About</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/products'
                  >
                    <i className='fa fa-lg px-1'>
                      <FaDrumstickBite className='react-icons' />
                    </i>
                    <span className='link-warning px-1'>Products</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/health'
                  >
                    <FaHeartbeat size='32' className='react-icons px-1' />
                    <span className='link-warning px-1'>Health</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/vendor'
                  >
                    <MdAttachMoney size='32' className='react-icons' />
                    <span className='link-warning'>Vendor Info</span>
                  </Link>
                </Col>
                <Col className='p-2' md='4' sm='6' xs='6'>
                  <Link
                    className='text-decoration-none  p-1 d-flex align-items-center justify-content-center'
                    to='/contact'
                  >
                    <FaAddressBook size='32' className='react-icons p-1' />
                    <span className='link-warning px-1'>Contact Us</span>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col className='footer-social text-center' sm='2'>
            <h5 className='pt-sm-0 pt-4'>Social</h5>
            <a
              className='btn btn-social-icon btn-instagram'
              href='https://www.instagram.com/robbailey1952/'
            >
              <AiFillInstagram size='40' className='link-warning px-1' />
            </a>
            <a
              className='btn btn-social-icon btn-facebook'
              href='https://www.facebook.com/dragonslairjerkyandsmokedsalmon/'
            >
              <FaFacebookF size='28' className='link-warning px-1' />
            </a>
          </Col>
          <Col className='footer-contact' sm='3'>
            <h5 className='pt-sm-0 pt-4'>Contact</h5>
            <section className='d-flex flex-column align-items-center'>
              <a
                className='text-decoration-none text-nowrap'
                href='tel:+12065551234'
              >
                <i className='fa fa-phone px-2' />
                <span className='link-warning px-1'>(206) 555-1234</span>
              </a>
              <a
                className='text-decoration-none text-nowrap'
                href='mailto:dragonslairjerky@gmail.com'
              >
                <i className='fa fa-envelope-o px-2' />
                <span className='link-warning px-1'>dragonslairjerky@gmail.com</span>
              </a>
            </section>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
