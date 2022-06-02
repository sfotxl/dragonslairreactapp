import { Row, Col, Container } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import ProductCard from '../features/products/ProductCard';
import DetailedProductCard from '../features/products/DetailedProductCard';
import {
  selectProductsByType,
  selectCategories
} from '../features/products/productSlice';
import { useRef } from 'react';

const ProductPage = () => {
  const productCategories = selectCategories();
  const jerkyProducts = selectProductsByType('jerky');
  const cheeseProducts = selectProductsByType('cheese');
  const salmonProducts = selectProductsByType('salmon');

  const jerkyRef = useRef();
  const cheeseRef = useRef();
  const salmonRef = useRef();

  // Passed into ProductCard, used for scrolling to sections on click
  const sectionRefs = {
    jerky: jerkyRef,
    cheese: cheeseRef,
    salmon: salmonRef
  };

  return (
    <Container>
      <SubHeader current='Products' />

      <h1 className='firstCard mb-3'>Our Products</h1>
      <Row>
        {productCategories.map((category) => {
          return (
            <Col md={4} className='p2' key={category.id}>
              <ProductCard product={category} arrRefs={sectionRefs} />
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row>
        <Col xs={12}>
          <h2 ref={jerkyRef} className='secondCard' id='1'>
            Jerky
          </h2>
          <div className='text-white'>
            <h3 className='text-warning'>
              Premium jerky made in small batches
            </h3>
            <p>
              Every piece of jerky gets slow smoked in a variety of hardwoods
              that includes Mesquite, Hickory, Alder, and Apple. Our jerky comes
              in portions of 5lbs and is made weekly.
            </p>
          </div>
        </Col>
        {jerkyProducts.map((kind) => {
          return (
            <Col xs={12} md={4} key={kind.id}>
              <DetailedProductCard product={kind} />
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row className='d-flex justify-content-center'>
        <Col xs={12}>
          <h2 ref={cheeseRef} className='thirdCard' id='1'>
            Cheese
          </h2>
          <div className='text-white'>
            <h3 className='text-warning'>Smoked cheeses</h3>
            <p>
              All of our cheese is the highest quality and smoked with Apple
              wood. Our cheeses come in 4oz portions, and all cheeses are $5.00.{' '}
              <strong>Buy 3, Get One free.</strong>
            </p>
          </div>
        </Col>
        {cheeseProducts.map((kind) => {
          return (
            <Col xs={12} md={3} key={kind.id}>
              <DetailedProductCard product={kind} />
            </Col>
          );
        })}
      </Row>
      <hr />
      <Row className='d-flex justify-content-center'>
        <Col xs={12}>
          <h2 ref={salmonRef} className='fourthCard' id='2'>
            Salmon
          </h2>
          <div className='text-white'>
            <h3 className='text-warning'>Wild caught salmon smoked weekly</h3>
            <p>
              Freshly smoked wild caught Alaskan Sockeye and Coho Salmon (type
              depends on season). Portions are 7oz for $10.00.{' '}
              <strong>
                Buy 3, Get One Smoked Cheese (of your choice) free.
              </strong>
              <em>(All orders require a 3-day minimum advance notice.)</em>
            </p>
          </div>
        </Col>
        {salmonProducts.map((kind) => {
          return (
            <Col xs={12} md={3} key={kind.id}>
              <DetailedProductCard product={kind} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ProductPage;
