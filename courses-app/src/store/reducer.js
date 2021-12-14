import { combineReducers } from 'redux';
import { authorReducer } from './authors/reducer';
import { courseReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

export default combineReducers({ authorReducer, courseReducer, userReducer });
