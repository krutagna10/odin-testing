import analyzeArray from "../src/analyze-array";

test("returns correct values for an array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  }); 
});

test("returns correct values for array with negative numbers", () => {
  expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 5,
  })
}) 
