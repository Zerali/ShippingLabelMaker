import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const Steps = (props) => {
  return (
    <div>
      {props.children}
      <Button onClick={() => props.onAction({prev: props.cur, next: props.cur-1, end: props.end})}>Previous</Button>
      <Button onClick={() => props.onAction({prev: props.cur, next: props.cur+1, end: props.end})}>Next</Button>
    </div>
  );
}

Steps.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default Steps;
