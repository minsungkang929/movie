(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(2),r=n.n(i),l=(n(14),n(3)),c=n(4),s=n(6),m=n(5),u=n(7),d=(n(15),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).getMovie=function(e){if(13===e.keyCode){console.log("enter");var t=e.target.value;console.log(t);var a="http://www.omdbapi.com/?apikey=".concat("aa3aa587")+"&s=".concat(t);fetch(a).then(function(e){return e.json()}).then(function(e){if("True"===e.Response){console.log(e);var t=e.Search[0];console.log(t);var a="https://www.imdb.com/title/".concat(t.imdbID,"/");n.setState({title:t.Title,year:t.Year,image:o.a.createElement("img",{src:t.Poster}),imdbLink:o.a.createElement("a",{href:a},"IMDB Link")})}else console.log("no title"),n.setState({title:"Cannot find the title"})})}},n.state={title:"",year:"",image:"",imdbLink:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("body",null,o.a.createElement("aside",{id:"ui-control"},o.a.createElement("h2",null,"Search for a movie"),o.a.createElement("input",{name:"movie",type:"text",placeholder:"Type a movie name and press Enter",onKeyDown:this.getMovie})),o.a.createElement("main",null,o.a.createElement("p",null,"The movie information will appear below..."),o.a.createElement("article",null,o.a.createElement("section",{id:"movie-title"},this.state.title),o.a.createElement("section",{id:"movie-year"},this.state.year),o.a.createElement("section",{id:"movie-link"},this.state.imdbLink),o.a.createElement("section",{id:"movie-image"},this.state.image)))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.c4fd7482.chunk.js.map