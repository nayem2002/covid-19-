import React from 'react';
import { useContextApi } from './context/ContextApi';
import CountryCasesGraph from './CountryCasesGraph';
import CountryCasesTable from './CountryCasesTable';
import Info from './Info';
import Map from './Map';
import Nevbar from './Nevbar';

const Home = () => {
  const { countryRecourd, setCasesType } = useContextApi();
  return (
    <>
      <Nevbar />
      <div className="sm:grid mt-6 sm:max-w-7xl w-full mx-auto px-8 sm:gap-x-5 sm:grid-cols-3">
        <div className="sm:col-span-2 w-full  ">
          <div className="flex  items-center flex-col lg:space-x-3 space-y-4 lg:space-y-0 w-full lg:flex-row lg:justify-between mb-6">
            <Info
              onClick={() => setCasesType('cases')}
              meinHeading={'Attected People'}
              dealyAttected={countryRecourd.todayCases}
              totalAttected={countryRecourd.cases}
              isWorning
            />
            <Info
              onClick={() => setCasesType('recovered')}
              meinHeading={'Recovered People'}
              dealyAttected={countryRecourd.todayRecovered}
              totalAttected={countryRecourd.recovered}
              isSuccess
            />
            <Info
              onClick={() => setCasesType('deaths')}
              meinHeading={'Deaths People'}
              dealyAttected={countryRecourd.todayDeaths}
              totalAttected={countryRecourd.deaths}
              isDeath
            />
          </div>
          <CountryCasesGraph />
        </div>
        <CountryCasesTable />
        <Map />
      </div>
    </>
  );
};

export default Home;
