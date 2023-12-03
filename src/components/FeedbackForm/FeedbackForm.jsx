import { ButtonsWrapper, FormWrapper } from './FeedbackForm.styled';
import { BAD, GOOD, NEUTRAL } from '../../assets/FeedbackType';
import { Component } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';

export class FeedbackForm extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  /* constructor(props) {
     super(props);
     this.state = {
       great: this.props.great,
       neutral: this.props.neutral,
       bad: this.props.bad,
     };
   }*/


  onBtnClick = ({ target: button }) => {
    if (button.nodeName !== 'BUTTON') {
      console.log(button.nodeName);
      return;
    }

    button.blur();
    console.log(button.dataset.type);
    this.setState(state => ({ [button.dataset.type]: state[button.dataset.type] + 1 }));
  };

  render() {
    return (
      <></>
     /* <>
        <Section title={'Did you like our cafe? Please leave feedback.'}>
          <FeedbackOptions options={} onLeaveFeedback={} />
        </Section>
        <Section title={'Statistics'}>
          <Statistics good={} neutral={} bad={} total={} positivePercentage={} />
          <Notification message='We realy wait for your feedback!' />
        </Section>
      </>*/
    );
  }

  /* countPositiveFeedbackPercentage() {}*/
}
