import { Fragment, useRef } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const Mapref = useRef(null);
  return (
    <Fragment>
      <MapContainer
        center={[6.548436, 3.2674453]}
        zoom={13}
        scrollWheelZoom={false}
        ref={Mapref}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[6.548436, 3.2674453]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Fragment>
  );
};
