import React, { Component } from 'react';
import axios from 'axios';
import Modal from '../components/modal';
import '../App.css'

export default class content4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            doctor: [],
            showBookingModal: false,
            doctorId: ""
        };

        this.handleBook = this.handleBook.bind(this);
        this.handleClose = this.handleClose.bind(this);
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
    handleBook(docId) {
        console.log(docId)
        this.setState({ showBookingModal: true, doctorId: docId });
    }

    handleClose() {
        this.state.x = 0;
        this.setState({ showBookingModal: false });
    }

    render() {
        return (
            <div>
                <div className="content3">
                    <table>
                        <caption><span><b>Doctor's &nbsp; List</b></span></caption>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Timing from</th>
                            <th>Timing to</th>
                            <th>Schedule</th>
                        </tr>
                        {
                            this.state.doctor.map((doctor, idx) =>
                                <tr>
                                    <td>{idx + 1}.</td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{doctor.from}:00</td>
                                    <td>{doctor.to}:00</td>
                                    <td><button className="book" onClick={() => { this.handleBook(doctor._id) }}>Book</button>
                                        <button className="cancel">Cancel</button></td>
                                </tr>
                            )}

                    </table>
                </div>
                {this.state.showBookingModal && <Modal doctorId={this.state.doctorId} handleClose={this.handleClose} />}
            </div>
        )
    }
}
