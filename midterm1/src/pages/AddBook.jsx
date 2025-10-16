import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      genre: "",
      rating: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().min(2, "Min 2 chars").required("Required"),
      author: Yup.string().required("Required"),
      genre: Yup.string()
        .oneOf(["fiction", "nonfiction", "tech"], "Invalid genre")
        .required("Required"),
      rating: Yup.number()
        .min(0, "Min 0")
        .max(5, "Max 5")
        .required("Required"),
    }),
    onSubmit: (values) => {
      const newBook = { ...values, id: Date.now() };
      const existing = JSON.parse(localStorage.getItem("books")) || [];
      localStorage.setItem("books", JSON.stringify([...existing, newBook]));
      navigate("/books");
    },
  });

  return (
    <div className="d-flex justify-content-center">
      <form
        onSubmit={formik.handleSubmit}
        className="p-4 border rounded bg-light"
        style={{ width: "400px" }}
      >
        <h3 className="mb-3 text-center">Add a New Book</h3>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            type="text"
            className={`form-control ${
              formik.touched.title && formik.errors.title ? "is-invalid" : ""
            }`}
            {...formik.getFieldProps("title")}
          />
          <div className="invalid-feedback">{formik.errors.title}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            name="author"
            type="text"
            className={`form-control ${
              formik.touched.author && formik.errors.author ? "is-invalid" : ""
            }`}
            {...formik.getFieldProps("author")}
          />
          <div className="invalid-feedback">{formik.errors.author}</div>
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <select
            name="genre"
            className={`form-select ${
              formik.touched.genre && formik.errors.genre ? "is-invalid" : ""
            }`}
            {...formik.getFieldProps("genre")}
          >
            <option value="">Select genre</option>
            {["fiction", "nonfiction", "tech"].map((genre) => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
          </select>
          <div className="invalid-feedback">{formik.errors.genre}</div>
        </div>


        

        <div className="mb-3">
          <label className="form-label">Rating (0–5)</label>
          <input
            name="rating"
            type="number"
            step="0.1"
            className={`form-control ${
              formik.touched.rating && formik.errors.rating ? "is-invalid" : ""
            }`}
            {...formik.getFieldProps("rating")}
          />
          <div className="invalid-feedback">{formik.errors.rating}</div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Book
        </button>
      </form>
    </div>
  );
}
