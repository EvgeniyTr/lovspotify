(function(t){function e(e){for(var i,s,c=e[0],r=e[1],d=e[2],u=0,f=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var l=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),n=a.n(i);n.a},"1c38":function(t,e,a){},4622:function(t,e,a){t.exports=a.p+"img/github_100x100.04475a48.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("SpotifyHeader",{staticClass:"pb-5"}),a("SpotifyMain",{directives:[{name:"show",rawName:"v-show",value:t.connected,expression:"connected"}],staticClass:"pb-5",attrs:{spotify:t.spotify}}),a("SpotifyDisconnected",{directives:[{name:"show",rawName:"v-show",value:!t.connected,expression:"!connected"}]})],1)},o=[],s=(a("ab8b"),a("2dd8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-header"},[i("b-navbar",{attrs:{type:"dark",variant:"dark"}},[i("b-navbar-nav",[i("b-navbar-brand",{attrs:{href:"#"}},[i("img",{staticClass:"pr-3",attrs:{src:a("e55d"),alt:""}}),t._v("Lovspotify ")])],1),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-nav-item-dropdown",{attrs:{text:"Settings",right:""}},[i("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-themes",modifiers:{"modal-themes":!0}}],attrs:{href:"#"}},[t._v("Themes")]),i("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-settings",modifiers:{"modal-settings":!0}}],attrs:{href:"#"},on:{click:t.getConfig}},[t._v("Device")]),i("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-about",modifiers:{"modal-about":!0}}],attrs:{href:"#"}},[t._v("About")])],1)],1)],1),i("b-modal",{attrs:{id:"modal-themes",title:"Select a theme"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-auto"},[i("img",{attrs:{src:a("6d8d"),alt:""}})]),i("div",{staticClass:"col-auto"},[i("select",{staticStyle:{background:"lavender","min-width":"300px","max-width":"300px"}},[t._v(' v-model="themes"> '),t._l(t.themes,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)])])])]),i("b-modal",{attrs:{id:"modal-settings","ok-title":"Restart",title:"Local Settings"},on:{ok:t.setConfig}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v(" Config-File: ")]),i("div",{staticClass:"col-md-8"},[i("code",[t._v("/opt/lovspotify/config.toml")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v(" Device-Name: ")]),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.configdata.deviceName,expression:"configdata.deviceName"}],staticStyle:{background:"lavender",border:"none"},attrs:{type:"text",name:"deviceName",placeholder:"Device Name"},domProps:{value:t.configdata.deviceName},on:{input:function(e){e.target.composing||t.$set(t.configdata,"deviceName",e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v(" Device-Type: ")]),i("div",{staticClass:"col-md-4"},[t._v(" "+t._s(t.configdata.deviceType)+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v(" Device-Host: ")]),i("div",{staticClass:"col-md-4"},[t._v(" "+t._s(t.configdata.url)+" ")])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"},[t._v(" Mixers: ")]),i("div",{staticClass:"col-md-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.configdata.chosenMixer,expression:"configdata.chosenMixer"}],staticStyle:{background:"lavender","max-width":"300px"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.configdata,"chosenMixer",e.target.multiple?a:a[0])}}},t._l(t.configdata.availableMixers,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])])])]),i("b-modal",{attrs:{id:"modal-about",title:"About Lovspotify"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-auto"},[i("a",{attrs:{href:"https://github.com/spocon/lovspotify",target:"_blank"}},[i("img",{attrs:{src:a("4622"),alt:""}}),t._v(" Spocon (Spotify Connect Client)")])])])])])],1)}),c=[],r=a("bc3a").default,d={name:"MainHeader",props:{msg:String},data:function(){return{show:!0,configdata:[],selectedMixer:"",themes:["Default"]}},methods:{getConfig:function(){var t=this;r.get("/config/data").then((function(e){t.configdata=e.data})).catch((function(t){t.response.status}))},setConfig:function(){r.post("/config/data",this.configdata).catch((function(t){t.response.status}))}}},l=d,u=(a("c0ab"),a("2877")),f=Object(u["a"])(l,s,c,!1,null,"578ff7b7",null),v=f.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"MainMiddle"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-2 "}),a("div",{staticClass:"col-md-5 "},[a("div",{staticClass:"container pl-xl-5"},[a("div",{staticClass:"row pb-lg-5"},[a("div",{staticClass:"col-auto"},[a("font-awesome-icon",{attrs:{icon:"music",inverse:"",size:"2x"}})],1),a("div",{staticClass:"col-auto"},[t._v(" "+t._s(t.spotify.track.name)+" ")])]),a("div",{staticClass:"row pb-lg-5"},[a("div",{staticClass:"col-auto"},[a("font-awesome-icon",{attrs:{icon:"user-tie",inverse:"",size:"2x"}})],1),a("div",{staticClass:"col-auto"},[t._v(" "+t._s(t.spotify.track.artist[0].name)+" ")])]),a("div",{staticClass:"row "},[a("div",{staticClass:"col-auto"},[a("font-awesome-icon",{attrs:{icon:"clock",inverse:"",size:"2x"}})],1),a("div",{staticClass:"col-auto"},[t._v(" "+t._s(t.time)+" ")])])])]),a("div",{staticClass:"col-md-3"},[a("input",{attrs:{type:"image",src:"https://i.scdn.co/image/"+t.spotify.image.key,alt:""}})]),a("div",{staticClass:"col-md-2"})])]),a("div",{staticClass:"percentBar"},[a("div",{style:{width:t.songPercent+"%"},attrs:{id:"percent"}})])])},m=[],g=(a("a9e3"),{name:"MainMiddle",props:{spotify:{type:Object,default:function(){return{track:{name:"No Connection"}}}}},watch:{spotify:function(){this.getCurrentTime()}},data:function(){return{time:String,songPercent:Number}},methods:{getCurrentTime:function(){this.songPercent=this.spotify.trackTime/this.spotify.track.duration*100,this.time=h(this.spotify.trackTime,this.spotify.track.duration)}}});function h(t,e){return t.toHHMMSS()+" / "+e.toHHMMSS()}Number.prototype.toHHMMSS=function(){var t=parseInt(this,10)/1e3,e=Math.floor(t/3600),a=Math.floor((t-3600*e)/60),i=Math.floor(t-3600*e-60*a);return e<10&&(e="0"+e),a<10&&(a="0"+a),i<10&&(i="0"+i),e+":"+a+":"+i};var b=g,y=(a("ff77"),Object(u["a"])(b,p,m,!1,null,null,null)),C=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"clock"}},[a("p",{staticClass:"date"},[t._v(t._s(t.date))]),a("p",{staticClass:"time"},[t._v(t._s(t.time))]),a("h1",{staticStyle:{color:"white"}},[t._v("Spotify disconnected")])])},w=[],x=(a("fb6a"),{name:"MainDisconnected",data:function(){return{time:"",date:""}},methods:{updateTime:function(){var t=new Date,e=["SUN","MON","TUE","WED","THU","FRI","SAT"];this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+e[t.getDay()]},zeroPadding:function(t,e){for(var a="",i=0;i<e;i++)a+="0";return(a+t).slice(-e)}},created:function(){this.updateTime(),setInterval(function(){this.updateTime()}.bind(this),1100)}}),S=x,M=(a("f983"),Object(u["a"])(S,_,w,!1,null,"eefac6a4",null)),k=M.exports,P=a("bc3a").default,N={name:"App",title:function(){return"Lovspotify"},components:{SpotifyHeader:v,SpotifyMain:C,SpotifyDisconnected:k},data:function(){return{spotify:[],connected:Boolean}},methods:{getCurrentSong:function(){var t=this;P.get("/player/current").then((function(e){t.spotify=e.data,t.connected=!0})).catch((function(e){e.response.status,t.connected=!1}))},getTitle:function(t){var e=t.$options.title;if(e)return"function"===typeof e?e.call(t):e}},created:function(){var t=this.getTitle(this);t&&(document.title=t),this.getCurrentSong(),setInterval(function(){this.getCurrentSong()}.bind(this),1100)}},T=N,O=(a("034f"),Object(u["a"])(T,n,o,!1,null,null,null)),j=O.exports,D=a("5f5b"),H=a("b1e0"),z=a("ecee"),$=a("c074"),E=a("ad3d"),A=a("f2d1"),I=a("bc3a"),L=a.n(I);z["c"].add(A["a"],$["b"],$["c"],$["a"]),i["default"].config.productionTip=!1,i["default"].component("font-awesome-icon",E["a"]),i["default"].use(D["a"],H["a"]),i["default"].use(L.a),new i["default"]({render:function(t){return t(j)}}).$mount("#app")},"63a4":function(t,e,a){},"6d8d":function(t,e,a){t.exports=a.p+"img/lovspotify_100x100.1a1f1793.png"},"85ec":function(t,e,a){},"8c38":function(t,e,a){},c0ab:function(t,e,a){"use strict";var i=a("1c38"),n=a.n(i);n.a},e55d:function(t,e,a){t.exports=a.p+"img/lovspotify_50x50.45d39346.png"},f983:function(t,e,a){"use strict";var i=a("63a4"),n=a.n(i);n.a},ff77:function(t,e,a){"use strict";var i=a("8c38"),n=a.n(i);n.a}});
//# sourceMappingURL=app.c528b663.js.map