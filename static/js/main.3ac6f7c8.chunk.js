(this.webpackJsonpdokamovie=this.webpackJsonpdokamovie||[]).push([[0],{32:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(26),l=a.n(c),r=(a(32),a(2)),n=a(9),i=a(4),d=a(10),b=a.n(d),u=a(0);function j(){return Object(u.jsx)("div",{className:"movieloader",children:Object(u.jsx)("i",{className:"fas fa-spinner fa-spin"})})}function h(e){return Object(u.jsxs)("div",{className:"search",children:[Object(u.jsx)("div",{className:"searchTitle",children:"Search Movie What You Want"}),Object(u.jsxs)("div",{className:"searchGroup",dokadataname:"searchContainer",children:[Object(u.jsx)("i",{className:"fas fa-search"}),Object(u.jsx)("i",{className:"fas fa-spinner fa-spin",style:{display:"none"}}),Object(u.jsx)("input",{placeholder:"Search",onChange:function(t){e.searchFilms(t.target.value)}})]})]})}function m(e){return Object(u.jsx)("div",{className:"filmcard",children:Object(u.jsxs)("div",{className:"row-line p-0 m-0",style:{border:"2px solid #ddd"},children:[Object(u.jsx)("div",{className:"thumbcontainer px-0",children:"N/A"!=e.thumb?Object(u.jsx)(n.b,{to:"moviedetail?ref="+e.imdbid,children:Object(u.jsx)("img",{alt:"Movie Poster",src:e.thumb})}):Object(u.jsx)(n.b,{to:"moviedetail?ref="+e.imdbid,children:Object(u.jsx)("img",{alt:"Movie Poster",src:"data:image/png;base64,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"})})}),Object(u.jsxs)("div",{className:"datacontainer p-2",style:{fontSize:"14px"},children:[Object(u.jsx)("div",{className:"filmTitle",children:Object(u.jsx)("a",{children:Object(u.jsx)(n.b,{to:"moviedetail?ref="+e.imdbid,children:e.filmName})})}),Object(u.jsxs)("div",{className:"p-1",style:{borderTop:"1px solid #555",marginTop:"3px"},children:[Object(u.jsx)("i",{className:"fas fa-chevron-right fa-xs"})," ",e.year]}),Object(u.jsxs)("div",{className:"p-1",style:{borderTop:"1px solid #555",borderBottom:"1px solid #555",marginTop:"3px"},children:[Object(u.jsx)("i",{className:"fas fa-chevron-right fa-xs"})," IMDB ID: ",e.imdbid]}),Object(u.jsx)(n.b,{to:"moviedetail?ref="+e.imdbid,className:"watchfilm btn btn-success text-light rounded-pill w-100 mt-2",children:"Details"})]})]})})}function g(e){var t=Object(s.useState)(10),a=Object(i.a)(t,2),c=a[0],l=(a[1],Object(s.useState)(0)),r=Object(i.a)(l,2),n=r[0],d=r[1],b=Object(s.useState)(0),j=Object(i.a)(b,2),h=(j[0],j[1],Object(s.useState)(e.currentPage)),m=Object(i.a)(h,2),g=(m[0],m[1]),p=Object(s.useState)(e.result),o=Object(i.a)(p,2),x=o[0],O=o[1],N=Object(s.useState)(e.search),f=Object(i.a)(N,2),P=(f[0],f[1],Object(s.useState)("")),v=Object(i.a)(P,2),k=v[0],V=v[1];return Object(s.useEffect)((function(){e.results<10?d(2):d(Math.ceil(e.results/c))}),[]),Object(s.useEffect)((function(){O(e.results),e.results<10?d(2):d(Math.ceil(e.results/c)),g(1),null!==e.search?V("&search="+e.search):V("")}),[e.search]),Object(u.jsx)("div",{className:"pagination d-flex justify-content-center my-5",children:x&&0!=n?Object(u.jsx)("nav",{"aria-label":"Page navigation",children:Object(u.jsxs)("ul",{className:"pagination",children:[0!==Number(e.currentPage)&&null!==Number(e.currentPage)&&1!==Number(e.currentPage)?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page=1"+k,children:"<<"})}):null,0!==Number(e.currentPage)&&null!==Number(e.currentPage)&&1!==Number(e.currentPage)?Object(u.jsx)("li",{className:"page-item disabled",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",children:"..."})}):null,0!==Number(e.currentPage)&&null!==Number(e.currentPage)&&1!==Number(e.currentPage)?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)-1)+k,children:"<"})}):null,0!==Number(e.currentPage)&&null!==Number(e.currentPage)&&1!==Number(e.currentPage)&&2!==Number(e.currentPage)?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)-2)+k,children:Number(e.currentPage-2)})}):null,0!=e.currentPage&&null!=e.currentPage&&1!=e.currentPage?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)-1)+k,children:Number(e.currentPage)-1})}):null,null===e.currentPage?Object(u.jsx)("li",{className:"page-item disabled",children:Object(u.jsx)("a",{className:"page-link bg-secondary text-light",href:"#",children:"1"})}):Object(u.jsx)("li",{className:"page-item disabled",children:Object(u.jsx)("a",{className:"page-link bg-secondary text-light",href:"#",children:Number(e.currentPage)})}),null===e.currentPage?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)+2)+k,children:Number(e.currentPage)+2})}):null,null===e.currentPage?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)+3)+k,children:Number(e.currentPage)+3})}):null,e.currentPage!=Number(n-1)&&e.currentPage!=Number(n-1)&&null!=e.currentPage?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)+1)+k,children:Number(e.currentPage)+1})}):null,e.currentPage!=Number(n-1)&&e.currentPage!=Number(n-2)&&null!=e.currentPage?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)+2)+k,children:Number(e.currentPage)+2})}):null,null!=e.currentPage&&e.currentPage!=Number(n-1)?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)+1)+k,children:">"})}):null,0===e.currentPage||null===e.currentPage?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(Number(e.currentPage)+2)+k,children:">"})}):null,e.currentPage!=Number(n-1)?Object(u.jsx)("li",{className:"page-item disabled",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",children:"..."})}):null,e.currentPage!=Number(n-1)?Object(u.jsx)("li",{className:"page-item",children:Object(u.jsx)("a",{className:"page-link bg-dark text-light",href:"?page="+Number(n-1)+k,children:">>"})}):null]})}):null})}function p(){var e="https://www.omdbapi.com/?apikey=4f7d7d93",t=Object(s.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1],r=Object(s.useState)(null),n=Object(i.a)(r,2),d=n[0],p=n[1],o=Object(s.useState)(0),x=Object(i.a)(o,2),O=x[0],N=x[1],f=Object(s.useState)(null),P=Object(i.a)(f,2),v=P[0],k=P[1];Object(s.useEffect)((function(){l([]);var e=new URL(window.location.href);p(e.searchParams.get("page"));null!==e.searchParams.get("search")&&k(e.searchParams.get("search"))}),[]),Object(s.useEffect)((function(){y()}),[c]);var V,y=function(){if(null!=c&&0===c.length){var t,a=[];if(d)var s="&page="+d,r="&page="+Number(Number(d)+1);else s="&page=1",r="&page=2";t=v||"the power",b.a.get(e+"&s="+t+s).then((function(s){s.data.Search&&(N(s.data.totalResults),s.data.Search.map((function(e){a.push(e)})),b.a.get(e+"&s="+t+r).then((function(e){e.data.Search.map((function(e){a.push(e)})),l(a)})))}))}};return null!=c?Object(u.jsxs)("div",{className:"mainPage",children:[Object(u.jsx)(h,{searchFilms:function(t){t?(N(0),p(1),clearTimeout(V),V=setTimeout((function(){if(t){k(t),document.getElementsByClassName("fa-search")[0].style.display="none",document.getElementsByClassName("fa-spinner")[0].style.display="inline-block";var a=[];b.a.get(e+"&s="+t).then((function(s){s.data.Search?(N(s.data.totalResults),s.data.Search.map((function(e){a.push(e)})),b.a.get(e+"&s="+t+"&page=2").then((function(e){e.data.Search?(e.data.Search.map((function(e){a.push(e)})),l(a),document.getElementsByClassName("fa-search")[0].style.display="inline-block",document.getElementsByClassName("fa-spinner")[0].style.display="none"):(document.getElementsByClassName("fa-search")[0].style.display="inline-block",document.getElementsByClassName("fa-spinner")[0].style.display="none",l(a))}))):(document.getElementsByClassName("fa-search")[0].style.display="inline-block",document.getElementsByClassName("fa-spinner")[0].style.display="none")}))}else document.getElementsByClassName("fa-search")[0].style.display="inline-block",document.getElementsByClassName("fa-spinner")[0].style.display="none"}),1e3)):(document.getElementsByClassName("fa-search")[0].style.display="inline-block",document.getElementsByClassName("fa-spinner")[0].style.display="none")}})," ",Object(u.jsxs)("div",{className:"filmcards-container row",children:[" ",c?c.map((function(e,t){return Object(u.jsx)(m,{filmName:e.Title,thumb:e.Poster,year:e.Year,imdbid:e.imdbID},t)})):null," "]})," "," ",0!=O?Object(u.jsx)(g,{search:v,results:O,currentPage:d}):null," "]}):Object(u.jsxs)("div",{className:"mainPage",children:[Object(u.jsx)(h,{}),Object(u.jsx)(j,{})]})}function o(){var e=new URL(window.location.href).searchParams.get("ref"),t=Object(s.useState)(null),a=Object(i.a)(t,2),c=a[0],l=a[1];return Object(s.useEffect)((function(){localStorage.getItem("movie-"+e)?l(JSON.parse(localStorage.getItem("movie-"+e))):b.a.get("https://www.omdbapi.com/?apikey=4f7d7d93&i="+e).then((function(t){l(t.data),localStorage.setItem("movie-"+e,JSON.stringify(t.data))}))}),[]),c?Object(u.jsxs)("div",{className:"container text-dark py-5 mb-5",children:[Object(u.jsx)("h1",{className:"mt-5 text-primary",children:c.Title}),Object(u.jsxs)("div",{className:"row mt-5 px-0",children:[Object(u.jsx)("div",{className:"col-lg-4 mx-0 px-0 p-0",children:"N/A"!==c.Poster&&c.Poster?Object(u.jsx)("img",{src:c.Poster}):Object(u.jsx)("img",{src:"https://www.invenura.com/wp-content/themes/consultix/images/no-image-found-360x250.png"})}),Object(u.jsxs)("div",{className:"col-lg-8 mx-0 px-0",children:[Object(u.jsx)("h1",{className:"lead",children:"Movie Details"}),Object(u.jsxs)("ul",{style:{padding:0},className:"movieDetailsList",children:["N/A"!==c.Year&&c.Year?Object(u.jsxs)("li",{children:["Year: ",Object(u.jsx)("span",{children:c.Year})]}):null,"N/A"!==c.Rated&&c.Rated?Object(u.jsxs)("li",{children:["Rated: ",Object(u.jsx)("span",{children:c.Rated})]}):null,"N/A"!==c.Released&&c.Released?Object(u.jsxs)("li",{children:["Released: ",Object(u.jsx)("span",{children:c.Released})]}):null,"N/A"!==c.Runtime&&c.Runtime?Object(u.jsxs)("li",{children:["Runtime: ",Object(u.jsx)("span",{children:c.Runtime})]}):null,"N/A"!==c.Genre&&c.Genre?Object(u.jsxs)("li",{children:["Genre: ",Object(u.jsx)("span",{children:c.Genre})]}):null,"N/A"!==c.Director&&c.Director?Object(u.jsxs)("li",{children:["Director: ",Object(u.jsx)("span",{children:c.Director})]}):null,"N/A"!==c.Writer&&c.Writer?Object(u.jsxs)("li",{children:["Writer: ",Object(u.jsx)("span",{children:c.Writer})]}):null,"N/A"!==c.Plot&&c.Plot?Object(u.jsxs)("li",{children:["Plot: ",Object(u.jsx)("span",{children:c.Plot})]}):null,"N/A"!==c.Metascore&&c.Metascore?Object(u.jsxs)("li",{children:["Metascore: ",Object(u.jsx)("span",{children:c.Metascore})]}):null,"N/A"!==c.imdbRating&&c.imdbRating?Object(u.jsxs)("li",{children:["IMDB Rating: ",Object(u.jsx)("span",{children:c.imdbRating})]}):null,"N/A"!==c.imdbVotes&&c.imdbVotes?Object(u.jsxs)("li",{children:["IMDB Votes: ",Object(u.jsx)("span",{children:c.imdbVotes})]}):null,"N/A"!==c.imdbID&&c.imdbID?Object(u.jsxs)("li",{children:["IMDB ID: ",Object(u.jsx)("span",{children:c.imdbID})]}):null,"N/A"!==c.Type&&c.Type?Object(u.jsxs)("li",{children:["Type: ",Object(u.jsx)("span",{children:c.Type})]}):null,"N/A"!==c.DVD&&c.DVD?Object(u.jsxs)("li",{children:["DVD: ",Object(u.jsx)("span",{children:c.DVD})]}):null,"N/A"!==c.BoxOffice&&c.BoxOffice?Object(u.jsxs)("li",{children:["BoxOffice: ",Object(u.jsx)("span",{children:c.BoxOffice})]}):null,"N/A"!==c.Production&&c.Production?Object(u.jsxs)("li",{children:["Production: ",Object(u.jsx)("span",{children:c.Production})]}):null,"N/A"!==c.Website&&c.Website?Object(u.jsxs)("li",{children:["Website: ",Object(u.jsx)("span",{children:c.Website})]}):null,"N/A"!==c.Ratings&&c.Ratings?Object(u.jsxs)("li",{children:["Ratings:",Object(u.jsx)("ul",{style:{padding:0,listStyle:"none"},children:c.Ratings.map((function(e,t){return Object(u.jsxs)("li",{className:"border border-dark m-1 p-1",children:[e.Source," - ",e.Value," "]},t)}))})]}):null]})]})]})]}):Object(u.jsx)(j,{})}function x(){return Object(u.jsx)("nav",{className:"navbar navbar-light text-light p-3",style:{backgroundColor:"#000"},children:Object(u.jsx)(n.b,{to:"./",className:"navbar-brand text-light",children:"DokaMovie"})})}function O(){return Object(u.jsxs)("div",{className:"DokaMovies",children:[Object(u.jsx)(x,{}),Object(u.jsx)(r.a,{exact:!0,path:"/",children:Object(u.jsx)(p,{})}),Object(u.jsx)(r.a,{exact:!0,path:"/moviedetail",children:Object(u.jsx)(o,{})})]})}l.a.render(Object(u.jsx)(n.a,{basename:"/doka-case-study",children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.3ac6f7c8.chunk.js.map