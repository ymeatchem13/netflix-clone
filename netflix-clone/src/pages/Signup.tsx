import React from "react";
import SignupNavbar from "../components/SignupNavbar";
import bg from "../assets/netflix-signup.jpg";

const Signup = () => {
  return (
    <>
      <section
        className=""
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <SignupNavbar />
        <div className="container h-75 d-flex align-items-center">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-white display-2">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-white text-large">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-white">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form className="d-flex flex-row">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                aria-describedby="email"
                placeholder="Email address"
              ></input>
              <button className="btn btn-danger">Get Started</button>
            </form>
          </div>
        </div>
      </section>
      <section
        className=""
        style={{
          backgroundColor: "#000000",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <SignupNavbar />
      </section>
    </>
  );
};

export default Signup;
