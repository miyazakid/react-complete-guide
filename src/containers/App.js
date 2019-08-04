import React, { Component } from 'react';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import AuthContext from '../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Fintan', age: 31 },
      { id: '2', name: 'Anielle', age: 27 },
      { id: '3', name: 'Craic Man', age: 45 }
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

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

    // NOTE: below is the best way to update the state when you are depending on old state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  render() {
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />;
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          {this.state.showCockpit ? (
            <Cockpit
              appTitle={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, styles.App);

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
