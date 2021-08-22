import React, { Component } from 'react';
import "../App.css";
import axios from 'axios';

export default class extends Component {
    state = {
        x: 0,
        doctor: [],
    };

    componentDidMount() {
        axios.get('http://localhost:5000/doctorList')
            .then(res => {
                this.setState({ doctor: res.data });
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
                        </tr>
                        {
                            this.state.doctor.map((doctor, idx) =>
                                <tr>
                                    <td>{idx + 1}.</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.from + ":00"}</td>
                                    <td>{doctor.to + ":00"}</td>
                                </tr>

                            )}

                    </table>
                </div>
            </div>
        )
    }
}
