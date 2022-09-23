import { useState } from 'react';
import { connect } from 'react-redux';
import * as sessionActions from '../../store/session';
import { RootState, useAppDispatch } from '../../store/index';
import { User } from '../../CustomTypings';
import './SignupForm.css';
import { Navigate } from "react-router";

const SignupForm = ({ user }: { user: User | null }) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([] as string[]);

  if (user) {
    return <Navigate replace to="/" />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
        })
      ).catch(async (res: any) => {
        const data = await res.json();
        console.log(data);
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      'Confirm Password field must be the same as the Password field',
    ]);
  };

  return (
    <form className="SignupFormCont" onSubmit={handleSubmit}>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}
      <label>
        First Name
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Phone Number
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  SignupForm
);
