const fbcalc = require('./fb');

test('HeroSiege BS', () => {
  const calculated = fbcalc(0.45, 3, 60, 70);

  expect(calculated).toHaveLength(7);
  expect(calculated).toEqual(
    expect.arrayContaining([{ rea: 45, bps: 12 }, { rea: 56, bps: 15 }])
  );

  const rea0 = calculated.find(fb => fb.rea === 0);
  expect(rea0.bps).toBeCloseTo(6.667); // Mostly to assert the 0-rea exists
});

test('+1 Siege BS', () => {
  const calculated = fbcalc(0.45, 2, 60, 70);

  expect(calculated).toEqual(
    expect.arrayContaining([{ rea: 56, bps: 10 }, { rea: 63, bps: 12 }])
  );

  const rea49 = calculated.find(fb => fb.rea === 49);
  expect(rea49.bps).toBeCloseTo(8.571);
});
