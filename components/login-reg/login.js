import React from 'react';
import {login} from '../../redux/actions/login.js';



class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	username:'thomas1117',
    	password:'1234567q'
    }
  }
  handleField(e) {
  	var newState = {};

  	newState[e.target.name] = e.target.value;

  	this.setState(newState);

  }
  handleSubmit(e) {
  	e.preventDefault();

  	login(this.state)
  	


  }
   render() {
    return (
      
      	<form method="POST" onSubmit={e => this.handleSubmit(e)}>
      	<div className='col-sm-6 col-sm-offset-3'>
      		<h2>Login</h2>
      		<div className='form-group'>
      			<label>username</label>
      			<input name='username' type="text" className="form-control" value='thomas1117' onChange={e=>this.handleField(e)}/>
      		</div>
      		<div className='form-group'>
      			<label>password</label>
      			<input name='password' type="text" value='1234567q' className="form-control" onChange={e=>this.handleField(e)}/>
      		</div>
      		<div className='form-group'>
      			<button className='btn btn-primary'>Submit</button>
      		</div>
      	</div>
      	</form>
      
    );
  }
}

export default Login;

