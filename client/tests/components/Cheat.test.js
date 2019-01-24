import React from 'react';
import { shallow, mount } from 'enzyme';
import Cheat from '../../components/Cheat';

const setup = () => {
  const props = {
    cheat: {
      description: 'description',
      commands: "git lorem ipsum",
    },
    clicked: jest.fn(() => new Promise(resolve => resolve())),
  };
  
  const wrapper = shallow(<Cheat {...props} />);
  
  return { wrapper, props };
};
describe('Cheat component', () => {
  const { wrapper } = setup();
  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('copies a git command to clipboard', () => {
    const spy = jest.spyOn(wrapper.instance(), 'clicked');
    wrapper.instance().clicked();
    expect(spy).toHaveBeenCalled();
  });
});
