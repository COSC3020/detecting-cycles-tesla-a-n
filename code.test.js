const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Test case: Empty graph should have no cycle
const testEmptyGraph = jsc.forall("bool", function() {
    const graph = {};
    return hasCycle(graph) === false;
});

// Test case: Single vertex graph should have no cycle
const testSingleVertexGraph = jsc.forall("bool", function() {
    const graph = { 'A': {} };
    return hasCycle(graph) === false;
});

// Test case: Two connected vertices should have no cycle
const testTwoVerticesGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true }, 
        'B': { 'A': true } 
    };
    return hasCycle(graph) === false;
});

// Test case: Simple path should have no cycle
const testPathGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true }, 
        'B': { 'A': true, 'C': true }, 
        'C': { 'B': true, 'D': true },
        'D': { 'C': true }
    };
    return hasCycle(graph) === false;
});

// Test case: Triangle should have a cycle
const testTriangleGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true, 'C': true }, 
        'B': { 'A': true, 'C': true }, 
        'C': { 'A': true, 'B': true }
    };
    return hasCycle(graph) === true;
});

// Test case: Square should have a cycle
const testSquareGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true, 'D': true }, 
        'B': { 'A': true, 'C': true }, 
        'C': { 'B': true, 'D': true },
        'D': { 'C': true, 'A': true }
    };
    return hasCycle(graph) === true;
});

// Test case: Tree should have no cycle
const testTreeGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true, 'C': true }, 
        'B': { 'A': true, 'D': true, 'E': true }, 
        'C': { 'A': true, 'F': true },
        'D': { 'B': true },
        'E': { 'B': true },
        'F': { 'C': true }
    };
    return hasCycle(graph) === false;
});

// Test case: Disconnected components with one cycle
const testDisconnectedGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true }, 
        'B': { 'A': true }, 
        'C': { 'D': true, 'E': true }, 
        'D': { 'C': true, 'E': true },
        'E': { 'C': true, 'D': true }
    };
    return hasCycle(graph) === true;
});

// Test case: Directed graph with cycle
const testDirectedCycleGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true }, 
        'B': { 'C': true }, 
        'C': { 'A': true }
    };
    return hasCycle(graph) === true;
});

// Test case: Complex graph with multiple cycles
const testComplexGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'B': true, 'C': true }, 
        'B': { 'A': true, 'D': true, 'E': true }, 
        'C': { 'A': true, 'F': true },
        'D': { 'B': true, 'E': true },
        'E': { 'B': true, 'D': true },
        'F': { 'C': true, 'G': true },
        'G': { 'F': true, 'H': true },
        'H': { 'G': true, 'I': true },
        'I': { 'H': true, 'G': true }
    };
    return hasCycle(graph) === true;
});

// Test case: Graph with self-loop
const testSelfLoopGraph = jsc.forall("bool", function() {
    const graph = { 
        'A': { 'A': true, 'B': true }, 
        'B': { 'A': true }
    };
    return hasCycle(graph) === true;
});

// Assert all test cases
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
