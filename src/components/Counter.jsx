import React, { useState } from 'react';
import '../styles/Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('blue');

  const handleIncrement = () => {
    setCount(count + 1);
    setColor(color === 'blue' ? 'green' : 'blue');
  };

  return (
    <div className="counter-container">
      <h1 className="counter-display">Count: {count}</h1>
      <button
        className="increment-button"
        style={{ backgroundColor: color }}
        onClick={handleIncrement}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
