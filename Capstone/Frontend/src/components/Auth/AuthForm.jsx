import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { authSliceAction } from "../Store/auth-slice";

import Button from "../UIElement/Button";
import classes from "./AuthForm.module.css";
import useValidateForm from "../hooks/use-validate-form";

const AuthForm = (props) => {
  const history = useHistory();
  const [loginMode, setLoginMode] = useState(true);
  const dispatch = useDispatch();

  const {
    enteredValue: userName,
    inputHasError: userNameHasError,
    setEnteredValueChangeHandler: setUserNameChangeHandler,
    setEnteredValueBlurHandler: setUserNameBlurHandler,
    reset: resetUserName,
    isInputValid: isUserNameValid,
  } = useValidateForm((value) => value.trim() !== "" && value.length >= 10);

  const {
    enteredValue: password,
    inputHasError: passwordHasError,
    setEnteredValueChangeHandler: setPasswordChangeHandler,
    setEnteredValueBlurHandler: setPasswordBlurHandler,
    reset: resetPassword,
    isInputValid: isPasswordValid,
  } = useValidateForm(
    (value) => value.length > 8 && value.includes("@") && value.length >= 10
  );

  const {
    enteredValue: email,
    inputHasError: emailHasError,
    setEnteredValueChangeHandler: setEmailChangeHandler,
    setEnteredValueBlurHandler: setEmailBlurHandler,
    reset: resetEmail,
    isInputValid: isEmailValid,
  } = useValidateForm((value) => value.includes("@") && value.length >= 10);

  const switchLoginMode = useCallback(() => {
    setLoginMode((prev) => !prev);
  }, [setLoginMode]);

  const submitLoginHandler = useCallback(
    (event) => {
      event.preventDefault();

      const userCredentialsObject = {
        username: userName,
        password: password,
        message: "Successfully Logged In",
        success: true,
      };
      dispatch(authSliceAction.login(userCredentialsObject));
      resetUserName();
      resetEmail();
      resetPassword();

      history.push("/");
    },
    [
      dispatch,
      userName,
      password,
      history,
      resetEmail,
      resetUserName,
      resetPassword,
    ]
  );

  const submitSignUpHandler = useCallback(
    (event) => {
      event.preventDefault();
      const userCredentialsObject = {
        username: userName,
        emailaddress: email,
        password: password,
        message: "Successfully Logged In",
        success: true,
      };

      dispatch(authSliceAction.login(userCredentialsObject));
      resetEmail();
      resetPassword();
      resetUserName();
      history.push("/");
    },
    [
      dispatch,
      userName,
      email,
      password,
      history,
      resetEmail,
      resetPassword,
      resetUserName,
    ]
  );

  const disableButtonLogin = !isUserNameValid || !isPasswordValid;
  const disabledButtonSignUp =
    !isUserNameValid || !isPasswordValid || !isEmailValid;
  const userNameInputClasses = `${
    userNameHasError
      ? `${classes["auth-data-input"]} ${classes["auth-data-input-error"]}`
      : `${classes["auth-data-input"]}`
  }`;

  const emailInputClasses = `${
    emailHasError
      ? `${classes["auth-data-input"]} ${classes["auth-data-input-error"]}`
      : `${classes["auth-data-input"]}`
  }`;
  const passwordInputClasses = `${
    passwordHasError
      ? `${classes["auth-data-input"]} ${classes["auth-data-input-error"]}`
      : `${classes["auth-data-input"]}`
  }`;

  return (
    <React.Fragment>
      <form
      autoComplete="off"
        className={classes["auth-form"]}
        onSubmit={loginMode ? submitLoginHandler : submitSignUpHandler}
      >
        <div className={classes["auth-data-container"]}>
          <label htmlFor="userName">
            {loginMode ? "Username" : "Username"}
          </label>
          <input
          autoComplete="off"
            name="userName"
            type="text"
            value={userName}
            onChange={setUserNameChangeHandler}
            className={userNameInputClasses}
            onBlur={setUserNameBlurHandler}
            placeholder="Atleast 10 Characters"
          />
        </div>
        {!loginMode && (
          <div className={classes["auth-data-container"]}>
            <label htmlFor="email">{loginMode ? "Email" : "Email"}</label>
            <input
            
              autoComplete="off"
              name="email"
              type="text"
              value={email}
              onChange={setEmailChangeHandler}
              className={emailInputClasses}
              onBlur={setEmailBlurHandler}
              placeholder="Please enter a valid email"
            />
          </div>
        )}
        <div className={classes["auth-data-container"]}>
          <label htmlFor="password">
            {loginMode ? "Password" : "Password"}
          </label>
          <input
            autoComplete="off"
            name="password"
            type="password"
            value={password}
            onChange={setPasswordChangeHandler}
            onBlur={setPasswordBlurHandler}
            className={passwordInputClasses}
            placeholder="10 characters and 1 special"
          />
        </div>
        <div className={classes["auth-data-container"]}>
          <Button
            disabled={loginMode ? disableButtonLogin : disabledButtonSignUp}
            className={classes["auth-form-confirm-btn"]}
          >
            Submit
          </Button>
        </div>
        <div>
          <span
            className={classes["auth-form-change-login-mode"]}
            onClick={switchLoginMode}
          >
            {loginMode ? "Sign Up" : "Sign In"}
          </span>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AuthForm;
