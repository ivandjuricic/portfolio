import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const DEFAULT_COLOR = '#040404';

class RadialChart extends Component {
  state = {};
  componentDidMount() {
    // For initial animation
    setTimeout(() => {
      this.setState({ setStrokeLength: true });
    });
  }
  render() {
    const { setStrokeLength } = this.state;
    const {
      className,
      radius,
      progress,
      strokeWidth,
      size,
      valueText,
      valueFontSize,
      secondaryFontSize,
      color,
    } = this.props;

    const circleRadius = Math.min(radius, 85);
    const circumference = 2 * 3.14 * circleRadius;
    const strokeLength = setStrokeLength ? (circumference / 100) * progress : 0;
    return (
      <div
        className={classNames('radial-chart', className, {
          'no-progress': strokeLength === 0,
        })}
      >
        <div className="radial-chart-inside-text">
          <h1
            style={{
              textColor: DEFAULT_COLOR,
              margin: '0px 0px',
              fontSize: `${valueFontSize}px`,
            }}
          >
            {valueText}
          </h1>
          <p style={{ fontSize: `${secondaryFontSize}px` }}>confidency</p>
        </div>
        <svg viewBox="0 0 180 180" width={size} height={size}>
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
  size: 180,
  color: DEFAULT_COLOR,
  valueFontSize: 30,
  secondaryFontSize: 16,
};
RadialChart.propTypes = {
  className: PropTypes.string,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  color: PropTypes.string,
  progress: PropTypes.number,
  size: PropTypes.number,
  valueFontSize: PropTypes.number,
  secondaryFontSize: PropTypes.number,
};

export default RadialChart;
