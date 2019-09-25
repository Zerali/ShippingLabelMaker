import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Wizard from '../../core/components/wizard/wizard';
import GetSenderAddress, { validateGetSenderAddress} from '../../core/components/get-sender-address/get-sender-address';
import GetReceiverAddress, { validateGetReceiverAddress } from '../../core/components/get-receiver-address/get-receiver-address';
import GetWeight, { validateGetWeight } from '../../core/components/get-weight/get-weight';
import GetServiceOption, { validateGetServiceOption } from '../../core/components/get-service-option/get-service-option';
import Confirm, { validateConfirm } from '../../core/components/confirm/confirm';
import ShippingLabel from '../../core/components/shipping-label/shipping-label'

// Create the WizarContext so we can pass data where needed in the wizard
export const WizardContext = React.createContext();

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
  const [printLabel, updatePrintLabel] = useState(false);

  // Create the props needed to pass to the Wizard
  const wizardProps = {
    header: () => {
      return (
      <header className="App-header">
          <h1>Shipping Label Maker</h1>
        </header>
      ) 
    },
    steps: [
      { component: GetSenderAddress, validation: validateGetSenderAddress },
      { component: GetReceiverAddress, validation: validateGetReceiverAddress },
      { component: GetWeight, validation: validateGetWeight },
      { component: GetServiceOption, validation: validateGetServiceOption },
      { component: Confirm, validation: validateConfirm },
    ],
    onComplete: () => {
      updatePrintLabel(!printLabel);
    }
  };

  // Build object to pass using context
  const wizarContextValue = {
    shippingInfo: shippingInfo,
    updateShippingInfo: (newShippingInfo) => UpdateShippingInfo({...shippingInfo, ...newShippingInfo}),
  };

  let render = (
    <WizardContext.Provider value={wizarContextValue} >
      <Wizard { ...wizardProps } />
    </WizardContext.Provider>
  );

  if(printLabel) {
    render = (
      <ShippingLabel {...{shippingInfo}}/>
    );
  }

  return (
    <Row>
      <Col sm={{span:10, offset: 1}}>
        {render}
      </Col>
    </Row>
  );
};

export default ShippingLabelMaker;
