import PageBanner from "@/components/PageBanner";
import Layout from "@/layout";
// import axios from "axios";
import { useState } from "react";
import axios from "@/axios";

const Contact = () => {
  const [tokent, settokent] = useState(
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJldmVudGxpc3QiOlt7IlVzZXJJRCI6IjEiLCJMb2dpbkNvZGUiOiIwMSIsIkxvZ2luTmFtZSI6IkFkbWluIiwiRW1haWxJZCI6ImFkbWluQGdtYWlsLmNvbSIsIlVzZXJUeXBlIjoiQURNSU4ifV0sImlhdCI6MTYzODM1NDczMX0.ZW6zEHIXTxfT-QWEzS6-GuY7bRupf2Jc_tp4fXIRabQ"
  );
  const sendMessage = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await axios.instance.get("/GetAllUOM", {
        headers: { Authorization: tokent, "Content-Type": "application/json" },
      });

      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />{" "}
      <section className="contact-page-info pt-130 rpt-100 pb-100 rpb-70 rel z-1">
        <div className="container">
          <div className="row text-center mb-35 justify-content-center wow fadeInUp delay-0-2s">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title mb-25">
                <span className="sub-title mb-15">Need any Helps</span>
                <h2>Contact Informations</h2>
              </div>
              {/* <p>
                Sed ut perspiciatis unde omnis natus errorsit voluptatem
                accusantium doloremque laudantium aperiam eaque quae abillo
                inventore veritatis quasi architecto beatae vitae dicta sunt
                explicabo
              </p> */}
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-2s">
                <div className="icon">
                  <i className="fal fa-map-marker-alt" />
                </div>
                <h4>Locations</h4>
                <span>553 Main Street, 2nd - Block, New York 32500</span>
              </div>
            </div> */}
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-3s">
                <div className="icon">
                  <i className="fal fa-envelope-open" />
                </div>
                <h4>Email Us</h4>
                <a
                  href="mailto:sales@asktek.net"
                >
                  sales@asktek.net
                </a>
                <br /><br />
                {/* <a href="http://www.itservice.net">www.itservice.net</a> */}
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-4s">
                <div className="icon">
                  <i className="fal fa-phone-plus" />
                </div>
                <h4>Locations</h4>
                <span>
                  Mobile : <a href="callto:+919840899559">+91 98408 99559</a>
                </span>
                <span>
                  Telephone : <a href="callto:+044-45034080">+044-45034080</a></span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="contact-info-box wow fadeInUp delay-0-5s">
                <div className="icon">
                  <i className="fal fa-clock" />
                </div>
                <h4>Working Hour</h4>
                <b>Monday - Saturday,</b>
                <span>10:00am - 07:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Info Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map wow fadeInUp delay-0-2s">
        <div className="our-location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7550794644962!2d80.22746827505244!3d13.051255813126886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267890e44ad75%3A0xa6eecf3f48cde4df!2sASK%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1711027578442!5m2!1sen!2sin"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* Location Map Area End */}
      {/* Contact Form Start */}
      <section className="contact-page-form pb-130 rpb-100">
        <div className="container">
          <div className="contact-form-wrap form-style-two bgc-lighter wow fadeInUp delay-0-2s">
            <div className="row text-center mb-35 justify-content-center">
              <div className="col-xl-9 col-lg-11">
                <div className="section-title mb-25 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">Get In Touch</span>
                  <h2>Send Us Message</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis natus errorsit voluptatem
                  accusantium doloremque laudantium aperiam eaque quae abillo
                  inventore veritatis quasi architecto beatae vitae dicta sunt
                  explicabo
                </p>
              </div>
            </div>
            <form
              onSubmit={sendMessage}
              // onSubmit={(e) => e.preventDefault()}
              id="contactForm"
              className="contactForm"
              action="assets/php/form-process.php"
              name="contactForm"
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
                      data-error="Please enter your name"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="phone_number"
                      name="phone_number"
                      className="form-control"
                      defaultValue=""
                      placeholder="Phone Number"
                      required
                      data-error="Please enter your Phone Number"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      defaultValue=""
                      placeholder="Email Address"
                      required
                      data-error="Please enter your Email"
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                      defaultValue=""
                      placeholder="Subject"
                      required
                      data-error="Please enter your Subject"
                    />
                    <div className="help-block with-errors" />
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
                      data-error="Please enter your Message"
                      defaultValue={""}
                    />
                    <div className="help-block with-errors" />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="form-group text-center mb-0">
                    <button type="submit" className="theme-btn style-two">
                      send message <i className="far fa-long-arrow-right" />
                    </button>
                    <div id="msgSubmit" className="hidden" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
