import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import TestimonialsSlider from "@/src/components/slider/TestimonialsSlider";
import { serviceThreeSlider } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import Slider from "react-slick";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Service2 = () => {
  return (
    <Layout>
      <PageBanner pageName={"Service"} pageTitle="Services Two" />
      <section className="services-area-three overflow-hidden pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="services-content-three mb-30 rmb-65 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Amazing Services</span>
                  <h2>We Provide Best IT Services to Growth you Business</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium totam rem aperiame aque ipsa
                  quae abillo inventore veritatis etuas
                </p>
                <ul className="list-style-one pt-5">
                  <li>Comprehensive UI/UX Assessment</li>
                  <li>Deep Contextual Research and 360° Planning</li>
                  <li>Wireframing &amp; Prototyping</li>
                </ul>
                <Link legacyBehavior href="/services">
                  <a className="theme-btn mt-45">
                    View All Services <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="feature-item style-two mt-25 wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-trust" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Trusted Partner</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two wow fadeInUp delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-social-media" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Digital Marketing</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="feature-item style-two wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-technical-support" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>Technical Support</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                  <div className="feature-item style-two mt-25 wow fadeInDown delay-0-2s">
                    <div className="icon">
                      <i className="flaticon-brainstorming" />
                    </div>
                    <Link legacyBehavior href="service-details">
                      <h4>IT Consulting</h4>
                    </Link>
                    <p>
                      With over 20 year of experience 850+ employees flexion
                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="more-btn">
                        <i className="far fa-angle-right" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="servcies-bg-shape">
          <img src="assets/images/shapes/services-bg-shape.png" alt="Shape" />
        </div>
      </section>
      {/* Services Area Three end */}
      {/* Statistics Area start */}
      <section
        className="statistics-area-four text-white bgs-cover pt-80 pb-20"
        style={{
          backgroundImage: "url(assets/images/background/statistics-three.jpg)",
        }}
      >
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="statistics-content mb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Company Statistics</span>
                  <h2>Learn About Our Comapny Statistics</h2>
                </div>
                <Link legacyBehavior href="/about">
                  <a className="read-more">
                    Learn More <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="row">
                <div className="col-xl-3 col-small col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-target" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={500}
                    >
                      <Counter end={500} />
                    </span>
                    <span className="counter-title">Projects Delivered</span>
                  </div>
                </div>
                <div className="col-xl-3 col-small col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                    <i className="flaticon-target-audience" />
                    <span
                      className="count-text percent"
                      data-speed={3000}
                      data-stop="99"
                    >
                      <Counter end={98.9} decimals="1" />
                    </span>
                    <span className="counter-title"> Happy Clients</span>
                  </div>
                </div>
                <div className="col-xl-3 col-small col-6">
                  <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                    <i className="flaticon-customer-experience" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop="25"
                    >
                      <Counter end={25} />
                    </span>
                    <span className="counter-title">Years Experience</span>
                  </div>
                </div>
                <div className="col-xl-3 col-small col-6">
                  <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                    <i className="flaticon-medal" />
                    <span
                      className="count-text plus"
                      data-speed={3000}
                      data-stop={100}
                    >
                      <Counter end={100} />
                    </span>
                    <span className="counter-title">Engineers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}

      {/* What We Provide Area Start */}
      <section className="what-we-provide overflow-hidden py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Our Services</span>
            <h2>Digital Core Services</h2>
          </div>
          <Slider {...serviceThreeSlider} className="service-three-slider">
            <div className="service-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
                <a
                  // className="plus"
                  href="assets/images/services/service-three1.jpg"
                >
                  {/* <i className="fal fa-plus" /> */}
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">01</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mobile App Solutions
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Unlock the potential of mobile technology with our bespoke
                    mobile app solutions. From concept to deployment, we craft
                    intuitive and engaging apps tailored to your business needs,
                    ensuring seamless user experiences across iOS and Android
                    platforms
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="service-item-three active wow fadeInUp delay-0-4s">
              <div className="image">
                <img
                  src="assets/images/services/service-three2.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three2.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">02</span>
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Enterprise Application Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Empower your business with scalable and robust enterprise
                    applications that streamline operations and enhance
                    productivity. Our custom-built solutions are designed to
                    address your unique business challenges, driving efficiency
                    and growth
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="service-item-three wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/services/service-three3.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three3.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">03</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Ecommerce Application Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Revolutionize your online presence with our ecommerce
                    application development services. From user-friendly
                    interfaces to secure payment gateways, we create dynamic
                    ecommerce platforms that drive sales and enhance customer
                    engagement
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="service-item-three wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three1.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">04</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      UI/UX Strategy
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Elevate your digital presence with our UI/UX strategy
                    services. We combine innovative design principles with
                    user-centric strategies to create intuitive interfaces and
                    delightful user experiences, ensuring maximum engagement and
                    retention
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="service-item-three active">
              <div className="image">
                <img
                  src="assets/images/services/service-three2.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three2.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">05</span>
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Digital Marketing
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Amplify your online reach and drive growth with our digital
                    marketing solutions. From SEO and PPC campaigns to social
                    media management, we help you navigate the digital landscape
                    and connect with your target audience effectively, driving
                    traffic, leads, and conversions
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="service-item-three">
              <div className="image">
                <img
                  src="assets/images/services/service-three3.jpg"
                  alt="Service"
                />
                <a
                  className="plus"
                  href="assets/images/services/service-three3.jpg"
                >
                  <i className="fal fa-plus" />
                </a>
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">06</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      ERP Software Development
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Transform your business operations with our custom ERP
                    software development services. Tailored to your unique
                    requirements, our ERP solutions streamline processes,
                    centralize data, and provide real-time insights, empowering
                    you to make informed decisions and drive business growth
                  </p>
                  {/* <Link legacyBehavior href="/service-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="about-bg-shape">
          <img src="assets/images/background/what-we-provide.png" alt="Shape" />
        </div>
      </section>
      {/* What We Provide Area End */}
            
      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two py-130 rpy-100 rel z-1">
        <div className="container">
          <TestimonialsSlider />
        </div>
      </section>
    </Layout>
  );
};
export default Service2;
