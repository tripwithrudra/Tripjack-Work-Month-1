const myPromise = new Promise((res, rej) => {
    document.getElementById('resolveButton').addEventListener('click', function () {
        res('Hello World');
    })
    document.getElementById('rejectButton').addEventListener('click', function () {
        rej('Something went wrong');
    })
})

// myPromise.then((data) => {
//     console.log(data, "-> resolved");
// })
// .catch((err) => {
//     console.log(err, "-> rejected");
// })



// Create a promise without using Promise Keywork
async function myFnc(data) {
    const res = await myPromise;
    return "Rudra has resolved this.";
}

const newPromise = await myFnc();
console.log(newPromise);


