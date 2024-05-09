import React from 'react';

const FruitsList = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

  return (
    <div>
      <h2>List of Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;