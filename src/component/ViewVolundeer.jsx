import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'


const ViewVolunteer = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.get("http://localhost:3002/view-volunteer")
            .then((response) => {
                changeData(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <NaviBar/>
            <div className="container mt-4">

                <h2 className="text-center mb-4">View Volunteers</h2>

                <table className="table table-bordered table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Volunteer ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Blood Group</th>
                            <th>Department</th>
                            <th>Year of Study</th>
                            <th>Camp Name</th>
                            <th>Hours Completed</th>
                            <th>Unit Number</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((value, index) => (
                            <tr key={index}>
                                <td>{value.volunteer_id}</td>
                                <td>{value.full_name}</td>
                                <td>{value.email}</td>
                                <td>{value.phone}</td>
                                <td>{value.date_of_birth}</td>
                                <td>{value.gender}</td>
                                <td>{value.address}</td>
                                <td>{value.blood_group}</td>
                                <td>{value.department}</td>
                                <td>{value.year_of_study}</td>
                                <td>{value.camp_name}</td>
                                <td>{value.hours_completed}</td>
                                <td>{value.unit_number}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default ViewVolunteer