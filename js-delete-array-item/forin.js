let dict = {
    a: 0,
    b: 1,
    c: 2
}

for (const key in dict) {
    const element = dict[key];

    if (element == 1) {
        delete dict['c']
        dict['d'] = 3
    }

    console.log(key, element, dict);
}

var arr = [0, 1, 2,3]

for (const index in arr) {
    const element = arr[index];

    if (element == 1) {
        arr.splice(parseInt(index) + 1, 1) //删除2
        arr.push(4)
        arr.push(5)
    }

    console.log(index, element, arr);
}

var arr = [0, 1, 2]

for (const index in arr) {
    const element = arr[index];

    if (element == 1) {
        arr.splice(parseInt(index) + 1, 1) //删除2
        arr[2] = 4
        arr[3] = 5
    }

    console.log(index, element, arr);
}