import React from 'react';
import { Gauge } from 'framework7-react';

const Tech = props => {
  const { competency, technology } = props;
  return (
    <div style={{ margin: '0 20px' }}>
      <h1>{technology}</h1>
      <Gauge
        type="circle"
        value={parseFloat(competency) / 100}
        size={180}
        borderColor="#2196f3"
        borderWidth={10}
        valueText={`${parseFloat(competency)}%`}
        valueFontSize={41}
        valueTextColor="#2196f3"
        labelText="competence"
      />
    </div>
  );
};

export default Tech;
