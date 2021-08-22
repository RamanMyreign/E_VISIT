import React, { Component } from 'react';
import Footer from '../components/footer';


export default class admin extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeAdmin = this.onChangeAdmin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            userId: '',
            password: '',
            detail: ''
        }
    }
    onChangeAdmin(e) {
        this.setState({
            userId: e.target.value
        })
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.userId == "ramanshukla" && this.state.password == "Admin@123") {
            window.location = '/addDoctor';
        }
        else {
            this.setState({
                detail: "invalid user"
            })
        }
    }

    render() {
        return (
            <div className="admin-main">

                <div className="admin">
                    <h1> Welcome Admin!!!!!</h1>
                    <form onSubmit={this.onSubmit}>
                        <label >Admin Id</label>
                        <div>
                            <i class="fas fa-user-md"></i>
                            <input type="text" value={this.state.userId} onChange={this.onChangeAdmin} />
                        </div>
                        <label >Password</label>
                        <div>
                            <i class="fas fa-unlock-alt"></i>
                            <input type="password" value={this.state.password} onChange={this.onChangePassword} />
                        </div>
                        <input type="submit" className="submit" value="submit" />
                        <p>{this.state.detail}</p>
                    </form>
                </div>
            </div>


        )
    }
}
