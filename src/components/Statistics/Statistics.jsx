import { Component } from 'react';

export class Statistics extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Good: <span>{this.props.good}</span></p>
        <p>Neutral: <span>{this.props.neutral}</span></p>
        <p>Bad: <span>{this.props.bad}</span></p>
        <p>Total: <span>{this.props.total}</span></p>
        <p>Positive
          feedback: <span>{this.props.positivePercentage}</span>%
        </p>
      </div>
    );
  }
}
