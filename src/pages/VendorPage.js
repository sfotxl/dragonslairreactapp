import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Map from '../features/maps/Map';
import { ReactComponent as DragonLogoText } from '../assets/img/dragonslairlogo.svg';
import redDragonImg from '../assets/img/redDragon.jpg';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';

const VendorPage = () => {
  return (
    <Container>
      <SubHeader current='Vendor' detail='Contact' />
      <h1 className='secondCard mb-3'>Become a Vendor</h1>
      <Row className='align-items-center'>
        <Col>
          <img
            className='featuredImage'
            alt='Dragon Breathing Fire'
            src={redDragonImg}
            width='100%'
          />
        </Col>
        <Col>
          <DragonLogoText />
          <p>
            Do you have a store, bar, or other place where you would like to
            sell our fantastic products? Becoming a vendor is easy, and we will
            work with you to set up a display. Reach out to Rob via e-mail or
            phone.
          </p>
          <div className='p-4'>
            <a href='mailto:dragonslairjerky@gmail.com'>
              <FaRegEnvelope className='react-icons fs-2 mx-4' />
            </a>
            <a href='tel:+13109489318'>
              <FaPhone className='react-icons fs-2 mx-4' />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VendorPage;
