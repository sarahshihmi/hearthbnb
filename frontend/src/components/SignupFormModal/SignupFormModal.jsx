import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data?.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword:
        "Confirm Password field must be the same as the Password field",
    });
  };

  useEffect(() => {
    if (
      email.length &&
      username.length >= 4 &&
      firstName.length &&
      lastName.length &&
      password.length >= 6 &&
      confirmPassword.length >= 6
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, username, firstName, lastName, password, confirmPassword]);

  return (
    <div className="signup" data-testid='sign-up-form'>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          data-testid='email-input'
        />
        {errors.email && <p data-testid='email-error-message'>{errors.email}</p>}
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          data-testid='username-input'
        />
        {errors.username && <p data-testid='username-error-message'>{errors.username}</p>}
        <input
          placeholder="First Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          data-testid='first-name-input'
        />
        {errors.firstName && <p>{errors.firstName}</p>}
        <input
          placeholder="Last Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          data-testid='last-name-input'
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          data-testid='password-input'
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          data-testid='confirm-password-input'
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        <button type="submit" disabled={disabled} data-testid='form-sign-up-button'>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupFormModal;