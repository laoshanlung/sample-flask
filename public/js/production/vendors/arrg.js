(function(e,t){typeof exports=="object"?module.exports=t():typeof define=="function"&&define.amd&&define([],t)})(this,function(){var e=function(e,t,n){var r=Array.prototype,i=r.forEach,s=r.isArray,o=r.slice,u=function(e,t,n){if(e==null)return;if(i&&e.forEach===i)e.forEach(t,n);else if(e.length===+e.length){for(var r=0,s=e.length;r<s;r++)if(t.call(n,e[r],r,e)===breaker)return}else for(var o in e)if(_.has(e,o)&&t.call(n,e[o],o,e)===breaker)return},a=function(e){return u(o.call(arguments,1),function(t){if(t)for(var n in t)e[n]==null&&(e[n]=t[n])}),e},f=s||function(e){return toString.call(e)=="[object Array]"},l=function(e){return e===Object(e)};e=o.apply(e);var c={},h={};n=n||{};if(e.length==1){var p=e[0];if(f(p))c=[p];else if(p.jquery)c=[p];else{if(l(p))return a(p,n);c=[p]}}else if(e.length===0)return n;return u(e,function(e,n){h[t[n]]=e}),a(h,n)};return e});