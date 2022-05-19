// wrote the code but never finished it. Ran out of time for the day

class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.pervious = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    isEmpty(){
        if(this.head === null){
            return "empty";
        }else{
            return "fullstack!";
        }
    }

    peek(){
        if(this.head != null){
            return this.head;
        }
    }

    add(val){
        var newNode = new Node(val);
        if(this.head === null){
            newNode = this.head;
        }else{
            var runner = this.head.next;
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    remove(){
        if(this.head != empty){
            if(this.head.next === null){
                return this.head;
            }else{
                let temp = this.head;
                this.head.next = null;
                this.head = temp.next;
                return temp.value;
            }
        }else{
            return "Queue is empty!";
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