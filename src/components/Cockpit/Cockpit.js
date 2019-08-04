import React, { useEffect, useRef } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // setTimeout(() => {
    //   alert('Saved data to cloud!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup processing in useEffect!');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup processing in 2nd useEffect!');
    };
  });

  const classes =[];
  let btnClass = '';
  if (props.showPersons) {
      btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push( styles.red ); //classes = ['red']
  }
  if (props.personsLength <= 1) {
    classes.push( styles.bold ); //classes = ['red', 'bold']
  }

  return (
    <div className={styles.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          ref={toggleBtnRef}
          className={btnClass}
          onClick={props.clicked}>
            Toggle Persons
        </button>
        <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log in</button>}
        </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(Cockpit);
