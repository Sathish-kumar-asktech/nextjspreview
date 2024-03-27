import Link from "next/link";
import Search from "../Search";
import HeaderTop from "./HeaderTop";
import Menu from "./Menu";
import { Container } from "@mui/material";

const DefaultHeader = () => {
  return (
    <header className="main-header header-two">
   
      {/*Header-Upper*/}
      <div className="header-upper bg-white">
      <HeaderTop />
       {/* <div className="container-fluid clearfix>*/}      
        <Container >
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                     src="/assets/images/logos/logo.png"
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
              <Link legacyBehavior href="hire_a_developer">
                <a className="theme-btn">
                  Hire A Developer <i className="fas fa-long-arrow-right" />
                </a>
              </Link>
            </div>
            {/* Header Social */}
            {/* <div className="social-style-two">
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
            </div> */}
          </div>
        </Container>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};
export default DefaultHeader;
