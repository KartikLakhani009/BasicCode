import {SET_LOADER} from '../config/GlobalStatics';

export const TurnOnLoader = payload => {
  return {
    type: SET_LOADER,
    payload,
  };
};