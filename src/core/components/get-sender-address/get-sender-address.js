import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const GetSenderAddress = () => {
  return (
    <Form>
      <Form.Group as={Row} controlId="formName">
        <Form.Label column sm="1">
          Name:
        </Form.Label>
        <Col sm="11">
          <Form.Control />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formStreet">
        <Form.Label column sm="1">
          Street:
        </Form.Label>
        <Col sm="11">
          <Form.Control />
        </Col>
      </Form.Group>
      <Row>
        <Col sm={5}>
          <Form.Group as={Row} controlId="formCity">
            <Form.Label column sm="1">
              City:
            </Form.Label>
            <Col sm={{span: 9, offset: 1}}>
              <Form.Control />
            </Col>
          </Form.Group>
        </Col>
        <Col sm={4}>
          <Form.Group as={Row} controlId="formState">
            <Form.Label column sm="1">
              State:
            </Form.Label>
            <Col sm={{span:9, offset: 1}}>
              <Form.Control />
            </Col>
          </Form.Group>
        </Col>
        <Col sm={3}>
          <Form.Group as={Row} controlId="formZip">
            <Form.Label column sm="1">
              Zip:
            </Form.Label>
            <Col sm={{span:8, offset: 1}}>
              <Form.Control />
            </Col>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}

export default GetSenderAddress;
