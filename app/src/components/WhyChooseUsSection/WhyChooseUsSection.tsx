import { MobileImageTwo, ShapeFive } from "../images/images";

const WhyChooseUsSection = () => {
  return (
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
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolor tempor incididunt ut labore dolore magna.
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
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore
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
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore
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
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore
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
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
