import React, { Component } from 'react';
import '../App.css';

export default class content1 extends Component {
    render() {
        return (
            <div>
                <div className="content1">

                    <div className="sub-content1">
                        <h1>Make appoinment today !</h1>
                        <p>This is Doctors Schedule. Please <span> Login</span> to make an Appointment</p>
                        <h4>Click Below to check the available Doctors List</h4>
                        <button><a href="#doctorList">Check</a></button>
                    </div>

                </div>
            </div>
        )
    }
}
