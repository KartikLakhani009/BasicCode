import { Alert } from 'react-native'; 
import API from '../lib/API/index';
import { VERIFY_EMAIL_PATH,DEMO_EMAIL_VERIFY } from '../config/GlobalStatics'

export const login =  (loginInput,callback) => {
  const { email } = loginInput;
  return async dispatch => { 
     await API(VERIFY_EMAIL_PATH,{"email":email},'post',null)      
      .then((json) => {
        // console.log("res : ",json);
        if (json.title =="succes") { 
          callback(json.json);
          if(json.json.IsPresent==true){
          dispatch({
            type: DEMO_EMAIL_VERIFY,
            payload:{ ...json.json },
          });
        }
        } else {
          Alert.alert('Login Failed', 'Username is incorrect');
          callback(json);
        }
      })
      .catch((err) => {
        Alert.alert('Login Failed', 'Some error occured, please retry');
        callback(err);
        console.log(err);
      });
  };
};