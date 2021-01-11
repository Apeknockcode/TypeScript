
/**
 *  抽象类  
 *   禁止创建对象
 * */
(function () {
    // abstract 开头的类是抽象类
    //   ----  抽象类和其他类之间的区别是 抽象类不能创建对象
    //   抽象类 就是专门用来被继承的类  就是给别人当爸爸的 （父类）

    //  抽象类中 可以添加 抽象方法

    abstract class Animal {
        name: string
        sex: number
        constructor(name: string, sex: number) {
            this.name = name
            this.sex = sex
        }
        //定义 抽象方法
        // 抽象方法使用  abstract 开头 ,没有方法体
        // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
        abstract sayHelle():void;
    }
    class Dog extends Animal {

        sayHelle() {
           console.log("狗在叫")
        }
    }
    const dog = new Dog("Tom", 4)
    dog.sayHelle()


})()


