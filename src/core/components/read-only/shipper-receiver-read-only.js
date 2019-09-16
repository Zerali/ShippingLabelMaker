import React from 'react';
import { Row, Col, Form, } from 'react-bootstrap';

const ShipperReceiverReadOnly = (props) => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formName">
        <Form.Label column sm="2">
          Name:
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={props.name} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formStreet">
        <Form.Label column sm="2">
          Street:
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue={props.street} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formCity">
        <Form.Label column sm="1">
          City:
        </Form.Label>
        <Col sm="11">
          <Form.Control plaintext readOnly defaultValue={props.city} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formState">
        <Form.Label column sm="1">
          State:
        </Form.Label>
        <Col sm="11">
          <Form.Control plaintext readOnly defaultValue={props.state}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formZip">
        <Form.Label column sm="1">
          Zip:
        </Form.Label>
        <Col sm="11">
          <Form.Control plaintext readOnly defaultValue={props.zip} />
        </Col>
      </Form.Group>
    </Form>
  );
}

export default ShipperReceiverReadOnly;
