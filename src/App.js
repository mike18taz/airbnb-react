import React, { Component } from 'react';
import Table from './Table';
import './App.css';
import Form from './form';

class App extends Component {
  state = {
      characters: [
        {
          name: 'Ribeira Charming Duplex',
          type: 'House',
        },
        {
          name: 'Horto flat with small garden',
          type: 'Apartment',
        },
        {
          name: 'Ocean View Waikiki Marina w/prkg',
          type: 'Condo',
        },
        {
          name: 'Private Room in Bushwick',
          type: 'Hotel',
        },
      ],
    }
  
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

    removeCharacter = index => {
      const { characters } = this.state
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index
        }),
    })
  }

    render() {
      const { characters } = this.state
      return (
          <div className="container">
              <h1>World!</h1>
              <h2>Welcome React to AirBnB</h2>
              <Table characterData={characters} removeCharacter={this.removeCharacter} />
              <Form handleSubmit={this.handleSubmit} />
          </div>
      )
  }
}



export default App;
