import React, { Component } from 'react';
import '../components/footer.css';

export default class footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="section-2">
                        <a href="https://www.facebook.com/raman.shuklasid" target="_blank"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="https://www.linkedin.com/in/raman-shukla-b8b9931b5/" target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-dribbble"></i></a>
                    </div>
                    <div className="section-1">
                        <div className="foot-1">
                            <h4><b>ABOUT</b></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil doloribus mollitia, quidem cupiditate
                                accusantium vitae ullam ipsum ducimus nulla. Ipsa, sunt rem aspernatur, id qui iste iure aut aliquid
                                illo fugiat doloribus corrupti. Atque, ad deleniti aliquam maxime ratione praesentium laborum
                                facilis quam neque accusamus quibusdam, dolorum doloremque libero voluptatibus a facere quia
                                inventore temporibus ipsa aliquid! Architecto, ducimus reiciendis!</p>
                        </div>
                        <div className="foot-2">
                            <h4><b>CATEGORIES</b></h4>
                            <ul>
                                <li className="link"><a href="#labtest">Lab Test</a></li>
                                <li className="link"><a href="#ambulance">Ambulance</a></li>
                                <li className="link"><a href="#doctorList">Appoinment</a></li>
                            </ul>
                        </div>
                        <div className="foot-2">
                            <h4><b>QUICK LINKS</b></h4>
                            <ul>
                                <li className="link"><a href="/aboutUs">About Us</a></li>
                                <li className="link"><a href="/aboutUs">Contact Us</a></li>
                                <li className="link"><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="foot-2">
                            <h4><b>CONTACT US</b></h4>
                            <ul>
                                <li className="link"><i className="fa fa-home"> </i> SCO-75 Chandigarh, Inida</li>
                                <li className="link"><i className="fa fa-envelope"></i> betalabsindia@gmail.com</li>
                                <li className="link"><i className="fa fa-phone-square"></i> Mobile: 9260978693</li>

                            </ul>
                        </div>
                    </div>
                    <div className="section-3">
                        <p>Copyright &copy; 2020 All Rights Reserved by RS-NS.</p>
                    </div>
                </footer>
            </div>
        )
    }
}
