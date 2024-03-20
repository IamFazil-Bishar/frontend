import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";

import Subtitle from "./../shared/Subtitle";
import experienceImg from "../assets/images/experience.png"

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeatruedTourList from "../components/featured-Tours/FeatruedTourList";
import MasonryImagesGallery from "../components/image-gallery/MasonryImagesGallery";
import Testmonials from "../components/Tesmonial/Testmonials";
import Newsletter from "../shared/Newsletter";


const Home = () => {
  return (
    <>
      {/* hero scection  */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="hero__content">
              <div className="home">
      <div className="content">
        <h5>Welcome to the world</h5>
        <h1>Visit <span className="changecontent"></span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam!</p>
        <a href="/tours">Book Place</a>
      </div>
    </div>
              </div>
            </Col>

            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* hero scection  */}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle"> What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>

            <ServiceList/>

          </Row>
        </Container>
      </section>


      {/* featured tour section  */}

      <section>
        <Container>
          <Row>
            <Col lg = "12" className="mb-5">
              <Subtitle Subtitle={"Explore"}/>
              <h2 className="featured__tour-title">Our featured toures</h2>
            </Col>
            <FeatruedTourList/>
          </Row>
        </Container>
      </section>

      {/* experience section  */}

      <section>
        <Container>
          <Row>
            <Col lg= "6">
              <div className="experience__content">
                <Subtitle  Subtitle={'Experience'}/>
                <h2>
                  with our all experience <br/> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  <br/>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Refular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg= "6">
              <div className="experience__img">
                  <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* gallery */}

      <section>
        <Container>
          <Row>
            <Col lg= "12">
              <Subtitle Subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg = "12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* testimonial section  */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle Subtitle={'Fans Love'}/>
              <h2 className="tesmonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testmonials />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  );
};

export default Home;
