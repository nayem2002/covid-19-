import React from 'react';
import { useContextApi } from './context/ContextApi';
import { Scrollbars } from 'react-custom-scrollbars';
import numeral from 'numeral';

const CountryCasesTable = () => {
  const { getCountry } = useContextApi();
  getCountry.sort((a, b) => (a.countryCases > b.countryCases ? -1 : 1));

  return (
    <div className="bg-white sm:h-full h-96 w-full col-span-3 mt-7 sm:mt-0 sm:col-span-1 shadow-md overflow-hidden">
      <h1 className="text-xl font-semibold p-5">All Country Total Cases</h1>
      <div className=" mt-4 h-full pb-5">
        <Scrollbars className="" autoHide>
          {getCountry.map((carentElm) => {
            const totalCases = numeral(carentElm.countryCases).format('0,0a');
            return (
              <tr className="flex justify-between px-6 py-2 hover:bg-gray-200">
                <td>{carentElm.countryName}</td>
                <td>{totalCases}</td>
              </tr>
            );
          })}
        </Scrollbars>
      </div>
    </div>
  );
};

export default CountryCasesTable;
