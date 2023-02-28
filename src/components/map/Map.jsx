import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

import Information from "../informationbox/Information";

import { destinationicon, sourceicon } from "./constance";
import { MainContext } from "../../context";

let pointA, pointB, markerA, markerB;

const Map = () => {
  const { setdestinationLocation, setSourceLocation } = useContext(MainContext);
  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        if (!pointA) {
          pointA = e.latlng;
          map.flyTo(e.latlng, map.getZoom());
          setSourceLocation(pointA);
          markerA = L.marker(pointA, { icon: sourceicon })
            .addTo(map)
            .on("click", function () {
              map.removeLayer(markerA), setSourceLocation([]), (pointA = null);
            });
        } else if (!pointB) {
          pointB = e.latlng;
          map.flyTo(e.latlng, map.getZoom());
          setdestinationLocation(pointB);
          markerB = L.marker(pointB, { icon: destinationicon })
            .addTo(map)
            .on("click", function () {
              map.removeLayer(markerB),
                setdestinationLocation([]),
                (pointB = null);
            });
        }
      },
    });
  }
  return (
    <>
      <Helmet>
        <title>اتنخاب ماشین آلات</title>
      </Helmet>
      <div className="relative -z-0">
        <MapContainer
          center={[35.685856545952355, 51.14677827281869]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "100vh" }}
        >
          <TileLayer
            attribution="آزمون ورودی کارآموزان فرانت "
            url="https://map.pishgamanasia.ir/tile/{z}/{x}/{y}.png"
          />
          <MyComponent />
        </MapContainer>
      </div>
      <div className="absolute right-2/4 bottom-0 z-20">
        <Information />
      </div>
    </>
  );
};

export default Map;
