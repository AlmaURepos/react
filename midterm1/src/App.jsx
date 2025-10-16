import { Routes, Route, NavLink } from "react-router-dom";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <NavLink to="/books" className="navbar-brand">
            Books
          </NavLink>
          <div className="navbar-nav">
            <NavLink to="/books" className="nav-link">
              Books
            </NavLink>
            <NavLink to="/add-book" className="nav-link">
              Add Book
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="container py-4">
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<h2>404 — Page not found</h2>} />
        </Routes>
      </div>
    </div>
  );
}
