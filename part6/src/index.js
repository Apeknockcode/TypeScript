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
 * 继承
 * extends
 * 使用继承之后 子类将会拥有父类的所有方法
 * ----通过继承 我们可以将多个共有的代码写在一个父类中
 * ----这样只需要写一个即可让所有的子类都同时拥有父类中的属性
 * ---- 如果希望在子类中添加一些父类中没有的属性或者方法直接加在子类中就好了
 * --《方法重写》  如果在子类中添加父类的方法 子类的那个方法会覆盖父类的方法  --->
 * */
(function () {
    // 父类
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        // 公共的方法
        Animal.prototype.common = function () {
            console.log("公共的的方法");
        };
        return Animal;
    }());
    // 子类
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.sayHello = function () {
            console.log(this.name + "\u5728\u53EB");
        };
        // 方法的重写
        Dog.prototype.common = function () {
            console.log(this.name + "\u5B50\u7C7B\u4E2D");
        };
        return Dog;
    }(Animal));
    var dog = new Dog("旺财", 7);
    console.log(dog);
    dog.sayHello();
    dog.common();
    // 子类
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cat.prototype.sayHello = function () {
            console.log(this.name + "\u5728\u53EB");
        };
        // 方法的重写
        Cat.prototype.common = function () {
            console.log(this.name + "\u5B50\u7C7B\u4E2D");
        };
        return Cat;
    }(Animal));
    var cat = new Cat("mimi", 7);
    console.log(cat);
    cat.sayHello();
    cat.common();
})();
