/**
 * Created by juliandale on 4/11/14.
 */

define(function(require, exports, module) {
    var Surface = require('famous/core/surface');
    var appPages = [];
    appPages.push(new Surface({
        size: [undefined, undefined],
        content:'bitch',
        classes: ['grey-bg', 'main-content'],
        properties: {
            lineHeight: window.innerHeight - 150 + 'px',
            textAlign: 'center'
        }
    }));

    appPages.push(new Surface({
        size: [undefined, undefined],
        content:'You suck',
        classes: ['blue-bg', 'main-content'],
        properties: {
            lineHeight: window.innerHeight - 150 + 'px',
            textAlign: 'center'
        }
    }));
    function PageList(options) {
        this.options = options;
        this.currentPage = 0;
    }

    PageList.prototype.getNextPage = function() {
        //TODO: make this use mod so that it will never return null
        if (this.currentPage >= appPages.length) {
            return null;
        } else {
            this.currentPage++;
            return appPages[this.currentPage];
        }
    };

    PageList.prototype.getPrevPage = function() {
        if (this.currentPage < 0) {
            return null;
        } else {
            this.currentPage--;
            return appPages[this.currentPage];
        }
    };
    PageList.prototype.get = function(index) {
        return (appPages[index])? appPages[index]: null;
    };

    module.exports = PageList;
});
