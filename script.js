// Your JS code here. If required.
const output = document.getElementById("output");
let arr = [1, 2, 3, 4];

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(arr), 3000);
});

promise
    .then((res) => {
        const ab = res.filter((item) => item % 2 === 0);

        setTimeout(() => {
            output.innerHTML = ab.join(", ");
            console.log(ab);
        }, 1000);

        return ab; 
    })
    .then((ab) => {
        setTimeout(() => {
            const ac = ab.map((item) => item * 2);

            output.innerHTML = ac.join(", ");
            console.log(ac);
        }, 2000);
    });
