// Shape - 父类(superclass)
function Shape() {
    console.log("constuctor run: Shape")
    this.x = 0;
    this.y = 0;
}

// 父类的方法
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - 子类(subclass)
function Rectangle() {
    console.log("constuctor run: Rectangle")
    Shape.call(this); // call super constructor.
}

// 子类续承父类

console.log(Rectangle) //[Function: Rectangle]
console.log(Rectangle.prototype.constructor) //[Function: Rectangle]
console.log(Rectangle.prototype.move) //undefined


new Rectangle()

console.log("-----------Object.create")
Rectangle.prototype = Object.create(Shape.prototype);

console.log(Rectangle) //[Function: Rectangle]
console.log(Rectangle.prototype.constructor) //[Function: Shape]
console.log(Rectangle.prototype.move) //[Function]

new Rectangle()

console.log("-----------Rectangle.prototype.constructor")
Rectangle.prototype.constructor = Rectangle;

console.log(Rectangle) //[Function: Rectangle]
console.log(Rectangle.prototype.constructor) //[Function: Rectangle]
console.log(Rectangle.prototype.move) //[Function]

new Rectangle()


//true
console.log(new Rectangle() instanceof Shape)