import React from 'react';

const TechTag = props => {
  const { name } = props;
  return (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        background: '#2196f3',
        borderRadius: '20px',
        padding: '0 10px',
        margin: '5px 5px',
        minWidth: '40px',
      }}
    >
      <small style={{ color: 'white', fontSize: '1rem' }}>{name}</small>
    </div>
  );
};

export default TechTag;
