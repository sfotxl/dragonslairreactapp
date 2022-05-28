import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, name, image } = product;
    return(
        <Link to ={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    )
}

export default ProductCard;