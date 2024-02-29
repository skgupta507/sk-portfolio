import { Container, Row, Col } from "react-bootstrap";
import twitter from "../assets/img/icons8-twitter.svg"
import github from "../assets/img/icons8-github.svg"
import Linkedin from '../assets/img/nav-icon1.svg';
import { ExternalLink } from "react-external-link";

export const Footer = () => {
  return (
    <footer className="footer mt-10">
      <Container>
        <Row className="align-items-center ">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <ExternalLink href="https://www.linkedin.com/in/sunil-gupta-798914144/"> <img src={Linkedin} alt="" /> </ExternalLink>
              <ExternalLink href="https://twitter.com/skgupta507">   <img src={twitter} /> </ExternalLink>
              <ExternalLink href="https://github.com/sunilgupta507">  <img src={github} /> </ExternalLink>
            </div>
            <p className=" capitalize">Copyright 2024. All Rights Reserved Built By Sunil Gupta</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
