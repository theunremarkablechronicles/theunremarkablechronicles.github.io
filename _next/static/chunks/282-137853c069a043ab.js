(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{2878:function(e,o,n){"use strict";var r=n(5893),t=(n(7294),n(9671)),i=n.n(t),c=n(5323),l=n.n(c),a=n(1319),d=n(8670),s=n.n(d);o.Z=function(e){var o=e.post,n=(new(i())).slug(o.author);return(0,r.jsxs)("div",{className:l().byline,style:{display:"flex"},children:[!o.published&&(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:l().draftBadge,children:"UNPUBLISHED"})}),(0,r.jsx)("div",{className:l().profileimage,children:o.author&&(0,r.jsx)("img",{src:"/profiles/".concat(n,".jpg"),width:"48",height:"48"})}),(0,r.jsxs)("div",{className:l().bylinetext,children:[o.author&&(0,r.jsx)("div",{className:l().authors,style:{color:s().authorColors[n]},children:o.author}),o.date&&(0,r.jsx)("div",{className:l().posted,children:(0,r.jsx)(a.y,{date:o.date})})]})]})}},6550:function(e,o,n){"use strict";var r=n(5893),t=(n(7294),n(7525));o.Z=function(e){var o,n,i,c=e.post,l="/images/".concat((0,t.po)(null===(n=c.cover)||void 0===n||null===(i=n[null===(o=c.cover)||void 0===o?void 0:o.type])||void 0===i?void 0:i.url,c.id));return c.cover?l.endsWith(".mp4")?(0,r.jsx)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:l}):l.endsWith(".gif")?(0,r.jsx)("img",{src:l,className:"cover"}):(0,r.jsxs)("picture",{children:[(0,r.jsx)("source",{srcSet:"".concat(l,".optimized.webp"),type:"image/webp"}),(0,r.jsx)("source",{srcSet:"".concat(l,".optimized.jpg"),type:"image/jpeg"}),(0,r.jsx)("img",{src:"".concat(l,".optimized.jpg"),className:"cover"})]}):(0,r.jsx)(r.Fragment,{})}},5245:function(e,o,n){"use strict";var r=n(5893),t=n(9008),i=n.n(t),c=n(8670),l=n.n(c);o.Z=function(e){var o=e.titlePre,n=void 0===o?"":o,t=e.description,c=void 0===t?"":t,a=e.path,d=void 0===a?"/":a,s=e.ogImage,u=void 0===s?l().ogImage:s;return(0,r.jsxs)(i(),{children:[(0,r.jsxs)("title",{children:[n?"".concat(n," |"):""," ",l().title]}),(0,r.jsx)("meta",{property:"og:description",content:c}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(n?"".concat(n," |"):""," ").concat(l().title)}),(0,r.jsx)("meta",{property:"og:url",content:"".concat(l().baseUrl).concat(d)}),u&&(0,r.jsx)("meta",{property:"og:image",content:u}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/ibm-plex-serif-v8-latin-regular.woff2",as:"font",crossOrigin:"anonymous"}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/ibm-plex-mono-v5-latin-regular.woff2",as:"font",crossOrigin:"anonymous"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"".concat(l().baseUrl,"/index.xml"),title:l().title})]})}},1199:function(e,o,n){"use strict";var r=n(5893),t=n(1664),i=n.n(t),c=n(5446),l=n.n(c);o.Z=function(e){var o=e.children,n=void 0===o?null:o,t=e.compact,c=void 0!==t&&t;return(0,r.jsxs)("header",{className:l().header,children:[(0,r.jsx)("div",{className:l().topContainer,children:c&&(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("h2",{id:"blog",children:"The Unremarkable Chronicles"})})}),!c&&(0,r.jsx)(i(),{href:"/",children:(0,r.jsx)("h1",{id:"blog",children:"The Unremarkable Chronicles"})}),n]})}},1319:function(e,o,n){"use strict";n.d(o,{y:function(){return _},Z:function(){return h}});var r=n(1799),t=n(5893),i=n(6089),c=n.n(i),l=n(7294),a=n(6111),d=n.n(a),s=n(9396),u=function(e){return(0,t.jsx)("a",(0,s.Z)((0,r.Z)({},e),{rel:"noopener",target:e.target||"_blank"}))},_=function(e){var o=e.date,n=e.className,i=function(e){var o=new Date(e),n={month:"long",day:"2-digit",year:"numeric"};return e.includes("T")&&(n=(0,r.Z)({hour:"numeric",minute:0!==o.getUTCMinutes()?"numeric":void 0,second:0!==o.getUTCSeconds()?"numeric":void 0},n)),o.toLocaleString("en-US",n)},c=o;return(0,t.jsxs)("span",{className:n,children:[i(c.start),c.end?" \u21e2 ".concat(i(c.end)):""]})},h=function(e){var o=e.text.map((function(e,o){switch(e.type){case"text":var n=e.text,r=e.annotations,i=r.code?(0,t.jsx)("code",{children:n.content}):(0,t.jsx)("span",{children:n.content}),a=r.code?"code":"span",s=(null===r||void 0===r?void 0:r.color.endsWith("background"))?d().bgspan:"";return(0,t.jsxs)(a,{className:c().dynamic([["ec10f44a8beb611d",[(null===r||void 0===r?void 0:r.bold)?"font-weight: bold;":"",(null===r||void 0===r?void 0:r.italic)?"font-style: italic;":"",(null===r||void 0===r?void 0:r.strikethrough)?"text-decoration: line-through;":"",(null===r||void 0===r?void 0:r.underline)?"text-decoration: underline;":""]]])+" "+"".concat(d()["color_".concat(null===r||void 0===r?void 0:r.color)]||""," ").concat(s),children:[n.link?(0,t.jsx)(u,{href:n.link.url,children:i}):n.content,(0,t.jsx)(c(),{id:"ec10f44a8beb611d",dynamic:[(null===r||void 0===r?void 0:r.bold)?"font-weight: bold;":"",(null===r||void 0===r?void 0:r.italic)?"font-style: italic;":"",(null===r||void 0===r?void 0:r.strikethrough)?"text-decoration: line-through;":"",(null===r||void 0===r?void 0:r.underline)?"text-decoration: underline;":""],children:"span.__jsx-style-dynamic-selector{".concat((null===r||void 0===r?void 0:r.bold)?"font-weight: bold;":"","\r\n                ").concat((null===r||void 0===r?void 0:r.italic)?"font-style: italic;":"","\r\n                ").concat((null===r||void 0===r?void 0:r.strikethrough)?"text-decoration: line-through;":"","\r\n                ").concat((null===r||void 0===r?void 0:r.underline)?"text-decoration: underline;":"","\r\n              }")})]},o);case"mention":switch(e.mention.type){case"user":return(0,t.jsx)("span",{children:e.mention.user.name},o);case"date":return(0,t.jsx)(_,{date:e.mention.date,className:"".concat(d().bgspan," ").concat(d().mentioned)},o);case"page":case"database":return(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("code",{className:"jsx-321b3d7facbc82be",children:"\u26d4\ufe0f Page/database mentions not allowed"}),(0,t.jsx)(c(),{id:"321b3d7facbc82be",children:"code.jsx-321b3d7facbc82be{display:inline-block;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;background-color:#f55555;padding:0px 5px}"})]},o)}default:return console.warn("rich text type ".concat(e.type)),(0,t.jsx)("span",{style:{color:"gray"},children:"(Unsupported rich text)"},o)}}));return(0,t.jsx)(t.Fragment,{children:o})}},7525:function(e,o,n){"use strict";n.d(o,{eH:function(){return t},gZ:function(){return i},po:function(){return r}});n(4051),n(3300);function r(e,o){var n=null===e||void 0===e?void 0:e.split(".").pop().split("?")[0];return"".concat(o,".").concat(n)}function t(e){var o;return r(null===(o=i(e))||void 0===o?void 0:o.file.url,e.id)}function i(e){return"image"===e.type&&"file"===e.image.type?e.image:"video"===e.type&&"file"===e.video.type?e.video:null}},5323:function(e){e.exports={byline:"byline_byline__DojYw",profileimage:"byline_profileimage__PNjmA",authors:"byline_authors__je73y",author:"byline_author__4kZCN",posted:"byline_posted__LhfMj",draftBadge:"byline_draftBadge__9pyz_"}},5446:function(e){e.exports={header:"header_header__nnHgx",blogLogo:"header_blogLogo__oOYne",topContainer:"header_topContainer__Iik1i",blogLogoCompact:"header_blogLogoCompact__zsgmn"}},6111:function(e){e.exports={bgspan:"rich-text_bgspan__ZNmf5",mentioned:"rich-text_mentioned__hFslf",color_gray:"rich-text_color_gray__O5fao",color_brown:"rich-text_color_brown__qYKvT",color_orange:"rich-text_color_orange__LKUFT",color_yellow:"rich-text_color_yellow__SJNqZ",color_green:"rich-text_color_green__rFTMU",color_blue:"rich-text_color_blue__E2CSL",color_purple:"rich-text_color_purple__ZA7QZ",color_pink:"rich-text_color_pink__c37Zk",color_red:"rich-text_color_red__jgmrG",color_gray_background:"rich-text_color_gray_background__OZVu0",color_brown_background:"rich-text_color_brown_background__XF4jv",color_orange_background:"rich-text_color_orange_background__FCKfp",color_yellow_background:"rich-text_color_yellow_background__0Lxpj",color_green_background:"rich-text_color_green_background__WKHUZ",color_blue_background:"rich-text_color_blue_background__nb5eY",color_purple_background:"rich-text_color_purple_background__CmAeM",color_pink_background:"rich-text_color_pink_background__Fb9NA",color_red_background:"rich-text_color_red_background__Qzd36"}}}]);