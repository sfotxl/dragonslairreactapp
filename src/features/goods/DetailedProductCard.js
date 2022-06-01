import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const ProductDetail = ({ product }) => {
  const { image, name, description } = product;

  return (
    <Card className='text-dark m-1'>
      <CardImg top src={image} alt={name} />
      <CardBody>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProductDetail;
