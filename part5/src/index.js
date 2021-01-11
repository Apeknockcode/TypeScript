var Dog = /** @class */ (function () {
    // constructor 构造函数 
    // 构造函数 在对象创建时调用
    function Dog(name, age) {
        // 在构造函数中当前对象就是当前新建的那个对象
        console.log(this); //this 表示当前的实例
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        console.log(this.name + "\u8BF4:\u6C6A\u6C6A\uFF5E");
    };
    return Dog;
}());
var numberDog = new Dog("Tom", 2);
var numberDog1 = new Dog("Tom1", 3);
var numberDog2 = new Dog("Tom2", 4);
var numberDog3 = new Dog("Tom3", 5);
console.log(numberDog.bark());
console.log(numberDog1.bark());
console.log(numberDog2.bark());
console.log(numberDog3.bark());
