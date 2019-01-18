import React from 'react'
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';


import UserList from 'packs/rorApp/components/userList'

describe('Component: userList', () => {
  const users = [{ username: 'username', fullname: 'fullname', password: 'password', email: 'email' }];

  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <userList />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should add a user', () => {
    const wrapper = shallow(<UserList />);
    wrapper.is(UserList);
    // console.log(wrapper.html());
    // expect(wrapper.is('div')).to.equal(true);

    console.log('length', wrapper.find('h1').length);

    // expect(wrapper.find('h1').length).toBe(5);

    // const component = mount(<userList users={users} />);
    // const preventDefault = jest.fn();
    // // component.setState({
    // //   users
    // // });
    // expect(component.find('input.d-block:nth-child(3)')).to.have.lengthOf(4);
    // // component.find('form').simulate('submit', { preventDefault });
    // expect(toJson(component)).toMatchSnapshot();
    // expect(preventDefault).toBeCalled();
});

})
