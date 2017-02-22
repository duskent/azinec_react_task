import Header from '../components/header';
import {connect} from 'react-redux';
import {signIn} from '../actions/header';
import {signOut} from '../actions/header';

function mapStateToProps(state) {
  return {
    admin: state.admin
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: () => {
      dispatch(signIn());
    },
    signOut: () => {
      dispatch(signOut());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
