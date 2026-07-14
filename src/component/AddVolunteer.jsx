import axios from 'axios';
import React, { useState } from 'react';


const AddVolunteer = () => {

  const [input, setInput] = useState({
    volunteer_id: "",
    full_name: "",
    email: "",
    phone: "",
    date_of_birth: "",
    gender: "",
    address: "",
    blood_group: "",
    department: "",
    year_of_study: "",
    camp_name: "",
    hours_completed: "",
    unit_number: ""
  })

  const inputHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  }

  const readValues = () => {
    console.log(input);

    axios
      .post("http://localhost:3002/add-volunteer", input)
      .then((response) => {
        console.log(response.data);
        alert("Volunteer Registered Successfully");
      })
      .catch((err) => {
        console.log(err);
        alert("Registration Failed");
      })
  }

  return (
    <div>
    

      <div className="container mt-4">
        <div className="card shadow p-4">

          <h2 className="text-center mb-4">Volunteer Registration</h2>

          <div className="row g-3">

            <div className="col-md-6">
              <label>Volunteer ID</label>
              <input
                type="text"
                className="form-control"
                name="volunteer_id"
                value={input.volunteer_id}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="full_name"
                value={input.full_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={input.email}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Phone</label>
              <input
                type="text"
                className="form-control"
                name="phone"
                value={input.phone}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="date_of_birth"
                value={input.date_of_birth}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Gender</label>
              <select
                className="form-control"
                name="gender"
                value={input.gender}
                onChange={inputHandler}
              >
                <option value="">--SELECT--</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={input.address}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Blood Group</label>
              <select
                className="form-control"
                name="blood_group"
                value={input.blood_group}
                onChange={inputHandler}
              >
                <option value="">--SELECT--</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div className="col-md-6">
              <label>Department</label>
              <input
                type="text"
                className="form-control"
                name="department"
                value={input.department}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Year of Study</label>
              <input
                type="text"
                className="form-control"
                name="year_of_study"
                value={input.year_of_study}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Camp Name</label>
              <input
                type="text"
                className="form-control"
                name="camp_name"
                value={input.camp_name}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Hours Completed</label>
              <input
                type="text"
                className="form-control"
                name="hours_completed"
                value={input.hours_completed}
                onChange={inputHandler}
              />
            </div>

            <div className="col-md-6">
              <label>Unit Number</label>
              <input
                type="text"
                className="form-control"
                name="unit_number"
                value={input.unit_number}
                onChange={inputHandler}
              />
            </div>

            <div className="col-12 text-center mt-3">
              <button
                className="btn btn-primary"
                onClick={readValues}
              >
                Register Volunteer
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default AddVolunteer;