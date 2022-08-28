(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{6010:function(t,e,n){"use strict";function r(t){var e,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(i&&(i+=" "),i+=n);else for(e in t)t[e]&&(i&&(i+=" "),i+=e);return i}e.Z=function(){for(var t,e,n=0,i="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(i&&(i+=" "),i+=e);return i}},7484:function(t){t.exports=function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",o="week",c="month",h="quarter",f="year",l="date",d="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},g=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:g,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+g(r,2,"0")+":"+g(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,a=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:f,w:o,d:u,D:l,h:a,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",x={};x[M]=m;var y=function(t){return t instanceof D},w=function t(e,n,r){var i;if(!e)return M;if("string"==typeof e){var s=e.toLowerCase();x[s]&&(i=s),n&&(x[s]=n,i=s);var a=e.split("-");if(!i&&a.length>1)return t(a[0])}else{var u=e.name;x[u]=e,i=u}return!r&&i&&(M=i),i||!r&&M},j=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new D(n)},S=v;S.l=w,S.i=y,S.w=function(t,e){return j(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var D=function(){function m(t){this.$L=w(t.locale,null,!0),this.parse(t)}var g=m.prototype;return g.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return S},g.isValid=function(){return!(this.$d.toString()===d)},g.isSame=function(t,e){var n=j(t);return this.startOf(e)<=n&&n<=this.endOf(e)},g.isAfter=function(t,e){return j(t)<this.startOf(e)},g.isBefore=function(t,e){return this.endOf(e)<j(t)},g.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,e){var n=this,r=!!S.u(e)||e,h=S.p(t),d=function(t,e){var i=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(u)},p=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},$=this.$W,m=this.$M,g=this.$D,v="set"+(this.$u?"UTC":"");switch(h){case f:return r?d(1,0):d(31,11);case c:return r?d(1,m):d(0,m+1);case o:var M=this.$locale().weekStart||0,x=($<M?$+7:$)-M;return d(r?g-x:g+(6-x),m);case u:case l:return p(v+"Hours",0);case a:return p(v+"Minutes",1);case s:return p(v+"Seconds",2);case i:return p(v+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(t,e){var n,o=S.p(t),h="set"+(this.$u?"UTC":""),d=(n={},n[u]=h+"Date",n[l]=h+"Date",n[c]=h+"Month",n[f]=h+"FullYear",n[a]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],p=o===u?this.$D+(e-this.$W):e;if(o===c||o===f){var $=this.clone().set(l,1);$.$d[d](p),$.init(),this.$d=$.set(l,Math.min(this.$D,$.daysInMonth())).$d}else d&&this.$d[d](p);return this.init(),this},g.set=function(t,e){return this.clone().$set(t,e)},g.get=function(t){return this[S.p(t)]()},g.add=function(r,h){var l,d=this;r=Number(r);var p=S.p(h),$=function(t){var e=j(d);return S.w(e.date(e.date()+Math.round(t*r)),d)};if(p===c)return this.set(c,this.$M+r);if(p===f)return this.set(f,this.$y+r);if(p===u)return $(1);if(p===o)return $(7);var m=(l={},l[s]=e,l[a]=n,l[i]=t,l)[p]||1,g=this.$d.getTime()+r*m;return S.w(g,this)},g.subtract=function(t,e){return this.add(-1*t,e)},g.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=S.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,c=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},f=function(t){return S.s(s%12||12,t,"0")},l=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:S.s(u+1,2,"0"),MMM:h(n.monthsShort,u,c,3),MMMM:h(c,u),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:f(1),hh:f(2),a:l(s,a,!0),A:l(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:i};return r.replace($,(function(t,e){return e||p[t]||i.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(r,l,d){var p,$=S.p(l),m=j(r),g=(m.utcOffset()-this.utcOffset())*e,v=this-m,M=S.m(this,m);return M=(p={},p[f]=M/12,p[c]=M,p[h]=M/3,p[o]=(v-g)/6048e5,p[u]=(v-g)/864e5,p[a]=v/n,p[s]=v/e,p[i]=v/t,p)[$]||v,d?M:S.a(M)},g.daysInMonth=function(){return this.endOf(c).$D},g.$locale=function(){return x[this.$L]},g.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},g.clone=function(){return S.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},m}(),_=D.prototype;return j.prototype=_,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",c],["$y",f],["$D",l]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),j.extend=function(t,e){return t.$i||(t(e,D,j),t.$i=!0),j},j.locale=w,j.isDayjs=y,j.unix=function(t){return j(1e3*t)},j.en=x[M],j.Ls=x,j.p={},j}()},9212:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(4228)}])},4228:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return c}});var r=n(5893),i=n(7294),s=n(7484),a=n.n(s),u=n(4345),o=n(3256),c=!0;e.default=function(t){var e=new Map;return t.posts.map((function(t){e.set(a()(t.publishedAt).format("YYYYMM"),a()(t.publishedAt).format("MMMM YYYY"))})),(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(u.U,{}),(0,r.jsxs)("div",{className:"grid grid-cols-8",children:[(0,r.jsxs)("main",{className:"col-span-6",children:[(0,r.jsx)("h1",{children:"About the rage."}),(0,r.jsx)("p",{children:"\u201cThe point is, ladies and gentleman, that rage \u2013 for lack of a better word \u2014 is good."}),(0,r.jsx)("p",{children:"Rage is right."}),(0,r.jsx)("p",{children:"Rage works."}),(0,r.jsx)("p",{children:"Rage clarifies, cuts through, and captures the essence of the evolutionary spirit."}),(0,r.jsx)("p",{children:"Rage, in all of its forms \u2014 Rage for life, for money, for love, knowledge \u2014 has marked the upward surge of mankind."}),(0,r.jsx)("p",{children:"And Rage\u2013 you mark my words \u2014 will not only save Teldar Paper, but that other malfunctioning corporation called the USA.\u201d"}),(0,r.jsx)("p",{children:"Would have been a much better speech, Mr Gekko\u2026"})]}),(0,r.jsx)("div",{className:"col-span-2",children:(0,r.jsx)(o.K,{posts:t.posts})})]})]})}},4345:function(t,e,n){"use strict";n.d(e,{U:function(){return a}});var r=n(5893),i=(n(7294),n(9008)),s=n.n(i);function a(t){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(s(),{children:[(0,r.jsxs)("title",{children:[t.headStr&&"".concat(t.headStr," - "),"It's Still Raining"]}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]})})}},3256:function(t,e,n){"use strict";n.d(e,{K:function(){return l}});var r=n(5893),i=(n(7294),n(1664)),s=n.n(i),a=n(7484),u=n.n(a),o=n(190);function c(t){var e=t.children;return(0,r.jsx)("li",{className:"list-disc list-inside",children:e})}function h(t){var e=t.children;return(0,r.jsx)("ul",{className:"pb-5",children:e})}var f=n(2660);function l(t){var e=new Map;return t.posts.map((function(t){e.set(u()(t.publishedAt).format("YYYYMM"),u()(t.publishedAt).format("MMMM YYYY"))})),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"col-span-2 mt-6",children:[(0,r.jsx)(o.x,{appearance:"h2",as:"h2",children:"Archives"}),(0,r.jsx)(h,{children:Array.from(e.keys()).map((function(t){return(0,r.jsx)(c,{children:(0,r.jsx)(s(),{href:"/archive/".concat(t),passHref:!0,children:(0,r.jsx)("a",{children:e.get(t)})})},"archive-".concat(t))}))}),(0,r.jsx)(o.x,{appearance:"h2",as:"h2",children:"Categories"}),(0,r.jsx)("ul",{children:Array.from(f.J.keys()).map((function(t){return(0,r.jsx)(c,{children:(0,r.jsx)(s(),{href:"/categories/".concat(t),passHref:!0,children:(0,r.jsx)("a",{children:f.J.get(t)})})},"rating-".concat(t))}))})]})})}},190:function(t,e,n){"use strict";n.d(e,{x:function(){return a}});var r=n(4924),i=n(5893),s=n(6010);function a(t){var e,n=t.children,a=t.appearance,u=void 0===a?"body":a,o=t.as,c=void 0===o?"p":o;return(0,i.jsx)(c,{className:(0,s.Z)((e={},(0,r.Z)(e,"text-2xl font-bold mt-12","h1"===u),(0,r.Z)(e,"font-bold","h2"===u),(0,r.Z)(e,"text-sm text-slate-600 mb-6","small"===u),e)),children:n})}},2660:function(t,e,n){"use strict";n.d(e,{J:function(){return r}});var r=new Map([["1","Incandescent Rage"],["2","Apoplectic"],["3","Furious"],["4","Enraged"],["5","Angry"]])},9008:function(t,e,n){t.exports=n(5443)}},function(t){t.O(0,[774,888,179],(function(){return e=9212,t(t.s=e);var e}));var e=t.O();_N_E=e}]);