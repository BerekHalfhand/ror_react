import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';


// Components
import UserListContainer from 'packs/rorApp/components/pages/userListContainer';
import UserList from 'packs/rorApp/components/pages/userList';
import UserTable from 'packs/rorApp/components/pages/userList/userTable';

const users = [{ username: 'username', fullname: 'fullname', password: 'password', email: 'email', _id: {$oid: "5c4258569375b06aa90b6718"} }];
const preventDefault = jest.fn();
const handleDelete = jest.fn();
const wrapContainer = shallow(<UserListContainer users={users} />);
const wrapItem = shallow(<UserList users={users} handleDelete={handleDelete} />);

let childContainer, childContainerProps;

describe('Component: userList', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer.create(
      <userList />
      ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should utilize props', () => {
    const wrapContainerNoProps = shallow(<UserListContainer />);

    expect(wrapContainer.state().users).toEqual(users);
    expect(wrapContainerNoProps.state().users).toBeNull();
  });

  test('should accept user', () => {
    let   response1 = wrapContainer.instance().handleSubmit({preventDefault}),
          response2 = wrapContainer.instance().handleSubmit({preventDefault}, users[0]);
    expect(response1).toBe(false);
    expect(response2).toBe(true);
  });

  it('should behave', () => {

    wrapItem.is(UserList);
    expect(wrapItem.find('input').length).toBe(4);

    wrapItem.find('input#username').simulate('change', { target:
      {
        value: 'Change function',
        id: 'username'
      }
    });

    wrapItem.find('form').simulate('submit', { preventDefault });
    expect(preventDefault).toBeCalled();

    // console.dir(wrapContainer.state());
  });

  describe("Child: UserTable", () => {
    beforeEach(() => {
      childContainer = wrapItem.find('UserTable');
      childContainerProps = childContainer.props();
    });

    it("should have a <userTable>", () => {
      childContainer.is(UserTable);
      expect(childContainer).toHaveLength(1);
    });

    it("should have users as prop", () => {
      expect(childContainerProps.users).toEqual(users);
    });

    // it("should have onDelete as prop", () => {
    //   expect(typeof childContainerProps.handleDelete).toBe("function");
    // });
  });


})
