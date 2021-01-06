import "./footer.scss";
import { Image, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Row className="item footerSection">
      <Col xs={12} sm={2} md={2} lg={2}>
        <Image src={"/images/sochlogo.png"} alt="Soch College" fluid />
      </Col>
      <Col xs={12} sm={10} md={10} lg={10}>
        <p className="text-start">
          © 2021 Soch College of IT. All Rights Reserved.
        </p>
      </Col>
    </Row>
  );
}

export default Footer;
