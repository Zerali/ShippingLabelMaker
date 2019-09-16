import React from 'react';
import { Row, Col, Form, } from 'react-bootstrap';
import { GetShippingOptionName } from '../../utility/shipping-option';

const ShippingOptionReadOnly = (props) => {
  return (
    <Form>
      <Form.Group as={Row} controlId="serviceOption">
        <Form.Label column sm="3">
          Shipping Option:
        </Form.Label>
        <Col sm="9">
          <Form.Control plaintext readOnly defaultValue={GetShippingOptionName(props.shippingOption)} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ShippingOptionReadOnly;
