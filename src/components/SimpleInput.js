import { useRef, useState } from 'react'

// Clase 233: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599950#search
// Tomar valores del input: onChange y Submit con Ref
const SimpleInput = (props) => {
  const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('');

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const formSubmitHandler = event => {
    event.preventDefault();
    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    console.log(enteredName);

    setEnteredName('');
    nameInputRef.current.value = '  '
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
