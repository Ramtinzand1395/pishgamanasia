import React, { useContext } from "react";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { contactSchema } from "../../validation/contactSchema";

import { MainContext } from "../../context";
const Login = () => {
  const { loginContext } = useContext(MainContext);
  return (
    <div className="loginPage">
      <div className="h-2/6 sm:w-full md:w-6/12 border-gray-200 drop-shadow-xl border-2 rounded-2xl">
        <p>salam</p>
        <p className="text-center">ورود</p>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={contactSchema}
          onSubmit={(values) => {
            loginContext(values);
          }}
        >
          <Form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                نام کاربری
              </label>
              <div className="mb-2">
                <Field
                  className="bg-blue-100 w-full rounded-full p-2"
                  name="username"
                  type="text"
                />
                <ErrorMessage
                  name="username"
                  render={(msg) => <div className="text-red-700">{msg}</div>}
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                کلمه عبور
              </label>
              <div className="mb-2">
                <Field
                  className="bg-blue-100 w-full rounded-full p-2"
                  name="password"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  render={(msg) => <div className="text-red-700">{msg}</div>}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-2xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                ورود
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
