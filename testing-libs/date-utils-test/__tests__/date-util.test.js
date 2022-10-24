const dateUtils = require('../date-util');

describe("Date util module", function () {
    describe("add10Days method", function () {
        it("should return add incremented by 10 days", () => {
            jest.spyOn(Date.prototype, "getDate").mockReturnValue(1)
            const newDate = dateUtils.add10Days(new Date()).toDateString();
            const [, , date] = newDate.split(" ")
            expect(date).toBe("11")
        })
        it("should return add incremented by 10 days even if end of month", () => {
            jest.spyOn(Date.prototype, "getDate").mockReturnValue(31)
            const newDate = dateUtils.add10Days(new Date()).toDateString();
            const [, , date] = newDate.split(" ")
            expect(date).toBe("10")
        })
    })
})