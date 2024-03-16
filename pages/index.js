import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import mockup from "@/public/assets/images/about/mockup.png";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout header={1}>
      {/* Hero Section Start */}
      <section className="hero-area bgc-gray rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center">
              <div className="hero-content pt-115 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                <h1>WE BRING SUCCESS TO YOUR GREAT BUSINESS</h1>
                <p>
                  Through Technology expertise and deep industry-specific
                  insights on how technology impacts people and business
                  processes
                </p>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                    Let’s Get Started <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <div className="hero-shapes">
                  <img
                    className="shape one"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape two"
                    src="assets/images/shapes/dabble-plus.png"
                    alt="Shape"
                  />
                  <img
                    className="shape three"
                    src="assets/images/shapes/plus.png"
                    alt="Shape"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-end">
              <div className="hero-images  wow fadeInLeft">
                <img
                  src="assets/images/hero/hero-one.jpg"
                  alt="Hero"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img
            className="shape bg-lines"
            src="assets/images/shapes/hero-bg-line-shapes.png"
            alt="Shape"
          />
          <img
            className="shape right-shape wow fadeInRight delay-0-8s"
            src="assets/images/shapes/hero-right-shape.png"
            alt="Shape"
          />
        </div>
      </section>

      {/* About Area start */}
      <section className="about-area pt-150  rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content rmb-65 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">About Company</span>
                  <h3>Empowering Businesses with Innovative Solutions</h3>
                </div>
                <p>
                  At Ask Technology, we are more than just an IT services
                  company – we are your trusted partner in leveraging technology
                  to drive innovation and growth. With a relentless focus on
                  delivering exceptional solutions tailored to your unique
                  needs, we have established ourselves as a leader in the
                  industry.
                </p>
                <div className="about-btns mb-45">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn mt-15">
                      Learn More <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                  {/* <div className="hotline mt-15">
                    <i className="fas fa-phone" />
                    <div className="content">
                      <span>Hotline</span>
                      <br />
                      <a href="callto:+000(123)45688">+000 (123) 456 88</a>
                    </div>
                  </div> */}
                </div>
                <div className="row no-gap for-active">
                  <div className="col-sm-6">
                    <div className="service-item active">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon1.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          IT Consulting
                        </Link>
                      </h4>
                      <p>
                        Our IT consulting services encompass strategic planning
                        to align technology initiatives with business
                        objectives, ensuring optimal efficiency and
                        performance..
                      </p>
                      <br />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item">
                      <div className="icon">
                        <img
                          src="assets/images/services/icon2.png"
                          alt="Icon"
                        />
                      </div>
                      <h4>
                        <Link legacyBehavior href="service-details">
                          Business Growth
                        </Link>
                      </h4>
                      <p>
                        Our ERP products, tailored for textile, garment, and
                        rental management industries, streamline operations and
                        catalyze business growth through enhanced efficiency and
                        productivity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-images">
                <div className="top-part">
                  <img
                    className="wow fadeInRight delay-0-3s"
                    src="assets/images/about/about1.jpg"
                    alt="About"
                  />
                  <img
                    className="wow zoomIn delay-0-5s"
                    src="assets/images/about/about2.jpg"
                    alt="About"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
                <div className="bottom-part">
                  <img
                    className="wow fadeInDown delay-0-5s"
                    src="assets/images/about/about-dots.png"
                    alt="About"
                  />
                  <img
                    className="wow fadeInDown delay-0-3s"
                    src="assets/images/about/mockup.png"
                    alt="About"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Hero Section End */}
      {/* Partners Area start */}
      <section className="partners-area mt-60 pb-100 pt-150 rmt-30 rpb-70 rel z-1">
        <div>
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Global Partners</span> */}
            <h2>Our Partners</h2>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <Marquee
              direction="right"
              pauseOnHover
              gradient={500}
              loop={0}
              autoFill
            >
              <div style={{ padding: 20 }}>
                <img
                  src="assets/images/partners/partner1.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                />
              </div>

              <div style={{ padding: 30 }}>
                <img
                  src="assets/images/partners/partner2.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                />
              </div>

              <div style={{ padding: 30 }}>
                <img
                  src="assets/images/partners/partner3.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                />
              </div>

              <div style={{ padding: 30 }}>
                <img
                  src="assets/images/partners/partner4.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                />
              </div>

              <div style={{ padding: 30 }}>
                <img
                  src="assets/images/partners/partner5.png"
                  alt="Partner"
                  style={{ margin: 20 }}
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      {/* Partners Area end */}
      {/* Project Area start */}
      <section
        className="project-area overflow-hidden bgc-lighter  rpt-100 rel z-1"
        style={{ paddingTop: 80 }}
      >
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Learn Our Project</span> */}
            <h2>
              PRODUCTS & <span style={{ color: "#9376E0" }}>SERVICES</span>
            </h2>
          </div>

          <Slider {...projectSliderActive} className="project-slider-active">
            {/*1,ERP for Textile & Garment Industries - 'TARGET'{" "} */}
            <div className="project-slider-item">
              <div className="row">
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                     <span style={{color:'#FC6736'}}>TARGET - ERP </span>  for Textiles & Garments
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Unleashing Excellence in Textiles & Garments Industries
                    </span>
                  </h3>
                  <p className="my-3">
                    Elevate your textile and garment manufacturing with TARGET,
                    our comprehensive ERP solution. Tailored for manufacturers
                    and exporters, TARGET streamlines production processes,
                    optimizes inventory management, and simplifies export
                    documentation. Experience efficiency like never before, and
                    watch your operations seamlessly align with global standards
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-networking" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Streamlined Production
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-coding" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Real-Time Inventory
                        </Link>
                      </h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-app-development" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Effortless Export
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-logo" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Seamless Integration
                        </Link>
                      </h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link legacyBehavior href="/project-details">
                        <a className="theme-btn style-two ">
                          Read More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img src="assets/images/about/mockup.png" alt="Video" />                
                </div>
              </div>
            </div>

            {/* 2. Target SCM - Supply Chain Management */}
            <div className="project-slider-item">
              <div className="row">
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img src="assets/images/about/mockup.png" alt="Video" />
                </div>
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                    <span style={{color:'#87A922'}}>Target SCM  </span> - Supply Chain Management
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Powering Your Supply Chain Dynamics
                    </span>
                  </h3>
                  <p className="my-3">
                    Transform your supply chain with Target SCM, a versatile
                    solution applicable across industries. Boost purchase and
                    distribution processes, and gain real-time visibility into
                    your supply chain. With online tools for customer purchase
                    orders and tracking, Target SCM ensures efficiency and
                    transparency in every link of your supply chain
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-networking" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Optimized Stock
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-coding" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Efficient Order Fulfilment
                        </Link>
                      </h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-app-development" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Collaborative Vendor Sourcing
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-logo" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Live Monitoring
                        </Link>
                      </h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link legacyBehavior href="/project-details">
                        <a className="theme-btn style-two ">
                          Read More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. HRMS - Target HR & Payroll Solutions */}
            <div className="project-slider-item">
              <div className="row">
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                    <span style={{color:'#EE4266'}}>Target HRMS  </span> - HR & Payroll Solutions
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Empowering Your Workforce, Streamlining Payroll
                    </span>
                  </h3>
                  <p className="my-3">
                    Say goodbye to HR and payroll complexities with Target HRMS.
                    Tailored for diverse industries, especially manufacturing
                    and compliance-focused factories, our solution provides a
                    complete HR and payroll package. Experience the ease of
                    mobile-responsive dashboards, ensuring that your workforce
                    management is as dynamic as your business
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-networking" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Regulatory Compliance
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-coding" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Automated Payroll
                        </Link>
                      </h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-app-development" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Self Service Portal
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-logo" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Book Free Demo
                        </Link>
                      </h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link legacyBehavior href="/project-details">
                        <a className="theme-btn style-two ">
                          Read More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img src="assets/images/about/mockup.png" alt="Video" />
                </div>
              </div>
            </div>

            {/* 2. Target SCM - Supply Chain Management */}
            <div className="project-slider-item">
              <div className="row">
                <div className="col-xl-4 col-md-12 d-flex justify-content-center align-items-center">
                  <img src="assets/images/about/mockup.png" alt="Video" />
                </div>
                <div className="col-xl-8 col-md-12  content">
                  <h3>
                    <span style={{ fontFamily: "Oswald", color: "#31363F" }}>
                    <span style={{color:'#337357'}}>Target SCM   </span> - Supply Chain Management
                    </span>
                    <br />
                    <span style={{ fontSize: "large", color: "#0E21A0" }}>
                      Powering Your Supply Chain Dynamics
                    </span>
                  </h3>
                  <p className="my-3">
                    Transform your supply chain with Target SCM, a versatile
                    solution applicable across industries. Boost purchase and
                    distribution processes, and gain real-time visibility into
                    your supply chain. With online tools for customer purchase
                    orders and tracking, Target SCM ensures efficiency and
                    transparency in every link of your supply chain
                  </p>

                  <div className="row medium-gap m-1 mt-2">
                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-networking" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Optimized Stock
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0 mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-coding" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Efficient Order Fulfilment
                        </Link>
                      </h6>
                    </div>
                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-app-development" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Collaborative Vendor Sourcing
                        </Link>
                      </h6>
                    </div>

                    <div className="col-xl-6 col-md-6 p-0 m-0  mb-3 d-flex justify-content-start align-items-center gap-3 service-two-item wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-logo" />
                      </div>
                      <h6>
                        <Link legacyBehavior href="service-details">
                          Live Monitoring
                        </Link>
                      </h6>
                    </div>

                    <div
                      className="content col-12 mt-3 "
                      style={{ padding: 0, cursor: "pointer" }}
                    >
                      <Link legacyBehavior href="/project-details">
                        <a className="theme-btn style-two ">
                          Read More <i className="fas fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="project-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/project-left.png"
            alt="shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/project-right.png"
            alt="shape"
          />
        </div>
      </section>
      {/* Project Area end */}
      {/* Services Area start */}
      <section className="services-area bgc-gray text-white pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-4 col-md-6">
              <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Latest Services</span>
                <h2>We Provide Best IT Services</h2>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-networking" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Digital Consulting
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-6s">
                <div className="icon">
                  <i className="flaticon-coding" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Design &amp; Development
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="flaticon-app-development" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Mobile App Solutions
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="flaticon-logo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      UX/UI Design Strategy
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-two-item wow fadeInUp delay-0-7s">
                <div className="icon">
                  <i className="flaticon-seo" />
                </div>
                <div className="content">
                  <h4>
                    <Link legacyBehavior href="service-details">
                      SEO Optimization
                    </Link>
                  </h4>
                  <p>
                    On the other hand we denounce withteous indignation and
                    dislike men who beguilede demoralized by the charms pleasure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Area end */}
      {/* Work Process Area start */}
      <section className="work-process-area pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
          <span className="sub-title mb-15">Working Process</span>
          <h2>Industry Best Practices to the Core</h2>
        </div>
        <div className="work-process-line text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">01</div>
                <div className="content">
                  <h4>Discover</h4>
                  <p>
                    We emphasize planning get everythin documente nothing
                    assumption
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4>Planning</h4>
                  <p>
                    Our design approach is to simplify. We embrace creating
                    something.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4>Design &amp; Dev</h4>
                  <p>
                    At this step, we cater to requirement backed web services
                    developmenc
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4>Testing</h4>
                  <p>
                    On the other denounce with righteou indignation dislike
                    beguile demore
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4>Project Deliver</h4>
                  <p>
                    We denounce righteous indignation and dislike men who
                    beguiled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Work Process Area end */}
      {/* Team Area start */}
      <section className="team-area pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Team Member</span>
            <h2>Amazing Team Members</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-2s">
                <img src="assets/images/team/member1.jpg" alt="Team" />
                <h4>Johnathan P. Bailey</h4>
                <span className="designation">UX/UI Designer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-4s">
                <img src="assets/images/team/member2.jpg" alt="Team" />
                <h4>Mark M. Hughes</h4>
                <span className="designation">Web Developer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-6s">
                <img src="assets/images/team/member3.jpg" alt="Team" />
                <h4>Donald B. Mitchell</h4>
                <span className="designation">Software Engineer</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="team-member wow fadeInUp delay-0-8s">
                <img src="assets/images/team/member4.jpg" alt="Team" />
                <h4>Bennie N. Bannister</h4>
                <span className="designation">Senior Consultant</span>
                <div className="social-style-two">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Statistics Area start */}
      <section className="statistics-area rel z-2">
        <div className="container">
          <div
            className="statistics-inner bgs-cover text-white p-80 pb-20"
            style={{
              backgroundImage: "url(assets/images/background/statistics.jpg)",
            }}
          >
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
                        data-stop={2563}
                      >
                        <Counter end={2563} />
                      </span>
                      <span className="counter-title">Project Complate</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-target-audience" />
                      <span
                        className="count-text percent"
                        data-speed={3000}
                        data-stop="98.9"
                      >
                        <Counter end={98.9} decimals={1} />
                      </span>
                      <span className="counter-title">Clinets Happy</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInDown delay-0-3s">
                      <i className="flaticon-customer-experience" />
                      <span
                        className="count-text plus"
                        data-speed={3000}
                        data-stop="35.6"
                      >
                        <Counter end={35.6} decimals={1} />
                      </span>
                      <span className="counter-title">Years Experience</span>
                    </div>
                  </div>
                  <div className="col-xl-3 col-small col-6">
                    <div className="counter-item counter-text-wrap wow fadeInUp delay-0-3s">
                      <i className="flaticon-medal" />
                      <span
                        className="count-text k-plus"
                        data-speed={3000}
                        data-stop={63}
                      >
                        <Counter end={63} />
                      </span>
                      <span className="counter-title">Award Winning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}
      {/* Pricing Plan Area start */}
      <section className="price-plan-area bgc-lighter mt-30 rmt-0 pt-220 pb-100 rpb-70 rel z-1">
        <div className="container pt-20">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Amazing Pricing Plan</span>
            <h2>Affordable Pricing Packages</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-2s">
                <span className="badge">Best Package</span>
                <h4 className="title">Basic Plan</h4>
                <span className="price-count">5 Services Included</span>
                <span className="price">29.85</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-4s">
                <span className="badge">Best Package</span>
                <h4 className="title">standard Plan</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">49.64</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-plan-item wow fadeInUp delay-0-6s">
                <span className="badge">Best Package</span>
                <h4 className="title">Golden Package</h4>
                <span className="price-count">7 Services Included</span>
                <span className="price">98.73</span>
                <Link legacyBehavior href="/pricing">
                  <a className="theme-btn style-two">
                    Choose Package <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <h5>This Plan Included :</h5>
                <ul>
                  <li>
                    <a href="#">Premium Quality Supports (24/7)</a>
                  </li>
                  <li>
                    <a href="#">IT Consultations (Business Growth)</a>
                  </li>
                  <li>
                    <a href="#">Web Design &amp; Development</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization (SEO )</a>
                  </li>
                  <li>
                    <a href="#">User &amp; Market Research</a>
                  </li>
                  <li>
                    <a href="#">UX/UI Strategy (Design &amp; Develop)</a>
                  </li>
                  <li>
                    <a href="#">Product Engineering</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="price-shapes">
          <img
            className="shape one wow fadeInLeft delay-0-5s"
            src="assets/images/shapes/price-left.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/price-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Pricing Plan Area end */}
      {/* Testimonials Area start */}
      <section className="testimonials-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="testimonial-left-part rmb-85 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <TestimonialsSlider2 />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="testimonial-right-part wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonial.jpg"
                  alt="Testimonial"
                />
                <div className="testi-image-over">
                  <h3>We Have More 3248+ Reviews From Global Clients</h3>
                  <img
                    src="assets/images/testimonials/signature.png"
                    alt="Signature"
                  />
                </div>
                <div className="dot-shapes">
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                  <img
                    src="assets/images/testimonials/testimonial-dots.png"
                    alt="Dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area end */}
      {/* Blog Area start */}
      <section className="blog-area pb-150 mb-30 rmb-0 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-15">Our Blog &amp; News</span>
            <h2>Latest Blog, New &amp; Articles</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      Voice Usabilit Consideration Partially Visually Hidden
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author.jpg" alt="Author" />
                    <i>Post By </i>
                    <a href="#">John M. Brecht</a>
                  </div>
                  <p>
                    We denounce righteou indignation and dislike men beguile and
                    demoralize charms
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      How Create Vanil Java Script Gant Chart Adding Task
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author.jpg" alt="Author" />
                    <i>Post By </i>
                    <a href="#">John M. Brecht</a>
                  </div>
                  <p>
                    We denounce righteou indignation and dislike men beguile and
                    demoralize charms
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item style-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <ul className="blog-meta">
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Jule 26, 2022</a>
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />{" "}
                      <a href="#">Comments (25)</a>
                    </li>
                  </ul>
                  <h4>
                    <Link legacyBehavior href="blog-details">
                      Smashing Podcast Episode 47 Soueidan Accessibility
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author.jpg" alt="Author" />
                    <i>Post By </i>
                    <a href="#">John M. Brecht</a>
                  </div>
                  <p>
                    We denounce righteou indignation and dislike men beguile and
                    demoralize charms
                  </p>
                  <Link legacyBehavior href="/blog-details">
                    <a className="read-more">
                      Read More <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
    </Layout>
  );
};
export default Index;
