//callback function is a function which is passed as a argument into another function and the other function will exectue this callback function at later point of time
//they are synchronous in nature

// console.log('task start')
// function asyncTask(cb){
//     console.log('task in progress')
//     setTimeout(cb, 0)
// }

// asyncTask(()=>console.log(name));
// console.log('task end')
// const name='sumit'

// callback function will always have err as first agrument and data as second argument
// function asyncTask(cb){

//     setTimeout(()=>{
//         // cb('error');
//         cb(null, 'this is the data from server')
//     }, 0)
// }
 
// asyncTask((err ,data)=>{
//     if(err){
//         throw err;
//     }else{
//         console.log('data:', data)
//     }
// });

//callback hell

function asyncTask(cb){
    setTimeout(()=>{
        cb(null, 'this is the data from server')
    }, 0)
}

function makeApiCall(cb){
    setTimeout(()=>{
        console.log('this is async task execution')
    }, 0)
}
 
makeApiCall(()=>{
    makeApiCall(()=>{
       asyncTask(()=>{
            asyncTask(()=>{
               asyncTask(()=>{
                
               })
            })
        })
    })
})
