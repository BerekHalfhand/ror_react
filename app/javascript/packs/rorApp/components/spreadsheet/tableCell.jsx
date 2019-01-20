import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
// import {Api} from '../middleware/api'

export default class TableCell extends React.Component {
  static propTypes = {
    column: PropTypes.object.isRequired,  //column data
    isHead: PropTypes.bool,               //does this cell represent a column?
  }

  constructor(props) {
    super(props);
    this.state = {
      editable:   false,
      value:      this.props.value || this.props.column.value,
      newValue:   this.props.value || this.props.column.value,
      type:       this.props.isHead ? 'text' : this.props.column.type,
    };
    this.handleChange =   this.handleChange.bind(this);
    this.handleSubmit =   this.handleSubmit.bind(this);
    this.handleKeyDown =  this.handleKeyDown.bind(this);
    this.handleSelect =   this.handleSelect.bind(this);
  }

  //adding an empty option for each 'select' column
  componentDidMount() {
    if (this.state.type === 'select' && this.props.column.options) {
      let options = this.props.column.options.slice(0);
      if (options[0] != '') options.unshift('');

      this.setState({
        options: options
      });
    }
  }

  //Cell click handler
  handleClick() {
    // console.log('TableCell::handleClick');
    if (!this.state.editable)
      this.setState({
        editable: true
      });
  }

  //Input change handler, except for type: select
  handleChange(event) {
    // console.log("TableCell::handleChange");
    let value = event.target.value;
    // console.log(value);
    this.setState({
      newValue: value
    });
  }

  //Submit form handler, except for type: select
  handleSubmit(event) {
    // console.log("TableCell::handleSubmit");
    let value = this.state.newValue;
    console.log(value);
    event.preventDefault();
    this.setState({
      value: value,
      editable: false
    });
  }

  //Escape handler, discard changes
  handleKeyDown(event) {
    // console.log("TableCell::handleKeyDown");
    if (event.key === 'Escape') {
      event.preventDefault();
      this.setState({
        newValue: this.state.value,
        editable: false
      });
    }
  }

  //Select change handler
  handleSelect(event) {
    // console.log("TableCell::handleSelect");
    this.setState({
      newValue: event.target.value
    });
  }

  renderForm() {
    let input, optionsNodes, options;
    if (this.state.type === 'select' && !this.props.isHead) {

      optionsNodes = this.state.options.map((option, i) => {
        return (
          <option key={i} value={option}>{option}</option>
        );
      }, this);

      //for type: select
      input = (
        <select onChange={this.handleSelect} value={this.state.newValue}>
          {optionsNodes}
        </select>
      );
    } else {
      //for other types
      input = <input type={this.state.type} onChange={this.handleChange} onKeyDown={this.handleKeyDown} defaultValue={this.state.value} />
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {input}
        <button type="submit" className="btn btn-primary m-1">Ok</button>
      </form>
    )
  }

  render() {
    return(
      <td className={!this.state.editable ? "editable" : ""} onClick={() => this.handleClick()} >
        {this.state.editable ? this.renderForm() : this.state.value}
      </td>
    )
  }
}
