const mongoose = require("mongoose");

const request = require("supertest");

const app = require("../../app");

const DB_HOST_TEST =
  "mongodb+srv://tetianaprokopchuk:C2mLkRbcIkWsdAhi@cluster0.cy0yelp.mongodb.net/db-contacts?retryWrites=true&w=majority";

describe("test login route", () => {
  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  const signUpData = {
    password: "123456",
    email: "123456@ukr.net",
  };

  test("test return status code 200", async () => {
    const { statusCode } = await request(app)
      .post("/api/users/login")
      .send(signUpData);

    expect(statusCode).toBe(200);
  });

  test("test return token", async () => {
    const { body } = await request(app)
      .post("/api/users/login")
      .send(signUpData);
    expect(body.token).toBeTruthy();
  });

  test("test return Object user", async () => {
    const { body } = await request(app)
      .post("/api/users/login")
      .send(signUpData);
    expect(typeof body.user).toBe("object");
  });

  test("test return email and subscription with type string", async () => {
    const { body } = await request(app)
      .post("/api/users/login")
      .send(signUpData);
    expect(typeof body.user.email).toBe("string");
    expect(typeof body.user.subscription).toBe("string");
  });
});
