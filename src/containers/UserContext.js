import React, { Component } from 'react'

const windowGlobal = typeof window !== 'undefined' && window

export const UserContext = React.createContext()

export class UserProvider extends Component {
  state = {
    curUser: null,
  }

  componentDidMount() {
    this.setState({
      curUser: JSON.parse(windowGlobal.localStorage.getItem('curUser')),
    })
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
