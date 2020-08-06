import React, { useEffect } from "react";
import Button from "../../components/UI/button/button";
import classes from "./table.pcss";

const tableRow = (props) => {
  const colorStyle =
    props.car.color === "white"
      ? {
          backgroundColor: `var(--color-car_${props.car.color})`,
          border: "1px solid #DDDDDD",
        }
      : {
          backgroundColor: `var(--color-car_${props.car.color})`,
        };

  // translate car status.
  let status = "";

  // translate status
  switch (props.car.status) {
    case "pending":
      status = "Ожидается";
      break;
    case "out_of_stock":
      status = "Нет в наличии";
      break;
    case "in_stock":
      status = "В наличии";
      break;

    default:
      break;
  }

  // thousand separator in price
  const price = isNaN(props.car.price)
    ? props.car.price
    : props.car.price.toLocaleString("ru-RU");

  return (
    <tr
      className={
        props.car.description === ""
          ? classes.row
          : classes.row + " " + classes.with_descr
      }
    >
      <td className={classes.td + " " + classes.is__title}>
        {props.car.title}
      </td>
      <td
        className={classes.td + " " + classes.is__descr}
        style={props.car.description === "" ? { marginBottom: 0 } : null}
      >
        {props.car.description}
      </td>
      <td className={[classes.td, classes.is__year, classes.is__alt].join(" ")}>
        {props.car.year}
      </td>
      <td className={classes.td + " " + classes.is__color}>
        <div className={classes.color} style={colorStyle}></div>
      </td>
      <td className={classes.td + " " + classes.is__alt}>{status}</td>
      <td className={classes.td + " " + classes.is__price}>{price} руб.</td>
      <td
        className={[classes.td, classes.is__button, classes.is__alt].join(" ")}
      >
        <Button
          type="button"
          text="Удалить"
          styleClass="is__delete"
          withIcon={false}
        />
      </td>
    </tr>
  );
};

export default tableRow;
