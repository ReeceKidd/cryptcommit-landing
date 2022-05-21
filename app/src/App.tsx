import Logo from "./img/logo-white.png";

import ShapeFive from "./img/shape/05.png";
import ShapeSix from "./img/shape/06.png";
import ShapeSeven from "./img/shape/07.png";
import MobileImageTwo from "./img/mobile-img-2.png";
import HowItWorks from "./img/how-it-works-image.png";
import TeamShapeDark from "./img/bg/team-shape-dark.png";
import TeamMemberThree from "./img/team-member/03.jpg";
import NavBar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutUsSection />

      <section className="counterup-area dark-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-counter-item white fadeInUp wow">
                <div className="icon">
                  <i className="flaticon-rating"></i>
                </div>
                <div className="content">
                  <span className="count-num">14,567</span>
                  <h4 className="title">Positive Reviews</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-counter-item white fadeInUp wow">
                <div className="icon">
                  <i className="flaticon-conversation-1"></i>
                </div>
                <div className="content">
                  <span className="count-num">567</span>
                  <h4 className="title">Good Comments</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-counter-item white fadeInUp wow">
                <div className="icon">
                  <i className="flaticon-email"></i>
                </div>
                <div className="content">
                  <span className="count-num">36,778</span>
                  <h4 className="title">App Downloads</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-counter-item white fadeInUp wow">
                <div className="icon">
                  <i className="flaticon-trophy"></i>
                </div>
                <div className="content">
                  <span className="count-num">30</span>
                  <h4 className="title">Best Awards</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-area dark-bg">
        <div className="shape-1">
          <img src={ShapeFive} alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title white">
                <span className="subtitle">why choose this</span>
                <h3 className="title extra">
                  Users love appside to make cool landing page
                </h3>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="single-why-us-item white margin-top-60 slideInUp wow">
                <div className="icon gdbg-1">
                  <i className="flaticon-settings-1"></i>
                </div>
                <div className="content">
                  <h4 className="title">Easy Customize</h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </p>
                </div>
              </div>
              <div className="single-why-us-item white slideInUp wow">
                <div className="icon gdbg-2">
                  <i className="flaticon-checked"></i>
                </div>
                <div className="content">
                  <h4 className="title">Fast Secure</h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="center-image">
                <img src={MobileImageTwo} alt="mobile two" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="single-why-us-item white margin-top-60 slideInUp wow">
                <div className="icon gdbg-3">
                  <i className="flaticon-chat-1"></i>
                </div>
                <div className="content">
                  <h4 className="title">Live Chat</h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </p>
                </div>
              </div>
              <div className="single-why-us-item white slideInUp wow">
                <div className="icon gdbg-4">
                  <i className="flaticon-cloud"></i>
                </div>
                <div className="content">
                  <h4 className="title">Secure Data</h4>
                  <p>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-work-area dark-bg">
        <div className="shape-1">
          <img src={ShapeSix} alt="" />
        </div>
        <div className="shape-2">
          <img src={ShapeSeven} alt="" />
        </div>
        <div className="shape-3">
          <img src={ShapeSix} alt="" />
        </div>
        <div className="shape-4">
          <img src={ShapeSeven} alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title white">
                <span className="subtitle">Working Process</span>
                <h3 className="title">How it works?</h3>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="how-it-work-tab-nav">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="account-tab"
                      data-toggle="tab"
                      href="#account"
                      role="tab"
                      aria-controls="account"
                      aria-selected="true"
                    >
                      <i className="flaticon-checked"></i> Log In Account{" "}
                      <span className="number">1</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="settings-tab"
                      data-toggle="tab"
                      href="#settings"
                      role="tab"
                      aria-controls="settings"
                      aria-selected="false"
                    >
                      <i className="flaticon-settings-1"></i> Open Settings{" "}
                      <span className="number">2</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="chat-tab"
                      data-toggle="tab"
                      href="#chat"
                      role="tab"
                      aria-controls="chat"
                      aria-selected="false"
                    >
                      <i className="flaticon-chat-1"></i> Start Your Chat{" "}
                      <span className="number">3</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content fadeIn wow">
                <div
                  className="tab-pane fade show active"
                  id="account"
                  role="tabpanel"
                  aria-labelledby="account-tab"
                >
                  <div className="how-it-works-tab-content white">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="left-content-area">
                          <h4 className="title">Login Account</h4>
                          <p>
                            Innovative solutions with the best. Incididunt dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolor tempor
                            incididunt ut labore et dolore{" "}
                          </p>
                          <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolor tempor incididunt ut labore et
                            dolore Innovative solutions with the best.
                            Incididunt dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor tempor incididunt ut labore et dolore{" "}
                          </p>
                          <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolor tempor incididunt ut labore et
                            dolore Innovative solutions with the best.
                            Incididunt dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor tempor incididunt ut labore et dolore{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-content-area">
                          <div className="img-wrapper">
                            <img src={HowItWorks} alt="how it works" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="settings"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                >
                  <div className="how-it-works-tab-content white">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="left-content-area">
                          <h4 className="title">Login Account</h4>
                          <p>
                            Innovative solutions with the best. Incididunt dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolor tempor
                            incididunt ut labore et dolore{" "}
                          </p>
                          <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolor tempor incididunt ut labore et
                            dolore Innovative solutions with the best.
                            Incididunt dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor tempor incididunt ut labore et dolore{" "}
                          </p>
                          <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolor tempor incididunt ut labore et
                            dolore Innovative solutions with the best.
                            Incididunt dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor tempor incididunt ut labore et dolore{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-content-area">
                          <div className="img-wrapper">
                            <img src={HowItWorks} alt="how it works" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="chat"
                  role="tabpanel"
                  aria-labelledby="chat-tab"
                >
                  <div className="how-it-works-tab-content white">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="left-content-area">
                          <h4 className="title">Login Account</h4>
                          <p>
                            Innovative solutions with the best. Incididunt dolor
                            sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolor tempor
                            incididunt ut labore et dolore{" "}
                          </p>
                          <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolor tempor incididunt ut labore et
                            dolore Innovative solutions with the best.
                            Incididunt dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor tempor incididunt ut labore et dolore{" "}
                          </p>
                          <p>
                            Adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolor tempor incididunt ut labore et
                            dolore Innovative solutions with the best.
                            Incididunt dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolor tempor incididunt ut labore et dolore{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="right-content-area">
                          <div className="img-wrapper">
                            <img src={HowItWorks} alt="how it works" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-member-area dark-bg" id="team">
        <div className="bg-shape-1">
          <img src={TeamShapeDark} alt="" />
        </div>
        <div className="bg-shape-2">
          <img src="../public/assets/img/bg/contact-map-bg-dark.png" alt="" />
        </div>
        <div className="bg-shape-3">
          <img src="../public/assets/img/bg/contact-mobile-bg.png" alt="" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title white">
                <h3 className="title">The Team</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12" style={{ textAlign: "center" }}>
              <div className="single-team-member white">
                <div className="thumb">
                  <img src={TeamMemberThree} alt="team member" />
                  <div className="hover">
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
                    </ul>
                  </div>
                </div>
                <div className="content">
                  <h4 className="title">Reece Kidd</h4>
                  <span className="post">Founder</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="download-area-wrapper white margin-top-120">
                <span className="subtitle">Download now</span>
                <h3 className="title">Available for all device</h3>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolor tempor incididunt ut labore dolore magna.
                </p>
                <div className="btn-wrapper">
                  <a
                    href="google.com"
                    className="boxed-btn btn-rounded gd-bg-1"
                  >
                    <i className="flaticon-apple-1"></i> App Store
                  </a>
                  <a
                    href="google.com"
                    className="boxed-btn btn-rounded gd-bg-2"
                  >
                    <i className="flaticon-android-logo"></i> Play Store
                  </a>
                  <a
                    href="google.com"
                    className="boxed-btn btn-rounded gd-bg-3"
                  >
                    <i className="flaticon-windows"></i> Windows
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
      <div className="preloader-wrapper" id="preloader">
        <div className="preloader">
          <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>
        </div>
      </div>

      <div className="back-to-top">
        <i className="fas fa-angle-up"></i>
      </div>
    </div>
  );
}

export default App;
