import React, { useContext } from "react";

import { Formik, Form, ErrorMessage, Field } from "formik";
import { searchSchema } from "../../validation/searchvalidation";

import { MainContext } from "../../context";

const Search = () => {
  const { search, userToken , setShowModal , vehicleUserTypeName , setVehicleUserTypeName } = useContext(MainContext);
  return (
    <div>
      <Formik
        initialValues={{
          SearchTerm: "",
          userToken,
        }}
        validationSchema={searchSchema}
        onSubmit={(values) => {
          search(values);
        }}
      >
        <Form className="bg-white rounded px-8 pt-6 " dir="rtl">
          <div className="mb-2 flex items-center">
            <Field
              className="bg-blue-100 w-full rounded-full p-2 relative"
              name="SearchTerm"
              type="search"
              placeholder="نوع ماشین آلات"
              value={vehicleUserTypeName}
              onClick={()=>setVehicleUserTypeName()}
            />
            <button
              className=" text-black font-bold py-2 px-4 rounded-full shadow-2xl focus:outline-none focus:shadow-outline absolute left-9"
              type="submit"
              onClick={()=>setShowModal(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7  hover:bg-blue-300 rounded-full bg-blue-200 p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <ErrorMessage
              name="SearchTerm"
              render={(msg) => <div className="text-red-700 block">{msg}</div>}
            />
        </Form>
      </Formik>
    </div>
  );
};

export default Search;
