(this["webpackJsonpgoit-react-hw-04-image-finder"]=this["webpackJsonpgoit-react-hw-04-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={overlay:"Modal_overlay__3WapF",modal:"Modal_modal__jkOX7"}},12:function(e,t,a){e.exports={button__box:"Button_button__box__2aBz7",button:"Button_button__3zLPr"}},13:function(e,t,a){e.exports={error__box:"ErrorView_error__box__-DQ3h",errorImg:"ErrorView_errorImg__rDy63"}},14:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__2ilN6",imageGalleryItem__image:"ImageGalleryItem_imageGalleryItem__image__3LB1L"}},16:function(e,t,a){e.exports={app:"App_app__1xEDg"}},5:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__XzpCb",searchForm:"Searchbar_searchForm__30ahr",searchForm__button:"Searchbar_searchForm__button__1p4t0",searchForm__button__label:"Searchbar_searchForm__button__label__2K3o8",searchForm__input:"Searchbar_searchForm__input__C7-uy"}},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),o=a(4),l=a.n(o),s=a(3),i=a(8),m=a(16),u=a.n(m),b=a(5),_=a.n(b),j=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(s.a)(a,2),o=n[0],l=n[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("header",{className:_.a.searchbar,children:Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===o.trim())return i.b.error("\u0412\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f");t(o)},className:_.a.searchForm,children:[Object(r.jsx)("button",{type:"submit",className:_.a.searchForm__button,children:Object(r.jsx)("span",{className:_.a.searchForm__button__label,children:"Search"})}),Object(r.jsx)("input",{value:o,onChange:function(e){var t=e.currentTarget.value.toLowerCase();l(t)},className:_.a.searchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})},d=a(11),g=a.n(d),h=document.querySelector("#modal-root");var p=function(e){var t=e.toggleModal,a=e.largeImg,n=e.altImg;Object(c.useEffect)((function(){return window.addEventListener("keydown",l),function(){return window.removeEventListener("keydown",l)}}));var l=function(e){"Escape"===e.code&&t()};return Object(o.createPortal)(Object(r.jsx)("div",{className:g.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(r.jsx)("div",{className:g.a.modal,children:Object(r.jsx)("img",{src:a,alt:n})})}),h)},O=a(15),f=a(17),x=a.n(f);var v=function(e,t){return fetch("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("19092084-bc4ccb70eacd908f2d855c18b","&image_type=photo&orientation=horizontal&per_page=").concat(12)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(e," \u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044e\u0442")))}))},y=a(12),I=a.n(y);var S=function(e){var t=e.onLoadMoreBtnClick;return Object(r.jsx)("div",{className:I.a.button__box,children:Object(r.jsx)("button",{onClick:t,className:I.a.button,type:"button",children:"Load more"})})},w=a(13),F=a.n(w),N=a.p+"static/media/omg.939b7921.jpg";var G=function(e){var t=e.errorMessage;return Object(r.jsxs)("div",{role:"alert",className:F.a.error__box,children:[Object(r.jsx)("img",{src:N,alt:"child",width:"320",className:F.a.errorImg}),Object(r.jsxs)("div",{children:[t," "]}),Object(r.jsx)("div",{children:"OMG \u0442\u0430\u043a\u043e\u0433\u043e \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432 \u043d\u0430\u0441 \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043b\u043e\u0441\u044f"})]})},k=a(9),C=a.n(k),E=a(18),M=a(19),L=a(21),B=a(20),D=a(14),z=a.n(D),T=function(e){Object(L.a)(a,e);var t=Object(B.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(M.a)(a,[{key:"render",value:function(){var e=this.props.smallImg,t=this.props.largeImg,a=this.props.alt,c=this.props.onClick;return Object(r.jsx)("li",{className:z.a.imageGalleryItem,children:Object(r.jsx)("img",{src:e,"data-original":t,onClick:c,alt:a,className:z.a.imageGalleryItem__image})})}}]),a}(c.Component),J=function(e){var t=e.imgName,a=e.getModalData,n=Object(c.useState)([]),o=Object(s.a)(n,2),l=o[0],i=o[1],m=Object(c.useState)(1),u=Object(s.a)(m,2),b=u[0],_=u[1],j=Object(c.useState)(null),d=Object(s.a)(j,2),g=d[0],h=d[1],p=Object(c.useState)("idle"),f=Object(s.a)(p,2),y=f[0],I=f[1];Object(c.useEffect)((function(){i([]),console.log("\u0434\u043e \u0437\u043c\u0456\u043d\u0438",b),_(1),console.log("\u043f\u0456\u0441\u043b\u044f \u0437\u043c\u0456\u043d\u0438",b)}),[t]),Object(c.useEffect)((function(){t&&(I("pending"),v(t,b).then((function(e){i((function(t){return[].concat(Object(O.a)(t),Object(O.a)(e.hits))})),I("resolved"),b>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){h(e),I("rejected")})))}),[t,b]);var w=function(e){var t=e.target.dataset.original,r=e.target.alt;a(t,r)};return"idle"===y?Object(r.jsx)("div",{className:C.a.idle,children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0440\u043e\u0437\u043f\u043e\u0447\u043d\u0435\u043c\u043e. \u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0432 \u043f\u043e\u043b\u0456 \u0432\u0438\u0449\u0435 \u0442\u0430 \u0440\u043e\u0437\u043f\u043e\u0447\u043d\u0456\u0442\u044c \u043f\u043e\u0448\u0443\u043a"}):"pending"===y?Object(r.jsx)(x.a,{className:C.a.loader,type:"Grid",color:"#00BFFF",height:80,width:80}):0===l.length&&"resolved"===y?Object(r.jsx)(G,{}):"resolved"===y?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("ul",{className:C.a.imageGallery,children:l.map((function(e,t){var a=e.webformatURL,c=e.largeImageURL,n=e.tags;return Object(r.jsx)(T,{smallImg:a,largeImg:c,alt:n,onClick:w},t)}))}),l.length>11&&Object(r.jsx)(S,{onLoadMoreBtnClick:function(){_((function(e){return e+1}))}})]}):"rejected"===y?Object(r.jsx)(G,{errorMessage:g.message}):void 0},P=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],o=Object(c.useState)(!1),l=Object(s.a)(o,2),m=l[0],b=l[1],_=Object(c.useState)(""),d=Object(s.a)(_,2),g=d[0],h=d[1],O=Object(c.useState)(""),f=Object(s.a)(O,2),x=f[0],v=f[1];return Object(r.jsxs)("div",{className:u.a.app,children:[Object(r.jsx)(i.a,{position:"bottom-center",autoClose:2500}),Object(r.jsx)(j,{onSubmit:n}),Object(r.jsx)(J,{imgName:a,getModalData:function(e,t){h(e),v(t),b(!0)}}),m&&Object(r.jsx)(p,{toggleModal:function(){b(!m)},largeImg:g,altImg:x})]})};a(48),a(49),a(50),a(51);l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(P,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__JxcIz",loader:"ImageGallery_loader__1S7gj",idle:"ImageGallery_idle__1YpT-",pending:"ImageGallery_pending__2y4Ca",resolved:"ImageGallery_resolved__19Fwp",rejected:"ImageGallery_rejected__2yKH5"}}},[[52,1,2]]]);
//# sourceMappingURL=main.2c4e90e4.chunk.js.map