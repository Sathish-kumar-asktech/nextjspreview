import Link from "next/link";

const HeaderTop = () => {
  return (
    <div className="header-top-wrap bgc-secondary">
      <div className="container-fluid">
        <div className="header-top">          
          <div className="container  p-1">
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
      </div>
    </div>
  );
};
export default HeaderTop;
