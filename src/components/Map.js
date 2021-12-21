import React, { useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useContextApi } from './context/ContextApi';
import { createCircle } from './Circle';

const Map = () => {
  const { getCountryLocation, countryData, casesType } = useContextApi();

  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  return (
    <>
      <div className="w-full mt-8 col-span-3 rounded-md bg-white mb-8 shadow-md p-6">
        <MapContainer
          style={{ width: '100%', height: 400 }}
          center={getCountryLocation}
          zoom={2}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={getCountryLocation}></Marker>
          {createCircle(countryData, casesType)}
          <ChangeMapView coords={getCountryLocation} />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
