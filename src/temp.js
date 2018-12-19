/**
 * Created by Administrator on 2015/9/11.
 */
(function (global) {

    'use strict';

     // Default impl options
     var defaultOptions = {
        // Default is to fail on error, no placeholder
        imagePlaceholder: undefined,
        // Default cache bust is false, it will use the cache
        cacheBust: false
    };


    var yardCode = {
        barcode: barCode
    };

    if (typeof module !== 'undefined')
        module.exports = yardCode;
    else
        global.yardCode = yardCode;
    
    
    function barCode(type,val,options){
        if(type===1002){
            return jsBarcodes(val);
        }else{
           return qRiouss(val,options);
        }
    }

    function jsBarcodes(val){
        var canvas = document.createElement("canvas");
        JsBarcode(canvas, val, {format: "CODE39"});
        return canvas.toDataURL("image/png");
    }

    function qRiouss(val,options){
        var obj = Object.assign({value: val},options?options:{
            background:background,
            backgroundAlpha: 0.8,
            foreground: foreground,
            foregroundAlpha: 0.8,
            level: 'H',
            padding: padding,
            size: size,
        });
       return new QRious(obj).toDataURL('image/jpeg');
    }

})(this);