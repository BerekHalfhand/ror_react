import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';


// Components
import UserList from 'packs/rorApp/components/userList';
import UserTable from 'packs/rorApp/components/userList/userTable';

const users = [{ username: 'username', fullname: 'fullname', password: 'password', email: 'email', _id: {$oid: "5c4258569375b06aa90b6718"} }];
const wrapper = shallow(<UserList users={users} />);
const preventDefault = jest.fn();

let childContainer, childContainerProps;

describe('Component: userList', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <userList />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should utilize props', () => {
    const wrapperNoProps = shallow(<UserList />);

    expect(wrapper.state().users).toEqual(users);
    expect(wrapperNoProps.state().users).toBeNull();
  });

  test('should accept user', () => {
    let   response1 = wrapper.instance().handleSubmit({preventDefault}),
          response2 = wrapper.instance().handleSubmit({preventDefault}, users[0]);
    expect(response1).toBe(false);
    expect(response2).toBe(true);
  });

  it('should behave', () => {

    // wrapper.is(UserList);
    expect(wrapper.find('input').length).toBe(4);

    wrapper.find('input#username').simulate('change', { target:
      {
        value: 'Change function',
        id: 'username'
      }
    });

    wrapper.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();

    // console.dir(wrapper.state());
  });

  describe("Child: UserTable", () => {
    beforeEach(() => {
      childContainer = wrapper.find('UserTable');
      childContainerProps = childContainer.props();
    });

    it("should have a <userTable>", () => {
      expect(childContainer).toHaveLength(1);
    });

    it("should have label as prop", () => {
      expect(childContainerProps.users).toEqual(users);
    });

    it("should have onSubmit as prop", () => {
      expect(typeof childContainerProps.onDelete).toBe("function");
    });
  });


})
