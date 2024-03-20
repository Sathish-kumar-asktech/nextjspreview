import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { JeenaAccordion2 } from "@/src/components/JeenaAccordion";
import Link from "next/link";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ServiceDetails = () => {
  const theme = useTheme();
  const matchesSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const accordionData = [
    { id: 1, title: "Why Get Our IT Services ?" },
    { id: 2, title: "BestTeam Member Provider ?" },
    { id: 3, title: "Leanr About Our Company ?" },
    { id: 4, title: "Payment Method ?" },
  ];
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      {/* About Area start */}
      <section className="about-area-three mt-120  pt-25 rpt-0 pb-100 rpb-65 rel z-1">
        <div className="container">
          <div className="row align-items-center gap-100">
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-60 rmb-40">
                  {/* <span className="sub-title mb-15">About ASK</span> */}
                  <h2 style={{ fontFamily: "oswald", color: "#637A9F" }}>
                    <span style={{ color: "#1D24CA" }}>ASK Technology,</span>{" "}
                    Empowering Businesses with Innovative Solutions
                  </h2>
                </div>
                <p>
                  At Ask Technology, we are more than just an IT services
                  company – we are your trusted partner in leveraging technology
                  to drive innovation and growth. With a relentless focus on
                  delivering exceptional solutions tailored to your unique
                  needs, we have established ourselves as a leader in the
                  industry.
                </p>

                <div className="row gap-40">
                  <div className="col-md-6">
                    <div className="service-item style-three">
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
                      {/* <Link legacyBehavior href="/service-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="service-item style-three">
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
                      {/* <Link legacyBehavior href="/service-details">
                        <a className="read-more">
                          Read More <i className="far fa-arrow-right" />
                        </a>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three-image rel z-1 mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/about/about-three.jpg"
                  alt="About"
                  style={{ borderRadius: "10%" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="about-bg-shape">
          <img src="assets/images/background/about-bg-shape.png" alt="About" />
        </div>
      </section>
      {/* About Area end */}

      <section className="services-area bg-none text-white pt-75 pb-10 rel z-1">
        <div className="container">
          <div className="row medium-gap">
            <div className="col-xl-6 col-md-6">
              <div className="service-two-item mx-4 wow fadeInUp delay-0-3s">
                <div
                  className={`${
                    matchesSmallScreen && "flex-column"
                  } d-flex   justify-content-start align-items-center gap-4`}
                >
                  <div className="icon">
                    <img
                      src="https://ik.imagekit.io/sathishask2024/20943892.jpg?updatedAt=1710941958371"
                      className="icon"
                    />
                  </div>
                  <div className="content">
                    <h2
                      style={{ fontFamily: "oswald", color: "#637A9F" }}
                      className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <span style={{ color: "#1D24CA" }}></span> Our Mission
                    </h2>
                    <p className={`${matchesSmallScreen && "text-center"}`}>
                      At Ask Technology, we envision a future where innovation
                      and technology empower businesses to achieve their fullest
                      potential. Our vision is to be the leading force driving
                      digital transformation, revolutionizing industries, and
                      shaping the future of business worldwide
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
                    <img
                      src="https://ik.imagekit.io/sathishask2024/Wavy_Bus-18_Single-11.jpg?updatedAt=1710941958118"
                      className="icon"
                    />
                  </div>
                  <div className="content">
                    <h4
                      style={{ fontFamily: "Oswald" }}
                      className={`${matchesSmallScreen && "text-center"}`}
                    >
                      <Link legacyBehavior href="service-details">
                        Our Vision
                      </Link>
                    </h4>
                    <p className={`${matchesSmallScreen && "text-center"}`}>
                      Our mission at Ask Technology is to empower businesses
                      with transformative technology solutions that enhance
                      efficiency, drive growth, and foster success. Through our
                      expertise, innovation, and commitment to excellence, we
                      strive to deliver unparalleled value to our clients,
                      enabling them to thrive in a rapidly evolving digital
                      landscape
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details-area m-5 pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-12">
              <div className="service-details-content">
                <div className="section-title mb-30 text-center">
                  <h2>Why Choose Ask Technology</h2>
                </div>
                <p className="text-center text-primary">
                  At Ask Technology, we understand that the right technology
                  partner can make all the difference. Here's why we stand out
                  in the crowded tech landscape
                </p>

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
                        latest technologies, we ensure your business stays ahead
                        in a rapidly evolving digital landscape
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Strategic UI/UX Assessment</li>
                        <li>Thorough Contextual Research and 360° Planning</li>
                        <li>
                          Advanced Wireframing &amp; Prototyping Techniques
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3 style={{ fontFamily: "oswald" }}>
                        Tailored Solutions, Every Time
                      </h3>
                      <p>
                        One size doesn't fit all. We take the time to understand
                        your unique business needs and craft solutions that
                        align seamlessly with your goals. Our suite of products
                        is not just off-the-shelf; it's customized for your
                        success
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
                        src="https://ik.imagekit.io/sathishask2024/Brainstorming.gif?updatedAt=1710939131692"
                        alt="Why Choose"
                        className="why-choose-img "
                      />
                    </div>
                  </div>
                </div>

                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img
                        src={
                          "https://ik.imagekit.io/sathishask2024/Analytics.gif?updatedAt=1710938626974"
                        }
                        // src="assets/images/about/why-choose1.jpg"
                        alt="Why Choose"
                        className="why-choose-img "
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

                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>Client-Centric Approach</h3>
                      <p>
                        Your success is our priority. We pride ourselves on our
                        client-centric approach, ensuring open communication,
                        transparency, and a collaborative partnership. Your
                        challenges are our challenges, and your victories are
                        our victories.
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Commitment to Prioritizing Your Success</li>
                        <li>Emphasis on Open Communication and Transparency</li>
                        <li>Building Collaborative Partnerships</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="why-choose-image rmt-55">
                      <img
                        src="https://ik.imagekit.io/sathishask2024/Customer%20relationship%20management%20(1).gif?updatedAt=1710938626955"
                        alt="Why Choose"
                        className="why-choose-img "
                      />
                    </div>
                  </div>
                </div>

                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-image rmb-55">
                      <img
                        src={
                          "https://ik.imagekit.io/sathishask2024/Software%20integration.gif?updatedAt=1710938987196"
                        }
                        alt="Why Choose"
                        className="why-choose-img "
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
                        technology needs are met under one roof
                      </p>
                      <ul className="list-style-one pt-5">
                        <li>Comprehensive Web and Mobile App Development</li>
                        <li>Ready-to-Deploy ERP Solutions</li>
                        <li>Technology Training and Support</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row gap-90 align-items-center">
                  <div className="col-lg-6">
                    <div className="why-choose-content">
                      <h3>Commitment to Excellence</h3>
                      <p>
                        Excellence is not just a goal; it's a standard. We are
                        committed to delivering solutions that not only meet
                        high-quality benchmarks but set new standards in the
                        industry. Your success story is our measure of success
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
                        src="https://ik.imagekit.io/sathishask2024/Customer%20relationship%20management.gif?updatedAt=1710938627031"
                        alt="Why Choose"
                        className="why-choose-img "
                      />
                    </div>
                  </div>
                </div>

                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>Innovation at the Core</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Strategic UI/UX Assessment</li>
                      <li>Thorough Contextual Research and 360° Planning</li>
                      <li>Advanced Wireframing & Prototyping Techniques</li>
                    </ul>
                  </div>
                </div>

                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Our commitment to innovation drives everything we do. From
                      developing cutting-edge solutions to adopting the latest
                      technologies, we ensure your business stays ahead in a
                      rapidly evolving digital landscape
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                </div>
                <h3>Service Management</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit au fugit sed quia consequun tur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque quisquam est, qui
                  dolorem epsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora sncidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion2 accordionsData={accordionData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details-area pt-130 rpt-100 pb-115 rpb-85">
        <div className="container">
          <div className="row gap-100">
            <div className="col-lg-8">
              <div className="service-details-content">
                <div className="section-title mb-30">
                  <h2>Web Design &amp; Development</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudtium totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  sit aspernatur aut odit au fugit sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. Neque
                  quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem. Ut ene minima veniam, quis nostrum exercitationem
                  ullam corporis suscipit laboriosam aliquid exea commodi
                  consequatur
                </p>
                <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/services/service-details.jpg"
                    alt="Service Details"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <h3>We Provide Best IT Services to Growth you Business</h3>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <ul className="list-style-one">
                      <li>Comprehensive UI/UX Assessment</li>
                      <li>Deep Contextual Research &amp; Planning</li>
                      <li>Wireframing &amp; Prototyping</li>
                    </ul>
                  </div>
                </div>
                <div className="row pb-30">
                  <div className="col-md-6 mb-30 wow fadeInLeft delay-0-2s">
                    <p>
                      Aperiam eaque ipsa quae ab illo inventore veritatis quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit au
                      fugit sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur, adipisci velit,
                      sed quia non numquam eius modi tempora incidunt ut labore
                      et dolore magnam aliquam quaerat voluptatem minima
                      veniamla
                    </p>
                  </div>
                  <div className="col-md-6 mb-30 wow fadeInRight delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/services/service-middle.jpg"
                        alt="Service"
                      />
                    </div>
                  </div>
                </div>
                <h3>Service Management</h3>
                <p>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit au fugit sed quia consequun tur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque quisquam est, qui
                  dolorem epsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora sncidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </p>
                <div
                  className="faq-accordion pt-20 wow fadeInUp delay-0-2s"
                  id="faq-accordion"
                >
                  <JeenaAccordion2 accordionsData={accordionData} />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-sidebar">
                <div className="widget widget-category wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Services Category</h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="services">
                        IT Consulting
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        Product Design
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        SEO Optimization
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="services">
                        UI/UX Strategy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="widget widget-cta"
                  style={{
                    backgroundImage:
                      "url(assets/images/widgets/cta-widget-bg.jpg)",
                  }}
                >
                  <span className="h5">Let's Work Together</span>
                  <h2>IT Service Agency</h2>
                  <Link legacyBehavior href="/contact">
                    <a className="theme-btn style-four">
                      Contact Us <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                  <br />
                  <a href="callto:+000(123)45688" className="number">
                    <i className="fas fa-phone" /> +000 (123) 456 88
                  </a>
                  <img
                    className="bg-shape"
                    src="assets/images/widgets/cta-bg-lines.png"
                    alt="Shape"
                  />
                </div>
                <div className="widget widget-download wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">Download</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Download pdf <i className="far fa-file-pdf" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Download doc <i className="far fa-file-word" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Area end */}

      {/* Next Prev Service start */}
      <div className="next-prev-service pb-80 rpb-50">
        <div className="container">
          <hr />
          <div className="next-prev-service mt-80">
            <div className="next-prev-item wow fadeInLeft delay-0-2s">
              <div className="image">
                <img
                  src="assets/images/services/service-prev.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <h4>
                  <Link legacyBehavior href="service-details">
                    Product Engineering
                  </Link>
                </h4>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <Link legacyBehavior href="/services2">
              <a className="show-all" />
            </Link>
            <div className="next-prev-item wow fadeInRight delay-0-2s">
              <div className="content">
                <h4>
                  <Link legacyBehavior href="service-details">
                    Cyber Security
                  </Link>
                </h4>
                <Link legacyBehavior href="/service-details">
                  <a className="read-more">
                    Read More <i className="fal fa-angle-double-right" />
                  </a>
                </Link>
              </div>
              <div className="image">
                <img
                  src="assets/images/services/service-next.jpg"
                  alt="Service"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ServiceDetails;
