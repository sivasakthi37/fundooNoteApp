import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import  Register from './screens/register';
import Login from './screens/login';
import forgetpassword from './screens/forgetpassword';
import resetpassword from './screens/resetpassword';
import dashboard from './screens/dashboard';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='/register' component={ Register} />
            <Route path='/login' component={Login} />
            <Route path='/forgetpassword' component={forgetpassword} />
            <Route path='/resetpassword' component={resetpassword} />
             <Route path='/dashboard' component={dashboard} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
