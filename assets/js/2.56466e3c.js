(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{438:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"g",(function(){return r})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"h",(function(){return g}));n(27),n(36),n(64),n(52),n(113),n(51),n(259),n(18),n(166),n(26),n(168),n(37);var i=/#.*$/,s=/\.(md|html)$/,a=/\/$/,r=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(s,"")}function l(t){return r.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function h(t){if(l(t))return t;var e=t.match(i),n=e?e[0]:"",s=o(t);return a.test(s)?t:s+".html"+n}function f(t,e){var n=t.hash,s=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!s||n===s)&&o(t.path)===o(e)}function p(t,e,n){if(l(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var s=e.split("/");n&&s[s.length-1]||s.pop();for(var a=t.replace(/^\//,"").split("/"),r=0;r<a.length;r++){var o=a[r];".."===o?s.pop():"."!==o&&s.push(o)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));for(var i=o(e),s=0;s<t.length;s++)if(o(t[s].regularPath)===i)return Object.assign({},t[s],{type:"page",path:h(t[s].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var s=n.pages,a=n.themeConfig,r=i&&a.locales&&a.locales[i]||a;if("auto"===(t.frontmatter.sidebar||r.sidebar||a.sidebar))return function(t){var e=function(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var o=r.sidebar||a.sidebar;if(o){var l=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),c=l.base,u=l.config;return u?((u=u.map((function(t){return function t(e,n,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});s>3&&console.error("[vuepress] detected a too deep nested sidebar group.");var a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:a.map((function(e){return t(e,n,i,s+1)})),collapsable:!1!==e.collapsable}}(t,s,c)}))).sort((function(t,e){var n=t.frontmatter,i=e.frontmatter;if(n&&i)return n.stargazers_count>i.stargazers_count?-1:1})),u):[]}return[]}function g(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},439:function(t,e,n){},440:function(t,e,n){},441:function(t,e,n){},442:function(t,e,n){},443:function(t,e,n){},444:function(t,e,n){},445:function(t,e,n){},446:function(t,e,n){},447:function(t,e,n){},448:function(t,e,n){},449:function(t,e,n){},450:function(t,e,n){},451:function(t,e,n){},455:function(t,e){t.exports=function(t){return null==t}},456:function(t,e,n){"use strict";n.r(e);n(112);var i=n(438),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(458).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(456).default},methods:{isActive:i.c}},a=(n(474),n(50)),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports,o={props:["item","sidebarDepth"],components:{ThemifyIcon:n(457).a}};n(475);function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(i.c)(t,e.path)}))}var c={name:"SidebarLinks",components:{SidebarGroup:r,SidebarLink:Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.item.frontmatter?n("router-link",{staticClass:"sidebar-link",attrs:{to:t.item.path}},[t.item.frontmatter.owner?n("div",{staticClass:"sidebar-link__img"},[n("img",{attrs:{src:t.item.frontmatter.owner.avatar_url}})]):t._e(),t._v(" "),n("div",{staticClass:"sidebar-link__info"},[n("span",{staticClass:"sidebar-link__title"},[n("strong",[t._v(t._s(t.item.frontmatter.full_name||t.item.title))])]),t._v(" "),n("p",{staticClass:"sidebar-link__description"},[t._v("\n      "+t._s(t.item.frontmatter.description)+"\n    ")]),t._v(" "),n("div",{staticClass:"text-muted sidebar-link__icons"},[n("span",[n("small",[t._v(t._s(t.item.frontmatter.stargazers_count))]),t._v(" "),n("small",[n("ThemifyIcon",{attrs:{icon:"star"}})],1)]),t._v(" "),n("span",[n("small",[t._v(t._s(t.item.frontmatter.forks_count))]),t._v(" "),n("small",[n("ThemifyIcon",{attrs:{icon:"vector"}})],1)]),t._v(" "),n("span",[n("small",[t._v(t._s(t.item.frontmatter.watchers_count))]),t._v(" "),n("small",[n("ThemifyIcon",{attrs:{icon:"eye"}})],1)])])])]):t._e()}),[],!1,null,"0bbefb84",null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(l(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.c)(this.$route,t.regularPath)}}},u=Object(a.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},457:function(t,e,n){"use strict";n(462);var i={name:"ti-icon",props:["icon"]},s=n(50),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("i",{class:"ti-"+this.icon})}),[],!1,null,null,null).exports;e.a=a},458:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},s=(n(466),n(50)),a=Object(s.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},459:function(t,e,n){"use strict";var i=n(0),s=n(460);i({target:"String",proto:!0,forced:n(461)("link")},{link:function(t){return s(this,"a","href",t)}})},460:function(t,e,n){var i=n(19),s=/"/g;t.exports=function(t,e,n,a){var r=String(i(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+r+"</"+e+">"}},461:function(t,e,n){var i=n(1);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},462:function(t,e,n){},463:function(t,e,n){"use strict";var i=n(439);n.n(i).a},464:function(t,e,n){"use strict";var i=n(440);n.n(i).a},465:function(t,e,n){"use strict";var i=n(441);n.n(i).a},466:function(t,e,n){"use strict";var i=n(442);n.n(i).a},467:function(t,e,n){"use strict";var i=n(443);n.n(i).a},468:function(t,e,n){"use strict";var i=n(444);n.n(i).a},469:function(t,e,n){"use strict";var i=n(445);n.n(i).a},470:function(t,e,n){"use strict";var i=n(446);n.n(i).a},471:function(t,e,n){var i=n(65),s=n(28),a=n(53),r="[object String]";t.exports=function(t){return"string"==typeof t||!s(t)&&a(t)&&i(t)==r}},472:function(t,e,n){"use strict";var i=n(447);n.n(i).a},473:function(t,e,n){"use strict";var i=n(448);n.n(i).a},474:function(t,e,n){"use strict";var i=n(449);n.n(i).a},475:function(t,e,n){"use strict";var i=n(450);n.n(i).a},476:function(t,e,n){"use strict";var i=n(451);n.n(i).a},480:function(t,e,n){"use strict";n.r(e);n(112),n(63),n(459);var i=n(438),s={props:{item:{required:!0}},components:{ThemifyIcon:n(457).a},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link}},methods:{isExternal:i.d,isMailto:i.e,isTel:i.f,focusoutAction:function(){this.$emit("focusout")}}},a=n(50),r=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[n("ThemifyIcon",{attrs:{icon:t.item.icon}}),t._v(" "),n("span",[t._v("\n    "+t._s(t.item.text)+"\n  ")])],1)}),[],!1,null,null,null).exports,o={components:{NavLink:r},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(463),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"fade-in"},[n("div",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("div",{staticClass:"bg-gradient"}),t._v(" "),n("header",{staticClass:"hero"},[n("div",{staticClass:"img-container",attrs:{align:"center"}},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e()]),t._v(" "),n("div",[null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n          "+t._s(t.data.heroText||t.$title||"Hello")+"\n        ")]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n          "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n        ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("div",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features-list"},t._l(t.data.features,(function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))]),t._v(" "),n("div",[n("img",{attrs:{src:t.$withBase(e.img),alt:e.title}})]),t._v(" "),n("router-link",{staticClass:"action-button",attrs:{to:e.link}},[t._v("\n          Explore\n        ")])],1)})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("footer",{staticClass:"footer"}):t._e()],1)])}),[],!1,null,null,null).exports),c=(n(167),n(27),n(260),n(64),n(52),n(18),n(261),n(166),n(169),{data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,s=function(e){return e&&e.title&&e.title.toLowerCase().indexOf(t)>-1},a=[],r=0;r<e.length&&!(a.length>=n);r++){var o=e[r];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(s(o))a.push(o);else if(o.headers)for(var l=0;l<o.headers.length&&!(a.length>=n);l++){var c=o.headers[l];s(c)&&a.push(Object.assign({},o,{path:o.path+"#"+c.slug,header:c}))}}return a}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),u=(n(464),Object(a.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports),h=(n(465),Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),f=(n(84),n(51),n(114),n(14),n(26),n(82)),p=n(458),d=n(262),g=n.n(d),m={components:{NavLink:r,DropdownTransition:p.a},data:function(){return{open:!1}},props:{item:{required:!0}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},methods:{toggle:function(){this.open=!this.open},isLastItemOfArray:function(t,e){return g()(e)===t}},watch:{$route:function(){this.open=!1}}},v=(n(467),{components:{NavLink:r,DropdownLink:Object(a.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.toggle()}}})],1)})),0)])],1)}),[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(a){var r,o=e[a],l=s[a]&&s[a].label||o.lang;return o.lang===t.$lang?r=n:(r=n.replace(t.$localeConfig.path,a),i.some((function(t){return t.path===r}))||(r=a)),{text:l,link:r}}))};return[].concat(Object(f.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(i.h)(t),{items:(t.items||[]).map(i.h)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),b=(n(468),Object(a.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null).exports);function _(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var k={props:["showSidebarBtn"],components:{SidebarButton:h,NavLinks:b,SearchBox:u,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(_(this.$el,"paddingLeft"))+parseInt(_(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<959?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},C=(n(469),Object(a.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[t.showSidebarBtn?n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}):t._e(),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports),$=n(455),x=n.n($),L={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=x()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,s=void 0===i?"":i,a=e.docsBranch,r=void 0===a?"master":a,o=e.docsRepo,l=void 0===o?n:o;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,s,r,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,s,a){return/bitbucket.org/.test(t)?(i.g.test(e)?e:t).replace(i.a,"")+"/src"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(i.g.test(e)?e:"https://github.com/".concat(e)).replace(i.a,"")+"/edit"+"/".concat(s,"/")+(n?n.replace(i.a,"")+"/":"")+a}}},y=(n(470),Object(a.a)(L,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),w=n(471),S=n.n(w),O={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return E(I.PREV,this)},next:function(){return E(I.NEXT,this)}}};var I={NEXT:{resolveLink:function(t,e){return T(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return T(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function E(t,e){var n=e.$themeConfig,s=e.$page,a=e.$route,r=e.$site,o=e.sidebarItems,l=t.resolveLink,c=t.getThemeLinkConfig,u=t.getPageLinkConfig,h=c(n),f=u(s),p=x()(f)?h:f;return!1===p?void 0:S()(p)?Object(i.i)(r.pages,p,a.path):l(s,o)}function T(t,e,n){var i=[];!function t(e,n){for(var i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var s=0;s<i.length;s++){var a=i[s];if("page"===a.type&&a.path===decodeURIComponent(t.path))return i[s+n]}}var j=O,N=(n(472),{components:{PageEdit:y,PageNav:Object(a.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v(t._s(t.prev.frontmatter.name||t.prev.title))]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v(t._s(t.next.frontmatter.name||t.next.title))]):t._e(),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null).exports},props:["sidebarItems"]}),P=(n(473),Object(a.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content fade-in"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null).exports),A={name:"Sidebar",components:{SidebarLinks:n(456).default,NavLinks:b},props:["items"]},D=(n(476),{components:{Home:l,Page:P,Sidebar:Object(a.a)(A,(function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null).exports,Navbar:C},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(i.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),U=Object(a.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{attrs:{showSidebarBtn:t.shouldShowSidebar},on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top"),t._v(" "),t._t("sidebar-bottom")],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top"),t._v(" "),t._t("page-bottom")],2),t._v(" "),t._m(0)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"m-1"},[this._v("\n    Made with ❤️ by\n    "),e("a",{attrs:{href:"http://ahmadmostafa.com",target:"_blank",rel:"noopener noreferrer"}},[this._v("Ahmad Mostafa")]),this._v("\n    -\n    "),e("a",{attrs:{href:"http://github.com/z3by",target:"_blank",rel:"noopener noreferrer"}},[this._v("@z3by")])])}],!1,null,null,null);e.default=U.exports}}]);