import { Logo } from "../images/images";

const NavBar = () => {
    return (
      <nav className="navbar navbar-area navbar-expand-lg nav-absolute white nav-style-01">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <div className="logo-wrapper">
              <a href="index.html" className="logo">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#appside_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="nav-right-content">
            <ul>
              <li className="button-wrapper">
                <a
                  href={process.env.REACT_APP_APP_URL}
                  className="boxed-btn btn-rounded"
                >
                  Use App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;
