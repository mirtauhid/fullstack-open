import React from 'react';

const Total = ({ parts }) => {
  var arr = [];
  const add = arr => arr.reduce((a, b) => a + b, 0);
  parts.map(part => arr.push(part.exercises));

  var sum = add(arr);


  return (
    <div>
      <p><strong>total of {sum} exercises </strong></p>

    </div>
  );
};

export default Total;