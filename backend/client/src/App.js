import react, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Signup from './Pages/signup';
import Login from './Pages/login';
import Home from './Pages/home';
import Admin from './Pages/admin';
import AddDoctor from './components/addDoctor';
import UserDashboard from './Pages/userDashboard';
import About from './Pages/aboutUs';



function App() {
  return (

    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login } />
        <Route path="/admin" component={Admin} />
        <Route path="/addDoctor" component={AddDoctor} />
        <Route path="/aboutUs" component={About} />
        <Route path="/userDashboard" component={UserDashboard} />
      </div>
    </Router>

  );
}

export default App;
