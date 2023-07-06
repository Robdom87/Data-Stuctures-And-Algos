let notes = `
used in netflix recommednations
maps
graphs - collections of nodes and connections
but unlike a tree doesnt necessarily need a root, only one point from one point to another
uses of graphs
social netowrks
mapping
routing visual hierachy
file system optimizations

types of graphs
vertex - is a node
edge - a connection between nodes
weight/unweighted - 
assign value to edges it becomes weighted

directed/undirected -
often has arrows if directed, can only go in a certain direction

typically represented in an adjacecny matix and adjacency list 

adjacecny matrix
only include ones for edges,

list
array with list of connections for each vertix

list vs matrix
list
can take up less space
faster way to iterate over all edeges
slowed for lookup of specifric edges

matrix
quick for look up of specifric edges
slowers for iteriating over all edges
and takes up more space

we will be going by the list
real world data tends to be sparses and or larger graphs
`
//this will be an undirected graph, and unweighted
class Graph {
    constructor(){
        this.adjancencyList = {}
    }
    addVertex(name){
        if(!this.adjancencyList[name]) this.adjancencyList[name]=[];
    }
    removeVertex(vert){
        let connections = this.adjancencyList[vert];
        for(let i = 0; i < connections.length; i++){
            this.removeEdge(vert, connections[i]);
        }
        delete this.adjancencyList[vert];
        return this.adjancencyList;
    }
    addEdge(vert1, vert2){
        //assuming goes in both directions
        this.adjancencyList[vert1].push(vert2);
        this.adjancencyList[vert2].push(vert1);
        return this.adjancencyList;
    }
    removeEdge(vert1, vert2){
        //my solution
        // this.adjancencyList[vert1].splice(this.adjancencyList[vert1].indexOf(vert2),1);
        // this.adjancencyList[vert2].splice(this.adjancencyList[vert2].indexOf(vert1),1);

        //solution from vide
        this.adjancencyList[vert1] = this.adjancencyList[vert1].filter(
            v => v !== vert2
        );
        this.adjancencyList[vert2] = this.adjancencyList[vert2].filter(
            v => v !== vert1
        );
        return this.adjancencyList;
    }
}

let newGraph = new Graph;
newGraph.addVertex('vertex');
newGraph.addVertex('vertex2')
newGraph.addVertex('vertex3');
newGraph.addEdge('vertex', 'vertex2');
console.log(newGraph.removeVertex('vertex'));