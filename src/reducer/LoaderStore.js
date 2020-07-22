 
import {SET_LOADER} from '../config/GlobalStatics';

export default (state = true, action) => {
  switch (action.type) {
    case SET_LOADER:
      state = Boolean(action.payload);
      return state;

    default:
      return state;
  }
};