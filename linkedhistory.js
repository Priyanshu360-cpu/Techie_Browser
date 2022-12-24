class linkedlist{
    constructor(webpage){
        this.webpage=webpage;
        this.timestamp=Date.now();
        this.next=null;
    }
    createNode(data){
        return new linkedlist(data);
    }
    addNode(data){
        let temp=this;
        while(temp.next!=null){
            temp=temp.next;
        }
        temp.next=this.createNode(data);
    }
    deleteNode(data){
        let temp=this;
        while(temp.next!=null){
            if(temp.next.webpage==data){
                temp.next=temp.next.next;
                break;
            }
            temp=temp.next;
        }
    }
}