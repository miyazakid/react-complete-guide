import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Fintan', age: 31 },
      { name: 'Anielle', age: 27 },
      { name: 'Craic Man', age: 45 }
    ],
    showPersons: false
  };

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    // DON'T DO THIS: personsState.persons[0].name = 'Fontana';
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'Anielle', age: 27 },
        { name: 'Craic Man', age: 47 }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Fintan', age: 31 },
        { name: event.target.value, age: 27 },
        { name: 'Craic Man', age: 47 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid #eee',
      borderRadius: '50px',
      padding: '8px 16px 8px 16px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm a react App!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { this.state.showPersons ? 
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'King of Pong!')}
              change={this.nameChangeHandler} />
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
        </div> : null }
      </div>
    );
  }
}

export default App;


// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';
//
// const App = props => {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Fintan', age: 31 },
//       { name: 'Anielle', age: 27 },
//       { name: 'Craic Man', age: 45 }
//     ]
//  });
//
//    const switchNameHandler = () => {
//      // console.log('Was Clicked');
//      // DON'T DO THIS: personsState.persons[0].name = 'Fontana';
//      setPersonsState({
//        persons: [
//          { name: 'Fontana', age: 31 },
//          { name: 'Anielle', age: 27 },
//          { name: 'Craic Man', age: 47 }
//        ]
//      });
//    };
//
//     return (
//       <div className="App">
//         <h1>Hi, I'm a react App!</h1>
//         <p>This is really working!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//       </div>
//     );
// };
//
// export default App;
