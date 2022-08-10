import React, {useState, useEffect} from 'react';
import Navigation from "./components/Navigation";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Home from './components/Home'
import { useAppDispatch } from './store/index'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

function App() {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/login'>
            <LoginForm/>
          </Route>
          <Route exact path='/signup'>
            <SignupForm/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
