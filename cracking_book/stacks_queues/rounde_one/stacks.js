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

    remove(val){
        var newNode = new Node(val)
        if(this.head === null){
            this.head = newNode;
        }else{
            var runner = this.head;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = newNode;
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

//  SHOW ALL
    stack.showAll();

//  IS EMPTY
    // console.log(stack.isEmpty());