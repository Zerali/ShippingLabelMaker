import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Steps from '../steps/steps';

const Wizard = (props) => {
  const [stepNum, setStepNum] = useState(1);

  const stepsProps = {
    onAction: (onAction) => {
      console.log(onAction)

      if(onAction.next < 1) {
        // do nothing
        return;
      } else if (onAction.next > props.steps.length) {
        // We have completed every step
        props.onComplete();
        return;
      } else if (onAction.next > stepNum) {
        setStepNum(stepNum + 1);
      } else if (onAction.next < stepNum) {
        setStepNum(stepNum - 1);
      }
    },
    cur: stepNum,
    end: props.steps.length,
  };

  return (
    <div>
      {props.header()}
      <Steps {...stepsProps}>
        {props.steps[stepNum-1]()}
      </Steps>
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
