import React from "react";
import { useFormik, Field, ErrorMessage } from "formik";
// import ErrorMessage from "./../errorMessage/errorMessage";
import Select from "../select/select";
import classes from "./input.pcss";

const input = (props) => {
  // const fileadComponent = props.type === "select" ? <Select /> : null;

  let addedProps = null;
  let styleClasses = [classes.label];

  if (props.type === "select") {
    addedProps = {
      component: Select,
      changeHandler: props.changeHandler,
    };
    styleClasses.push(classes.is__select);
  }

  if (props.labelClass) {
    styleClasses.push(classes[props.labelClass]);
  }

  const validate = (value) => {
    let error;
    if (value === "") {
      error = "Заполните поле!";
    }
    return error;
  };

  // console.log("name", props.name);

  return (
    <label className={styleClasses.join(" ")}>
      <Field
        // validate={validate}
        className={classes.input}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        required={props.isRequired}
        {...addedProps}
      ></Field>

      {props.inputTitle ? (
        <span className={classes.inputTitle}>{props.inputTitle}</span>
      ) : null}
      <ErrorMessage
        name={props.name}
        render={(msg) => <span className={classes.error}>{msg}</span>}
      />
    </label>
  );
};

export default input;
