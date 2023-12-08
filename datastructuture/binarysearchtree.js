
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
}

my = new binarysearchtree()
my.insert(9)
my.insert(8)
my.insert(10)
console.log(my.lookup(10))