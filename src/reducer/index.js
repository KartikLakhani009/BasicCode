import LoaderStore from './LoaderStore';
import UserStore from './UserStore';
import {combineReducers} from 'redux';

export default combineReducers({
  LOADER: LoaderStore,
  USERSTORE:UserStore,
});