// Your code here
function mapToNegativize(array) {
    return array.map(item => {
        return item * (-1)
    })
}

function mapToNoChange(array) {
    return array.map(item => {
        return item
    })
}

function mapToDouble(array) {
    return array.map(item => {
        return item * 2
    })
}

function mapToSquare(array) {
    return array.map(item => {
        return item ** 2
    })
}

function reduceToTotal(array, startingPoint=0) {
    return array.reduce(function(total, item){return item + total}, startingPoint)
}

function reduceToAllTrue(array) {
    const verdict = array.map(item => {
        return Boolean(item)
    });
    if (verdict.includes(false)) {
        return false  
    } else {
        return true
    }
}

function reduceToAnyTrue(array) {
    const verdict = array.map(item => {
        return Boolean(item)
    });
    if (verdict.includes(true)) {
        return true  
    } else {
        return false
    }
}
