import React from 'react';

const Nemesis = props => {

  return (
    <>
      <div className="nemesis">
        {
          props.imag ? <img className="nemesisImage" src={props.imag} alt="nemesis"></img> : null
        }

        <br />
        {props.nemname ? `nemesis: ${props.nemname}` : 'nemesis approaching!'}
      </div>
    </>
  )
}

export default Nemesis;