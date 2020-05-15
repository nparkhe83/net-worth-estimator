import request from "supertest";
import { app } from "../app";

describe("App Endpoints", () => {
  it("should be accessible", async () => {
    const response = await request(app).get("/").expect(200);

    expect(response.text).not.toEqual("Welcome!!");
    expect(response.text).toEqual("Welcome");
  });
});
