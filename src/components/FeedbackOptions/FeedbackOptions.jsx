import React, { Component } from 'react';
import { FeedbackBtn } from '../FeedbackBtn/FeedbackBtn';
import { ButtonsWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {

  propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
  };

  onBtnClick = ({ target: button }) => {
    if (button.nodeName !== 'BUTTON') {
      console.log(button.nodeName);
      return;
    }

    button.blur();
    console.log(button.dataset.type);
    this.props.onLeaveFeedback(button.dataset.type);
  };

  render() {
    return (
      <ButtonsWrapper onClick={this.onBtnClick}>
        {this.props.options.map(buttonType => <FeedbackBtn feedbackType={buttonType} />)}
      </ButtonsWrapper>
    );
  }
}
