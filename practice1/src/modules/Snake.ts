class Snake {
    //   表示蛇的元素
    head: HTMLElement
    // 蛇的身体 和 头部
    bodys: HTMLCollection

    // 获取蛇的容器
    element: HTMLElement

    constructor() {
        this.element = document.getElementById("snake")!
        this.head = document.querySelector("#snake>div")! as HTMLElement
        this.bodys = document.getElementById("snake")?.getElementsByTagName("div")!
    }

    //获取蛇的坐标
    get X(): number {
        return this.head.offsetLeft
    }
    get Y(): number {
        return this.head.offsetTop
    }
    // 设置
    set X(value: number) {
        if (this.X === value) return
        // 判断X轴的合法范围
        if (value < 0 || value > 290) {
            throw new Error("游戏结束")
        }
        // 不能掉头
        // 判断蛇头的坐标 和第二节坐标是不是一样
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetLeft == value) {
            // return  继续向原来的方法行走
            if (value > this.X) {
                // 向右走
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }


        this.moveBody()
        this.head.style.left = value + "px"
        // 不能碰到自己
        this.checkHead()
    }
    set Y(value: number) {
        if (this.Y === value) return
        // 判断Y轴的合法范围
        if (value < 0 || value > 290) {
            throw new Error("游戏结束")
        }
        // 不能掉头
        if (this.bodys[1] && (this.bodys[1] as HTMLElement).offsetTop == value) {
            // return  继续向原来的方法行走
            if (value > this.Y) {
                // 向右走
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()
        this.head.style.top = value + "px"
        // 不能碰到自己
        this.checkHead()
    }
    // 吃到食物之后 蛇的身体增加一节的方法
    addBody() {
        // 向element 添加div
        // var para = document.createElement("div");
        // this.element.appendChild(para);
        this.element.insertAdjacentHTML("beforeend", '<div></div>')

    }

    //
    moveBody() {
        console.log(this.bodys)
        for (let i = this.bodys.length - 1; i > 0; i--) {
            // 获取前面身体的位置
            let x = (this.bodys[i - 1] as HTMLElement).offsetLeft;
            let y = (this.bodys[i - 1] as HTMLElement).offsetTop;

            // 设置当前的身体
            (this.bodys[i] as HTMLElement).style.left = x + "px";
            (this.bodys[i] as HTMLElement).style.top = y + "px"
            console.log(this.bodys[i])
        }
    }

    checkHead() {
        // 获取所有的坐标 蛇的省体
        for (let i = 0; i < this.bodys.length; i++) {
            let bd = (this.bodys[i] as HTMLElement)
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                if(i>4){
                    throw new Error("游戏结束");
                }
            }
        }
    }

}
export default Snake