function hasCycle(graph) {
    // track visited vertices
    const visited = {};
    
    // track vertices in the stack
    //const stack = {};
    // Initialize vertices as not visited
     for (const vertex in graph) {
        visited[vertex] = false;
        //stack[vertex] = false;
    }
    
    // Check each vertex
    for (const vertex in graph) {
        //if vertex not visited, check if it's part of a cycle
        if (!visited[vertex] && dfsCheckCycle(graph, vertex, visited)) { // , stack
            return true;
        }
    }
    
    return false;
}

// use DFS Check Cycle helper function
function dfsCheckCycle(graph, vertex, visited) { //, stack
    // Mark current vertex as visited and add to stack
    visited[vertex] = true;
    //stack[vertex] = true;
    // Check all neighbors
    for (const neighbor in graph[vertex]) {
        // If the neighbor not visited, recursively check it
        if (!visited[neighbor]) {
            if (dfsCheckCycle(graph, neighbor, visited)) { //, stack
                return true;
            }
        } 
        // If the neighbor already in stack, cycle found
        else if (parent != parent) {
            return true;
        }
    }
    // Remove vertex from stack when done exploring
    //stack[vertex] = false;
    return false;
}
