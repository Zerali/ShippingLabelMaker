import React from 'react';
import Wizard from '../../core/components/wizard/wizard';
import GetSenderAddress from '../../core/components/get-sender-address/get-sender-address';
import GetReceiverAddress from '../../core/components/get-receiver-address/get-receiver-address';
import GetWeight from '../../core/components/get-weight/get-weight';
import GetShippingOption from '../../core/components/get-shipping-option/get-shipping-option';
import Confirm from '../../core/components/confirm/confirm';

const props = {
  header: () => { return (
      <div>
        <h1>Shipping Label Maker</h1>
      </div>
    ) 
  },
  steps: [ GetSenderAddress, GetReceiverAddress, GetWeight, GetShippingOption, Confirm ],
  wizardContext: {},
  onComplete: () => {
    console.log('It completed!');
  }
};

export const ShippingLabelMaker = () => {

  return (
    <div>
      <Wizard { ...props } />
    </div>
  );
};

export default ShippingLabelMaker;
