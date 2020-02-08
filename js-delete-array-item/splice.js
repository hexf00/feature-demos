var data = Array(5).fill().map((v, k) => k);

for (const key in data) {
    var element = data[key];
    if (key == 1 || key == 2 || key == 3) {
        data.splice(key, 1)
    }

    console.log(key, element, data[key]);
}

console.log(data)

var data = Array(5).fill().map((v, k) => k);

for (let index = 0; index < data.length; index++) {
    const element = data[index];

    if (index == 1 || index == 2 || index == 3) {
        data.splice(index, 1)
    }
    console.log(index, element, data[index]);
}


console.log(data)


var data = Array(5).fill().map((v, k) => k);

var deleteCount = 0;
for (let index = 0; index < data.length; index++) {
    const element = data[index];

    // console.log(index, deleteCount)
    if (index == 1 - deleteCount || index == 2 - deleteCount || index == 3 - deleteCount) {
        data.splice(index, 1)
        deleteCount++
        index--
    }


    console.log(index, element, data[index]);
}
console.log(data)


var data = Array(5).fill().map((v, k) => k);

for (let index = 0; index < data.length; index++) {
    const element = data[index];

    // console.log(index, deleteCount)
    if (element == 1 || element == 2 || element == 3) {
        data.splice(index, 1)
        index--
    }


    console.log(index, element, data[index]);
}
console.log(data)
