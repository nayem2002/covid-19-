import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';

const typeOfColor = {
  cases: {
    hex: '#CC1034',
    multiply: 500,
  },
  recovered: {
    hex: '#7dd71d',
    multiply: 800,
  },
  deaths: {
    hes: '#fb4443',
    multiply: 1200,
  },
};

export const createCircle = (countryData, casesType) => {
  return (
    <>
      {countryData.map((carentVal) => (
        <Circle
          key={carentVal.countryInfo.long}
          center={[carentVal.countryInfo.lat, carentVal.countryInfo.long]}
          fillOpacity={0.4}
          fillColor={typeOfColor[casesType].hex}
          color={typeOfColor[casesType].hex}
          radius={
            Math.sqrt(carentVal[casesType]) * typeOfColor[casesType].multiply
          }
        >
          <Popup className="m-0">
            <div
              className="w-full h-16 m-0 rounded-md bg-cover bg-center "
              style={{
                backgroundImage: `url(${carentVal.countryInfo.flag})`,
              }}
            />
            <div className="font-semibold text-lg mb-2">
              {carentVal.country}
            </div>
            <div>Cases : {numeral(carentVal.cases).format('0,0a')}</div>
            <div>Recovered : {numeral(carentVal.recovered).format('0,0a')}</div>
            <div>Deaths : {numeral(carentVal.deaths).format('0,0a')}</div>
          </Popup>
        </Circle>
      ))}
    </>
  );
};
