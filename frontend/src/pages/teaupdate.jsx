import './display.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function TeacherUpdate() {
  const [data, setData] = useState({ id: '', name: '', age: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4004/teacher/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch((err) => console.log("Api link is error", err));
  }, [id]);

  const updateForm = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4004/teacher/${id}`, data)
      .then(response => {
        setData(response.data);
        navigate('/teadisplay');
      })
      .catch((err) => console.log("Api link is error", err));
  }

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Teacher Update</h1>
      <form onSubmit={updateForm} className="mx-auto" style={{ maxWidth: '350px' }}>
        <div className="mb-3">
          <input
            type="number"
            name="id"
            className="form-control"
            value={data.id}
            onChange={(e) => setData({ ...data, id: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="age"
            className="form-control"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Update</button>
      </form>
    </div>
  );
}
