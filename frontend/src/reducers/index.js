import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import test from './test';
import navbar from './navbar';

const combined = combineReducers({
  form: formReducer,
  login,
  test,
  navbar
})

export default combined
