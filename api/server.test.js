test("make sure our environment is set running", () => {
  expect(process.env.NODE_ENV).toBe("testing");
});
