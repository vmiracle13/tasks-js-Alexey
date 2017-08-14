describe("Tests for the task1 in main.js", function() {
  it("check the unacceptable types of data (not a string, like array, object, function, boolean, number, null, undefined)",
    function() {
      expect(middleChar(undefined)).toBe("Please, enter the correct data.");
    });
  it("check the correct string", function() {
    expect(middleChar("heh dod jqjbpas")).toBe("eob");
  });
});


describe("Tests for the task2 in task2.js", function() {
  it("check the unacceptable types of data (not a string, like array, object, function, boolean, number, null, undefined)",
    function() {
      expect(checkPin("str",{})).toBeUndefined();
    });
  it("checking the incorrect pin-code", function() {
    let variant = checkPin(1234, 1);
    expect(variant("1345")).toBeUndefined();
  });
  it("checking the exceeding of allowable attempt to enter a pin-code", function() {
    spyOn(window, 'alert');
    let attempt = checkPin(1234, 2);
    attempt(3541);
    attempt(6545);
    attempt(8888);
    expect(window.alert).toHaveBeenCalledWith("Unfortunately, the number of attempts exceeds allowable");
  });
});


describe("Tests for the task4 in task4.js", function() {
  it("checking starting a new game", function() {
      let attempt = ticTacToe();
      attempt(2);
      attempt(3);
      attempt(4);
      attempt(5);
      attempt(6);
      expect(checkPin("str",{})).toBeUndefined();
    });
  it("checking returned true in case off win", function() {
    expect(checkWinner("123")).toBe(true);
  });
});


describe("Tests for the task5 in task5.js", function() {
  it("check unformatted time",
    function() {
      expect(calcAngle(12.25)).toBe("Please, enter the formatted time.");
    });
});


describe("Tests for the task7 in task7.js", function() {
  it("check the incorrect data",
    function() {
      expect(replaceElem(123, "1")).toBe("Please, enter the correct data.");
    });
});
