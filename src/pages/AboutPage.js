import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import HikingImg from '../assets/img/Hiking1.png';

const AboutPage = () => {
  return (
    <Container>
      <SubHeader current='About' />
      <h1 className='text-center secondCard text-white mb-3'>
        About Dragons Lair Smoked Fine Goods
      </h1>
      <Row className='align-items-center'>
        <Col xs={12} xl={6}>
          <img
            className='featuredImage'
            src={HikingImg}
            width='100%'
            alt='Person hiking'
          ></img>
        </Col>
        <Col xs={12} xl={6}>
          <p>
            Dragons Lair began out of necessity. Our founder Rob, an avid
            climber living in the Pacific Northwest needed a healthy, highly
            portable source of energy while scaling the Cascades. Away on top of
            the world, jerky provided the perfect snack. Dragons Lair Smoked
            Fine Goods is the result of a lifelong dedication to lean nutrition
            and health-conscious living. Well-being is always on our minds at
            Dragons Lair.{' '}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
