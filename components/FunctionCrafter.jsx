'use strict';
var React = require('react');
var FunctionStore = require('../stores/FunctionStore');
var StoreMixin = require('fluxible-app').StoreMixin;
var FuncAction = require('../actions/updateFunction');
var FuncEval = require('./FunctionEval'),
    ArgPick = require('./ArgumentPicker');

var Crafter = React.createClass({
  mixins: [StoreMixin],
  statics: {
    storeListeners: [FunctionStore]
  },
  getInitialState: function () {
    return this.getStore(FunctionStore).getState();
  },
  onChange: function () {
    var state = this.getStore(FunctionStore).getState();
    this.setState(state);
  },
  handleChange: function (ev) {
    this.props.context.executeAction(FuncAction, 
      { body: ev.target.value }, 
      function (err) {
    });
  },
  render: function () {
    return <div>
      <h2>Build a function</h2>
      <ArgPick />
      <textarea value={this.state.body} onChange={this.handleChange}/>
      <p>{'}'}</p>
      <FuncEval context={this.props.context}/>

    </div>;
  }
});

module.exports = Crafter;
