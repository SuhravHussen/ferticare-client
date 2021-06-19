
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const userContext  = createContext({})


function App() {
 
  const [userInfo , setUserInfo] = useState({})


  return (
   <userContext.Provider value={[userInfo , setUserInfo]}>
    <Router>
      <Switch>
      <PrivateRoute exact path="/">
        <Home/>
      </PrivateRoute>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
      <Route path='/contact'>
          <Home/>
        </Route>
    </Router>
    </userContext.Provider> 
  );
}

export default App;
