import React, { Component } from 'react'

export class Dog extends Component {
  render() {
    return <p>Dog's name: {this.props.name}</p>
  }
}
