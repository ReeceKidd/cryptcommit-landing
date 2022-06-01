import ShapeOne from "../../img/shape/01.png";
import ShapeTwo from "../../img/shape/02.png";
import ShapeThree from "../../img/shape/03.png";
import ShapeFour from "../../img/shape/04.png";
import MobileImageFour from "../../img/mobile-image-4.png";
const Header = () => {
  return (
    <header className="header-area header-bg dark-home-2" id="home">
      <div className="shape-1">
        <img src={ShapeOne} alt="" />
      </div>
      <div className="shape-2">
        <img src={ShapeTwo} alt="" />
      </div>
      <div className="shape-3">
        <img src={ShapeThree} alt="" />
      </div>
      <div className="shape-4">
        <img src={ShapeFour} alt="" />
      </div>

      <div className="header-right-image">
        <img src={MobileImageFour} alt="header right" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="header-inner">
              <h1 className="title wow fadeInDown">
                Create contracts to stay accountable
              </h1>
              <p>
                Wager ethereum with friends, foes and charities to stay on
                track.
              </p>
              <div className="btn-wrapper wow fadeInUp">
                <a
                  href={process.env.REACT_APP_APP_URL}
                  className="boxed-btn btn-rounded"
                >
                  Use App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
