const isBoiling = (temp) => {
    return (temp.includes("C")) ? ((temp >= "100C") ? true : false) : ((temp >= "212F") ? true : false)
}

module.exports = isBoiling