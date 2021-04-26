function merger(arrA, arrB) {
    let i = 0, j = 0, mergedArr = []

    while (i < arrA.length && j < arrB.length) {
        if (arrA[i] > arrB[j]) {
            mergedArr.push(arrB[j])
            j++
        }
        else {
            mergedArr.push(arrA[i])
            i++
        }
    }

    while (i < arrA.length) {
        mergedArr.push(arrA[i])
        i++
    }

    while (j < arrB.length) {
        mergedArr.push(arrB[j])
        j++
    }

    return mergedArr;
}

function mergeSort(arr) {
    if(arr.length === 1) return arr

    let middle = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, middle))
    let right = mergeSort(arr.slice(middle))

    return merger(left, right)
}

let array = [1, 2, 4, 2, 3, 12]

console.log(mergeSort(array))