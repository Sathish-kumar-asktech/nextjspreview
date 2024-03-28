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
    product: "SCM",
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
                    <h2 className="text-gradient-title ">
                      Target SCM - Supply Chain Management
                    </h2>
                    <h5 className="text-success">
                      Powering Your Supply Chain Dynamics
                    </h5>
                    <div className="image my-50 wow fadeInUp delay-0-2s">
                      <img
                        src="/assets/images/projects/mockup-erp.png"
                        alt="Service Details"
                        style={{ objectFit: "contain", maxWidth: "60%" }}
                      />
                    </div>
                    <p>
                      Transform your supply chain with Target SCM, a versatile
                      solution applicable across industries. Boost purchase and
                      distribution processes, and gain real-time visibility into
                      your supply chain. With online tools for customer purchase
                      orders and tracking, Target SCM ensures efficiency and
                      transparency in every link of your supply chain.
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
                        src="/assets/images/projects/erp/planning-strategy.png"
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
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/time-sheet.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Inventory Optimization
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/inventory-management.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Procurement Automation
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/businessorder.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Warehouse Management
                      </Link>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInUp delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/supply-chain.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Logistics & Distribution
                      </Link>
                    </h5>
                  </div>
                </div>

                <div className="col-lg-2  col-md-4 col-6 col-small">
                  <div className="feature-item d-flex flex-column justify-content-center align-items-center gap-3 wow fadeInDown delay-0-2s">
                    <div className="icon icon-size">
                      <img
                        src="/assets/images/projects/erp/quality-assurance.png"
                        alt="Icon"
                      />
                    </div>
                    <h5>
                      <Link legacyBehavior href="service-details">
                        Supplier Collaboration
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
                          color="success"
                        />
                      </Divider>
                    </div>

                    <div className="row gap-90  justify-content-center align-items-center">
                      <div className="col-lg-4 fadeInUp">
                        <div className="why-choose-image fadeInUp rmb-55">
                          <img
                            src="/assets/images/projects/scm/Logistics-amico.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content fadeInUp">
                          <h3>Supplier Management</h3>
                          <p>
                            Supplier Management involves streamlining supplier
                            onboarding and relationship management, as well as
                            monitoring supplier performance to ensure timely
                            deliveries.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90   fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Supplier Collaboration</h3>
                          <p>
                            Involves collaborating with suppliers to improve
                            forecasting accuracy and reduce lead times by
                            sharing demand forecasts and production schedules to
                            align supply with demand.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4  fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/scm/Agreement-rafiki.png"
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
                            src="/assets/images/projects/scm/Logistics-pana.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Inventory Optimization</h3>
                          <p>
                            Involves optimizing inventory levels across the
                            supply chain to minimize carrying costs while
                            implementing demand forecasting and replenishment
                            strategies for efficient inventory management.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90  fadeInRight justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Procurement Automation</h3>
                          <p>
                            focuses on automating procurement processes, from
                            purchase requisition to invoice reconciliation, to
                            ensure compliance with procurement policies and
                            regulations.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/scm/Port-amico.png"
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
                            src="/assets/images/projects/scm/Port-rafiki.png"
                            alt="Why Choose"
                            className="product-features-img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 fadeInUp">
                        <div className="why-choose-content">
                          <h3>Warehouse Management</h3>
                          <p>
                            Entails efficiently managing warehouse operations,
                            including receiving, storage, and picking, while
                            implementing barcode scanning and RFID technology
                            for accurate inventory tracking.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row gap-90 fadeInRight  justify-content-center  align-items-center">
                      <div className="col-lg-8 fadeInRight order-lg-1 order-sm-2  order-2">
                        <div className="why-choose-content">
                          <h3>Logistics & Distribution </h3>
                          <p>
                            Aims to plan and optimize transportation routes to
                            reduce shipping costs and improve delivery times,
                            while also tracking shipments in real-time and
                            providing visibility to stakeholders throughout the
                            supply chain.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-4 fadeInRight order-lg-2 order-sm-1 order-1 ">
                        <div className="why-choose-image rmt-55">
                          <img
                            src="/assets/images/projects/scm/Heavy box-amico.png"
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
                                      Cost Reduction
                                    </Link>
                                  </h4>
                                  <p>
                                    Optimize inventory levels, reduce
                                    procurement costs, and minimize
                                    transportation expenses.
                                  </p>
                                </div>
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
                                      Improved Efficiency
                                    </Link>
                                  </h4>
                                  <p>
                                    Automate manual processes, reduce lead
                                    times, and increase productivity across the
                                    supply chain.
                                  </p>
                                </div>
                              </div>{" "}
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-6s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/erp/vision.png"
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
                                    Gain real-time visibility into inventory
                                    levels, order statuses, and transportation
                                    routes for better decision-making.
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="col-xl-6 col-md-6">
                              <div className="benefits-item wow fadeInUp delay-0-4s">
                                <div className="icon d-flex justify-content-center align-items-center px-4">
                                  <img
                                    src="/assets/images/projects/erp/collaboration.png"
                                    alt="Icon"
                                  />
                                </div>
                                <div className="content">
                                  <h4>
                                    <Link legacyBehavior href="service-details">
                                      Better Collaboration
                                    </Link>
                                  </h4>
                                  <p>
                                    Foster collaboration with suppliers and
                                    partners to improve forecasting accuracy and
                                    reduce supply chain risks.
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
                                    Ensure compliance with regulatory
                                    requirements and internal policies, reducing
                                    the risk of fines and penalties.
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
                                      Customer Satisfaction
                                    </Link>
                                  </h4>
                                  <p>
                                    Meet customer demand with on-time deliveries
                                    and accurate order fulfillment, leading to
                                    increased customer satisfaction and loyalty.
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
                      <span className="sub-title text-success mb-10">
                        Explore Our Supply Chain Management Solutions
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
                          <button
                            type="submit"
                            className="theme-btn style-two "
                          >
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
