import React from 'react';

export default function SignLight(props) {
  return (
    <div className='Sign-light'>
      <div className={`red Circle ${props.color === 'red' && 'on'}`}></div>
      <div className={`green Circle ${props.color === 'green' && 'on'}`}></div>
    </div>
  );
}