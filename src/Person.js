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
    console.log('shouldComponentUpdate   ---- (ALL props)')
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
    return !_.isEqual(
      _.pick(nextProps, ['name', 'cat']),
      _.pick(this.props, ['name', 'cat']),
    )
  }

  render() {
    console.log('shouldComponentUpdate   ---- (name/cat props)')
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
    console.log('PureComponent           ---- No Children')
    return <Person {...this.props} />
  }
}

/**
 * Person component but extending PureComponent with children
 */
export class PurePersonComponentChildren extends PureComponent {
  render() {
    console.log('PureComponent           ---- With Children')
    return (
      <div>
        <Person {...this.props} />
        {this.props.children}
      </div>
    )
  }
}
