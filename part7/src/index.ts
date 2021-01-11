
/**
 *  继承 （extends）
 *     super
 *   
 * */
(function(){
    class Animal{
        name:string
        sex:number
        constructor(name:string,sex:number){
            this.name=name
            this.sex=sex
        }
        sayHelle(){
            console.log("动物在叫")
        }
    }
    class Dog extends Animal{
        age:number
        
        constructor(name:string,sex:number,age:number){
            // 如果在子类中写了构造函数，等于在父类中的构造函数覆盖了。那么我们必须对父类的构造函数进行调用
            super(name,sex) //调用父类的构造函数
            this.age=age
        }
        sayHelle(){
            // 在类的方法中 super 就表示当前类的父类
            super.sayHelle()
        }
    }
    const dog=new Dog("Tom",23,0)
    dog.sayHelle()
})() 


