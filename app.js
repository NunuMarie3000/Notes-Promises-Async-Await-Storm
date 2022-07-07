'use strict';
console.log('up and running');

// //example posts that we're gonna want to get
// const posts = [
//     {title: 'Post One', body: 'This is post one'},
//     {title: 'Post Two', body: 'This is post two'}
// ];

// //mimicking how it is to fetch from a server
// //we wanna get the posts and print it onto the page
// let getPosts = ()=>{
//     //setTimeout takes in callback function and amount of time you wanna delay the function by
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post) =>{
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     }, 1000)
//     //after 1 second, this function will load the posts and print on the page
// }

// //lets have this function take in a function as an argument ('callback')
// let createPost = (post, callback) =>{
//     setTimeout(() =>{
//         posts.push(post);
//         //call the passed in function right after the post is pushed up
//         callback();
//     }, 2000);
// }
// //insteads of calling this function here, pass it in as argument to createPost function
// //getPosts();

// //wouldn't print because we print stuff out before we're given this information, this is why we need async and callbacks
// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);


//PROMISES
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

let getPosts = ()=>{
    setTimeout(()=>{
        let output = '';
        posts.forEach((post) =>{
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

//instead of passing in callback/running callback, we wanna return a promise
let createPost = (post) =>{
    //promises take in two arguments, resolve(run when everything works) and reject(run when something fails)
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            posts.push(post);

            //lets set error to true to see error in real time
            //const error = true;
            const error = false;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        }, 2000);
    });
}

//we can use .then syntax since createPost returns a promise and doesn't use callbacks
//we can also use .catch syntax in case something goes wrong
// createPost({title: 'Post Three', body: 'This is post three'})
//     .then(getPosts)
//     .catch(err => console.log(err));



//ASYNC / AWAIT
//async/await is a way to handle responses
//we need a function labelled asynchronous
// async function init(){
//     await createPost({title: 'Post Three', body: 'This is post three'});

//     //we're waiting for the createPost above to finish before we call this function
//     getPosts();
// }

// init();





//using async/await with fetch
async function fetchUsers(){
    //set the fetch to a variable, use await cause we wanna wait for this to happen before we call some function
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    //we need to convert the response given to a json object, set that to a variable to make things cleaner
    const data = await response.json();

    console.log(data);
}

fetchUsers();


//lets look at Promise.all

// //first, create some promises
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// //fetch needs 2 .then
// //1 to format it, usually to JSON
// //2 to
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json());

// //promise.all takes in an array of promises
// Promise.all([promise1, promise2, promise3, promise4])
// .then((values)=> console.log(values));