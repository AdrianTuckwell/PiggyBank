var React = require('react');
var ReactDOM = require('react-dom');
var PiggyBank = require('./components/PiggyBank.jsx');

window.onload = function(){
  ReactDOM.render(
    <PiggyBank owner="Beth" title="piggy bank" colour="Red"/>,
    document.getElementById('app')
  );
}
