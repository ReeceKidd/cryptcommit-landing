import { Logo } from "../images/images";

const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget about_widget">
                <a href="index.html" className="footer-logo">
                  <img src={Logo} alt="" />
                </a>
                <p>
                  Within coming figure sex things are. Pretended concluded did
                  repulsive education smallness yet yet described. Had country
                  man his pressed shewing.{" "}
                </p>
                <ul className="social-icon">
                  <li>
                    <a href="google.com">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget nav_menus_widget">
                <h4 className="widget-title">Useful Links</h4>
                <ul>
                  <li>
                    <a href="index.html">
                      <i className="fas fa-chevron-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> About Us
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Service
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Blog
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget nav_menus_widget">
                <h4 className="widget-title">Need Help?</h4>
                <ul>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Faqs
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Privacy
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Policy
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Support
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> Temrs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-widget nav_menus_widget">
                <h4 className="widget-title">Download</h4>
                <ul>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> For IOS
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> For Android
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> For Mac
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> For Window
                    </a>
                  </li>
                  <li>
                    <a href="google.com">
                      <i className="fas fa-chevron-right"></i> For Linax
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-inner">
                <div className="left-content-area">&copy;</div>
                <div className="right-content-area">
                  Designed by <strong>Love</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
