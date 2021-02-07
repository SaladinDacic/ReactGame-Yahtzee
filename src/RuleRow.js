import React, { Component } from 'react';
import './RuleRow.css';

class RuleRow extends Component {

  constructor(props){
    super(props);
    this.state = {toggle: false}
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

  }

  handleMouseEnter(evt){
    this.setState({toggle:true});
  }

  handleMouseLeave(evt){
    this.setState({toggle:false});
  }
  render() {
    const isTrigered = this.props.score === undefined && this.props.score !== 0
    return (
      <tr /* className={"RuleRow RuleRow-disabled"} */ onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} className="RuleRow RuleRow-active" onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        {this.state.toggle&&isTrigered &&<td className="RuleRow-score">{this.props.message}</td>}
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;