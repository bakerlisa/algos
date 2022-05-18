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
        var walker = this.head;

        if(this.head === null){
            this.head = newNode;
            this.previous = null
        }else{
            while(runner.next != null){
                walker = runner;
                runner = runner.next;
            }
            runner.previous = walker;
            runner.next = newNode;
        }
    }

    removeFromBack(){
        var runner = this.head;
        var walker = this.head;
        while(runner.next != null){
            walker = runner;
            runner = runner.next;
        }
        this.tail.previous = null
        this.tail = walker;
        walker.next = null;
    }

    removeFromFront(){
        if(this.head != null){
            var temp = this.head.next;
            this.head.next = null;
            this.head = temp;
            this.head.previous = null;
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
                console.log(`Value: ${runner.value}, Next: ${runner.next.value}, Pervious: ${runner.previous.value}`);
            }
            runner = runner.next;
        }
    }
}

var list = new List();

// ======= DLL =======
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



// SHOWALL
    console.log(list.showAll())