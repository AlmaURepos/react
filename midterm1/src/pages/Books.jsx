import { useState, useEffect, useCallback } from "react";
import BookCard from "../components/BookCard";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("books");
    if (saved) setBooks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleDelete = useCallback(
    (id) => setBooks((prev) => prev.filter((b) => b.id !== id)),
    []
  );

  const filteredBooks = books
    .filter((b) =>
      b.title.toLowerCase().includes(search.trim().toLowerCase())
    )
    .filter((b) => (filter === "all" ? true : b.genre === filter));

  return (
    <div>
      <h2 className="mb-4">📚 Book List</h2>

      <div className="d-flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="form-control"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All genres</option>
          <option value="fiction">Fiction</option>
          <option value="nonfiction">Nonfiction</option>
          <option value="tech">Tech</option>
        </select>
      </div>

      {filteredBooks.length ? (
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {filteredBooks.map((b) => (
            <BookCard key={b.id} book={b} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}
