function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function partition(arr, left, right) {
    let pivotValue = arr[right]
    let pivotIndex = left
    for(let i = left; i < right; i++) {
        if(arr[i] < pivotValue) {
            swap(arr, i, pivotIndex)
            pivotIndex++
        }
    }
    swap(arr, pivotIndex, right)

    return pivotIndex
}

function quickSort(arr, left, right) {
    if(left >= right) return
    if(right > left) {
        let pivotIndex = partition(arr, left, right)

        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

let array = [1, 2, 4, 2, 3, 12]

console.log(quickSort(array, 0, array.length - 1))