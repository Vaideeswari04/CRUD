import './display.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Display() {
  const [update, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4004/student')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log("Api link is error", err));
  }, []);

  const click = (id) => navigate(`/update/${id}`);

  const dclick = (id) => {
    console.log(id);
    axios.delete(`http://localhost:4004/student/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log("axios error in delete api", err));
    location.reload();
  }

  const inclick = () => {
    navigate(`/insert`);
  }
const teaclick=()=>{
  navigate('/teadisplay')
}
  return (
    <>
      <div className="container mt-4">
        <div className='row'>
          <div className='col-12'>
            <h1 className='head mb-4'> Student Display </h1>
          </div>
          <div className='col-6'>
            <button className="btn btn-primary prim" onClick={inclick}>Insert</button>
             
          </div>
          <div className="col-12">
            <table className="table table-striped table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th  className='actions'  >action</th>
                </tr>
              </thead>
              <tbody>
                {update.map(item => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td   className='actions'>
                      <button className="btn btn-info me-2" onClick={() => click(item._id)}>Update</button>
                      <button className="btn btn-danger" onClick={() => dclick(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="btn btn-info " onClick={teaclick}>Teacher</button>
          </div>
        </div>
      </div>
    </>
  );
}
