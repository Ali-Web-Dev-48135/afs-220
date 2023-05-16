import { useState, useCallback } from "react";

const useValidateForm = (cb) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  const isInputValid = cb(enteredValue);
  const inputHasError = !isInputValid && enteredValueIsTouched;

  const setEnteredValueChangeHandler = useCallback(
    (event) => {
      setEnteredValue(event.target.value);
    },
    [setEnteredValue]
  );

  const setEnteredValueBlurHandler = useCallback(() => {
    setEnteredValueIsTouched(true);
  }, [setEnteredValueIsTouched]);

  const reset = () => {
    setEnteredValue("");
  };

  return {
    enteredValue,
    setEnteredValueChangeHandler,
    setEnteredValueBlurHandler,
    reset,
    isInputValid,
    inputHasError,
  };
};

export default useValidateForm;
