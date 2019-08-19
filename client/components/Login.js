import React, { Component } from "react";
import axios from "axios";
import { userInfo } from "os";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    const data = { email, password };
    axios.post("", data).then(userInfo => {
      console.log(userInfo);
      if (userInfo.data.success == true) {
        localStorage.setItem("token", userInfo.data.key);
        this.props.history.push("/success");
      }
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="mainwrapper">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              name="email"
              className="input"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button onClick={this.handleSubmit} className="button is-success">
              Login
            </button>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
