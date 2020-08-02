import React from "react";
import SelectSearch from "react-select-search";

import classes from "./select.pcss";

const select = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const options = [
    { value: "in_stock", name: "В наличии" },
    { value: "pednding", name: "Ожидается" },
    { value: "out_of_stock", name: "Нет в наличии" },
  ];

  return (
    <div className={props.className}>
      <SelectSearch
        options={options}
        value={field.value}
        name={field.name}
        onChange={(value) => props.changeHandler(value)}
        placeholder="Статус"
        className={(key) => classes[key]}
      />
    </div>
  );
};

export default select;
