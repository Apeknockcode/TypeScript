// 控制其他的所有类
import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"
class GameControl {
    // 定义三个属性
    snake: Snake
    food: Food
    scorePanel: ScorePanel

    // 创建一个属性来存储蛇的方向（也就是按键的一个方向）
    direction: string = ""
    // 创建一个属性 蛇是否结束(控制游戏的开关)
    isLive: boolean = true

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    // 游戏的初始化方法
    init() {
        // 绑定键盘的按下事件
        document.addEventListener("keydown", this.KeydownHandler.bind(this))
        // 调用 run 方法
        this.run()
    }
    // 创建键盘的按下响应函数
    KeydownHandler(event: KeyboardEvent) {
        // 检查用户按下的键盘 是否合法
        this.direction = event.key
        this.run()
        /*
            按钮事件：
            ArrowUp    Up
            ArrowDown  Down
            ArrowLeft  Left
            ArrowRight Right
        */
    }
    // 创建控制蛇移动的方法
    run() {
        // 根据方向来使蛇的位置发生改变
        /**
         *  向上   top 减少
         *  向下   top 增加
         *  向左   left 减少
         *  向右   left 增加
         * */
        // 获取蛇的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        // 检查蛇是否吃到食物
        this.SnakeEatFood(X, Y)

        // 修改蛇的坐标
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error) {
            this.isLive = false
            alert(error.message + " " + "GAME OVER")
            
        }

        this.isLive && setTimeout(this.run.bind(this), 1000 - (this.scorePanel.level - 1) * 30);
    }
    // 定义一个方法 检查蛇是否吃到食物
    SnakeEatFood(x: number, y: number): void {
        if (x == this.food.X && y === this.food.Y) {
            this.food.change() //刷新食物的位置
            this.scorePanel.addScore() // 增加分数
            this.snake.addBody() //蛇增加一节
        }
    }



}
export default GameControl