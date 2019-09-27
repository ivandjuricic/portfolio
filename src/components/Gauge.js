import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_COLOR = '#2196f3';

class RadialChart extends Component {
  render() {
    const {
      radius,
      progress,
      strokeWidth,
      dimension,
      valueText,
      color,
    } = this.props;

    const circleRadius = Math.min(radius, 85);
    const circumference = 2 * 3.14 * circleRadius;
    const strokeLength = (circumference / 100) * progress;
    return (
      <div className={'radial-chart'}>
        <div className="radial-chart-inside-text">
          <h1 style={{ textColor: color, margin: '0px 0px' }}>{valueText}</h1>
          <p>confidency</p>
        </div>
        <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
          <circle
            className="radial-chart-total"
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            cx="90"
            cy="90"
            r={circleRadius}
          />
          <circle
            className="radial-chart-progress"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${strokeLength},${circumference}`}
            strokeLinecap="round"
            fill="none"
            cx="90"
            cy="90"
            r={circleRadius}
          />
        </svg>
      </div>
    );
  }
}

RadialChart.defaultProps = {
  radius: 80,
  progress: 100,
  strokeWidth: 10,
  dimension: 180,
  color: DEFAULT_COLOR,
};
RadialChart.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
  progress: PropTypes.number,
  dimension: PropTypes.number,
};
export default RadialChart;
