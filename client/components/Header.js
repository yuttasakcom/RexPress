import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          Rexpress
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="d-lg-flex justify-content-between w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/"
                  exact
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/service"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeclassname="active"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div>
              <NavLink className="btn btn-primary" to="/login">
                <i className="fa fa-sign-in" aria-hidden="true" /> Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
