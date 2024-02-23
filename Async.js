//synchronous
// console.log('synchronous')


//blocking code
// console.log('start operation')

// function sleep(millisecond) {
//     let startTime = new Date().getTime();
//     console.log('operation is running');
//     while (new Date().getTime() < startTime + millisecond) {

//         console.log('operation in progress')
//     }
//     console.log('operation is done')

// }
// sleep(3000);
// console.log('do something else')

//async takes time to execute
console.log('asynchronous')

console.log('start operation')

function sleep(millisecond) {
    console.log('operation is running');
    //call stack le setimeout dekhne bitikai teslai web api ma pathauxa and web api le settimeout lai event table ma register garxa ani event table le tyo  call back function lai task queue ma rakhxa ani call stack empty hune jel samma parkhinxa all the event from task queue(event loop)are passesd to call stack 
   setTimeout(()=>{    
    console.log('operation is done')
   }, millisecond)
 

}
sleep(3000);
console.log('do something else')







