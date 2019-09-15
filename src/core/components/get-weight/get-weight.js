import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const GetWeight = (props) => {
  // set formData to the section of state we care about
  const weight = props.shippingInfo.weight;

  return (
    <div>
      <label>Enter the items weight:</label>
      <Form>
        <Form.Group as={Row} controlId="formWeight">
          <Col sm="12">
            <Form.Control value={weight} onChange={(e) => {
              props.updateShippingInfo({ weight: parseInt(e.target.value) || 0 });
            }} />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default GetWeight;
