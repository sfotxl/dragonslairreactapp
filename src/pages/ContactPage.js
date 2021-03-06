import { FaDragon, FaPhone, FaRegEnvelope } from 'react-icons/fa'
import { Col, Container, Row } from 'reactstrap'
import ContactForm from '../components/ContactForm'
import SubHeader from '../components/SubHeader'
import Map from "../features/maps/Map"

const ContactPage = () => {
  return (
    <Container>
      <SubHeader current='Contact' />
      <h1 className='text-center text-white fourthCard'>Contact Us</h1>
      <hr />
      <Row className='p-4 fs-5'>
        <Col className='p-4 text-start' md='4'>
          <h5 className='text-start fs-3'>
            <FaDragon className='mx-2 mb-1 fs-4' /> Our Address
          </h5>
          <address className='pb-4'>
            1234 Dragons Lair Boulevard
            <br />
            Magnolia, TX 77354
            <br />
            U.S.A.
          </address>
        </Col>
        <Col className='text-start p-4'>
          <a
            role='button'
            className='btn btn-link'
            id='iconic'
            href='tel:+13109489318'
          >
            <FaPhone color={'darkRed'} className='fs-1 me-2' />
          </a>
          1-310-948-9318
          <br className='my-4' />
          <a
            role='button'
            className='btn btn-link'
            id='iconic'
            href='mailto:dragonslairjerky@gmail.com'
          >
            <FaRegEnvelope color={'darkRed'} className='fs-1 me-2' />
          </a>
          dragonslairjerky@gmail.com
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className='text-start text-white mt-4'>Order From Us</h1>
          <hr />
        </Col>
      </Row>
      <ContactForm />
      <hr />
      <Map />
    </Container>
  );
};

export default ContactPage;
