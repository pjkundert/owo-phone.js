(function(t){function e(e){for(var o,l,r=e[0],i=e[1],c=e[2],u=0,p=[];u<r.length;u++)l=r[u],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&p.push(s[l][0]),s[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],o=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(o=!1)}o&&(n.splice(e--,1),t=l(l.s=a[0]))}return t}var o={},s={app:0},n=[];function l(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=o,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(a,o,function(e){return t[e]}.bind(null,o));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/owo-phone.js/v2/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=i;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);var o=a("2b0e"),s=(a("ab8b"),a("7b17"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"container",staticStyle:{height:"100%"},attrs:{id:"app"}},[e("div",{staticClass:"row",staticStyle:{height:"200px"}}),e("div",{staticClass:"row",staticStyle:{height:"100%"}},[e("div",{staticClass:"col-3"}),e("div",{staticClass:"col-6 well"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[e("form",{staticClass:"row g-3"},[e("div",{staticClass:"col-6"},[e("label",{staticClass:"visually-hidden",attrs:{for:"staticEmail2"}},[t._v("Phone")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"phone number"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),e("div",{staticClass:"col-3"},[t.isCall?t._e():e("a",{staticClass:"btn btn-primary col-12",on:{click:function(e){return t.call()}}},[t._v("Call")]),t.isCall?e("a",{staticClass:"btn btn-danger col-12",on:{click:function(e){return t.endCall()}}},[t._v("End")]):t._e()]),t._m(0)])])])]),e("div",{staticClass:"col-3"})]),t._m(1)])}),n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-3"},[e("button",{staticClass:"btn btn-outline-secondary col-12",attrs:{type:"button","data-bs-toggle":"modal","data-bs-target":"#staticBackdrop"}},[t._v(" Settings ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h1",{staticClass:"modal-title fs-5",attrs:{id:"staticBackdropLabel"}},[t._v("Settings")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),e("div",{staticClass:"modal-body"},[e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"Name"}},[t._v("Name")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"Name",placeholder:"Sergey"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"URI"}},[t._v("URI")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"URI",placeholder:"sip:100@host"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"AuthName"}},[t._v("Auth Name")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"AuthName",placeholder:"101"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"Password"}},[t._v("Password")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"Password",placeholder:"SecretPassword"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"WSServer"}},[t._v("WS Server")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"WSServer",placeholder:"wss://host:port/ws"}})]),e("div",{staticClass:"mb-3"},[e("label",{staticClass:"form-label",attrs:{for:"exampleFormControlTextarea1"}},[t._v("STUN / TURN")]),e("textarea",{staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"2",placeholder:"stun:stun.l.google.com:19302\n  turn:turn_host:19302,user,password"}})])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("Save")])])])])])}],l=a("9715"),r=a.n(l);r.a.debug.enable("JsSIP:*");var i={iceServers:[{urls:["turn:62.109.24.81:3478"],username:"user1",credential:"password1"}],iceTransportPolicy:"relay"};function c(t){if(t&&""!==t){var e={progress:function(t){console.log("call is in progress",t)},failed:function(t){console.log("call failed with cause: ",t)},ended:function(t){console.log("call ended with cause: ",t)},confirmed:function(t){console.log("call confirmed",t)},peerconnection:function(t){console.log("peerconnection",t),t.peerconnection.onaddstream=function(t){console.log(" *** addstream",t);var e=document.createElement("audio");document.body.appendChild(e),e.srcObject=t.stream,e.play()}}},a={eventHandlers:e,mediaConstraints:{audio:!0,video:!1},rtcpMuxPolicy:"negotiate",rtcOfferConstraints:{offerToReceiveAudio:!0},pcConfig:i};console.log("call");var o=p.call("sip:"+t+"@62.109.24.81",a);console.log("call",o)}}var d=new r.a.WebSocketInterface("wss://serge.dmitriev.fvds.ru:8089/ws"),u={sockets:[d],uri:"sip:103@62.109.24.81",password:"zxcv1234",register:!0,register_expires:120},p=new r.a.UA(u);p.start(),p.on("newRTCSession",(function(t){console.log("new session",t);var e={mediaConstraints:{audio:!0,video:!1},pcConfig:i},a=t.session;console.log("session",a,a.direction),a.on("accepted",(function(t){console.log("accepted",t)})),a.on("confirmed",(function(t){console.log("confirmed",t)})),a.on("ended",(function(){console.log("ended")})),a.on("failed",(function(){console.log("failed")})),a.on("peerconnection:createanswerfailed",(function(t){console.log("peerconnection:createanswerfailed",t)})),a.on("icecandidate",(function(t){console.log("icecandidate",t)})),a.on("getusermediafailed",(function(t){console.log("getusermediafailed",t)})),a.on("peerconnection",(function(t){console.log("peerconnection",t),t.peerconnection.onaddstream=function(t){console.log(" *** addstream",t);var e=document.createElement("audio");document.body.appendChild(e),e.srcObject=t.stream,e.play()}})),"incoming"===a.direction&&(console.log("incoming call, try answer"),a.answer(e))}));var f={name:"App",data(){return{phone:"",isCall:!1}},methods:{call(){c(this.phone),this.isCall=!0},endCall(){this.isCall=!1}}},m=f,b=a("2877"),v=Object(b["a"])(m,s,n,!1,null,null,null),C=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:t=>t(C)}).$mount("#app")}});
//# sourceMappingURL=app.980c8d30.js.map