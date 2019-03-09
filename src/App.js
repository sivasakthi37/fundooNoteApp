/***************************************************************************** 
* 
*  Purpose         : create fundoo application....
* 
*  @description    
* 
*  @file           : app.js
*  @overview       : create fundoo application.....
*  @author         : sivasakthi
*  @version        : 1.0
*  @since          : 23-02-2019
*
******************************************************************************/
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import  Register from './screens/register';
import Login from './screens/login';
import forgetpassword from './screens/forgetpassword';
import resetpassword from './screens/resetpassword';
import dashboard from './screens/dashboard';
/**
 * @description:this is our route component from here our our data flow is starts
 * 
 */
class App extends Component {
  render() {
    return (
      <div className="body">
      {/*Through the BrowserRouter function we give the path for the component   */}
        <Router>
          <div>
            <Route path='/register'  component={ Register} />
            <Route path='/' exact component={Login} />
            <Route path='/login' exact component={Login} />
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
