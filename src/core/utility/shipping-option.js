export const ShippingOption = {
  ground: 1,
  priority: 2
};

export const GetShippingOptionName = (value) => {
  switch(value) {
    case 1:
      return 'Ground';
    case 2:
      return 'Priority';
    default:
      throw new Error('Invalid Shipping Option');
  }
};