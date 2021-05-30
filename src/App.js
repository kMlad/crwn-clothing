import "./App.css";
import { useState, useEffect } from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { Route, Switch } from "react-router-dom";
import SignInSignUpPage from "./pages/signin-signup-page/signin-signup-page.component";
import { auth } from "./firebase/firebase.utils";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin-signup" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
