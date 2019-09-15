import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import { WizardContext } from '../../../features/shipping-label-maker/shipping-label-maker'

const Steps = (props) => {
  const value = useContext(WizardContext);

  return (
    <div>
      {props.children(value)}
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
  onAction: PropTypes.func.isRequired
};

export default Steps;
