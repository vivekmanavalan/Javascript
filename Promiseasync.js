const promiseFunc = () => {
    let promise = new Promise((res, rej) => {
        setTimeout(() => {
            res("Sucess");
        }, 2000)
    }).then(res => {
        console.log(res);
    })
    console.log("Hello i executed before promise");
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done");
    }, 500);
});
Promise.all([promise]).then((values) => console.log("val", values.toString()));

const asyncawait = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log('finished fetching res');
    const data = await res.json();
    console.log('data from API', data[0]?.title);
}

promiseFunc();
asyncawait();

// console.log("checking media queries");

// const media = Window.matchMedia('(min-width: 500px)');
// if(media.matches){
//     console.log("Media query matched");
// }