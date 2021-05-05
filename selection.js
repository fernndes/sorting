function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < array.length; j++) {
            if (arr[min] > arr[j]) min = j
        }
        swap(arr, i, min)
    }
    return arr
}

let array = [1, 2, 4, 2, 3, 12]

console.log(selectionSort(array))