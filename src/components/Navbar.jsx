import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link " href="/">{props.homeTitle} <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="/">{props.aboutTitle}</a>
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

