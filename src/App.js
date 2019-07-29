import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Fintan', age: 31 },
      { id: '2', name: 'Anielle', age: 27 },
      { id: '3', name: 'Craic Man', age: 45 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    let persons = null;

    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
          } )}
        </div>
      );

      btnClass = styles.Red;
    }

    const classes =[];
    if (this.state.persons.length <= 2) {
      classes.push( styles.red ); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push( styles.bold ); //classes = ['red', 'bold']
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a react App!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;

// React 'useState' example code:
//
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
