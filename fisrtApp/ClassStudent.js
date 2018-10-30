export default class ClassStudent  {
  constructor(name,sex,age) {
    this.name=name;
    this.age=age;
    this.sex=sex;
  }
  getInfo(){
    return "姓名："+this.name+"性别："+this.sex+"年龄："+this.age
  }

}