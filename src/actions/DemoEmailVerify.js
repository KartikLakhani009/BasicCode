import { Alert } from 'react-native'; 
import API from '../lib/API/index';
import { VERIFY_EMAIL_PATH } from '../config/GlobalStatics'
import { Demo_Email_Verify} from './index'

export const login =  (loginInput) => {
  const { email } = loginInput;
  return async dispatch => { 
     await API(VERIFY_EMAIL_PATH,{"email":email},'post',null)      
      .then((json) => {
        console.log("res : ",json);
        if (json.title =="succes") { 
          dispatch({
            type: DEMO_EMAIL_VERIFY,
            payload:{ ...json.json },
          });
        } else {
          Alert.alert('Login Failed', 'Username is incorrect');
        }
      })
      .catch((err) => {
        Alert.alert('Login Failed', 'Some error occured, please retry');
        console.log(err);
      });
  };
};