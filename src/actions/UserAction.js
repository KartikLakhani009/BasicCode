import {VERIFY_EMAIL_ACTION,VERIFY_EMAIL_PATH,VERIFY_PASS_ACTION,VERIFY_PASS_PATH,} from '../config/GlobalStatics';

import API from '../lib/API/index';

export const Fetch_Email = (data) => {
  return async dispatch => {      
    await API(VERIFY_EMAIL_PATH, data, 'post', null)
      .then(json => {
        console.log('called Action');
        console.log(json);
        dispatch({
          type: VERIFY_EMAIL_ACTION,
          payload: json,
        });
      })
      .catch(error => console.error('error', error));
  };
};

export const Fetch_Pass = (data) => {
    return async dispatch => {      
      await API(VERIFY_PASS_PATH, data, 'post', null)
        .then(json => {
          console.log('called Action');
          console.log(json);
          dispatch({
            type: VERIFY_PASS_ACTION,
            payload: json,
          });
        })
        .catch(error => console.error('error', error));
    };
  };