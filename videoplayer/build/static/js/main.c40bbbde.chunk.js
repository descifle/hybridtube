(this.webpackJsonpvideoplayer=this.webpackJsonpvideoplayer||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.db26a7e7.png"},36:function(e,t,a){e.exports=a(71)},63:function(e,t,a){e.exports=a.p+"static/media/backdrop.4913c04d.jpg"},65:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(32),r=a.n(l),s=a(8),c=a(9),i=a(11),m=a(10),d=a(15),u=a(7),v=a(12),g=a.n(v),p=(a(29),a(30),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",loginErrors:"",user:{}},e.handleSubmit=function(t){t.preventDefault();var a={username:e.state.email,password:e.state.password};g.a.get("/users/verify",{params:{username:a.username,password:a.password}}).then((function(t){console.log(t.data),null!==t.data&&(e.setState({user:t.data}),localStorage.setItem("username",JSON.stringify(t.data.username)),localStorage.setItem("trueUID",JSON.stringify(t.data._id)),window.location="/")}))},e.handleChange=function(t){t.persist(),e.setState(Object(d.a)({},t.target.name,t.target.value)),setTimeout((function(){var e=new RegExp(/^\S+@\S+\.\S+$/);"email"!==t.target.name||e.test(t.target.value)?t.target.className="form-control form-control-user":t.target.className="form-control form-control-user invalid-form"}),500)},e.validateForm=function(){return e.state.email.length>0&&e.state.password.length>0},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"w-100 text-center my-5"},"VideoSaver"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-xl-10 col-lg-12 col-md-9"},o.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 d-none d-lg-block bg-login-image"}),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"p-5"},o.a.createElement("div",{className:"text-center"},o.a.createElement("h1",{className:"h4 text-gray-900 mb-4"},"Welcome Back!"),o.a.createElement("p",{className:"text-muted my-4"},"you should be watching!")),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"user"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{autoFocus:!0,type:"email",className:"form-control form-control-user",name:"email","aria-describedby":"emailHelp",placeholder:"Enter Email Address...",value:this.state.email,onChange:this.handleChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",className:"form-control form-control-user",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0})),o.a.createElement("button",{disabled:!this.validateForm(),className:"btn btn-primary btn-user btn-block"},"Login"),o.a.createElement(u.b,{to:"/",className:"btn btn-block"},"Continue without logging in"),o.a.createElement("hr",null)),o.a.createElement("hr",null),o.a.createElement("div",{className:"text-center"}),o.a.createElement("div",{className:"text-center"},o.a.createElement(u.b,{to:"/create",className:"small"},"Create an Account!"))))))))))}}]),a}(n.Component)),h=(a(63),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={email:"",password:"",error:""},e.handleSubmit=function(t){t.preventDefault();var a={username:e.state.email,password:e.state.password};g.a.post("/users/add",a).then((function(e){console.log(e.data)})).catch((function(e){console.log(e.response)})),window.location="/login"},e.handleChange=function(t){t.persist(),e.setState(Object(d.a)({},t.target.name,t.target.value)),setTimeout((function(){var e=new RegExp(/^\S+@\S+\.\S+$/);"email"!==t.target.name||e.test(t.target.value)?t.target.className="form-control form-control-user":t.target.className="form-control form-control-user invalid-form"}),500)},e.validateForm=function(){var t=e.state,a=t.email,n=t.password,o=new RegExp(/^\S+@\S+\.\S+$/);return a.length>0&&n.length>0&&o.test(a)},e}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("h1",{className:"w-100 text-center my-5"},"VideoSaver"),o.a.createElement("div",{className:"row justify-content-center"},o.a.createElement("div",{className:"col-xl-10 col-lg-12 col-md-9"},o.a.createElement("div",{className:"card o-hidden border-0 shadow-lg my-5"},o.a.createElement("div",{className:"card-body p-0"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6 d-none d-lg-block bg-login-image_create"}),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("div",{className:"p-5"},o.a.createElement("div",{className:"text-center"},o.a.createElement("h1",{className:"h4 text-gray-900 mb-4"},"Create A New Acccount"),o.a.createElement("p",{className:"text-muted my-4"},"Join us!")),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"user"},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{autoFocus:!0,type:"email",className:"form-control form-control-user",name:"email","aria-describedby":"email address",placeholder:"Enter Email Address...",value:this.state.email,onChange:this.handleChange,required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"password",className:"form-control form-control-user",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0})),o.a.createElement("button",{disabled:!this.validateForm(),className:"btn btn-primary btn-user btn-block"},"Create Account"),o.a.createElement(u.b,{to:"/",className:"btn btn-block"},"Continue without logging in"),o.a.createElement("hr",null)),o.a.createElement("hr",null),o.a.createElement("div",{className:"text-center"}),o.a.createElement("div",{className:"text-center"},o.a.createElement(u.b,{className:"small",to:"/login"},"Already have an Account | Login"))))))))))}}]),a}(n.Component)),f=a(19),b=a.n(f),E=a(34),N=(a(65),a(35)),S=a.n(N),y=(a(66),a(67),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={term:"",showModal:!1},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e.toggleModal=function(){e.setState({showModal:!e.state.showModal})},e}return Object(c.a)(a,[{key:"logMeOut",value:function(){localStorage.removeItem("trueUID"),localStorage.removeItem("username"),this.toggleModal(),window.location="/"}},{key:"renderUser",value:function(){var e=this;return null!==localStorage.getItem("username")&&""!==localStorage.getItem("username")?o.a.createElement("span",{onClick:function(){null!==localStorage.getItem("username")&&""!==localStorage.getItem("username")&&e.toggleModal()},className:"btn btn-light"},localStorage.getItem("username").slice(1,-1)):o.a.createElement(u.b,{className:"btn btn-light",to:"/login"},"Login Now")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"head"},o.a.createElement("div",{className:"d-flex"},o.a.createElement("div",{className:"logo"},o.a.createElement("img",{src:S.a,alt:"logo"})),o.a.createElement("h1",null,"Video Player"),o.a.createElement("div",{className:"user-auth"},o.a.createElement(u.b,{className:"btn btn-account",to:"/create"},"Create Account"),this.renderUser()),o.a.createElement("div",{className:this.state.showModal?"modal animate__animated animate__fadeIn show d-block":"modal",id:"logoutModal",tabIndex:"-1",role:"dialog","aria-labelledby":"modalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"modalLabel"},"Log Out?"),o.a.createElement("button",{onClick:function(){e.toggleModal()},className:"close",type:"button","data-dismiss":"modal","aria-label":"Close"},o.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),o.a.createElement("div",{className:"modal-body"},'Select "Logout" below if you are ready to end your current session.'),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{onClick:function(){e.toggleModal()},className:"btn btn-secondary",type:"button","data-dismiss":"modal"},"Cancel"),o.a.createElement("button",{onClick:function(){e.logMeOut()},className:"btn btn-primary"},"Logout")))))),o.a.createElement("form",{onSubmit:this.onFormSubmit,className:""},o.a.createElement("div",{className:"field"},o.a.createElement("label",{className:"font-weight-bold"},"Search Video"),o.a.createElement("input",{autoFocus:!0,className:"form-control mr-sm-2",type:"text",value:this.state.term,onChange:this.onInputChange}))))}}]),a}(o.a.Component)),w=g.a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),V=(a(68),a(69),function(e){var t=e.video,a=e.onVideoSelect,n=e.status,l=e.removeVideo;return o.a.createElement("div",{onClick:function(){a(t)},className:n?"saved-video_item py-2":"item video-item py-2"},o.a.createElement("img",{className:"img-fluid",src:t.snippet.thumbnails.medium.url,alt:t.title}),o.a.createElement("div",{className:""},o.a.createElement("div",{className:n?"saved-video_text py-1":"text-dark pl-2"},n?t.snippet.title.slice(0,30)+"...":t.snippet.title),!!n&&o.a.createElement("button",{onClick:function(){l(t)},className:"btn  btn-danger"},"Delete")))}),C=function(e){var t=e.videos,a=e.onVideoSelect,n=e.status,l=e.removeVideo,r=t.map((function(e){return o.a.createElement(V,{removeVideo:l,status:n,key:e.id.videoId,onVideoSelect:a,video:e})}));return o.a.createElement("div",{className:n},!!n&&o.a.createElement("h2",{className:"w-100"},"Your Saved Videos"),r)},x=(a(70),function(e){var t=e.video,a=e.saveVideo;if(!t)return o.a.createElement("div",null,"Loading...");var n="https://www.youtube.com/embed/".concat(t.id.videoId);return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},o.a.createElement("iframe",{title:"embed-responsive-item",src:n})),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},t.snippet.title),o.a.createElement("p",{className:"text-muted"},t.snippet.description),o.a.createElement("button",{className:"btn btn-save float-right",onClick:function(){a(t)}},"Save Video")))}),k="AIzaSyAfEaZF62jt_nxrzVhl40SASJPfLLURpS4",O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={savedVideos:[],videos:[],selectedVideo:null,loggedIn:!1,user:""},e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e.onTermSubmit=function(){var t=Object(E.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:"5",key:k}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getSavedVideos=function(){var t=e.state,a=t.user;t.loggedIn?g.a.get("/users/get-videos",{params:{id:a}}).then((function(t){e.setState({savedVideos:t.data.videos})})).catch((function(e){return console.log(e)})):console.log("user not logged in")},e.saveVideo=function(t){var a=e.state.savedVideos.find((function(e){return e.etag===t.etag})),n=e.state.user;a?console.log("already saved"):g.a.post("/users/save-video",{params:{id:n,videos:t}}).then((function(t){e.setState({savedVideos:t.data.videos})})).catch((function(e){console.log(e)})),e.setState(e.state)},e.removeVideo=function(t){var a={user:e.state.user,videoId:t.etag};g.a.post("/users/delete-video",a).then((function(e){console.log(e.data)})).catch((function(e){return console.log(e)})),setTimeout((function(){e.getSavedVideos()}),1e3)},e.validateLogin=function(){""!==localStorage.getItem("username")&&null!==localStorage.getItem("username")&&e.setState({loggedIn:!0})},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.validateLogin(),this.setState({user:JSON.parse(localStorage.getItem("trueUID"))}),setTimeout((function(){e.getSavedVideos()}),1e3),console.log("mounted")}},{key:"render",value:function(){return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12"},o.a.createElement(y,{onFormSubmit:this.onTermSubmit}),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-8 py-3"},o.a.createElement(x,{video:this.state.selectedVideo,saveVideo:this.saveVideo})),o.a.createElement("div",{className:"col-lg-4"},o.a.createElement(C,{onVideoSelect:this.onVideoSelect,videos:this.state.videos})),o.a.createElement("div",{className:"col-lg-12"},o.a.createElement(C,{removeVideo:this.removeVideo,status:"saved-video",onVideoSelect:this.onVideoSelect,videos:this.state.savedVideos})))))))}}]),a}(o.a.Component),j=a(1),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(u.a,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"/",exact:!0,component:O}),o.a.createElement(j.a,{path:"/login",component:p}),o.a.createElement(j.a,{path:"/create",component:h})))}}]),a}(n.Component);r.a.render(o.a.createElement(I,null),document.querySelector("#root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.c40bbbde.chunk.js.map