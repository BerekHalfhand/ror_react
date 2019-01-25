import React from "react"
import PropTypes from "prop-types"
// Components
import UserItem from './userTable/userItem';

export default class UserTable extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    key: PropTypes.string,
    user: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
  }

  constructor (props) {
    super(props);
    this.renderPopulatedTable = this.renderPopulatedTable.bind(this);

    this.state = {
      users: props.users || null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({users: nextProps.users});
  }

  renderEmptyTable () {
    return (
      <tbody>
        <tr>
          <td colSpan="6">No people found.</td>
        </tr>
      </tbody>
    );
  }

  renderPopulatedTable () {
    // console.log('renderPopulatedTable');

    var list = this.state.users.map(function(user) {
      let id = user && user._id && user._id.$oid && user._id.$oid;

      return (
        <UserItem key={id} id={id} user={user}
         onDelete={this.props.onDelete} />
      );
    }, this);

    return (
      <React.Fragment>
        <tbody>
          {list}
        </tbody>
      </React.Fragment>
    );

  }

  render () {
    return (
      <React.Fragment>
        <table id="user-table" className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Username</th>
              <th>Full Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>

            {!this.state.users || !this.state.users.length ? this.renderEmptyTable() : this.renderPopulatedTable()}

        </table>
      </React.Fragment>
    );
  }
}
