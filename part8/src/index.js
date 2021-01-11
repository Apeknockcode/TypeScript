var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 *  抽象类
 *   禁止创建对象
 * */
(function () {
    // abstract 开头的类是抽象类
    //   ----  抽象类和其他类之间的区别是 抽象类不能创建对象
    //   抽象类 就是专门用来被继承的类  就是给别人当爸爸的 （父类）
    //  抽象类中 可以添加 抽象方法
    var Animal = /** @class */ (function () {
        function Animal(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.sayHelle = function () {
            console.log("狗在叫");
        };
        return Dog;
    }(Animal));
    var dog = new Dog("Tom", 4);
    dog.sayHelle();
})();
