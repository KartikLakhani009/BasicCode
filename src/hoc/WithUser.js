import {connect} from 'react-redux';
import {Fetch_Email,Fetch_Pass} from '../actions';

mapDispatchToProps = dispatch => ({
  //   GetFreqDataDispatch: (index, end) => dispatch(Get_Freq_Data_data(index, end)),

  VerifyEmailReq: (email) => dispatch(Fetch_Email(email)),

  VerifyPassReq: pass => dispatch(Fetch_Pass(pass)),
});

mapStateToProps = state => {
  return {
    UserData: state.USERSTORE,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
);