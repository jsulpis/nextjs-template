import MockNextApiResponse from "__tests__/api/MockNextApiResponse";
import dateApi from "pages/api/date";

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
    const res = new MockNextApiResponse();

    // @ts-ignore
    dateApi(null, res);

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ date: "2019-09-14 12:13:14" });
  });
});
