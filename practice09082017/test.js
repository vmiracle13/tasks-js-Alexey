/**
 * Created by Victoria on 07.08.2017.
 */

/*
describe('Checking the function sum', function () {
    it('does not matter how to create an array', function () {
        expect(25).toEqual(25);
    });
});
*/

describe("Test Karma and preparing to the practice lesson", function() {
    it("check different points", function() {
        expect(countPoints(-5, 5, -5, 5)).toEqual(9);
    });

    it("check lines parallel to x", function() {
        expect(countPoints(1, 4, 1, 1)).toEqual(2);
    });
});