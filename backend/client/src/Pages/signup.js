import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import axios from 'axios';

export default class signup extends Component {


  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      email: '',
      password: '',
      userList: [],

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
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();
    var l = 0;
    this.state.userList.map((userList) => {
      if (this.state.email == userList.email) {
        l = 1;
      }
    })
    if (l == 1) {
      alert("Email already in use");
    }

    if (l == 0) {
      if (!(this.state.firstName == '' || this.state.lastName == '' || this.state.password == '' || this.state.email == '' || this.state.age == '')) {
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(this.state.password)) {
          const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            age: this.state.age,
            email: this.state.email,
            password: this.state.password
          }

          axios.post('http://localhost:5000/newUser/add', user)
            .then(res => console.log(res.data));
          alert("Signup done");
          this.setState({
            firstName: '',
            lastName: '',
            gender: '',
            age: '',
            password: '',
            email: ''
          })
        }
        else {
          alert(' password must contain Minimum eight characters, at least one letter, one number and one special character:')
        }
      }
      else {
        alert("fill valid details");
      }
    }
  }




  render() {

    return (
      <div>
        <div className="signup">
          <div className="signup-form">
            <h1>Create An Account</h1>
            <form onSubmit={this.onSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" value={this.state.firstName} onChange={this.onChangeFirstName} />
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" value={this.state.lastName} onChange={this.onChangeLastName} />
              <label htmlFor="gender">Gender</label>
              <select value={this.state.gender} onChange={this.onChangeGender} name="gender">
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="age">Age</label>
              <input type="text" name="age" value={this.state.age} onChange={this.onChangeAge} />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={this.state.email} onChange={this.onChangeEmail} />
              <label htmlFor="password">Password</label>
              <input id="password1" type="password" value={this.state.password} onChange={this.onChangePassword} />
              <Link className="li" to="/login">Already have an account ?</Link>
              <input type="submit" className="submit" value="submit"></input>
            </form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}
