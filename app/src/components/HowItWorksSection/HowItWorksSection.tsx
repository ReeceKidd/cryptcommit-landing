import { HowItWorks, ShapeSeven, ShapeSix } from "../images/images";

const HowItWorksSection = () => {
  return (
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
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolor tempor incididunt ut labore dolore magna.
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
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
                        </p>
                        <p>
                          Adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolor tempor incididunt ut labore et dolore
                          Innovative solutions with the best. Incididunt dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
                        </p>
                        <p>
                          Adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolor tempor incididunt ut labore et dolore
                          Innovative solutions with the best. Incididunt dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
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
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
                        </p>
                        <p>
                          Adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolor tempor incididunt ut labore et dolore
                          Innovative solutions with the best. Incididunt dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
                        </p>
                        <p>
                          Adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolor tempor incididunt ut labore et dolore
                          Innovative solutions with the best. Incididunt dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
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
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
                        </p>
                        <p>
                          Adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolor tempor incididunt ut labore et dolore
                          Innovative solutions with the best. Incididunt dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
                        </p>
                        <p>
                          Adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolor tempor incididunt ut labore et dolore
                          Innovative solutions with the best. Incididunt dolor
                          sit amet, consectetur adipiscing elit, sed do eiusmod
                          tempor incididunt ut labore et dolor tempor incididunt
                          ut labore et dolore{" "}
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
  );
};

export default HowItWorksSection;
