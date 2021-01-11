
// 定义食物
class Food {
    // 创建一个食物
    element: HTMLElement;
    constructor() {
        // 获取页面中food 元素，并赋值给element
        this.element = document.getElementById("food")!; //! 表示 一定不会有问题，不用报错了
    }

    // 获取食物的坐标--x
    get X() {
        return this.element.offsetLeft
    }
    // 定义一个获取食物坐标--y
    get Y() {
        return this.element.offsetTop
    }

    // 设置食物位置的方法
    change() {
        // 生成随机的位置 （这个位子的范围）0-300   一定是的10的倍数
        const num = Math.round(Math.random() * 29) * 10
        this.element.style.left = num + 'px'
        this.element.style.top = num + 'px'
    }
}

export default Food