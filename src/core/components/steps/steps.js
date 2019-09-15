import React from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';

const Steps = (props) => {
  return (
    <div>
      {props.children}
      <Row>
        <Col xs={{span: 4, offset: 4}}>
          <Row>
            <Col xs={{span: 6}}>
              <Button variant="secondary" onClick={() => props.onAction({ type: 'decrement', end: props.end})}>Previous</Button>
            </Col>
            <Col xs={{span: 6}}>
              <Button variant="primary" onClick={() => props.onAction({ type: 'increment', end: props.end})}>Next</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

Steps.propTypes = {
  wizardContext: PropTypes.object.isRequired,
  onAction: PropTypes.func.isRequired
};

export default Steps;
