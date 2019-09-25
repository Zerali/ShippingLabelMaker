import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const GetServiceOption = (props) => {
  // set formData to the section of state we care about
  const shippingOption = props.shippingInfo.shippingOption;

  return (
    <div>
      <label>Select service option:</label>
      <Form>
        <Form.Group as={Row} controlId="shippingOption">
          <Col sm="12">
            <Form.Control as="select" value={shippingOption} onChange={(e) => {
              props.updateShippingInfo({ shippingOption: parseInt(e.target.value) || 0 });
            }}>
              <option value={1}>Ground</option>
              <option value={2}>Priority</option>
            </Form.Control>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export const validateGetServiceOption = (shippingInfo) => { 
  let errors = [];

  // no validation needed

  return errors;
} 

export default GetServiceOption;
