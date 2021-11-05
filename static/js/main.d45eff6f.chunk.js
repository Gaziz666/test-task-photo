(this["webpackJsonptest-task-photo"]=this["webpackJsonptest-task-photo"]||[]).push([[0],{115:function(e,t,n){"use strict";n.r(t);var c,r,o,i,a,s,l,j,u,d,b,h,x,O,p,f,g,m=n(0),v=n.n(m),y=n(40),C=n.n(y),w=n(36),k=(n(97),n.p,n.p,n(43)),P=n.n(k),I=n(55),S=n(13),E=n(17),N=n(14),z=n(15),D=z.a.div(c||(c=Object(N.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  height: calc(100vh - 10rem);\n  overflow: auto;\n\n  > div {\n    margin: 1rem;\n  }\n"]))),M=v.a.createContext({boxCount:10,pageNumber:0}),B=z.a.button(r||(r=Object(N.a)(["\n  position: relative;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n  text-align: center;\n  line-height: 1.5rem;\n  font-weight: lighter;\n  outline: none;\n  white-space: nowrap;\n  font-size: 1rem;\n  border: none;\n  border-radius: 15px;\n  background: #113cfc;\n  color: #fff;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n\n  &:hover {\n    -webkit-box-shadow: 4px 6px 16px -6px rgba(0, 0, 0, 0.62);\n    box-shadow: 4px 6px 16px -6px rgba(0, 0, 0, 0.62);\n    transform: scale(1.05);\n  }\n"]))),T=n(1),F=function(e){var t=e.children,n=e.onClick;return Object(T.jsx)(B,{onClick:n,children:t})},G=z.a.div(o||(o=Object(N.a)(["\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  visibility: ",";\n  transition: all 0.3s ease;\n  z-index: 100;\n"])),(function(e){return e.isOpen?"visible":"hidden"})),J=z.a.div(i||(i=Object(N.a)(["\n  margin: auto;\n  z-index: 2;\n  background-color: #69dadb;\n  border-radius: 1rem;\n  padding: 1rem;\n  border: 2px solid black;\n"]))),_=z.a.div(a||(a=Object(N.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n"]))),A=function(e){var t=e.children,n=e.isOpen,c=e.onClose;return Object(T.jsxs)(G,{isOpen:n,children:[Object(T.jsx)(J,{children:t}),Object(T.jsx)(_,{onClick:function(){return c(!1)}})]})},R=z.a.div(s||(s=Object(N.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n"])),(function(e){return e.center?"center":"flex-start"})),U=z.a.h1(l||(l=Object(N.a)([""]))),W=function(e){var t=e.children,n=e.as,c=e.center,r=void 0===c||c;return Object(T.jsx)(R,{center:r,children:Object(T.jsx)(U,{as:n,children:t})})},Y=z.a.div(j||(j=Object(N.a)(["\n  padding-top: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n"]))),q=function(e){var t=e.isOpen,n=e.entityId,c=e.onClose,r=Object(m.useContext)(M).setContextPhoto;return Object(T.jsxs)(A,{isOpen:t,onClose:c,children:[Object(T.jsxs)(W,{as:"h3",children:["Do you really want to delete the Image ",n]}),Object(T.jsxs)(Y,{children:[Object(T.jsx)(F,{onClick:function(){c(!1),r((function(e){return e.filter((function(e){return e.id!==n}))}))},children:"Yes"}),Object(T.jsx)(F,{onClick:function(){return c(!1)},children:"No"})]})]})},H=n(166),K=n(167),L=n(165),Q=n(164),V=n(169),X=n(170),Z=n(171),$=function(e){var t=e.url,n=e.id,c=e.title,r=e.onDeleteModal,o=e.route;return Object(T.jsxs)(H.a,{sx:{maxWidth:300},children:[Object(T.jsx)(w.b,{to:o,children:Object(T.jsxs)(V.a,{children:[Object(T.jsx)(L.a,{component:"img",height:"300",image:t,alt:"image_".concat(n)}),Object(T.jsx)(K.a,{children:Object(T.jsx)(Q.a,{variant:"body2",color:"text.secondary",children:c})})]})}),Object(T.jsx)(X.a,{children:Object(T.jsx)(Z.a,{size:"small",color:"primary",onClick:r,children:"Delete"})})]})},ee=function(e){var t=e.url,n=e.id,c=e.title,r=e.openDeleteModal,o=e.setEntityId,i=Object(E.i)().path;return Object(T.jsx)($,{url:t,id:n,title:c,onDeleteModal:function(){r(!0),o(n)},route:"".concat(i,"/").concat(n,"/view")})},te="https://jsonplaceholder.typicode.com/photos",ne=function(){var e=Object(E.h)(),t=e.photoId,n=e.type,c=Object(E.g)(),r=Object(m.useState)(!1),o=Object(S.a)(r,2),i=o[0],a=o[1],s=Object(m.useState)(),l=Object(S.a)(s,2),j=l[0],u=l[1];Object(m.useEffect)((function(){if("view"===n){var e=function(){var e=Object(I.a)(P.a.mark((function e(){var n,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(te,"?id=").concat(t),{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:(c=e.sent)&&(u(c[0]),a(!0));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}}),[t,n]);return Object(T.jsxs)(A,{isOpen:i,onClose:function(){a(!1),c.push("/album")},children:[Object(T.jsx)(L.a,{component:"img",height:"600",image:null===j||void 0===j?void 0:j.url,alt:"image_".concat(null===j||void 0===j?void 0:j.id)}),Object(T.jsx)(W,{as:"h3",children:null===j||void 0===j?void 0:j.title})]})},ce=function(){var e=Object(m.useContext)(M),t=e.contextPhoto,n=e.boxCount,c=e.pageNumber,r=Object(m.useState)(!1),o=Object(S.a)(r,2),i=o[0],a=o[1],s=Object(m.useState)(0),l=Object(S.a)(s,2),j=l[0],u=l[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(D,{children:t.map((function(e,t){if(t>=c*n&&t<(c+1)*n)return Object(T.jsx)(ee,{url:e.thumbnailUrl,id:e.id,title:e.title,openDeleteModal:a,setEntityId:u},e.id)}))}),Object(T.jsx)(q,{isOpen:i,onClose:a,entityId:j}),Object(T.jsx)(ne,{})]})},re=n(161),oe=z.a.div(u||(u=Object(N.a)(["\n  margin-right: 1rem;\n"]))),ie=function(){var e=Object(m.useContext)(M),t=e.contextPhoto,n=e.boxCount,c=e.pageNumber,r=e.setPageNumber,o=e.setBoxCount,i=t.length;return Object(T.jsx)(oe,{children:Object(T.jsx)(re.a,{component:"div",count:i,page:c,onPageChange:function(e,t){r(t)},rowsPerPage:n,onRowsPerPageChange:function(e){o(parseInt(e.target.value,10)),r(0)}})})},ae=z.a.div(d||(d=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0.5rem 0.5rem;\n"]))),se=function(e){var t=e.children;return Object(T.jsx)(ae,{children:t})},le=n(87),je=n.n(le),ue=z.a.input(b||(b=Object(N.a)(["\n  padding: 0.5rem 0.5rem;\n  text-decoration: none;\n  text-align: left;\n  font-weight: lighter;\n  outline: none;\n  white-space: nowrap;\n  font-size: 1rem;\n  border-radius: 1rem;\n  border: 2px solid black;\n  background: #1597e5;\n  color: #000;\n"]))),de=function(e){var t=e.placeholder,n=e.type,c=void 0===n?"text":n,r=e.onChange;return Object(T.jsx)(ue,{placeholder:t,type:c,onChange:r})},be=z.a.div(h||(h=Object(N.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]))),he=function(e){var t=e.onChange;return Object(T.jsxs)(be,{children:[Object(T.jsx)(je.a,{}),Object(T.jsx)(de,{placeholder:"Search...",onChange:t})]})},xe=z.a.div(x||(x=Object(N.a)([""]))),Oe=function(){var e=Object(m.useState)(""),t=Object(S.a)(e,2),n=t[0],c=t[1],r=Object(m.useContext)(M),o=r.setContextPhoto,i=r.allPhoto,a=r.setPageNumber;return Object(m.useEffect)((function(){o(""===n?i:function(){return i.filter((function(e){return e.albumId===+n}))}),a(0)}),[n]),Object(T.jsx)(xe,{children:Object(T.jsx)(he,{onChange:function(e){c(e.currentTarget.value)}})})},pe=function(){return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(se,{children:Object(T.jsx)(Oe,{})}),Object(T.jsx)(ce,{}),Object(T.jsx)(ie,{})]})},fe=z.a.div(O||(O=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  background-color: #1597e5;\n"]))),ge=z.a.div(p||(p=Object(N.a)(["\n  height: 3rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  color: #fff;\n  background-color: #113cfc;\n"]))),me=z.a.div(f||(f=Object(N.a)(["\n  flex: 1;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n"]))),ve=z.a.div(g||(g=Object(N.a)(["\n  display: flex;\n"]))),ye=function(){return Object(T.jsx)(ve,{children:Object(T.jsx)(W,{children:"My test App"})})},Ce=function(e){var t=e.children;return Object(T.jsxs)(fe,{children:[Object(T.jsx)(ge,{children:Object(T.jsx)(ye,{})}),Object(T.jsx)(me,{children:t})]})},we=function(){var e=Object(E.i)().path;return Object(T.jsx)(Ce,{children:Object(T.jsxs)(E.d,{children:[Object(T.jsx)(E.b,{exact:!0,path:"".concat(e),component:pe}),Object(T.jsx)(E.b,{exact:!0,path:"".concat(e,"/:photoId/:type"),component:pe})]})})},ke=function(){var e=Object(m.useState)([]),t=Object(S.a)(e,2),n=t[0],c=t[1],r=Object(m.useState)([]),o=Object(S.a)(r,2),i=o[0],a=o[1],s=Object(m.useState)(10),l=Object(S.a)(s,2),j=l[0],u=l[1],d=Object(m.useState)(0),b=Object(S.a)(d,2),h=b[0],x=b[1];return Object(m.useEffect)((function(){var e=function(){var e=Object(I.a)(P.a.mark((function e(){var t,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(te,{method:"GET"});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.json();case 7:n=e.sent,c(n),a(n),e.next=13;break;case 12:c([]);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(T.jsx)(M.Provider,{value:{contextPhoto:n,setContextPhoto:c,boxCount:j,pageNumber:h,setPageNumber:x,setBoxCount:u,allPhoto:i},children:Object(T.jsxs)(E.d,{children:[Object(T.jsx)(E.b,{exact:!0,path:"/",render:function(){return Object(T.jsx)(E.a,{to:"/album"})}}),Object(T.jsx)(E.b,{path:"/album",component:we})]})})};C.a.render(Object(T.jsx)(w.a,{children:Object(T.jsx)(ke,{})}),document.getElementById("root"))},97:function(e,t,n){}},[[115,1,2]]]);
//# sourceMappingURL=main.d45eff6f.chunk.js.map