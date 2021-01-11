let a: number
a = 10
a = 22
// a="hello" // 报错 a的类型是 number 类型 不能是其他类型

let b: string
b = "hello Ts"
// b=12 //报错 b 的类型是 strin类型 不能是其他类型

//声明变量值直接进行赋值
let c: boolean = true
c = false

// any 类型 他可以赋值给任意变量

//  ：unknown  实际就是一个类型安全的 any
//  ：unknown 类型的变量，不能直接赋值给其他变量
let s: unknown
let e = "hello"

// 先进行类型判断
if (typeof e === "string") {
    s = e
}

// 类型断言
s = e as string // 告诉编译器  e 就是 字符串 ---> 可以用来告诉解析器变量的实际类型
s = <string>e
/**
 * 语法
 * as 类型
 * <string> 
 * */

/**
 * 设置函数的返回值
 * void 表示空值  没有返回值
 * never 表示没有值 
 * */

function fn(): boolean | number {
    return true
}

function fn_1(): void {
    return null
}
function fnNever(): never {
    // 用来报错的
    throw new Error("报错了")
}

