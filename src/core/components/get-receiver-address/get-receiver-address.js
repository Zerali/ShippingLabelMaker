import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const GetReceiverAddress = (props) => {
  // set formData to the section of state we care about
  const formData = props.shippingInfo.to;

  // Function to handle changes to the form so that each control only has to worry
  // about the value it wants to update and not need to worry about building the rest
  // of this section of data
  const onFormChange = (pairToUpdate) => {
    props.updateShippingInfo({ to: {...formData, ...pairToUpdate } });
  }

  return (
    <div>
      <label>Enter the receivers address:</label>
      <Form>
        <Form.Group as={Row} controlId="formName">
          <Form.Label column sm="1">
            Name:
          </Form.Label>
          <Col sm="11">
            <Form.Control value={formData.name} onChange={(e) => {
              onFormChange({name: e.target.value});
            }} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formStreet">
          <Form.Label column sm="1">
            Street:
          </Form.Label>
          <Col sm="11">
            <Form.Control value={formData.street} onChange={(e) => {
              onFormChange({street: e.target.value});
            }} />
          </Col>
        </Form.Group>
        <Row>
          <Col sm={5}>
            <Form.Group as={Row} controlId="formCity">
              <Form.Label column sm="1">
                City:
              </Form.Label>
              <Col sm={{span: 9, offset: 1}}>
                <Form.Control value={formData.city} onChange={(e) => {
                  onFormChange({city: e.target.value});
                }}/>
              </Col>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group as={Row} controlId="formState">
              <Form.Label column sm="1">
                State:
              </Form.Label>
              <Col sm={{span:9, offset: 1}}>
                <Form.Control value={formData.state} onChange={(e) => {
                  onFormChange({state: e.target.value});
                }}/>
              </Col>
            </Form.Group>
          </Col>
          <Col sm={3}>
            <Form.Group as={Row} controlId="formZip">
              <Form.Label column sm="1">
                Zip:
              </Form.Label>
              <Col sm={{span:8, offset: 1}}>
                <Form.Control value={formData.zip} onChange={(e) => {
                  onFormChange({zip: e.target.value});
                }}/>
              </Col>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default GetReceiverAddress;
