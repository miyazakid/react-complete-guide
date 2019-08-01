import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);

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
          className={btnClass}
          onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default React.memo(Cockpit);
