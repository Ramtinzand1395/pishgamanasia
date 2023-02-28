import React from "react"
import { Routes, Route } from "react-router-dom";

import {MainProvider} from "./context";

import Login from "./components/login/Login";
import Map from "./components/map/Map";

function App() {
  return (
    <div>
      <MainProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/VehicleUsers" element={<Map />}  />
        </Routes>
      </MainProvider>
    </div>
  );
}

export default App;
