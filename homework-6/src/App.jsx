import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";


function App() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      course: "",
      gender: "",
      dob: "",
      education: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      course: Yup.string().required("Please select a course"),
      gender: Yup.string().required("Please select gender"),
      dob: Yup.string().required("Date of birth is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
      zip: Yup.string().matches(/^[0-9]+$/, "Zip must be numbers only"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 shadow bg-white"
        style={{ width: "520px", borderRadius: "0" }}
      >
        <h3 className="text-center mb-4">Course Application</h3>

       
        <div className="mb-3">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            className={`form-control rounded-0 ${
              formik.touched.fullName && formik.errors.fullName
                ? "is-invalid"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="invalid-feedback">{formik.errors.fullName}</div>
          )}
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`form-control rounded-0 ${
                formik.touched.email && formik.errors.email ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="invalid-feedback">{formik.errors.email}</div>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="form-control rounded-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
        </div>

    
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={`form-control rounded-0 ${
              formik.touched.password && formik.errors.password
                ? "is-invalid"
                : ""
            }`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="invalid-feedback">{formik.errors.password}</div>
          )}
        </div>

 
        <div className="mb-3">
          <p className="mb-1 fw-semibold">Which course are you applying for?</p>
          {["Course A", "Course B", "Course C"].map((c) => (
            <div className="form-check" key={c}>
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
          {formik.touched.course && formik.errors.course && (
            <div className="text-danger small">{formik.errors.course}</div>
          )}
        </div>

  
        <div className="row mb-3">
          <div className="col">
            <label className="form-label small">Date of birth</label>
            <input
              type="date"
              name="dob"
              className={`form-control rounded-0 ${
                formik.touched.dob && formik.errors.dob ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.dob}
            />
            {formik.touched.dob && formik.errors.dob && (
              <div className="invalid-feedback">{formik.errors.dob}</div>
            )}
          </div>
          <div className="col d-flex align-items-end">
            {["Male", "Female"].map((g) => (
              <div className="form-check me-3" key={g}>
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
          {formik.touched.gender && formik.errors.gender && (
            <div className="text-danger small">{formik.errors.gender}</div>
          )}
        </div>

   
        <div className="mb-3">
          <label className="form-label small">Education</label>
          <select
            name="education"
            className="form-select rounded-0"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.education}
          >
            <option value="">Select</option>
            <option value="School">School</option>
            <option value="College">College</option>
            <option value="University">University</option>
          </select>
        </div>


        <div className="mb-3">
          <textarea
            name="address"
            placeholder="Address"
            className="form-control rounded-0"
            rows="2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
        </div>

    
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="city"
              placeholder="City"
              className={`form-control rounded-0 ${
                formik.touched.city && formik.errors.city ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city && (
              <div className="invalid-feedback">{formik.errors.city}</div>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              name="state"
              placeholder="State"
              className="form-control rounded-0"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.state}
            />
          </div>
        </div>

  
        <div className="row mb-4">
          <div className="col">
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              className={`form-control rounded-0 ${
                formik.touched.zip && formik.errors.zip ? "is-invalid" : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.zip}
            />
            {formik.touched.zip && formik.errors.zip && (
              <div className="invalid-feedback">{formik.errors.zip}</div>
            )}
          </div>
          <div className="col">
            <input
              type="text"
              name="country"
              placeholder="Country"
              className={`form-control rounded-0 ${
                formik.touched.country && formik.errors.country
                  ? "is-invalid"
                  : ""
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.country}
            />
            {formik.touched.country && formik.errors.country && (
              <div className="invalid-feedback">{formik.errors.country}</div>
            )}
          </div>
        </div>

  
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;