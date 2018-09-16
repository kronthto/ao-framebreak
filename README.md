# AceOnline framebreak calculator

Standard weapons in AceOnline / AirRivals / SCO (Space Cowboy Online) only profit from very specific values of enchanted reattack (so called "breakpoints") due to time quantization.

## Install

* Using `npm`: `npm i aceonline-framebreak`

## Usage

```JavaScript
const aofb = require('aceonline-framebreak');
let breakpoints = aofb(0.45, 3, 60); // BigSmash in HeroSiege at 60 FPS
```

## API

* `baseRea`: Base reattack time of your weapon in seconds, e.g. `0.45`
* `firingMode`: How many times "per click" is fired, e.g. for a 3x1: `3`
* `fps`: The FPS to calculate for. You will mostly use `60`
* `toReaPercent`: Upper limit of added rea-% for the calculation, defaults to `81`

## Return format

An array of objects with the keys:

* `rea` - at which reattack upgrade the break occurs
* `bps` - how many bullets are fired per second at this point

```json
[
  { "rea": 0, "bps": 6.666666666666667 },
  { "rea": 12, "bps": 7.5 },
  { "rea": 23, "bps": 8.571428571428571 },
  { "rea": 34, "bps": 10 },
  { "rea": 45, "bps": 12 },
  { "rea": 56, "bps": 15 },
  { "rea": 67, "bps": 20 },
  { "rea": 78, "bps": 30 }
]
```

## Credits

- Ant from AR.de for the algorithm in Excel form ([dead link](http://board.de.airrivals.gameforge.com/board30-technik-area/board259-guides/board50-wissenswertes/p340589-framebrakes-herausfinden-fps-an-framebrakes-anpassen-min-excel-2010-n%C3%B6tig/#post340589))
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see the [License File](LICENSE.md) for more information.


[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square

[link-contributors]: ../../contributors
