const moodToday = mood => {
    return mood === '' ? "Today, I am feeling neutral" : `Today, I am feeling ${mood}`
}

module.exports = moodToday