(this.webpackJsonpmypoftfolio=this.webpackJsonpmypoftfolio||[]).push([[0],{25:function(e,t,n){e.exports=n(41)},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),l=n(6),c=n(4),i=function(e){var t=e.date,n=e.time;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{padding:2,background:"rgba(33,150,243,.05)",color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"last login: ",t," ",n," on ttys000",o.a.createElement("span",{style:{padding:2,background:"lightgrey",color:"#000",fontFamily:"Monaco",fontSize:12,marginLeft:100,textAlign:"right"}},"MyOS")),o.a.createElement("div",{className:"weicomeMessageBox"},o.a.createElement("div",{className:"welcomeMessageNext"},["You can navigate through by typing available commands for example;"," to execute => .</filename>","to run a command --foo"].map((function(e){return o.a.createElement("p",null,e)}))),o.a.createElement("div",{className:"welcomeMessage"},o.a.createElement("p",null,'please type => "start" to begin '),o.a.createElement("p",null,'To see available commands => "--help" '))))},s=["start","ls","cd","echo","clear","--help"],m=["etc","opt","bin","./sadikerisen","home"],u=function(e){var t=Object(a.useState)([]),n=Object(l.a)(t,2),r=n[0],i=n[1],u=s.includes(e.outputData),d=e.outputData.toLowerCase().split(/ (.*)/),p=Object(c.b)();return Object(a.useEffect)((function(){var e=d[0];switch(e){case"ls":return i(m);case"echo":return i(d.slice(1)[0]);case"--help":return i(s);case"start":return p({type:"START",payload:!0}),i(["connecting..."]);case e.includes("cd")?e.toString():null:if(void 0!==d[1]){var t=function(e,t){if(void 0===t&&null!==t)return"wrong input";if(e.toString().split("").length!==t.toString().split("").length)return!1;for(var n in e.toString().split(""))return e.toString().split("")[n]===t.toString().split("")[n]}(d[1].toString(),m[m.indexOf(m.includes(d[1])?d[1].toString():null)]);return i(!0===t?["interpreter: Permission denied"]:["cd: no such file or directory: ".concat(d[1])])}return i(["".concat(e)]);default:return i(["cannot find the command"])}}),[]),u?o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"> "),Array.isArray(r)?r.sort().map((function(e,t){return o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12},key:t},e," ")})):o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"value")):o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},"> "),o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},r))},d=function(e){return null!==e?e.source.messages.map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"terminal-output"},o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,background:"rgba(33,150,243,1)",color:"whitesmoke",fontFamily:"Monaco",fontSize:12},key:t},">>"),o.a.createElement("span",{style:{padding:2,color:"whitesmoke",fontFamily:"Monaco",fontSize:12}},e.command)),o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,background:"lightgrey",color:"#000",fontFamily:"Monaco",fontSize:12}},"at ",e.timestamp))),o.a.createElement(u,{outputData:e.command}))})):null},p=function(e){var t=e.time,n=Object(a.useState)([]),r=Object(l.a)(n,2),i=r[0],s=r[1],m=Object(a.useState)(!1),u=Object(l.a)(m,2),d=u[0],p=u[1],g=Object(a.useState)(0),f=Object(l.a)(g,2),E=f[0],y=f[1],h=Object(c.b)(),v={id:E,timestamp:t,command:i[0]};return o.a.createElement("div",{className:"terminal-input"},o.a.createElement("div",null,o.a.createElement("span",{style:{padding:2,background:"rgba(255,235,59,1)",color:"#000",fontFamily:"Monaco",fontSize:12}},"user"),o.a.createElement("span",{style:{padding:2,background:"rgba(33,150,243,1)",color:"#000",fontFamily:"Monaco",fontSize:12}},"~/")),o.a.createElement("input",{className:"InputField",onChange:function(e){!function(e){e.preventDefault();e.target.value.length>35?p(!0):p(!1);s([e.target.value])}(e)},value:i,onKeyDown:function(e){var t;"Enter"===(t=e).key&&""!==t.target.value&&(y(E+1),h({type:"ADD_MESSAGE",payload:v}),p(!1),s([]))}}),o.a.createElement("p",null,o.a.createElement("span",{style:{padding:2,visibility:d?"hidden":d,background:"lightgrey",color:"#000",fontFamily:"Monaco",fontSize:12}},"at ",t)))},g=function(){return o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("h1",{style:{color:"white"}},"WELCOME"),o.a.createElement("p",{style:{color:"white"}},"This section is in development, please check back later on thank you very much."),o.a.createElement("p",{style:{color:"white"}},"Sadik Erisen"))},f=n(21),E=n.n(f),y=function(e){return Object(a.useEffect)((function(){return e.onChange(!0)}),[]),o.a.createElement("div",null,o.a.createElement("h1",null,o.a.createElement(E.a,{onInit:function(e){e.typeString("Please wait while loading...").pauseFor(4500).deleteAll().start()}})),o.a.createElement("div",{className:"LoaderBox"},o.a.createElement("div",{className:"loader"})))};var h=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],s=(new Date).toLocaleTimeString(),m=(new Date).toLocaleDateString(),u=Object(c.c)((function(e){return{messages:e.messages,redirect:e.redirect}}));return!0!==u.redirect?o.a.createElement("div",null,o.a.createElement(i,{date:m,time:s}),o.a.createElement("div",{className:"terminal"},o.a.createElement(d,{source:u}),o.a.createElement(p,{time:s}))):n?o.a.createElement(g,null):o.a.createElement(y,{onChange:function(e){setTimeout((function(){r(e)}),8e3)}})};n(34);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(5),S=n(24),w={messages:[],redirect:!1};var O=Object(b.c)({messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w.messages,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":return[].concat(Object(S.a)(e),[t.payload]);default:return e}},redirect:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w.redirect,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START":return e=t.payload;default:return e}}}),k=n(22),M=n.n(k),j=n(23),F=function(e){var t="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d;return Object(b.e)(O,e,t(Object(b.a)(j.a,M()())))},D=n(14),z=(n(39),F());Object(r.render)(o.a.createElement(c.a,{store:z},o.a.createElement(D.a,null,o.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c7d45893.chunk.js.map