(this.webpackJsonpbootcamp=this.webpackJsonpbootcamp||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/react.b552b736.png"},34:function(e,t,a){e.exports=a(73)},39:function(e,t,a){},40:function(e,t,a){},48:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(28),c=a.n(r),i=(a(39),a(40),a(8)),o=a(29),u=a(13),m=a(30),s=a.n(m),d=(a(48),a(10)),p=a.n(d);var E=function(){var e=Object(n.useState)([{}]),t=Object(i.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){p.a.get("".concat("https://educacion-remota.herokuapp.com/","/cards")).then((function(e){r(e.data.data),console.log(a),console.log(e.data.data)}))}),[]);var c=l.a.createElement("img",{src:s.a,alt:"Card",height:"100",width:"100"}),m=l.a.createElement("span",null,l.a.createElement(u.Button,{label:"Learn"}),l.a.createElement("a",{href:"https://drive.google.com/drive/",target:"_blank"},l.a.createElement(u.Button,{label:"Site"})));return l.a.createElement(o.Card,{title:"Advanced Card",subTitle:"Subtitle",style:{width:"360px"},className:"card",footer:m,header:c},l.a.createElement("div",{className:"contenido"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"))};a(66);var v=function(){return l.a.createElement("div",{className:"topnav"},l.a.createElement("a",{className:"active",href:"#home"},"Home"),l.a.createElement("a",{href:"form"},"Form"),l.a.createElement("a",{href:"#contact"},"Contacto"))},f=a(11),b=a(14),g=(a(67),function(e){var t=e.subtitle,a=e.title,n=e.description,r=e.link,c=e.onChange,i=e.onSubmit;return l.a.createElement("div",{className:"form-container"},l.a.createElement("label",null,"Title:"),l.a.createElement("input",{type:"text",value:a,placeholder:"Title",onChange:function(e){return c("title",e.target.value)}}),l.a.createElement("label",null,"Sub Title:"),l.a.createElement("input",{type:"text",value:t,placeholder:"Subtitle",onChange:function(e){return c("subtitle",e.target.value)}}),l.a.createElement("label",null,"Description:"),l.a.createElement("textarea",{value:n,placeholder:"Description",onChange:function(e){return c("description",e.target.value)}}),l.a.createElement("label",null,"Link:"),l.a.createElement("textarea",{value:r,placeholder:"Link",onChange:function(e){return c("link",e.target.value)}}),l.a.createElement("button",{onClick:function(e){return i(e.target)}},"Cargar"))}),h=(a(68),function(e){var t=e.handleImageUpload,a=Object(n.useState)(!1),r=Object(i.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(null),m=Object(i.a)(u,2),s=m[0],d=m[1];return l.a.createElement("div",{className:"form-img-container",showImg:!0},l.a.createElement("div",{className:"preview-container"},l.a.createElement("img",{src:s||"",alt:"Preview Image"}),l.a.createElement("div",{style:{display:"".concat(c?"none":"block")}},"preview")),l.a.createElement("input",{type:"file",name:"inputFile",onChange:function(e){var a=e.target.files[0],n=new FileReader;a?(n.addEventListener("load",(function(){d(n.result),o(!0),t({file:a,base64string:n.result})})),n.readAsDataURL(a)):o(!1)}}))}),k=(a(69),function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"form"},l.a.createElement(g,{title:a.title,subtitle:a.subtitle,description:a.description,link:a.link,onChange:function(e,t){return r(Object(b.a)({},a,Object(f.a)({},e,t)))},onSubmit:function(e){p.a.post("".concat("https://educacion-remota.herokuapp.com/","/cards"),{title:a.title,subtitle:a.subtitle,description:a.description,link:a.link,image:a.image.base64string})}}),l.a.createElement(h,{handleImageUpload:function(e){r(Object(b.a)({},a,{image:e})),console.log(a)}}))});var w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"app-container"},l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",null,l.a.createElement(E,null))),l.a.createElement("div",{className:"app-container"},l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",null,l.a.createElement(E,null)),l.a.createElement("div",null,l.a.createElement(E,null))))},C=a(31),j=a(6);var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,null),l.a.createElement(C.a,null,l.a.createElement(j.a,{path:"/",exact:!0,component:w}),l.a.createElement(j.a,{path:"/form",exact:!0,component:k})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.b80a1f83.chunk.js.map