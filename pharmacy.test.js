import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("Test Default case", () => {
    expect(new Pharmacy([new Drug("Default Drug", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Default Drug", 1, 2)],
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
  it("Test Herbal Tea benefits don't go above MAX_BENEFIT (50)", () => {
  expect(new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()).toEqual(
    [new Drug("Herbal Tea", -1, 50)],
  );
});
  it("Test Fervex benefits don't go above MAX_BENEFIT (50)", () => {
  expect(new Pharmacy([new Drug("Fervex", 4, 49)]).updateBenefitValue()).toEqual(
    [new Drug("Fervex", 3, 50)],
  );
});
  it("Test Dafalgan benefits don't go below MIN_BENEFIT (0)", () => {
  expect(new Pharmacy([new Drug("Dafalgan", 0, 1)]).updateBenefitValue()).toEqual(
    [new Drug("Dafalgan", -1, 0)],
  );
});
  it("Test Default case benefits don't go below MIN_BENEFIT (0)", () => {
    expect(new Pharmacy([new Drug("Randomly named Drug", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Randomly named Drug", 1, 0)],
    );
  });
    it("Test initial benefit misstype above 50", () => {
    expect(new Pharmacy([new Drug("Misstype above 50 test", 2, 500)]).updateBenefitValue()).toEqual(
      [new Drug("Misstype above 50 test", 1, 50)],
    );
  });
    it("Test initial benefit misstype below 0", () => {
    expect(new Pharmacy([new Drug("Misstype Below 0 test", 2, -4)]).updateBenefitValue()).toEqual(
      [new Drug("Misstype Below 0 test", 1, 0)],
    );
  });
});