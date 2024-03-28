import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

import { Fragment } from "react";
const Menu = () => {
  return (
    <Fragment>
      <DeskTopMenu />
      <MobileMenu />
    </Fragment>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeSubMenu = (value) =>
      value == activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu navbar-expand-lg mobile-menu">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img
                src="assets/images/logos/logo-one.png"
                alt="Logo"
                title="Logo"
              />
            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            as={"button"}
            type="button"
            className="navbar-toggle"
            eventKey="collapse"
            data-bs-target=".navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse
          eventKey="collapse"
          className="navbar-collapse clearfix"
        >
          <ul className="navigation clearfix">
            <li className="dropdown">
              <a href="#" onClick={() => active("services")}>
                services
              </a>
              <ul style={activeSubMenu("services")}>
                <li>
                  <Link
                    href="mobile-app-solutions"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Mobile App Solutions
                  </Link>
                </li>

                <li>
                  <Link
                    href="enterprise-application-services"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Enterprise Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="ecommerce-application-development"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Ecommerce Application Development
                  </Link>
                </li>
                <li>
                  <Link href="ui-ux-strategy" style={{ whiteSpace: "nowrap" }}>
                    UI/UX Strategy
                  </Link>
                </li>
                <li>
                  <Link
                    href="digital-marketing-services"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="erp-software-services"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    ERP Software Development
                  </Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("services")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("Project")}>
                Products
              </a>
              <ul style={activeSubMenu("Project")}>
                <li>
                  <Link
                    href="erp-for-textiles-and-garments"                    
                  >
                    ERP for Textile & Garment Industries{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    href="Target_SCM_Supply_Chain_Managements"
                    
                  >
                    Target SCM - Supply Chain Management.
                  </Link>
                </li>
                <li>
                  <Link
                    href="Target_HRMS_HR_and_Payroll_Solutions"
                    
                  >
                    HRMS - Target HR & Payroll Solutions
                  </Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("Project")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("shop")}>
                Industries
              </a>
              <ul style={activeSubMenu("shop")}>
                <li>
                  <Link href="shop">shop grid</Link>
                </li>
                <li>
                  <Link href="product-details">product details</Link>
                </li>
                <li>
                  <Link href="cart">cart page</Link>
                </li>
                <li>
                  <Link href="checkout">checkout</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("shop")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("blog")}>
                Careers
              </a>
              <ul style={activeSubMenu("blog")}>
                <li>
                  <Link href="blog">blog standard</Link>
                </li>
                <li>
                  <Link href="blog-details">blog details</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("blog")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("home")}>
                Company
              </a>
              <ul style={activeSubMenu("home")}>
                <li>
                  <Link href="about-us">About US</Link>
                </li>
                <li>
                  <Link href="index2">Engagement Model</Link>
                </li>
                <li>
                  <Link href="index3">Our Team</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("home")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => active("contact")}>
                Contact Us
              </a>
              <ul style={activeSubMenu("contact")}>
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("contact")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => active("hire_a_developer")}>
                Hire a Developer
              </a>
              <ul style={activeSubMenu("hire_a_developer")}>
                <li>
                  <Link href="hire_a_developer">Hire a Developer</Link>
                </li>
              </ul>
              <div className="dropdown-btn" onClick={() => active("hire_a_developer")}>
                <span className="fas fa-chevron-down" />
              </div>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
const DeskTopMenu = () => {
  return (
    <nav className="main-menu navbar-expand-lg desktop-menu">
      <div className="navbar-header">
        <div className="mobile-logo">
          <Link href="/">
            <img
              src="assets/images/logos/logo-one.png"
              alt="Logo"
              title="Logo"
            />
          </Link>
        </div>

        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-bs-toggle="collapse"
          data-bs-target=".navbar-collapse"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>

      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="dropdown">
            <a href="#">services</a>
            <ul>
              <li>
                <Link
                  href="mobile-app-solutions"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Mobile App Solutions
                </Link>
              </li>

              <li>
                <Link
                  href="enterprise-application-services"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Enterprise Application Development
                </Link>
              </li>
              <li>
                <Link
                  href="ecommerce-application-development"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Ecommerce Application Development
                </Link>
              </li>
              <li>
                <Link href="ui-ux-strategy" style={{ whiteSpace: "nowrap" }}>
                  UI/UX Strategy
                </Link>
              </li>
              <li>
                <Link
                  href="digital-marketing-services"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="erp-software-services"
                  style={{ whiteSpace: "nowrap" }}
                >
                  ERP Software Development
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Products</a>
            <ul>
              <li>
                <Link
                  href="erp-for-textiles-and-garments"
                  style={{ whiteSpace: "nowrap" }}
                >
                  ERP for Textile & Garment Industries{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="Target_SCM_Supply_Chain_Managements"
                  style={{ whiteSpace: "nowrap" }}
                >
                  Target SCM - Supply Chain Management.
                </Link>
              </li>
              <li>
                <Link
                  href="Target_HRMS_HR_and_Payroll_Solutions"
                  style={{ whiteSpace: "nowrap" }}
                >
                  HRMS - Target HR & Payroll Solutions
                </Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Industries</a>
            <ul>
              <li>
                <Link href="shop">shop grid</Link>
              </li>
              <li>
                <Link href="product-details">product details</Link>
              </li>
              <li>
                <Link href="cart">cart page</Link>
              </li>
              <li>
                <Link href="checkout">checkout</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Careers</a>
            <ul>
              <li>
                <Link href="blog">blog standard</Link>
              </li>
              <li>
                <Link href="blog-details">blog details</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="#">Company</a>
            <ul>
              <li>
                <Link href="about-us">About US</Link>
              </li>
              <li>
                <Link href="index2">Engagement Model</Link>
              </li>
              <li>
                <Link href="index3">Our Team</Link>
              </li>
            </ul>
            <div className="dropdown-btn">
              <span className="fas fa-chevron-down" />
            </div>
          </li>

          <li className="dropdown">
            <a href="contact" style={{ whiteSpace: "nowrap" }}>
              Contact US
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu;
