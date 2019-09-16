import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Steps from '../steps/steps';
import { ProgressBar } from 'react-bootstrap';

const initialState = { step: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      if(state.step > action.end) {
        return {...state};
      }

      return { step: state.step + 1 }
    case 'decrement':
      if(state.step === 0) {
        return {...state};
      }

      return { step: state.step - 1 }
    default:
      throw new Error('Somehow we incremented or decremented too much');
  }
}

const Wizard = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stepsProps = {
    onAction: (onAction) => dispatch(onAction),
    end: props.steps.length,
  };

  const progressNow = Math.ceil((state.step/(props.steps.length-1))*100);

  let render;

  if(state.step === props.steps.length) {
    props.onComplete();
  } else {
    render = (
      <Steps {...stepsProps}>
        {props.steps[state.step]}
      </Steps>
    );
  }

  return (
    <div>
      {props.header()}
      <ProgressBar variant="info" now={progressNow} style={{marginTop: 15, marginBottom: 15}}/>
      {render}
    </div>
  );
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Wizard;
