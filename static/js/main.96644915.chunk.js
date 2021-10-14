(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={app:"app_app__3kYyO",emptyGallery:"app_emptyGallery__1eKuu"}},12:function(e,t,a){e.exports={modal__overley:"modal_modal__overley__1fF-3",modal:"modal_modal__32gWq"}},13:function(e,t,a){e.exports={imageGalleryItem:"imageGalleryItem_imageGalleryItem__2CVYQ",imageGalleryItem__image:"imageGalleryItem_imageGalleryItem__image__JNPrz"}},15:function(e,t,a){e.exports={imageGallery:"imageGallery_imageGallery__3X8DL"}},16:function(e,t,a){e.exports={button:"button_button__1OM9T"}},18:function(e,t,a){e.exports={loader:"loader_loader__1izL4"}},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),l=(a(23),a(14)),s=a(4),i=a(5),u=a(7),h=a(6),m=a(9),d=(a(24),a(11)),g=a.n(d),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="23047569-c77e6b9c2c44e7090fa2652c3";return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12 ")).then((function(e){return new Promise((function(t){return setTimeout((function(){return t(e)}),1e3)}))})).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.hits}))},_=a(12),p=a.n(_),j=a(1),y=document.querySelector("#modal-root"),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverleyClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(j.jsx)("div",{className:p.a.modal__overley,onClick:this.handleOverleyClick,children:Object(j.jsx)("div",{className:p.a.modal,children:Object(j.jsx)("img",{src:this.props.largeImage,alt:""})})}),y)}}]),a}(n.Component),O=a(8),v=a.n(O),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):Object(m.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:v.a.searchbar,children:Object(j.jsxs)("form",{className:v.a.searchForm,onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:v.a.searchForm__button,children:Object(j.jsx)("span",{className:v.a.searchForm__button_label,children:"Search"})}),Object(j.jsx)("input",{className:v.a.searchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query",value:this.state.query,onChange:this.handleQueryChange})]})})}}]),a}(n.Component),w=x,k=a(13),C=a.n(k),I=function(e){var t=e.image,a=e.onImageClick;return Object(j.jsx)("li",{className:C.a.imageGalleryItem,children:Object(j.jsx)("img",{src:t.webformatURL,alt:t.tags,onClick:function(){return a(t.largeImageURL)},className:C.a.imageGalleryItem__image})})},S=a(15),F=a.n(S),G=function(e){var t=e.data,a=e.onImageClick;return Object(j.jsx)("ul",{className:F.a.imageGallery,children:t.map((function(e){return Object(j.jsx)(I,{image:e,onImageClick:a},e.id)}))})},q=a(16),N=a.n(q),L=function(e){var t=e.onClick;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"button",className:N.a.button,onClick:t,children:"Load more"})})},M=a(17),T=a.n(M),D=a(18),B=a.n(D),E=function(){return Object(j.jsx)("div",{className:B.a.loader,children:Object(j.jsx)(T.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})})},U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={data:[],showModal:!1,isLoading:!1,query:"",page:1,largeImage:"",error:null,showMessage:!1},e.handleFormSubmit=function(t){e.setState({query:t,page:1,data:[]})},e.fetchData=function(){e.setState({isLoading:!0,showMessage:!1});var t=e.state,a=t.query,n=t.page;b(a,n).then((function(t){e.setState((function(e){return{data:[].concat(Object(l.a)(e.data),Object(l.a)(t)),page:e.page+1}})),1!==n&&e.scrollOnLoadButton()})).catch((function(t){return e.setState({error:t})})).finally((function(){var t=e.state,a=t.data,n=t.query;e.setState({isLoading:!1}),0===a.length&&""!==n&&e.setState({showMessage:!0})}))},e.handleGalleryItem=function(t){e.setState({largeImage:t,showModal:!0})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal,largeImage:""}}))},e.scrollOnLoadButton=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchData()}},{key:"render",value:function(){console.log(this.state.data);var e=this.state,t=e.showModal,a=e.data,n=e.largeImage,r=e.showMessage,o=e.isLoading,c=this.handleFormSubmit,l=this.handleGalleryItem,s=this.fetchData,i=this.toggleModal,u=a.length>0&&a.length>=12;return Object(j.jsxs)("div",{className:g.a.app,children:[Object(j.jsx)(w,{onSubmit:c}),Object(j.jsx)(G,{onImageClick:l,data:a}),o&&Object(j.jsx)(E,{}),r&&Object(j.jsx)("h2",{className:g.a.emptyGallery,children:"The gallery is empty! Try another query!"}),u&&Object(j.jsx)(L,{onClick:s}),t&&Object(j.jsx)(f,{onClose:i,largeImage:n}),this.error&&Object(j.jsx)("h2",{children:this.error.message}),Object(j.jsx)(m.a,{autoClose:2e3})]})}}]),a}(n.Component),K=U;c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(K,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={searchbar:"searchbar_searchbar__2NlTj",searchForm:"searchbar_searchForm__23_vj",searchForm__button:"searchbar_searchForm__button__Bl3-N",searchForm__button_label:"searchbar_searchForm__button_label__3ymUI",searchForm__input:"searchbar_searchForm__input__1GtBE"}}},[[46,1,2]]]);
//# sourceMappingURL=main.96644915.chunk.js.map