import { Component } from 'react';
import { FormWrapper } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { BAD, GOOD, NEUTRAL } from '../assets/FeedbackType';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (buttonType) => {
    this.setState(state => ({ [buttonType]: state[buttonType] + 1 }));
  };

  countTotalFeedback = () => (this.state.good + this.state.neutral + this.state.bad);

  countPositiveFeedbackPercentage = () => (Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100) || 0));

  render() {
    return (
      <FormWrapper>
        <Section title={'Did you like our cafe? Please leave feedback.'} fontSize='50px'>
          <FeedbackOptions options={[GOOD, NEUTRAL, BAD]} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        <Section title={'Statistics'} fontSize='40px'>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()}
                      positivePercentage={this.countPositiveFeedbackPercentage()} />
          <Notification message='We realy wait for your feedback!' />
        </Section>
      </FormWrapper>
    );
  }
}
