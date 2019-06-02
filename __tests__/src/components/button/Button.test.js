import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../../src/components/button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<Button text="test text" textColor="white" buttonColor="black" />);
      expect(component).toMatchSnapshot();
    });
  });
});
