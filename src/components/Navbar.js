import React from 'react'
import Link from 'gatsby-link'
import ReactFBLike from 'react-fb-like';

import logo from '../img/prphd_logo_skinny.png'

const Navbar = () => (
  <nav className="navbar is-black">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-paddingless">
          
            <img src={logo} alt="PR BY PHD" width="300" height="90"/>
          
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About Us
        </Link>
        <Link className="navbar-item" to="/">
          Services
        </Link>
        <Link className="navbar-item" to="/">
          Papers Accepted
        </Link>
        <Link className="navbar-item" to="/about">
          Workshops and Consultation
        </Link>
        <Link className="navbar-item" to="/">
          Content
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
        <div class="field is-grouped">
        <ReactFBLike language="en_UK" appId="717589285046812" version="v2.12" width="60" colorscheme="dark" href="https://www.facebook.com/proofreadingbyPhD/0"/>
        </div>
        </div>
      
      </div>
    </div>
  </nav>
)

export default Navbar
