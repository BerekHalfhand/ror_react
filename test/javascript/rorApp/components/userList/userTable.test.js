import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';

// Components
import UserTable from 'packs/rorApp/components/userList/userTable';

const users = [{ username: 'username', fullname: 'fullname', password: 'password', email: 'email', _id: {$oid: "5c4258569375b06aa90b6718"} }];
const onDelete = jest.fn();

const wrapper = shallow(<UserTable users={users} onDelete={onDelete} />);
// let container, containerProp, childContainer, childContainerProps;

describe('Component: userTable', () => {
  it('should utilize props', () => {
    const wrapperNoProps = shallow(<UserTable onDelete={onDelete} />);

    expect(wrapper.state().users).toEqual(users);
    expect(wrapperNoProps.state().users).toBeNull();
  });
})
