import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import FaqHire from "@/src/components/faqHire";
import { Nav, Tab } from "react-bootstrap";
import {
  mainSliderActive,
  serviceThreeSlider,
  testimonialThreeSlider,
  servicesFiveActive,
  projectThreeActive,
  testimonialSlider,
} from "@/src/sliderProps";

import Marquee from "react-fast-marquee";
import Link from "next/link";
import Slider from "react-slick";
import { Container, Paper, Typography } from "@mui/material";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { BsCashCoin } from "react-icons/bs";
import { CgDisplayFlex } from "react-icons/cg";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";

import { MdOutlinePrivacyTip } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";

import { LiaBusinessTimeSolid } from "react-icons/lia";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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

const Hire_a_developer = () => {
  const theme = useTheme();
  const matchesBigScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Layout>
      {/* <PageBanner pageName={"Hire a Developer"} /> */}
      <section className="about-area-five pb-80 rpt-100 rpb-65 rel z-1">
        <Container>
          <div className="row align-items-center gap-100">
            {matchesBigScreen && (
              <div className="col-lg-6">
                <div className="about-five-images mt-55 rel z-1 wow fadeInRight delay-0-2s">
                  <img
                    src="assets/images/hire/intro1.jpg"
                    alt="About"
                    style={{ borderRadius: 20, objectFit: "contain" }}
                  />
                  <img
                    src="assets/images/hire/intro2.jpg"
                    alt="About"
                    style={{ borderRadius: 20, objectFit: "contain" }}
                  />
                  <img
                    className="abut-bg-shape"
                    src="assets/images/about/about-five-bg.png"
                    alt="Shape"
                  />
                </div>
              </div>
            )}
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  <span className="sub-title mb-15">Your Developer Awaits</span>
                  <h2 className="text-gradient-title3">
                    Access Our Skilled Developers Effortlessly
                  </h2>
                </div>
                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-trophy" />
                      </div>
                      <h4 className="text-gradient-title2">
                        Expert Developer Hiring
                      </h4>
                      <p>
                        Gain access to seasoned professionals skilled in various
                        technologies, ready to integrate seamlessly into your
                        projects.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
                      <div className="icon">
                        <i className="flaticon-pie-chart" />
                      </div>
                      <h4 className="text-gradient-title2">
                        Remote Dev Solutions
                      </h4>
                      <p>
                        Our dedicated developers, based in India, deliver
                        cost-effective solutions without compromising quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="services-area-six py-100 rpb-70 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-45">
            <h3 className="text-black-50">Why Hire a Dedicated Developer ? </h3>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-2s">
                <div className="icon">
                  <BsPersonWorkspace />
                </div>
                <h4>Expertise</h4>
                <p>
                  Tap into specialized skills and expertise tailored to your
                  project's unique requirements.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="flaticon-mission" />
                </div>
                <h4>Dedicated Focus</h4>
                <p>
                  Benefit from a dedicated developer's focused attention solely
                  on your project's success.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <BsCashCoin />
                </div>
                <h4>Cost-Efficiency</h4>
                <p>
                  Maximize cost savings by paying only for the resources you
                  need, without the overhead costs of in-house hiring.
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <CgDisplayFlex />
                </div>
                <h4>Flexibility</h4>
                <p>
                  Adapt quickly to changing project needs with the flexibility
                  to scale your team up or down as required.
                </p>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <IoMdCheckmarkCircleOutline />
                </div>
                <h4>Quality Assurance</h4>
                <p>
                  Ensure consistent quality and timely delivery with a dedicated
                  developer invested in your project's success.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item-six wow fadeInUp delay-0-6s">
                <div className="icon">
                  <RiTeamLine />
                </div>
                <h4>Team Integration</h4>
                <p>
                  Integrate dedicated developers seamlessly into your team for
                  enhanced productivity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Area start */}
      <section className="px-3 ">
        <div className="row">
          <div className="col-xl-12">
            <div className="skills-content mb-70 rmt-0 rel z-1 wow fadeInLeft delay-0-2s">
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
                    <h2
                      style={{
                        textAlign: "center",
                        fontFamily: "oswald",
                        color: "#007F73",
                      }}
                      className="text-gradient-title2"
                    >
                      Explore the robust technologies we master, powering our
                      innovative solutions and driving digital transformation
                    </h2>
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
      </section>
      {/* Skills Area end */}

      {/* What We Provide Area End */}
      <section className="services-area-five pt-30 rpt-35  rpb-100 rel z-2">
        <div className="container-fluid">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-10">Our Services</span> */}
            <h2>Benefits of Hiring from Us</h2>
            <span className="bg-text">Service</span>
          </div>
          <Slider {...servicesFiveActive} className="services-five-active">
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img
                src="assets/images/hire/slide1.jpg"
                alt="Services"
                style={{ objectFit: "cover", minHeight: "100%" }}
              />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <BsPersonWorkspace />
                  </div>
                  <h4>
                    {" "}
                    <Link legacyBehavior href="#">
                      Expert Developers
                    </Link>{" "}
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Each dedicated developer is handpicked for their expertise
                    and qualifications, ensuring top-notch performance and
                    results
                  </p>
                </div>
              </div>
              <span className="bg-text">Expert</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-4s">
              <img src="assets/images/hire/slide2.jpg" alt="Services" />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <RiUserLocationFill />
                  </div>
                  <h4>
                    {" "}
                    <Link legacyBehavior href="#">
                      Remote-Friendly
                    </Link>{" "}
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Our developers are 100% remote-friendly, adept at working
                    seamlessly across different time zones to accommodate your
                    needs.
                  </p>
                </div>
              </div>
              <span className="bg-text">Remote</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-6s">
              <img src="assets/images/hire/slide3.jpg" alt="Services" />
              <div className="content">
                <div className="icon-title">
                  <div className="icon d-flex justify-content-center align-items-center ">
                    <GiReceiveMoney />
                  </div>
                  <h4>
                    {" "}
                    <Link legacyBehavior href="#">
                      Cost Saving
                    </Link>{" "}
                  </h4>

                  <h4>Cost Saving</h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Enjoy significant cost <br />
                    savings compared to in-house hiring, without compromising on
                    talent or reliability.
                  </p>
                </div>
              </div>
              <span className="bg-text">Saving</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-8s">
              <img src="assets/images/hire/slide4.jpg" alt="Services" />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <i className="flaticon-seo" />
                  </div>

                  <h4>
                    <Link legacyBehavior href="#">
                      Flexibility
                    </Link>{" "}
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Scale your team up or down as needed, with the flexibility
                    to start, pause, or stop services with just 15 days' notice
                  </p>
                </div>
              </div>
              <span className="bg-text">Flexibility</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img src="assets/images/hire/slide5.jpg" alt="Services" />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <MdOutlinePrivacyTip />
                  </div>
                  <h4>
                    {" "}
                    <Link legacyBehavior href="#">
                      Strict Non-Disclosure
                    </Link>{" "}
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Rest assured confidentiality is top priority, developers
                    bound strong non-disclosure agreements
                  </p>
                </div>
              </div>
              <span className="bg-text">Strict</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img src="assets/images/hire/slide6.jpg" alt="Services" />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <MdConnectWithoutContact />
                  </div>
                  <h4>
                    {" "}
                    <Link legacyBehavior href="#">
                      Effective Communication
                    </Link>{" "}
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Seamless communication ensures you're informed and involved
                    throughout development
                  </p>
                </div>
              </div>
              <span className="bg-text">Effective</span>
            </div>
            <div className="service-item-five wow fadeInUp delay-0-2s">
              <img src="assets/images/hire/slide7.jpg" alt="Services" />
              <div className="content">
                <div className="icon-title">
                  <div className="icon">
                    <LiaBusinessTimeSolid />
                  </div>
                  <h4>
                    {" "}
                    <Link legacyBehavior href="#">
                      Minimum Commitment
                    </Link>{" "}
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Hire a developer for as little as one month or for as long
                    as your project requires, with no long-term commitments.
                  </p>
                </div>
              </div>
              <span className="bg-text">Commitment</span>
            </div>
          </Slider>
        </div>
      </section>

      <section className="about-area-five pt-100 rpt-100 rpb-65 rel z-1">
        <Container>
          <div className="row align-items-center gap-100">
            <div className="col-lg-12">
              <div className="about-content mt-55 rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title text-center rmb-40">
                  <span className="sub-title mb-15">
                    Find Your Perfect Developer
                  </span>
                  <h3 className="text-gradient-title2">
                    Discover Highly Skilled Developers with Ease
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className=" d-flex justify-content-center align-items-center gap-2  wow fadeInUp delay-0-2s">
                <img src="assets/images/hire/steps.png" alt="steps" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* FAQs Area end */}
      {/* Contact Form Section Start */}
      <section
        className="contact-form-area bg-white  pt-50 pb-130 rpy-100"
        style={{ backgroundColor: "white" }}
      >
        <Container component={Paper} elevation={3}>
          <div className="row bg-white align-items-center">
            <div className="col-lg-8">
              <div className=" bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                <div className="section-title mb-30">
                  <h3>
                    Reach Out to Us for{" "}
                    <span className="text-gradient-title2 ">DEVELOPER</span>{" "}
                    Hiring
                  </h3>
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
            {matchesBigScreen && (
              <div className="col-lg-4 bg-white">
                <div className="contact-right-image wow fadeInLeft delay-0-2s">
                  <img
                    src="assets/images/background/bg2.jpg"
                    alt="FAQs"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      <section className="faq-page-area py-100 rpt-100 rel z-1">
        <Container>
          <div className="section-title mb-45">
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqHire accordions={[1, 2, 3, 4, 5]} />
        </Container>
      </section>

      {/* Testimonials Area Two start */}
      <section className="testimonials-area-two pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section-title text-center mb-45 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Clients Feedback</span>
                <h2>What Our Clients Say Us</h2>
              </div>
            </div>
          </div>
          <Slider {...testimonialSlider} className="testimonial-slider">
            <div className="testimonial-item wow fadeInUp delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author1.jpg"
                  alt="Author"
                />
              </div>
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
                  Sed ut perspiciatis unde omnis iste natus voluptatem accus
                  antiume dolorem queauy antium totam aperiam eaque quaey
                  abillosa inventore veritatis vitaec
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
            <div className="testimonial-item wow fadeInUp delay-0-4s">
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
                  On the other hand denounce righteous indignations and dislike
                  men who beguiled and demoralized by the charms of pleasure
                  moment blinded foresee
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
            <div className="testimonial-item wow fadeInUp delay-0-6s">
              <div className="image">
                <img
                  src="assets/images/testimonials/testi-author4.jpg"
                  alt="Author"
                />
              </div>
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
                  Unde omnis iste natus voluptatem accus antiume dolorem queauy
                  antium totam aperiam eaque quaey abillosa inventore veritatis
                  etuarchite beatae vitaec
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
          </Slider>
        </div>
      </section>
      {/* Testimonials Area Two end */}
    </Layout>
  );
};
export default Hire_a_developer;
