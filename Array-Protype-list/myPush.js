
Array.prototype.myPush = function(...elements) {
    for(let element of elements){
        this[this.length] = element
    }
    return this.length;

}

let arr = [10,20,30,40];
arr.myPush(60);
console.log(arr)

