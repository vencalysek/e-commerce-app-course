import React, {Component} from "react";
import "./App.css";

// moduls
import {Switch, Route} from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

// redux imports
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

// components
import HomePage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ShopPage from "./pages/shop/Shop";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props

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
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        // if userAuth == null -> user signedOut, setState currentUser: null
        setCurrentUser(userAuth);
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
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // user.action function taking user as a argument, puting it into payload
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

// first argument of connect is mapStateToProps function, as we dont need it here just pass null as first argument
export default connect(null, mapDispatchToProps)(App);
