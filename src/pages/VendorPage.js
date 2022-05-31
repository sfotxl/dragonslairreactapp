import { Container, Row, Col } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import Map from '../features/maps/Map';
import { ReactComponent as DragonLogoText } from '../assets/img/dragonslairlogo.svg';
import redDragonImg from '../assets/img/redDragon.jpg';

const VendorPage = () => {
  return (
    <Container>
      <SubHeader current='Vendor' detail='Contact' />
      <h1 className='secondCard mb-3'>Become a Vendor</h1>
      <Row className="align-items-center">
        <Col>
          <img className='featuredImage' src={redDragonImg} width="100%"/>
        </Col>
        <Col>
        <DragonLogoText />
          <p>
            Do you have a store, bar, or other place where you would like to
            sell our fantastic products? Becoming a vendor is easy, and we will
            work with you to set up a display. Reach out to Rob via e-mail or
            phone.
          </p>
          <a href='mailto:dragonslairjerky@gmail.com'>
            <i class='fa-solid fa-envelope fa-large'></i>
          </a>
          <a href='tel:+13109489318'>
            <i class='fa-solid fa-phone'></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default VendorPage;
