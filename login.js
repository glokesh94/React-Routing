import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
   render() {
      return (
         <div>
            <h2 className="text-center">Login</h2>
             <form action="">
			  <div class="form-group">
			    <label for="email">Email address:</label>
			    <input type="email" class="form-control" id="email"/>
			  </div>
			  <div class="form-group">
			    <label for="pwd">Password:</label>
			    <input type="password" class="form-control" id="pwd"/>
			  </div>
			  <button type="submit" class="btn btn-default">Submit</button>
			</form> 
         </div>
      );
   }
}
export default Login;