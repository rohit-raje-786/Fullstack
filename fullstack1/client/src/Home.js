import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Home.css'

export default class Home extends Component {
   
    render() {
        return (
            <div>
                <Navbar/>
                <div className="home">
                <h1>Home</h1>
                <a href="register">Register</a>
                </div>
                
                <Footer/>
            </div>
        )
    }
}




