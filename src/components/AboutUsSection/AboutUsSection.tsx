const AboutUsSection = () => {
  return (
    <section className="about-us-area style-two dark-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title left-aligned white">
              <span className="subtitle">About Crypto Accountability</span>
              <h3 className="title extra">
                Create crypto contracts to stay accountable
              </h3>
              <p>
                If you don't do the things you want to do you lose your
                ethereum.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-area">
              <ul className="feature-list">
                <li className="single-feature-list wow zoomIn white">
                  <div className="content">
                    <h4 style={{ color: "white" }}>Bet friends</h4>
                    <p>
                      You don't want your friends to get your eth because you
                      smoked a cigarette?
                    </p>
                  </div>
                </li>
                <li className="single-feature-list wow zoomIn white">
                  <div className="content">
                    <h4 style={{ color: "white" }}>Use your enemies</h4>
                    <p>
                      The only thing worse than losing eth to friends is eth to
                      enemies. Use your enemies to stay on track.
                    </p>
                  </div>
                </li>
                <li className="single-feature-list wow zoomIn white">
                  <div className="content">
                    <h4 style={{ color: "white" }}>All alone?</h4>
                    <p>
                      You can use us. Help us keep the lights on if you mess up.
                    </p>
                  </div>
                </li>
                <li className="single-feature-list wow zoomIn white">
                  <div className="content">
                    <h4 style={{ color: "white" }}>Support charities</h4>
                    <p>
                      If you mess up at least the money goes to a good cause.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
