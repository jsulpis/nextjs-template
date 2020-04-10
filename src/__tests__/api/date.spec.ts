import MockNextApiResponse from "./MockNextApiResponse";
import getCurrentDateTime from "lambdas/getCurrentDateTime";
import dateApi from "pages/api/date";

jest.mock("lambdas/getCurrentDateTime");

describe("Date api", () => {
  it("should return a date", () => {
    // Given
    const MOCK_DATE = "2019-09-14 12:13:14";
    (getCurrentDateTime as jest.Mock).mockImplementation(() => MOCK_DATE);

    const res = new MockNextApiResponse();

    // When
    // @ts-ignore
    dateApi(null, res);

    // Then
    expect(getCurrentDateTime).toHaveBeenCalled();
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ date: MOCK_DATE });
  });
});
