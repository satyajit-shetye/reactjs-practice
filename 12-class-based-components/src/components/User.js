import { Component } from 'react';
import classes from './User.module.css';

export default class User extends Component{

  componentWillUnmount() {
    console.log('Cleanup tasks here');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}
