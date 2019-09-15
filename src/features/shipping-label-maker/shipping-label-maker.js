import React, { useReducer, useState } from 'react';
import Wizard from '../../core/components/wizard/wizard';
import GetSenderAddress from '../../core/components/get-sender-address/get-sender-address';
import GetReceiverAddress from '../../core/components/get-receiver-address/get-receiver-address';
import GetWeight from '../../core/components/get-weight/get-weight';
import GetShippingOption from '../../core/components/get-shipping-option/get-shipping-option';
import Confirm from '../../core/components/confirm/confirm';
import { Row, Col } from 'react-bootstrap';

// Create the WizarContext so we can pass data where needed in the wizard
export const WizardContext = React.createContext();

// Create the props needed to pass to the Wizard
const wizardProps = {
  header: () => {
    return (
     <header className="App-header">
        <h1>Shipping Label Maker</h1>
      </header>
    ) 
  },
  steps: [ GetSenderAddress, GetReceiverAddress, GetWeight, GetShippingOption, Confirm ],
  onComplete: () => {
    console.log('It completed!');
  }
};

const initialShippingInfoState = {
  from: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  to: {
    name: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  weight: 0,
  shippingOption: 1
}

export const ShippingLabelMaker = () => {
  const [shippingInfo, UpdateShippingInfo] = useState(initialShippingInfoState);

  const wizarContextValue = {
    shippingInfo: shippingInfo,
    updateShippingInfo: (newShippingInfo) => UpdateShippingInfo({...shippingInfo, ...newShippingInfo}),
  };

  console.log(shippingInfo);

  return (
    <Row>
      <Col sm={{span:10, offset: 1}}>
        <WizardContext.Provider value={wizarContextValue} >
            <Wizard { ...wizardProps } />
        </WizardContext.Provider>
      </Col>
    </Row>
  );
};

export default ShippingLabelMaker;
