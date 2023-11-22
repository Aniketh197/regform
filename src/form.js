import React, { useState ,useEffect} from "react";
import "./form.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Form() {
  let [name, setName] = useState("");
  let [usn, setUsn] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");

  const [studentId, setStudentId] = useState(null);

  const params = useParams();

  console.log(params);

  useEffect(() => {
    if(params && params.id){
      setStudentId(params.id);
      getStudentById(params.id);
    }else{
      setStudentId(null);
    }
  }, [params]);

  const getStudentById = async (studentId) => {
    try {
      const response = await axios.get("http://localhost:5000/student/" + studentId);
      const studentData = response.data;

      setName(studentData.name);
      setEmail(studentData.email);
      setPhone(studentData.phone);
      setUsn(studentData.usn);
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
        name: name,
        email: email,
        usn: usn,
        phone: phone,
    };
    console.log(data);

    try {
        let response;
        if(studentId){
          //edit the student
          response = await axios.put("http://localhost:5000/student/" + studentId, data);
        }else{
          //creating the user
          response = await axios.post("http://localhost:5000/student", data);
        }
        alert(response.data);
      } catch (error) {
        alert(error);
      }
    };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>USN</label>
        <input
          type="text"
          placeholder="DAADDAADDD"
          name="Usn"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
          required
        />
        <label>Email Id</label>
        <input
          type="text"
          placeholder="username@example.com"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter your Phone Number"
          name="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">SUBMIT</button>
      </form>
      <div>
        <h4>Entered Details:</h4>
        <p>Name: {name}</p>
        <p>USN: {usn}</p>
        <p>Email: {email}</p>
        <p>Phone: +91 {phone}</p>
      </div>
    </div>
  );
}
export default Form;
