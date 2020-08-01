import React from "react";
import { Formik, Field, Form } from "formik";

import classes from "./form.pcss";

const form = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        price: "",
        year: "",
        description: "",
        color: "",
        status: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className={classes.form}>
        <label className={classes.label}>
          <Field
            className={classes.input}
            type="text"
            placeholder="Название"
            name="title"
          ></Field>
          <span className={classes.inputTitle}>Название</span>
        </label>
        <label className={classes.label + " " + classes.short}>
          <Field
            className={classes.input}
            type="text"
            placeholder="Цена"
            name="price"
          ></Field>
          <span className={classes.inputTitle}>Цена</span>
        </label>
        <label className={classes.label + " " + classes.short}>
          <Field
            className={classes.input}
            type="text"
            placeholder="Год"
            name="year"
          ></Field>
          <span className={classes.inputTitle}>Год</span>
        </label>
        <label className={classes.label + " " + classes.wide}>
          <Field
            className={classes.input}
            type="text"
            placeholder="Описание"
            name="description"
          ></Field>
          <span className={classes.inputTitle}>Описание</span>
        </label>
        <label
          htmlFor="color"
          className={classes.label + " " + classes.radioLabel}
        >
          <span className={classes.inputTitle + " " + classes.is__alt}>
            Цвет
          </span>
          <div>
            <Field
              type="radio"
              name="color"
              value="white"
              className={classes.radio}
            ></Field>
            <Field
              type="radio"
              name="color"
              value="black"
              className={classes.radio}
            ></Field>
            <Field
              type="radio"
              name="color"
              value="grey"
              className={classes.radio}
            ></Field>
            <Field
              type="radio"
              name="color"
              value="red"
              className={classes.radio}
            ></Field>
            <Field
              type="radio"
              name="color"
              value="green"
              className={classes.radio}
            ></Field>
          </div>
        </label>

        <label className={classes.label}>
          Статус
          <Field
            className={classes.input + " " + classes.select}
            as="select"
            placeholder="Статус"
            name="status"
          >
            <option>В наличии</option>
            <option>Ожидается</option>
            <option>Нет в наличии</option>
          </Field>
        </label>
        <button type="submit">Отправить</button>
      </Form>
    </Formik>
  );
};

export default form;
