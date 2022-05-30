import { TeamMemberThree, TeamShapeDark } from "../images/images";

const TeamMemberSection = () => {
  return (
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
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolor tempor incididunt ut labore dolore magna.
              </p>
              <div className="btn-wrapper">
                <a href="google.com" className="boxed-btn btn-rounded gd-bg-1">
                  <i className="flaticon-apple-1"></i> App Store
                </a>
                <a href="google.com" className="boxed-btn btn-rounded gd-bg-2">
                  <i className="flaticon-android-logo"></i> Play Store
                </a>
                <a href="google.com" className="boxed-btn btn-rounded gd-bg-3">
                  <i className="flaticon-windows"></i> Windows
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberSection;
