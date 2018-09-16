function calcFBs(baseRea, firingMode, fps = 60, toReaPercent = 81) {
  let fbs = [];
  let last;
  for (let i = 0; i < toReaPercent; i++) {
    let bps;
    let t1 = (1 / (baseRea * (1 - i / 100))) * firingMode;

    for (let j = 1; j < 61; j++) {
      let t2 = fps / j;
      if (t2 <= t1) {
        bps = t2;
        break;
      }
    }

    if (last != bps) {
      fbs.push({ rea: i, bps: bps });
    }
    last = bps;
  }
  return fbs;
}

module.exports = calcFBs;
