// const paragraph = document.getElementById('para');

// paragraph.style.backgroundColor = 'red';

// document.getElementsByClassName('heading').style = "green"

// document.querySelector('p').style.backgroundColor = 'yellow'

// const normal_func=()=>{
//     return "hello"
// }

// const add_numbers = (...arguements) => {
//     console.log(arguements);
// }

// add_numbers(1,2,4);


// var obj = {
//     name: 'sachin',
//     age: 23,
//     print: function () {
//         console.log(this.name);
//     },
//     modify: () => {
//         console.log(this);
//         console.log("username:", this.name);
//     }
// }



// obj.print()
// obj.modify()

// callback function

function createUser() {
    function alertUser() {
        alert("hello")
    }
    function alertUser2() {
        alert("hello2")
    }

    return a = () => {
        alertUser();
    };
}

createUser();


// pending -> undefined

let promise = new Promise(function (resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
);