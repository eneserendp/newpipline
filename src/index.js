import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the CI/CD Example App</h1>
        <p>New feature addedsdasddselam!</p>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); 