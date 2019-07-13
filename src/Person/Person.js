import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm {props.name}! HAHAHA! And I am {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
