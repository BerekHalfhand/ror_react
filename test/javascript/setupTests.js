import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
// import $ from 'jquery';

// global.$ = global.jQuery = $;
Enzyme.configure({ adapter: new EnzymeAdapter() })
