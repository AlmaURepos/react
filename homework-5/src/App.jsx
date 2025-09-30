import React from "react";
import { useFormik } from "formik";

function App() {
  const validate = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = "Full name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!values.course) {
      errors.course = "Please select a course";
    }

    if (!values.gender) {
      errors.gender = "Please select gender";
    }

    if (!values.dob) {
      errors.dob = "Date of birth is required";
    }

    if (!values.city) {
      errors.city = "City is required";
    }

    if (!values.country) {
      errors.country = "Country is required";
    }

    if (values.zip && !/^[0-9]+$/.test(values.zip)) {
      errors.zip = "Zip Code must be numbers only";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      course: "",
      gender: "",
      dob: "",
      city: "",
      country: "",
      phone: "",
      education: "",
      address: "",
      state: "",
      zip: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 fw-bold">Course Application</h2>
      <form onSubmit={formik.handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            name="fullName"
            className={`form-control ${
              formik.errors.fullName && formik.touched.fullName ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.errors.fullName && formik.touched.fullName && (
            <div className="invalid-feedback">{formik.errors.fullName}</div>
          )}
        </div>

       
        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input
            type="email"
            name="email"
            className={`form-control ${
              formik.errors.email && formik.touched.email ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="invalid-feedback">{formik.errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Password *</label>
          <input
            type="password"
            name="password"
            className={`form-control ${
              formik.errors.password && formik.touched.password ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
        </div>


        <div className="mb-3">
          <label className="form-label">Course *</label>
          <div>
            {["Course A", "Course B", "Course C"].map((c) => (
              <div className="form-check form-check-inline" key={c}>
                <input
                  type="radio"
                  name="course"
                  value={c}
                  className="form-check-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.course === c}
                />
                <label className="form-check-label">{c}</label>
              </div>
            ))}
          </div>
          {formik.errors.course && formik.touched.course && (
            <div className="text-danger">{formik.errors.course}</div>
          )}
        </div>

   
        <div className="mb-3">
          <label className="form-label">Gender *</label>
          <div>
            {["Male", "Female"].map((g) => (
              <div className="form-check form-check-inline" key={g}>
                <input
                  type="radio"
                  name="gender"
                  value={g}
                  className="form-check-input"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.gender === g}
                />
                <label className="form-check-label">{g}</label>
              </div>
            ))}
          </div>
          {formik.errors.gender && formik.touched.gender && (
            <div className="text-danger">{formik.errors.gender}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth *</label>
          <input
            type="date"
            name="dob"
            className={`form-control ${
              formik.errors.dob && formik.touched.dob ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          {formik.errors.dob && formik.touched.dob && (
            <div className="invalid-feedback">{formik.errors.dob}</div>
          )}
        </div>

 
        <div className="mb-3">
          <label className="form-label">City *</label>
          <input
            type="text"
            name="city"
            className={`form-control ${
              formik.errors.city && formik.touched.city ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.errors.city && formik.touched.city && (
            <div className="invalid-feedback">{formik.errors.city}</div>
          )}
        </div>

  
        <div className="mb-3">
          <label className="form-label">Country *</label>
          <select
            name="country"
            className={`form-select ${
              formik.errors.country && formik.touched.country ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          >
            <option value="">Select country</option>
            <option value="Kazakhstan">Kazakhstan</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
          </select>
          {formik.errors.country && formik.touched.country && (
            <div className="invalid-feedback">{formik.errors.country}</div>
          )}
        </div>

  
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Education</label>
          <select
            name="education"
            className="form-select"
            onChange={formik.handleChange}
            value={formik.values.education}
          >
            <option value="">Select education</option>
            <option value="School">School</option>
            <option value="College">College</option>
            <option value="University">University</option>
          </select>
        </div>

       
        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea
            name="address"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.address}
          ></textarea>
        </div>

        
        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            name="state"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.state}
          />
        </div>

        
        <div className="mb-3">
          <label className="form-label">Zip Code</label>
          <input
            type="text"
            name="zip"
            className={`form-control ${
              formik.errors.zip && formik.touched.zip ? "is-invalid" : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zip}
          />
          {formik.errors.zip && formik.touched.zip && (
            <div className="invalid-feedback">{formik.errors.zip}</div>
          )}
        </div>

        
        <button type="submit" className="btn btn-success w-100">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
