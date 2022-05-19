class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.pervisou = null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    isEmpty(){
        if(this.head === null){
            return "empty";
        }else{
            return "we have a stack!";
        }
    } 

    add(val){
        var newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
        }else{
            let temp = this.head;
            this.head = newNode;
            newNode.next = temp
        }
    }

    peek(){
        if (this.head != null){
            return this.head;
        }
    }

    remove(){
        if(this.head != null){
            let temp = this.head.next;
            this.head.next = null
            this.head = temp;
        }
    }

    showAll(){
        var runner = this.head;
        if(this.head != null){
            while(runner != null){
                if(runner === this.head){
                    console.log(`Head: ${runner.value}`);
                }else{
                    console.log(runner.value)
                }
                runner = runner.next
            }
        }
    }
}

// CREATE CLASS
    var stack = new Stack();

// ADD TO STACK
    stack.add(10)
    stack.add(11)
    stack.add(102)
    stack.remove(102)

// PEEK
    console.log(stack.peek())

// REMOVE

//  SHOW ALL
    stack.showAll();

//  IS EMPTY
    // console.log(stack.isEmpty());