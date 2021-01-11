
class Dog {
    // constructor 构造函数 
    // 构造函数 在对象创建时调用
    constructor(name:string,age:number){
        // 在构造函数中当前对象就是当前新建的那个对象
        console.log(this) //this 表示当前的实例
        this.name=name
        this.age=age
    }
    name: string 
    age: number
    bark() {
        console.log(`${this.name}说:汪汪～`)
    }
}
const numberDog = new Dog("Tom",2)
const numberDog1 = new Dog("Tom1",3)
const numberDog2 = new Dog("Tom2",4)
const numberDog3 = new Dog("Tom3",5)

console.log(numberDog.bark())
console.log(numberDog1.bark())
console.log(numberDog2.bark())
console.log(numberDog3.bark())