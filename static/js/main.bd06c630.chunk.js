(this.webpackJsonpmypoftfolio=this.webpackJsonpmypoftfolio||[]).push([[0],{24:function(e,t,a){e.exports=a(40)},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(10),c=a(6),r=function(e){var t=e.date,a=e.time;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{padding:2,background:"rgba(33,150,243,.05)",color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"last login: ",t," ",a," on ttys000",o.a.createElement("span",{style:{padding:2,background:"lightgrey",color:"#000",fontFamily:"Monaco",fontSize:12,marginLeft:100,textAlign:"right"}},"MyOS")),o.a.createElement("div",{className:"weicomeMessageBox"},o.a.createElement("div",{className:"welcomeMessage"},o.a.createElement("p",null,'please type => "start" to begin '),o.a.createElement("p",null,'To see available commands => "--help" '))))},i=a(13),s=a(7),m=["--start","ls","echo","clear","--help"],u=function(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],c=a[1],r=m.includes(e.outputData),u=e.outputData.split(/ (.*)/);return Object(n.useEffect)((function(){switch(u[0]){case"ls":return c((function(e){return[].concat(Object(i.a)(e),["etc","opt","bin","./sadikerisen",".home"])}));case"echo":return c(u.slice(1)[0]);case"--help":return c(m);default:return c(["cannot find the command"])}}),[]),r?o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"> "),Array.isArray(l)?l.sort().map((function(e,t){return o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12},key:t},e," ")})):o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"value")):o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"> "),o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},l))},d=function(e){return null!==e?e.source.messages.map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"terminal-output"},o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,background:"rgba(33,150,243,1)",color:"whitesmoke",fontFamily:"Monaco",fontSize:12},key:t},">>"),o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},e.command)),o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,background:"lightgrey",color:"#000",fontFamily:"Monaco",fontSize:12}},"at ",e.timestamp))),o.a.createElement(u,{outputData:e.command}))})):null},p=function(e){var t=e.time,a=Object(n.useState)([]),l=Object(s.a)(a,2),r=l[0],i=l[1],m=Object(n.useState)(!1),u=Object(s.a)(m,2),d=u[0],p=u[1],f=Object(n.useState)(0),g=Object(s.a)(f,2),E=g[0],y=g[1],v=Object(c.b)(),h={id:E,timestamp:t,command:r[0]};return o.a.createElement("div",{className:"terminal-input"},o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,background:"rgba(255,235,59,1)",color:"#000",fontFamily:"Monaco",fontSize:12}},"user"),o.a.createElement("span",{style:{padding:2,background:"rgba(33,150,243,1)",color:"#000",fontFamily:"Monaco",fontSize:12}},"~/")),o.a.createElement("input",{className:"InputField",onChange:function(e){!function(e){e.preventDefault();e.target.value.length>35?p(!0):p(!1);i([e.target.value])}(e)},value:r,onKeyDown:function(e){var t;"Enter"===(t=e).key&&""!==t.target.value&&(y(E+1),v({type:"ADD_MESSAGE",payload:h}),p(!1),i([]))}}),o.a.createElement("p",null,o.a.createElement("span",{style:{padding:2,visibility:d?"hidden":d,background:"lightgrey",color:"#000",fontFamily:"Monaco",fontSize:12}},"at ",t)))};var f=function(){var e=(new Date).toLocaleTimeString(),t=(new Date).toLocaleDateString(),a=Object(c.c)((function(e){return{messages:e.messages}}));return o.a.createElement("div",null,o.a.createElement(r,{date:t,time:e}),o.a.createElement("div",{className:"terminal"},o.a.createElement(d,{source:a}),o.a.createElement(p,{time:e})))};a(33);var g=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(4),y={messages:[]};var v=Object(E.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.messages,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return[].concat(Object(i.a)(e),[t.payload]);default:return e}}}),h=a(22),b=a.n(h),w=a(23),S=function(e){var t="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||E.d;return Object(E.e)(v,e,t(Object(E.a)(w.a,b()())))},k=a(15),O=(a(38),S());Object(l.render)(o.a.createElement(c.a,{store:O},o.a.createElement(k.a,null,o.a.createElement(g,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.bd06c630.chunk.js.map