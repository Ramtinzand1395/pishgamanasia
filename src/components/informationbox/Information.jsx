import React, { useContext } from "react";

import { MainContext } from "../../context";

import Modal from "../searchbox/Modal";
import Search from "../searchbox/Search";
import SendingForm from "../sendingform/SendingForm";

import "./box.css";

const Information = () => {
  const { Sourcelocation, destinationlocation } = useContext(MainContext);
  return (
    <div className="box bg-white  border-gray-500 rounded-t-xl p-4">
      <p className="text-green-600">
        مبدا : {Sourcelocation.lat} - {Sourcelocation.lng}{" "}
      </p>
      <p className="text-red-600">
        مقصد : {destinationlocation.lat} - {destinationlocation.lng}{" "}
      </p>
      <Search />
      <Modal />
      <SendingForm />
    </div>
  );
};

export default Information;
