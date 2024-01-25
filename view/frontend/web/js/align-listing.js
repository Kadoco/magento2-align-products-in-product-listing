define([
    'jquery'
], function ($) {
    'use strict';

    return function (config, element) {
        let _resize = function (element) {
            let list = [];
            $(element).find('.product-item-name').each(function () {
                $(this).css('height', 'auto');
                let offset = Math.round($(this).offset().top);
                if (typeof list[offset] === 'undefined'){
                    list[offset] = [];
                }
                list[offset].push(this);
            });
            list.forEach(function (row) {
                let maxWidth = 0;
                row.forEach(function (element) {
                    let elementHeight = Math.round($(element).height());
                    if (elementHeight > maxWidth) {
                        maxWidth = elementHeight
                    }
                });
                row.forEach(function (element) {
                    $(element).css("height", maxWidth);
                });
            })

            let listBox = [];
            $(element).find('.product-item-inner').each(function () {
                $(this).css('height', 'auto');
                let offset = Math.round($(this).offset().top);
                if (typeof listBox[offset] === 'undefined'){
                    listBox[offset] = [];
                }
                listBox[offset].push(this);
            });
            listBox.forEach(function (row) {
                let maxWidth = 0;
                row.forEach(function (element) {
                    let elementHeight = Math.round($(element).height());
                    if (elementHeight > maxWidth) {
                        maxWidth = elementHeight
                    }
                });
                row.forEach(function (element) {
                    $(element).css("height", maxWidth);
                });
            })
        };
        $(window).resize(function() {
            _resize(element);
        });
        _resize(element);
    };
});
