Cache
=====

Caches frequently used jQuery collections

### Dependencies

- jQuery

### Usage

Assign ```window.toolkit.cache``` to a property of the project namespace variable. Avoid modifying ```window.toolkit.cache``` directly.

Cache structure:

```javascript
{	
	$window: jQuery(window),
	$document: jQuery(document),
	$html: jQuery('html'),
	$body: jQuery('body')
}
```

## Changelog

### 1.0.0
- Initial implementation with $window, $document, $html, $body