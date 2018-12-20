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
            return jsBarcodes(val,options);
        }else{
           return qRiouss(val,options);
        }
    }

    function jsBarcodes(val,options){
        var canvas = document.createElement("canvas");
        try{
            JsBarcode(canvas, val,options); //"CODE39"
            return canvas.toDataURL("image/jpeg");
        }catch(err){
            JsBarcode(canvas, val); //"CODE39"
            return canvas.toDataURL("image/jpeg");
        }
    }

    function qRiouss(val,options){
        var obj = Object.assign({value: val},options ? options:{
            level: 'H',
            size: 200,
        });
       return new QRious(obj).toDataURL('image/jpeg');
    }

})(this);