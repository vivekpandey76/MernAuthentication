import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      username: "",
      email: "",
      password: "",
    };
    this.changeFullName = this.changeFullName.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }

  changeUsername(event) {
    this.setState({
      username: event.target.value,
    });
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const registered = {
      fullName: this.state.fullName,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post("http://localhost:5000/app/signup", registered)
      .then((response) => console.log(response.data));
    
    this.setState({
      fullName: "",
      username: "",
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form">
          <h1 className="heading">Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              onChange={this.changeFullName}
              value={this.state.fullName}
              className="form-control form-group mt-3 mb-3"
            />
            <input
              type="text"
              placeholder="Username"
              onChange={this.changeUsername}
              value={this.state.username}
              className="form-control form-group mb-3"
            />
            <input
              type="text"
              placeholder="Email"
              onChange={this.changeEmail}
              value={this.state.email}
              className="form-control form-group mb-3"
            />
            <input
              type="text"
              placeholder="Password"
              onChange={this.changePassword}
              value={this.state.password}
              className="form-control form-group mb-3"
            />
            <input
              type="submit"
              className="btn btn-primary btn-block"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
