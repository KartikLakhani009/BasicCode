import {connect} from 'react-redux';
import {Fetch_Email,Fetch_Pass, Set_Error_true} from '../actions';

const mapDispatchToProps = dispatch => ({

  VerifyEmailReq: (email,callback) => dispatch(Fetch_Email(email,callback)),

  VerifyPassReq: pass => dispatch(Fetch_Pass(pass,callback)),

  SetError:value=>dispatch(Set_Error_true(value)),

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