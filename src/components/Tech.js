import React from 'react';
import Gauge from './Gauge';

const Tech = props => {
  const { competency, technology, primary } = props;
  const size = primary ? 150 : 120;
  const valueFontcSize = primary ? 30 : 24;
  const secondaryFontSize = primary ? 16 : 12;
  return (
    <div style={{ margin: '0 20px' }}>
      <h1>{technology}</h1>
      <Gauge
        type="circle"
        progress={parseFloat(competency)}
        size={size}
        color="#2196f3"
        borderWidth={10}
        valueText={`${parseFloat(competency)}%`}
        valueFontSize={valueFontcSize}
        secondaryFontSize={secondaryFontSize}
        labelText="competence"
        valueTextColor="#2196f3"
      />
    </div>
  );
};

export default Tech;
