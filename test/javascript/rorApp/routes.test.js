import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import store from 'packs/rorApp/reducers'

import Root from 'packs/rorApp/routes'

describe('Application', () => {

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <Root store={store} />
      ).toJSON()

    expect(tree).toMatchSnapshot()
  });

})
