import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
class Header extends Component {
  static propsTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const auth_Links = (
      <ul className="navbar-nav mr-auto">
        <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        <button
          onClick={this.logout.bind(this)}
          className="nav-link btn btn-info btn-sm text-ligth"
        >
          Logout
        </button>

        <li className="nav-items"></li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">
            GET ALL PROJECTS
          </Link>
        </li>
        <li className="nav-items"></li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Final Year Projects
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        ></div>
        {isAuthenticated ? auth_Links : guestLinks}
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Header);
