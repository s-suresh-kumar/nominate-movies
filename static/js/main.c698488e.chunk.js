(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),r=n(8),i=n.n(r),o=n(7),l=n(6),j=n.n(l),u=n(9),d=n(4),m=(n(16),n(17),function(e){var t=e.favouriteComponent;return Object(c.jsx)(c.Fragment,{children:e.movies.map((function(n,a){return Object(c.jsxs)("div",{className:"image-container d-flex justify-content-start m-3",children:[Object(c.jsx)("img",{src:n.Poster,alt:"movie"}),Object(c.jsx)("div",{onClick:function(){return e.handleFavouritesClick(n)},className:"overlay d-flex align-items-center justify-content-center",children:Object(c.jsx)(t,{})})]})}))})}),v=function(e){return Object(c.jsx)("div",{className:"col",children:Object(c.jsx)("h1",{children:e.heading})})},h=function(e){return Object(c.jsx)("div",{className:"col col-sm-4",children:Object(c.jsx)("input",{className:"form-control",value:e.value,onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type to search..."})})},f=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Add to Favourites"}),Object(c.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-heart-fill",fill:"red",xmlns:"http://www.w3.org/2000/svg",children:Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},b=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("span",{className:"mr-2",children:"Remove from favourites"}),Object(c.jsxs)("svg",{width:"1em",height:"1em",viewBox:"0 0 16 16",class:"bi bi-x-square",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(c.jsx)("path",{"fill-rule":"evenodd",d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},x=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),l=i[0],x=i[1],O=Object(a.useState)(""),p=Object(d.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(u.a)(j.a.mark((function e(t){var n,c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://www.omdbapi.com/?s=".concat(t,"&apikey=263d22d8"),console.log("searchValue",t),console.log("url",n),e.next=5,fetch(n);case 5:return c=e.sent,e.next=8,c.json();case 8:a=e.sent,console.log("response",c),console.log("responseJson",a),a.Search&&s(a.Search);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){N(g)}),[g]),Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-favourites"));e&&x(e)}),[]);var S=function(e){localStorage.setItem("react-movie-app-favourites",JSON.stringify(e))};return Object(c.jsxs)("div",{className:"container-fluid movie-app",children:[Object(c.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(c.jsx)(v,{heading:"Nominees"})}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{movies:l,handleFavouritesClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));x(t),S(t);var c=[];n.includes(e)||(c=[].concat(Object(o.a)(n),[e]),s(c))},favouriteComponent:b})}),Object(c.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(c.jsx)(v,{heading:"Movies"}),Object(c.jsx)(h,{searchValue:g,setSearchValue:w})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsx)(m,{movies:n,handleFavouritesClick:function(e){var t=[];if(!l.includes(e))if(l.length<5){t=[].concat(Object(o.a)(l),[e]),x(t),S(t);var c=n.slice(0),a=c.indexOf(e);a>-1&&(c.splice(a,1),s(c))}else alert("Max movies(5) already nominated. Try removing some and retry")},favouriteComponent:f})})]})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c698488e.chunk.js.map