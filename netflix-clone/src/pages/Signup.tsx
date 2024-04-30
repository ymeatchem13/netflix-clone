import React from "react";
import SignupNavbar from "../components/SignupNavbar";
import bg from "../assets/netflix-signup.jpg";
import SignupForm from "../components/SignupForm";

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
        <SignupNavbar />
        <SignupForm />
      </div>
    </>
  );
};

export default signup;
