import React, { useState, useRef, useCallback } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const lastNameRef = useRef(null);

  const handleFocus = () => {
    lastNameRef.current.focus();
  };

  const showData = useCallback(() => {
    alert(`First Name: ${firstName}, Last Name: ${lastName}`);
  }, [firstName, lastName]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Form</h2>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input
          type="text"
          className="form-control"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name</label>
        <input
          type="text"
          className="form-control"
          ref={lastNameRef}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <button className="btn btn-primary me-2" onClick={handleFocus}>
        Фокус на фамилию
      </button>
      <button className="btn btn-success" onClick={showData}>
        Показать данные
      </button>
    </div>
  );
}

export default App;
