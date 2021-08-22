import React, { Component } from 'react';
import '../App.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import Footer from '../components/footer';



export default class login extends Component {

    constructor(props) {
        super(props);

        this.onChangeEmailId = this.onChangeEmailId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            userList: [],
            emailId: '',
            password: '',
            detail: '',
            flag: 0
        }
    }
    componentDidMount() {
        axios.get('http://localhost:5000/newUser')
            .then(res => {
                this.setState({ userList: res.data });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    onChangeEmailId(e) {
        this.setState({
            emailId: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        var valid = 0;
        this.state.userList.map((userList) => {
            if ((this.state.emailId == userList.email && this.state.password == userList.password)) {
                localStorage.setItem("userEmail", userList.email);
                localStorage.setItem("userName", userList.firstName + " " + userList.lastName);
                localStorage.setItem("userGender", userList.gender);
                localStorage.setItem("userAge", userList.age);
                valid = 1;

                window.location = './userDashboard'
            }
        }
        )
        if (valid == 0) {
            alert("Invalid Credential");
        }



    }


    render() {
        return (
            <div>
                <div className="login">
                    <h1>Login Form</h1>
                    <div className="login-form">

                        <form onSubmit={this.onSubmit}>
                            <label htmlFor="email">Email Id</label>
                            <i class="fas fa-user"></i>
                            <input type="email" placeholder="email" name="email" value={this.state.emailId} onChange={this.onChangeEmailId} />
                            <label htmlFor="password">Enter Password</label>
                            <i class="fas fa-unlock-alt"></i>
                            <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
                            <Link className="li" to="/signup">New User? Create Account.</Link>
                            <input type="submit" className="submit" value="Login" />
                            <p>{this.state.detail}</p>

                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
