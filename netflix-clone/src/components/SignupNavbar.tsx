import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import logo from "../assets/netflix-logo.png";

const SignupNavbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="/home">
            <img src={logo} width={125} height={75} alt="Netflix" />
          </a>
          <button className="btn btn-danger" type="submit">
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
};

export default SignupNavbar;
