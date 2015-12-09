describe('divisible15', function() {
  it("returns 'true' if number divisible by 15", function() {
    expect(divisible15(15)).to.equal(true);
  });
  it("returns 'false' if number not divisible by 15", function() {
    expect(divisible15(14)).to.equal(false);
  });
});

describe('divisible3', function() {
  it("returns 'true' if number divisible by 3", function() {
    expect(divisible3(9)).to.equal(true);
  });
  it("returns 'false' if number not divisible by 3", function() {
    expect(divisible3(10)).to.equal(false);
  });
});

describe('divisible5', function() {
  it("returns 'true' if number divisible by 5", function() {
    expect(divisible5(10)).to.equal(true);
  });
  it("returns 'false' if number not divisible by 5", function() {
    expect(divisible5(11)).to.equal(false);
  });
})
