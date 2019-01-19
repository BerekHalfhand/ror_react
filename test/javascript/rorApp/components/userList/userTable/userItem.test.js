import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';

// Components
import UserItem from 'packs/rorApp/components/userList/userTable/userItem';

const user = { username: 'username', fullname: 'fullname', password: 'password', email: 'email', _id: {$oid: "5c4258569375b06aa90b6718"} };
const handleDeleteSpy = jest.fn();
// const handleDelete = handleDeleteSpy;

const wrapper = shallow(<UserItem user={user} handleDelete={handleDeleteSpy} id={user._id.$oid} />);
let deleteButton, editButton;

describe('Component: userItem', () => {
  beforeEach(() => {
    handleDeleteSpy.mockClear();
    deleteButton = wrapper.find("#delete-button");
  });

  it("should should have 2 buttons", () => {
    expect(wrapper.find('button').length).toBe(2);
  });

  it("should call handleDelete", () => {
    expect(handleDeleteSpy).toHaveBeenCalledTimes(0);
    deleteButton.simulate("click");
    // console.dir(wrapper.props());
    expect(handleDeleteSpy).toHaveBeenCalled();
    expect(handleDeleteSpy).toHaveBeenCalledWith(user._id.$oid);
  });

  it("should call handleEdit", () => {
    wrapper.instance().flipEditable = jest.fn();
    // wrapper.update();
    let response1 = wrapper.instance().handleEdit(user._id.$oid, user),
        response2 = wrapper.instance().handleEdit(user._id.$oid);
    expect(response1).toBe(true);
    expect(response2).toBe(false);
    expect(wrapper.instance().flipEditable).toHaveBeenCalledTimes(1);
  });
})
