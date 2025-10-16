import React from "react";

function BookCard({ book, onDelete }) {
  const { id, title, author, genre, rating } = book;
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text mb-1">
            <strong>Author:</strong> {author}
          </p>
          <p className="card-text mb-1">
            <strong>Genre:</strong> {genre}
          </p>
          <p className="card-text">
            <strong>Rating:</strong> {rating}
          </p>
          <button className="btn btn-danger w-100" onClick={() => onDelete(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BookCard);
