import React, { Component } from 'react';
import Button from './Button';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <p>React - Components & Props</p>
        <Button text="Don't click me!"/>
        <Button color='red'/>
      </nav>
    )
  }
}

export default Navbar;