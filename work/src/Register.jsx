import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      gender: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      gender: Yup.string().required("Please select gender"),
    }),
    onSubmit: (values) => {
      alert("Registration successful!\n" + JSON.stringify(values, null, 2));
      navigate("/welcome");
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 shadow bg-white"
        style={{ width: "400px", borderRadius: "0" }}
      >
        <h3 className="text-center mb-4">Registration</h3>

        <div className="mb-3">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className="form-control rounded-0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-danger small">{formik.errors.fullName}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control rounded-0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger small">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control rounded-0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-danger small">{formik.errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <p className="mb-1">Gender</p>
          {["Male", "Female"].map((g) => (
            <div className="form-check" key={g}>
              <input
                type="radio"
                name="gender"
                value={g}
                className="form-check-input"
                onChange={formik.handleChange}
                checked={formik.values.gender === g}
              />
              <label className="form-check-label">{g}</label>
            </div>
          ))}
          {formik.touched.gender && formik.errors.gender && (
            <div className="text-danger small">{formik.errors.gender}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success w-100 rounded-0">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
