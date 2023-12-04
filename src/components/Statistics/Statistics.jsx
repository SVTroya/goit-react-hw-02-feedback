import { LabelsBlock, StatisticsWrapper, ValuesBlock } from './Statistics.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.func,
    positivePercentage: PropTypes.func,
  }

  render() {
    return (
      <StatisticsWrapper>
        <LabelsBlock>
          <span>Good:</span>
          <span>Neutral:</span>
          <span>Bad:</span>
          <span>Total:</span>
          <span>Positive feedbacks: </span>
        </LabelsBlock>

        <ValuesBlock>
          <span>{this.props.good}</span>
          <span>{this.props.neutral}</span>
          <span>{this.props.bad}</span>
          <span>{this.props.total}</span>
          <span>{this.props.positivePercentage}%</span>
        </ValuesBlock>
      </StatisticsWrapper>
    );
  }
}