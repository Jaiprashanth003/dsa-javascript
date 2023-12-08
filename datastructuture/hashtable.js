class hashtable{
    constructor(size){
    this.data = new Array(size);
}
    _hash(key){
        let hash = 0
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }
    set(key,value){
        let address = this._hash(key)
        if (!this.data[address]){
            this.data[address] = []
            this.data[address].push([key,value])
        }else{
            this.data[address].push([key,value])
            return this.data
        }
    }
    get(key){
        let address = this._hash(key);
        const bucket  = this.data[address]
        console.log(bucket)
        if (bucket){
            for (let i = 0 ; i < bucket.length; i++){
                if(bucket[i][0] == key){
                    return bucket[i][1]
                }
            }
        }//0(1)
        return undefined
    }
    
}

const myhashtable = new hashtable(2)
myhashtable.set("grapes",1000);
myhashtable.set("apples",50);
console.log(myhashtable.get("grapes"))