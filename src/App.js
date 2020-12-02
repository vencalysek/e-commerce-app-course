import React, {Component} from "react";
import "./App.css";

// moduls
import { Switch, Route } from 'react-router-dom';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

// components
import HomePage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ShopPage from "./pages/shop/Shop";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser: user})
      // console.log(user);

      // if userAuth exists -> user singedIn
      if (userAuth) {
        // in firebase.utils.js'createUserProfileDocument()' returns userRef, now we using that object here
        //? take user object from db 
        const userRef = await createUserProfileDocument(userAuth);

        // taking DocumentSnapshot of userRef object
        userRef.onSnapshot(snapShot => {

          //? and save it to local state
          // seting up state, .data() methods give us a properies of object
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state));
          
        });
      } else {
          // if userAuth == null -> user signedOut, setState currentUser: null
          this.setState({currentUser: userAuth})
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* currentUser props, to check if signIn or signOut */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
