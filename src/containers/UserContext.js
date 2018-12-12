import React, { Component } from 'react'

const windowGlobal = typeof window !== 'undefined' && window

export const UserContext = React.createContext()

export class UserProvider extends Component {
  state = {
    curUser: JSON.parse(windowGlobal.localStorage.getItem('curUser')),
  }

  render() {
    console.log('userContext', this.state.curUser)
    return (
      <UserContext.Provider
        value={{ ...this.state, setState: this.setState.bind(this) }}
      >
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
