import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FromControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import { useContextApi } from './context/ContextApi';

const Nevbar = () => {
  const { getCountry, allCountry, hendelSelectBox } = useContextApi();
  return (
    <>
      <div className="bg-white  h-20 shadow-md flex items-center w-100% justify-between p-6">
        <div>
          <h1 className="md:text-4xl sm:text-3xl text-xl font-semibold text-red-700">
            COVID-19 Tracker
          </h1>
        </div>
        <div className="">
          <Box sx={{ minWidth: 120 }}>
            <FromControl fullWidth>
              <Select
                variant="outlined"
                value={allCountry}
                onChange={hendelSelectBox}
              >
                <MenuItem value="Worldwide">Worldwide</MenuItem>
                {getCountry.map((carentCoun) => {
                  return (
                    <MenuItem value={carentCoun.countryShortName}>
                      {carentCoun.countryName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FromControl>
          </Box>
        </div>
      </div>
    </>
  );
};
export default Nevbar;
