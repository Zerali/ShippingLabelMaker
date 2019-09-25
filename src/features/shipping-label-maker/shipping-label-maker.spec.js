import React from 'react';
import { mount } from 'enzyme';
import ShippingLabelMaker from './shipping-label-maker';

describe('shipping-label-maker', () => {
  it('wizard moves forward and back', () => {
    const wrapper = mount(<ShippingLabelMaker/>);

    const shippingInfoState = {
      from: {
        name: 'Name',
        street: '1234 Fun Court',
        city: 'Minneapolis',
        state: 'Mn',
        zip: '55416'
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

    //jest.spyOn(React, 'useState').mockImplementation((StateFromComponent) => [shippingInfoState, () => {}]);
    jest.spyOn(React, 'useState').mockReturnValue([shippingInfoState, () => {}]);

    expect(wrapper.text()).toContain('Enter the shippers address:');

    const buttons = wrapper.find('button.btn-primary').props().onClick();
    
    //expect(buttons.length).toEqual(1);
    
    //buttons.at(0).props().onClick();

    wrapper.update();

    expect(wrapper.text()).toContain('Enter the receivers address:');
  }); 
});