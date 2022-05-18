class Node{
    constructor(val){
        this.value = val;
        this.next = null;
        this.previous = null;
    }
}

class List{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    isEmpty(){
        if(this.head == null){
            return "empty"
        }
        return "lock and loaded"
    }

    add(val){
        var newNode = new Node(val);
        this.tail = newNode;
        var runner = this.head;

        if(this.head === null){
            this.head = newNode;
        }else{
            while(runner.next != null){
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }

    removeFromBack(){
        var runner = this.head;
        var pervious = this.head;
        while(runner.next != null){
            pervious = runner;
            runner = runner.next;
        }
        this.tail = pervious;
        pervious.next = null;
    }

    removeFromFront(){
        var runner = this.head;
        if(this.head != null){
            var temp = this.head.next;
            this.head.next = null;
            this.head = temp;
        }
    }
    
    showAll(){
        var runner = this.head;
    
        while(runner != null){
            if(runner === this.head){
                console.log(`Head: ${runner.value}`);    
            }else if(runner === this.tail){
                console.log(`Tail: ${runner.value}`);    
            }else{
                console.log(runner.value);
            }
            runner = runner.next;
        }
    }
}

var list = new List();

// ======= SLL =======
// IS_EMPTY
    // console.log(list.isEmpty());

// ADD
    list.add(10);
    list.add(11);
    list.add(12);
    list.add(13);
    list.add(14);
    // console.log(list)

// REMOVE FROM BACK
    // list.removeFromBack();
// list.removeFromBack();

// REMOVE FROM FRONT
    // list.removeFromFront()
    // list.removeFromFront()

// ======= DLL =======



// SHOWALL
    console.log(list.showAll())