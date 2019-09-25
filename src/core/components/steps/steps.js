import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import { WizardContext } from '../../../features/shipping-label-maker/shipping-label-maker'

const Steps = (props) => {
  const value = useContext(WizardContext);
  const [renderErrors, setRenderErrors] = useState(<div></div>);

  const nextOnClick = () => {
    console.log(value);
    console.log(renderErrors.length);

    const validationErrors = props.validate(value.shippingInfo);

    if(validationErrors.length === 0) {
      props.onAction({ type: 'increment', end: props.end});

      setRenderErrors(<div></div>);
    } else {
      const renderErrors = validationErrors.map((error, i) => (
        <div key={i}>
          <span>{error}</span><br/>
        </div>
      ));

      setRenderErrors(renderErrors);
    }
  };

  return (
    <div>
      {props.children(value)}
      {renderErrors}
      <Row>
        <Col xs={{span: 4, offset: 4}}>
          <Row>
            <Col xs={{span: 6}}>
              <Button variant="secondary" onClick={() => props.onAction({ type: 'decrement', end: props.end})}>Previous</Button>
            </Col>
            <Col xs={{span: 6}}>
              <Button variant="primary" onClick={nextOnClick}>Next</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

Steps.propTypes = {
  onAction: PropTypes.func.isRequired,
  end: PropTypes.number,
  validate: PropTypes.func.isRequired
};

export default Steps;
