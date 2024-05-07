import React from "react";
import logo from "../assets/netflix-logo.png";

const SigninNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="/home">
            <img src={logo} width={125} height={75} alt="Netflix" />
          </a>
          {/* <button
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
            
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default SigninNavbar;
