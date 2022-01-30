const dayjs = require("dayjs")

module.exports = {
    formatDate(date) {
        return dayjs(date).format("YYYY-MM-DD-HH:mm")
    }
}