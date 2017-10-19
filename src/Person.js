import React, { Component, PureComponent } from 'react'
import _ from 'lodash'

export const Person = props => {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Cat: {props.cat.name}</p>
    </div>
  )
}

/**
 * Regular ol' Component.
 */
export class PersonComponentSCUchildren extends Component {
  shouldComponentUpdate(nextProps) {
    return !_.isEqual(nextProps, this.props)
  }

  render() {
    console.log('PersonComponentSCU (all) Updating')
    return (
      <div>
        <Person {...this.props} />
        {this.props.children}
      </div>
    )
  }
}


/**
 * Implements shouldComponentUpdate w/Lodash's equality, without children
 */
export class PersonComponentSCU extends Component {
  shouldComponentUpdate(nextProps) {
    // for (var n in nextProps) {
    //   if (!_.isEqual(nextProps[n], this.props[n])) {
    //     console.log(n)
    //   }
    // }
    // return !_.isEqual(nextProps, this.props)
    return !_.isEqual(
      _.pick(nextProps, ['name', 'cat']),
      _.pick(this.props, ['name', 'cat']),
    )
  }

  render() {
    console.log('PersonComponentSCU (name/cat) Updating')
    return (
      <div>
        <Person {...this.props} />
        {this.props.children}
      </div>
    )
  }
}


/**
 * Person component but extending PureComponent
 */
export class PurePersonComponent extends PureComponent {
  render() {
    console.log('PurePersonComponent No Children Updating')
    return <Person {...this.props} />
  }
}

/**
 * Person component but extending PureComponent with children
 */
export class PurePersonComponentChildren extends PureComponent {
  render() {
    console.log('PurePersonComponent W/Children Updating')
    return (
      <div>
        <Person {...this.props} />
        {this.props.children}
      </div>
    )
  }
}

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
