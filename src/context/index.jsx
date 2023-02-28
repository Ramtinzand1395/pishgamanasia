import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GetVehicleUsers, LoginApi, SendRequest } from "../services";

const MainContext = createContext();
const { Provider } = MainContext;

const MainProvider = ({ children }) => {
  const [Sourcelocation, setSourceLocation] = useState([]);
  const [destinationlocation, setdestinationLocation] = useState([]);
  const [userToken, setUserToken] = useState("1");
  const [searchdata, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [vehicleUserTypeId, setVehicleUserTypeId] = useState();
  const [vehicleUserTypeName, setVehicleUserTypeName] = useState();

  const navigate = useNavigate();

  //login
  const loginContext = async (values) => {
    try {
      const { data } = await LoginApi(values);
      if (data.status === 1) {
        setUserToken(data.data.userToken);
        navigate("/VehicleUsers");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  //search
  const search = async (values) => {
    try {
      const { data } = await GetVehicleUsers(values);
      if (data.status === 1) {
        setSearch(data);
        toast.success(data.message);
      } else if (data.status === 0) {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  //Modal
  const ModalData = (item)=>{
    setVehicleUserTypeId(item.id)
    setVehicleUserTypeName(item.name)
    setShowModal(false)
  };
  //sending data
  const handelesend = async (values) => {
    try {
      const { data } = await SendRequest(values);
      if (data.status === 1) {
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Provider
      value={{
        loginContext,
        userToken,
        Location,
        searchdata,
        search,
        Sourcelocation,
        setSourceLocation,
        destinationlocation,
        setdestinationLocation,
        showModal,
        setShowModal,
        ModalData,
        vehicleUserTypeId,
        setVehicleUserTypeId,
        vehicleUserTypeName,
        setVehicleUserTypeName,
        handelesend,
      }}
    >
      {children}
    </Provider>
  );
};

export { MainProvider, MainContext };
