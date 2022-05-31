import { Container, Row, Col } from "reactstrap";
import ProductCard from "../features/goods/ProductCard";
import { selectCategories } from "../shared/productSlice";
import Sizzle from "../assets/img/Jerky.mp4";
import Map from "../features/maps/Map";



const HomePage = () => {
  const productCategories = selectCategories();
  return (
    <Container>
      <video src={Sizzle} width="100%" muted loop autoPlay />
      <h1 className="text-white mt-1">Welcome to Dragons Lair</h1>
      <h2 className='firstCard mb-3'>Products</h2>
      <Row className='mb-4'>
        {productCategories.map((category) => {
          return (
            <Col md={4} className='p2'>
              <ProductCard product={category} />
            </Col>
          );
        })}
      </Row>
      <hr/>
      <Map />
    </Container>
  );
};

export default HomePage;
