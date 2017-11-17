import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">BoilerPlate</h1>
      <p>Use this for a quick login page with google.</p>
      <button className="btn" onClick={startLogin}>Log in with <i className="fa fa-google-plus" aria-hidden="true"></i></button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)