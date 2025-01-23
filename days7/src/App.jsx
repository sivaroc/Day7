/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
        <div className="counter">
          <h2>{count}</h2>
          <div className="buttons">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={buttonStyle}>
        Increment
      </button>
      <button onClick={decrement} style={buttonStyle}>
        Decrement
      </button>
    </div>
  );
}

const buttonStyle = {
  margin: '5px',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default App;

