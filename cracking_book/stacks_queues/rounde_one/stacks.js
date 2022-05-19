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

var stack = new Stack();
stack.add(10)
stack.add(11)
stack.add(102)

// stack.showAll();

console.log(stack.isEmpty());