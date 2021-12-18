import  { BrowserRouter, Link } from 'react-router-dom';

import { Router } from './router/Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Login</Link>
        <br />
        <Link to="/home">Home</Link> 
        <br />
        <Router />       
      </BrowserRouter>
    </div>
  );
}

export default App;