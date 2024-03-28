function fibonacci(num) {
    let a = 0;
    let b = 1;
    if(num == 0) {
        return a;
    }
    for(let i = 2; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return a;
}


module.exports = fibonacci;
