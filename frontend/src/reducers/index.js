import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import test from './tests';
import testlist from './testlist';
import navbar from './navbar';

const combined = combineReducers({
  form: formReducer,
  login,
  test,
  testlist,
  navbar
})

export default combined
