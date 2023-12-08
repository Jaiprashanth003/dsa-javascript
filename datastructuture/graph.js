class graph{
    constructor(){
        this.numberofnode = 0
        this.addlist = {}
    }
    addvertex(node){
        this.addlist[node] = []
        this.numberofnode++;
    }
    addedge(node1,node2){
        this.addlist[node1].push(node2)
        this.addlist[node2].push(node1)
    }
}

const mygraph = new graph()
mygraph.addvertex("0")
mygraph.addvertex("1")
mygraph.addvertex("2")
mygraph.addvertex("3")
mygraph.addvertex("4")
mygraph.addvertex("5")
mygraph.addvertex("6")
mygraph.addedge("3","1")
mygraph.addedge("3","4")
mygraph.addedge("4","2")
mygraph.addedge("4","5")
mygraph.addedge("1","2")
mygraph.addedge("1","0")
mygraph.addedge("0","2")
mygraph.addedge("6","5")
console.log(mygraph)