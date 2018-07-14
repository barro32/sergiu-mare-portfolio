UI Toolkit
==========

A selection of common JavaScript helpers and legacy polyfills. There are two libraries included: *toolkit* and *toolkit-legacy*.

#### Toolkit

Currently packaged in this library are:
 - boot v4.0.1
 - cache v1.0.0
 - client v2.1.0
 - cookie v3.0.0
 - config v1.0.1
 - equalHeight v1.0.0
 - serialise v3.0.1
 - resizeTimer v1.0.0
 - scrollTimer v1.0.0

#### Toolkit Legacy

*toolkit-legacy* is only required when you need to support IE9 or older. It should be included via a suitable conditional comment before any other scripts.

Currently packaged in this library are:
 - ES5 Shim v4.5.9 | https://github.com/es-shims/es5-shim | Provides support for ES5 methods.
 - HTML5 Shiv v3.7.3 | https://github.com/aFarkas/html5shiv | Provides support for HTML5 elements.
 - JSON2 2016-10-28 | https://github.com/douglascrockford/JSON-js | Provides support for ```JSON.parse()``` and ```JSON.stringify()```.

### Dependencies

 - *toolkit*: jQuery is required for *toolkit.serialise* ```jQueryObj``` and ```jQueryData``` methods, else they will not be available
 - *toolkit-legacy*: none

### Installation 

Include the required scripts. *toolkit-legacy* should be included via a conditional comment before any other scripts, if required.
Scripts are located at ```dist/toolkit.min.js``` and ```dist/toolkit-legacy.min.js```. They should reside in ```/assets/scripts/libs```.

### Usage

*toolkit* methods are available via the ```toolkit``` object. Refer to individual module README files for further information.
*toolkit-legacy* provides shims only so doesn't need to be called directly.

## Changelog

### 1.3.2
 - Updated Config to 1.0.1

### 1.3.1
 - Updated Serialise to 3.0.1

### 1.3.0
 - Added scrollTimer 1.0.0 to toolkit

### 1.2.0
 - Upgraded Client to 2.1.0
 - Added Cache 1.0.0 and Config 1.0.0

### 1.1.0
 - Added resizeTimer 1.0.0 to toolkit

### 1.0.0
 - Initial Commit