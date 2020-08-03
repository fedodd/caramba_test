import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Select from "../../components/select/select";

import classes from "./form.pcss";

const form = () => {
  const [selectValue, setSelectValue] = useState("");

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
      render={({ setFieldValue, values, errors }) => (
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
          <fieldset className={classes.fieldset}>
            <legend className={classes.inputTitle + " " + classes.is__alt}>
              Цвет
            </legend>
            <div className={classes.radioGroup}>
              <label
                className={classes.radioLabel}
                style={{
                  backgroundColor: "var(--color-car_white)",
                  border: "1px solid #DDDDDD",
                }}
              >
                <Field
                  type="radio"
                  name="color"
                  value="white"
                  className={classes.radio}
                ></Field>
              </label>
              <label
                className={classes.radioLabel}
                style={{ backgroundColor: "var(--color-car_black)" }}
              >
                <Field
                  type="radio"
                  name="color"
                  value="black"
                  className={classes.radio}
                ></Field>
              </label>
              <label
                className={classes.radioLabel}
                style={{ backgroundColor: "var(--color-car_grey)" }}
              >
                <Field
                  type="radio"
                  name="color"
                  value="grey"
                  className={classes.radio}
                ></Field>
              </label>
              <label
                className={classes.radioLabel}
                style={{ backgroundColor: "var(--color-car_red)" }}
              >
                <Field
                  type="radio"
                  name="color"
                  value="red"
                  className={classes.radio}
                ></Field>
              </label>
              <label
                className={classes.radioLabel}
                style={{ backgroundColor: "var(--color-car_green)" }}
              >
                <Field
                  type="radio"
                  name="color"
                  value="green"
                  className={classes.radio}
                ></Field>
              </label>
            </div>
          </fieldset>

          <fieldset className={classes.fieldset + " " + classes.is__select}>
            <label className={classes.label}>
              <Field
                className={classes.input}
                component={Select}
                type="select"
                changeHandler={(value) => setFieldValue("status", value, false)}
                name="status"
              ></Field>
            </label>
          </fieldset>
          <button type="submit">Отправить</button>
        </Form>
      )}
    />

    // </Formik>
  );
};

export default form;
