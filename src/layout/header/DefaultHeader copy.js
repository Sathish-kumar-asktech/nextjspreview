import Link from "next/link";
import Search from "../Search";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";

const DefaultHeader = () => {
  return (
    <header className="main-header header-two">
      <HeaderTop />
      {/*Header-Upper*/}
      <div className="header-upper bg-white">
        <div
          className="header-top-wrap bgc-gray"
          style={{ backgroundColor: "#0A1D56" }}
        >
          <div className="container">
            <div className="header-top">
              <ul>
                <li>
                  <i className="far fa-envelope" />{" "}
                  <a href="mailto:support@gmail.com" style={{ color: "white" }}>
                    sales@asktek.net
                  </a>
                </li>

                <li>
                  <i className="far fa-phone" />{" "}
                  <a href="callto:+919840899559" style={{ color: "white" }}>
                    +91 98408 99559
                  </a>
                </li>

                <li>
                  <i className="far fa-tty" />{" "}
                  <a href="callto:04445034080" style={{ color: "white" }}>
                    044-45034080
                  </a>
                </li>

                <li className="for-none" style={{ color: "white" }}>
                  <i className="far fa-clock" /> Working Hours : Mon - Sat, 10
                  AM to 7 PM
                </li>
                {/* <li>
                <div className="social-style-one">
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-instagram" />
                  </a>
                  <a href="#" style={{color:"white"}}>
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                      style={{ maxWidth: "50%" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer mx-auto clearfix">
              {/* Main Menu */}
              <Menu />
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <div className="nav-search ms-xl-auto py-10">
              <Search />
            </div> */}
            {/* Menu Button */}
            <div className="menu-btns">
              <Link legacyBehavior href="/contact">
                <a className="theme-btn">
                  Hire A Developer <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
            {/* Header Social */}
            <div className="social-style-two">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
