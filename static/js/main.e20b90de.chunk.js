(this["webpackJsonptymovies-frontend"]=this["webpackJsonptymovies-frontend"]||[]).push([[0],{13:function(e,t,a){e.exports={header:"Home_header__1iyCs",home:"Home_home__3idT9",login:"Home_login__3APMi",signUp:"Home_signUp__3EeCA",genres:"Home_genres__OaeUX",about:"Home_about__iN9jw",nav:"Home_nav__1-F6r",field_with_errors:"Home_field_with_errors__30Snx",loginBoxBorder:"Home_loginBoxBorder__2nBUv"}},16:function(e,t,a){e.exports={createAccountBoxBorder:"Registration_createAccountBoxBorder__ASDRa",button:"Registration_button__1MT2f",email:"Registration_email__1bLgM",userName:"Registration_userName__1HTHw",password:"Registration_password__IXVnE",comfiredPassword:"Registration_comfiredPassword__258e6"}},18:function(e,t,a){e.exports={loginBoxBorder:"Login_loginBoxBorder__f0wAD",field_with_errors:"Login_field_with_errors__-ozFR",button:"Login_button__3J267",email:"Login_email__1YfbN",password:"Login_password__2YdE3"}},19:function(e,t,a){e.exports={field_with_errors:"ReviewList_field_with_errors__26bMu"}},20:function(e,t,a){e.exports={form:"SearchForm_form__qWosj",button:"SearchForm_button__1AUaN",field_with_errors:"SearchForm_field_with_errors__28hrY",searchBar:"SearchForm_searchBar__3_1-6"}},21:function(e,t,a){e.exports={trendingMoviesHeader:"TrendingMovies_trendingMoviesHeader__3jxWY",container:"TrendingMovies_container__2VJY7",field_with_errors:"TrendingMovies_field_with_errors__366Dp"}},23:function(e,t,a){e.exports={text:"Genres_text__1Nt_Z",field_with_errors:"Genres_field_with_errors__2Bk59"}},26:function(e,t,a){e.exports={Header:"GenreShow_Header__22Zhw",container:"GenreShow_container__Uu168",field_with_errors:"GenreShow_field_with_errors__6TzEP"}},27:function(e,t,a){e.exports={text:"MovieShow_text__wfLEX",genreList:"MovieShow_genreList__3B0UP",field_with_errors:"MovieShow_field_with_errors__lZ7Zl"}},41:function(e,t,a){e.exports={text:"About_text__AAQxL"}},43:function(e,t,a){e.exports=a(72)},48:function(e,t,a){},71:function(e,t,a){e.exports={field_with_errors:"Search_field_with_errors__pcnDE"}},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),l=a.n(o),i=(a(48),a(1)),s=a(2),c=a(4),m=a(3),u=a(5),h=a(6),d=a.n(h),p=a(8),v=a(14),g=a(18),f=a.n(g),_="";_="https://tymovie-server.herokuapp.com/api/user_token";var b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",logged_in:!1},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.login=function(e,t){console.log({auth:{email:e,password:t}}),d.a.post(_,{auth:{email:e,password:t}}).then((function(e){console.log(e),e.data.jwt?(a.setState({logged_in:!0}),localStorage.setItem("auth_token",e.data.jwt),a.props.onLogin(!0),a.props.history.push("/")):console.warn("Login error!",e)})).catch((function(e){return console.warn(e)})),a.state.logged_in&&a.props.history.push("/")},a.handleSubmit=function(e){e.preventDefault(),a.login(a.state.email,a.state.password)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:f.a.loginBoxBorder},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("input",{className:f.a.email,type:"text",placeholder:"Email",onChange:this.handleEmail}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:f.a.password,type:"password",placeholder:"Password",onChange:this.handlePassword}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:f.a.button,type:"submit",value:"Login"}),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),w=a(16),E=a.n(w),y="";y="https://tymovie-server.herokuapp.com/users";var j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",name:"",password:"",password_confirmation:""},a.handleEmail=function(e){a.setState({email:e.target.value})},a.handleName=function(e){a.setState({name:e.target.value})},a.handlePassword=function(e){a.setState({password:e.target.value})},a.handlePasswordConfirmation=function(e){a.setState({password_confirmation:e.target.value})},a.createAccount=function(e,t,n,r){console.log({email:e,name:t,password:n,password_confirmation:r}),d.a.post(y,{email:e,name:t,password:n,password_confirmation:r}).then((function(e){console.log(e),a.props.history.push("/login")}))},a.handleSubmit=function(e){e.preventDefault(),a.createAccount(a.state.email,a.state.name,a.state.password,a.state.password_confirmation)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:E.a.createAccountBoxBorder},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("br",null),r.a.createElement("input",{className:E.a.email,type:"email",placeholder:"Email",onChange:this.handleEmail})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:E.a.userName,type:"text",placeholder:"User Name",onChange:this.handleName})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:E.a.password,type:"password",placeholder:"Password",onChange:this.handlePassword})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:E.a.comfiredPassword,type:"password",placeholder:"Comfirmed Password",onChange:this.handlePasswordConfirmation})," ",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{className:E.a.button,type:"submit",value:"Sign Up"}),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),S=a(23),O=a.n(S),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={genres:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data.genres),e.setState({genres:t.data.genres})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:O.a.main},this.state.genres.length>=1?r.a.createElement("ul",{className:O.a.text},this.state.genres.map((function(e){return r.a.createElement("li",null,r.a.createElement(p.b,{to:"/genres/".concat(e.id,"/").concat(e.name),key:e.id},e.name))}))):r.a.createElement("p",null,"loading..."))}}]),t}(r.a.Component),x=a(26),C=a.n(x),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://api.themoviedb.org/3/discover/movie?api_key=24d863d54c86392e6e1df55b9a328755&with_genres=".concat(this.props.match.params.id);d.a.get(t).then((function(t){console.log("response:",t.data.results),e.setState({movies:t.data.results.slice(0,12)})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:C.a.container},r.a.createElement("h2",{className:C.a.Header},this.props.match.params.name),this.state.movies.length>=1?this.state.movies.map((function(e){return r.a.createElement(p.b,{to:"/movies/".concat(e.id),key:e.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path)}))})):r.a.createElement("p",null,"Loading...Please wait"))}}]),t}(r.a.Component),A=a(41),I=a.n(A),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",{className:I.a.text},"This is a full stack group project with a team of two who are Tony and Yanni with a set amount of time frame about a week. ",r.a.createElement("br",null),r.a.createElement("br",null),"This website uses The Movie Database API. ",r.a.createElement("br",null),r.a.createElement("br",null),"It has similar concept as IMDB.",r.a.createElement("br",null),r.a.createElement("br",null),"Any users are allowed to search for movies. ",r.a.createElement("br",null),r.a.createElement("br",null),"Users can sign up for accounts.",r.a.createElement("br",null),r.a.createElement("br",null),"Users with accounts can give reviews to any movies as well as comment on other users' reviews. ",r.a.createElement("br",null),r.a.createElement("br",null),"Technologies used:",r.a.createElement("ul",null,r.a.createElement("li",null,"React"),r.a.createElement("li",null,"Ruby on Rails"),r.a.createElement("li",null,"CSS modules"))))}}]),t}(r.a.Component),L=(a(71),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a.makeAPICall=function(e){var t="https://api.themoviedb.org/3/search/movie?api_key=24d863d54c86392e6e1df55b9a328755&query=".concat(e);d.a.get(t).then((function(e){console.log("response:",e.data.results);e.data.results;a.setState({movies:e.data.results})})).catch((function(e){console.warn(e)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.query.toLowerCase();this.makeAPICall(e)}},{key:"componentDidUpdate",value:function(e){if(this.props.match.params.query!==e.match.params.query){var t=this.props.match.params.query.toLowerCase();this.makeAPICall(t)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Movie Results for ",this.props.match.params.query),this.state.movies.length>=1?r.a.createElement("ul",null,this.state.movies.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(p.b,{to:"/movies/".concat(e.id)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)}),e.title," (",e.release_date,")"))}))):r.a.createElement("p",null,"Loading...Please wait"))}}]),t}(r.a.Component)),B=a(20),M=a.n(B),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:""},a.handleInput=function(e){a.setState({searchText:e.target.value})},a.handleSubmit=function(){var e="/search/".concat(a.state.searchText);a.props.history.push(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:M.a.form,onSubmit:this.handleSubmit},r.a.createElement("input",{className:M.a.searchBar,type:"text",onChange:this.handleInput}),r.a.createElement("input",{className:M.a.button,type:"submit",value:"Search Movies"})))}}]),t}(r.a.Component),D=a(27),P=a.n(D),H=a(42),U=a(19),F=a.n(U),q="";q="https://tymovie-server.herokuapp.com/reviews/";var G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleInput=function(e){a.setState({name:e.target.value})},a.handleTextarea=function(e){a.setState({content:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=localStorage.getItem("auth_token");console.log("token!",t),null!==t?d.a.post(q,{name:a.state.name,content:a.state.content,movieId:a.props.movieId},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){console.log("response:",e.data),a.props.onReviewAdded(e.data)})).catch((function(e){console.warn(e)})):window.location.href="/login"},a.state={name:"",content:"",movieId:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Add your review"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{placeholder:"Title",type:"text",onChange:this.handleInput}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("textarea",{type:"text",placeholder:"Review",onChange:this.handleTextarea}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{type:"submit",value:"Add review"}),r.a.createElement("br",null)))}}]),t}(r.a.Component),Y="";Y="https://tymovie-server.herokuapp.com/reviews/";var z="";z="https://tymovie-server.herokuapp.com/comments/";var W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={reviews:[],comment:"",visibleCommentForReviewId:null},a.addReview=function(e){console.log("in ReviewList:addReview(), got arg:",e),a.setState({reviews:[e].concat(Object(H.a)(a.state.reviews))})},a.addComment=function(e){console.log("in ReviewList:addComment(), got arg:",e),a.getReviews()},a.handleInput=function(e){a.setState({comment:e.target.value}),console.log(e.target.id),console.log(e.target.value)},a.handleSubmit=function(e){e.preventDefault(),console.log("event",e.target.id);var t=a.state.comment,n=a.state.visibleCommentForReviewId,r=localStorage.getItem("auth_token");d.a.post(z,{body:t,review_id:n},{headers:{Authorization:"Bearer ".concat(r)}}).then((function(e){console.log("comment response:",e.data),a.addComment(e.data),a.setState({visibleCommentForReviewId:null})})).catch((function(e){console.warn(e)}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getReviews()}},{key:"getReviews",value:function(){var e=this,t=localStorage.getItem("auth_token");d.a.get(Y+this.props.movieId,{headers:{Authorization:"Bearer ".concat(t)}}).then((function(t){console.log("response:",t.data),e.setState({reviews:t.data})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(G,{movieId:this.props.movieId,onReviewAdded:this.addReview}),r.a.createElement("h2",null,"Reviews"),this.state.reviews.map((function(t){return r.a.createElement("div",{key:t.id,style:{border:"1px solid grey",padding:"60px",width:"60%"}},r.a.createElement("h3",null,t.name),r.a.createElement("h3",null,t.userReview),r.a.createElement("p",null,t.user.name),r.a.createElement("p",null,new Date(t.created_at).toLocaleDateString("en-AU",{hour:"numeric",minute:"numeric",weekday:"long",year:"numeric",month:"long",day:"numeric"})),r.a.createElement("br",null),r.a.createElement("br",null),t.comments.map((function(e){return r.a.createElement("div",{className:F.a.comment,key:e.id,style:{border:"1px solid grey",padding:"30px",width:"60%"}},r.a.createElement("h2",null,"Comments"),r.a.createElement("h3",null,e.body),r.a.createElement("p",null,e.user.name),r.a.createElement("p",null,new Date(t.created_at).toLocaleDateString("en-AU",{hour:"numeric",minute:"numeric",weekday:"long",year:"numeric",month:"long",day:"numeric"})))})),e.state.visibleCommentForReviewId===t.id?r.a.createElement("form",{id:t.id,className:F.a.form,onSubmit:e.handleSubmit},r.a.createElement("textarea",{rows:"10",cols:"35",type:"text",id:t.id,onChange:e.handleInput}),r.a.createElement("br",null),r.a.createElement("input",{className:F.a.inputButton,type:"submit",value:"Comment"})):r.a.createElement("button",{className:F.a.button,onClick:function(){return e.setState({visibleCommentForReviewId:t.id})}},"Add Comment"))})))}}]),t}(r.a.Component),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movie:{}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.themoviedb.org/3/movie/"+this.props.match.params.id+"?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data),e.setState({movie:t.data})})).catch((function(e){console.warn("ERROR:",e)}))}},{key:"render",value:function(){var e=this.state.movie;return r.a.createElement("div",{className:P.a.text},e.id?r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300/".concat(e.poster_path)}),r.a.createElement("h1",null,"Title: ".concat(e.original_title)),r.a.createElement("h3",null,"Overview: ".concat(e.overview)),r.a.createElement("h3",{className:P.a.genreList}," Genres: ",e.genres.map((function(e,t){return r.a.createElement("li",{key:e.id},e.name)}))),r.a.createElement("h3",null,"Vote Average: ".concat(e.vote_average)),r.a.createElement("hr",null),r.a.createElement(W,{movieId:e.id,newReviews:this.state.newReviews})):r.a.createElement("p",null,"loading..."))}}]),t}(r.a.Component),Z=a(21),V=a.n(Z),X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movies:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://api.themoviedb.org/3/trending/all/week?api_key=24d863d54c86392e6e1df55b9a328755").then((function(t){console.log("response:",t.data.results),e.setState({movies:t.data.results.slice(0,12)})})).catch((function(e){console.warn(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:V.a.container},r.a.createElement("h2",{className:V.a.trendingMoviesHeader},"Trending This Week"),this.state.movies.length>=1?this.state.movies.map((function(e){return r.a.createElement(p.b,{className:V.a.trendingMoviesLinks,to:"/movies/".concat(e.id),key:e.id},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w185/".concat(e.poster_path)}))})):r.a.createElement("p",null,"Loading...Please wait"))}}]),t}(r.a.Component),Q=a(13),$=a.n(Q),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loggedIn:!1},a.setLoginStatus=function(e){console.log("hi!",e),a.setState({loggedIn:e})},a.handleLogout=function(){a.setState({loggedIn:!1}),localStorage.removeItem("auth_token")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("auth_token")&&this.setState({loggedIn:!0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",{className:$.a.header},"Ty Movies"),r.a.createElement(p.a,null,r.a.createElement("nav",{className:$.a.nav},this.state.loggedIn?r.a.createElement("a",{className:$.a.login,onClick:this.handleLogout},"Logout"):r.a.createElement(p.b,{className:$.a.login,to:"/login"},"Login"),"|",r.a.createElement(p.b,{className:$.a.signUp,to:"/registration"},"Sign Up")," |",r.a.createElement(p.b,{className:$.a.home,to:"/"},"Home")," |",r.a.createElement(p.b,{className:$.a.genres,to:"/genres"},"Genres")," |",r.a.createElement(p.b,{className:$.a.about,to:"/about"},"About Us")," |"),r.a.createElement(v.a,{path:"/",component:T}),r.a.createElement(v.a,{exact:!0,path:"/search/:query",component:L}),r.a.createElement(v.a,{exact:!0,path:"/movies/:id",component:J}),r.a.createElement(v.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(b,Object.assign({},t,{onLogin:e.setLoginStatus}))}}),r.a.createElement(v.a,{exact:!0,path:"/registration",component:j}),r.a.createElement(v.a,{exact:!0,path:"/genres",component:k}),r.a.createElement(v.a,{exact:!0,path:"/genres/:id/:name",component:N}),r.a.createElement(v.a,{exact:!0,path:"/about",component:R}),r.a.createElement(v.a,{exact:!0,path:"/",component:X})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("footer",null,"\xa9 tymovies 2020"))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.e20b90de.chunk.js.map