const isBefore = (firstDate, secondDate) => {
    // return true only when firstDate is strictly before secondDate
    return firstDate.getTime() < secondDate.getTime();
}
describe('isBefore', () => {
    it('should return true if the first date is before the second date', () => {
        const firstDate = new Date('20200202');
        const secondDate = new Date('20211202');

        expect(isBefore(firstDate, secondDate)).toBe(true);
    });

    it('should return false if the first date is after the second date', () => {
        const firstDate = new Date('20200202');
        const secondDate = new Date('20211202');

        expect(isBefore(secondDate, firstDate)).toBe(false);
    });
});