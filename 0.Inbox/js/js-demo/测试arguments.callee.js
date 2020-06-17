
var obj = {
    a: 1,
    test: function () {
        console.log(this.a, this, arguments.callee)
    }
}

var obj2 = {
    a: 2
}


function main(){

    obj.test(1)

    obj.test.call(obj2,2)
    
}

main('main');