import React from 'react';
import WatchScreen from '../../../src/rocky/watch/screens/WatchScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<WatchScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});