!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.screenShooter=e()}}(function(){return function e(t,n,r){function u(i,a){if(!n[i]){if(!t[i]){var c="function"==typeof require&&require;if(!a&&c)return c(i,!0);if(o)return o(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[i]={exports:{}};t[i][0].call(s.exports,function(e){var n=t[i][1][e];return u(n?n:e)},s,s.exports,e,t,n,r)}return n[i].exports}for(var o="function"==typeof require&&require,i=0;i<r.length;i++)u(r[i]);return u}({1:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var u=e("./screen-shot"),o=r(u),i=e("./utils/resize"),a=r(i),c=e("./utils/crop"),f=r(c);if(null==chrome||null==chrome.tabs)throw new Error('Error: not exist package "chrome.tabs".\n    Check "tabs" in permissions of manifest.json.\n    More info https://developer.chrome.com/extensions/tabs');var s={capture:function(){return new o["default"]},resize:function(e,t){return(0,a["default"])(e,t)},crop:function(e,t){return(0,f["default"])(e,t)}};n["default"]=s},{"./screen-shot":2,"./utils/crop":3,"./utils/resize":5}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=e("./utils/tabs-wrapper"),a=r(i),c=e("./utils/save-image-blob"),f=r(c),s=e("./utils/resize"),l=r(s),d=e("./utils/crop"),p=r(d),h=function(){function e(){u(this,e),this._promiseData=a["default"].capture()}return o(e,[{key:"resize",value:function(e){return this._promiseData=this._promiseData.then(function(t){return(0,l["default"])(t,e)}),this}},{key:"crop",value:function(e){return this._promiseData=this._promiseData.then(function(t){return(0,p["default"])(t,e)}),this}},{key:"getBlobUrl",value:function(){return this._promiseData.then(f["default"])}},{key:"getDataUrl",value:function(){return this._promiseData}}]),e}();n["default"]=h},{"./utils/crop":3,"./utils/resize":5,"./utils/save-image-blob":6,"./utils/tabs-wrapper":7}],3:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=i["default"].notContains(t,["x","y","width","height"]);if(n)return Promise.resolve(e);var r=t.x,u=t.y,o=t.width,a=t.height;return new Promise(function(t,n){var i=document.createElement("canvas"),c=i.getContext("2d"),f=new Image;f.onload=function(){var e=r||0,n=u||0,s=o||f.width-e,l=a||f.height-n;i.width=s,i.height=l,c.drawImage(f,e,n,s,l,0,0,s,l),t(i.toDataURL())},f.src=e})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=u;var o=e("./object-utils"),i=r(o)},{"./object-utils":4}],4:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={contains:function(e,t){return t.every(function(t){return e.hasOwnProperty(t)})},notContains:function(e,t){return t.every(function(t){return!e.hasOwnProperty(t)})},containsAtLeastOne:function(e,t){return t.some(function(t){return e.hasOwnProperty(t)})}}},{}],5:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function u(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=i["default"].notContains(t,["width","height"]);if(n)return Promise.resolve(e);var r=t.width,u=t.height;return new Promise(function(t,n){var o=document.createElement("canvas"),i=o.getContext("2d"),a=new Image;a.onload=function(){var e=r||a.width,n=u||a.height;o.width=e,o.height=n,i.drawImage(a,0,0,e,n),t(o.toDataURL())},a.src=e})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=u;var o=e("./object-utils"),i=r(o)},{"./object-utils":4}],6:[function(e,t,n){"use strict";function r(e){var t=u(e);return URL.createObjectURL(t)}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r;var u=function(e){for(var t=";base64,",n=e.split(t),r=n[0].split(":")[1],u=window.atob(n[1]),o=u.length,i=new Uint8Array(o),a=0;o>a;++a)i[a]=u.charCodeAt(a);return new Blob([i],{type:r})}},{}],7:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var u=e("./wrap-chrome-api"),o=r(u),i=chrome,a=i.tabs,c=o["default"].bind(null,a),f={getAllCurrentWindow:function(){return c("query",{currentWindow:!0})},get:function(e){return c("get",e)},getCurrent:function(){return c("getCurrent")},isCurrent:function(e){return c("getCurrent").then(function(t){return t.id==e})},create:function(e){return c("create",{url:e})},activate:function(e){return c("update",e,{active:!0})},pin:function(e){return c("update",e,{pinned:!0})},unpin:function(e){return c("update",e,{pinned:!1})},close:function(e){return c("remove",e)},reload:function(e){return c("reload",e)},duplicate:function(e){return c("duplicate",e)},capture:function(){return c("captureVisibleTab",null,{format:"png"})}},s=["Updated","Created","Removed","Detached","Attached","Activated","Highlighted"];s.forEach(function(e){var t="on"+e,n="off"+e;f[t]=function(e){return a[t].addListener(e),f},f[n]=function(e){return a[t].removeListener(e),f}}),n["default"]=f},{"./wrap-chrome-api":8}],8:[function(e,t,n){"use strict";function r(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),u=2;n>u;u++)r[u-2]=arguments[u];return new Promise(function(n,u){e[t].apply(e,r.concat([function(e){var t=chrome.runtime.lastError;t?u(t):n(e)}]))})}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=r},{}]},{},[1])(1)});