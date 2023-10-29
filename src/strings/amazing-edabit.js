const amazingEdabit = (str) => {
    if(str.includes("is") || str.includes("are")) {
        if(str.includes("edabit")) {
            return str
        } else {
            return str.replace("is", "is not") || str.replace("are", "are not")
        }
    }
}

module.exports = amazingEdabit