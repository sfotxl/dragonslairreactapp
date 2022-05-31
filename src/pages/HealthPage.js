import { Container, Col, Row } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import { Link } from 'react-router-dom';
import Hiking2Img from '../assets/img/Hiking2.png';

const HealthPage = () => {
  return (
    <Container>
      <SubHeader current='Health' />
      <h1 className='text-center text-white thirdCard'>Your Health and Our Foods</h1>
      <Row className='align-items-center'>
        <Col xs={12} xl={6}>
          <img
            className='featuredImage'
            src={Hiking2Img}
            width='100%'
            alt='Person hiking'
          ></img>
        </Col>
        <Col xs={12} xl={6}>
          <p>
            Many people have busy lives and unfortunately sometimes choose foods
            that are not healthy in order to get them through their busy days.
            These choices, coupled with stress can cause a myriad of health
            problems.
          </p>
          <p>
            Inflammation is a key contributor to poor health is caused by many
            foods including fast foods, which are the main choices of busy
            people.
          </p>
          <p>
            Food trucks make tasty food; however, almost none of them are
            healthy. In fact they are so high in fat and sodium content that
            people become lethargic from eating them. That contributes to
            increasing obesity and illnesses such as heart disease and organ
            failure. High blood pressure and diabetes are 2 major killers linked
            to these foods.
          </p>
        </Col>
        <Col xs={12}>
          <p>
            It is very easy to make all of these unhealthy choices go away by
            purchasing our prepackaged{' '}
            <Link className='text-warning' to='/products'>
              jerky
            </Link>{' '}
            and{' '}
            <Link className='text-warning' to='/products'>
              smoked salmon
            </Link>
            . You have a fantastic snack / lunch that is high in protein, high
            in Omega-3's, is not fried or high in calories and actually helps
            REDUCE inflammation, and control triglycerides.{' '}
          </p>
          <p>
            Our foods are virtually fat-free and the minimal fat in them occurs
            naturally. Although we use a small amount of Kosher salt in our
            brine it is a lot lower sodium content than store bought smoked
            salmon.
          </p>
        </Col>
        </Row>
        <Row>
        <Col xs={12}>
          <h3 className='text-white'>See also</h3>
          <ul>
            <li>
              <a
                target='_blank' className="text-warning"
                href='https://healthyeating.sfgate.com/smoked-salmon-health-benefits-4855.html'
              >
                Health Benefits of Smoked Salmon
              </a>{' '}
              (via SF Gate)
            </li>
            <li>
              <a
                target='_blank' className="text-warning"
                href='https://www.mashed.com/146396/the-truth-about-farmed-salmon-vs-wild-salmon/'
              >
                The Staggering difference between Wild Salmon and Farmed Salmon
              </a>{' '}
              (via Mashed)
            </li>
          </ul>
        </Col>
        </Row>
      
    </Container>
  );
};

export default HealthPage;
