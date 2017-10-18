import React from 'react'

import {
  PersonForm,
  PurePersonComponent,
  PurePersonComponentChildren,
  PersonComponent,
  PersonComponentSCU,
} from './Person'

import { Dog } from './Dog'

const Me = {}

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

  render() {
    return (
      <div>
        <h1>Shouldn't component update?</h1>
        <PersonForm
          handleNameUpdate={this.updatePersonName.bind(this)}
          handleCatUpdate={this.updateCatName.bind(this)}
          handleDogUpdate={this.updateDogName.bind(this)}
        />
        <div>
          <h4>Component:</h4>
          <PersonComponent name={this.state.name} cat={this.state.cat}>
            <Dog name={this.state.dog.name} />
          </PersonComponent>
          <h4>Should Component Update</h4>
          <PersonComponentSCU name={this.state.name} cat={this.state.cat}>
            <Dog name={this.state.dog.name} />
          </PersonComponentSCU>
          <h4>Pure Component (no children)</h4>
          <PurePersonComponent name={this.state.name} cat={this.state.cat} />
          <h4>Pure Component (children)</h4>
          <PurePersonComponentChildren
            name={this.state.name}
            cat={this.state.cat}
          >
            <Dog name={this.state.dog.name} />
          </PurePersonComponentChildren>
        </div>
      </div>
    )
  }
}
