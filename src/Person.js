import React, { Component, PureComponent } from 'react'
import _ from 'lodash'

export const Person = props => {
  return (
    <div>
      <p>Name: {props.name} (string)</p>
      <p>Cat: {props.cat.name} (object)</p>
    </div>
  )
}

/**
 * Person that implements shouldComponentUpdate using lodash's
 * isEqual on *all* props
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
 * Person that implements shouldComponentUpdate using lodash's
 * isEqual on *name* and *cat* only
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
