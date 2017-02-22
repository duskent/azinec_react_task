import React, {Component} from 'react';

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
        className="btn btn-default pull-right" onClick={ () => { this.props.signOut() }} aria-label="Right Align">
        Sign out
      </button>
    );
  }

  renderSignIn() {
    return(
      <button type="button" onClick={ () => {this.props.signIn()} }
        className="btn btn-primary pull-right" aria-label="Right Align">
        Sign in
      </button>
    );
  }

  render() {
    return (
        <h1 className="page-header well">React Application
          {this.renderButton(this.props.admin)}
        </h1>
    );
  }
}

export default Header;
