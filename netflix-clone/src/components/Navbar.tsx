import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/netflix-logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">
            <img src={logo} width={125} height={75} alt="Netflix" />
          </a>
          <button
            className="navbar-toggler ml-auto bg-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  TV Shows
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  New & Popular
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  My List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Browse By Languages
                </a>
              </li>
            </ul>
            <ul className="navbar-nav d-flex flex-row justify-content-between pr-3">
              <li className="nav-item mx-3" role="button">
                <FontAwesomeIcon
                  icon={faSearch}
                  size="2x"
                  className="text-white"
                />
              </li>
              <li className="nav-item mx-3" role="button">
                <FontAwesomeIcon
                  icon={faBell}
                  size="2x"
                  className="text-white"
                />
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
