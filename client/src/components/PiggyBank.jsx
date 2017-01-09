var React = require('react');

var PiggyBank = React.createClass({

  // For checking the types...
  propTypes:{
    owner:React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    colour:React.PropTypes.string.isRequired
  },

  // this gets called automatically by React
  getInitialState: function(){
    return { total: 0 }
  },

  addToSavings: function(){
    this.setState({
      total: this.state.total + 1
    })
  },

  withdrawSavings: function(){
    this.setState({
      total: this.state.total - 1
    })
  },

  depositAmount: function(){
    this.setState({
      total: this.state.total + 10
    })
  },

  render: function(){
    return (
      <div className="bank-box">
        <h1> {this.props.owner}</h1>
        <h1> {this.props.title}</h1>
        <p> Total savings: {this.state.total} </p>
        <button onClick={this.addToSavings}>Deposit change!</button>
        <button onClick={this.withdrawSavings}>Withdraw!</button>
        <button onClick={this.depositAmount}>Deposit</button>
      </div>
    );
  }
});

module.exports = PiggyBank;