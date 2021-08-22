import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import DeleteDoctor from './deleteDoctor';

class addDoctor extends Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeSpeciality = this.onChangeSpeciality.bind(this);
    this.onChangeTimingFrom = this.onChangeTimingFrom.bind(this);
    this.onChangeTimingTo = this.onChangeTimingTo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: 0,
      name: '',
      speciality: '',
      timing: '',
      slot: [],
      from: '',
      to: '',
      date: new Date(),
    }
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeSpeciality(e) {
    this.setState({
      speciality: e.target.value
    })
  }

  onChangeTimingFrom(e) {
    this.setState({
      from: e.target.value
    })
  }
  onChangeTimingTo(e) {
    this.setState({
      to: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }


  onSubmit = (e) => {
    e.preventDefault();
    var y = this.state.to - this.state.from;
    var z = this.state.from;
    var arr = [];
    const start = ["01", "16", "31", "46"];
    const end = ["15", "30", "45", "00"];

    for (let i = 0; i < y; i++) {
      const hour = parseInt(z) + i;
      for (let j = 0; j < 3; j++) {

        let tim = hour + ":" + start[j] + "-" + hour + ":" + end[j];
        arr.push({ time: tim, isBooked: false });
      }
      let tim = hour.toString() + ":" + start[3] + "-" + (parseInt(z) + 1 + i).toString() + ":" + end[3];
      arr.push({ time: tim, isBooked: false });
      console.log(arr)
    }
    const doctor = {
      name: this.state.name,
      speciality: this.state.speciality,
      from: this.state.from,
      to: this.state.to,
      slot: arr,
      date: this.state.date
    }
    axios.post('http://localhost:5000/doctorList/add', doctor)
      .then(res => {
        console.log(res.data);
        alert("Doctor added Successfully");
      });
    this.setState({
      from: "", to: "", name: "", speciality: ""
    })
  }





  render() {
    return (
      <div className="addDoctor">
        <div className='addDoctor-form'>
          <h1>Doctor Details</h1>

          <form onSubmit={this.onSubmit}>

            <div className="inp-div">
              <i class="fas fa-user-md"></i>
              <input type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.onChangeName} />
            </div>
            <div className="inp-div">
              <i class="fas fa-syringe"></i>
              <input type="text" placeholder="Specilaity" name="speciality" value={this.state.speciality} onChange={this.onChangeSpeciality} />
            </div>
            <div className>
              <i class="fas fa-clock"></i>
              <span><input type="number" placeholder="From" name="from" value={this.state.from} onChange={this.onChangeTimingFrom} /></span>
              <span><input type="number" placeholder="To" name="to" value={this.state.to} onChange={this.onChangeTimingTo} /></span>
            </div >
            <input type="Submit" className="submit" value="submit" />
            <p>Enter Time in 24 hour format</p>
          </form>


        </div>
        <div className="space">

        </div>
        <DeleteDoctor />

      </div>

    )
  }
}

export default addDoctor;