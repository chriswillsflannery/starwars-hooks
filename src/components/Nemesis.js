import React from 'react';

const Nemesis = props => {

  return (
    <>
      <div className="nemesis">
        <img className="nemesisImage" src={props.imag} alt="nemesis"></img>
        <br />
        {props.nemname ? `nemesis: ${props.nemname}` : 'nemesis approaching!'}
      </div>
    </>
  )
}

export default Nemesis;