import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("Test Default case", () => {
    expect(new Pharmacy([new Drug("Randomly named Drug", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Randomly named Drug", 1, 2)],
    );
  });
  it("Test Dafalgan", () => {
  expect(new Pharmacy([new Drug("Dafalgan", 10, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", 9, 8)],
  );
});
  it("Test Doliprane", () => {
  expect(new Pharmacy([new Drug("Doliprane", 10, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Doliprane", 9, 9)],
  );
});
  it("Test Herbal Tea before expiration date", () => {
  expect(new Pharmacy([new Drug("Herbal Tea", 10, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", 9, 11)],
  );
});

  it("Test Herbal Tea after expiration date", () => {
  expect(new Pharmacy([new Drug("Herbal Tea", 0, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", -1, 12)],
  );
});
  it("Test Fervex more than 10 days before expiration", () => {
  expect(new Pharmacy([new Drug("Fervex", 12, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 11, 11)],
  );
});
  it("Test Fervex more than 5 days before expiration", () => {
  expect(new Pharmacy([new Drug("Fervex", 4, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 3, 13)],
  );
});
  it("Test Fervex expiration", () => {
  expect(new Pharmacy([new Drug("Fervex", 0, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", -1, 0)],
  );
});
  it("Test Magic Pill remains constant", () => {
  expect(new Pharmacy([new Drug("Magic Pill", 10, 10)]).updateBenefitValue()).toEqual(
    [new Drug("Magic Pill", 10, 10)],
  );
});
});
