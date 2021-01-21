import React from 'react';

export default  Card = ({ title }) => {
  return(
    <div className="card">
      <div className="card-details">
        <h2>{title}</h2>
      </div>
    </div>
  )
}
