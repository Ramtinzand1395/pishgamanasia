import L from "leaflet";

import locationpng from "../../assets/pin-location-4346.png";

 const sourceicon = L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});
const destinationicon = L.icon({
    iconSize: [51, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: locationpng,
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
  });
  export {sourceicon , destinationicon}