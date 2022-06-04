import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const ProductCard = ({ product, arrRefs, isHome }) => {
  const { name, image } = product;

  return (
    <button
      className='btn btn-link p-1'
      onClick={(event) => {
        if (!isHome) {
          event.preventDefault();
          arrRefs[name.toLowerCase()].current.scrollIntoView();
        }
        
      }}
      onMouseDown={(event) => event.preventDefault()}
    >
      <Card>
        <CardImg width='100%' src={image} alt={name} />
        <CardImgOverlay className='product-card-overlay d-flex justify-content-center align-items-end'>
          <CardTitle className='product-card-name'>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </button>
  );
};

ProductCard.defaultProps = {
  isHome: false
};

export default ProductCard;
