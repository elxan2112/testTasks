function task_1(array) {
    let changedArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        changedArray.push(array[i])
    }
    return changedArray;
}

function task_2(firstArray, secondArray) {
    if (firstArray.length !== secondArray.length) return false;
    else return firstArray.every((value) => secondArray.includes(value));
}

function task_3(array) {
}

function task_4(array) {
    let paired = 0
    let unpaired = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            unpaired = unpaired + array[i]
        } else {
            paired = paired + array[i]
        }
    }
    if (paired > unpaired) return paired - unpaired
    else return unpaired - paired
}

function task_5(word, character) {
    let array = []
    for (let i = 0; i < word.length; i++) {
        if (word[i] === character) array.push(i)
    }
    return array
}

function task_6(word, character) {
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (word[i] === character) count++
    }
    return count
}

function task_7(array) {
    let arrayWithSum = [];
    let currencyArray = [];
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!currencyArray.includes(array[i].currency)) {
            currencyArray.push(array[i].currency)
            arrayWithSum.push({ currency: array[i].currency, value: 0 })
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (currencyArray.includes(array[i].currency)) {
            for (let j = 0; j < arrayWithSum.length; j++) {
                if (arrayWithSum[j].currency == array[i].currency) {
                    arrayWithSum[j].value = arrayWithSum[j].value + Number(array[i].value)
                }
            }
        }
    }
    for (let i = 0; i < arrayWithSum.length; i++) {
        resultArray.push(`${arrayWithSum[i].currency}:${arrayWithSum[i].value}`)
    }
    return resultArray
}

function task_8(array) {
    let result = ''
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string') {
            result = result + array[i]
        }
    }
    return result;
}

function task_9(array) {
    let response = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i].done === false) response = false;
    }
    return response ? true : false;
}

function task_10(text, index) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for (let i = 0; i < text.length; i++) {
        let replaceIndex;
        if (i - index < 0) replaceIndex = alphabet.length + (i - index);
        else replaceIndex = i - index;
        text = text.replace(text[i], alphabet[replaceIndex]);
    }
    return text;
}

export default { task_1, task_2, task_3, task_4, task_5, task_6, task_7, task_8, task_9, task_10 }