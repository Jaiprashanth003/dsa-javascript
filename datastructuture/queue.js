class node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class queue{
    contructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first
    }
    enqueue(value){
        const newnode = new node(value)
        if (this.length === 0){
            this.first = newnode
            this.last = newnode
        }
        else{
            this.last.next = newnode
            this.last = newnode
        }
        this.length++;
        return this
    }
    dequeue(){
        if(!this.first){
            return null
        }
        if (this.first == this.last){
            this.last = null
        }
        const garbage  = this.first
        this.first = this.first.next
        this.length--;
        return this
    }
}

my = new queue()
my.enqueue(1)
my.enqueue(2)
my.enqueue(3)
my.enqueue(4)
console.log(this.length)
console.log(my)