import React from 'react';
import { shallow } from 'enzyme';

import TextInput from '../../components/Common/TextInput';

const setup = () => {
  const props = {
    placeholder: '',
    icon: '',
    name: '',
    value: '',
    onChange: jest.fn(),
  };

  const wrapper = shallow(<TextInput {...props} />);

  return { wrapper, props };
};

describe('<TextInput />', () => {
  const { wrapper } = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
