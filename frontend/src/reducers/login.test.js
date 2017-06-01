import { loginSuccess, loginFail, logoutSuccess } from '../actions';
import login from './login';

test('loginSuccess works', () => {
  let state = login(undefined, loginSuccess());
  expect(state).toEqual({
    loggedIn: true,
    failed: false
  });
});

test('loginFail works', () => {
  let state = login(undefined, loginFail());
  expect(state).toEqual({
    loggedIn: false,
    failed: true
  });
});

test('logoutSuccess works', () => {
  let state = login(undefined, logoutSuccess());
  expect(state).toEqual({
    loggedIn: false,
    failed: false
  });
});
