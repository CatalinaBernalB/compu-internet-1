
class Subscriber extends Demo.Observer{
    constructor(callback){
        super();
        this.notifier = callback;
    }
    notifyMessage(msg){
        this.notifier.notify(msg)
    }

}

export default Subscriber;