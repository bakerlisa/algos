// Minmal Tree: 4.2 - page 109 
// Given a sorted (increasing order) array with uniqui integer elements, write an algorithum to create a binary search tree with minimal height

class Node{
    constructor(){
        this.value = val;
        this.right = right;
        this.left = left;
    }
}

class Tree{
    constructor(){
        this.head = null;
    }

    isEmpty(){
        if(this.head == null){
            return "empty"
        }
    }

    add(val){
        var newNode = new Node(val);

        if(this.head == null){
            this.head = newNode;
        }else{

        }
    }
}

var arr = [1,2,5,6,17,38,43,45,49,50,55,58,69,71]
// console.log(arr);
arr.foreach((item,index) => {
    console.log(item)
});