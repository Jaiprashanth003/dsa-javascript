class doublylinkedlist{
    constructor(value){
        this.head = {
            value:value,
            next : null,
            prev: null
        }
        this.tail = this.head
        this.length = 1;
    }
    
    append(value){
        const newnode = {
            value : value,
            next : null,
            prev : null
        }
        
        newnode.prev = this.tail
        this.tail.next = newnode
        this.tail = newnode
        this.length++;
        return this
    }
    prepend(value){
        const newnode = {
            value : value,
            next : null,
            prev : null
        }
        newnode.next = this.head
        this.head.prev = newnode
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
            next : null,
            prev : null
            
        }
        const leadernode = this.traverstoindex(index - 1)
        const follower = leadernode.next
        leadernode.next = newnode
        newnode.prev = leadernode
        newnode.next = follower
        follower.prev = newnode
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
    reverse(){
        if(!this.head.next){
            return this.head
        }
        let first = this.head
        this.tail = this.head
        let second = first.next
        while(second){
            const temp = second.next
            second.next = first
            first =  second
            second = temp
        }
        this.head.next = null
        this.head = first
        return this.printll() 
    }
}

my = new doublylinkedlist(10)
my.append(5)
my.prepend(1)
my.append(16)
my.insert(2,100)
// console.log(my.printll())
my.reverse()
console.log(my.printll())
console.log(my)
// console.log(my.printll())
// console.log(my)