import React from 'react'

import {
  PurePersonComponent,
  PurePersonComponentChildren,
  PersonComponentSCUchildren,
  PersonComponentSCU,
} from './Person'

import { PersonForm } from './PersonForm'

import { Dog } from './Dog'

/**
 * Entire app
 */
export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Sam',
      cat: {
        name: 'Maeby',
      },
      dog: {
        name: 'Toby',
      },
    }
  }

  updatePersonName(name) {
    this.setState({ name })
  }

  updateCatName(val) {
    this.setState({
      cat: {
        name: val,
      },
    })
  }

  updateDogName(val) {
    this.setState({
      dog: {
        name: val,
      },
    })
  }

  styles() {
    return {
      personRow: {
        display: 'flex',
      },
      personWrapper: {
        width: '50%',
      },
    }
  }

  render() {
    const styles = this.styles()
    return (
      <div>
        <h1>Shouldn't Component Update?</h1>
        <PersonForm
          handleNameUpdate={this.updatePersonName.bind(this)}
          handleCatUpdate={this.updateCatName.bind(this)}
          handleDogUpdate={this.updateDogName.bind(this)}
        />
        <div style={styles.personRow}>
          <div style={styles.personWrapper}>
            <h4>Should Component Update:</h4>
            <pre>{`

!_.isEqual(nextProps, this.props)


            `}</pre>
            <PersonComponentSCUchildren
              name={this.state.name}
              cat={this.state.cat}
            >
              <Dog name={this.state.dog.name} />
            </PersonComponentSCUchildren>
          </div>
          <div style={styles.personWrapper}>
            <h4>Should Component Update</h4>
            <pre>{`
!_.isEqual(
  _.pick(nextProps, ['name', 'cat']),
  _.pick(this.props, ['name', 'cat']),
)
            `}</pre>
            <PersonComponentSCU name={this.state.name} cat={this.state.cat}>
              <Dog name={this.state.dog.name} />
            </PersonComponentSCU>
          </div>
        </div>
        <div style={styles.personRow}>
          <div style={styles.personWrapper}>
            <h4>Pure Component (no children)</h4>
            <PurePersonComponent name={this.state.name} cat={this.state.cat} />
          </div>
          <div style={styles.personWrapper}>
            <h4>Pure Component (children)</h4>
            <PurePersonComponentChildren
              name={this.state.name}
              cat={this.state.cat}
            >
              <Dog name={this.state.dog.name} />
            </PurePersonComponentChildren>
          </div>
        </div>
      </div>
    )
  }
}
