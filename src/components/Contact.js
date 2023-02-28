import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import mailImg from "../assets/img/mail.svg";
import phoneImg from "../assets/img/phone.svg";
import locationImg from "../assets/img/location.svg";
import emailjs from '@emailjs/browser';

export const Contact = () => {

  const [status, setStatus] = useState({});

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d6qze3u', 'template_kc6zwks', form.current, 'bSznqfSkFXLUnOsag')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          setStatus({ succes: true, message: 'Message sent successfully'});
      }, (error) => {
          console.log(error.text);
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
            <Col size={12} md={6} className="d-inline-flex">
              <Row>
                <img className="contact-img my-3 ms-5" src={mailImg} alt="Mail" />
                <img className="contact-img my-3 ms-5" src={phoneImg} alt="Phone"/>
                <img className="contact-img my-3 ms-5" src={locationImg} alt="Location"/>
              </Row>
              <Row>
                <p className="mt-4 pe-5">claytonstrydom.10@gmail.com</p>
                <p className="mt-4 pe-5">+27 74 759 3524</p>
                <p className="mt-4 pe-5">Port-Elizabeth, Eastern Cape, South Africa</p>
              </Row>
            </Col > 
            <Col size={12} md={6}>
                <h2>{`<Get In Touch />`}</h2>
                
                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input name="name" type="text" placeholder="First Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="surname" type="text" placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="email" type="email" placeholder="Email Address"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input name="phone" type="tel" placeholder="Phone No." />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea name = "message" rows="6" placeholder="Message" ></textarea>
                    </Col>                  
                    <Row>
                    <Col size={12} sm={6} className="px-1">
                    <button type="submit"><span>Send</span></button>
                    </Col>
                    <Col size={12} sm={6} className="pt-5 fs-5">
                      <p className={status.success === false ? "white" : "white"}>{status.message}</p>
                    </Col>                    
                    </Row>
                  </Row>
                </form>
            </Col>
        </Row>
      </Container>
    </section>
  )
}