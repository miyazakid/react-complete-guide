import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Fintan', age: 31 },
      { name: 'Anielle', age: 27 },
      { name: 'Craic Man', age: 45 }
    ]
  }

  switchNameHandler = () => {
    // console.log('Was Clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Fontana';
    this.setState({
      persons: [
        { name: 'Fontana', age: 31 },
        { name: 'Anielle', age: 27 },
        { name: 'Craic Man', age: 47 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react App!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}


export default App;
