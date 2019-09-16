import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ShipperReceiverReadOnly from '../read-only/shipper-receiver-read-only';
import WeightReadOnly from '../read-only/weight-read-only';
import ShippingOptionReadOnly from '../read-only/shipping-option-read-only';

const ShippingLabel = (props) => {
  const shippingInfo = props.shippingInfo;

  useEffect(() => {
    window.print();
  }, []);

  return (
    <div>
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
        </Col>
      </Row>
    </div>
  );
}

export default ShippingLabel;
