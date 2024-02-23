// const name = 'Max';
// let age = 29;
// const hasHobbies = true;

// age = 30;

// const summarizeUser =(userName, userAge, userHasHobby)=> {
//   return (
//     'Name is ' +
//     userName +
//     ', age is ' +
//     userAge +
//     ' and the user has hobbies: ' +
//     userHasHobby
//   );
// }

// const add =(a, b)=>a+b;
// const add2 = a => a+1;
// const add3 = ()=> 1+2;
// console.log(add3())
// console.log(add2(1))
// console.log(add(1, 2))

// console.log(summarizeUser(name, age, hasHobbies));
// this refers to surrounding object
// const person={
//     name: 'max',
//     age: 20,
//     greet() {
//         console.log('hi, i am ' +this.name);
//     }
// };

// const copiedObject ={...person}
// console.log(copiedObject)

// // person.greet();

// const hobbies =['gaming', 'crypto']

// for(let hobbie of hobbies){
//   console.log(hobbie)
// }
// console.log(hobbies.map(hobby =>{
//     return 'hobby: ' + hobby; 
// }))
// console.log(hobbies)
// hobbies.push('programming');
// console.log(hobbies) 

//... is spread operator
// const copiedArray = [...hobbies];
// console.log(hobbies)

// //rest operator

// const toArray= (...args)=>{
//     return args;
// }
// console.log(toArray(1, 2, 3, 4))

//object destructuring
const personB={
    name: 'max',
    age: 20,
    greet() {
        console.log('hi, i am ' +this.name);
    }
};
// const printName = ({name, age})=>{   //{name} is destructuring
//     console.log(name, age)
// }
//  printName(personB)


// const {name, age}= personB;
// console.log(name, age)

// const items =['pen', 'book', 'board'];
// const [item1, item2]= items;
// console.log(item1, item2);

//asynchronous
// setTimeout(()=>[
//     console.log('timer is on')
// ],2000)
// //synchronous
// console.log('i am fast')
// console.log('synchronous is fast compared to asynchronous')
// console.log('heee you cannot win setimeout')  

// const fetchData = callback =>{
//     setTimeout(()=>{
//         callback('Done!')
//     },1500)
// }

// setTimeout (()=>{
//     console.log('timer is done!')
//     fetchData(text=>{
//       console.log(text)
//     })
//   }, 2000) 

// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('done')
//         }, 1500)
//     });
//     return promise;
// }

// setTimeout(() => {
//     console.log('timer is done!')
//     fetchData()
//        .then(text => {
//         console.log(text);
//         return fetchData()
//     })
//     .then(text2 => {
//         console.log(text2);
//     });
// }, 2000) 