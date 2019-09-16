import React from 'react';
import { Row, Col, Form, } from 'react-bootstrap';
import { ShippingOption } from '../../utility/shipping-option';

const CostReadOnly = (props) => {
  const shippingRate = 0.40;
  let shippingCost = props.weight * shippingRate * 
    (props.shippingOption === ShippingOption.ground ? 1 : 1.5);

  return (
    <Form>
      <Form.Group as={Row} controlId="cost">
        <Form.Label column sm="1">
          Cost:
        </Form.Label>
        <Col sm="11">
          <Form.Control plaintext readOnly defaultValue={shippingCost} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default CostReadOnly;
