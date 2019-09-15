import React from 'react';
import Wizard from '../../core/components/wizard/wizard';
import GetSenderAddress from '../../core/components/get-sender-address/get-sender-address';
import GetReceiverAddress from '../../core/components/get-receiver-address/get-receiver-address';
import GetWeight from '../../core/components/get-weight/get-weight';
import GetShippingOption from '../../core/components/get-shipping-option/get-shipping-option';
import Confirm from '../../core/components/confirm/confirm';
import { Row, Col } from 'react-bootstrap';

const props = {
  header: () => { return (
     <header className="App-header">
        <h1>Shipping Label Maker</h1>
      </header>
    ) 
  },
  steps: [ GetSenderAddress, GetReceiverAddress, GetWeight, GetShippingOption, Confirm ],
  wizardContext: {},
  onComplete: () => {
    console.log('It completed!');
  }
};

const WizardContext = React.createContext();

export const ShippingLabelMaker = () => {
  return (
    <Row>
      <Col sm={{span:10, offset: 1}}>
        <WizardContext.Provider value={{ test: 'data' }} >
          {/* <WizardContext.Consumer> */}
            <Wizard { ...props } />
          {/* </WizardContext.Consumer> */}
        </WizardContext.Provider>
      </Col>
    </Row>
  );
};

export default ShippingLabelMaker;
