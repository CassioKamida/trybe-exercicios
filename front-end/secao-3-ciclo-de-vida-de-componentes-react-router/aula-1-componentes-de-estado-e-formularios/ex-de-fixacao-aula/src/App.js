import React from 'react'
import './App.css';

class App extends React.Component {
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { btnOne, btnTwo, btnThree } = this.state;
    return 
  }
}

export default App;
