import React from 'react';
import Content1 from '../components/content1';
import Content2 from '../components/content2';
import Content3 from '../components/content3';
import Footer from '../components/footer';
import '../App.css';
export default function home() {
    return (
        <div className="home">
            <Content1></Content1>
            <div className="body">

                <Content2></Content2>

                <div class="home1">
                    <h1>Get in Touch</h1>
                    <hr></hr>
                    <p>FEEL &nbsp; FREE &nbsp;TO&nbsp; DROP&nbsp; US &nbsp;A &nbsp;LINE&nbsp; TO&nbsp; CONTACT &nbsp;US</p>
                </div>
                <div class="home2">
                    <div class="row-content">
                        <div class="col-content">
                            <i class="fas fa-calendar-check"></i>
                            <h3 >Book Appointment</h3>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quae magnam, culpa excepturi
                                deserunt iure dolor. Dolores atque officiis nemo quam.
                            </p>
                        </div>
                        <div class="col-content">
                            <i class="fas fa-heartbeat"></i>
                            <h3>Health and Wellness</h3>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quae magnam, culpa excepturi
                                deserunt iure dolor. Dolores atque officiis nemo quam.
                            </p>
                        </div>
                        <div class="col-content">
                            <i class="fas fa-notes-medical"></i>
                            <h3>Health Record</h3>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quae magnam, culpa excepturi
                                deserunt iure dolor. Dolores atque officiis nemo quam.
                            </p>
                        </div>
                    </div>
                    <div class="row-content">
                        <div id="labtest" class="col-content">
                            <i class="fas fa-flask"></i>
                            <h3>Lab Tests</h3>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quae magnam, culpa excepturi
                                deserunt iure dolor. Dolores atque officiis nemo quam.
                            </p>
                        </div>
                        <div id="ambulance" class="col-content">
                            <i class="fas fa-ambulance"></i>
                            <h3>Ambulance</h3>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quae magnam, culpa excepturi
                                deserunt iure dolor. Dolores atque officiis nemo quam.
                            </p>
                        </div>
                        <div class="col-content">
                            <i class="fas fa-viruses"></i>
                            <h3>Multispeciality</h3>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Quae magnam, culpa excepturi
                                deserunt iure dolor. Dolores atque officiis nemo quam.
                            </p>
                        </div>
                    </div>
                </div>

                <Content3></Content3>
            </div>
            <Footer></Footer>
        </div>
    )
}