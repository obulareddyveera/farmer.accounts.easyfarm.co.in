_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"+vbe":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var r={POST_USERS_SESSION_ACTIVE_SUCCESS:"POST_USERS_SESSION_ACTIVE_SUCCESS"}},"+z+R":function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));e("q1tI");var r={ON_BROWSER_RESIZE_DONE:"ON_BROWSER_RESIZE_DONE"}},"55Ip":function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e("Ty5D"),o=e("dI71"),i=e("q1tI"),a=e.n(i),c=e("LhCv"),u=(e("17x9"),e("wx14")),s=e("zLVn"),l=e("9R94");a.a.Component;var f=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=Object(c.b)(n.props),n}return Object(o.a)(n,t),n.prototype.render=function(){return a.a.createElement(r.b,{history:this.history,children:this.props.children})},n}(a.a.Component);var p=function(t,n){return"function"===typeof t?t(n):t},d=function(t,n){return"string"===typeof t?Object(c.c)(t,null,null,n):t},h=function(t){return t},v=a.a.forwardRef;"undefined"===typeof v&&(v=h);var m=v((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,i=Object(s.a)(t,["innerRef","navigate","onClick"]),c=i.target,l=Object(u.a)({},i,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return l.ref=h!==v&&n||e,a.a.createElement("a",l)}));var g=v((function(t,n){var e=t.component,o=void 0===e?m:e,i=t.replace,c=t.to,f=t.innerRef,g=Object(s.a)(t,["component","replace","to","innerRef"]);return a.a.createElement(r.d.Consumer,null,(function(t){t||Object(l.a)(!1);var e=t.history,r=d(p(c,t.location),t.location),s=r?e.createHref(r):"",m=Object(u.a)({},g,{href:s,navigate:function(){var n=p(c,t.location);(i?e.replace:e.push)(n)}});return h!==v?m.ref=n||f:m.innerRef=f,a.a.createElement(o,m)}))})),y=function(t){return t},b=a.a.forwardRef;"undefined"===typeof b&&(b=y);b((function(t,n){var e=t["aria-current"],o=void 0===e?"page":e,i=t.activeClassName,c=void 0===i?"active":i,f=t.activeStyle,h=t.className,v=t.exact,m=t.isActive,w=t.location,O=t.sensitive,x=t.strict,j=t.style,E=t.to,P=t.innerRef,S=Object(s.a)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a.a.createElement(r.d.Consumer,null,(function(t){t||Object(l.a)(!1);var e=w||t.location,i=d(p(E,e),e),s=i.pathname,C=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),A=C?Object(r.e)(e.pathname,{path:C,exact:v,sensitive:O,strict:x}):null,R=!!(m?m(A,e):A),k=R?function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(h,c):h,T=R?Object(u.a)({},j,{},f):j,N=Object(u.a)({"aria-current":R&&o||null,className:k,style:T,to:i},S);return y!==b?N.ref=n||P:N.innerRef=P,a.a.createElement(g,N)}))}))},"8OQS":function(t,n){t.exports=function(t,n){if(null==t)return{};var e,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}},"8ORE":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/app",function(){return e("BY9Y")}])},"9R94":function(t,n,e){"use strict";n.a=function(t,n){if(!t)throw new Error("Invariant failed")}},AqCL:function(t,n){t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},BY9Y:function(t,n,e){"use strict";e.r(n),function(t){var r=e("h4VS"),o=e("q1tI"),i=e.n(o),a=e("55Ip"),c=e("Ty5D"),u=e("/MKj"),s=e("vOnD"),l=e("R9G1"),f=e("vqEX"),p=e("sl8V"),d=e("qdn0"),h=e("Xp8U"),v=i.a.createElement;function m(){var t=Object(r.a)(["\n  position: relative !important;\n  width: 100%;\n  height: 100vh;\n  margin-top: 2rem !important;\n  padding: 2rem;\n  @media (max-width: 720px) {\n    padding: 0rem;\n  }\n"]);return m=function(){return t},t}var g=s.a.div(m());n.default=function(n){var e=Object(u.b)();i.a.useEffect((function(){e(Object(h.a)())}),[]);var r=Object(u.c)((function(t){return{session:t.Users&&t.Users.session||{}}})).session.picture;return v(i.a.Fragment,null,v(l.default,{pic:r||"/empty_profile.jpeg"}),v("main",{className:"mt-4",style:{position:"relative"}},v("div",{className:"d-flex",style:{position:"relative"}},v(f.default,null),v(g,null,t&&v(a.a,null,v(c.c,null,v(c.a,{path:"/auth/profile",exact:!0,component:d.default}),v(c.a,{path:"/",exact:!0,component:p.default})))))))}}.call(this,e("8oxB"))},"HaE+":function(t,n,e){"use strict";function r(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void e(s)}c.done?n(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(o,i){var a=t.apply(n,e);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(n,"a",(function(){return o}))},LhCv:function(t,n,e){"use strict";e.d(n,"a",(function(){return O})),e.d(n,"b",(function(){return S})),e.d(n,"d",(function(){return A})),e.d(n,"c",(function(){return v})),e.d(n,"f",(function(){return m})),e.d(n,"e",(function(){return h}));var r=e("wx14");function o(t){return"/"===t.charAt(0)}function i(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}var a=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],a=n&&n.split("/")||[],c=t&&o(t),u=n&&o(n),s=c||u;if(t&&o(t)?a=r:r.length&&(a.pop(),a=a.concat(r)),!a.length)return"/";if(a.length){var l=a[a.length-1];e="."===l||".."===l||""===l}else e=!1;for(var f=0,p=a.length;p>=0;p--){var d=a[p];"."===d?i(a,p):".."===d?(i(a,p),f++):f&&(i(a,p),f--)}if(!s)for(;f--;f)a.unshift("..");!s||""===a[0]||a[0]&&o(a[0])||a.unshift("");var h=a.join("/");return e&&"/"!==h.substr(-1)&&(h+="/"),h};function c(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}var u=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,r){return t(n,e[r])}));if("object"===typeof n||"object"===typeof e){var r=c(n),o=c(e);return r!==n||o!==e?t(r,o):Object.keys(Object.assign({},n,e)).every((function(r){return t(n[r],e[r])}))}return!1},s=e("9R94");function l(t){return"/"===t.charAt(0)?t:"/"+t}function f(t){return"/"===t.charAt(0)?t.substr(1):t}function p(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function d(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function h(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function v(t,n,e,o){var i;"string"===typeof t?(i=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t)).state=n:(void 0===(i=Object(r.a)({},t)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==n&&void 0===i.state&&(i.state=n));try{i.pathname=decodeURI(i.pathname)}catch(c){throw c instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):c}return e&&(i.key=e),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=a(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i}function m(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&u(t.state,n.state)}function g(){var t=null;var n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"===typeof t?t(n,e):t;"string"===typeof i?"function"===typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var y=!("undefined"===typeof window||!window.document||!window.document.createElement);function b(t,n){n(window.confirm(t))}function w(){try{return window.history.state||{}}catch(t){return{}}}function O(t){void 0===t&&(t={}),y||Object(s.a)(!1);var n=window.history,e=function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history}(),o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,c=void 0!==a&&a,u=i.getUserConfirmation,f=void 0===u?b:u,m=i.keyLength,O=void 0===m?6:m,x=t.basename?d(l(t.basename)):"";function j(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return x&&(i=p(i,x)),v(i,r,e)}function E(){return Math.random().toString(36).substr(2,O)}var P=g();function S(t){Object(r.a)(M,t),M.length=n.length,P.notifyListeners(M.location,M.action)}function C(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||k(j(t.state))}function A(){k(j(w()))}var R=!1;function k(t){if(R)R=!1,S();else{P.confirmTransitionTo(t,"POP",f,(function(n){n?S({action:"POP",location:t}):function(t){var n=M.location,e=N.indexOf(n.key);-1===e&&(e=0);var r=N.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(R=!0,L(o))}(t)}))}}var T=j(w()),N=[T.key];function _(t){return x+h(t)}function L(t){n.go(t)}var I=0;function U(t){1===(I+=t)&&1===t?(window.addEventListener("popstate",C),o&&window.addEventListener("hashchange",A)):0===I&&(window.removeEventListener("popstate",C),o&&window.removeEventListener("hashchange",A))}var V=!1;var M={length:n.length,action:"POP",location:T,createHref:_,push:function(t,r){var o=v(t,r,E(),M.location);P.confirmTransitionTo(o,"PUSH",f,(function(t){if(t){var r=_(o),i=o.key,a=o.state;if(e)if(n.pushState({key:i,state:a},null,r),c)window.location.href=r;else{var u=N.indexOf(M.location.key),s=N.slice(0,u+1);s.push(o.key),N=s,S({action:"PUSH",location:o})}else window.location.href=r}}))},replace:function(t,r){var o=v(t,r,E(),M.location);P.confirmTransitionTo(o,"REPLACE",f,(function(t){if(t){var r=_(o),i=o.key,a=o.state;if(e)if(n.replaceState({key:i,state:a},null,r),c)window.location.replace(r);else{var u=N.indexOf(M.location.key);-1!==u&&(N[u]=o.key),S({action:"REPLACE",location:o})}else window.location.replace(r)}}))},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(t){void 0===t&&(t=!1);var n=P.setPrompt(t);return V||(U(1),V=!0),function(){return V&&(V=!1,U(-1)),n()}},listen:function(t){var n=P.appendListener(t);return U(1),function(){U(-1),n()}}};return M}var x={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+f(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:f,decodePath:l},slash:{encodePath:l,decodePath:l}};function j(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function E(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function P(t){window.location.replace(j(window.location.href)+"#"+t)}function S(t){void 0===t&&(t={}),y||Object(s.a)(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),o=e.getUserConfirmation,i=void 0===o?b:o,a=e.hashType,c=void 0===a?"slash":a,u=t.basename?d(l(t.basename)):"",f=x[c],m=f.encodePath,w=f.decodePath;function O(){var t=w(E());return u&&(t=p(t,u)),v(t)}var S=g();function C(t){Object(r.a)(D,t),D.length=n.length,S.notifyListeners(D.location,D.action)}var A=!1,R=null;function k(){var t,n,e=E(),r=m(e);if(e!==r)P(r);else{var o=O(),a=D.location;if(!A&&(n=o,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(R===h(o))return;R=null,function(t){if(A)A=!1,C();else{var n="POP";S.confirmTransitionTo(t,n,i,(function(e){e?C({action:n,location:t}):function(t){var n=D.location,e=L.lastIndexOf(h(n));-1===e&&(e=0);var r=L.lastIndexOf(h(t));-1===r&&(r=0);var o=e-r;o&&(A=!0,I(o))}(t)}))}}(o)}}var T=E(),N=m(T);T!==N&&P(N);var _=O(),L=[h(_)];function I(t){n.go(t)}var U=0;function V(t){1===(U+=t)&&1===t?window.addEventListener("hashchange",k):0===U&&window.removeEventListener("hashchange",k)}var M=!1;var D={length:n.length,action:"POP",location:_,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=j(window.location.href)),e+"#"+m(u+h(t))},push:function(t,n){var e=v(t,void 0,void 0,D.location);S.confirmTransitionTo(e,"PUSH",i,(function(t){if(t){var n=h(e),r=m(u+n);if(E()!==r){R=n,function(t){window.location.hash=t}(r);var o=L.lastIndexOf(h(D.location)),i=L.slice(0,o+1);i.push(n),L=i,C({action:"PUSH",location:e})}else C()}}))},replace:function(t,n){var e=v(t,void 0,void 0,D.location);S.confirmTransitionTo(e,"REPLACE",i,(function(t){if(t){var n=h(e),r=m(u+n);E()!==r&&(R=n,P(r));var o=L.indexOf(h(D.location));-1!==o&&(L[o]=n),C({action:"REPLACE",location:e})}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var n=S.setPrompt(t);return M||(V(1),M=!0),function(){return M&&(M=!1,V(-1)),n()}},listen:function(t){var n=S.appendListener(t);return V(1),function(){V(-1),n()}}};return D}function C(t,n,e){return Math.min(Math.max(t,n),e)}function A(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,o=n.initialEntries,i=void 0===o?["/"]:o,a=n.initialIndex,c=void 0===a?0:a,u=n.keyLength,s=void 0===u?6:u,l=g();function f(t){Object(r.a)(w,t),w.length=w.entries.length,l.notifyListeners(w.location,w.action)}function p(){return Math.random().toString(36).substr(2,s)}var d=C(c,0,i.length-1),m=i.map((function(t){return v(t,void 0,"string"===typeof t?p():t.key||p())})),y=h;function b(t){var n=C(w.index+t,0,w.entries.length-1),r=w.entries[n];l.confirmTransitionTo(r,"POP",e,(function(t){t?f({action:"POP",location:r,index:n}):f()}))}var w={length:m.length,action:"POP",location:m[d],index:d,entries:m,createHref:y,push:function(t,n){var r=v(t,n,p(),w.location);l.confirmTransitionTo(r,"PUSH",e,(function(t){if(t){var n=w.index+1,e=w.entries.slice(0);e.length>n?e.splice(n,e.length-n,r):e.push(r),f({action:"PUSH",location:r,index:n,entries:e})}}))},replace:function(t,n){var r=v(t,n,p(),w.location);l.confirmTransitionTo(r,"REPLACE",e,(function(t){t&&(w.entries[w.index]=r,f({action:"REPLACE",location:r}))}))},go:b,goBack:function(){b(-1)},goForward:function(){b(1)},canGo:function(t){var n=w.index+t;return n>=0&&n<w.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return w}},QILm:function(t,n,e){var r=e("8OQS");t.exports=function(t,n){if(null==t)return{};var e,o,i=r(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}},R9G1:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return S}));var r=e("h4VS"),o=e("q1tI"),i=e.n(o),a=e("vOnD"),c=e("pVnL"),u=e.n(c),s=e("lSNA"),l=e.n(s),f=e("QILm"),p=e.n(f),d=e("9uj6");function h(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function v(t){return Object.keys(t).reduce((function(n,e){var r;return r=e,Object(d.a)(r)&&(n[e]=t[e]),n}),{})}var m=o.forwardRef((function(t,n){var e=t.children,r=t.iconAttrs,i=(t.iconVerticalAlign,t.iconViewBox),a=t.size,c=t.title,s=p()(t,["children","iconAttrs","iconVerticalAlign","iconViewBox","size","title"]),f=function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?h(Object(e),!0).forEach((function(n){l()(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):h(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({viewBox:i,height:void 0!==t.height?t.height:a,width:void 0!==t.width?t.width:a,"aria-hidden":null==c?"true":void 0,focusable:"false",role:null!=c?"img":void 0},r),d=v(s);return o.createElement("svg",u()({},f,d,{ref:n}),c&&o.createElement("title",{key:"icon-title"},c),e)})),g=Object(a.a)(m).withConfig({displayName:"StyledIconBase",componentId:"ea9ulj-0"})(["display:inline-block;vertical-align:",";overflow:hidden;"],(function(t){return t.iconVerticalAlign})),y=o.forwardRef((function(t,n){return o.createElement(g,u()({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 24 24"},t,{ref:n}),o.createElement("path",{d:"M12.002 0c-6.617 0-12 5.382-12 11.998 0 6.618 5.384 12.002 12 12.002S24 18.616 24 11.998C24 5.382 18.619 0 12.002 0zm0 2.43a9.568 9.568 0 019.568 9.568c0 5.286-4.283 9.572-9.568 9.572-5.285 0-9.57-4.286-9.57-9.572 0-5.285 4.285-9.568 9.57-9.568zm-.135 1.31L8.822 5.498V5.5l2.68 4.64c.425-.113.888-.08 1.31.118l1.41-2.442-2.355-4.076zm4.17 2.256l-2.68 4.643c.325.324.52.749.557 1.195h2.816l2.356-4.076-3.049-1.762zM4.781 7.984v3.55h.002v-.03h5.36a1.904 1.904 0 01.756-1.08L9.49 7.984H4.781zm2.487 4.182L4.912 16.24l3.049 1.762 2.682-4.645a1.929 1.929 0 01-.557-1.191H7.268zm6.59.33a1.904 1.904 0 01-.756 1.078l1.41 2.442h4.707v-3.52h-5.362zm-2.67 1.244l-1.41 2.442 2.353 4.076 3.049-1.76-2.68-4.64c-.425.114-.89.08-1.313-.118z"}))}));y.displayName="Pivotaltracker";var b=i.a.createElement;function w(){var t=Object(r.a)(["\n  width: 2rem;\n  height: 2rem;\n  cursor: pointer;\n"]);return w=function(){return t},t}function O(){var t=Object(r.a)(["\n  font-size: 1.5em;\n  text-align: center;\n  color: white;\n  margin-bottom: 0px !important;\n  margin-top: 2px !important;\n"]);return O=function(){return t},t}function x(){var t=Object(r.a)(["\n  color: white;\n  width: 2rem;\n  margin-left: 1rem;\n  margin-right: 0.5rem;\n  @media (max-width: 720px) {\n    margin-left: 0.5rem;\n  }\n"]);return x=function(){return t},t}var j=Object(a.a)(y)(x()),E=a.a.h1(O()),P=a.a.img(w());function S(t){var n=t.pic;return b("header",null,b("div",{className:"fixed-top"},b("nav",{className:"navbar navbar-dark bg-dark",style:{borderBottom:"1px solid rgba(255, 255, 255, 0.1)"}},b("div",{className:"d-flex justify-content-between w-100"},b("div",{className:"d-flex justify-content-start"},b("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#sideMenuContent","aria-controls":"sideMenuContent","aria-expanded":"false","aria-label":"Toggle navigation"},b("span",{className:"navbar-toggler-icon"})),b("div",{className:"d-flex justify-content-start mt-2"},b("span",null,b(j,null)),b(E,null,"Farmer Accounts"))),b("div",{className:"d-flex justify-content-end mt-2"},b("div",{className:"btn-group"},b(P,{src:n,className:"rounded-circle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}),b("div",{className:"dropdown-menu dropdown-menu-right"},b("a",{href:"#/auth/profile",className:"dropdown-item"},"Profile"),b("div",{class:"dropdown-divider"}),b("button",{className:"dropdown-item",type:"button"},"Logout"))))))))}},Ty5D:function(t,n,e){"use strict";e.d(n,"a",(function(){return b})),e.d(n,"b",(function(){return v})),e.d(n,"c",(function(){return P})),e.d(n,"d",(function(){return h})),e.d(n,"e",(function(){return y}));var r=e("dI71"),o=e("q1tI"),i=e.n(o),a=(e("17x9"),e("LhCv")),c=e("tEiQ"),u=e("9R94"),s=e("wx14"),l=e("vRGJ"),f=e.n(l),p=(e("TOwV"),e("zLVn")),d=(e("2mql"),function(t){var n=Object(c.a)();return n.displayName=t,n}("Router-History")),h=function(t){var n=Object(c.a)();return n.displayName=t,n}("Router"),v=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._isMounted?e.setState({location:t}):e._pendingLocation=t}))),e}Object(r.a)(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&this.unlisten()},e.render=function(){return i.a.createElement(h.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},i.a.createElement(d.Provider,{children:this.props.children||null,value:this.props.history}))},n}(i.a.Component);i.a.Component;i.a.Component;var m={},g=0;function y(t,n){void 0===n&&(n={}),("string"===typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=m[e]||(m[e]={});if(r[t])return r[t];var o=[],i={regexp:f()(t,o,n),keys:o};return g<1e4&&(r[t]=i,g++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],p=u.slice(1),d=t===l;return i&&!d?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:d,params:a.reduce((function(t,n,e){return t[n.name]=p[e],t}),{})}}),null)}var b=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this;return i.a.createElement(h.Consumer,null,(function(n){n||Object(u.a)(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?y(e.pathname,t.props):n.match,o=Object(s.a)({},n,{location:e,match:r}),a=t.props,c=a.children,l=a.component,f=a.render;return Array.isArray(c)&&0===c.length&&(c=null),i.a.createElement(h.Provider,{value:o},o.match?c?"function"===typeof c?c(o):c:l?i.a.createElement(l,o):f?f(o):null:"function"===typeof c?c(o):null)}))},n}(i.a.Component);function w(t){return"/"===t.charAt(0)?t:"/"+t}function O(t,n){if(!t)return n;var e=w(t);return 0!==n.pathname.indexOf(e)?n:Object(s.a)({},n,{pathname:n.pathname.substr(e.length)})}function x(t){return"string"===typeof t?t:Object(a.e)(t)}function j(t){return function(){Object(u.a)(!1)}}function E(){}i.a.Component;var P=function(t){function n(){return t.apply(this,arguments)||this}return Object(r.a)(n,t),n.prototype.render=function(){var t=this;return i.a.createElement(h.Consumer,null,(function(n){n||Object(u.a)(!1);var e,r,o=t.props.location||n.location;return i.a.Children.forEach(t.props.children,(function(t){if(null==r&&i.a.isValidElement(t)){e=t;var a=t.props.path||t.props.from;r=a?y(o.pathname,Object(s.a)({},t.props,{path:a})):n.match}})),r?i.a.cloneElement(e,{location:o,computedMatch:r}):null}))},n}(i.a.Component);i.a.useContext},Xp8U:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var r=e("o0o1"),o=e.n(r),i=e("rePB"),a=e("HaE+");e("+z+R");var c=e("+vbe"),u=e("i7Pv");function s(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?s(Object(e),!0).forEach((function(n){Object(i.a)(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var f=function(t){return function(){var t=Object(a.a)(o.a.mark((function t(n){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.postData(u.a.activeSessionUser);case 3:e=t.sent,n({type:c.a.POST_USERS_SESSION_ACTIVE_SUCCESS,payload:l({},e)}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()}},dI71:function(t,n,e){"use strict";function r(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}e.d(n,"a",(function(){return r}))},"hKI/":function(t,n,e){(function(n){var e=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,s=c||u||Function("return this")(),l=Object.prototype.toString,f=Math.max,p=Math.min,d=function(){return s.Date.now()};function h(t,n,e){var r,o,i,a,c,u,s=0,l=!1,h=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(n){var e=r,i=o;return r=o=void 0,s=n,a=t.apply(i,e)}function b(t){return s=t,c=setTimeout(O,n),l?y(t):a}function w(t){var e=t-u;return void 0===u||e>=n||e<0||h&&t-s>=i}function O(){var t=d();if(w(t))return x(t);c=setTimeout(O,function(t){var e=n-(t-u);return h?p(e,i-(t-s)):e}(t))}function x(t){return c=void 0,g&&r?y(t):(r=o=void 0,a)}function j(){var t=d(),e=w(t);if(r=arguments,o=this,u=t,e){if(void 0===c)return b(u);if(h)return c=setTimeout(O,n),y(u)}return void 0===c&&(c=setTimeout(O,n)),a}return n=m(n)||0,v(e)&&(l=!!e.leading,i=(h="maxWait"in e)?f(m(e.maxWait)||0,n):i,g="trailing"in e?!!e.trailing:g),j.cancel=function(){void 0!==c&&clearTimeout(c),s=0,r=u=o=c=void 0},j.flush=function(){return void 0===c?a:x(d())},j}function v(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=v(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var c=o.test(t);return c||i.test(t)?a(t.slice(2),c?2:8):r.test(t)?NaN:+t}t.exports=function(t,n,e){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(e)&&(r="leading"in e?!!e.leading:r,o="trailing"in e?!!e.trailing:o),h(t,n,{leading:r,maxWait:n,trailing:o})}}).call(this,e("yLpj"))},i7Pv:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c}));var r=e("o0o1"),o=e.n(r),i=e("HaE+"),a={activeSessionUser:{url:"auth/users/session/active",method:"post"},googleLoginLink:{url:"api.farmer.accounts.easyfarm.co.in/",method:"get"},baseUrl:"api.farmer.accounts.easyfarm.co.in/",getProtocol:function(){return"".concat(window.location.protocol,"//")}},c={getGoogleLoginLink:function(){var t=Object(i.a)(o.a.mark((function t(){var n,e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="".concat(a.getProtocol()).concat(a.googleLoginLink.url),t.next=3,fetch(n,{method:a.googleLoginLink.method,headers:{"Content-Type":"application/json"}});case 3:return e=t.sent,t.abrupt("return",e.json());case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),postData:function(){var t=Object(i.a)(o.a.mark((function t(n,e){var r,i,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r="".concat(a.getProtocol()).concat(a.baseUrl).concat(n.url),i={method:"POST",headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("jwt")},redirect:"follow",referrerPolicy:"no-referrer"},e&&(i.body=JSON.stringify(e)),t.next=6,fetch(r,i);case 6:return c=t.sent,t.abrupt("return",c.json());case 10:return t.prev=10,t.t0=t.catch(0),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n,e){return t.apply(this,arguments)}}()}},lSNA:function(t,n){t.exports=function(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}},pVnL:function(t,n){function e(){return t.exports=e=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},e.apply(this,arguments)}t.exports=e},qdn0:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return c}));var r=e("q1tI"),o=e.n(r),i=e("/MKj"),a=o.a.createElement;function c(){var t=Object(i.c)((function(t){return{users:t.Users}})).users;console.log("--== Users ",t);var n=t.session;return a("div",{className:"row"},n&&a(o.a.Fragment,null,a("div",{className:"col-sm-12 col-md-6 d-flex justify-content-center"},a("img",{src:n.picture||"./empty_profile.jpeg"})),a("div",{className:"col-sm-12 col-md-6"},a("table",{className:"table"},a("tr",null,a("th",null,"Name"),a("td",null,n.name)),a("tr",null,a("th",null,"Family Name"),a("td",null,n.family_name)),a("tr",null,a("th",null,"Full Name"),a("td",null,n.given_name)),a("tr",null,a("th",null,"Email"),a("td",null,n.email))))))}},rePB:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return r}))},sl8V:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return i}));var r=e("q1tI"),o=e.n(r).a.createElement;function i(){return o("div",null,o("div",null,"I have been served from React Router"))}},tEiQ:function(t,n,e){"use strict";(function(t){var r=e("q1tI"),o=e.n(r),i=e("dI71"),a=e("17x9"),c=e.n(a),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:{};function s(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}var l=o.a.createContext||function(t,n){var e,o,a="__create-react-context-"+function(){var t="__global_unique_id__";return u[t]=(u[t]||0)+1}()+"__",l=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=s(n.props.value),n}Object(i.a)(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[a]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i===1/a:i!==i&&a!==a)?e=0:(e="function"===typeof n?n(r,o):1073741823,0!==(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(r.Component);l.childContextTypes=((e={})[a]=c.a.object.isRequired,e);var f=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!==((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}Object(i.a)(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=void 0===n||null===n?1073741823:n},r.componentDidMount=function(){this.context[a]&&this.context[a].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=void 0===t||null===t?1073741823:t},r.componentWillUnmount=function(){this.context[a]&&this.context[a].off(this.onUpdate)},r.getValue=function(){return this.context[a]?this.context[a].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(r.Component);return f.contextTypes=((o={})[a]=c.a.object,o),{Provider:l,Consumer:f}};n.a=l}).call(this,e("yLpj"))},vRGJ:function(t,n,e){var r=e("AqCL");t.exports=d,t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",l=n&&n.delimiter||"/";null!=(e=o.exec(t));){var f=e[0],p=e[1],d=e.index;if(c+=t.slice(a,d),a=d+f.length,p)c+=p[1];else{var h=t[a],v=e[2],m=e[3],g=e[4],y=e[5],b=e[6],w=e[7];c&&(r.push(c),c="");var O=null!=v&&null!=h&&h!==v,x="+"===b||"*"===b,j="?"===b||"*"===b,E=e[2]||l,P=g||y;r.push({name:m||i++,prefix:v||"",delimiter:E,optional:j,repeat:x,partial:O,asterisk:!!w,pattern:P?s(P):w?".*":"[^"+u(E)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"===typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",f(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!==typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<p.length;d++){if(f=u(p[d]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===d?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,n){return t.keys=n,t}function f(t){return t&&t.sensitive?"":"i"}function p(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"===typeof s)a+=u(s);else{var p=u(s.prefix),d="(?:"+s.pattern+")";n.push(s),s.repeat&&(d+="(?:"+p+d+")*"),a+=d=s.optional?s.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var h=u(e.delimiter||"/"),v=a.slice(-h.length)===h;return o||(a=(v?a.slice(0,-h.length):a)+"(?:"+h+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+h+"|$)",l(new RegExp("^"+a,f(e)),n)}function d(t,n,e){return r(n)||(e=n||e,n=[]),e=e||{},t instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,n)}(t,n):r(t)?function(t,n,e){for(var r=[],o=0;o<t.length;o++)r.push(d(t[o],n,e).source);return l(new RegExp("(?:"+r.join("|")+")",f(e)),n)}(t,n,e):function(t,n,e){return p(i(t,e),n,e)}(t,n,e)}},vqEX:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return h}));var r=e("h4VS"),o=e("q1tI"),i=e.n(o),a=e("vOnD"),c=e("hKI/"),u=e.n(c),s=function(t){return t<320?"xs":t>=320&&t<720?"sm":t>=720&&t<1024?"md":t>=1024?"lg":void 0},l=function(){var t=Object(o.useState)((function(){s(window.innerWidth)})),n=t[0],e=t[1];return Object(o.useEffect)((function(){var t=u()((function(){e(s(window.innerWidth))}),200);return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]),n},f=i.a.createElement;function p(){var t=Object(r.a)(["\n  position: relative !important;\n  width: 30%;\n  height: 100vh;\n  @media (max-width: 720px) {\n    position: absolute !important;\n    z-index: 1;\n    width: 100%;\n  }\n"]);return p=function(){return t},t}var d=a.a.div(p());function h(){var t=l();return f(d,{className:"".concat(["xs","sm"].indexOf(t)>-1?"collapse":"expand"),id:"sideMenuContent"},f("div",{className:"bg-dark p-4",style:{height:"100vh"}},f("div",{className:"mt-4"},f("h5",{className:"text-white h4"},"Collapsed content"),f("span",{className:"text-muted"},"Toggleable via the navbar brand."))))}}},[["8ORE",0,1,2,3,5]]]);