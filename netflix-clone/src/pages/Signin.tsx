import React from "react";
import SigninNavbar from "../components/SigninNavbar";
import bg from "../assets/netflix-signup.jpg";
import SigninForm from "../components/SigninForm";

const signup = () => {
  return (
    <>
      <div
        className=""
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <SigninNavbar />
        <SigninForm />
      </div>
    </>
  );
};

export default signup;
