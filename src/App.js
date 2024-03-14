import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Homepage from './components/Homepage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Homepage username={username} />
      )}
    </div>
  );
};

export default App;