import React from 'react';
import { shallow } from 'enzyme';

import Category from '../../components/Category';

const setup = () => {
  const props = {
    category: {
      cheats: [{}],
    },
  };

  const wrapper = shallow(<Category {...props} />);

  return { wrapper, props };
};

describe('<Category />', () => {
  const { wrapper } = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
