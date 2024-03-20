import Layout from "@/layout";
import { TestimonialsSlider2 } from "@/src/components/slider/TestimonialsSlider";
import { projectSliderActive } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ProgressBar from "@/src/components/ProgressBar";
import mockup from "@/public/assets/images/about/mockup.png";
import Marquee from "react-fast-marquee";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Nav, Tab } from "react-bootstrap";

import {
  mainSliderActive,
  serviceThreeSlider,
  testimonialThreeSlider,
} from "@/src/sliderProps";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const BootstrapTooltip = styled(Tooltip)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

const icons = [
  "angular.png",
  "AngularIonic.png",
  "sql.png",
  "Mongodb-PNG-Image-HD.png",
  "dotnet.webp",
  "node.png",
  "php.png",
  "wordpress.png",
  "vbnet.png",
  "react.png",
  "native.png",
  "Python.png",
  "apple.png",
  "android-icon.webp",
  "aws.png",
  "flutter.png",
  "flutter.svg",
];

const PartnerIcon = ({ imageName }) => (
  <div className="partner-icon" style={{ padding: 30 }}>
    <img
      src={`assets/images/icons/${imageName}`}
      alt="Partner"
      style={{
        margin: 20,
        maxWidth: "100px",
        objectFit: "contain",
        mixBlendMode: "multiply",
        maxHeight: "80px",
      }}
    />
  </div>
);

const Index = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Layout header={1}>
      {/* Hero Section Start */}
      <section className="hero-area bgc-gray rel z-1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 align-self-center mb-3">
              <div className="hero-content pt-115 pb-125 rpb-0 wow fadeInUp delay-0-4s">
                <h1 style={{ fontFamily: "play" }}>
                  WE BRING SUCCESS TO YOUR GREAT BUSINESS
                </h1>
                <p>
                  Revolutionize your operations with Ask Technology's
                  cutting-edge solutions. From ERP tailored for Textile &
                  Garment Industries to Enterprise-level Goods Traders
                  Management, our suite of products is designed for excellence
                </p>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-20 wow fadeInUp delay-0-6s">
                    Explore Our Solutions{" "}
                    <i className="fas fa-long-arrow-right" />
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
                  <span className="sub-title mb-15 new-font-play">
                    About Company
                  </span>
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
      <section className="partners-area pb-100 pt-150 rmt-30 rpb-70 rel z-1">
        <div>
          <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Global Partners</span> */}
            <h2 className="new-font-play">Our Partners</h2>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <Marquee
              direction="right"
              pauseOnHover
              gradient={100}
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
            <h2 className="new-font-play">
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
                      <span style={{ color: "#FC6736" }}>TARGET - ERP </span>{" "}
                      for Textiles & Garments
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
                      <span style={{ color: "#87A922" }}>Target SCM </span> -
                      Supply Chain Management
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
                      <span style={{ color: "#EE4266" }}>Target HRMS </span> -
                      HR & Payroll Solutions
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
                      <span style={{ color: "#337357" }}>Target SCM </span> -
                      Supply Chain Management
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
            <div className="col-xl-12 col-md-12">
              <div className={`${matchesSmallScreen && "text-center"} section-title mb-60 wow fadeInUp delay-0-2s`}>
                <span className="sub-title mb-15">Our Services</span>
                <h2 style={{ fontFamily: "Oswald", color: "#EEF5FF" }}>
                  We Provide Best IT Services
                </h2>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="service-two-item mx-4 wow fadeInUp delay-0-3s">
                <BootstrapTooltip
                  title="Learn More about mobile services"
                  arrow
                  placement="bottom-end"
                >
                  <div
                    className={`${
                      matchesSmallScreen && "flex-column"
                    } d-flex   justify-content-start align-items-center gap-4`}
                  >
                    <div className="icon">
                      <img
                        src="assets/images/about/mobile-app.png"
                        className="icon"
                      />
                    </div>
                    <div className="content">
                      <h4
                        style={{ fontFamily: "Oswald" }}
                        className={`${matchesSmallScreen && "text-center"}`}
                      >
                        <Link legacyBehavior href="service-details">
                          Mobile App Solutions
                        </Link>
                      </h4>
                      <p className={`${matchesSmallScreen && "text-center"}`}>
                        Unlock the potential of mobile technology with our
                        bespoke mobile app solutions. From concept to
                        deployment, we craft intuitive and engaging apps
                        tailored to your business needs, ensuring seamless user
                        experiences across iOS and Android platforms
                      </p>
                    </div>
                  </div>
                </BootstrapTooltip>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="service-two-item mx-4 wow fadeInUp delay-0-4s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex   justify-content-start align-items-center gap-4`}
                >
                  <div className="icon">
                    <img src="assets/images/about/erp.png" className="icon" />
                    {/* <i className="flaticon-networking" /> */}
                  </div>
                  <div className="content">
                    <h4
                      style={{ fontFamily: "Oswald" }}
                      className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <Link legacyBehavior href="service-details">
                        ERP Software Development
                      </Link>
                    </h4>
                    <p className={`${matchesSmallScreen && "text-center"}`}>
                      Transform your business operations with our custom ERP
                      software development services. Tailored to your unique
                      requirements, our ERP solutions streamline processes,
                      centralize data, and provide real-time insights,
                      empowering you to make informed decisions and drive
                      business growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="service-two-item mx-4 wow fadeInUp delay-0-4s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex   justify-content-start align-items-center gap-4`}
                >
                  <div className="icon">
                    <img src="assets/images/about/crm.png" className="icon" />
                    {/* <i className="flaticon-networking" /> */}
                  </div>
                  <div className="content">
                    <h4
                      style={{ fontFamily: "Oswald" }}
                      className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <Link legacyBehavior href="service-details">
                        Enterprise Application Development
                      </Link>
                    </h4>
                    <p className={`${matchesSmallScreen && "text-center"}`}>
                      Empower your business with scalable and robust enterprise
                      applications that streamline operations and enhance
                      productivity. Our custom-built solutions are designed to
                      address your unique business challenges, driving
                      efficiency and growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="service-two-item mx-4 wow fadeInUp delay-0-6s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex   justify-content-start align-items-center gap-4`}
                >
                  <div className="icon">
                    <img
                      src="assets/images/about/ecommerce.png"
                      className="icon"
                    />
                    {/* <i className="flaticon-coding" /> */}
                  </div>
                  <div className="content">
                    <h4
                      style={{ fontFamily: "Oswald" }}
                      className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <Link legacyBehavior href="service-details">
                        Ecommerce Application Development
                      </Link>
                    </h4>
                    <p className={`${matchesSmallScreen && "text-center"}`}>
                      Revolutionize your online presence with our ecommerce
                      application development services. From user-friendly
                      interfaces to secure payment gateways, we create dynamic
                      ecommerce platforms that drive sales and enhance customer
                      engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="service-two-item mx-4 wow fadeInUp delay-0-5s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex   justify-content-start align-items-center gap-4`}
                >
                  <div className="icon">
                    {/* <i className="flaticon-logo" /> */}
                    <img src="assets/images/about/ui.png" className="icon" />
                  </div>

                  <div className="content">
                    <h4
                      style={{ fontFamily: "Oswald" }}
                      className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <Link legacyBehavior href="service-details">
                        UI/UX Strategy
                      </Link>
                    </h4>
                    <p className={`${matchesSmallScreen && "text-center"}`}>
                      Elevate your digital presence with our UI/UX strategy
                      services. We combine innovative design principles with
                      user-centric strategies to create intuitive interfaces and
                      delightful user experiences, ensuring maximum engagement
                      and retention
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-md-6">
              <div className="service-two-item mx-4 wow fadeInUp delay-0-7s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex   justify-content-start align-items-center gap-4`}
                >
                  <div className="icon">
                    {/* <i className="flaticon-seo" /> */}
                    <img src="assets/images/about/video.png" className="icon" />
                  </div>
                  <div className="content">
                    <h4
                      style={{ fontFamily: "Oswald" }}
                      className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <Link legacyBehavior href="service-details">
                        Digital Marketing
                      </Link>
                    </h4>
                    <p className={`${matchesSmallScreen && "text-center"}`}>
                      Amplify your online reach and drive growth with our
                      digital marketing solutions. From SEO and PPC campaigns to
                      social media management, we help you navigate the digital
                      landscape and connect with your target audience
                      effectively, driving traffic, leads, and conversions
                    </p>
                  </div>
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
                  <h4 style={{ fontFamily: "Oswald" }}>Discover</h4>
                  <p>
                    From your idea to our understanding, we dive deep to shape
                    the plan
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-10 wow fadeInDown delay-0-2s">
                <div className="number">02</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Planning</h4>
                  <p>
                    With clarity in mind, we map out every detail for seamless
                    execution
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-40 wow fadeInUp delay-0-2s">
                <div className="number">03</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Design &amp; Dev</h4>
                  <p>
                    Bringing ideas to life with precision in design and
                    development
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item wow fadeInDown delay-0-2s">
                <div className="number">04</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Testing</h4>
                  <p>
                    Ensuring perfection through rigorous testing for flawless
                    performance
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="work-process-item mt-50 wow fadeInUp delay-0-2s">
                <div className="number">05</div>
                <div className="content">
                  <h4 style={{ fontFamily: "Oswald" }}>Project Delivery</h4>
                  <p>
                    From final touches to delivery, we ensure excellence every
                    step of the way
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Techveel Area End */}
      {/* Techveel Area start */}
      <section className=" about-area-four pt-25 mb-5 rpt-0 rel z-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6">
              <div className="about-four-image rel z-1 mb-65 wow fadeInRight delay-0-2s">
                <div className="about-circle">
                  <img
                    src="assets/images/about/about-circle.png"
                    alt="Circle"
                  />
                  <img
                    className="text"
                    src="assets/images/about/about-circle-text.png"
                    alt="Circle Text"
                  />
                </div>
                <div className="image">
                  <img src="assets/images/about/about-four.jpg" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-10">
              <div className="about-four-content mb-65 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-50">
                  <span
                    className="sub-title mb-15"
                    style={{
                      fontFamily: "Oswald",
                      color: "#43766C",
                      fontSize: "x-large",
                      letterSpacing: "2px",
                    }}
                  >
                    TECHVEEL
                  </span>
                  <h2>
                    Our In-house Technology Training and Placement Academy
                  </h2>
                  <span className="bg-text">TECHVEEL</span>
                </div>
                {/* <Tab.Container defaultActiveKey={"about-tap1"}>
                  <Nav as={"ul"} className="nav nav-pills nav-fill mb-35">
                    <li className="nav-item">
                      <Nav.Link
                        as={"a"}
                        className="nav-link"
                        data-bs-toggle="tab"
                        href="#about-tap1"
                        eventKey="about-tap1"
                      >
                        Expert Instructors
                      </Nav.Link>
                    </li>
                  </Nav> */}
                {/* <Tab.Content className="tab-content">
                    <Tab.Pane className="tab-pane fade" eventKey="about-tap1"> */}
                <p>
                  Placement services are designed to empower individuals with
                  the skills needed to thrive in the ever-evolving tech
                  landscape. Whether you're a fresh graduate or a professional
                  looking to upskill, our diverse courses cater to all
                </p>
                <ul className="list-style-one my-30">
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Expert Instructors{" "}
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Learn from industry experts and experienced
                        professionals
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Hands-On Experience{" "}
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Gain practical skills through real-world projects
                      </span>
                    </p>
                  </li>
                  <li>
                    <p>
                      <span style={{ fontFamily: "Oswald", color: "#53BF9D" }}>
                        Placement Assistance{" "}
                      </span>
                      <br />
                      <span style={{ color: "#85A389", fontWeight: "normal" }}>
                        Our dedicated placement support helps you land your
                        dream job
                      </span>
                    </p>
                  </li>
                </ul>
                {/* <Typography variant="h6" color="#40679E">
                  Ready to embark on a transformative journey? <br />
                  Explore our courses and kickstart your tech career
                </Typography> */}

                {/* <button>
                  <p>Discover Courses</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button> */}

                <Link legacyBehavior href="/about">
                  <a
                    className="theme-btn mt-10"
                    style={{
                      color: "orange",
                      marginRight: 10,
                      boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                    }}
                  >
                    Discover Courses <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn mt-10">
                    Explore Placements <i className="fas fa-long-arrow-right" />
                  </a>
                </Link>

                {/* </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Techveel Area end */}

      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15 new-font-play">
                  Why Choose Ask Technology
                </span>
                <h5 className="my-4">
                  At Ask Technology, we understand that the right technology
                  partner can make all the difference. Here's why we stand out
                  in the crowded tech landscape
                </h5>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"wc-tap1"}>
            <div className="why-choose-tab">
              <Nav
                as={"ul"}
                className="nav nav-pills nav-fill mb-80 rmb-50 wow fadeInUp delay-0-4s"
              >
                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap1"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap1"
                  >
                    <i className="flaticon-creativity" />{" "}
                    <span>Innovation</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap2"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap2"
                  >
                    <i className="flaticon-test" /> <span>Tailoring</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap3"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap3"
                  >
                    <i className="flaticon-creativity" /> <span>Expertise</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap4"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap4"
                  >
                    <i className="flaticon-support" />{" "}
                    <span>Client-Centric</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap5"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap5"
                  >
                    <i className="flaticon-cyber-security-1" />{" "}
                    <span>End-to-End</span>
                  </Nav.Link>
                </li>

                <li className="nav-item">
                  <Nav.Link
                    as="a"
                    eventKey={"wc-tap6"}
                    className="nav-link"
                    data-bs-toggle="tab"
                    href="#wc-tap6"
                  >
                    <i className="flaticon-support" /> <span>Excellence</span>
                  </Nav.Link>
                </li>
              </Nav>

              <Tab.Content className="tab-content">
                <Tab.Pane className="tab-pane fade" eventKey="wc-tap1">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src={
                            "https://ik.imagekit.io/sathishask2024/Deconstructed.gif?updatedAt=1710852540100"
                          }
                          // src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                          className="why-choose-img "
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3 style={{ fontFamily: "oswald" }}>
                          Innovation at the Core
                        </h3>
                        <p>
                          Our commitment to innovation drives everything we do.
                          From developing cutting-edge solutions to adopting the
                          latest technologies, we ensure your business stays
                          ahead in a rapidly evolving digital landscape
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Strategic UI/UX Assessment</li>
                          <li>
                            Thorough Contextual Research and 360° Planning
                          </li>
                          <li>
                            Advanced Wireframing &amp; Prototyping Techniques
                          </li>
                        </ul>
                        {/* <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap2">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3 style={{ fontFamily: "oswald" }}>
                          Tailored Solutions, Every Time
                        </h3>
                        <p>
                          Our approach is personalized to fit your specific
                          requirements. We delve deep into understanding your
                          business intricacies to provide tailor-made solutions
                          that perfectly match your objectives. No cookie-cutter
                          approaches here – just bespoke strategies for your
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Customized Strategy Development</li>
                          <li>Thorough Needs Analysis and Consultation</li>
                          <li>Personalized Product Development</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="https://ik.imagekit.io/sathishask2024/Visionary%20technology-amico.png?updatedAt=1710852508007"
                          alt="Why Choose"
                          className="why-choose-img "
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap3">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Proven Expertise</h3>
                        <p>
                          With years of experience in IT technology services, we
                          bring a wealth of expertise to the table. Our team of
                          skilled professionals is dedicated to delivering
                          solutions that not only meet but exceed expectations
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Decades of IT Technology Services Experience</li>
                          <li>In-depth Industry Expertise and Insight</li>
                          <li>Commitment to Exceeding Client Expectations</li>
                        </ul>

                        {/* <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap4">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Client-Centric Approach</h3>
                        <p>
                          Your success is our priority. We pride ourselves on
                          our client-centric approach, ensuring open
                          communication, transparency, and a collaborative
                          partnership. Your challenges are our challenges, and
                          your victories are our victories.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Commitment to Prioritizing Your Success</li>
                          <li>
                            Emphasis on Open Communication and Transparency
                          </li>
                          <li>Building Collaborative Partnerships</li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap5">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>End-to-End Services</h3>
                        <p>
                          From web and mobile app development to ready-to-go ERP
                          products and technology training, we offer end-to-end
                          services. This holistic approach ensures that all your
                          technology needs are met under one roof.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Comprehensive Web and Mobile App Development</li>
                          <li>Ready-to-Deploy ERP Solutions</li>
                          <li>Technology Training and Support</li>
                        </ul>
                        {/* <Link legacyBehavior href="/about">
      <a className="theme-btn mt-30">
        Learn More <i className="fas fa-long-arrow-right" />
      </a>
    </Link> */}
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

                <Tab.Pane className="tab-pane fade" eventKey="wc-tap6">
                  <div className="row gap-90 align-items-center">
                    <div className="col-lg-6">
                      <div className="why-choose-content">
                        <h3>Commitment to Excellence</h3>
                        <p>
                          Excellence is not just a goal; it's a standard. We are
                          committed to delivering solutions that not only meet
                          high-quality benchmarks but set new standards in the
                          industry. Your success story is our measure of
                          success.
                        </p>
                        <ul className="list-style-one pt-5">
                          <li>Setting High-Quality Standards</li>
                          <li>Pioneering Industry-Leading Solutions</li>
                          <li>Your Success Drives Our Pursuit of Excellence</li>
                        </ul>
                        <Link legacyBehavior href="/about">
                          <a className="theme-btn mt-30">
                            Learn More <i className="fas fa-long-arrow-right" />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/about/why-choose1.jpg"
                          alt="Why Choose"
                        />
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Tab.Container>
        </div>
        <div className="why-choose-shapes">
          <img
            className="shape one"
            src="assets/images/about/why-choose-shape1.png"
            alt="Shape"
          />
          <img
            className="shape two"
            src="assets/images/about/why-choose-shape2.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Why Choose Us Area end */}

      {/* Statistics Area start */}
      <section className="statistics-area-two rel z-2 mb-130 rmb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                <span
                  className="sub-title mb-10"
                  style={{ fontFamily: "oswald" }}
                >
                  Learn About Our Company Statistics
                </span>
                {/* <h2>5,000+ Completed Projects in 41+ Countries</h2> */}
              </div>
            </div>
          </div>
          <div className="row no-gap justify-content-center">
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-3s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/programming.png"
                    alt="programming"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={500}
                  >
                    <Counter end={500} />
                  </span>
                  <span className="counter-title">Projects Delivered</span>
                  <p>
                    showcasing our commitment to excellence and client
                    satisfaction
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-7s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/review.png"
                    alt="review"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text percent"
                    data-speed={2000}
                    data-stop={98.9}
                  >
                    <Counter end={98.9} />
                  </span>
                  <span className="counter-title">Happy Clients </span>
                  <p>
                    Clients happiness is our priority, reflected in our
                    impressive 98.9% satisfaction rate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/reputation.png"
                    alt="review"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={25}
                  >
                    <Counter end={25} />
                  </span>
                  <span className="counter-title">Years of Experience</span>
                  <p>
                    and industry expertise, we bring a wealth of experience to
                    every project
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="counter-item-two counter-text-wrap wow fadeInUp delay-0-5s">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src="assets/images/statistics/teamwork.png"
                    alt="reputation"
                    style={{ maxWidth: "105px" }}
                  />
                  {/* <i className="flaticon-target" /> */}
                </div>
                <div className="content">
                  <span
                    className="count-text plus"
                    data-speed={2000}
                    data-stop={25}
                  >
                    <Counter end={100} />
                  </span>
                  <span className="counter-title">Engineers </span>
                  <p>
                    of our team is dedicated to delivering innovative solutions
                    and driving success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Area end */}

      {/* Skills Area start */}
      <section className="skills-area">
        <div className="">
          <div className="row">
            <div className="col-xl-12">
              <div className="skills-content mt-60 mb-70 rmt-0 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title text-center">
                      <span
                        className="sub-title mb-15 text-center"
                        style={{
                          fontFamily: "Oswald",
                          fontWeight: 400,
                          textAlign: "center",
                        }}
                      >
                        Our Tech Stack
                      </span>
                    </div>
                  </div>

                  <div className="col-12 mb-3">
                    <Marquee
                      direction="left"
                      pauseOnClick
                      gradient={100}
                      loop={0}
                      autoFill
                      speed={90}
                    >
                      {icons.map((icon, index) => (
                        <PartnerIcon key={index} imageName={icon} />
                      ))}
                    </Marquee>
                  </div>
                  <div className="col-lg-12 my-4">
                    <div className="section-title mb-55 container wow fadeInUp delay-0-2s">
                      {/* <span className="sub-title mb-15" style={{fontFamily:'oswald'}} >Our Tech Stack</span> */}
                      <h3
                        style={{
                          textAlign: "center",
                          fontFamily: "Play",
                          color: "#007F73",
                        }}
                      >
                        Explore the robust technologies we master, powering our
                        innovative solutions and driving digital transformation
                      </h3>
                      <span className="bg-text">TECHNOLOGY</span>
                    </div>
                  </div>
                  <div className="col-12">
                    <Marquee
                      direction="right"
                      pauseOnClick
                      gradient={100}
                      loop={0}
                      autoFill
                      speed={90}
                    >
                      {icons.map((icon, index) => (
                        <PartnerIcon key={index} imageName={icon} />
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Area end */}

   
     
      
      {/* Contact Form Section Start */}
      <section
        className="contact-form-area py-130 rpy-100 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.jpg)",
        }}
      >
        <div className="container">
          <div className="row gap-100 align-items-center">
            <div className="col-lg-7">
              <div className="contact-form bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <h3>Get In Touch With Us</h3>
                </div>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="form-style-one"
                  action="#"
                  name="contact-form"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Full name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          className="form-control"
                          defaultValue=""
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          id="emailid"
                          name="email"
                          className="form-control"
                          defaultValue=""
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={3}
                          placeholder="Message"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two mt-15 w-100"
                        >
                          send message <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Need Consultations ?</span>
                  <h2>Have A Project? We Would Love To Hear From You.</h2>
                </div>
                <div className="contact-info-part">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-map-marked-alt" />
                    </div>
                    <div className="content">
                      <span>Location</span>
                      <h5>55 Main Street, New York</h5>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <h5>
                        <a href="mailto:support@gmail.com">support@gmail.com</a>
                      </h5>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span>Hotline</span>
                      <h5>
                        <a href="calto:+000(123)45688">+000 (123) 456 88</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Section End */}
      {/* Testimonials Area Three Start */}
      <section className="testimonials-three-area py-130 rpy-100">
        <div className="container">
          <div className="row gap-80 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="testimonials-three-image rmb-55 wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/testimonials/testimonials-three.png"
                  alt="Testimonials"
                />
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="testimonials-three-wrap wow fadeInRight delay-0-2s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-10">Our Testimonials</span>
                  <h2>What Our Clients Say About Solutions</h2>
                </div>
                <Slider
                  {...testimonialThreeSlider}
                  className="testimonial-three-slider"
                >
                  <div className="testimonial-item">
                    <div className="content">
                      <div className="testi-header">
                        <h4>Excellent Works</h4>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                      </div>
                      <div className="testi-text">
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accus antiume dolorem queauy antium totam aperiam eaque
                        quaey veritatis vitaec
                      </div>
                      <div className="testi-footer">
                        <div className="icon">
                          <i className="flaticon-quotation" />
                        </div>
                        <div className="title">
                          <h4>Andrew D. Bricker</h4>
                          <span className="designation">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-item">
                    <div className="content">
                      <div className="testi-header">
                        <h4>Excellent Works</h4>
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </div>
                      </div>
                      <div className="testi-text">
                        On the other hand denounce righteous indignations and
                        dislike men who beguiled and demoralized by the charms
                        of pleasure moment blinded foresee
                      </div>
                      <div className="testi-footer">
                        <div className="icon">
                          <i className="flaticon-quotation" />
                        </div>
                        <div className="title">
                          <h4>Jose T. McMichael</h4>
                          <span className="designation">Senior Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area Three End */}


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
