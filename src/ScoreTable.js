import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import 
    { 
      ones, 
      twos, 
      threes, 
      fours, 
      fives, 
      sixes, 
      threeOfKind, 
      fourOfKind, 
      fullHouse, 
      smallStraight,
      largeStraight, 
      yahtzee, 
      chance 
    } 
  from './Rules';


class ScoreTable extends Component {
  static defaultProps = {
    message : {
      ones: "score equal to sum of all ones",
      twos: "score equal to sum of all twos",
      threes: "score equal to sum of all threes",
      fours: "score equal to sum of all fours", 
      fives: "score equal to sum of all fives",
      sixes: "score equal to sum of all sixes",
      threeofkind: "score equal to sum of your 3 numbers",
      fourofkind: "score equal to sum of your 4 numbers",
      fullhouse: "25 points for a full house",
      smallstraight: "30 points for small straight",
      largestraight: "40 points for large straight",
      yahtzee: "50 points for yahtzee, scored when all numbers are equal",
      chance: "score equal to sum of all numbers"
    }
  }
  constructor(props){
    super(props);
    this.state = {sum : undefined};
    this.result = this.result.bind(this);
    this.handleRest = this.handleRest.bind(this);
  }
  result(){
    let scores = this.props.scores ||{val:"holder"}
    let mapScores = new Map(Object.entries(scores))
    let arrScores =[...mapScores.values()]
    let arrFilter = arrScores.filter(val=>{
      return val !== undefined && true
    })
    if(arrFilter.length === arrScores.length){
      let sum = arrScores.reduce((val,next)=>{
        return val + next;
      });
      this.setState({sum: sum || undefined})
    }
  }
  handleRest(){
      this.props.playAgain();
      this.setState({
        sum : undefined
      })
  }

  render() {
    const { scores, doScore } = this.props;
    console.log(this.state.sum)
    return (
      <div onMouseMove={this.result} className="ScoreTable">
        {this.state.sum
        ?<table>
          <tbody>
            <tr>
              <td style={{"display": "flex"}}><span>Result:</span><span style={{transform: "translateX(417px)"}}>{this.state.sum}</span></td>
              <button onClick={this.handleRest}>Rest</button>
            </tr>
          </tbody>
        </table>
        :<div>
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow message={this.props.message.ones} name="Ones" score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)}/>
              <RuleRow message={this.props.message.twos} name="Twos" score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow message={this.props.message.threes} name="Threes" score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow message={this.props.message.fours} name="Fours" score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow message={this.props.message.fives} name="Fives" score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow message={this.props.message.sixes} name="Sixes" score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow message={this.props.message.threeofkind} name="Three of Kind" score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow message={this.props.message.fourofkind} name="FourOfKind" score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow message={this.props.message.fullhouse} name="FullHouse" score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow message={this.props.message.smallstraight} name="SmallStraight" score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow message={this.props.message.largestraight} name="LargeStraight" score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow message={this.props.message.yahtzee} name="Yahtzee" score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow message={this.props.message.chance} name="Chance" score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        </div>}
      </div>
    )
  }
}

export default ScoreTable;