import React, {Component} from 'react';
import {Link} from 'react-router';

class Header extends Component {
  renderButton(admin) {
    if (admin.admin) {
      return this.renderSignOut();
    } else {
      return this.renderSignIn();
    }
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
            {this.renderButton(this.props.admin)}
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
