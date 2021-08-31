import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [isValid, setIsValid] = useState(true);
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = event => {
    

    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
    
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0)
    {
      setIsValid(false);
      return ;
    }
    
    
    props.onAddGoal(enteredValue);
	setEnteredValue('')
  };

  //dynamically adding class name 'invalid'
  return (
		<form onSubmit={formSubmitHandler}>
			<div className={`form-control ${ !isValid ? 'invalid' : ' '}`}>
				<label className={`${ !isValid ? 'invalid' : ''}`} >
					Course Goal
				</label>
				<input
					type="text"
					value={enteredValue}
					
						/* one way of bringing dynamci css
					style={{
						borderColor: !isValid ? "red" : "black",
						background: !isValid ? "salmon" : "white",
					}}
				*/
				
					onChange={goalInputChangeHandler}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
  );
};

export default CourseInput;
