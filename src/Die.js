import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    nums:[
      "one",
      "two",
      "three",
      "four",
      "five",
      "six"
    ]
    
  }
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.props.handleClick(this.props.idx)
  }
  render() {
    let index = this.props.nums
    let map = new Map()
    index.forEach((val,i)=>{
      map.set(i+1, val);
    }) 
    // console.log(map.get(this.props.val), this.props.val)
    return (
        <i  
          className={`fas fa-dice-${map.get(this.props.val)} Die-i`} 
          style={{  
            color: this.props.locked ? "#8e99ab" : "white",
            fontSize: "4em"
          }}
          onClick={this.handleClick}
        ></i>
    );
  }
}

export default Die;
