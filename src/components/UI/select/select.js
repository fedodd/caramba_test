import React from "react";
import SelectSearch from "react-select-search";

import classes from "./select.pcss";
import inputClasses from "./../input/input.pcss";

const select = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const options = [
    { value: "in_stock", name: "В наличии" },
    {
      value: "pending",
      name: "Ожидается",
    },
    { value: "out_of_stock", name: "Нет в наличии" },
  ];

  let selectClasses = classes;
  selectClasses.input = inputClasses.input;

  return (
    <SelectSearch
      options={options}
      value={field.value}
      name={field.name}
      onChange={(value) => props.changeHandler(value)}
      placeholder="Статус"
      className={(key) => selectClasses[key]}
    />
  );
};

export default select;
