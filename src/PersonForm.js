import React, { Component } from 'react'

/**
 * The Person Form
 */
export class PersonForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      cat: '',
      dog: '',
    }
  }

  render() {
    return (
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={ev => {
            this.setState({ name: ev.target.value })
          }}
        />
        <button onClick={() => this.props.handleNameUpdate(this.state.name)}>
          Save!
        </button>
        <br />
        <label>Cat's Name:</label>
        <input
          type="text"
          value={this.state.cat}
          onChange={ev => {
            this.setState({ cat: ev.target.value })
          }}
        />
        <button onClick={() => this.props.handleCatUpdate(this.state.cat)}>
          Save!
        </button>
        <br />
        <label>Dogs's Name:</label>
        <input
          type="text"
          value={this.state.dog}
          onChange={ev => {
            this.setState({ dog: ev.target.value })
          }}
        />
        <button onClick={() => this.props.handleDogUpdate(this.state.dog)}>
          Save!
        </button>
      </div>
    )
  }
}
