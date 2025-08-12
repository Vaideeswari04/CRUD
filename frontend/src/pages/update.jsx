import './display.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Update() {
  const [data, setData] = useState({ id: '', name: '', age: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4004/student/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch((err) => console.log("Api link is error", err));
  }, [id]);

  const updateForm = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4004/student/${id}`, data)
      .then(response => {
        setData(response.data);
        navigate('/');
      })
      .catch((err) => console.log("Api link is error", err));
  }

  return (
    <>
      <div className="container upd mt-4">
        <h1 className="mb-4 text-center">Students Update</h1>
        <form onSubmit={updateForm} className="mx-auto" style={{ maxWidth: '350px' }}>
          <div className="form-group mb-3">
           
            <input
              id="id"
              className="form-control"
              type="number"
              name="id"
              value={data.id}
              onChange={(e) => setData({ ...data, id: e.target.value })}
              required
            />
          </div>

          <div className="form-group mb-3">
            
            <input
              id="name"
              className="form-control"
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group mb-3">
           
            <input
              id="age"
              className="form-control"
              type="text"
              name="age"
              value={data.age}
              onChange={(e) => setData({ ...data, age: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Update</button>
        </form>
      </div>
    </>
  );
}
