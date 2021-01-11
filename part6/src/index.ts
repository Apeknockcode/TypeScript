/**
 * 继承
 * extends  
 * 使用继承之后 子类将会拥有父类的所有方法
 * ----通过继承 我们可以将多个共有的代码写在一个父类中
 * ----这样只需要写一个即可让所有的子类都同时拥有父类中的属性
 * ---- 如果希望在子类中添加一些父类中没有的属性或者方法直接加在子类中就好了
 * --《方法重写》  如果在子类中添加父类的方法 子类的那个方法会覆盖父类的方法  --->  
 * */
(function () {
    // 父类
    class Animal{
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
        // 公共的方法
        common(){
            console.log("公共的的方法")
        }
    }

    // 子类
    class Dog extends Animal {
        sayHello() {
            console.log(`${this.name}在叫`)
        }
        // 方法的重写
        common(){
            console.log(`${this.name}子类中`)
        }
    }
    const dog = new Dog("旺财", 7)
    console.log(dog)
    dog.sayHello()
    dog.common()

    // 子类
    class Cat extends Animal{
        sayHello() {
            console.log(`${this.name}在叫`)
        }
        // 方法的重写
        common(){
            console.log(`${this.name}子类中`)
        }
    }

    const cat = new Cat("mimi", 7)
    console.log(cat)
    cat.sayHello()
    cat.common()

    
})()

