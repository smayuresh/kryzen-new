(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[791],{4276:function(e,a,n){Promise.resolve().then(n.bind(n,3426))},2893:function(e,a,n){"use strict";n.d(a,{default:function(){return t.a}});var s=n(128),t=n.n(s)},6453:function(e,a,n){"use strict";var s=n(2458);n.o(s,"usePathname")&&n.d(a,{usePathname:function(){return s.usePathname}})},3426:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return m}});var s=n(2102),t=n(9991),c=n(5259),r=n(4580),i=n(3018),o=n(8100);let l=[{name:"mobile",width:375,icon:"device-mobile"},{name:"tablet",width:960,icon:"device-tablet"},{name:"desktop",width:"100%",icon:"device-desktop"}];function m(){let[e,a]=(0,t.useState)("desktop"),[n,m]=(0,t.useState)("100%");return(0,s.jsxs)("div",{className:"preview",children:[(0,s.jsx)("iframe",{className:"preview-iframe",src:r.lX,frameBorder:"0",style:{width:n}}),(0,s.jsxs)("div",{className:"preview-navbar",children:[(0,s.jsx)("div",{className:"mr-auto",children:(0,s.jsx)(c.Link,{href:"/",className:"preview-navbar-link",children:(0,s.jsx)("span",{className:"logo logo-white logo-square","aria-label":"Tabler"})})}),(0,s.jsx)("div",{className:"preview-navbar-devices",children:l.map(n=>(0,s.jsx)("button",{className:(0,o.W)("preview-navbar-link",{active:n.name===e}),title:"Preview template on ".concat(n.name),onClick:()=>{a(n.name),m(n.width)},children:(0,s.jsx)(i.J,{name:n.icon})},n.name))}),(0,s.jsxs)("div",{className:"ml-auto d-flex",children:[(0,s.jsxs)("a",{href:r.M4,className:"btn btn-primary btn-responsive-sm lemonsqueezy-button",children:[(0,s.jsx)(i.J,{name:"download"}),(0,s.jsx)("span",{className:"btn-responsive-text",children:"Download Tabler"})]}),(0,s.jsx)("a",{href:r.lX,className:"preview-navbar-link ml-3",children:(0,s.jsx)(i.J,{name:"x"})})]})]})]})}},5259:function(e,a,n){"use strict";n.r(a),n.d(a,{Link:function(){return i}});var s=n(2102),t=n(2893),c=n(6453),r=n(8100);function i(e){let{href:a,children:n,className:i,prefetch:o=!1,exact:l=!1,onClick:m=()=>{},...u}=e,p=(0,c.usePathname)()||"";return(0,s.jsx)(t.default,{href:a,className:(0,r.W)(i,[(l?p===a:p.startsWith(a))?"active":""]),onClick:m,...u,children:n})}},2168:function(e,a,n){"use strict";n.d(a,{FV:function(){return c},OO:function(){return r},Sf:function(){return t},dP:function(){return s},iL:function(){return i},rT:function(){return o}});let s=!0,t=!1,c=!1,r=!1,i=!1,o=!1},4580:function(e,a,n){"use strict";n.d(a,{K_:function(){return y},hI:function(){return p},h3:function(){return d},ee:function(){return g},Kc:function(){return w},PR:function(){return h},_C:function(){return b},iz:function(){return f},Ms:function(){return k},M6:function(){return v},Hz:function(){return i},ZF:function(){return u},lX:function(){return l},M4:function(){return m}});var s={version:"3.0.0",count:5200},t={count:50};let c={version:"1.0.0-beta17",paymentsProviders:[{name:"2checkout",class:"2checkout"},{name:"Alipay",class:"alipay"},{name:"Amazon",class:"amazon"},{name:"Americanexpress",class:"americanexpress"},{name:"Applepay",class:"applepay"},{name:"Bancontact",class:"bancontact"},{name:"Bitcoin",class:"bitcoin"},{name:"Bitpay",class:"bitpay"},{name:"Blik",class:"blik"},{name:"Cirrus",class:"cirrus"},{name:"Clickandbuy",class:"clickandbuy"},{name:"Coinkite",class:"coinkite"},{name:"Dinersclub",class:"dinersclub"},{name:"Directdebit",class:"directdebit"},{name:"Discover",class:"discover"},{name:"Dotpay",class:"dotpay"},{name:"Dwolla",class:"dwolla"},{name:"Ebay",class:"ebay"},{name:"Eway",class:"eway"},{name:"Giropay",class:"giropay"},{name:"Googlewallet",class:"googlewallet"},{name:"Ingenico",class:"ingenico"},{name:"Jcb",class:"jcb"},{name:"Klarna",class:"klarna"},{name:"Laser",class:"laser"},{name:"Maestro",class:"maestro"},{name:"Mastercard",class:"mastercard"},{name:"Mir",class:"mir"},{name:"Monero",class:"monero"},{name:"Neteller",class:"neteller"},{name:"Ogone",class:"ogone"},{name:"Okpay",class:"okpay"},{name:"Paybox",class:"paybox"},{name:"Paymill",class:"paymill"},{name:"Payone",class:"payone"},{name:"Payoneer",class:"payoneer"},{name:"Paypal",class:"paypal"},{name:"Paysafecard",class:"paysafecard"},{name:"Payu",class:"payu"},{name:"Payza",class:"payza"},{name:"Przelewy24",class:"przelewy24"},{name:"Ripple",class:"ripple"},{name:"Sage",class:"sage"},{name:"Sepa",class:"sepa"},{name:"Shopify",class:"shopify"},{name:"Skrill",class:"skrill"},{name:"Solo",class:"solo"},{name:"Square",class:"square"},{name:"Stripe",class:"stripe"},{name:"Switch",class:"switch"},{name:"Tpay",class:"tpay"},{name:"Ukash",class:"ukash"},{name:"Unionpay",class:"unionpay"},{name:"Verifone",class:"verifone"},{name:"Verisign",class:"verisign"},{name:"Visa",class:"visa"},{name:"Webmoney",class:"webmoney"},{name:"Westernunion",class:"westernunion"},{name:"Worldpay",class:"worldpay"}]};var r=n(2168);let i="https://github.com/sponsors/codecalm",o=c.version;"npm install ".concat("@tabler/core","@").concat(o);let l="https://preview.tabler.io";c.paymentsProviders;let m="https://tabler.lemonsqueezy.com/checkout/buy/ac0d11e7-86fb-4fcf-ad9e-3d89e8dfbb24?embed=1&desc=0&discount=0&media=0",u="https://cdn.jsdelivr.net/npm/@tabler/core@".concat(o);"".concat(u).concat(o,"/dist/css/tabler.min.css"),"".concat(u).concat(o,"/dist/js/tabler.min.js");let p=50*Math.floor(s.count/50);s.count;let b=s.version,g="https://github.com/tabler/tabler-icons",d="https://tabler.lemonsqueezy.com/checkout/buy/8a2ea1c6-ba44-455c-811b-ffb55babdfc6?desc=0&discount=0";"https://github.com/tabler/tabler-icons/releases/download/v".concat(b,"/tabler-icons-").concat(b,".zip");let h="https://github.com/tabler/tabler-icons/issues/new?labels=icon+request";t.count;let f=t.count,v=59,k="https://tabler.lemonsqueezy.com/checkout/buy/44fd4bdb-6ca0-49eb-b887-ebafd080c7bc?embed=1&desc=0&discount=0&media=0";[...r.FV?[{title:"SVG illustrations",route:"/illustrations"}]:[],...r.OO?[{title:"Flags",route:"/flags"}]:[],...r.iL?[{title:"Payments",route:"/payments"}]:[]],[...r.dP?[{title:"Blog",route:"/blog"}]:[]],[...r.Sf?[{title:"Changelog",route:"/changelog"}]:[],...r.rT?[{title:"Pricing",route:"/pricing"}]:[]];let y={show:!0,id:"tabler-icons-3-0",except:"/icons",text:"<strong>Tabler Icons 3.0 has been relesed! \uD83E\uDD73\uD83D\uDE80</strong> Over 5200+ icons, dual styles, and easy integration to enhance designs.",link:{href:"/icons",text:"Read more →"}},P=e=>"/docs".concat(e),w=[{name:"Figma",url:"https://www.figma.com/community/plugin/1169807996149376642/Tabler-Icons",img:"figma",description:"A Tabler icons plugin for Figma",ghSourceUrl:"https://github.com/tabler/tabler-icons-figma"},{name:"React",url:P("/icons/react"),img:"react",description:"A Tabler icons package for React",npmPackage:"@tabler/icons-react",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-react"},{name:"React Native",url:P("/icons/react-native"),img:"react-native",description:"A Tabler icons package for React Native",npmPackage:"@tabler/icons-react-native",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-react-native"},{name:"Vue",url:P("/icons/vue"),img:"vue",description:"A Tabler icons package for Vue",npmPackage:"@tabler/icons-vue",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-vue"},{name:"Preact",url:P("/icons/preact"),img:"preact",description:"A Tabler icons package for Preact",npmPackage:"@tabler/icons-preact",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-preact"},{name:"Svelte",url:P("/icons/svelte"),img:"svelte",description:"A Tabler icons package for Svelte",npmPackage:"@tabler/icons-svelte",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-svelte"},{name:"SolidJS",url:P("/icons/solidjs"),img:"solidjs",description:"A Tabler icons package for SolidJS",npmPackage:"@tabler/icons-solidjs",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-solidjs"},{name:"Webfont",url:P("/icons/webfont"),img:"webfont",description:"A Tabler icons package for Webfont",npmPackage:"@tabler/icons-webfont",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-webfont"},{name:"PDF",url:P("/icons/pdf"),img:"pdf",description:"A Tabler icons PDF package",npmPackage:"@tabler/icons-pdf",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-pdf"},{name:"PNG",url:P("/icons/png"),img:"png",description:"A Tabler icons PNG package",npmPackage:"@tabler/icons-png",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-png"},{name:"SVG",url:P("/icons/svg"),img:"svg",description:"A Tabler icons SVG package",npmPackage:"@tabler/icons",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons"},{name:"SVG Sprite",url:P("/icons/svg-sprite"),img:"svg-sprite",description:"A Tabler icons SVG Sprite package",npmPackage:"@tabler/icons-sprite",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-sprite"},{name:"EPS",url:P("/icons/eps"),img:"eps",description:"A Tabler icons EPS package",npmPackage:"@tabler/icons-eps",ghSourceUrl:"https://github.com/tabler/tabler-icons/tree/master/packages/icons-eps"}]},8100:function(e,a,n){"use strict";function s(){for(var e,a,n=0,s="",t=arguments.length;n<t;n++)(e=arguments[n])&&(a=function e(a){var n,s,t="";if("string"==typeof a||"number"==typeof a)t+=a;else if("object"==typeof a){if(Array.isArray(a)){var c=a.length;for(n=0;n<c;n++)a[n]&&(s=e(a[n]))&&(t&&(t+=" "),t+=s)}else for(s in a)a[s]&&(t&&(t+=" "),t+=s)}return t}(e))&&(s&&(s+=" "),s+=a);return s}n.d(a,{W:function(){return s}})}},function(e){e.O(0,[128,3018,4501,6216,1744],function(){return e(e.s=4276)}),_N_E=e.O()}]);