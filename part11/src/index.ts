/**
 *    泛型
 * 
 * */

// function fn(a: number): number {
//     return a
// }
// 在定义函数 或者 类时，当遇到不确定返回值的时候 我们可以使用泛型

// K 表示任意类型
function fn<K>(a: K): K {
    return a
}

// 可以直接调用具有泛型的函数 
let result = fn(20)
console.log(result)
let result1 = fn("20")
console.log(result1)
let result2 = fn(true)
console.log(result2)
let result3 = fn<number>(234)
console.log(result3) // 这里可以指定泛型



function fn2<K, T>(a: K, b: T): K | T {
    console.log(b)
    return a
}

interface Inter {
    length: number
}

function fn3<T extends Inter>(a: T): number {
    return a.length
}

class MyClass<T>{
    name: T
    constructor(name: T) {
        this.name = name
    }
}