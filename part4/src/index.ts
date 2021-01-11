/**
 *  类 class
 *   定义一个类:使用class关键字来定义一个类 包含两个部分（属性,方法）
 *   class 类名{
 *         属性名：类型
 *         constructor(){
 *              
 *         }
 *   }
 * */

class Person {
    // 定义属性
    // 直接定义的属性 是实力属性 需要通过对象的实例去访问的
    name: string = "孙悟空"
    age: number = 10000
    height: number = 200

    // 在属性前使用 static 关键字可以定义类属性（静态属性） ==> 不需要创建对象 就可以访问的对象
    static arms: string = "如意金箍棒"

    // readonly 只读属性 不可修改
    readonly Birthplace: string = '女娲石'

    // 静态只读属性
    static readonly eventHot: string = "大闹天空"

    // 实例属性
    sayTel(){
        console.log("孙悟空说：玉帝老儿")
    }

    // 静态属性 可以直接访问 
    static sayOpeningRemarks(){
        console.log("孙悟空说：俺老孙来也～")
    }


}
let person = new Person() //创建一个实例

console.log(person.name)
console.log(`${person.name}的武器是${Person.arms}`)
person.name = '唐僧'
console.log(person.name)
//  person.Birthplace="五指山" // 报错

person.sayTel()

Person.sayOpeningRemarks()


