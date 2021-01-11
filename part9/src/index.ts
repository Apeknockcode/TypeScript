/**
 *  接口 
 *   描述对象的一个类型 就是定义一个规范
 * */

(function () {
    type myType = {
        name: string,
        age: number,

    }
    type newCreateType = {
        //任意类型
        [propname: string]: any
    }
    const obj: myType = {
        name: 'sss',
        age: 12
    }

    // 接口 就是用来定义一个类/对象的结构 用来定义一个类中应该包含哪些属性和方法
    // 定义接口 interface 接口名
    interface myInterFace {
        name: string,
        age: number
    }
    interface myInterFace {
        gentder: string
    }
    const obj1: myInterFace = {
        name: 'sss',
        age: 12,
        gentder: "男"
    }

    // 接口可以在定义类的时候 可以限制类的结构
    // 接口中所有的属性都不能有实际的值
    // 接口只定义一个对象的接口，而不考虑实际值
    //   在接口中所有的方法都是抽象方法
    interface myInter {
        name: string
        sayHello(): void  //接口中所有的属性都不能有实际的值
    }
    // 定义类时，可以使用类去实现一个接口
    //  实现接口 就是使用类满足接口的要求
    class MyClass implements myInter{
        name:string
        constructor(name:string){
            this.name=name
        }
        sayHello():void{
            console.log("接口定义一个implements抽象类")
        }
        sya():void{
            console.log("sayHello")
        }
    }
})()