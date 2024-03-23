import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import { Container } from "@mui/material";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { Nav, Tab } from "react-bootstrap";

const Services = () => {
  return (
    <Layout>
      <PageBanner pageName={"UI/UX Strategy"} />

      {/* mobile-services*/}
      <section className="about-area-two px-3  py-130 rpy-100 rel z-1">
        <Container>
          <div className="row align-items-center gap-90">
            <div className="col-lg-6">
              <div className="about-two-image rel z-1 rmb-65 wow fadeInRight delay-0-2s">
                <img src="assets/images/services/ui-ux.png" alt="About" />
                {/* <div className="bg-circle-shape" /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content rel z-1 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-30">
                  <span className="sub-title mb-15">Our Services</span>
                  <h2>UI/UX Strategy</h2>
                </div>
                <p>
                  Crafting exceptional user experiences is at the heart of our
                  UI/UX Strategy. We blend innovative design principles with
                  user-centric strategies to create intuitive interfaces across
                  web, mobile, and product design. From wireframing to
                  prototyping, our approach ensures seamless interactions,
                  captivating visuals, and meaningful engagements. Whether
                  you're launching a new website, mobile app, or product, trust
                  us to elevate your digital presence and deliver memorable user
                  experiences that drive success.
                </p>

                <div className="about-btns py-3">
                  <Link legacyBehavior href="/about">
                    <a className="theme-btn style-three mt-15">
                      Get a Call Back <i className="fas fa-long-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* About Area end */}

      {/* Work Process Area start */}
      <section className="work-process-area-two pt-130 pb-100 rpt-100 rpb-70 rel z-1">
        <div className="work-process-line-two text-center">
          <img src="assets/images/shapes/work-process-line.png" alt="line" />
        </div>
        <div className="container">
          <div className="section-title text-center mb-70 wow fadeInUp delay-0-2s">
            <h2>Our Design Process</h2>
            <p className="py-10">
              By following our structured design process, we ensure that each
              project delivers optimal results, driving engagement,
              satisfaction, and success for our clients.
            </p>
          </div>
          <div className="row gap-50 justify-content-center">
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two mt-40 wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process1.jpg"
                    alt="Work Process"
                  />
                  <div className="number">01</div>
                </div>
                <div className="content">
                  <h5>Discover</h5>
                  <p>
                    Understand client objectives, target audience, and project
                    requirements
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two wow fadeInDown delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process2.jpg"
                    alt="Work Process"
                  />
                  <div className="number">02</div>
                </div>
                <div className="content">
                  <h5>Define</h5>
                  <p>
                    Identify key user personas, define project goals, and
                    outline design objectives
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two mt-20 wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process3.jpg"
                    alt="Work Process"
                  />
                  <div className="number">03</div>
                </div>
                <div className="content">
                  <h5>Design</h5>
                  <p>
                    Create wireframes, develop prototypes, and design user
                    interfaces that align with project objectives and user needs
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-sm-6">
              <div className="work-process-item-two wow fadeInDown delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/work-process/process4.jpg"
                    alt="Work Process"
                  />
                  <div className="number">04</div>
                </div>
                <div className="content">
                  <h5>Deliver</h5>
                  <p>
                    Implement designs, conduct usability testing, and refine the
                    final product for launch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Area start */}
      <section className="why-choose-us-area px-3  py-130 rpy-100 rel z-1">
        <Container>
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
        </Container>
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

      {/* Partners Area start */}
      <section className="partners-area-two bgc-secondary px-3 pt-80 pb-50 rel z-1">
        <Container>
          <div className="section-title text-white text-center mb-50 wow fadeInUp delay-0-2s">
            {/* <span className="sub-title mb-15">Our Partners</span> */}
            <h2>Our Partners</h2>
            <span className="bg-text">Partners</span>
          </div>
          {/* <Marquee
            direction="right"
            pauseOnHover
            // gradient={100}
            loop={0}
            autoFill
            
          >
            <div style={{ padding: 20 }} className="partner-item">
              <div>
              <img
                src="assets/images/partners/partner1.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
              </div>
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner2.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner3.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner4.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>

            <div style={{ padding: 30 }} className="partner-item">
              <img
                src="assets/images/partners/partner5.png"
                alt="Partner"
                style={{ margin: 20 }}
              />
            </div>
          </Marquee> */}
          <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 justify-content-center">
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-3s">
                  <img
                    src="assets/images/partners/partner1.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-4s">
                  <img
                    src="assets/images/partners/partner2.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-5s">
                  <img
                    src="assets/images/partners/partner3.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-6s">
                  <img
                    src="assets/images/partners/partner4.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
            <div className="col">
              <Link legacyBehavior href="/contact">
                <a className="partner-item wow fadeInUp delay-0-7s">
                  <img
                    src="assets/images/partners/partner5.png"
                    alt="Partner"
                  />
                </a>
              </Link>
            </div>
          </div>
        </Container>
        <div className="partners-shapes">
          <img
            className="left-shape"
            src="assets/images/partners/partner-shape-left.png"
            alt="Shape"
          />
          <img
            className="right-shape"
            src="assets/images/partners/partner-shape-right.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Partners Area end */}

      {/* Work Process Area start */}
      <section className="work-process-area px-3  pt-130 pb-100 rpt-100 rpb-70 rel z-1">
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

      <section
        className="hero-area-two bgs-cover"
        style={{ backgroundImage: "url(assets/images/hero/hero-two.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="hero-content-two pt-50 pb-50 rpt-115 rpb-65 wow fadeInUp delay-0-4s">
                <h1>Industries we serve</h1>
                <span className="sub-title">
                  Explore our diverse clientele across various industries, from
                  healthcare and finance to retail and manufacturing. Our
                  tailored solutions cater to the unique needs of each sector,
                  driving innovation, efficiency, and growth for businesses
                  worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-center pb-50">
            <Marquee
              direction="right"
              pauseOnHover
              // gradient={100}
              loop={0}
              autoFill
            >
              {/* <div className="col-xl-2 col-lg-3 col-md-4 col-6 col-small">
              <div className="feature-item wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img
                    src="assets/images/services/sewing-machine.png"
                    alt="Icon"
                    className="industries-icon"
                  />
                </div>
                <h5>
                  <Link legacyBehavior href="service-details">
                    Garments
                  </Link>
                </h5>
              </div>
            </div> */}
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/manufacture.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Manufacturing
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/online-marketing.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      E-commerce
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/patient.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Healthcare
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/seller.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Retail
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/wholesaler.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Wholesale
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/logistics.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Logistics
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/hotel.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Hospitality
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/vacation.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Travel
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/car-services.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Automotive
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/invesment.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Financial
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-xl-12 p-20 m-10">
                <div className="feature-item wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <img
                      src="assets/images/services/e-learning.png"
                      alt="Icon"
                      className="industries-icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      E-Learning
                    </Link>
                  </h5>
                </div>
              </div>
            </Marquee>
          </div>
        </div>

        <div className="hero-shapes-two">
          <img src="assets/images/hero/hero-bg-lines.png" alt="BG Lines" />
        </div>
      </section>

      {/* Contact Form Section Start */}
      <section
        className="contact-form-area py-130 px-3  rpy-100  mb-4 bgs-cover"
        style={{
          backgroundImage: "url(assets/images/background/contact-form-bg.jpg)",
        }}
      >
        <Container>
          <div className="row gap-100 align-items-center">
            <div className="col-lg-5">
              <div className="contact-info-wrap wow fadeInLeft delay-0-2s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-10">Require a Service? ?</span>
                  <h2>We Would Love To Hear From You.</h2>
                </div>
                <div className="contact-info-part">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-map-marked-alt" />
                    </div>
                    <div className="content">
                      <span>Location</span>
                      <h5>Kodambakkam, Chennai</h5>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span>Email Us</span>
                      <h5>
                        <a href="mailto:support@gmail.com">sales@asktek.net</a>
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
                        <a href="calto:+04445034080">+044 4503 4080</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form bg-white p-80 rmb-55 wow fadeInRight delay-0-2s">
                {/* <div className="section-title mb-30">
                  <h3>Contact Us for your project estimation</h3>
                </div> */}
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
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue=""
                          placeholder="Organization"
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
                          placeholder="Please share brief on your project requirements"
                          required
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-xl-12 p-20 m-10">
                      <div className="form-group mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two mt-15 w-100"
                        >
                          Get a Call Back{" "}
                          <i className="far fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* Contact Form Section End */}
    </Layout>
  );
};
export default Services;
