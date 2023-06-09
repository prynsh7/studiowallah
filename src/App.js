import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter
      basename={process.env.PUBLIC_URL}
      >
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
