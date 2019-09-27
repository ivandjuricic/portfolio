import React from 'react';
import Gauge from './Gauge';

const Tech = props => {
  const { competency, technology } = props;
  return (
    <div style={{ margin: '0 20px' }}>
      <h1>{technology}</h1>
      <Gauge
        type="circle"
        progress={parseFloat(competency)}
        size={180}
        color="#2196f3"
        borderWidth={10}
        valueText={`${parseFloat(competency)}%`}
        valueFontSize={41}
        labelText="competence"
        valueTextColor="#2196f3"
      />
    </div>
  );
};

export default Tech;
