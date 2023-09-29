import useInput from '../hooks/use-input';

function validateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  }
  else {
    return false;
  }
}

const BasicForm = (props) => {

  const {
    value: enteredFirstName, isValid: enteredFirstNameIsValid, hasError: firstNameInputHasError, valueChangeHandler: firstNameInputChangeHandler, inputBlurHandler: firstNameInputBlurHandler, reset: resetFirstNameInput
  }
    = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName, isValid: enteredLastNameIsValid, hasError: lastNameInputHasError, valueChangeHandler: lastNameInputChangeHandler, inputBlurHandler: lastNameInputBlurHandler, reset: resetLastNameInput
  }
    = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputHasError, valueChangeHandler: emailInputChangeHandler, inputBlurHandler: emailInputBlurHandler, reset: resetEmailInput
  }
    = useInput(value => validateEmail(value));

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!enteredFirstNameIsValid) {
      return;
    }

    if (!enteredLastNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastNameInputClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';


  return (
    <form>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='firstName'>Nombre</label>
          <input type='text' id='firstName'
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {firstNameInputHasError && (
            <p className='error-text'>Nombre no puede ser vacío.</p>
          )}
        </div>
        <div className='form-control'>
          <label htmlFor='lastName'>Apellido</label>
          <input type='text' id='lastName'
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className='error-text'>Apellido no puede ser vacío.</p>
          )}
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email'
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Email no puede ser vacío o incorrecto.</p>
        )}
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
