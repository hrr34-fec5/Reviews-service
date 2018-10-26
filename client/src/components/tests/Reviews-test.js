import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../index';

describe('Basic loading', function() {
  it('should be selectable by class "reviews"', function() {
    expect(shallow(<App />).is('.reviews-header')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<App />).find('reviews-header').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<App />).text()).toEqual('Reviews');
  });
});