import {VERIFY_EMAIL_ACTION,VERIFY_EMAIL_PATH,VERIFY_PASS_ACTION,VERIFY_PASS_PATH,} from '../config/GlobalStatics';

const data = {
  user: [], 
  temp: [],
};

export default (state = data, action) => {
  switch (action.type) {
    case VERIFY_EMAIL_ACTION:     

      let d = action.payload.json;
      console.log('Before d : ', d);

      return {...state, temp: d}; 

    case VERIFY_PASS_ACTION:
      let user = action.payload.json;     
      console.log("USer : ",user);

      return {...state, user:user};

    default:
      return state;
  }
};