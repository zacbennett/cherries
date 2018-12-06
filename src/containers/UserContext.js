import React, { Component } from 'react'

export const UserContext = React.createContext()

export class UserProvider extends Component {
  state = {
    curUser: {},
  }

  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, setState: this.setState.bind(this) }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
