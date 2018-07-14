Resize Timer
============

A global window resize handler which is timed to avoid firing the handler multiple times unnecessarily. The resize delay is 100ms.

### Usage

Named functions can be added as ```window.toolkit.resizeTimer.push(resizeHandler);```

## Changelog

### 1.0.0
 - Initial implementation