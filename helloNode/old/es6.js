var a = ['a', 'b', 'c', 'd', 'e'];
var objString = JSON.stringify(a);
var c = JSON.parse(objString);
var b = ['a', 'b', 'e'];	 			
b.map(e => c.splice(c.indexOf(e), 1))

let p = new Promise(function(reslove,reject){

    // reslove('TRUE')  //状态由等待变为成功，传的参数作为then函数中成功函数的实参

    reject('FALSE')  //状态由等待变为失败，传的参数作为then函数中失败函数的实参

})

//then中有2个参数，第一个参数是状态变为成功后应该执行的回调函数，第二个参数是状态变为失败后应该执行的回调函数。

p.then((data)=>{

    console.log('成功：'+data)

},(err)=>{

    console.log('失败：'+err)

})

function read( content ) {
    return new Promise(function( reslove,reject ) {
        setTimeout(function(){
                if(content>4){
                    resolve(content)
                }else{
                    reject('小于4')
                }
        },1000)
    })
}

read(1).then(( data )=>{
    console.log(data)
},( err )=>{
    console.log(err) //小于4
    return read(2) //将状态改为了失败
})
.then(( data )=>{
    console.log('data',data)
},( err )=>{
    console.log(err) //小于4
})