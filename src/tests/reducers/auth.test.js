import authReducer from '../../reducers/auth';

const uid = '1234';

test('Should set uid for login', () => {
  const state = authReducer(undefined, {
    type: 'LOGIN',
    uid: uid
  });

  expect(state.uid).toBe(uid);
});

test('Should clear uid for logout', () => {
  const state = authReducer(undefined, {
    type: 'LOGOUT',
  });

  expect(state.uid).toBeFalsy();
})