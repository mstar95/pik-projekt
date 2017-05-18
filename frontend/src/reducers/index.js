import { combineReducers } from 'redux';
import login from './login';
import { reducer as formReducer } from 'redux-form';

const combined = combineReducers({
  login,
  form: formReducer
})

export default combined
