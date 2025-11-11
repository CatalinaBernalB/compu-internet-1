module Demo{
    sequence<byte> Bytes;
    interface Observer{
        void notifyMessage(Bytes hello);
    }
    
    interface Subject{
        void attachObserver(Observer* objs);
    }
}