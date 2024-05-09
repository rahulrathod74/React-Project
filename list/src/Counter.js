import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
   
      setCount(count - 1);

  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
    </div>
  );
};

export default Counter;
