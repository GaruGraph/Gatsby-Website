(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"About"),r.a.createElement("p",null,"Site réalisé avec Gatsby v2.0.0"),r.a.createElement("img",{src:"https://images.unsplash.com/photo-1539495090708-ac6b6e8f4189?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fcd5125a6fb31fbf5676df78447626a0&auto=format&fit=crop&w=1050&q=80",alt:"apple"}))}},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(149),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(27);a.d(t,"waitForRouteChange",function(){return u.c});var s=a(151),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(38);a.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gilles Mosson"}}}}},153:function(e,t,a){"use strict";a.r(t);a(39);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),l=a(1),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({key:t.pathname,location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},154:function(e,t,a){},156:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(157),c=a.n(o),l=a(150),u=(a(158),function(e){return i.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem",marginTop:"12px"}},i.a.createElement(l.Link,{to:e.to,style:{fontSize:"1.2rem",color:"white",textDecoration:"none"}},e.children))}),s=function(){return i.a.createElement("ul",{style:{listStyle:"none",float:"right"}},i.a.createElement(u,{to:"/"},"Home"),i.a.createElement(u,{to:"/about/"},"About"),i.a.createElement(u,{to:"/formation/"},"Formation"),i.a.createElement(u,{to:"/contact/"},"Contact"))},d=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{background:"#4477a3",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1260,padding:"1.45rem 1.0875rem"}},i.a.createElement(s,null),i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};a(154),t.a=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"My fav blog"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})}}}]);
//# sourceMappingURL=component---src-pages-about-js-f4e0c9d24064cc2990f8.js.map