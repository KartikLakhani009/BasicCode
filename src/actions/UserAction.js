import {VERIFY_EMAIL_ACTION,VERIFY_EMAIL_PATH,VERIFY_PASS_ACTION,
  VERIFY_PASS_PATH,INVALIDE_DATA_ACTION,REQUEST_ERROR_ACTION,SET_ERROR_TRUE, DEMO_EMAIL_VERIFY} from '../config/GlobalStatics';

import { Alert } from 'react-native';

import API from '../lib/API/index';
import { FlatList } from 'react-native-gesture-handler';

export const Fetch_Email = (data,callback) => {
  let status = false;
  return async dispatch => {      
    await API(VERIFY_EMAIL_PATH, data, 'post', null)
    .then((json) => {
      // console.log("res : ",json);
      if (json.title =="succes") { 
        callback(json.json);
        if(json.json.IsPresent==true){
        dispatch({
          type: VERIFY_EMAIL_ACTION,
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

export const Fetch_Pass = (data,callback) => {
     return async dispatch => {      
      await API(VERIFY_PASS_PATH, data, 'post', null)
        .then(json => {
          console.log('called Action');
          console.log(json);          
          if(json.json.isLoggedIn==true)
          {  
            callback(json.json);
            dispatch({
              type:VERIFY_PASS_ACTION,
              payload:json.json,
            })        
          }          
         else{ 
          Alert.alert("Login Failed", "Please enter correct password provide by BasicCode complaince");
          callback({json,errorStatus:true});
        }
        })
        .catch(error =>{
          console.error('error', error);
          callback({error,errorStatus:true});
          Alert.alert("Login Failed", "Please enter correct password provide by BasicCode complaince");
          // dispatch({
          //   type:REQUEST_ERROR_ACTION,
          //   payload:error,
          // })
        });
    };
  };

export const Set_Error_true=()=>{
  return{
    type: SET_ERROR_TRUE,
    payload: true,
  }
}