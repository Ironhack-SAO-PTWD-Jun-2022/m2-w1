import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  let [theme, setTheme] = useState('light');

  const toggleTheme = (event) => {
    setTheme(event.target.value);
    // theme = event.target.value;
  }

  return (
    <div className={`App ${theme}`}>
      <h1>React - state e eventos</h1>
      <Counter />
      <select onChange={toggleTheme}>
        <option value='light'>Light</option>
        <option value='dark'>Dark</option>
      </select>
    </div>
  );
}

export default App;
