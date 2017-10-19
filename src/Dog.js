import React, { Component } from 'react'

export class Dog extends Component {
  render() {
    return <p>Dog: {this.props.name}</p>
  }
}
