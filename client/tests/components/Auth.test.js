import React from 'react';
import { shallow } from 'enzyme';

import { Auth, mapDispatchToProps } from '../../components/Auth';

const setup = () => {
  const props = {
    user: {
      username: "",
      password: "",
    },
    errors: {},
    isValid: false,
    saving: false,
    showSignUp: true,
    handleChange: jest.fn(() => new Promise(resolve => resolve())),
    validate: jest.fn(() => new Promise(resolve => resolve())),
    saveUser: jest.fn(() => new Promise(resolve => resolve())),
    signOut: jest.fn(() => new Promise(resolve => resolve())),
    toggleShowSignin: jest.fn(() => new Promise(resolve => resolve())),
    toggleShowSignup: jest.fn(() => new Promise(resolve => resolve())),
  };

  const wrapper = shallow(<Auth {...props} />);

  return { wrapper, props };
};

describe('<Auth />', () => {
  const { wrapper } = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
	
  it('handle change', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleChange');
    const event = {
      preventDefault: jest.fn(),
      target: {
        username: 'labake',
      },
    };
    wrapper.instance().handleChange(event);
    expect(spy).toHaveBeenCalled();
  });

  it('handles validation', () => {
    const spy = jest.spyOn(wrapper.instance(), 'validate');
    const event = {
      preventDefault: jest.fn(),
      target: {
        username: 'la',
        password: 'p',
      },
    };
    wrapper.setState({
      errors: {
        username: 'too short',
        password: 'too short',
      },
    });
    wrapper.instance().validate(event);
    expect(spy).toHaveBeenCalled();
  });
	
  it('saves a user', () => {
    const spy = jest.spyOn(wrapper.instance(), 'saveUser');
    const event = {
      preventDefault: jest.fn(),
      target: {
        username: 'labake',
        password: 'password',
      },
		};
		wrapper.setState({
      saving: true,
    });
    wrapper.instance().saveUser(event);
    expect(spy).toHaveBeenCalled();
  });
	
  it('toggles sign in', () => {
    const spy = jest.spyOn(wrapper.instance(), 'toggleShowSignin');
    wrapper.setState({
      showSignUp: false,
    });
    wrapper.instance().toggleShowSignin();
    expect(spy).toHaveBeenCalled();
	});
	
	it('toggles sign up', () => {
    const spy = jest.spyOn(wrapper.instance(), 'toggleShowSignin');
    wrapper.setState({
      showSignUp: true,
    });
    wrapper.instance().toggleShowSignup();
    expect(spy).toHaveBeenCalled();
  });
  
  it('sign out a user', () => {
    const spy = jest.spyOn(wrapper.instance(), 'signOut');
    const event = {
      preventDefault: jest.fn(),
		};
    wrapper.instance().signOut(event);
    expect(spy).toHaveBeenCalled();
	});
	
	it('should dispatch needed actions', () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch)).toHaveProperty('authUser');
    expect(mapDispatchToProps(dispatch)).toHaveProperty('signOut');
    const { authUser, signOut } = mapDispatchToProps(dispatch);
    authUser('login', { username: 'james', password: 'pasdss'} );
    expect(dispatch).toHaveBeenCalled();
    signOut()
    expect(dispatch).toHaveBeenCalled();
  });
});
