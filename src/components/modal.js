import react, { Component } from 'react';
import '../App.css';
import axios from 'axios';


export default class Modal extends Component {

    constructor(props) {
        super(props);

        this.bookAppointment = this.bookAppointment.bind(this);


        this.state = {
            x: 0,
            doctor: [],
            slot: [],
        };

    }

    componentDidMount() {

        axios.get(`http://localhost:5000/doctorList/${this.props.doctorId}`)
            .then(res => {
                console.log(res)
                this.setState({ slot: res.data.slot });

            })

    }
    bookAppointment(slotId, slotTIme) {
        console.log(slotId);
        const appoint = {
            timing: slotTIme,
            patientName: localStorage.getItem('userName'),
            pEmail: localStorage.getItem('userEmail')
        }
        alert("reached");
        axios.post(`http://localhost:5000/doctorList/${this.props.doctorId}/appointments`, appoint).
            then(res => {
                console.log(res);
            })
    }


    render() {
        return (
            <div className="modal display-block">
                <section className="modal-main">
                    <div className="main-content">
                        <div className="modal-header">
                            <h1>Book Meeting for 15 minute</h1>
                            <button className="modal-button" type="button" onClick={this.props.handleClose}>
                                Close
                            </button>
                        </div>
                        <div className="slotContainer">
                            {this.state.slot.map((slot =>
                                <button className="bookSlot" type="button" onClick={() => { this.bookAppointment(slot._id, slot.time) }}><span>{slot.time}</span></button>

                            ))
                            }

                        </div>
                    </div>

                </section>
            </div >
        );
    }
};