(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{65:function(e,t,a){e.exports=a(99)},75:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),l=a(16),i=a(7),s=a(22),u=a(13),m=a(14),d=a(17),E=a(15),p=a(18),f=a(101),b=a(53),h=a.n(b),v=a(107),k=(a(75),a(100)),O=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={bookData:a.props},a.componentDidUpdate=function(e,t){e!==a.props&&a.setState({bookData:a.props})},a.componentWillReceiveProps=function(e){},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.bookData,t=e.select,a=e.book,n=e.onAddedToCart,c=a.title,o=a.authors,l=a.price,i=a.thumbnailUrl;return r.a.createElement(v.a.Item,{className:t?"book-list-item book-select":"book-list-item"},r.a.createElement("div",{className:"book-cover"},r.a.createElement("img",{src:i,alt:"cover"})),r.a.createElement("div",{className:"book-details"},r.a.createElement("span",{className:"book-title"},c),r.a.createElement("div",{className:"book-author"},o),r.a.createElement("div",{className:"book-price"},l),r.a.createElement(k.a,{onClick:n,variant:"info"},"Add to cart")))}}]),t}(r.a.Component),g=function(e){var t=e.books,a=e.str,n=e.onAddedToCart,c=e.items,o=e.pageNum;return 1===(o=parseInt(o))&&(t=t.slice(0,10)),2===o&&(t=t.slice(10,20)),3===o&&(t=t.slice(20,30)),4===o&&(t=t.slice(30,40)),5===o&&(t=t.slice(40,50)),r.a.createElement(v.a,{className:"book-list"},t.filter(function(e){return-1!==e.title.toLowerCase().indexOf(a.toLowerCase())}).map(function(e){if(0!==c.length)for(var t=0;t<c.length;t++)if(c[t].id===e.id)return r.a.createElement("li",{key:e.id},r.a.createElement(O,{select:!0,book:e,onAddedToCart:function(){return n(e.id)}}));return r.a.createElement("li",{key:e.id},r.a.createElement(O,{select:!1,book:e,onAddedToCart:function(){return n(e.id)}}))}))},C=function(e){return{type:"BOOK_ADDED_TO_CART",payload:e}},y=function(e){return{type:"FETCH_BOOKS_SEARCH",payload:e}},N=(a(77),a(78),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spin",style:{width:"100%",height:"100%",margin:"0 auto"}},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}}]),t}(r.a.Component)),j=(a(79),function(){return r.a.createElement("div",null,"Error!")}),_=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={},a.fetchError=function(e){a.props.onError(e)},a.fetchSuccess=function(e){a.props.onLoaded(e)},a.loadData=function(){var e=new URLSearchParams;return e.append("f","READ"),e.append("n","GLEB_ITEM_INFO"),h()("https://fe.it-academy.by/AjaxStringStorage2.php",{method:"post",body:e}).then(function(e){if(e.ok)return e.json();throw new Error("fetch error "+e.status)}).then(function(e){e=JSON.parse(e.result).slice(0,50),a.fetchSuccess(e)}).catch(function(e){a.fetchError(e)})},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){0===this.props.books.length&&(this.props.onRequested(),this.loadData())}},{key:"render",value:function(){var e=this.props,t=e.books,a=e.loading,n=e.error,c=e.search,o=e.cartItems,l=e.onAddedToCart,i=e.pageNum;return a?r.a.createElement(N,null):n?r.a.createElement(j,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(g,{pageNum:i,items:o,str:c,books:t,onAddedToCart:l})))}}]),t}(r.a.Component),A=Object(l.b)(function(e,t){var a=t.pageNum,n=e.store.bookList;return{books:n.books,loading:n.loading,error:n.error,search:n.search,cartItems:e.store.shoppingCart.cartItems,pageNum:a}},function(e){return{onRequested:function(){e({type:"FETCH_BOOKS_REQUEST"})},onLoaded:function(t){e({type:"FETCH_BOOKS_SUCCESS",payload:t})},onError:function(t){e({type:"FETCH_BOOKS_FAILURE",payload:t})},onAddedToCart:function(t){e(C(t))}}})(_),T=a(103),R=a(56),I=(a(80),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).search=function(){var e=a.inputRef.current.value;a.inputRef.current.value="",a.props.dispatch(y(e))},a.inputRef=r.a.createRef(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return r.a.createElement(T.a,{inline:!0},r.a.createElement(R.a,{type:"text",placeholder:"Search",className:"mr-sm-2",ref:this.inputRef}),r.a.createElement(k.a,{variant:"outline-primary",onClick:this.search},"Search"))}}]),t}(r.a.Component)),L=Object(l.b)(function(e){return e})(I),S=a(104),D=a(105),w=(a(81),function(e){return r.a.createElement("div",{className:"home-page"},r.a.createElement(S.a,{bg:"dark",variant:"dark",className:"justify-content-center",style:{padding:"20px"}},r.a.createElement(L,null)),r.a.createElement(S.a,{className:"justify-content-center",bg:"dark",as:"ul"},r.a.createElement(D.a.Item,{as:"li"},r.a.createElement(i.b,{to:"/book-store/1",className:"PageLink",activeClassName:"ActivePageLink"},"1-10")),r.a.createElement(D.a.Item,{as:"li"},r.a.createElement(i.b,{to:"/book-store/2",className:"PageLink",activeClassName:"ActivePageLink"},"10-20")),r.a.createElement(D.a.Item,{as:"li"},r.a.createElement(i.b,{to:"/book-store/3",className:"PageLink",activeClassName:"ActivePageLink"},"20-30")),r.a.createElement(D.a.Item,{as:"li"},r.a.createElement(i.b,{to:"/book-store/4",className:"PageLink",activeClassName:"ActivePageLink"},"30-40")),r.a.createElement(D.a.Item,{as:"li"},r.a.createElement(i.b,{to:"/book-store/5",className:"PageLink",activeClassName:"ActivePageLink"},"40-50")),r.a.createElement(D.a.Item,{as:"li"},r.a.createElement(i.b,{to:"/book-store/",exact:!0,className:"PageLink",activeClassName:"ActivePageLink"},"All"))),r.a.createElement(A,{pageNum:e.match.params.clid}))}),B=(a(95),a(102)),F=a(106),P={onIncrease:C,onDecrease:function(e){return{type:"BOOK_REMOVE_FROM_CART",payload:e}},onDelete:function(e){return{type:"ALL_BOOK_REMOVE_FROM_CART",payload:e}}},K=Object(l.b)(function(e){var t=e.store.shoppingCart;return{items:t.cartItems,total:t.orderTotal}},P)(function(e){var t=e.items,a=e.total,n=e.onIncrease,c=e.onDecrease,o=e.onDelete,l=t.map(function(e,t){var a=e.id,l=e.title,i=e.count,s=e.total;return r.a.createElement(B.a,{key:a,timeout:500,classNames:"item"},r.a.createElement(v.a.Item,{className:"shopping-cart-list"},r.a.createElement("div",null,t+1),r.a.createElement("div",null,l),r.a.createElement("div",null,i),r.a.createElement("div",null,s),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o(a)},className:"btn btn-outline-danger btn-sm"},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("button",{onClick:function(){return n(a)},className:"btn btn-outline-success btn-sm"},r.a.createElement("i",{className:"fa fa-plus-circle"})),r.a.createElement("button",{onClick:function(){return c(a)},className:"btn btn-outline-warning btn-sm"},r.a.createElement("i",{className:"fa fa-minus-circle"})))))});return r.a.createElement("div",{className:"shopping-cart-table"},r.a.createElement("h2",null,"Your Order"),r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(v.a,null,r.a.createElement(v.a.Item,{className:"shopping-cart-list"},r.a.createElement("div",null,"#"),r.a.createElement("div",null,"Item"),r.a.createElement("div",null,"Count"),r.a.createElement("div",null,"Price"),r.a.createElement("div",null,"Action")),r.a.createElement(F.a,null,l)))),r.a.createElement("div",{className:"total"},"Total: $",a))}),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(i.b,{to:"/book-store"},r.a.createElement(k.a,{variant:"dark"},"Back")))},x=(a(97),function(e){var t=e.numItems,a=e.total;return r.a.createElement("header",{className:"shop-header row"},r.a.createElement(i.b,{to:"/book-store"},r.a.createElement("div",{className:"logo text-primary",href:"#"},"BooksStore")),r.a.createElement(i.b,{to:"/book-store/cart"},r.a.createElement("div",null,r.a.createElement("i",{className:"cart-icon fa fa-shopping-cart"}),t," items ($",a,")")))}),H=(a(98),Object(s.f)(function(e){var t=e.location;return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,r.a.createElement(B.a,{key:t.key,timeout:{enter:300,exit:300},classNames:"fade"},r.a.createElement(s.c,{location:t},r.a.createElement(s.a,{path:"/book-store",exact:!0,component:w}),r.a.createElement(s.a,{path:"/book-store/cart",component:M}),r.a.createElement(s.a,{path:"/book-store/:clid",component:w})))))})),U=Object(l.b)(function(e){return e.store.shoppingCart})(function(e){var t=e.orderTotal,a=e.cartItems,n=0;return 0!==a.length&&(n=a.reduce(function(e,t){return e+t.count},0)),r.a.createElement("main",{role:"main",className:"container"},r.a.createElement(x,{numItems:n,total:t}),r.a.createElement(H,null))}),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(j,null):this.props.children}}]),t}(r.a.Component),J=a(30),q=a(62),Q=function(e,t){if(void 0===e)return{books:[],search:"",loading:!0,error:null};switch(t.type){case"FETCH_BOOKS_REQUEST":return{books:[],search:"",loading:!0,error:null};case"FETCH_BOOKS_SUCCESS":return{books:t.payload,search:"",loading:!1,error:null};case"FETCH_BOOKS_FAILURE":return{books:[],search:"",loading:!1,error:t.payload};case"FETCH_BOOKS_SEARCH":return Object(q.a)({},e.bookList,{search:t.payload});default:return e.bookList}},$=a(28),G=function(e,t,a){return 0===t.count?[].concat(Object($.a)(e.slice(0,a)),Object($.a)(e.slice(a+1))):-1===a?[].concat(Object($.a)(e),[t]):[].concat(Object($.a)(e.slice(0,a)),[t],Object($.a)(e.slice(a+1)))},W=function(e,t,a){var n=e.bookList.books,r=e.shoppingCart,c=r.cartItems,o=r.orderTotal,l=n.find(function(e){return e.id===t}),i=c.findIndex(function(e){return e.id===t}),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=t.id,r=void 0===n?e.id:n,c=t.count,o=void 0===c?0:c,l=t.title,i=void 0===l?e.title:l,s=t.total;return{id:r,title:i,count:o+a,total:(void 0===s?0:s)+a*e.price}}(l,c[i],a);return{orderTotal:o+l.price*a,cartItems:G(c,s,i)}},Y=function(e,t){if(void 0===e)return{cartItems:[],orderTotal:0};switch(t.type){case"BOOK_ADDED_TO_CART":return W(e,t.payload,1);case"BOOK_REMOVE_FROM_CART":return W(e,t.payload,-1);case"ALL_BOOK_REMOVE_FROM_CART":var a=e.shoppingCart.cartItems.find(function(e){return e.id===t.payload});return W(e,t.payload,-a.count);default:return e.shoppingCart}},z=function(e,t){return{bookList:Q(e,t),shoppingCart:Y(e,t)}},X=Object(J.b)({store:z}),Z=Object(J.c)(X);o.a.render(r.a.createElement(l.a,{store:Z},r.a.createElement(V,null,r.a.createElement(i.a,null,r.a.createElement(U,null)))),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.144fc4d0.chunk.js.map