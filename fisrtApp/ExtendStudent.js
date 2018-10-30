import ClassStudent from "./ClassStudent";

export default class ExtendStudent extends ClassStudent {
  constructor(){
    super("大明","女","18");
    // super.getInfo()
  }
  getInfo(){
    return  "daming"+super.getInfo();
  } 
}