'use strict';
var React = require('react');
var FunctionStore = require('../stores/FunctionStore');
var StoreMixin = require('fluxible-app').StoreMixin;
var FuncAction = require('../actions/updateFunction');
var vm = require('vm');

var Eval= React.createClass({
  mixins: [StoreMixin],
  statics: {
    storeListeners: [FunctionStore]
  },
  makeState: function () {
    var fstate = this.getStore(FunctionStore).getState();
    var funcStr = (['function () {',
        fstate.body,
        '}']).join('\n');
    var evaluable = '(' + funcStr + ')()';
    return {
      funcStr: funcStr,
      evaluable: evaluable
    };
  },
  getInitialState: function () {
    return this.makeState();
  },
  onChange: function () {
    var state = this.makeState();
    this.setState(state);
  },
  render: function () {
    try {
      var res = vm.runInNewContext(this.state.evaluable, {});
      return <div>
        <p>{res}</p>
      </div>;
    } catch (e) {
      return <p>Failed</p>;
    }
  }
});

module.exports = Eval;
