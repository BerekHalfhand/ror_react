import React from 'react'
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';


import App from 'packs/rorApp/routes'

describe('Application', () => {

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <App />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

})
