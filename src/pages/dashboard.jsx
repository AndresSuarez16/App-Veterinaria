import React, { Component } from 'react'
import Sidebar from '../components/sidebar'
import Header from '../components/header'

export default class dashboard extends Component {
  render() {
    return (
      <div>dashboard
        <Header>
            <div>Bienvenido</div>
        </Header>
        <Sidebar />
      </div>
    )
  }
}
