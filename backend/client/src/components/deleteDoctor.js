import React, { Component } from 'react';
import "../App.css";
import axios from 'axios';

export default class extends Component {
    constructor(props) {
        super(props);

        this.deleteDoctor = this.deleteDoctor.bind(this);


        this.state = {
            doctor: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/doctorList')
            .then(res => {
                this.setState({ doctor: res.data });
            })
            .catch((error) => {
                console.log(error);
            })


    }
    deleteDoctor(doctorId) {
        axios.delete(`http://localhost:5000/doctorList/${doctorId}`)
            .then(res => {
                alert("Doctor Entry Removed")
                console.log("deletedSuccefully");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div id="doctorList" className="content3">
                    <table>
                        <caption><span><b>Doctor's &nbsp; List</b></span></caption>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Timing from</th>
                            <th>Timing to</th>
                            <th>Remove Entry</th>
                        </tr>
                        {
                            this.state.doctor.map((doctor, idx) =>
                                <tr>
                                    <td>{idx + 1}.</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.from + ":00"}</td>
                                    <td>{doctor.to + ":00"}</td>
                                    <td><button className="book" onClick={() => { this.deleteDoctor(doctor._id) }}>Remove</button>
                                    </td>
                                </tr>

                            )}

                    </table>
                </div>
            </div>
        )
    }
}
