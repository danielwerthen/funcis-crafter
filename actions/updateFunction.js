'use strict';

module.exports = function (context, payload, done) {
  context.dispatch('UPDATE_FUNCTION', payload);
  done();
};
