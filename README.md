# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Sources

[DSA Graphs Cycle Detection](https://www.w3schools.com/dsa/dsa_algo_graphs_cycledetection.php):
"Start DFS traversal on each unvisited vertex (in case the Graph is not connected).
During DFS, mark vertices as visited, and run DFS on the adjacent vertices (recursively).
If an adjacent vertex is already visited and is not the parent of the current vertex, a cycle is detected, and True is returned.
If DFS traversal is done on all vertices and no cycles are detected, False is returned."

[Baeldung](https://www.baeldung.com/java-spanning-trees-kruskal):
"Initialize an empty edge set T. 
Sort all graph edges by the ascending order of their weight values. 
foreach edge in the sorted edge list
    Check whether it will create a cycle with the edges inside T.
    If the edge doesn't introduce any cycles, add it into T. 
    If T has (V-1) edges, exit the loop. 
return T"

[Disjoint-set data structure](https://en.wikipedia.org/wiki/Disjoint-set_data_structure):
"a disjoint-set data structure, also called a union–find data structure or merge–find set, is a data structure that stores a collection of disjoint (non-overlapping) sets. Equivalently, it stores a partition of a set into disjoint subsets. It provides operations for adding new sets, merging sets (replacing them with their union), and finding a representative member of a set. The last operation makes it possible to determine efficiently whether any two elements belong to the same set or to different sets."

CoPilot: After creating pseudocode and then test skeletons, or tests with no graphs, I asked CoPilot to generate appropriate graphs for each of the tests.
