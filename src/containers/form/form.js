import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import Select from "../../components/UI/select/select";
import Button from "../../components/UI/button/button";
import Input from "../../components/UI/input/input";
import Radio from "../../components/UI/radio/radio";

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
          <fieldset className={classes.fieldset}>
            <Input
              type="text"
              placeholder="Название"
              name="title"
              inputTitle="Название"
            />
            <Input
              labelClass="is__short"
              type="text"
              placeholder="Цена"
              name="price"
              inputTitle="Цена"
            />
            <Input
              labelClass="is__short"
              type="text"
              placeholder="Год"
              name="year"
              inputTitle="Год"
            />
          </fieldset>
          <Input
            labelClass="is__wide"
            type="text"
            placeholder="Описание"
            name="description"
            inputTitle="Описание"
          />
          <fieldset className={classes.fieldset}>
            <legend className={classes.legend}>Цвет</legend>
            <div className={classes.radioGroup}>
              <Radio type="radio" name="color" value="white" />
              <Radio type="radio" name="color" value="black" />
              <Radio type="radio" name="color" value="grey" />
              <Radio type="radio" name="color" value="red" />
              <Radio type="radio" name="color" value="green" />
            </div>
          </fieldset>

          <fieldset className={classes.fieldset + " " + classes.is__select}>
            <Input
              labelClass="is__short"
              type="select"
              changeHandler={(value) => setFieldValue("status", value, false)}
              name="status"
            />
            <Button
              type="submit"
              text="Отправить"
              withIcon={true}
              styleClass="is__submit"
            />
          </fieldset>
        </Form>
      )}
    />
  );
};

export default form;
