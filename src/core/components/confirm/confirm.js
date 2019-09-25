import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ShipperReceiverReadOnly from '../read-only/shipper-receiver-read-only';
import WeightReadOnly from '../read-only/weight-read-only';
import ShippingOptionReadOnly from '../read-only/shipping-option-read-only';
import CostReadOnly from '../read-only/cost-read-only';

const Confirm = (props) => {
  const shippingInfo = props.shippingInfo;

  return (
    <div>
      <label>Please confirm the order below:</label>
      <Row>
        <Col sm="6">
          <h3>Shipper</h3>
          <ShipperReceiverReadOnly {...shippingInfo.from}/>
        </Col>
        <Col sm="6">
          <h3>Receiver</h3>
          <ShipperReceiverReadOnly {...shippingInfo.to}/>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <h3>Shipment Info</h3>
          <WeightReadOnly {...{weight: shippingInfo.weight}}/>
          <ShippingOptionReadOnly {...{shippingOption: shippingInfo.shippingOption}} />
          <h3>Cost</h3>
          <CostReadOnly {...shippingInfo}/>
        </Col>
      </Row>
    </div>
  );
}

export const validateConfirm = (shippingInfo) => { 
  let errors = [];

  // no validation needed

  return errors;
} 

export default Confirm;
