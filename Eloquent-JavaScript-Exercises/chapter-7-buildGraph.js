const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall"
  ];


// my own version of buildGraph
function buildGraph(roads) {
  let graph = {};
  // iterate over roads array
  for (let path of roads) {
    // split string by '-' to string A and string B (ie. [Alice's House, Bob's House])
    let [place1, place2] = path.split('-');
    // set String A as a key in graph if it's not there
    if (!(place1 in graph)) {
        // set value as an array with String B in it
        graph[place1] = [place2];
    } 
    // else if String A is a key in graph
    else {
        // push String B in the array for String A
        graph[place1].push(place2);
    }
    // set String B as a key in graph if it's not there
    if (!(place2 in graph)) {
        // set  value as an array with String A in it
        graph[place2] = [place1];
    }
    // else if String B is a key in graph
    else {
        // push String A in the array for String B
        graph[place2].push(place1)
    }
    }
  return graph;
}

const roadGraph = buildGraph(roads);
console.log(roadGraph);