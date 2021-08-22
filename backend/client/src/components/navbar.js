import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

export default class navbar extends Component {
    render() {
        return (

            <div className="navbar">
                <div className="nav">
                    <input type="checkbox" name="" id="chk" />
                    <label for="chk" className="show-btn">
                        <i> <b> ≡ </b></i>
                    </label>

                    <div className="logo">
                        <h2>E-Visit <i className="far fa-hospital"></i></h2>
                    </div>
                    <ul className="menu">
                        <li className="link"><Link to="/">Home</Link></li>
                        <li className="link"><Link to="/signup">SignUp</Link></li>
                        <li className="link"><Link to="/login">Login</Link></li>
                        <li className="link"><Link to="/admin">Admin</Link></li>
                        <label for="chk" className="hide-btn">
                            <i>×</i>
                        </label>
                    </ul>

                </div>
            </div>




        )
    }
}
