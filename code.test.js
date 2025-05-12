const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// empty graph should have no cycle
const testEmptyGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === false;
});

// single vertex graph should have no cycle
const testSingleVertexGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === false;
});

// two connected vertices should have no cycle
const testTwoVerticesGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === false;
});

// simple path should have no cycle
const testPathGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === false;
});

// triangle should have a cycle
const testTriangleGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === true;
});

// square should have a cycle
const testSquareGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === true;
});

// tree should have no cycle
const testTreeGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === false;
});

// disconnected components with one cycle
const testDisconnectedGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === true;
});

// directed graph with cycle
const testDirectedCycleGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === true;
});

// complex graph with multiple cycles
const testComplexGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === true;
});

// graph with self-loop
const testSelfLoopGraph = jsc.forall("bool", function() {
    return hasCycle(graph) === true;
});

jsc.assert(testEmptyGraph);
jsc.assert(testSingleVertexGraph);
jsc.assert(testTwoVerticesGraph);
jsc.assert(testPathGraph);
jsc.assert(testTriangleGraph);
jsc.assert(testSquareGraph);
jsc.assert(testTreeGraph);
jsc.assert(testDisconnectedGraph);
jsc.assert(testDirectedCycleGraph);
jsc.assert(testComplexGraph);
jsc.assert(testSelfLoopGraph);
