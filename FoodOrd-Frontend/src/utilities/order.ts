export default class Order{
    static id: number = 0;
    orderId: number = 0;;
    timeLeft: number = 60;
    interval :any;
    status: string = "Placed";

    constructor(id: number){
        Order.id++;
        this.orderId=Order.id
    }

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
      if(this.timeLeft==10){
          this.status="Picked up"
      }
      else if(this.timeLeft==0){
          this.status="Delivered"
      }
    },1000)
  }
}