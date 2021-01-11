/**
 * 属性的封装
 * */

(function () {
    //  定义表示一个人的类
    class Person {
        // Ts 可以在属性前添加属性的修饰符
        /**
         * public 修饰的属性可以在任意位置访问《修改》 默认值
         * private 私有属性，只能在类的内部进行修改--->可以通过在类中添加方法使得私有属性可以被外部访问
         * protected 受保护的属性，只能在当前类和当前类的子类中访问（修改）
         * */ 
        public _name: string
        private _age: number
        constructor(name: string, age: number) {
            this._name = name
            this._age = age
        }
        // 定义一个方法，来获取这个属性
        // getAge():number{
        //     return this._age
        // }
        // setAge(number:number){
        //     this._age=number
        // }

        // ts 设置getter 方法的方式
        get name():string{
            return this._name
        }
        set name(name:string){
            this._name=name
         }
        set age(age:number){
           this._age=age
        }
    }
    const person = new Person("空", 23)
    console.log(person)

    /**
     * 现在属性是只直接在对象中设置的，属性可以任意的被修改
     *   属性可任意被修改导致对象中的数据变的非常不安全
     * */

})()