let obj = {}

let proxy = new Proxy(obj, {
	set(target,propertyKey, value, receiver) {
		target[propertyKey] = value
		Reflect.set(target,propertyKey,value,receiver)
		console.log('proxy.set', target,propertyKey,value,receiver)

		// 无需返回值
		// return true
	}
})

// 无输出
// obj.a = 1 


// 有输出
proxy.a = 1


console.log(proxy,obj)