import  { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import {Login} from "./compoonents/pages/Login";
import {Home} from "./compoonents/pages/Home";
import {UserManagement} from "./compoonents/pages/UserManagement";
import {Setting} from "./compoonents/pages/Setting";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Login</Link>
        <br />
        <Link to="home">Home</Link>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path ="/home" render = {({match: {url}}) => (
            <Switch>
              <Route exact path={url}>
                <Home />
              </Route>
              <Route path={`${url}/user_management`}>
                <UserManagement />
              </Route>
              <Route path={`${url}/setting`}>
                <Setting />
              </Route>
            </Switch>
          )}>
          </Route>
        </Switch> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
