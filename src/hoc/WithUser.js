import {connect} from 'react-redux';
import {Fetch_Email,Fetch_Pass} from '../actions';

const mapDispatchToProps = dispatch => ({

  VerifyEmailReq: email => dispatch(Fetch_Email(email)),

  VerifyPassReq: pass => dispatch(Fetch_Pass(pass)),
});

const mapStateToProps = state => {
  return {
    UserData: state.USERSTORE,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);