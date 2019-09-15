export default class MockNextApiResponse {
  public statusCode: number;
  public body: object;

  public status(statusCode: number) {
    this.statusCode = statusCode;
    return this;
  }

  public json(body: object) {
    this.body = body;
  }
}
