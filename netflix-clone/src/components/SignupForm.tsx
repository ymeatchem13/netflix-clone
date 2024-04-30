import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import React from "react";
import { useState } from "react";

interface SignupFormProps {
  onClick: () => void;
}

const SignupForm = ({ onClick }: SignupFormProps) => {
  const [rememberChbxValue, setRememberChbxValue] = useState("");
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleOnChange = (event: any) =>
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });

  const handleChkbxChange = (event: any) =>
    setRememberChbxValue(event.target.value);

  const submit = (event: any) => {
    event.preventDefault();
    // submit login credentials to API
  };

  return (
    <>
      <div className="container" style={{ height: "90%" }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "90%" }}
        >
          <form
            className="justify-content-center col-xl-3 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4 bg-dark"
            onSubmit={submit}
          >
            <h2 className="text-white fw-bold mb-4 text-start">Sign In</h2>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg mb-3"
                id="emailInput"
                aria-describedby="emailHelp"
                placeholder="Email or phone number"
                onChange={handleOnChange}
                value={loginCredentials.email}
                required
              />
              <input
                type="password"
                className="form-control form-control-lg mb-3"
                id="passwordInput"
                placeholder="Password"
                value={loginCredentials.password}
                onChange={handleOnChange}
                required
              />
              <button
                type="submit"
                className="btn btn-danger form-control form-control-lg mb-3"
                onClick={onClick}
              >
                Sign In
              </button>
              <p className="text-white">OR</p>
              <button
                type="submit"
                className="btn btn-danger form-control form-control-lg mb-3"
              >
                Use a Sign-In Code
              </button>
              <a href="" className="text-white text-decoration-none mb-3">
                Forgot password?
              </a>
              <div className="d-flex mt-3 mb-3">
                <input
                  type="checkbox"
                  className="mt-1"
                  id="InputCheckbox"
                  value={rememberChbxValue}
                  onChange={handleChkbxChange}
                />
                <label className="text-white">&nbsp;Remember me</label>
              </div>
              <p className="d-flex text-white">
                New to Netflix?
                <a href="" className="text-white text-decoration-none">
                  <span>&nbsp;Sign up now.</span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
