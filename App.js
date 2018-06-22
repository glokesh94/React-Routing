import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import login from './login';

class App extends Component {
   render() {
      return (
         <Router>
            <div className="container-fluid">
               <h2 className="text-center">Welcome to React Router Tutorial</h2>
               <nav className="navbar navbar-inverse">
                 <ul className="nav navbar-nav">
                   <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/login'}>Login</Link></li>
                 </ul>
               </nav>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/login' component={login} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;