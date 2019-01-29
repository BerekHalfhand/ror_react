import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { editRows, editColumns, deleteColumns } from 'packs/rorApp/actions'
import Octicon, {Beaker, Zap, X} from '@githubprimer/octicons-react'

// Components
import TableCell from './tableCellContainer/tableCell'
import FilterFormContainer from './tableCellContainer/filterFormContainer'

class TableCellContainer extends React.Component {
  static propTypes = {
    column: PropTypes.object.isRequired,  //column data
    isHead: PropTypes.bool,               //does this cell represent a column?
  }

  constructor(props) {
    super(props)
    this.state = {
      editable:   false,
      value:      this.props.value || this.props.column.value,
      newValue:   this.props.value || this.props.column.value,
    }

    //column titles are always text
    this.type = this.props.isHead ? 'text' : this.props.column.type
    autoBind(this)
  }

  //Cell click handler
  handleClick() {
    if (!this.state.editable)
      this.setState({
        editable: true,
      })
  }

  //Input change handler
  handleChange(event) {
    let field = {[event.target.name]: event.target.value}
    this.setState({ ...field })
  }

  //Submit form handler
  handleSubmit(event) {
    event.preventDefault()
    let value = this.state.newValue,
        column = this.props.column

    //sending an edit request to one collection or the other
    if (this.props.isHead) {
      column.title = value
      this.props.editColumns(column)
    } else
      this.props.editRows(this.props.row.id(), this.props.column.id(), this.state.newValue)

    this.setState({
      editable: false
    })
  }

  //Escape handler, discard changes, close the form
  handleKeyDown(event) {
    if (event.key === 'Escape') {
      event.preventDefault()
      this.setState({
        newValue: this.state.value,
        editable: false
      })
    }
  }

  handleDelete(event, id) {
    event.stopPropagation()
    this.props.deleteColumns(id)
  }

  render() {
    return (
      <td className="touch table-cell" onClick={this.handleClick} >
        <TableCell  type={this.type}
                    options={this.props.column.options}
                    editable={this.state.editable}
                    placeholder={this.props.column.title}
                    column={this.props.column}
                    value={this.props.value}
                    handleChange={this.handleChange}
                    handleKeyDown={this.handleKeyDown}
                    handleClick={this.handleClick}
                    handleSubmit={this.handleSubmit} />
        {this.props.isHead ?
          <FilterFormContainer column={this.props.column} />
        : null }
        {this.props.isHead ?
          <span className="float-right delete-button"
                onClick={(e) => {this.handleDelete(e, this.props.column.id())}}>
            <Octicon icon={X} />
          </span>
        : null }
      </td>
    )
  }
}

const mapStateToProps = state => ({ ...state })

export default connect(mapStateToProps, {editRows, editColumns, deleteColumns})(TableCellContainer)
