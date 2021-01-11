// 定义一个计分牌
class SCORE {
    score: number = 0 //私有的
    level: number = 1 //私有的
    scoreEle: HTMLElement
    levelEle: HTMLElement
    limitLevel: number
    // 这是一个变量 表示多少分时升级
    upScore: number
    constructor(limitLevel: number = 10, upScore: number = 10) {
        this.limitLevel = limitLevel
        this.upScore = upScore
        this.scoreEle = document.getElementById("score")!
        this.levelEle = document.getElementById("level")!
    }
    // 修改分数 等级
    // 设置 加分的一个方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ''
        if (this.score % this.upScore == 0) {
            this.levelUP()
        }

    }

    levelUP() {
        this.level < this.limitLevel ? this.levelEle.innerHTML = ++this.level + '' : this.level
    }
}
export default SCORE