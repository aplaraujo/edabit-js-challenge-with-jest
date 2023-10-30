const newWord = (str) => {
    const arr = [...str]
    const takeFirst = arr.shift()
    const result = arr.join("")
    return result
}

module.exports = newWord