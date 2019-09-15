import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import Steps from '../steps/steps';
import { ProgressBar } from 'react-bootstrap';

const initialState = { step: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      if(state.step > action.end) {
        return {...state};
      }

      return { step: state.step + 1 }
    case 'decrement':
      if(state.step === 1) {
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

  const progressNow = Math.ceil((state.step/props.steps.length)*100);

  let render;

  if(state.step > props.steps.length) {
    // Trigger props.onComplete()
    render = <div>'Complete!'</div>;
  } else {
    render = (
      <Steps {...stepsProps}>
        {props.steps[state.step-1]()}
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
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Wizard;
