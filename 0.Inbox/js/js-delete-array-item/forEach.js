
var arr = [0, 1, 2]

arr.forEach((index, element) => {

    if (element == 1) {
        arr.splice(parseInt(index) + 1, 1) //删除2
        arr[2] = 4
        arr[3] = 5
    }

    console.log(index, element, arr);
})
