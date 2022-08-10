import { useState } from "react";
import * as sessionActions from "../../store/session";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState, useAppDispatch } from "../../store/index";
import { User } from "../../CustomTypings";
import "./LoginForm.css";

const LoginForm = ({ user }: { user: User | null }) => {
  const dispatch = useAppDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res: any) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <form className="LoginFormCont" onSubmit={handleSubmit}>
      {errors.length ? (
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
      ) : null}
      <label>
        Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
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
      <button type="submit">Log In</button>
    </form>
  );
};

export default connect((state: RootState) => ({ user: state.session.user }))(
  LoginForm
);
