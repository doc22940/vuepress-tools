(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{665:function(s,t,a){"use strict";a.r(t);var e=a(50),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-plugin-separate-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-plugin-separate-pages"}},[s._v("#")]),s._v(" VuePress Plugin Separate pages")]),s._v(" "),a("blockquote",[a("p",[s._v("Separate pages plugin for "),a("a",{attrs:{href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("VuePress"),a("OutboundLink")],1),s._v(" 1.x")])]),s._v(" "),a("h2",{attrs:{id:"what"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what"}},[s._v("#")]),s._v(" What")]),s._v(" "),a("p",[s._v("This is a VuePress plugin which shows content of current header by hashtag from location")]),s._v(" "),a("h2",{attrs:{id:"rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules"}},[s._v("#")]),s._v(" Rules")]),s._v(" "),a("p",[s._v("There is exactly one basic rule to follow:")]),s._v(" "),a("ul",[a("li",[s._v("Header tags like h1, h2, h3, h4 (#, ##, ###, ####) should not be inside html elements, for example "),a("code",[s._v('<div class="notranslate"><h2>Some header</h2></div>')]),s._v(" will not work")])]),s._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[s._v("#")]),s._v(" Install")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vuepress-plugin-separate-pages\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-plugin-separate-pages\n")])])]),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),a("p",[s._v("Add "),a("code",[s._v("separate-pages")]),s._v(" in your site config file.")]),s._v(" "),a("blockquote",[a("p",[s._v("See "),a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/using-a-plugin.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("official docs on using a plugin"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'separate-pages'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[s._v("#")]),s._v(" Options")]),s._v(" "),a("blockquote",[a("p",[s._v("See Plugin Option API "),a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/option-api.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("official docs"),a("OutboundLink")],1)])]),s._v(" "),a("p",[a("code",[s._v("alwaysVisibleBlocks")]),s._v(" - list of blocks described by css rules. These blocks will always be visible.")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'separate-pages'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" alwaysVisibleBlocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#disqus_thread'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"reference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference"}},[s._v("#")]),s._v(" Reference")]),s._v(" "),a("ul",[a("li",[s._v("VuePress official "),a("a",{attrs:{href:"https://vuepress.vuejs.org/plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("plugin docs"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"license"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#license"}},[s._v("#")]),s._v(" License")]),s._v(" "),a("p",[s._v("MIT ©")])])}),[],!1,null,null,null);t.default=n.exports}}]);