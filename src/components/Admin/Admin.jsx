import React from 'react';

import firebase from 'firebase';
import { fireAuth, fireDb } from '../../base';

class Admin extends React.Component{
  constructor() {
    super();

    this.state = {
      uid: null,
    }
  };

  componentWillMount() {
    //check to see if user is logged in already
    fireAuth.onAuthStateChanged((user) =>{
      if(user) {
        // if user is logged in add to state
        console.log(user);
       this.addUidToState(user.uid);
      }
    })
  }

  addUidToState = (id) => {
    // grab a copy of the hold state
    let uid = this.state.uid;
    // assign it a new value
    uid = id;
    // set new value to state
    this.setState({ uid });
  }

  authenticateUser = () => {
    // Create an instance of the Facebook provider object:
    const provider = new firebase.auth.GithubAuthProvider();

    fireAuth.signInWithPopup(provider).then((result) => {
      // takes the signed in user info and set it to state
      this.addUidToState(result.user.uid);
    })
  }

  logOut = () => {
    fireAuth.signOut().then(() => {
      this.addUidToState(null);
    }).catch(function(error) {
      console.error(error);
    });
  }

  renderLogin = () => {
    return(
      <div>
        <button onClick={this.authenticateUser}>Login With Github</button>
      </div>
    )
  }

  renderAdmin = () => {
    return(
      <div>
        <h1>Logged IN</h1>
        <button onClick={this.logOut}>LogOut</button>
      </div>

    )
  }

  render() {
    return(
      <div className="admin">
        { this.state.uid ? this.renderAdmin() : this.renderLogin()}
      </div>
    );
  }
}

export default Admin;
