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
 *  继承 （extends）
 *     super
 *
 * */
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name, sex) {
            this.name = name;
            this.sex = sex;
        }
        Animal.prototype.sayHelle = function () {
            console.log("动物在叫");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, sex, age) {
            var _this = 
            // 如果在子类中写了构造函数，等于在父类中的构造函数覆盖了。那么我们必须对父类的构造函数进行调用
            _super.call(this, name, sex) //调用父类的构造函数
             || this;
            _this.age = age;
            return _this;
        }
        Dog.prototype.sayHelle = function () {
            // 在类的方法中 super 就表示当前类的父类
            _super.prototype.sayHelle.call(this);
        };
        return Dog;
    }(Animal));
    var dog = new Dog("Tom", 23, 0);
    dog.sayHelle();
})();
