import {VERIFY_EMAIL_ACTION,VERIFY_EMAIL_PATH,VERIFY_PASS_ACTION,
  VERIFY_PASS_PATH,INVALIDE_DATA_ACTION,REQUEST_ERROR_ACTION} from '../config/GlobalStatics';

import { Alert } from 'react-native';

import API from '../lib/API/index';

export const Fetch_Email = (data) => {
  return async dispatch => {      
    await API(VERIFY_EMAIL_PATH, data, 'post', null)
      .then(json => {
        console.log('called Action');
        console.log(json);
        if(!json.ok)
        {
          dispatch({
            type:REQUEST_ERROR_ACTION,
            payload:json,
          })
        }
        if(json.title !="success")
        {
          dispatch({
            type:INVALIDE_DATA_ACTION,
            payload:json,
          })
        }
       else{ 
         dispatch({
          type: VERIFY_EMAIL_ACTION,
          payload: json,
        });
      }
      })
      .catch(error =>{ 
        dispatch({
          type:REQUEST_ERROR_ACTION,
          payload:error,
        })
        console.error('error', error) 
      });
  };
};

export const Fetch_Pass = (data) => {
    return async dispatch => {      
      await API(VERIFY_PASS_PATH, data, 'post', null)
        .then(json => {
          console.log('called Action');
          console.log(json);
          if(!json.ok)
          {
            Alert.alert("Login Failed", "Please enter correct password provide by BasicCode complaince");
            dispatch({
              type:REQUEST_ERROR_ACTION,
              payload:json,
            })
          }          
         else{ 
           dispatch({
            type: VERIFY_PASS_ACTION,
            payload: json,
          });
        }
        })
        .catch(error =>{
          console.error('error', error);
          Alert.alert("Login Failed", "Please enter correct password provide by BasicCode complaince");
          // dispatch({
          //   type:REQUEST_ERROR_ACTION,
          //   payload:error,
          // })
        });
    };
  };