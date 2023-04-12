(function(e){
  "use strict";
  "function" == typeof define && define.amd
  ?define(["jquery"], e)
  :"object"== typeof module && module.exports
  ?(module.exports = e(require("jquery")))
  :e(window.jquery);
  
}) (function(e){
  "use strict";
  (e.fn.ratingLocales = {}), (e.fn.ratingThemes = {});

  var t,a;
  (t = {
   
    NAMESPACE :  ".rating",
      DEFAULT_MIN : 0,
      DEFAULT_MAX : 5,
      DEFAULT_STEP : 0.5,
      isEmpty : function(t, a){
        return(
          null === t || void 0 === t || 0 === t.length || (a && "" === e.trim(t)   ) 
        );
      },

      getcss: function (e, t){
        return e? " " + t :"";
        
      },
      addcss : function(e,t){
        e.removeClass(t).addClass(t);
      },

      getDecimalPlaces : function(e){

      },

      applyPrecision: function(e,t){
        return parseFloat(e.toFixed(t));
        
      },

      handler: function(e,a,n,r,i){
        
      }
  })
})