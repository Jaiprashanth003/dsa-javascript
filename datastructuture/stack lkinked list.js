
class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0
    }
    
    peek(){
        return this.top
    }
    push(value){
        const newNode = new Node(value)
        if (this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            const holding = this.top;
            this.top = newNode;
            this.top.next = holding;
        }
        this.length++;
        return this
    }
    pop(){
        if(!this.top){
            return null;
        }
        if (this.top == this.bottom){
            this.bottom = null;
        }
        const holding = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const mystack = new stack();
mystack.push("google")
mystack.push("uidemy")
mystack.push("discord")
mystack.pop()
mystack.pop()
mystack.pop()
console.log(mystack)