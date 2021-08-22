import React, { Component } from 'react';
import '../App.css';
import Content4 from '../components/content4';
import Footer from '../components/footer';


export default class userDashboard extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        window.location = './';
    }

    render() {
        return (
            <div>
                <div className="userDashboard">
                    <div className="header">
                        <div className="header1">
                            <h1>
                                Welcome {localStorage.getItem('userName')}
                            </h1>
                            <h4>Make Appointment today</h4>
                            <p>Name :-  {localStorage.getItem('userName')}</p>
                            <p>Age :-  {localStorage.getItem('userAge')}</p>
                            <p>Gender :-  {localStorage.getItem('userGender')}</p>
                            <p>Email :-  {localStorage.getItem('userEmail')}</p>
                        </div>
                        <div className="header2">
                            <img src=
                                'http://iconsetc.com/icons-watermarks/flat-circle-white-on-yellow/bfa/bfa_user/bfa_user_flat-circle-white-on-yellow_512x512.png'></img>

                        </div>
                        <button type="button" onClick={this.onLogout}>Logout</button>
                    </div>
                    <Content4></Content4>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
