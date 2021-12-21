import numeral from 'numeral';
import React from 'react';

const Info = ({
  meinHeading,
  dealyAttected,
  totalAttected,
  isWorning,
  isSuccess,
  isDeath,
  ...props
}) => {
  const dayFromate = numeral(dealyAttected).format('0,0a');
  const totalFormate = numeral(totalAttected).format('0,0a');
  return (
    <>
      <div
        onClick={props.onClick}
        className={`text-white w-full text-center rounded-md shadow-md p-8 cursor-pointer ${
          isWorning && 'bg-red-400'
        } ${isSuccess && 'bg-green-400'} ${isDeath && 'bg-gray-500'}
          `}
      >
        <h1 className="text-2xl">{meinHeading}</h1>
        <h1 className="text-center text-2xl">+{dayFromate} Day</h1>
        <p className="text-center p-4 text-sm">+{totalFormate} Total</p>
      </div>
    </>
  );
};

export default Info;
