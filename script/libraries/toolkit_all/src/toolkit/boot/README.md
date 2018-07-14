Boot
====

Boot enables asynchronous loading of JavaScript files.


### Usage

Scripts can be loaded asynchronously using `loadScript()`.

```toolkit.boot.loadScript('ch-youtube.js', 'local', callback);```
```toolkit.boot.loadScript('html5shiv.js', 'global', callback);```
```toolkit.boot.loadScript('//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js', 'cdn', callback);```

Default config options may be set as follows: `boot.config.local = '/Assets/scripts/plug/';`


## Changelog

### 4.0.1
 - Housekeeping

### 4.0.0
 - Renamed to "mod-"
 - Added min.js

### 3.0.0
 - Initial implementation