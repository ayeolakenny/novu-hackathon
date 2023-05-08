import { Fragment, useRef } from "react";
import { MapData } from "../data/custom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const Mapref = useRef(null);
  return (
    <Fragment>
      <MapContainer
        zoom={13}
        scrollWheelZoom={false}
        ref={Mapref}
        center={[6.62103, 3.37469]}
        zoomAnimation={true}
        markerZoomAnimation={true}
        scroll-smooth={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {MapData.map((val, key) => (
          <Marker position={val.position} key={key}>
            <Popup>
              <div>
                <img src={val.image} className="w-30" />
                <div>{val.title}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </Fragment>
  );
};
