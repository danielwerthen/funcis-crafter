'use strict';
var React = require('react');
var FunctionStore = require('../stores/FunctionStore');
var StoreMixin = require('fluxible-app').StoreMixin;
var FuncAction = require('../actions/updateFunction');
var FuncEval = require('./FunctionEval');

var Class = React.createClass({
  getInitialState: function () {
    return {
      args: [],
      argInput: ''
    };
  },
  onChange: function (e) {
    this.setState({
      argInput: e.target.value
    });
  },
  onAdd: function (e) {
    var arg = this.state.argInput,
      args = this.state.args;
    if (args.indexOf(arg) < 0) {
      this.setState({
        args: args.concat(arg),
        argInput: ''
      });
    }
    e.preventDefault();
  },
  render: function () {
    var argList = this.state.args.join(', ');
    return <div className="args">
      <form onSubmit={this.onAdd}>
        <p>{'function (' + argList + ') {'}</p>
        <input type="text" placeholder="Argument name | foo" value={this.state.argInput} onChange={this.onChange}/>
      </form>
    </div>;
  }
});

module.exports = Class;
