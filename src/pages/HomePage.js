import { Col, Container, Row } from 'reactstrap';
import Sizzle from '../assets/img/Jerky531.mov';
import ProductCard from '../features/products/ProductCard';
import Map from '../features/maps/Map';
import { selectCategories } from '../features/products/productSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const productCategories = selectCategories();
  return (
    <Container>
      <video src={Sizzle} width='100%' muted loop autoPlay />
      <h1 className='text-white mt-1'>Welcome to Dragons Lair</h1>
      <h2 className='firstCard mb-3'>Products</h2>
      <Row className='mb-4'>
        {productCategories.map((category) => {
          return (
            <Col md={4} className='p2 mb-4' key={category.id}>
              <Link to={{ pathname: '/Products', hash: `#${category.name}` }}>
                <ProductCard product={category} isHome={true} />
              </Link>
            </Col>
          );
        })}
      </Row>
      <hr />
      <Map />
    </Container>
  );
};

export default HomePage;
