'use strict';

function index () {
  var handlers = Object.create(null);
  var get = function (evt) {
    if (!handlers[evt]) { handlers[evt] = []; }
    return handlers[evt]
  };
  var trigger = function (evt) {
  var args = [], len = arguments.length - 1;
  while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];
get(evt).forEach(function (fn) { return fn.apply(null, args); });};

  var off = function (evt, fn) {
    if (fn) { get(evt).splice(get(evt).indexOf(fn), 1); }
    else { delete handlers[evt]; }
  };
  var on = function (evt, fn) {
    get(evt).push(fn);
    return function () { return off(evt, fn); }
  };

  return {
    on: on, off: off, trigger: trigger, $get: get, $destroy: function () {Object.keys(handlers).forEach(function (evt) {off(evt);});}
  }
}

// function eventFactory () {
//   this.handlers = {}
// }
//
// eventFactory.prototype = {
//   get: evt => {
//     if (!this.handlers[evt]) this.handlers.evt = []
//     return this.handlers.evt
//   },
//   off: (evt, fn) => get(evt).splice(get(evt).indexOf(fn), 1),
//   on: (evt, fn) => {
//     this.get(evt).push(fn)
//     return () => this.off(evt, fn)
//   },
//   trigger: (evt, ...args) => {
//     get(evt).forEach(fn => fn.apply(null, args))
//   },
//   destroy: () => {}
// }
//
// export default eventFactory

module.exports = index;
