/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { connect } from "react-redux";
import toastr from 'toastr';

import TextInput from "./Common/TextInput";
import { userInputValidator } from "../helpers/utils";
import { authUser } from "../actions/authAction";

export class Auth extends Component {
  state = {
    user: {
      username: "",
      password: "",
    },
    errors: {},
    isValid: false,
    saving: false,
    showSignUp: true,
  };

  handleChange = (event) => {
    const field = event.target.name;
    const { user, errors } = this.state;
    user[field] = event.target.value;
    errors[field] = '';
    this.setState({ user, errors });
  };

  validate = () => {
    const { errors, isValid } = userInputValidator(this.state);
    this.setState({ isValid, errors });
    return isValid;
  };

  saveUser = (event) => {
    event.preventDefault();
    if (!this.validate()) {
      return;
    }
    this.setState({ saving: true });
    this.props.authUser(this.state.showSignUp ? 'signup' : 'login', this.state.user)
      .then(() => {})
      .catch((error) => {
        toastr.error(error);
        this.setState({ saving: false });
      });
  };

  toggleShowSignin = () => {
    this.setState({ showSignUp: false });
  };

  toggleShowSignup = () => {
    this.setState({ showSignUp: true });
  };

  render() {
    const { errors, user: { username, password }, showSignUp } = this.state;
    return (
      <div>
        <ul>
          <li onClick={this.toggleShowSignup}>
            <i data-tip data-for="register" className="material-icons">
              person_add
            </i>
          </li>
          <li onClick={this.toggleShowSignin}>
            <i data-tip data-for="login" className="material-icons">
              account_circle
            </i>
          </li>
        </ul>

        <form onSubmit={this.saveUser}>
          <TextInput
            error={errors.username}
            type="text"
            onChange={this.handleChange}
            value={username}
            icon="account_circle"
            name="username"
            placeholder="Username"
          />
          <TextInput
            error={errors.password}
            type="password"
            onChange={this.handleChange}
            value={password}
            icon="lock"
            name="password"
            placeholder="Password"
          />
          <button
            type="submit"
            className="register-btn"
            value="register">
            { showSignUp ? "Register" : "Login" }
          </button>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  error: state.error,
  user: state.userReducer,
});

export const mapDispatchToProps = dispatch => ({
  authUser: (type, user) => dispatch(authUser(type, user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
