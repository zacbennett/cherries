import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from '../atoms'

const Container = styled.div`
  .dropdownContent {
    display: none;
  }
  ul {
    list-style: none;
  }
  li.dropDownLink {
    margin-left: 25px;
  }
`
class SideNavLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  //when links are clicked state will change and dropdown will be shown
  toggleMenu(evt) {
    evt.preventDefault()
    this.setState(st => ({
      display: !st.display,
    }))
  }

  //render NavLinks - dropdown menu will be a ul that renders different li's depending on props passed down from SideNav
  render() {
    const display = this.state.display ? 'initial' : 'none'
    return (
      <li>
        <NavLink
          style={{
            textDecoration: 'none',
            color: '#e20031',
            fontWeight: 'bold',
          }}
          key={this.props.name}
          onClick={this.toggleMenu}
        >
          {this.props.name} {!this.state.display ? <>+</> : <>-</>}
        </NavLink>
        <ul className="dropdownContent" style={{ display: display }}>
          {this.props.dropDown.map((li, i) => {
            return (
              <li className="dropDownLink">
                <NavLink
                  style={{
                    textDecoration: 'none',
                    color: '#47525E',
                    marginLeft: '25px',
                    fontWeight: 'bold',
                  }}
                  key={i}
                  to={li.route}
                >
                  {li.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </li>
    )
  }
}

export default SideNavLink
