const { execPath } = require("process");
const { sum, cross, devide, reduce } = require("./mymath");

describe("testing mymath", () => {
  test("test sum should success", () => {
    let result = sum(10, 30);

    expect(result).toEqual(40);
  });


test("test sum should success", () => {
    let result = cross(10, 30);

    expect(result).toEqual(300);
});

test("test sum should success", () => {
    let result = devide(30, 10);

    expect(result).toEqual(3);
});

test("test sum should success", () => {
    let result = reduce(30, 30);

    expect(result).toEqual(0);
});
});

