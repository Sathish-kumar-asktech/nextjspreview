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
    product: "ERP",
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
      <div className="headShake">
        <Button
          onClick={handleButtonClick}
          variant="contained"
          color="warning"
          className="sticky-button headShake sticky-button-container"
        >
          Quick Enquiry
        </Button>
      </div>
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

        <section className="project-grid-area rel z-2 py-50 rpy-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="section-title text-center mb-50 wow fadeInUp delay-0-2s">
                  <h2>TARGET - ERP for Textile & Garment Industries</h2>
                  <h5>
                    Unleashing Excellence in Textile & Garment Manufacturing
                  </h5>
                  <div className="image my-50 wow fadeInUp delay-0-2s">
                    <img
                      src="assets/images/projects/mockup-erp.png"
                      alt="Service Details"
                      style={{ objectFit: "contain", maxWidth: "60%" }}
                    />
                  </div>
                  <p>
                    Elevate your textile and garment manufacturing with TARGET,
                    our comprehensive ERP solution. Tailored for manufacturers
                    and exporters, TARGET streamlines production processes,
                    optimizes inventory management, and simplifies export
                    documentation. Experience efficiency like never before, and
                    watch your operations seamlessly align with global
                    standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="section-title text-center mb-10">
                <Divider>
                  <Chip label="Key Features" size="medium" />
                </Divider>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/planning-strategy.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Production Planning
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/time-sheet.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Scheduling
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/inventory-management.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Inventory Control
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/businessorder.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Order Management
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/supply-chain.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Supplier Management
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/quality-assurance.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Quality Assurance
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3  wow fadeInUp delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/yearly-report.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Financial Management
                    </Link>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3  col-md-4 col-6 col-small">
                <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3  wow fadeInDown delay-0-2s">
                  <div className="icon icon-size">
                    <img
                      src="assets/images/projects/erp/dashboard.png"
                      alt="Icon"
                    />
                  </div>
                  <h5>
                    <Link legacyBehavior href="service-details">
                      Reporting & Analytics
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
                          src="assets/images/projects/erp/Manufacturing.png"
                          alt="Why Choose"
                          className="product-features-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 fadeInUp">
                      <div className="why-choose-content fadeInUp">
                        <h4>Production Management</h4>
                        <p>
                          Aims to optimize efficiency by implementing real-time
                          monitoring and scheduling to streamline processes.
                          This involves overseeing the tracking of raw
                          materials, work-in-progress, and finished goods to
                          ensure smooth operations throughout the production
                          cycle
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90   fadeInRight justify-content-center  align-items-center">
                    <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                      <div className="why-choose-content">
                        <h3>Inventory Management</h3>
                        <p>
                          Involves optimizing inventory levels through advanced
                          forecasting techniques to minimize stockouts,
                          alongside managing multi-location warehouses and
                          monitoring material movements.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4  fadeInRight order-lg-2 order-sm-1 order-1 ">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/projects/erp/inventory.png"
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
                          src="assets/images/projects/erp/Invoice-amico.png"
                          alt="Why Choose"
                          className="product-features-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 fadeInUp">
                      <div className="why-choose-content">
                        <h3>Order Processing</h3>
                        <p>
                          Entails seamlessly handling customer orders and
                          overseeing order fulfillment operations, including the
                          generation of invoices, packing slips, and shipping
                          labels
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                    <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                      <div className="why-choose-content">
                        <h3>Supply Chain Integration</h3>
                        <p>
                          Facilitates collaboration with suppliers and
                          distributors by tracking shipments, managing supplier
                          performance, and optimizing procurement processes.
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/projects/erp/Logistics-pana.png"
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
                          src="assets/images/projects/erp/Manufacturing.png"
                          alt="Why Choose"
                          className="product-features-img"
                        />
                      </div>
                    </div>
                    <div className="col-lg-8 fadeInUp">
                      <div className="why-choose-content">
                        <h3>Quality Control</h3>
                        <p>
                          Measures are implemented throughout the production
                          process, including the capture and analysis of quality
                          data to enhance product quality and compliance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                    <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                      <div className="why-choose-content">
                        <h3>Financial Management</h3>
                        <p>
                          Automates processes such as invoicing, billing, and
                          payment processing, while also generating financial
                          reports like profit and loss statements and balance
                          sheets
                        </p>
                      </div>
                    </div>

                    <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                      <div className="why-choose-image rmt-55">
                        <img
                          src="assets/images/projects/erp/Financial data-amico.png"
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
                              <h3 style={{ color: "#8758FF" }}>
                                Unlocking Business Advantages
                              </h3>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-4s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="assets/images/projects/erp/time-management.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Improved Efficiency
                                  </Link>
                                </h4>
                                <p>
                                  Streamline processes and eliminate manual
                                  tasks to increase operational efficiency
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-6s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="assets/images/projects/erp/vision.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Enhanced Visibility
                                  </Link>
                                </h4>
                                <p>
                                  Gain real-time insights into production,
                                  inventory, and financial data for informed
                                  decision-making.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-3s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="assets/images/projects/erp/costs.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Cost Reduction
                                  </Link>
                                </h4>
                                <p>
                                  Optimize inventory levels, minimize stockouts,
                                  and reduce production downtime to lower costs.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-5s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="assets/images/projects/erp/satisfaction.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Increased Customer Satisfaction
                                  </Link>
                                </h4>
                                <p>
                                  Deliver products on time and meet quality
                                  standards to enhance customer satisfaction.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-7s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="assets/images/projects/erp/approval.png"
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
                                  Ensure compliance with industry regulations
                                  and standards, reducing the risk of penalties
                                  and fines.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-6 col-md-6">
                            <div className="benefits-item wow fadeInUp delay-0-7s">
                              <div className="icon d-flex justify-content-center align-items-center px-4">
                                <img
                                  src="assets/images/projects/erp/maximize.png"
                                  alt="Icon"
                                />
                              </div>
                              <div className="content">
                                <h4>
                                  <Link legacyBehavior href="service-details">
                                    Scalability
                                  </Link>
                                </h4>
                                <p>
                                  Scale your operations seamlessly as your
                                  business grows, with the flexibility to add
                                  new features and modules.
                                </p>
                              </div>
                            </div>{" "}
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
            backgroundImage:
              "url(assets/images/background/contact-form-bg.jpg)",
          }}
        >
          <Container>
            <div className="row gap-100 align-items-center">
              <div className="col-lg-5">
                <div className="contact-info-wrap wow fadeInLeft delay-0-2s">
                  <div className="section-title mb-40">
                    <span className="sub-title mb-10">
                      Explore Our ERP Solutions?
                    </span>
                    <h2>Book a Demo Today</h2>
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
                          <a href="mailto:support@gmail.com">
                            sales@asktek.net
                          </a>
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
                <div className="contact-form bg-white p-50 rmb-55 wow fadeInRight delay-0-2s">
                  <form onSubmit={handleSubmit} className=" bg-white">
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
                      <Grid item xs={12} sm={12}>
                        <TextField
                          fullWidth
                          label="Your Company Name"
                          variant="standard"
                          name="company_name"
                          value={formData.company_name}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={12}>
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
              </div>
            </div>
          </Container>
        </section>
        {/* Contact Form Section End */}
      </Layout>
    </>
  );
};
export default ProjectGrid;
