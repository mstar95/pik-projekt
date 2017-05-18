import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import test from './test';

const combined = combineReducers({
  form: formReducer,
  login,
  test
})

export default combined
