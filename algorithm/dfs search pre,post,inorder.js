class Node{
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}

class binarysearchtree{
    constructor(){
        this.root = null
    }
    
    insert(value){
    let newnode =  new Node(value)
    if (this.root === null){
        this.root = newnode
    }
    else{
        let currentnode = this.root
        while(true){
            if (value < currentnode.value){
                if(!currentnode.left){
                    currentnode.left = newnode
                    return this
                }
                currentnode = currentnode.left
            }
            else{
                if (!currentnode.right){
                    currentnode.right = newnode
                    return this
                    
                }
                currentnode = currentnode.right
                }
        }
        }
        
    }
    lookup(value){
        let currentnode = this.root
        if(!currentnode){
            return false
        }
        while (currentnode){
            if(value < currentnode.value){
                currentnode = currentnode.left
                
            }
            else if (value > currentnode.value){
                currentnode = currentnode.right
            }
            else if(currentnode.value === value){
                return currentnode.value
            }
        }
        
    }
    bfs(){
        let currentnode = this.root
        let list = []
        let queue = []
        queue.push(currentnode)
        while (queue.length > 0){
            currentnode = queue.shift()
            list.push(currentnode)
            if (currentnode.left){
                queue.push(currentnode.left)
            }
            if (currentnode.right){
                queue.push(currentnode.right)
            }
        }
        return list
    }
    bfsr(queue,list){
        if (!queue.length){
            return list
        }
        let currentnode = queue.shift()
        list.push(currentnode.value)
        if(currentnode.left){
            queue.push(currentnode.left)
        }
        if (currentnode.right){
            queue.push(currentnode.right)
        }
        return this.bfsr(queue,list)
    }
    dfsinorder(){
        return traverseinorder(this.root,[])
    }
    dfspreorder(){
        return traversepreorder(this.root,[])
    }
    dfspostorder(){
        return traversepostorder(this.root,[])
    }
}
function traversepreorder(node,list){
    list.push(node.value)
    if(node.left){
        traversepreorder(node.left,list)
    }
    if (node.right){
        traversepreorder(node.right,list)
        
    }
    return list
}
function traversepostorder(node,list){
    if(node.left){
        traversepostorder(node.left,list)
    }
    if (node.right){
        traversepostorder(node.right,list)
        
    }
    list.push(node.value)
    return list
}
function traverseinorder(node,list){
    if(node.left){
        traverseinorder(node.left,list)
    }
    list.push(node.value)
    if (node.right){
        traverseinorder(node.right,list)
        
    }
    return list
}



my = new binarysearchtree()
my.insert(9)
my.insert(4)
my.insert(6)
my.insert(20)
my.insert(170)
my.insert(15)
my.insert(1)
console.log(my.dfsinorder())
console.log(my.dfspostorder())
console.log(my.dfspreorder())