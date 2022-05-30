const CounterSection = () => {
  return (
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
  );
};

export default CounterSection;
