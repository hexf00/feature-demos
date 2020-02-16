var graphUpdate = _.throttle(function (event, args) {

    console.log("graphUpdate 触发");

}, 100, {
    leading: false,
    trailing: true //节流结束后执行
})


var graphUpdate = function (event, args) {

    console.log("graphUpdate 触发", event, args);

}

graph.on("afteradditem", function () { graphUpdate.call(this, 'afteradditem', arguments) })
graph.on("afterremoveitem", function () { graphUpdate.call(this, 'afterremoveitem', arguments) })
graph.on("afterupdateitem", function () { graphUpdate.call(this, 'afterupdateitem', arguments) })


//测试状态是否触发事件，结果不触发
function test1(){
    graph.findById('node0').setState("selected",true)
    // graph.findById('node0').refresh() //无效
    // graph.findById('node0').getStates()
    graph.paint() //需要刷新画布才绘制
}

//测试更新item内容是否触发,无触发
function test2(){
    graph.findById('node0').update({label:"123"})
    graph.paint() //需要刷新画布才绘制
}

//测试更新item内容是否触发,无触发
function test2(){
    graph.updateItem(graph.findById('node0'), {label:"123"})

    //会触发事件graphUpdate

    //无需刷新自动会绘制
}