// Minmal Tree: 4.2 - page 109 
// Given a sorted (increasing order) array with uniqui integer elements, write an algorithum to create a binary search tree with minimal height

class Node{
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
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
            var head = this.head.value;
                if(val < this.head.left){
                    this.head.left = newNode;
                }else if(val > this.head.right){
                    this.head.right = newNode;
                }   
        }
    }

    showTree(){
        if(this.head == null){
            return "empty";
        }else{
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
        }
    }
}

var tree = new Tree();
// var arr = [1,2,5,6,17,38,43,45,49,50,55,58,69,71]
var arr = [38,43,45,49,50]

// console.log(arr);
var halfway = Math.floor(arr.length/2);
tree.add(arr[halfway])

arr.forEach((item,index) => {
    if(arr[halfway] != item){
        tree.add(item);
    }
});


console.log(tree)

