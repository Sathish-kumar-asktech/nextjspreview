import ProductBanner from "@/components/ProductBanner";
import Layout from "@/layout";
import { Chip, Container, Divider, Grid } from "@mui/material";
import Link from "next/link";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { TextField, MenuItem } from "@mui/material";

import axios from "@/axios";
import { useState } from "react";

const ProjectGrid = () => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
    company_name: "",
    email: "",
    city: "",
    product: "HRMS",
    enquiry_details: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission here
      console.log("Form submitted:", formData);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.name) {
      errors.name = "Please enter your name";
      formIsValid = false;
    }

    if (!formData.phone_number) {
      errors.phone_number = "Please enter your phone number";
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = "Please enter your email";
      formIsValid = false;
    }

    setErrors(errors);
    return formIsValid;
  };

  return (
    <>
      <Layout>       
        <Dialog open={open} onClose={handleClose} maxWidth={"lg"}>
          <DialogContent className="bg-white p-0 m-0 ">
            <div className="form-style-two bg-white ">
              <div className="mb-25 pt-10 p-5 bg-info text-center">
                <h3 style={{ color: "white", fontFamily: "oswald" }}>
                  Quick Enquiry
                </h3>
              </div>
              <form onSubmit={handleSubmit} className=" bg-white p-10 m-25">
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      variant="standard"
                      color="info"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name ? true : false}
                      helperText={errors.name}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone no"
                      variant="standard"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      error={errors.phone_number ? true : false}
                      helperText={errors.phone_number}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Company Name"
                      variant="standard"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="standard"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email ? true : false}
                      helperText={errors.email}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      variant="standard"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Products"
                      variant="standard"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                    >
                      <MenuItem value="ERP" defaultChecked>
                        ERP for Textile & Garment Industries
                      </MenuItem>
                      <MenuItem value="SCM">
                        Target SCM - Supply Chain Management
                      </MenuItem>
                      <MenuItem value="HRMS">
                        HRMS - Target HR & Payroll Solutions
                      </MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Enquiry Details"
                      variant="standard"
                      name="enquiry_details"
                      value={formData.enquiry_details}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className="d-flex justify-content-center align-items-center gap-2"
                  >
                    <button type="submit" className="theme-btn style-four ">
                      send message <i className="far fa-long-arrow-right" />
                    </button>
                    {/*                     
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button> */}
                  </Grid>
                </Grid>
              </form>
            </div>
          </DialogContent>
        </Dialog>
        <>
          <Button
            onClick={handleButtonClick}
            variant="contained"
            color="warning"
            className="sticky-button headShake sticky-button-container"
          >
            Quick Enquiry
          </Button>
        <section className="project-grid-area rel z-2 py-50 rpy-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                  <h2 className="text-gradient-title2 ">
                    Target HRMS - HR & Payroll Solutions
                  </h2>
                  <h5 className="text-primary">
                    Empowering Your Workforce, Streamlining Payroll
                  </h5>
                  <div className="image my-50 wow fadeInUp delay-0-2s">
                    <img
                      src="/assets/images/projects/mockup-erp.png"
                      alt="Service Details"
                      style={{ objectFit: "contain", maxWidth: "60%" }}
                    />
                  </div>
                  <p>
                    Say goodbye to HR and payroll complexities with Target HRMS.
                    Tailored for diverse industries, especially manufacturing
                    and compliance-focused factories, our solution provides a
                    complete HR and payroll package. Experience the ease of
                    mobile-responsive dashboards, ensuring that your workforce
                    management is as dynamic as your business.
                  </p>
                </div>
                <div className="project-shapes">
                  <img
                    className="shape one"
                    src="/assets/images/shapes/project-left.png"
                    alt="shape"
                  />
                  <img
                    className="shape two"
                    src="/assets/images/shapes/project-right.png"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="section-title text-center mb-10">
                <Divider>
                  <Chip label="Key Features" size="medium" />
                </Divider>
              </div>
              <div className="col-lg-2  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="/assets/images/projects/hrms/perform.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Employee Management
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-2  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="/assets/images/projects/hrms/process.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="text-muted">
                    <Link legacyBehavior href="service-details">
                      Attendance Tracking
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-2  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="/assets/images/projects/hrms/fiscal.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="text-muted">
                    <Link legacyBehavior href="service-details">
                      Payroll Processing
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-2  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="/assets/images/projects/hrms/manager.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="text-muted">
                    <Link legacyBehavior href="service-details">
                      Benefits Administration
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-2  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="/assets/images/projects/hrms/employee.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="text-muted">
                    <Link legacyBehavior href="service-details">
                      Performance Management
                    </Link>
                  </h5>
                </div>
              </div>

              <div className="col-lg-2  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="/assets/images/projects/hrms/compliance.png"
                      alt="Icon"
                    />
                  </div>
                  <h5 className="text-muted">
                    <Link legacyBehavior href="service-details">
                      Compliance Management
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-details-area px-3  rpt-100 pb-50 rpb-85">
          <Container>
            <div className="row gap-100">
              <div className="col-lg-12">
                <div className="service-details-content">
                  <div className="section-title text-center">
                    <Divider>
                      <Chip
                        label="Functional Areas"
                        size="medium"
                        color="info"
                      />
                    </Divider>
                  </div>

                  <div className="row gap-90  justify-content-center align-items-center">
                    <div className="col-lg-4 fadeInUp">
                      <div className="why-choose-image fadeInUp rmb-55">
                        <img
                          src="/assets/images/projects/hrms/Shared workspace-amico.png"
                          alt="Why Choose"
                          className="product-features-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 fadeInUp">
                      <div className="why-choose-content fadeInUp">
                        <h3>Employee Management</h3>
                        <p>
                          Involves maintaining a centralized employee database
                          to manage personnel information such as contact
                          details, employment history, and performance reviews,
                          along with providing an employee self-service portal
                          for accessing personal information, submitting leave
                          requests, and updating details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90   fadeInRight justify-content-center  align-items-center">
                    <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                      <div className="why-choose-content">
                        <h3>Time & Attendance </h3>
                        <p>
                          Tracking utilizes an automated system to record
                          employee attendance, hours worked, and overtime, often
                          integrating with biometric devices or mobile apps for
                          accurate time capture.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4  fadeInRight order-lg-2 order-sm-1 order-1 ">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="/assets/images/projects/hrms/Work time-cuate.png"
                          alt="Why Choose"
                          className="product-features-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90 fadeInUp  justify-content-center align-items-center">
                    <div className="col-lg-4 fadeInUp">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="/assets/images/projects/hrms/Office management-bro.png"
                          alt="Why Choose"
                          className="product-features-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 fadeInUp">
                      <div className="why-choose-content">
                        <h3>Payroll Processing </h3>
                        <p>
                          Includes comprehensive functionality to calculate
                          salaries, deductions, and taxes accurately, along with
                          automated payroll runs that cover direct deposit,
                          check printing, and tax filing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                    <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                      <div className="why-choose-content">
                        <h3>Benefits Administration</h3>
                        <p>
                          Encompasses the management of employee benefits such
                          as health insurance, retirement plans, and flexible
                          spending accounts, including enrollment management,
                          eligibility tracking, and employee self-service for
                          benefits selection.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="/assets/images/projects/hrms/Work time-amico.png"
                          alt="Why Choose"
                          className="product-features-img "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90   fadeInUp justify-content-center align-items-center">
                    <div className="col-lg-4 fadeInUp">
                      <div className="why-choose-image rmb-55">
                        <img
                          src="/assets/images/projects/hrms/Co-workers-pana.png"
                          alt="Why Choose"
                          className="product-features-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 fadeInUp">
                      <div className="why-choose-content">
                        <h3>Performance Management</h3>
                        <p>
                          Involves implementing a performance appraisal system
                          for setting goals, conducting evaluations, and
                          providing feedback, supported by performance
                          dashboards and analytics for tracking employee
                          performance and identifying areas for improvement.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                    <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                      <div className="why-choose-content">
                        <h3>Compliance Management </h3>
                        <p>
                          Ensures adherence to labor laws, regulations, and
                          company policies through automated compliance alerts
                          and notifications, facilitating timely adherence to
                          regulatory requirements.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="/assets/images/projects/hrms/Typing-pana.png"
                          alt="Why Choose"
                          className="product-features-img "
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-12 mt-50 ">
                    <section className="services-area  pt-75 pb-10 rel z-1">
                      <div className="container">
                        <div className="row medium-gap">
                          <div className="col-xl-12">
                            <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                              <span className="sub-title mb-15">
                                Business Benefits
                              </span>
                              <h3 style={{ color: "#0D9276" }}>
                                Unlocking Business Advantages
                              </h3>
                            </div>
                          </div>

                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-7s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="/assets/images/projects/erp/statistics.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Efficiency
                                  </Link>
                                </h4>
                                <p>
                                  Streamline HR processes, reduce manual tasks,
                                  and improve overall efficiency
                                </p>
                              </div>
                            </div>{" "}
                          </div>

                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-6s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="/assets/images/projects/hrms/target.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Accuracy
                                  </Link>
                                </h4>
                                <p>
                                  Minimize errors in payroll processing and
                                  compliance management, ensuring accurate and
                                  timely payments.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-5s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="/assets/images/projects/erp/satisfaction.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Employee Satisfaction
                                  </Link>
                                </h4>
                                <p>
                                  Provide self-service options for employees,
                                  empowering them to manage their information
                                  and benefits.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-7s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="/assets/images/projects/erp/approval.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Compliance
                                  </Link>
                                </h4>
                                <p>
                                  Ensure compliance with labor laws,
                                  regulations, and industry standards, reducing
                                  the risk of penalties and fines.
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-3s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="/assets/images/projects/erp/costs.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Cost Savings
                                  </Link>
                                </h4>
                                <p>
                                  Reduce administrative costs associated with HR
                                  and payroll tasks
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-4s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="/assets/images/projects/hrms/insight.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Insightful Reporting
                                  </Link>
                                </h4>
                                <p>
                                  Access real-time data and analytics for
                                  informed decision-making and strategic
                                  workforce planning.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Contact Form Section Start */}
        <section
          className="contact-form-area py-50 pb-100 px-3  rpy-100  mb-4 bgs-cover"
          style={{
            backgroundImage: "url(assets/images/background/feature-bg.jpg)",
          }}
        >
          <Container>
            <div className="row gap-100 align-items-center">
              <div className="col-lg-12 mb-40">
                <div className="d-flex justify-content-center align-items-center gap-5 contact-info-wrap wow fadeInLeft delay-0-2s">
                  <div className="why-choose-image d-flex justify-content-center align-items-center gap-2 fadeInUp rmb-55">
                    <img
                      src="/assets/images/projects/erp/Demo-amico.png"
                      alt="Why Choose"
                      style={{ maxWidth: "200px" }}
                    />
                  </div>
                  <div className="section-title mb-40">
                    <h2>Request a Demo Today</h2>
                    <span
                      className="sub-title  mb-10"
                      style={{ color: "#FA7070" }}
                    >
                      Explore Our HR & Payroll Solutions
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="contact-form shadowbox-2 bg-white p-50 rmb-55 wow fadeInRight delay-0-2s">
                  <form onSubmit={handleSubmit} className=" bg-white">
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Name"
                          variant="standard"
                          color="info"
                          name="name"
                          size="medium"
                          value={formData.name}
                          onChange={handleChange}
                          error={errors.name ? true : false}
                          helperText={errors.name}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone no"
                          variant="standard"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          error={errors.phone_number ? true : false}
                          helperText={errors.phone_number}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email"
                          variant="standard"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email ? true : false}
                          helperText={errors.email}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="City"
                          variant="standard"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Company Name"
                          variant="standard"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          select
                          label="Products"
                          variant="standard"
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          required
                        >
                          <MenuItem value="ERP" defaultChecked>
                            ERP for Textile & Garment Industries
                          </MenuItem>
                          <MenuItem value="SCM">
                            Target SCM - Supply Chain Management
                          </MenuItem>
                          <MenuItem value="HRMS">
                            HRMS - Target HR & Payroll Solutions
                          </MenuItem>
                        </TextField>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          multiline
                          rows={3}
                          label="Enquiry Details"
                          variant="standard"
                          name="enquiry_details"
                          value={formData.enquiry_details}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        className="d-flex justify-content-center align-items-center gap-2"
                      >
                        <button type="submit" className="theme-btn style-two ">
                          Get A Call Back{" "}
                          <i className="far fa-long-arrow-right" />
                        </button>
                        {/*                     
                    <Button type="submit" variant="contained" color="primary">
                      Submit
                    </Button> */}
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* Contact Form Section End */}
        </>
      </Layout>
    </>
  );
};
export default ProjectGrid;
