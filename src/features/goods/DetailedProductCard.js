import { Card, CardBody, CardImg, CardText } from 'reactstrap'

const ProductDetail = ({ product }) => {
  const { image, name, description } = product;

  return (
    <Card className='text-dark'>
      <CardImg top src={image} alt={name} />
      <CardBody>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProductDetail;
