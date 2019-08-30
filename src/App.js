import React, { useState } from 'react';
import './App.css';

function App() {
  let [name, updateName] = useState('');
  return (
    <div className="App">
      <input
        onChange={e => updateName(e.target.value)}
        value={name}
        name="name"
        id="user-input"
      />
      {name}
      <button onClick={() => updateName('')} id="click-button">
        Click Me!
      </button>
    </div>
  );
}

export default App;
