'use strict';
var createStore = require('fluxible-app/utils/createStore');

var FunctionStore = createStore({
    storeName: 'FunctionStore',
    initialize: function (dispatcher) {
        this.body = '';
        this.args = [];
    },
    handleFunctionChange: function (payload) {
      if (payload.body !== undefined)
        this.body = payload.body;
      if (payload.args !== undefined)
        this.args = payload.args;
      this.emitChange();
    },
    handlers: {
      'UPDATE_FUNCTION': 'handleFunctionChange'
    },
    getState: function () {
      return {
        body: this.body,
        args: this.args
      };
    },
    dehydrate: function () {
      return this.getState();
    },
    rehydrate: function (state) {
      this.body = state.body;
      this.args = state.args;
    }
});

module.exports = FunctionStore;
