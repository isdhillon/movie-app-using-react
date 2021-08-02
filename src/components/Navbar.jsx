import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    
  
  //navbar 
  render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              {/*adding link on the header */}
  <Link to="/" className="navbar-brand" >Movies Rental</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        {/*adding link to he movies */}
        <Link to="/movies" className="nav-link">Movies<span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        {/*adding link to login */}
      <Link to="/login" className="nav-link">Login</Link>
      </li>
    </ul>
    
  </div>
</nav>
        )
    }
}
