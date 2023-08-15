const findPairs = (list, target) => {
    let pairs = [];
    let arrayNums = list.split(',');
    let object = {};
    for (let i = 0; i < arrayNums.length; i++) {
        let complement = target - parseInt(arrayNums[i]);
        if (object[complement] != undefined) {
            pairs.push([parseInt(arrayNums[i]), complement]);
        }
        object[parseInt(arrayNums[i])] = parseInt(arrayNums[i]);
    }
    return pairs;
}


export default findPairs;