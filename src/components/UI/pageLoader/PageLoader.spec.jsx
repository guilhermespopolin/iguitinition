import React from 'react';
import renderer from 'react-test-renderer';

import PageLoader from '.';

describe('<PageLoader />', () => {
  describe('When error prop iquals true', () => {
    const shallowRendered = renderer.create(
      <PageLoader error={new Error('error')} />,
    ).toJSON();

    it('should renders properly', () => {
      expect(shallowRendered).toMatchSnapshot();
    });
  });

  describe('When pastDelay prop iquals to true', () => {
    const shallowRendered = renderer.create(<PageLoader pastDelay />).toJSON();

    it('should renders properly', () => {
      expect(shallowRendered).toMatchSnapshot();
    });
  });

  describe('When there is no error and pastDelay prop iquals to false', () => {
    const shallowRendered = renderer.create(<PageLoader />).toJSON();

    it('should renders properly', () => {
      expect(shallowRendered).toMatchSnapshot();
    });
  });
});
