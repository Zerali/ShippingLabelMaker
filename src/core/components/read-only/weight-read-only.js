import React from 'react';
import { Row, Col, Form, } from 'react-bootstrap';

const WeightReadOnly = (props) => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formName">
        <Form.Label column sm="3">
          Weight:
        </Form.Label>
        <Col sm="9">
          <Form.Control plaintext readOnly defaultValue={props.weight} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default WeightReadOnly;
