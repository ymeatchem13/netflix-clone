import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SigninForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .max(60, "Your password must contain between 4 and 60 characters.")
        .required("Your password must contain between 4 and 60 characters.")
        .min(4, "Your password must contain between 4 and 60 characters."),
      email: Yup.string()
        .email("Please enter a valid email or phone number")
        .required("Please enter a valid email or phone number"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="container" style={{ height: "90%" }}>
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "90%" }}
        >
          <form
            className="justify-content-center col-xl-3 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4 bg-dark"
            onSubmit={formik.handleSubmit}
          >
            <h2 className="text-white fw-bold mb-4 text-start">Sign In</h2>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg mb-3"
                aria-describedby="emailHelp"
                placeholder="Email or phone number"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-danger small">{formik.errors.email}</p>
              ) : null}
              <input
                type="text"
                id="password"
                name="password"
                className="form-control form-control-lg mb-3"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-danger small">{formik.errors.password}</p>
              ) : null}
              <button
                type="submit"
                className="btn btn-danger form-control form-control-lg mb-3"
              >
                Sign In
              </button>
              <p className="text-white">OR</p>
              <button
                type="button"
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
                  // value={rememberChbxValue}
                  // onChange={handleChkbxChange}
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

export default SigninForm;
