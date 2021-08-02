import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Login extends Component {
    render() {
        return (
            
    <>
    {/*adding nav bar on the top */}
        <Navbar></Navbar>
            {/* login form with no funtionality only for display*/}
        <form className="a">
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>   
        )
    }
}
