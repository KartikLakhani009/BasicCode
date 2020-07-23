import {VERIFY_EMAIL_ACTION,VERIFY_EMAIL_PATH,VERIFY_PASS_ACTION,
  VERIFY_PASS_PATH,INVALIDE_DATA_ACTION,REQUEST_ERROR_ACTION,SET_ERROR_TRUE, DEMO_EMAIL_VERIFY} from '../config/GlobalStatics';

import { Alert } from 'react-native';

import API from '../lib/API/index';
import { FlatList } from 'react-native-gesture-handler';

export const Fetch_Email = (data,callback) => {
  let status = false;
  return async dispatch => {      
    await API(VERIFY_EMAIL_PATH, data, 'post', null)
      .then(json => {
        console.log('called Action');
        console.log(json);
        if(!json.ok)
        {
          Alert.alert("Login Failed", "Please enter correct email provide by BasicCode complaince");
          // dispatch({
          //   type:REQUEST_ERROR_ACTION,
          //   payload:json,
          // })
          callback = new Promise(function(resolve,reject){
            resolve({json,status});
          });
          return callback;
        }       
       else{ 
        status = true;
        callback = new Promise(function(resolve,reject){
          resolve({json,status});
        });
        return callback;        
         dispatch({
          type: VERIFY_EMAIL_ACTION,
          payload: json,
        });
      }
      })
      .catch(error =>{ 
        callback = new Promise(function(resolve,reject){
          reject({error,status});
        });
        return callback;
        Alert.alert("Login Failed", "Please enter correct email provide by BasicCode complaince");
        // dispatch({
        //   type:REQUEST_ERROR_ACTION,
        //   payload:error,
        // })
        console.error('error', error) 
      });
  };
};

export const Fetch_Pass = (data,callback) => {
  let status = false;
    return async dispatch => {      
      await API(VERIFY_PASS_PATH, data, 'post', null)
        .then(json => {
          console.log('called Action');
          console.log(json);
          if(!json.ok)
          {            
            Alert.alert("Login Failed", "Please enter correct password provide by BasicCode complaince");
            // dispatch({
            //   type:REQUEST_ERROR_ACTION,
            //   payload:json,
            // })
            callback({json,status});
          }          
         else{ 
          status = true;
           dispatch({
            type: VERIFY_PASS_ACTION,
            payload: json,
          });
          callback({json,status});
        }
        })
        .catch(error =>{
          console.error('error', error);
          callback({error,status});
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

export const Demo_Email_Verify=(payload)=>{
  return{
    type: DEMO_EMAIL_VERIFY,
    payload,
  }
}