import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <Link className="navbar-brand" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link " to="/">{props.homeTitle} <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
      </li>
    </ul>
    <div className="custom-control custom-switch">
    <a className="navbar-brand" href="javacript:void(0)">{props.mode==='dark'?props.devBy:' '}</a>
    </div>
    <div className="custom-control custom-switch">
      <input type="checkbox" className="custom-control-input" onClick={props.ControlMode} id="customSwitch1"/>
      <label className={`custom-control-label text-${props.mode==='dark'?'light':'dark'}`} htmlFor="customSwitch1">Enable Dark Mode</label>
    </div>
    
  </div>
</nav>
  )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  homeTitle : PropTypes.string.isRequired,
  aboutTitle : PropTypes.string.isRequired,
}

