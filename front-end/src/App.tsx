import React, { useState, useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from './store/session';
import Home from './components/Home';
import { useAppDispatch } from './store/index';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import NewUserForm from './components/NewUserForm';
import MainCalendar from './components/MainCalendar';
import { useSelector } from 'react-redux';
import { User } from './CustomTypings';

function App() {
  const dispatch = useAppDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  let user = useRef<User>();

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then((res: User) => (user.current = res))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && user.current && user.current.firstTime ? (
        <Route>
          <NewUserForm />
        </Route>
      ) : (
        isLoaded && (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <LoginForm />
            </Route>
            <Route exact path="/signup">
              <SignupForm />
            </Route>
            <Route exact path="/first-time-client">
              <NewUserForm />
            </Route>
            <Route exact path="/calendar">
              <MainCalendar />
            </Route>
          </Switch>
        )
      )}
    </>
  );
}

export default App;
