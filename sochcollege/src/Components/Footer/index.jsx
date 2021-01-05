import "./footer.scss";
import { Image } from "react-bootstrap";

function Footer() {
  return (
    <div className="footerSection">
      <div className="logo">
        <Image
          style={{ width: "10rem" }}
          src={"/images/sochlogo.png"}
          alt="Soch College"
        />
      </div>
      <div className="copyRight">
        <p> © 2021 Soch College of IT. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
