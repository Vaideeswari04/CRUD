import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TeacherInsert() {
  const [update, setData] = useState({ id: "", name: "", age: "" });
  const navigate = useNavigate();

  const insertForm = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    axios.post('http://localhost:4004/teacher', update)
      .then(response => {
        setData(response.data);
        navigate('/teadisplay'); // Navigate after successful insert
      })
      .catch((err) => console.log("Api link is error", err));
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Teacher Insert</h1>
      <form onSubmit={insertForm} className="mx-auto" style={{ maxWidth: '400px' }}>
        <div className="mb-3">
          <input
            type="number"
            name="id"
            placeholder="Enter the id"
            className="form-control"
            onChange={(e) => setData({ ...update, id: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Enter the name"
            className="form-control"
            onChange={(e) => setData({ ...update, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            name="age"
            placeholder="Enter the age"
            className="form-control"
            onChange={(e) => setData({ ...update, age: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Insert</button>
      </form>
    </div>
  );
}
