import logo from './logo.svg';
import React from 'react';
import User from './Components/User'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user1: { name: 'Манвел', surname: 'Кроян' },
      user2: { name: 'Иван', surname: 'Петров' },
      user3: { name: 'Саша', surname: 'Белый' },
    };
  }
  showMessage(num) {
    // alert(this.state.name);
    // alert(this.state.name + ' ' + num);
    alert( + num);
  }
  deleteUser(index) {
    this.state.users.splice(index, 1);
    this.setState({ users: this.state.users });
  }

  render() {
    return <div>
      <User
        name={this.state.user1.name}
        surname={this.state.user1.surname}
        num='1'
        showMessage={this.showMessage.bind(this)}
      />
      <User
        name={this.state.user2.name}
        surname={this.state.user2.surname}
        num='2'
        showMessage={this.showMessage.bind(this)}
      />
      <User
        name={this.state.user3.name}
        surname={this.state.user3.surname}
        num='3'
        showMessage={this.showMessage.bind(this)}
      />
    </div>



  }
}

export default App;
