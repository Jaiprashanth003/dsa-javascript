class mylinkedlist{
    constructor(value){
        this.head = {
            value:value,
            next : null
        }
        this.tail = this.head
        this.length = 1;
    }
    
    append(value){
        const newnode = {
            value : value,
            next : null
        }
        
        this.tail.next = newnode
        this.tail = newnode
        this.length++;
    }
    prepend(value){
        const newnode = {
            value : value,
            next : null
        }
        newnode.next = this.head
        this.head = newnode
        this.length++;
        return this
    }
    printll(){
        const array = []
        let current = this.head
        while (current !== null){
            array.push(current.value)
            current = current.next
            
        }
        return array
    }
    insert(index,value){
        if (index >= this.length){
            return this.append
        }
        const newnode = {
            value : value,
            next : null
        }
        const leadernode = this.traverstoindex(index - 1)
        const holdingpointer = leadernode.next
        leadernode.next = newnode
        newnode.next = holdingpointer
        this.length++;
        return this.printll
    }
    traverstoindex(index){
        let counter = 0
        let currentnode = this.head
        while ( counter !== index){
            currentnode = currentnode.next;
            counter ++;
        }
        return currentnode
    }
    remove(index){
        const leadernode =  this.traverstoindex(index - 1)
        const wastenode = leadernode.next
        leadernode.next = wastenode.next
        this.length--;
        return this.printll
    }
}

my = new mylinkedlist(3)
my.append(10)
my.append(11)
my.insert(2,100)
console.log(my.printll())
my.remove(2)
console.log(my.printll())
console.log(my)
