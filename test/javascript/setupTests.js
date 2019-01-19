import React from 'react'
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import $ from 'jquery';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

// global.jestExpect = global.expect;
// global.expect = chai.expect;

// Make sure chai and jasmine ".not" play nice together
//.not.toHaveBeenCalled() still won't work, use .toHaveBeenCalledTimes(0)
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get;
Object.defineProperty(chai.Assertion.prototype, 'not', {
  get() {
    Object.assign(this, this.assignedNot);
    return originalNot.apply(this);
  },
  set(newNot) {
    this.assignedNot = newNot;
    return newNot;
  },
});

// Combine both jest and chai matchers on expect
const originalExpect = global.expect;

global.expect = (actual) => {
  const originalMatchers = originalExpect(actual);
  const chaiMatchers = chai.expect(actual);
  const combinedMatchers = Object.assign(chaiMatchers, originalMatchers);
  return combinedMatchers;
};

chai.use(chaiEnzyme()) // Note the invocation at the end
global.$ = global.jQuery = $;
global.React = React;
global.ReactDOM = ReactDOM;
Enzyme.configure({ adapter: new EnzymeAdapter() })
