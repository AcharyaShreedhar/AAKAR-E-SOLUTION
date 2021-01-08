import "./footer.scss";
import { Image, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row className="item footerSection">
      <Col xs={12} sm={1} md={1} lg={1}>
        <Image src={"/images/sochlogo.png"} alt="Soch College" fluid />
      </Col>
      <Col xs={12} sm={11} md={11} lg={11}>
        <p className="text-center">© 2021 Soch College of IT. All Rights Reserved.</p>
      </Col>
    </Row>
  );
}

export default Footer;
