// const ARRAY = [9, 3212555]
const ARRAY = [13, 41, 55, 61, 1, 84, 27, 37, 39, 55, 519, 309, 77,8, 132, 213,]
// const ARRAY = [41, 55, 61, 1, 8, 27, 37, 39]

changeArr(ARRAY)

function changeArr(arr) {
    const startArrLength = arr.length

    filterArr(arr)

    if (chekToNextStep(startArrLength, arr.length)) { return arr }

    reverseAndSquareArr(arr)

    changeArr(arr)
}

function filterArr(arr) {
    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {

        const numb = arr[i].toString().split("").map(Number)
        const deleteMatch = []

        for (let j = i + 1; j < arr.length; j++) {

            const nextNumb = arr[j].toString().split("").map(Number)

            if (findMatch(numb, nextNumb)) {
                deleteMatch.push(j)
            }
        }

        if (deleteMatch.length > 0) {

            deleteMatch.forEach((item, index) => arr.splice(item - index, 1))
            arr.splice(i, 1)
            i--
        }

    }
    console.log(arr)
}

function findMatch(numb, nextNumb) {

    const big = numb.length > nextNumb.length ? numb : nextNumb
    const min = numb === big ? nextNumb : numb

    let match = false

    for (let i = 0; i < big.length; i++) {

        for (let j = 0; j < big.length; j++) {

            if (!match) {

                match = big[i] === min[j] ? true : false
                if (match) { return match }
            }

        }
    }
}

function chekToNextStep(prevArrLength, arrLength) {

    if (arrLength < 2) { return true }
    if (arrLength === prevArrLength) return true

    return false
}

function reverseAndSquareArr(arr) {

    arr.forEach((item, index) => {

        const buff = +item.toString().split("").reverse().join("")
        // console.log(buff)
        arr[index] = Math.pow(buff, 2)

    })
}