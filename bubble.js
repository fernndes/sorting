function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length -1 -i; j++) {
            // -1 ois não há como comparar elementos a direita dele, já que é o último valor
            // -i porque para cada iteração o maior valor será levado até a última 'casa' disponivel

            if(arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }

        }
    }

    return arr
}

let array = [1, 2, 4, 2, 3, 12]

console.log(bubbleSort(array))