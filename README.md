[![FroYoMyRepo](https://github.com/ZacharyDavidSaunders/FroYoMyRepo/blob/master/imgs/logo.jpg)](https://github.com/ZacharyDavidSaunders/FroYoMyRepo)

## [Click to visit site!](https://zacharydavidsaunders.github.io/FroYoMyRepo/index.html)

FroYoMyRepo is a web app that creates a custom ice-cream image based on the technologies used in a given repo. For example, an ice-cream image for this repo is listed below:

![iceCreamImage](https://github.com/ZacharyDavidSaunders/FroYoMyRepo/blob/master/imgs/froYoMyRepo.png)

## FroYo Image Usage:
Feel free to add it to your README file in your repo, or use it an any other way. We'd appreciate if you give us credit, but it's not required.

## Technologies:
* Vanilla Javascript (no jQuery)
* [Bootstrap HTML / CSS framework](http://getbootstrap.com)
* [GitHub's "Repositories" API](https://developer.github.com/v3/repos/#list-languages), specifically the `GET List Languages` call.
* Image manipulation via the HTML canvas element.

## Contributing
Issues on Github are intended to discuss functionality, solve problems, and request application enhancements; please create issues accordingly. Pull requests are welcome and will be reviewed within a reasonable timeframe.

## Release History
* 1.1 - Includes the following changes:
  * Taller HTML canvas height to make froyos for repos with 4 languages no longer be cut off at the top.
  * Smaller font sizes, wider HTML canvas width, and modified image positions to support repos and users with large names (some of you are ridiculous).
  * Added a purple stroke to repo name (this makes it _pop_).
  * Moved the logo to be closer to the froyo.
  * Made the page headers and footers be dynamically generated (instead of being hardcoded). This will make future changes easier and less error prone.
  * Added the version number to the footer.
  * Changed the button colors to better match the color scheme.
* 1.0.4 - Refactored the code to:
  * Add FroYo image preloading (this should prevent empty scoops that were due to unloaded images)
  * Improve the error handling (now when you do something wrong, you'll know exactly _why_)
  * Tweak the site's styling 🤵 (i.e. no more touching input boxes. Apparently they are just friends... I know, I asked)
  * Use tabs more often (sometimes, in the heat of the moment, I've accidentally used the inferior spacebar. _Forgive me father, as I have sinned._)
* 1.0.3 - Added a "Scoop Fresh FroYo" button that allows you change the scoop colors for your froyo. Added Twitter social button on About page. Other misc text changes.
* 1.0.2 - Fixed a few rendering bugs and added more scoop colors

_(Sing it with me: I scream, you scream, we all scream for ... cream ... and pink ... and white.)_

* 1.0.1 - Made repo public, updated README, and fixed a broken link in the About page.
* 1.0.0 - Initial release

## Attribution:
* The ice-cream images are licensed usage of the artwork. For more information about the artwork, please refer to [the product page on CreativeMarket.](https://creativemarket.com/PolpoDesign/1250445-Ice-Cream-clipart)

## License:
[Mozilla Public License Version 2.0](https://github.com/ZacharyDavidSaunders/FroYoMyRepo/License)
Copyright (c) 2018 Zachary David Saunders. All Rights Reserved.
