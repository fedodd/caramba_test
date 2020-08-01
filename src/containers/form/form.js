import React from "react";
import classes from "./form.pcss";
import { Formik, Field, Form } from "formik";

const form = () => {
  return (
    <div>
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
        <Form>
          <label>
            <span>Название</span>
            <Field type="text" placeholder="Название" name="title"></Field>
          </label>
          <label>
            <span>Цена</span>
            <Field type="text" placeholder="Цена" name="price"></Field>
          </label>
          <label>
            <span>Год</span>
            <Field type="text" placeholder="Год" name="year"></Field>
          </label>
          <label>
            <span>Описание</span>
            <Field
              type="text"
              placeholder="Описание"
              name="description"
            ></Field>
          </label>
          <fieldset>
            <label htmlFor="color">Цвет</label>
            <Field type="radio" name="color" value="white"></Field>
            <Field type="radio" name="color" value="black"></Field>
            <Field type="radio" name="color" value="grey"></Field>
            <Field type="radio" name="color" value="red"></Field>
            <Field type="radio" name="color" value="green"></Field>
          </fieldset>
          <label>
            Статус
            <Field as="select" placeholder="Статус" name="status">
              <option>В наличии</option>
              <option>Ожидается</option>
              <option>Нет в наличии</option>
            </Field>
          </label>
          <button type="submit">Отправить</button>
        </Form>
      </Formik>
    </div>
  );
};

export default form;
