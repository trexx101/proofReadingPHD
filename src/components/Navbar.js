import React from 'react'
import Link from 'gatsby-link'
import ReactFBLike from 'react-fb-like';

import logo from '../img/logomakr.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="PR BY PHD" width="112" height="28"/>
          </figure>
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
        <Link className="navbar-item" to="/">
          Workshops and Consultation
        </Link>
        <Link className="navbar-item" to="/">
          Content
        </Link>
      </div>
      <div className="navbar-end">
        <div>
        <ReactFBLike language="en_UK" appId="717589285046812" version="v2.12" href="https://www.facebook.com/proofreadingbyPhD/0"/>
        </div>
      
      </div>
    </div>
  </nav>
)

export default Navbar
