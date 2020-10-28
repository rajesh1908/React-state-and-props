import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  state = {
    users: [
      { Name: "John", age: 20 },
      { Name: "Jill", age: 30 },
      { Name: "Peter", age: 40 }
    ],

    title: "Users List"
  };

  makeMeYounger = () => {
    const newState = this.state.users.map((user) => {
      const tempUser = user;
      tempUser.age -= 10;
      return tempUser;
    });

    this.setState({
      newState
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.makeMeYounger}>Make Us 10 Years younger </button>
        <br />
        <h1>{this.state.title}</h1>
        {this.state.users.map((user) => {
          return <User age={user.age}>{user.Name}</User>;
        })}
      </div>
    );
  }
}

export default Users;
