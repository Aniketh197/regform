import React from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import './list.css'

function List() {
  const [studentList, setStudentList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/student");
      console.log(response.data);
      setStudentList(response.data);
    } catch (error) {
      alert(error);
    }
  };
  const handleDelete = async (studentId) => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/student/" + studentId
      );
      alert(response.data);
      fetchData();
    } catch (error) {
      alert(error);
    }
  };

  const handleEdit = (studentId) => {
    navigate("/form/" + studentId);
  };

  return(
    <table className="table" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>USN</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((student) => {
            return (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.usn}</td>
                <td>
                  <button onClick={() => handleEdit(student._id)}>Edit</button>
                  <button onClick={() => handleDelete(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
  )
}

export default List;
