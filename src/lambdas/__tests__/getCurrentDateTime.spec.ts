import getCurrentDateTime from "lambdas/getCurrentDateTime";

describe("Date api", () => {
  let dateNowSpy;

  beforeAll(() => {
    // Lock Time
    dateNowSpy = jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => +new Date("2019-09-14T12:13:14Z"));
  });

  afterAll(() => {
    // Unlock Time
    dateNowSpy.mockRestore();
  });

  it("should return a date", () => {
    expect(getCurrentDateTime()).toEqual("2019-09-14 12:13:14");
  });
});
