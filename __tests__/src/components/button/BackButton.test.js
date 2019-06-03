import React from 'react';
import { shallow } from 'enzyme';
import BackButton from '../../../../src/components/backButton';

const mockFn = jest.fn();

describe('BackButton', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<BackButton text="test text" iconColor="white" onPress={mockFn} />);
      expect(component).toMatchSnapshot();
    });
  });
});
