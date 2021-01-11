// object 表示一个对象
let obj: object
obj = {}
obj = function () {

}

let obj_b: {
    name: string
}

obj_b = { name: '孙悟空' }


//  {}  用来表示对象中可以包含哪个属性
//  语法 {属性名：属性值,属性名：属性值}
// 在属性后面加问号？,表示属性是可选的

let info: { name: string, age?: number }
info = { name: "孙悟空", age: 1000000 }
info = { name: "孙悟空" }

//【propName: string】任意属性名， any 任意类型 
let info_: { name: string, [propName: string]: any }
info_ = { name: "猪八戒", age: 1000000, gender: '男' }

// 定义一个函数
/**
 * 设置函数结构的类型声明：
 *    语法（形参：类型，形参：类型，...） => 返回值
 * */
let d: (parameterA: number, parameterB: number) => number
d = function (a, b) {
    return a + b
}



/**
 * 数组的类型声明：
 *  类型 + []
 *  Array<类型>
 * */

// array 数组 存储相同类型的值
let o: []
let o1: string[] //字符串类型数组
o1 = ["1", "2", "3", "4", "5"]
let o3: Array<string> // 表示字符串类型的数组
o3 = o1


let o2: number[] //数值类型数组
o2 = [1, 2, 3, 4, 5, 6]
let o4: Array<number> // 表示数值类型的数组
o4 = o2


/**
 * 元组声明： Tuple  元组就是固定长度的数组  （当数组里面的值是固定的时候 可以用）
 *   语法：[类型,类型,类型,类型,类型,类型....]
 * */
let h: [string, string]
h = ['1', '2']
let h1: [number]
h1 = [1]


/**
 * enum  枚举
 *   把所有的可能都列举出来
 * 
 * */
// 定义一个枚举的类
enum Gender {
    Male,
    Female
}
let i: { name: string, gender: Gender }
i = {
    name: "孙悟空",
    gender: Gender.Male
}

// 判断是男 还是 女
console.log(i.gender === Gender.Male)


// & 表示 同时
let w: { name: string } & { age: number }
w = { name: '孙悟空', age: 122222 }

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5 | 6 | 7
type myType_ =number
let k: myType
let m: myType_










