(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{9418:function(e,n,t){Promise.resolve().then(t.t.bind(t,6423,23)),Promise.resolve().then(t.bind(t,3682)),Promise.resolve().then(t.bind(t,9318)),Promise.resolve().then(t.t.bind(t,4175,23))},5259:function(e,n,t){"use strict";t.r(n),t.d(n,{Link:function(){return a}});var l=t(2102),i=t(2893),s=t(6453),r=t(8100);function a(e){let{href:n,children:t,className:a,prefetch:o=!1,exact:c=!1,onClick:u=()=>{},...d}=e,h=(0,s.usePathname)()||"";return(0,l.jsx)(i.default,{href:n,className:(0,r.W)(a,[(c?h===n:h.startsWith(n))?"active":""]),onClick:u,...d,children:t})}},3682:function(e,n,t){"use strict";t.r(n),t.d(n,{Search:function(){return f},SearchButton:function(){return _},SearchModal:function(){return p}});var l=t(2102),i=t(9991),s=t(3569),r=t(5259),a=t(2276),o=t(7904),c=t(3018),u=t(9318),d=t(8100);let h={appId:"NE1EGTYLS9",apiKey:"016353235ef1dd32a6c392be0e939058",indexName:"tabler"},v=e=>e?"".concat(e," - Tabler Docs"):e;function m(e){var n,t,i,s,a;let{hit:o,children:c}=e;return(0,l.jsx)(r.Link,{className:(0,d.W)({"DocSearch-Hit--Result":null===(n=o.__is_result)||void 0===n?void 0:n.call(o),"DocSearch-Hit--Parent":null===(t=o.__is_parent)||void 0===t?void 0:t.call(o),"DocSearch-Hit--FirstChild":null===(i=o.__is_first)||void 0===i?void 0:i.call(o),"DocSearch-Hit--LastChild":null===(s=o.__is_last)||void 0===s?void 0:s.call(o),"DocSearch-Hit--Child":null===(a=o.__is_child)||void 0===a?void 0:a.call(o)}),href:o.url,children:c})}let f=e=>{let{className:n}=e,{isSearchOpen:t,toggleSearch:s}=(0,u.useTheme)(),[r,o]=(0,i.useState)("");return(0,a.D)({isOpen:t,onOpen:s,onClose:s}),(0,i.useEffect)(()=>{o(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"⌘":"ctrl")},[]),(0,l.jsx)("div",{className:(0,d.W)("mr-4",n),children:(0,l.jsxs)("button",{className:"form-control d-flex items-center cursor-pointer",onClick:s,children:[(0,l.jsx)(c.J,{name:"search","aria-label":"Quick search",className:"form-control-icon"}),(0,l.jsx)("div",{className:"flex-fill",children:(0,l.jsx)("span",{className:"form-control-placeholder",children:"Quick search…"})}),(0,l.jsxs)("span",{className:"badge",children:[r,(0,l.jsx)("span",{children:"K"})]})]})})};function _(){let{toggleSearch:e,isSearchOpen:n}=(0,u.useTheme)();return(0,l.jsxs)("button",{className:"btn",onClick:e,children:[(0,l.jsx)(c.J,{name:"search","aria-label":"Quick search",className:"h-5 w-5"}),"Try search"]})}function p(){let{toggleSearch:e,isSearchOpen:n}=(0,u.useTheme)();return(0,l.jsx)(l.Fragment,{children:n&&(0,s.createPortal)((0,l.jsx)(o.H,{hitComponent:m,onClose:e,initialScrollY:window.scrollY,maxResultsPerGroup:7,...h,transformItems:e=>e.map((n,t)=>{var l,i,s,r;let a=document.createElement("a");a.href=n.url;let o=a.hash;return(null==n?void 0:n.content)&&(n.content=v(n.content)),(null==n?void 0:null===(i=n._snippetResult)||void 0===i?void 0:null===(l=i.content)||void 0===l?void 0:l.value)&&(n._snippetResult.content.value=v(n._snippetResult.content.value)),(null==n?void 0:null===(r=n._highlightResult)||void 0===r?void 0:null===(s=r.content)||void 0===s?void 0:s.value)&&(n._highlightResult.content.value=v(n._highlightResult.content.value)),{...n,url:"".concat(a.pathname).concat(o),__is_result:()=>!0,__is_parent:()=>"lvl1"===n.type&&e.length>1&&0===t,__is_child:()=>{var l;return"lvl1"!==n.type&&e.length>1&&(null===(l=e[0])||void 0===l?void 0:l.type)==="lvl1"&&0!==t},__is_first:()=>1===t,__is_last:()=>t===e.length-1&&0!==t}})}),document.body)})}},9318:function(e,n,t){"use strict";t.r(n),t.d(n,{ThemeProvider:function(){return u},themes:function(){return o},useTheme:function(){return c}});var l=t(2102),i=t(9991),s=t(875),r=t(3018);let a=(0,i.createContext)({isSidebarOpen:!1,toggleSidebar:()=>{},isSearchOpen:!1,toggleSearch:()=>{},closeSidebar:()=>{},isDocsMenuOpen:!1,toggleDocsMenu:()=>{},closeDocsMenu:()=>{}}),o={light:{name:"Light mode",icon:(0,l.jsx)(r.J,{name:"sun"})},dark:{name:"Dark mode",icon:(0,l.jsx)(r.J,{name:"moon-stars"})}},c=()=>(0,i.useContext)(a);function u(e){let{children:n}=e,[t,r]=(0,i.useState)(!1),[o,c]=(0,i.useState)(!1),[u,d]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let e=e=>{"Escape"===e.key&&(t&&r(!1),o&&c(!1),u&&d(!1))};return window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}},[t,o,u]);let h=(0,i.useCallback)(()=>{r(e=>!e)},[]),v=(0,i.useCallback)(()=>{c(e=>!e)},[]),m=(0,i.useCallback)(()=>{d(e=>!e)},[]),f=(0,i.useCallback)(()=>{d(!1)},[]),_=(0,i.useCallback)(()=>{r(!1)},[]);return(0,l.jsx)(s.f,{defaultTheme:"system",enableSystem:!0,disableTransitionOnChange:!0,children:(0,l.jsx)(a.Provider,{value:{isSidebarOpen:t,toggleSidebar:h,isSearchOpen:o,toggleSearch:v,closeSidebar:_,isDocsMenuOpen:u,toggleDocsMenu:m,closeDocsMenu:f},children:n})})}},4175:function(){}},function(e){e.O(0,[128,710,6146,3018,4501,6216,1744],function(){return e(e.s=9418)}),_N_E=e.O()}]);