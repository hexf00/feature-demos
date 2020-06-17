// Promise.reject(1).catch((err)=>{
//     console.log("catch",err)
//     return 123
// }).then((d)=>{
//     console.log(d) //123
// }).catch((err)=>{
//     console.log("末端Catch",err) //不会被触发
//     return 123
// })

Promise.reject(1).catch((err)=>{
    console.log("err",err)
    return Promise.reject(err)
}).then((d)=>{
    console.log(d) //不会触发
}).catch((err)=>{
    console.log("末端Catch",err) //会被触发
    return 123
})

//catch会返回一个新的Promise，后续逻辑会正常运行