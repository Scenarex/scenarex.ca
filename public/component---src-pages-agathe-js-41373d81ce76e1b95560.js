(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t);var n=a(7),l=a.n(n),r=a(0),i=a.n(r),s=a(164),c=a(162),m=a(160),o=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props.t;return i.a.createElement(s.a,{location:this.props.location},i.a.createElement(c.a,{title:"Agathe - SCENAREXinc",keywords:["gatsby","application","react"]}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"6u 12u(small)"},i.a.createElement("img",{src:"/assets/images/agathe-500x500.jpg",alt:""}),i.a.createElement("a",{href:"mailto:agathe@scenarex.ca"},i.a.createElement("i",{className:"fas fa-envelope"})," agathe@scenarex.ca")),i.a.createElement("div",{className:"6u 12u(small)"},i.a.createElement("h2",{className:"big"},"Agathe Cavanagh"),i.a.createElement("p",null,e("AgatheLine1")),i.a.createElement("p",null,e("AgatheLine2")))))},t}(r.Component);t.default=Object(m.b)("translations")(o)},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},162:function(e,t,a){"use strict";var n=a(163),l=a(0),r=a.n(l),i=a(1),s=a.n(i),c=a(167),m=a.n(c),o=a(36);function u(e){var t=e.description,a=e.lang,l=(e.meta,e.keywords,e.title);return r.a.createElement(o.StaticQuery,{query:h,render:function(e){var n=t||e.site.siteMetadata.description;return r.a.createElement(m.a,{defaultTitle:l,titleTemplate:"%s | "+l},r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{"http-equiv":"Content-Type",content:"text/html; charset=utf-8"}),r.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("meta",{property:"og:title",content:l}),r.a.createElement("meta",{name:"description",content:n[a]}),r.a.createElement("meta",{property:"og:description",content:n[a]}),r.a.createElement("meta",{property:"og:site_name",content:l}),e.site.siteMetadata.date?r.a.createElement("meta",{property:"og:type",content:"article"}):null,e.site.siteMetadata.date?r.a.createElement("meta",{property:"article:published_time",content:e.site.siteMetadata.date}):null,r.a.createElement("link",{defer:!0,rel:"stylesheet",href:"https://cloud.typography.com/7431656/6204392/css/fonts.css"}),r.a.createElement("script",{defer:!0,src:"https://use.fontawesome.com/releases/v5.0.12/js/all.js",integrity:"sha384-Voup2lBiiyZYkRto2XWqbzxHXwzcm4A5RfdfG6466bu5LqjwwrjXCMBQBLMWh7qR",crossorigin:"anonymous"}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"assets/apple-touch-icon.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),r.a.createElement("link",{rel:"manifest",href:"/site.webmanifest"}),r.a.createElement("link",{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#5bbad5"}),r.a.createElement("meta",{name:"msapplication-TileColor",content:"#da532c"}),r.a.createElement("meta",{name:"theme-color",content:"#ffffff"}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-87468806-1"}),r.a.createElement("script",null,"  window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments)}\n              gtag('js', new Date());\n              gtag('config', 'UA-87468806-1');\n            "),"index"===e.site.siteMetadata.ref?r.a.createElement("link",{rel:"alternate",hreflang:"en",href:"/en/"}):null,"index"===e.site.siteMetadata.ref?r.a.createElement("link",{rel:"alternate",hreflang:"fr",href:"/fr/"}):null)},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var h="1315885718"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need."}}}}},164:function(e,t,a){"use strict";var n=a(161),l=a(0),r=a.n(l),i=a(1),s=a.n(i),c=a(36),m=a(7),o=a.n(m),u=(a(76),a(37)),h=a.n(u),p=a(160),d=function(e){function t(t){var a,n=(a=e.call(this,t)||this).props.i18n;return a.title=a.props.siteTitle,a.splitTitle=a.props.siteTitle.split("/"),a.state={language:n.language},a.handleChangeLanguage=a.handleChangeLanguage.bind(h()(h()(a))),a}o()(t,e);var a=t.prototype;return a.handleChangeLanguage=function(e){this.props.i18n.changeLanguage(e),this.setState({language:e})},a.render=function(){var e=this;return r.a.createElement("div",{className:"LanguageSwitch"},3===this.splitTitle.length?r.a.createElement("div",null,r.a.createElement("a",{href:"/en/"+this.title[2],className:"en"===this.state.language?"activeLang":"lang",onClick:function(){return e.handleChangeLanguage("en")}},"en")," ",r.a.createElement("a",{href:"/fr/"+this.title[2],className:"fr"===this.state.language?"activeLang":"lang",onClick:function(){return e.handleChangeLanguage("fr")}},"fr")):r.a.createElement("div",null,r.a.createElement("a",{href:this.title,className:"en"===this.state.language?"activeLang":"lang",onClick:function(){return e.handleChangeLanguage("en")}},"en")," ",r.a.createElement("a",{href:this.title,className:"fr"===this.state.language?"activeLang":"lang",onClick:function(){return e.handleChangeLanguage("fr")}},"fr")))},t}(l.Component),E=Object(p.b)("translations")(d),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).title=t.siteTitle,a}return o()(t,e),t.prototype.render=function(){var e=this.props.t;return r.a.createElement("header",{className:"masthead"},r.a.createElement("h1",{className:"masthead-title"},r.a.createElement(c.Link,{to:"/"},r.a.createElement("img",{src:"/assets/images/scenarex.png",alt:""}))),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about",className:"/about"===this.title?"active":""},e("About"))),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/bookchain",className:"/bookchain"===this.title?"active":""},"Bookchain®"),"/"===this.title?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(c.Link,{to:"/bookchain",className:"more menu"},r.a.createElement("i",{className:"fas fa-arrow-up fa-2x"}),r.a.createElement("br",null),e("Discover"))):null),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/news",className:"/news"===this.title?"active":""},e("News"))),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/contact",className:"/contact"===this.title?"active":""},e("Contact"))),r.a.createElement("li",null,r.a.createElement(E,{siteTitle:this.title})))))},t}(l.Component);f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var g=Object(p.b)("translations")(f),b=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.t;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/about"},e("About"))),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/bookchain"},"Bookchain®")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/news"},e("News"))),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/contact"},e("Contact"))))},t}(l.Component),v=Object(p.b)("translations")(b),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).title=t.siteTitle,a}return o()(t,e),t.prototype.render=function(){var e=this.props.t;return r.a.createElement("footer",{className:"upper-border"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"3u 6u(small)"},r.a.createElement("h3",null,"SCENAREXinc")),r.a.createElement("div",{className:"3u 6u$(small)"},r.a.createElement("h3",null,"Contents"),r.a.createElement("nav",null,r.a.createElement(v,null))),r.a.createElement("div",{className:"3u 6u(small)"},r.a.createElement("h3",null,"Social"),r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:"fab fa-facebook"})," ",r.a.createElement("a",{href:"https://www.facebook.com/scenarex/"},"Facebook")),r.a.createElement("li",null,r.a.createElement("i",{className:"fab fa-twitter"})," ",r.a.createElement("a",{href:"https://twitter.com/Scenarex"},"Twitter")),r.a.createElement("li",null,r.a.createElement("i",{className:"fab fa-github"})," ",r.a.createElement("a",{href:"https://github.com/Scenarex"},"Github"))))),r.a.createElement("div",{className:"3u 6u$(small)"},r.a.createElement("nav",null,r.a.createElement("h3",null,e("Made with"),r.a.createElement("i",{className:"fas fa-heart",style:{color:"#E15554"}}),e("using")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/ajlkn/skel"},"Skel.io")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://www.modularscale.com/"},"Modular Scale")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.typography.com/fonts/gotham/overview/"},"Gotham")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://fontawesome.com/license"},"Font Awesome"))))),r.a.createElement("div",{className:"12u"},r.a.createElement("h3",null,e("Sign up for our newsletter")),r.a.createElement("form",{action:"https://scenarex.us14.list-manage.com/subscribe/post?u=55adcdb3618aefdb354ae8f92&id=b554781cb8",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate row",target:"_blank",noValidate:!0},r.a.createElement("div",{className:"mc-field-group 6u 12u(small)"},r.a.createElement("input",{type:"email",defaultValue:"",placeholder:"Email",name:"EMAIL",className:"required email",id:"mce-EMAIL"})),r.a.createElement("div",{id:"mce-responses",className:"clear"},r.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),r.a.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_55adcdb3618aefdb354ae8f92_b554781cb8",tabIndex:"-1",defaultValue:""})),r.a.createElement("div",{className:"clear 3u 12u(small)"},r.a.createElement("button",{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe",className:"button"},r.a.createElement("i",{className:"fas fa-info-circle"}),e("Subscribe"))))),r.a.createElement("div",{className:"12u$ copyright"},r.a.createElement("i",{className:"fab fa-creative-commons"})," ",r.a.createElement("i",{className:"fab fa-creative-commons-by"})," ",r.a.createElement("i",{className:"fab fa-creative-commons-sa"}),r.a.createElement("small",null,e("This work is licensed under a "),r.a.createElement("a",{rel:"license",href:"http://creativecommons.org/licenses/by-sa/4.0/"},"Creative Commons Attribution-ShareAlike 4.0 International License"),"."))))},t}(l.Component),w=Object(p.b)("translations")(y),k=a(168),N=a(165),L=a.n(N),C=a(166),x=a.n(C);k.a.use(L.a).use(x.a).use(p.a).init({backend:{fallbackLng:"en",loadPath:"assets/locales/{{lng}}/translations.json",allowMultiLoading:!0},fallbackLng:{en:["en"],fr:["fr"],default:["en"]},ns:["translations"],defaultNS:"translations",debug:!1,interpolation:{escapeValue:!1},react:{wait:!0}});k.a;var T=function(e){var t=e.children,a=e.location;return r.a.createElement(c.StaticQuery,{query:"2665375723",render:function(e){return r.a.createElement("div",{className:"container"},r.a.createElement(g,{siteTitle:a?a.pathname:"SCENAREXinc"}),r.a.createElement("div",null,t,r.a.createElement(w,null)))},data:n})};T.propTypes={children:s.a.node.isRequired};t.a=T}}]);
//# sourceMappingURL=component---src-pages-agathe-js-41373d81ce76e1b95560.js.map