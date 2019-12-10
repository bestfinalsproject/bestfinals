import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };
  updateInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  passLoginInfo = e => {
    e.preventDefault();
    console.log(this);
    this.props.login(this.state.username, this.state.password);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.passLoginInfo}>
          <div className="form-label-group">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="username"
              required
              autoFocus
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember password
            </label>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
            type="submit"
            onClick={this.notify}
          >
            Sign in
          </button>
          <div className="text-center">
            <a className="small" href="#home">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
