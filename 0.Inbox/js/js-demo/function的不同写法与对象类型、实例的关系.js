// 测试 function的不同写法与 对象类型、对象实例 的关系


function getName() {
    // this 会因为调用的主体发生变化

    // //返回共享属性
    // return this.__proto__.name


    // 返回对象属性
    return this._name
}

var getName2 = () => {
    // ()=> 这种写法强行指定了this，this不会因为调用主体发生变化
    return this._name
}

function Cat(name) {
    if (name) {
        this._name = name
    }

    this.getName = getName
    this.getName2 = getName2
}

Cat.prototype.getName3 = getName
Cat.prototype.getName4 = getName2

var tom = new Cat("tom");
// var tom = new Cat();
var doraemon = new Cat("doraemon");

// console.log(tom, doraemon);

console.log(
    getName(), //undefined
    getName2(), //undefined
    tom.getName(), //tom
    tom.getName2(), //undefined
    tom.getName3(), //tom
    tom.getName4(), //undeinfed
);

var _name = "test"
this._name = "test2"

console.log(
    getName(), //undefined
    getName2(), //test2
    tom.getName(), //tom
    tom.getName2(), //test2
    tom.getName3(), //tom
    tom.getName4(), //test2
);


Cat.prototype._name = "test3"

console.log(
    getName(), //undefined
    getName2(), //test2
    tom.getName(), //tom
    tom.getName2(), //test2
    tom.getName3(), //tom
    tom.getName4(), //test2
);