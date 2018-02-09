import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import NavigationButton from './VisibleNavigationButton';

describe('NavigationButton', () => {
  it('should render correctly', () => {
    const output = shallow(<NavigationButton /> ); //todo - it needs dispatch / store
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
