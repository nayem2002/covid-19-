import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const ContextApi = createContext();

export const useContextApi = () => useContext(ContextApi);

const ContextProvider = ({ children }) => {
  const [getCountry, setGetCountry] = useState([]);
  const [allCountry, setAllCountry] = useState('Worldwide');
  const [countryRecourd, setCountryRecourd] = useState({});
  const [getCountryLocation, setGetCountryLocation] = useState({
    lat: 51.505,
    lng: -0.09,
  });
  const [countryData, setCountryData] = useState([]);
  const [casesType, setCasesType] = useState('cases');

  useEffect(() => {
    const getAllData = async () => {
      const res = await axios.get('https://disease.sh/v3/covid-19/all');
      setCountryRecourd(res.data);
    };
    getAllData();
  }, []);

  const hendelSelectBox = async (event) => {
    const countryCode = event.target.value;
    const apiUrl =
      countryCode === 'Wroldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    const res = await axios.get(apiUrl);
    setCountryRecourd(res.data);
    setAllCountry(countryCode);
    setGetCountryLocation([
      res.data.countryInfo.lat,
      res.data.countryInfo.long,
    ]);
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://disease.sh/v3/covid-19/countries');
      const country = res.data.map((carentElm) => {
        return {
          countryName: carentElm.country,
          countryShortName: carentElm.countryInfo.iso3,
          countryCases: carentElm.cases,
        };
      });

      setGetCountry(country);
      setCountryData(res.data);
    };
    fetchData();
  }, []);

  const value = {
    getCountry,
    getCountryLocation,
    allCountry,
    hendelSelectBox,
    countryRecourd,
    countryData,
    casesType,
    setCasesType,
  };
  return <ContextApi.Provider value={value}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
