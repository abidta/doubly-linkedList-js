class DlinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addNode(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
        newNode.prev=this.tail
        this.tail.next= newNode
    }
    this.tail=newNode
  }
  deleteNode(data){
    let temp=this.head
    if(temp!=null&&temp.data==data){
        this.head=temp.next
    }
    while (temp!=null&&temp.data!=data) {
        temp=temp.next
    }
    if (temp==null) {
        return
    }
    if (temp==this.tail) {
        this.tail=PrevNode
        this.tail.next=null
        return
    }
    temp.prev.next=temp.next
    temp.next.prev=temp.prev
  }
  insertAfter(data,nextTo){
    let newNode= new Node(data)
    let temp=this.head
    while (temp!=null&&temp.data!=nextTo) {
        temp=temp.next
    }
    if (temp==null) {
        return
    }
    if (temp==this.tail) {
        newNode.prev=this.tail
        this.tail.next= newNode
        this.tail=newNode
        return
    }
    console.log(temp,"kl");
    
    newNode.prev=temp
    newNode.next=temp.next
    temp.next.prev=newNode
    temp.next=newNode

    console.log(newNode,'new');
  }
  insertBefore(data,nextTo){
    let newNode= new Node(data)
    let temp=this.head
    while (temp!=null&&temp.data!=nextTo) {
        temp=temp.next
    }
    if (temp==null) {
        return
    }
    if(temp==this.head){
        temp.prev=newNode
        newNode.next=temp
        this.head=newNode
        return
    }
    newNode.next=temp
    newNode.prev=temp.prev
    temp.prev.next=newNode
    temp.prev=newNode
  }
  display(){
    let temp= this.head
    while (temp!=null) {
        console.log(temp.data);
        temp=temp.next
    }
  }
  displayR(){
    let temp=this.tail
    while (temp!=null) {
        console.log(temp.data);
        temp=temp.prev
    }
  }
}
class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}
let = list = new DlinkedList()
list.addNode(10)
list.addNode(20)
list.addNode(30)
list.addNode(11)
list.addNode(12)
list.addNode(23)
list.addNode(14)
list.addNode(15)
list.insertAfter(55,12)
list.insertBefore(111,20)
list.addNode(2)
list.deleteNode(30)
list.displayR()
console.log(list);