import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import SignUp from './Components/signUp'

class App extends React.Component{

  state = {
    users: []
  }

  createUser = user => {
    user.id = new Date().getTime().toString()
    this.setState({
      users: [...this.state.users, user]
    })
  }

  render(){
    return (
      <div className="App">
        <SignUp createUser={this.createUser}></SignUp>
        <div>
          <h3 className="my-5 text-center">Register Users</h3>
          <ul className="list-group">
            {this.state.users.map(user => <li key={user.id} className="list-group-item">
              {user.name} -> {user.email}
            </li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
