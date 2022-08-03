// const ARRAY = [9, 3212555, 819, 4, 5]
// const ARRAY = [8, 41, 55, 8, 61, 27, 37, 39, 55, 519, 309, 77, 132, 213]
const ARRAY = [41, 55, 61, 1, 8, 27, 37, 39]

const newArr = changeArr(ARRAY)
console.log("return:", newArr)

function changeArr(arr) {
    const startArrLength = arr.length

    filterArr(arr)

    if (chekToNextStep(startArrLength, arr.length)) {
        return arr
    }

    reverseAndSquareArr(arr)

    changeArr(arr)

    return arr
}

function filterArr(arr) {
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        const deleteMatchArr = []
        const numb = new Set()

        const buffNumb = arr[i].toString().split("").map(Number)
        buffNumb.forEach((item) => numb.add(item))

        for (let j = i + 1; j < arr.length; j++) {
            const nextNumb = arr[j].toString().split("").map(Number)

            if (findMatch(numb, nextNumb)) {
                deleteMatchArr.push(j)
            }
        }

        if (deleteMatchArr.length > 0) {
            deleteMatchArr.forEach((item, index) => arr.splice(item - index, 1))
            arr.splice(i, 1)
            i--
        }
    }
    console.log(arr)
}

function findMatch(numb, nextNumb) {
    for (let i = 0; i < nextNumb.length; i++) {
        if (numb.has(nextNumb[i])) return true
    }

    return false
}

function chekToNextStep(prevArrLength, arrLength) {
    if (arrLength < 2) {
        return true
    }
    if (arrLength === prevArrLength) {
        return true
    }

    return false
}

function reverseAndSquareArr(arr) {
    arr.forEach((item, index) => {
        const buff = +item.toString().split("").reverse().join("")
        arr[index] = Math.pow(buff, 2)
    })
}
