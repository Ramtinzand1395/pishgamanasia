import React, { useContext } from "react";

import { MainContext } from "../../context";

const Modal = () => {
  const {
    searchdata,
    showModal,
    setShowModal,
    ModalData,
  } = useContext(MainContext);
  const data = searchdata.data;
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      aria-hidden="true"
      className="absolute top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="relative w-full h-full max-w-2xl md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="defaultModal"
                onClick={() => setShowModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              نتیجه جستجو
            </h3>
          </div>
          <div className="p-6 space-y-6">
            {data?.map((item, index) => (
              <p
                key={index}
                onClick={() => ModalData(item)}
                className="text-base hover:bg-gray-500 hover:text-white cursor-pointer leading-relaxed text-gray-500 dark:text-gray-400"
              >
                {item.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
