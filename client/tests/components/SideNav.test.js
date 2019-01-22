import React from 'react';
import { shallow } from 'enzyme';
import SideNav from '../../components/SideNav';

describe('<SideNav />', () => {
  it('renders without crashing', () => {
    shallow(<SideNav />);
  });

  it('calls the componentDidUpdate method', () => {
    const props = {
      showSignUp: true,
    };
    const wrapper = shallow(<SideNav {...props} />);
    const spy = jest.spyOn(wrapper.instance(), 'componentDidUpdate');
    const incomingProps = {
      showSignUp: false,
    };
    wrapper.instance().componentDidUpdate(incomingProps);
    expect(spy).toHaveBeenCalled();
  });
});
