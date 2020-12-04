import React, {Component} from "react";
import "./App.css";

// modules
import {Switch, Route, Redirect} from "react-router-dom";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

// redux imports
import {connect} from "react-redux";
import {createStructuredSelector} from 'reselect'
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from './redux/user/user.selectors'

// components
import HomePage from "./pages/homepage/Homepage";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";
import ShopPage from "./pages/shop/Shop";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

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
              id: snapShot.id,
              ...snapShot.data(),
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

          {/* if currentUser exist(is loggedin) redirect to homepage, else render sign in/up page */}
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}

// destructuring user from state
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  // user.action function taking user as a argument, puting it into payload
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
