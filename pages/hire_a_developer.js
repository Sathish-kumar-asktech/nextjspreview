import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
import FaqHire from "@/src/components/faqHire";
import { Nav, Tab } from "react-bootstrap";

import Link from "next/link";
import { serviceThreeSlider } from "@/src/sliderProps";
import Slider from "react-slick";

const Hire_a_developer = () => {
  return (
    <Layout>
      <PageBanner pageName={"Hire a Developer"} />

      {/* What We Provide Area Start */}
      <section className="what-we-provide overflow-hidden pt-130 rpy-100 rel z-1">
        <div className="container">
          <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
            <h2 className="text-info">Benefits of Hiring from Us</h2>
          </div>
          <Slider {...serviceThreeSlider} className="service-three-slider">
            <div className="service-item-three wow active fadeInUp delay-0-2s">
              <div>
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">01</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Experienced and Qualified Developers
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Each dedicated developer is handpicked for their expertise
                    and qualifications, ensuring top-notch performance and
                    results.
                  </p>
                </div>
              </div>
            </div>
            <div className="service-item-three active wow fadeInUp delay-0-4s">
              <div>
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">02</span>
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Remote-Friendly
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Our developers are 100% remote-friendly, adept at working
                    seamlessly across different time zones to accommodate your
                    needs
                    <br/><br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="service-item-three wow active fadeInUp delay-0-6s">
              <div>
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">03</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Cost Saving
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Enjoy significant cost savings compared to in-house hiring,
                    without compromising on talent or reliability.<br/><br/><br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="service-item-three wow active fadeInUp delay-0-2s">
              <div>
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">04</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Flexibility
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Scale your team up or down as needed, with the flexibility
                    to start, pause, or stop services with just 15 days' notice<br/><br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="service-item-three active fadeInUp delay-0-2s">
              <div>
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">05</span>
                  <div className="icon">
                    <i className="flaticon-layers" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Strict Non-Disclosure
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Rest assured that your project's confidentiality is our top
                    priority, with developers bound by strong non-disclosure
                    agreements<br/><br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="service-item-three active fadeInUp delay-0-2s">
              <div>
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">06</span>
                  <div className="icon">
                    <i className="flaticon-cyber-security-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Effective Communication
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Hire a developer for as little as one month or for as long
                    as your project requires, with no long-term commitments.<br/><br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="service-item-three wow active fadeInUp delay-0-2s">
              <div>
                <img
                  src="assets/images/services/service-three1.jpg"
                  alt="Service"
                />
              </div>
              <div className="content">
                <div className="top-part">
                  <span className="number">07</span>
                  <div className="icon">
                    <i className="flaticon-coding-1" />
                  </div>
                  <h4>
                    <Link legacyBehavior href="service-details">
                      Minimum Commitment
                    </Link>
                  </h4>
                </div>
                <div className="bottom-part">
                  <p>
                    Hire a developer for as little as one month or for as long
                    as your project requires, with no long-term commitments<br/><br/>
                  </p>
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
      <section className="faq-page-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className=" d-flex justify-content-center align-items-center gap-2  wow fadeInUp delay-0-2s">
            <img src="assets/images/hire/steps.png" alt="steps" />
          </div>
          <div className="section-title mb-45">
            <h2>Frequently Asked Questions</h2>
          </div>
          <FaqHire accordions={[1, 2, 3, 4, 5]} />
        </div>
      </section>

      {/* FAQs Area end */}
      {/* Contact Form Section Start */}
      <section className="contact-form-area py-130 rpy-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
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
            <div className="col-lg-6">
              <div className="contact-right-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/about/faq-page.png" alt="FAQs" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Hire_a_developer;
