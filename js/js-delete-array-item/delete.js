var data = Array(5).fill().map((v, k) => k);

for (const key in data) {
    var element = data[key];
    if (key == 1 || key == 2 || key == 3) {
        delete data[key]
    }

    console.log(key, element, data[key]);
}

console.log(data, data.length, JSON.stringify(data))

var data = Array(5).fill().map((v, k) => k);

for (let index = 0; index < data.length; index++) {
    const element = data[index];

    if (index == 1 || index == 2 || index == 3) {
        delete data[index]
    }
    console.log(index, element, data[index]);
}


console.log(data, data.length, JSON.stringify(data))


var data = Array(5).fill().map((v, k) => k);
var l = data.length;
for (let index = 0; index < l; index++) {
    const element = data[index];

    if (index == 1 || index == 2 || index == 3) {
        delete data[index]
    }
    console.log(index, element, data[index]);
}
console.log(data, data.length, JSON.stringify(data), JSON.stringify(data.filter(it => it !== null)))
