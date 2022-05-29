import { Row, Col, Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ProductCard from '../features/goods/ProductCard';
import DetailedProductCard from '../features/goods/DetailedProductCard';
import {
  selectProductsByType,
  selectCategories
} from '../shared/productSlice.js';

const ProductPage = () => {
  const productCategories = selectCategories();
  const jerkyProducts = selectProductsByType('jerky');
  const cheeseProducts = selectProductsByType('cheese');
  const salmonProducts = selectProductsByType('salmon');

  return (
    <Container>
      <SubHeader current='Products' />
      <Row>
        <h1 className='firstCard'>Our Products</h1>
        <hr />
        {productCategories.map((category) => {
          return (
            <Col md={4} className='p2'>
              <ProductCard product={category} />
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row>
        <Col xs={12}>
          <h2 className='secondCard' id='0'>
            Jerky
          </h2>
          <div className='text-white'>
            <h3 className='text-warning'>Premium jerky made in small batches</h3>
            <p>Every piece of jerky gets slow smoked in a variety of hardwoods that includes Mesquite, Hickory, Alder, and Apple. Our jerky comes in portions of 5lbs and is made weekly.</p>
          </div>
        </Col>
        {jerkyProducts.map((kind) => {
          return (
            <Col xs={12} md={4}>
              <DetailedProductCard product={kind} />
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row className='d-flex justify-content-center'>
        <Col xs={12}>
          <h2 className='thirdCard' id='1'>
            Cheese
          </h2>
          <div className='text-white'>
            <h3 className='text-warning'>Smoked cheeses</h3>
            <p>All of our cheese is the highest quality and smoked with Apple wood. Our cheeses come in 4oz portions, and all cheeses are $5.00. <strong>Buy 3, Get One free.</strong></p>
          </div>
        </Col>
        {cheeseProducts.map((kind) => {
          return (
            <Col xs={12} md={3}>
              <DetailedProductCard product={kind} />
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row className='d-flex justify-content-center'>
        <Col xs={12}>
          <h2 className='fourthCard' id='2'>
            Salmon
          </h2>
          <div className='text-white'>
            <h3 className='text-warning'>Wild caught salmon smoked weekly</h3>
            <p>Freshly smoked wild caught Alaskan Sockeye and Coho Salmon (type depends on season). Portions are 7oz for $10.00. <strong>Buy 3, Get One Smoked Cheese (of your choice) free.</strong>
<em>(All orders require a 3-day minimum advance notice.)</em></p>
          </div>
        </Col>
        {salmonProducts.map((kind) => {
          return (
            <Col xs={12} md={3}>
              <DetailedProductCard product={kind} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductPage;
