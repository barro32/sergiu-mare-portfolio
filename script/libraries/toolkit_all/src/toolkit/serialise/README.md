Serialise
=========

Serialise provides helper methods for serialising and deserialising data. It is preferred to use `JSON.stringify()` and `JSON.parse()` where appropriate.

### Dependencies

jQuery is required for ```jQueryObj``` and ```jQueryData``` methods.


### Usage

_obj_ - given well formed json, serialise to encoded query string params (`toolkit.serialise.obj({"key": "value", "key2": "value2"});` outputs `key=value&key2=value2`)

_url_ - given query string params, deserialise to decoded key-value pairs (`toolkit.serialise.url('key=value&key2=value2');` outputs `{"key": "value", "key2": "value2"}`)

_complex_ - build a deep level object from a flat object with complex property addresses as keys

_jQueryObj_ - given a jquery object, serialise to key-value-pairs

_jQueryData_ - retrieve values from data decorated jQuery elements and set to flat object


## Changelog

### 3.0.1
 - Fixed bug with jQuery serialise

### 3.0.0
 - Updated to toolkit.serialise

### 2.2.4
 - Housekeeping
 - Updated minified comment and readme in line with new practices

### 2.2.3
 - Use charAt() method to select first character. Fixes bug on ie7 - throws an error when treating a string as an array-like object.

### 2.2.2
 - Add attribute control over radio buttons to permit serialised output as single value or entity of an array 

### 2.2.1
 - All legacy versions