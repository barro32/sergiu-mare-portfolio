Cookie
======

Cookie provides helper methods for working with cookies.


### Usage

```read ( )``` returns an array of domain cookies

```write ( name, value [, exp] )``` writes a domain cookie, returns void

 - **name** {String} Name of the cookie
 - **value** {String} Value to be set
 - **exp** {String} Expiry date in days from today, else session

```check ( name )``` gets the value of a cookie specified by name, returns value of associate or null

 -  **name** {String} requested cookie name 


```erase ( name )```
erase cookie by name (if not specified erases all), returns void

 - **name** {String} name of specific cookie to erase


## Changelog

### 3.0.0
 - Updated to ```toolkit.cookie```

### 2.1.0
 - Updated file comments for rename to "mod-"

### 2.0.1
 - Initial commit of code created by Matt O'Neill