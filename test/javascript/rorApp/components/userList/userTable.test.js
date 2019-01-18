import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';

// Components
import UserTable from 'packs/rorApp/components/userList/userTable';

const users = [{ username: 'username', fullname: 'fullname', password: 'password', email: 'email', _id: {$oid: "5c4258569375b06aa90b6718"} }];
const handleDelete = jest.fn();

const wrapper = shallow(<UserTable users={users} handleDelete={handleDelete} />);
// let container, containerProp, childContainer, childContainerProps;

describe('Component: userTable', () => {
  it('should utilize props', () => {
    const wrapperNoProps = shallow(<UserTable handleDelete={handleDelete} />);

    expect(wrapper.state().users).toEqual(users);
    expect(wrapperNoProps.state().users).toBeNull();
  });
})
