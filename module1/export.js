function Sum(a, b) {
    return a + b;
}

// module.exports = {
//     Sum: Sum
// }

const user = {
    name: "John",
    say: () => {
        console.log("Hello, John");
    }
}

module.exports = {
    user: user
}
