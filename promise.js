new Promise(()=> {
    console.log('支持Promise!');

});

function test (resolve,rejected){
    var timeout = 3
    timeout=timeout + Math.random() * 2;
    console.log("set timeout to " + timeout+" seconds ");
    setTimeout(()=>{
        if ( timeout < 1 ){
            console.log("call resolve()....");
            resolve(" resolve ok  ");
        }else{
            console.log("call rejected()...")
            rejected(" timeout in "+ timeout +' seconds');
        }
    },timeout*1000);
}

// console.log("----方法1:变量传递使用promise -----")

// var myPromise =new Promise(test);

// var myPromise2= myPromise.then( (result)=>{
//     console.log("success :"+ result);
// });

// var myPromise3= myPromise2.catch((reason)=>{
//     console.log("failed "+ reason);
// });


console.log("----方法2:链式使用promise  -----")

new Promise(test).then((result)=>{
    console.log("链式 ok调用"+result)
}).catch((result)=>{
    console.log("链式  no调用" + result)

});





