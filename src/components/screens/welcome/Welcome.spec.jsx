import React from 'react';
import renderer from 'react-test-renderer';

import Home from '.';

describe('<Home />', () => {
  const tree = renderer.create(<Home />).toJSON();

  it('should renders properly', () => {
    expect(tree).toMatchSnapshot();
  });
});
