import React from 'react';
import { Field, ErrorMessage } from 'formik';
import classes from './radio.pcss';

const input = (props) => {
  let specialStyle = null;
  switch (props.value) {
    case 'white':
      specialStyle = {
        backgroundColor: 'var(--color-car_white)',
        border: '1px solid #DDDDDD',
      };
      break;
    case 'black':
      specialStyle = { backgroundColor: 'var(--color-car_black)' };
      break;
    case 'grey':
      specialStyle = { backgroundColor: 'var(--color-car_grey)' };
      break;
    case 'red':
      specialStyle = { backgroundColor: 'var(--color-car_red)' };
      break;
    case 'green':
      specialStyle = { backgroundColor: 'var(--color-car_green)' };
      break;
    default:
      break;
  }

  const validate = (value) => {
    let error;
    if (value === '') {
      error = 'Заполните поле!';
    }
    return error;
  };

  return (
    <label className={classes.radioLabel} style={specialStyle}>
      <Field
        type="radio"
        validate={validate}
        value={props.value}
        name={props.name}
        // required={props.isRequired}
        className={classes.radio}></Field>
    </label>
  );
};

export default input;
