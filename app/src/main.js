/*globals define*/
define(function(require, exports, module) {
    'use strict';
    //import lib dependencies
    var _ = require('underscore');
    var $ = require('jquery');
    //import famous components
    var Engine             = require('famous/core/Engine');
    var Surface            = require('famous/core/Surface');
    var HeaderFooterLayout = require('famous/views/HeaderFooterLayout');
    var EdgeSwapper = require('famous/views/EdgeSwapper');
    //import data components
    var PageList = require('pageList');
    //compile the templates for compontents
    var headerTemplate = _.template($('#header_template').html());
    var contentTemplate = _.template($('#content_template').html());
    var footerTemplate = _.template($('#footer_template').html());
    //famous component variables
    var mainContext = Engine.createContext();

    //main layout - header footer layout
    var layout = new HeaderFooterLayout({
        headerSize: 100,
        footerSize: 50
    });
    window.layout  = layout;

    layout.header.add(new Surface({
        size: [undefined, 100],
        content: headerTemplate(),
        classes: ['blue-bg', 'header'],
        properties: {
            lineHeight: '100px',
            textAlign: 'center'
        }
    }));

    //edge swapper, swaps the content
    var edgeSwapper = new EdgeSwapper();
    window.edgeswapper = edgeSwapper;
    layout.content.add(edgeSwapper);
    //footer for the main content
    layout.footer.add(new Surface({
        size: [undefined, 50],
        content: footerTemplate(),
        classes: ['blue-bg', 'footer'],
        properties: {
            lineHeight: '50px',
            textAlign: 'center'
        }
    }));
    //add main layout to the context
    mainContext.add(layout);
    window.famousContext = mainContext;
    //page list to manage pages
    var pageList = new PageList();
    edgeSwapper.show(pageList.get(0));
    //handle the clicks on the button
    //this is the famous way, can't figure it out though
   /* Engine.on('click', function(arg1, arg2) {
        window.console.log('click registered: ', arg1, arg2);
    });*/
    //need to find a better method than this
    $(document).on('click', '#next', function() {
        window.console.log('next');
        var nextPage = pageList.getNextPage();
        if (nextPage){
            edgeSwapper.show(nextPage);
        }
    });
    $(document).on('click', '#prev', function() {
        window.console.log('prev');
        var prevPage = pageList.getPrevPage();
        if (prevPage) {
            edgeSwapper.show(prevPage);
        }
    });

});
