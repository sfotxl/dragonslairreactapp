import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, detail }) => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          {detail === "Products" && (
            <BreadcrumbItem>
              <Link to="/Products">Products</Link>
            </BreadcrumbItem>
          )}
          {detail === "Contact" && (
            <BreadcrumbItem>
              <Link to="/Contact">Contact</Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem active>{current}</BreadcrumbItem>
        </Breadcrumb>
        <hr />
      </Col>
    </Row>
  );
};

export default SubHeader;
