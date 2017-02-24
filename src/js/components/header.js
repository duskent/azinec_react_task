import React, {Component} from 'react';
import {Link} from 'react-router';
require('../../scss/header.scss');

class Header extends Component {
  renderAdminButtons(admin) {
    if (admin.admin) {
      return (
        <form className='form-inline admin-buttons'>
          {this.renderSignOut()}
          {this.renderNewEventButton()}
        </form>
      );
    } else {
      return this.renderSignIn();
    }
  }

  renderNewEventButton() {
    return (
      <Link to='/events/new'
        className="btn btn-success navbar-btn">
        New Event
      </Link>
    );
  }

  renderSignOut() {
    return (
      <button type="button"
        className="btn btn-default navbar-btn" onClick={ () => { this.props.signOut() }} aria-label="Right Align">
        Sign out
      </button>
    );
  }

  renderSignIn() {
    return(
      <button type="button" onClick={ () => {this.props.signIn()} }
        className="btn btn-primary navbar-btn" aria-label="Right Align">
        Sign in
      </button>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand">
              AZinec react application
            </Link>
          </div>
          {this.renderAdminButtons(this.props.admin)}
        </div>
      </nav>
    );
  }
}

export default Header;
