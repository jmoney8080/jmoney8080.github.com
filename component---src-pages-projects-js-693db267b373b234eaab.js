(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"16l3":function(e,t,r){"use strict";r.r(t),r.d(t,"gitHubQuery",(function(){return x}));r("f3/d");var n=r("q1tI"),o=r.n(n),a=(r("Z2Ku"),r("L9s1"),r("Pk8M"));r("HAE/"),r("WLL4"),r("jm62"),r("8+KV"),r("0l/t"),r("ioFf"),r("rGqo"),r("yt8O"),r("RW0V"),r("a1Th"),r("h7Nl"),r("Btvt"),r("I5cv");function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(g,e);var t,n,a,l,h=(t=g,function(){var e,r=d(t);if(p()){var n=d(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return s(this,e)});function g(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(t=h.call(this,e)).$=o.a.createRef(),t._=o.a.createRef(),t}return n=g,(a=[{key:"render",value:function(){return o.a.createElement("span",{ref:this.$},o.a.createElement("a",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},this.props,{ref:this._}),this.props.children))}},{key:"componentDidMount",value:function(){this.paint()}},{key:"getSnapshotBeforeUpdate",value:function(){return this.reset(),null}},{key:"componentDidUpdate",value:function(){this.paint()}},{key:"componentWillUnmount",value:function(){this.reset()}},{key:"paint",value:function(){var e=this,t=this.$.current.appendChild(document.createElement("span"));Promise.resolve().then(r.bind(null,"q01k")).then((function(r){(0,r.render)(t.appendChild(e._.current),(function(e){try{t.parentNode.replaceChild(e,t)}catch(t){}}))}))}},{key:"reset",value:function(){this.$.current.replaceChild(this._.current,this.$.current.lastChild)}}])&&c(n.prototype,a),l&&c(n,l),g}(n.PureComponent),g=function(e){var t=e.repo;return o.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:14}},o.a.createElement("h3",{style:{display:"flex",justifyContent:"space-between",marginBottom:0,fontSize:20}},o.a.createElement("a",{href:"https://github.com"+t.resourcePath,target:"_blank",rel:"noopener noreferrer"},t.name)),o.a.createElement(h,{href:"https://github.com"+t.resourcePath,"data-icon":"octicon-star","data-size":"large","aria-label":"Star repo on GitHub"},"Star"))},m=function(e){var t=e.children;return o.a.createElement("span",{style:{marginRight:16}},t)},b=function(e){var t=e.repo,r=t.languages.edges[0].node,n=new Date(t.updatedA)-new Date,i=Math.floor(n/864e5),c=t.updatedAt.slice(0,10);return i>-21&&(c=new Intl.RelativeTimeFormat("en",{style:"narrow"}).format(i,"day")),o.a.createElement("div",{style:{color:"#586069",fontSize:12}},o.a.createElement(m,null,o.a.createElement("span",{style:{borderRadius:"50%",display:"inline-block",height:12,position:"relative",top:1,width:12,backgroundColor:r.color}})," ",r.name),o.a.createElement(m,null,o.a.createElement(a.d,{icon:a.c}),t.stargazers.totalCount," "),t.licenseInfo&&o.a.createElement(m,null,o.a.createElement(a.d,{icon:a.a})," ",t.licenseInfo.name),o.a.createElement(m,null,"Updated: ",c),t.homepageUrl&&o.a.createElement(m,null)," ")},v=function(e){var t=e.repo;return o.a.createElement("div",{style:{width:"75%"}},o.a.createElement("p",{style:{color:"#586069",marginBottom:0}},t.description,t.homepageUrl&&o.a.createElement(o.a.Fragment,null," -"," ",o.a.createElement("a",{href:t.homepageUrl},t.homepageUrl))))},y=function(e){var t=e.repo;return t.repositoryTopics.nodes.map((function(e){return e.topic.name})).includes("github-site")?o.a.createElement("div",{style:{borderBottom:"1px solid #e1e4e8",marginBottom:"1rem",padding:"1rem",fontSize:16}},o.a.createElement(g,{repo:t}),o.a.createElement(v,{repo:t}),o.a.createElement(b,{repo:t})):o.a.createElement("div",null)},w=r("Bl7J"),k=r("M7K5"),x=(t.default=function(e){var t=e.data.githubData.data.viewer,r=t.name,n=t.avatarUrl,a=t.repositories;return o.a.createElement(w.a,null,o.a.createElement("div",{style:{maxWidth:"960px",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{display:"flex",alignItems:"center",margin:"1.45rem 0"}},o.a.createElement(k.a,{img:n}),o.a.createElement("div",{style:{padding:16}},o.a.createElement("h2",{style:{border:"none"}},r))),a.nodes.map((function(e){return o.a.createElement(y,{key:e.name,repo:e})})).reverse()))},"2012205990")},M7K5:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n);t.a=function(e){var t=e.img;return o.a.createElement("div",{style:{width:125,height:125,display:"flex",position:"relative",overflow:"hidden",fontSize:"1.25rem",alignItems:"center",flexShrink:0,userSelect:"none",borderRadius:"50%",justifyContent:"center"}},o.a.createElement("a",{href:"https://www.github.com/jmoney8080"},o.a.createElement("img",{src:t,alt:"avatar",style:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",margin:0}})))}},WLL4:function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperties:r("FJW5")})},jm62:function(e,t,r){var n=r("XKFU"),o=r("mQtv"),a=r("aCFj"),i=r("EemH"),c=r("8a7r");n(n.S,"Object",{getOwnPropertyDescriptors:function(e){for(var t,r,n=a(e),l=i.f,s=o(n),d={},u=0;s.length>u;)void 0!==(r=l(n,t=s[u++]))&&c(d,t,r);return d}})},mQtv:function(e,t,r){var n=r("kJMx"),o=r("JiEa"),a=r("y3w9"),i=r("dyZX").Reflect;e.exports=i&&i.ownKeys||function(e){var t=n.f(a(e)),r=o.f;return r?t.concat(r(e)):t}},q01k:function(e,t,r){"use strict";r.r(t),r.d(t,"render",(function(){return C}));r("f3/d"),r("pIFo"),r("KKXr");var n=window.document,o=window.Math,a=window.HTMLElement,i=window.XMLHttpRequest,c=function(e){return function(t,r,n){var o=e.createElement(t);if(r)for(var a in r){var i=r[a];null!=i&&(null!=o[a]?o[a]=i:o.setAttribute(a,i))}if(n)for(var c=0,l=n.length;c<l;c++){var s=n[c];o.appendChild("string"==typeof s?e.createTextNode(s):s)}return o}},l=c(n),s=function(e,t){return{}.hasOwnProperty.call(e,t)},d=i&&i.prototype&&"withCredentials"in i.prototype,u=d&&a&&a.prototype.attachShadow&&!a.prototype.attachShadow.prototype,f=function(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent("on"+t,r)},p=function(e,t,r){e.removeEventListener?e.removeEventListener(t,r,!1):e.detachEvent("on"+t,r)},h={light:".btn{color:#24292e;background-color:#eff3f6;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23fafbfc'/%3e%3cstop offset='90%25' stop-color='%23eff3f6'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #fafbfc, #eff3f6 90%);background-image:linear-gradient(180deg, #fafbfc, #eff3f6 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFFAFBFC', endColorstr='#FFEEF2F5');border-color:#cdcfd1;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#e6ebf1;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%23f0f3f6'/%3e%3cstop offset='90%25' stop-color='%23e6ebf1'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #f0f3f6, #e6ebf1 90%);background-image:linear-gradient(180deg, #f0f3f6, #e6ebf1 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FFF0F3F6', endColorstr='#FFE5EAF0');background-position:-0.5em;border-color:#acaeb0;border-color:rgba(27,31,35,.35)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#e9ecef;background-image:none;border-color:#acaeb0;border-color:rgba(27,31,35,.35);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#24292e;background-color:#fff;border-color:#d1d2d3;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#0366d6}.octicon-heart{color:#ea4aaa}",dark:".btn{color:#fafbfc;background-color:#202428;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232f363d'/%3e%3cstop offset='90%25' stop-color='%23202428'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2f363d, #202428 90%);background-image:linear-gradient(180deg, #2f363d, #202428 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2F363D', endColorstr='#FF1E2226');border-color:#2b3138;border-color:rgba(27,31,35,.2)}:root .btn{filter:none}.btn:focus,.btn:hover{background-color:#1b1f23;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3clinearGradient id='o' x2='0' y2='1'%3e%3cstop stop-color='%232b3137'/%3e%3cstop offset='90%25' stop-color='%231b1f23'/%3e%3c/linearGradient%3e%3crect width='100%25' height='100%25' fill='url(%23o)'/%3e%3c/svg%3e\");background-image:-moz-linear-gradient(top, #2b3137, #1b1f23 90%);background-image:linear-gradient(180deg, #2b3137, #1b1f23 90%);filter:progid:DXImageTransform.Microsoft.Gradient(startColorstr='#FF2B3137', endColorstr='#FF191D21');background-position:-0.5em;border-color:#252b30;border-color:rgba(27,31,35,.5)}:root .btn:focus,:root .btn:hover{filter:none}.btn:active{background-color:#181b1f;background-image:none;border-color:#252b30;border-color:rgba(27,31,35,.5);box-shadow:inset 0 .15em .3em rgba(27,31,35,.15);filter:none}.social-count{color:#fafbfc;background-color:#1b1f23;border-color:#1b1f23;border-color:rgba(27,31,35,.2)}.social-count:focus,.social-count:hover{color:#2188ff}.octicon-heart{color:#ec6cb9}"},g=function(e,t){return"@media(prefers-color-scheme:"+e+"){"+h[s(h,t)?t:e]+"}"},m=function(e){if(null==e)return h.light;var t=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.decodeURIComponent);for(var o={},a=e.split(t),i=0,c=a.length;i<c;++i){var l=a[i];if(""!==l){var s=l.split(r);o[n(s[0])]=null!=s[1]?n(s.slice(1).join(r)):void 0}}return o}(e,";",":",(function(e){return e.replace(/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g,"")}));return h[s(h,t["no-preference"])?t["no-preference"]:"light"]+g("light",t.light)+g("dark",t.dark)},b={"mark-github":{width:16,height:16,path:'<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>'},heart:{width:12,height:16,path:'<path fill-rule="evenodd" d="M9 2c-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-1.632.086-2.954 1.333-3 3 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.047-1.69-1.342-2.913-3-3z"/>'},eye:{width:16,height:16,path:'<path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/>'},star:{width:14,height:16,path:'<path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/>'},"repo-forked":{width:10,height:16,path:'<path fill-rule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/>'},"issue-opened":{width:14,height:16,path:'<path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/>'},"cloud-download":{width:16,height:16,path:'<path fill-rule="evenodd" d="M9 12h2l-3 3-3-3h2V7h2v5zm3-8c0-.44-.91-3-4.5-3C5.08 1 3 2.92 3 5 1.02 5 0 6.52 0 8c0 1.53 1 3 3 3h3V9.7H3C1.38 9.7 1.3 8.28 1.3 8c0-.17.05-1.7 1.7-1.7h1.3V5c0-1.39 1.56-2.7 3.2-2.7 2.55 0 3.13 1.55 3.2 1.8v1.2H12c.81 0 2.7.22 2.7 2.2 0 2.09-2.25 2.2-2.7 2.2h-2V11h2c2.08 0 4-1.16 4-3.5C16 5.06 14.08 4 12 4z"/>'}},v={},y=function(e,t){var r=v[e]||(v[e]=[]);if(!(r.push(t)>1)){var n=function(e){var t;return function(){t||(t=1,e.apply(this,arguments))}}((function(){for(delete v[e];t=r.shift();)t.apply(null,arguments)}));if(d){var o=new i;f(o,"abort",n),f(o,"error",n),f(o,"load",(function(){var e;try{e=JSON.parse(o.responseText)}catch(t){return void n(t)}n(200!==o.status,e)})),o.open("GET",e),o.send()}else{var a=this||window;a._=function(e){a._=null,n(200!==e.meta.status,e.data)};var l=c(a.document)("script",{async:!0,src:e+(/\?/.test(e)?"&":"?")+"callback=_"}),s=function(){a._&&a._({meta:{}})};f(l,"load",s),f(l,"error",s),l.readyState&&function(e,t,r){f(e,"readystatechange",(function n(o){if(t.test(e.readyState))return p(e,"readystatechange",n),r(o)}))}(l,/de|m/,s),a.document.getElementsByTagName("head")[0].appendChild(l)}}},w=function(e,t,r){var n=c(e.ownerDocument),o=e.appendChild(n("style",{type:"text/css"})),a="body{margin:0}a{text-decoration:none;outline:0}.widget{display:inline-block;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;font-size:0;white-space:nowrap}.btn,.social-count{position:relative;display:inline-block;height:14px;padding:2px 5px;font-size:11px;font-weight:600;line-height:14px;vertical-align:bottom;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-repeat:repeat-x;background-position:-1px -1px;background-size:110% 110%;border:1px solid}.btn{border-radius:.25em}.btn:not(:last-child){border-radius:.25em 0 0 .25em}.social-count{border-left:0;border-radius:0 .25em .25em 0}.widget-lg .btn,.widget-lg .social-count{height:20px;padding:3px 10px;font-size:12px;line-height:20px}.octicon{display:inline-block;vertical-align:text-top;fill:currentColor}"+m(t["data-color-scheme"]);o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.ownerDocument.createTextNode(a));var i,l,d=n("a",{className:"btn",href:t.href,target:"_blank",rel:"noopener",innerHTML:(i=t["data-icon"],l=/^large$/i.test(t["data-size"])?16:14,i=(""+i).toLowerCase().replace(/^octicon-/,""),s(b,i)||(i="mark-github"),'<svg viewBox="0 0 '+b[i].width+" "+b[i].height+'" class="octicon octicon-'+i+'" style="width: '+l*b[i].width/b[i].height+"px; height: "+l+'px;" aria-hidden="true">'+b[i].path+"</svg>"),"aria-label":t["aria-label"]||void 0},[" ",n("span",{},[t["data-text"]||""])]),u=e.appendChild(n("div",{className:"widget"+(/^large$/i.test(t["data-size"])?" widget-lg":"")},[d])),f=d.hostname.split(".").reverse();if(""===f[0]&&f.shift(),"com"!==f[0]||"github"!==f[1])return d.href="#",d.target="_self",void r(u);var p=f.length,h=(" /"+d.pathname).split(/\/+/);if(((2===p||3===p&&"gist"===f[2])&&"archive"===h[3]||2===p&&"releases"===h[3]&&"download"===h[4]||3===p&&"codeload"===f[2])&&(d.target="_top"),/^true$/i.test(t["data-show-count"])&&2===p){var g,v;if(!h[2]&&h[1])g=v="followers";else if(!h[3]&&h[2])v="stargazers_count",g="stargazers";else if(h[4]||"subscription"!==h[3])if(h[4]||"fork"!==h[3]){if("issues"!==h[3])return void r(u);v="open_issues_count",g="issues"}else v="forks_count",g="network/members";else v="subscribers_count",g="watchers";var w=h[2]?"/repos/"+h[1]+"/"+h[2]:"/users/"+h[1];y.call(this,"https://api.github.com"+w,(function(e,t){if(!e){var o=t[v];u.appendChild(n("a",{className:"social-count",href:t.html_url+"/"+g,target:"_blank",rel:"noopener","aria-label":o+" "+v.replace(/_count$/,"").replace("_"," ").slice(0,o<2?-1:void 0)+" on GitHub"},[(""+o).replace(/\B(?=(\d{3})+(?!\d))/g,",")]))}r(u)}))}else r(u)},k=window.devicePixelRatio||1,x=function(e){return(k>1?o.ceil(o.round(e*k)/k*2)/2:o.ceil(e))||0},E=function(e,t){e.style.width=t[0]+"px",e.style.height=t[1]+"px"},C=function(e,t){if(null!=e&&null!=t)if(e.getAttribute&&(e=function(e){for(var t={href:e.href,title:e.title,"aria-label":e.getAttribute("aria-label")},r=["icon","color-scheme","text","size","show-count"],n=0,o=r.length;n<o;n++){var a="data-"+r[n];t[a]=e.getAttribute(a)}return null==t["data-text"]&&(t["data-text"]=e.textContent||e.innerText),t}(e)),u){var r=l("span",{title:e.title||void 0});w(r.attachShadow({mode:"closed"}),e,(function(){t(r)}))}else{var a=l("iframe",{src:"javascript:0",title:e.title||void 0,allowtransparency:!0,scrolling:"no",frameBorder:0});E(a,[0,0]),a.style.border="none";f(a,"load",(function r(){var i,c=a.contentWindow;try{i=c.document.body}catch(l){return void n.body.appendChild(a.parentNode.removeChild(a))}p(a,"load",r),w.call(c,i,e,(function(r){var n=function(e){var t=e.offsetWidth,r=e.offsetHeight;if(e.getBoundingClientRect){var n=e.getBoundingClientRect();t=o.max(t,x(n.width)),r=o.max(r,x(n.height))}return[t,r]}(r);a.parentNode.removeChild(a),function(e,t,r){f(e,t,(function n(o){return p(e,t,n),r(o)}))}(a,"load",(function(){E(a,n)})),a.src="https://unpkg.com/github-buttons@2.6.0/dist/buttons.html#"+(a.name=function(e,t,r,n){null==t&&(t="&"),null==r&&(r="="),null==n&&(n=window.encodeURIComponent);var o=[];for(var a in e){var i=e[a];null!=i&&o.push(n(a)+r+n(i))}return o.join(t)}(e)),t(a)}))})),n.body.appendChild(a)}}}}]);
//# sourceMappingURL=component---src-pages-projects-js-693db267b373b234eaab.js.map