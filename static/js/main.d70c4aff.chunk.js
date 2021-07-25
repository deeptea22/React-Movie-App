(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),i=a(6),s=a.n(i),r=(a(16),a(5)),o=a(7),l=a(8),d=a(11),b=a(9),j=(a(17),a(0)),h=function(e){return Object(j.jsx)("div",{className:"movie",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"card-img-top",children:null==e.image?Object(j.jsx)("img",{src:"",alt:"spiderman-movie",style:{width:"100%",height:360}}):Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280".concat(e.image),alt:"spiderman-movie",style:{width:"100%",height:360}})}),Object(j.jsx)("div",{class:"card-body",children:Object(j.jsx)("a",{href:"#",class:"btn btn-primary",onClick:function(){return e.viewMovieInfo(e.movieId)},children:"View Details"})})]})})},u=function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col",children:e.movies.map((function(t,a){return Object(j.jsx)(h,{viewMovieInfo:e.viewMovieInfo,movieId:t.id,image:t.poster_path},a)}))})})})},v=function(e){for(var t=[],a=function(a){var n=e.currentPage===a?"active":"";if(a>20)return"break";t.push(Object(j.jsx)("li",{className:"btn btn-info ".concat(n),onClick:function(){return e.nextPage(a)},children:Object(j.jsx)("a",{href:"#",children:a})},a))},n=1;n<=e.pages+1;n++){if("break"===a(n))break}return Object(j.jsx)("div",{className:"container-button",children:Object(j.jsx)("div",{className:"row-button",children:Object(j.jsxs)("ul",{className:"pagination-button",children:[e.currentPage>1?Object(j.jsx)("li",{className:"btn btn-info",onClick:function(){return e.nextPage(e.currentPage-1)},children:Object(j.jsx)("a",{href:"#",children:"Prev"})}):"",t,e.currentPage<e.pages+1?Object(j.jsx)("li",{className:"btn btn-info",onClick:function(){return e.nextPage(e.currentPage+1)},children:Object(j.jsx)("a",{href:"#",children:"Next"})}):""]})})})},m=a(10),p=function(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],i=a[1],s="https://api.themoviedb.org/3/movie/".concat(e.currentMovie.id,"/videos?api_key=4e44d9029b1270a757cddc766a1bcb63");return fetch(s).then((function(e){return e.json()})).then((function(e){var t;i(null===(t=e.results[0])||void 0===t?void 0:t.key)})),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"rowDesc",onClick:e.closeMovieInfo,style:{cursor:"pointer",paddingTop:50,width:130},children:Object(j.jsx)("span",{style:{marginLeft:10},children:"\u2b05\ufe0fGo Back"})}),Object(j.jsxs)("div",{className:"row-desc",children:[Object(j.jsx)("div",{className:"col col-sm-11 col-md-4",children:null==e.currentMovie.poster_path?Object(j.jsx)("img",{src:"",alt:"movie-desc",style:{width:"100%",height:400}}):Object(j.jsx)("img",{src:"https://image.tmdb.org/t/p/w1280".concat(e.currentMovie.poster_path),alt:"movie-desc",style:{width:"100%",height:400}})}),Object(j.jsx)("div",{className:"column",children:Object(j.jsxs)("div",{className:"info-container",children:[Object(j.jsx)("p",{className:"heading",children:"TITLE: "}),Object(j.jsx)("p",{children:e.currentMovie.title}),Object(j.jsx)("p",{className:"heading",children:"RELEASE DATE: "}),Object(j.jsx)("p",{children:e.currentMovie.release_date}),Object(j.jsx)("p",{className:"heading",children:"OVERVIEW:"}),Object(j.jsx)("p",{children:e.currentMovie.overview}),Object(j.jsx)("a",{href:"https://www.youtube.com/watch?v=".concat(c),target:"_blank",className:"btn btn-primary",children:"View Trailer"})]})})]})]})},g=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).nextPage=function(t){fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&page=".concat(t)).then((function(e){return e.json()})).then((function(a){e.setState({movies:Object(r.a)(a.results),currentPage:t})}))},e.viewMovieInfo=function(t){var a=e.state.movies.filter((function(e){return e.id===t})),n=a.length>0?a[0]:null;e.setState({currentMovie:n})},e.closeMovieInfo=function(){e.setState({currentMovie:null})},e.state={movies:[],searchTerm:"",totalResults:0,currentPage:1,currentMovie:null,booksfav:[],isLoading:!1},e.apiKey="4e44d9029b1270a757cddc766a1bcb63",fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&page=1").then((function(e){return e.json()})).then((function(t){e.setState({movies:Object(r.a)(t.results),totalResults:t.total_results})})),e}return Object(l.a)(a,[{key:"render",value:function(){var e=Math.floor(this.state.totalResults/20);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"App.js",children:"C I N E"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Favourites"})})})})]})}),Object(j.jsxs)("div",{className:"App",children:[null==this.state.currentMovie?Object(j.jsx)(u,{append:this.append,viewMovieInfo:this.viewMovieInfo,movies:this.state.movies}):Object(j.jsx)(p,{currentMovie:this.state.currentMovie,closeMovieInfo:this.closeMovieInfo}),this.state.totalResults>20&&null==this.state.currentMovie?Object(j.jsx)(v,{pages:e,nextPage:this.nextPage,currentPage:this.state.currentPage}):""]})]})}}]),a}(n.Component);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.d70c4aff.chunk.js.map