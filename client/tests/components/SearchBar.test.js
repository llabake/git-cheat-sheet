import React from 'react';
import { shallow, mount } from 'enzyme';

import { SearchBar } from '../../components/SearchBar';

describe('<SearchBar />', () => {
  it('renders without crashing', () => {
    shallow(<SearchBar />);
  });

  it('handles search', () => {
    const props = {
      searchCategory: jest.fn(() => new Promise(resolve => resolve())),
    };
    const wrapper = mount(<SearchBar {...props} />);
    wrapper.find('input').simulate('change');
    expect(props.searchCategory).toHaveBeenCalled();
  });
});
