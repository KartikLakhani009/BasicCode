import {VERIFY_EMAIL_ACTION,VERIFY_EMAIL_PATH,VERIFY_PASS_ACTION,
  VERIFY_PASS_PATH, INVALIDE_DATA_ACTION, REQUEST_ERROR_ACTION} from '../config/GlobalStatics';

const data = {
  user: [], 
  temp: [],
  error:null,
  errorStatus:false,
};

export default (state = data, action) => {
  let error = null;
  switch (action.type) {
    case VERIFY_EMAIL_ACTION:     

      let d = action.payload.json;
      console.log('Before d : ', d);

      return {...state, temp: d}; 

    case VERIFY_PASS_ACTION:
      let user = action.payload.json;     
      console.log("USer : ",user);
      
      return {...state, user:user};

    case REQUEST_ERROR_ACTION:     

      error = action.payload;
      console.log('error  : ', error);

      return {...state, error:error,errorStatus:true}; 

    case INVALIDE_DATA_ACTION:     

      error = action.payload;
      console.log('date fault  : ', error);

      return {...state, error: error,errorStatus:true}; 

    default:
      return state;
  }
};