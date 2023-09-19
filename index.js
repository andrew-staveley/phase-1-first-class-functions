
function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    let fun_ction = function() {console.log('Hello, World!')};
    return fun_ction;
}

function returnsAnAnonymousFunction() {
    return function() {console.log('Hello Anonymous World.')};
}

