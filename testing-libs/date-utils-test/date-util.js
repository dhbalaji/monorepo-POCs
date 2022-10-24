const add10Days = (date) => {
    if (!checkIfValidDate(date)) { return false }
    return new Date(date.setDate(date.getDate() + 10));
}

const checkIfValidDate = (date) => {
    if (new Date(date) === "Invalid Date") {
        return false;
    }

    return true
}

const utilMethods = {
    add10Days,
    checkIfValidDate
}

module.exports = utilMethods;