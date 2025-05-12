const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');


// empty graph should have no cycle
// single vertex graph should have no cycle
// two connected vertices should have no cycle
// simple path should have no cycle
// triangle should have a cycle
// square should have a cycle
// tree should have no cycle
// disconnected components with one cycle
// directed graph with cycle
// complex graph with multiple cycles
// graph with self-loop
