import {VERIFY_EMAIL_ACTION,VERIFY_EMAIL_PATH,VERIFY_PASS_ACTION, DEMO_EMAIL_VERIFY,
  VERIFY_PASS_PATH, INVALIDE_DATA_ACTION, REQUEST_ERROR_ACTION , SET_ERROR_TRUE} from '../config/GlobalStatics';

const data = {
  user: [], 
  temp: [],
  error:null,
  errorStatus:false,
  isEmail:null,
};

export default (state = data, action) => {
  let error = null;
  switch (action.type) {
    case VERIFY_EMAIL_ACTION:     

      let emailAddress = action.payload;
      console.log('Before emailAddress : ', emailAddress);

      return {...state, temp: emailAddress}; 

    case VERIFY_PASS_ACTION:
      let user = action.payload;     
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

    case SET_ERROR_TRUE:
      return {...state, errorStatus:action.payload};

    case DEMO_EMAIL_VERIFY:
      return {
        ...state,
        isEmail:action.payload,  
      };

    default:
      return state;
  }
};