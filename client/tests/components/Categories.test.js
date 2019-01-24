import React from 'react';
import { shallow } from 'enzyme';
import Categories from '../../components/Categories';

describe("<Categories />", () => {
  const props = {
    categories: [],
    searchResults: null,
  };
  it("renders without crashing", () => {
    const wrapper = shallow(<Categories {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});