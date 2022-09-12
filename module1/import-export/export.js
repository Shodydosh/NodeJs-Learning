function Sum(a, b) {
    return a + b;
}

// module.exports = {
//     Sum: Sum
// }

const user = {
    name: "John",
    hello: () => {
        console.log("Hello, John");
    },
    hi: () => {
        console.log("Hi " + this.name);
    }
}

module.exports = {
    user: user
}
