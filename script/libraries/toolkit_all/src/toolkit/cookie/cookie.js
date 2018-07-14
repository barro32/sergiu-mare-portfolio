/* cookie 3.0.0 */

window.toolkit.cookie || (window.toolkit.cookie = {});

window.toolkit.cookie = new function Cookie() {
    
    /*
     * returns array of domain cookies
     *
     * @method read
     * @public
     * @return {Array} domain cookies
     */
    this.read = function() {
		var cookies = [],
            ckeArr;
		
        if (!document.cookie) {
            return false;
        }
        
		ckeArr = document.cookie.split(/; */);
			
        for (var i = 0; i < ckeArr.length; i += 1) {
            var splitCookie = ckeArr[i].split('='),
				ck = new Cookie(splitCookie[0], splitCookie[1]);
				
            cookies.push(ck);
        }
		
        return cookies;
    };
	
    /*
     * writes a domain cookie
     *
     * @method write
     * @public
     * @param {String} name of the cookie
     * @param {String} value for the cookie
     * @param {String} optional expiry date in days from today, else session
     * @return {void} 
     */
    this.write = function(name, value, exp) {
        if (exp != undefined) {
            var dateObj = new Date;
            dateObj.setDate(dateObj.getDate() + exp);
            dateObj.toUTCString();
        }
		
        document.cookie = exp !== undefined ? name + '=' + value + '; expires=' + dateObj + ';path=/' : name + '=' + value + ';path=/';
    };
	
    /* gets value of cookie
     *
     * @method check
     * @public
     * @param name {String} cookie name
     * @return {String|Null} value of associate
     */
    this.check = function(name) {
        var ckes = this.read();
		
        for (var i in ckes) {
            if (ckes[i].name === name) {
                return ckes[i].value;
            }
        }
		
        return undefined;
    };
	
    /* erases cookie by name, otherwise all
     *
     * @method erase
     * @public
     * @param name {String} specific cookie to erase by name
     */
    this.erase = function(name) {
        if (name !== undefined) {
            this.write(name, '', -1);
        } else {
            var ckes = this.read();
			
            for (var i in ckes) {
                this.write(ckes[i].name, '', -1);
            }
        }
    };
	
    /* 
     *
     * @class _Cookie
     * @private
     *
     */
    var Cookie = function(name, value) {
        this.name = name;
        this.value = value;
    };
};