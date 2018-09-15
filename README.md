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

TODO

## Credits

- Ant from AR.de for the algorithm in Excel form ([dead link](http://board.de.airrivals.gameforge.com/board30-technik-area/board259-guides/board50-wissenswertes/p340589-framebrakes-herausfinden-fps-an-framebrakes-anpassen-min-excel-2010-n%C3%B6tig/#post340589))
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see the [License File](LICENSE.md) for more information.


[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square

[link-contributors]: ../../contributors
