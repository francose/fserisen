(this.webpackJsonpmypoftfolio=this.webpackJsonpmypoftfolio||[]).push([[0],{33:function(e,t,n){e.exports=n(48)},40:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=(n(54),n(19)),i=n(50),l=n(51),s=n(52),u=n(53),m=n(26),f=n.n(m),d=function(e){return function(e,t){Object(a.useEffect)((function(){return window.addEventListener(e,t),function(){return window.removeEventListener(e,t)}}),[e,t])}("keypress",e)},E=function(e){var t=e.command,n=e.terminal,o=Object(a.useState)(!0),l=Object(c.a)(o,2),s=(l[0],l[1]);return Object(a.useEffect)((function(){return setTimeout((function(){s(!1)}),8e3),clearTimeout(s(!0))}),[]),r.a.createElement(i.a,{style:b.terminal},r.a.createElement("div",{style:b.terminalText},r.a.createElement("span",{style:b.terminalTextSpan},n[0])),r.a.createElement("div",{style:b.terminalText},r.a.createElement(f.a,{options:{autoStart:!0},onInit:function(e){e.typeString(t).start()}})))},p=function(){var e=Object(a.useState)(!0),t=Object(c.a)(e,2),n=t[0],o=t[1];return d((function(e){return e?o(!1):null})),r.a.createElement(l.a,{fluid:!0},r.a.createElement(s.a,{className:"justify-content-lg-center"},r.a.createElement(u.a,{xs:!0,lg:"6"},r.a.createElement(i.a,{style:b.terminal},r.a.createElement("div",{style:b.terminalText},r.a.createElement("span",{style:b.terminalTextSpan},"~$")),r.a.createElement("input",{size:"30",maxLength:"10",style:b.inputField,defaultValue:"press any key to start..."})))),n?null:r.a.createElement(s.a,{className:"justify-content-lg-center",style:{marginTop:-150}},r.a.createElement(u.a,{xs:!0,lg:"6"},r.a.createElement(E,{terminal:["~$","guest_user:"],command:" sudo ./fse_dev_OS.sh"}),";")))},b={terminal:{background:"transparent",borderRadius:0,display:"flex",justifyContent:"'flex-start'"},terminalText:{color:"#70e224",fontFamily:"monospace",padding:5,fontSize:16},terminalTextSpan:{color:"#0b79fc",fontSize:16},inputField:{background:"transparent",border:"none",outline:"none",caretColor:"#70e224",color:"#70e224",fontFamily:"monospace",fontSize:16}};n(40);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(7),g={subscriber:[]};var w=Object(v.c)({subcribers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.subscriber,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_SUBSCRIBER":return t.subscriber;default:return e}}}),O=n(28),S=n.n(O),h=n(29),j=function(e){var t="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d;return Object(v.e)(w,e,t(Object(v.a)(h.a,S()())))},x=n(30),T=n(15),_=(n(46),j());Object(o.render)(r.a.createElement(x.a,{store:_},r.a.createElement(T.a,null,r.a.createElement(y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.06e2bd4a.chunk.js.map