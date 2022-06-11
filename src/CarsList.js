import React from 'react';
import Cars from './Cars.js';

export default function CarsList({ cars }) {
  return (
    <div className='traffic'>
      {cars.map((car, i) =>
        <Cars key={car + i} car={car} />

      )}
    </div>
  );
}