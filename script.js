



/*

function myFn(a){
    a = a + a;
    console.log(a);
}

*/

/*

setInterval(()=>{
    console.log("Text");
},3000);

*/

/*

function Factor(value, multiplier = 1){
    return value * multiplier;
}


Factor(2, 4);
Factor(2);
console.log(Factor(2, 4));
console.log(Factor(2));

*/

/*

setTimeout((a = 1, b = 9, c)=>{
    c = a + b;
  console.log(c)
},3000);

*/

/*

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
});

const firstPost = {
    id: 1,
    author: "Dima"
}

/*

const added = {
    text: "Greeting"
}

*/

/*

const newPost = (post, addedAt = Date()) => {
    const some = {
        post,
        addedAt
    }
    return some;
};

const firstPost = {
    id: 1,
    author: "Dima"
}


newPost(firstPost);
console.table(newPost(firstPost));

*/

/*

const fnWithError = ()=> {
    throw new Error ("Some Error");
}

fnWithError();
console.log("Continue...");

*/

const fnWithError = ()=> {
    throw new Error ("Some Error");
}

try {
    fnWithError();
} catch (error){
    console.log(error);
    console.log(error.message);
    console.error(error);
}

console.log("Continue...");
