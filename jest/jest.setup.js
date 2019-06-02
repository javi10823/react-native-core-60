import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.console.warn = message => {
  throw message;
};

global.console.error = message => {
  throw message;
};
