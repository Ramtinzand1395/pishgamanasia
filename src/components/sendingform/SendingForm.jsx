import React, { useContext, useEffect, useState } from "react";

import { MainContext } from "../../context";

const SendingForm = () => {
    const [valid , setvalid] = useState(false)
  const {
    Sourcelocation,
    destinationlocation,
    vehicleUserTypeId,
    userToken,
    handelesend,
  } = useContext(MainContext);

  const values = {
    userToken: `${userToken}`,
    vehicleUserTypeId: `${vehicleUserTypeId}`,
    source: `${Sourcelocation}`,
    destination: `${destinationlocation}`,
  };
  useEffect(()=>{
      const data =()=>{
        if(destinationlocation.length === 0 | Sourcelocation.length === 0 | vehicleUserTypeId === undefined ){
        setvalid(true)
    }else{
        setvalid(false)
    }
      } 
      data()
  },[ Sourcelocation , destinationlocation , vehicleUserTypeId])
  return (
    <div>
      <button
        className="bg-yellow-400 w-full p-2 text-black rounded-2xl disabled:bg-gray-500"
        type={"submit"}
        onClick={() => handelesend(values)}
        disabled={valid}
      >
        ثبت درخواست
      </button>
    </div>
  );
};

export default SendingForm;
