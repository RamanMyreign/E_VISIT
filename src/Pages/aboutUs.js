import React from 'react';

import Footer from '../components/footer';
import '../App.css';
export default function About() {
    return (

        <div id="about" className="aboutus">
            <div><h1>About Us</h1></div>
            <div className="para">
                <p>This Website is designed for Hospital and Clinic. The motive is to provide patients a facility so that they can book
                    appointmnet from home and not to worry about long queues in hospital for apppointment </p>
                <p>Providing Easy and User friendly Interface. Anyone can create account having a mail id and can book Appointment.</p>

                <h3>Hospital Staff Members are:</h3>
                <p>1. Robin Gupta</p>
                <p>2. Vijay Arora</p>
                <p>3. Sanchit Singh</p>
                <p>4. Anjali Gupta</p>
            </div>
            <div id="contacts">
                <h2>Contact Us</h2>
                <p className="contact"><b>Email: </b> e_visit@gmail.com</p>
                <p className="contact"><b>Address:</b> Street No. 110, SitamGarh</p>
                <p className="contact"><b>Mobile: </b> +919076995607</p>
            </div>



        </div>
    )
}