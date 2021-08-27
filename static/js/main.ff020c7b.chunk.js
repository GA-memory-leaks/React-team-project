(this["webpackJsonpReact Team Project"]=this["webpackJsonpReact Team Project"]||[]).push([[0],{103:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(29),c=n.n(s),o=(n(73),n(68)),i=n(9),d=n(10),l=n(12),u=n(11),h=n(13),j=n(106),m=n(2),b=n(3),g=n(1),p=["user","component","render"],O=function(e){var t=e.user,n=e.component,r=e.render,a=Object(b.a)(e,p);return t&&r?Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:r})):Object(g.jsx)(h.b,Object(m.a)(Object(m.a)({},a),{},{render:function(e){return t?Object(g.jsx)(n,Object(m.a)({},e)):Object(g.jsx)(h.a,{to:"/"})}}))},f=n(51),x=(n(82),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClose=function(){return r.setState({show:!1})},r.state={show:!0},r.timeoutId=null,r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.timeoutId=setTimeout(this.handleClose,5e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this.props,t=e.variant,n=e.heading,r=e.message,a=e.deleteAlert,s=e.id;return this.state.show||setTimeout((function(){a(s)}),300),Object(g.jsx)(f.a,{dismissible:!0,show:this.state.show,variant:t,onClose:this.handleClose,children:Object(g.jsxs)("div",{className:"container",children:[Object(g.jsx)(f.a.Heading,{children:n}),Object(g.jsx)("p",{className:"alert-body",children:r})]})})}}]),n}(a.a.Component)),v=n(67),w=n(36),y=n(14),C=n.p+"static/media/Virtuoso-logo.e04b903d.png",S=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(y.b,{to:"/my-wall",className:"nav-link",children:"My Sound Board"}),Object(g.jsx)(y.b,{to:"/create-chord",className:"nav-link",children:"Create Chord"}),Object(g.jsx)(y.b,{to:"/users/",className:"nav-link",children:"Find Other Musicians"}),Object(g.jsx)(y.b,{to:"/change-password",className:"nav-link",children:"Change Password"}),Object(g.jsx)(y.b,{to:"/sign-out",className:"nav-link",children:"Sign Out"})]}),A=Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(y.b,{to:"/sign-up",className:"nav-link",children:"Sign Up"}),Object(g.jsx)(y.b,{to:"/sign-in",className:"nav-link",children:"Sign In"})]}),k=function(e){var t=e.user;return Object(g.jsxs)(w.a,{variant:"dark",expand:"md",style:{background:"#29A8E0"},children:[Object(g.jsx)(w.a.Brand,{children:Object(g.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",rel:"noopener noreferrer",children:Object(g.jsx)("img",{style:{height:"70px",width:"auto"},src:C})})}),Object(g.jsx)(w.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(g.jsx)(w.a.Collapse,{id:"basic-navbar-nav",children:Object(g.jsx)(v.a,{className:"ml-auto",children:t?S:A})})]})},P=n(7),I="https://quiet-everglades-08349.herokuapp.com",T="http://localhost:4741",U="localhost"===window.location.hostname?T:I,N=n(21),B=n.n(N),D=function(e){return B()({url:U+"/sign-in/",method:"POST",data:{credentials:{email:e.email,password:e.password}}})},E=n(6),L=n(28),F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(P.a)({},e.target.name,e.target.value))},r.onSignUp=function(e){e.preventDefault();var t,n=r.props,a=n.msgAlert,s=n.history,c=n.setUser;(t=r.state,B()({method:"POST",url:U+"/sign-up/",data:{credentials:{name:t.name,email:t.email,password:t.password,password_confirmation:t.passwordConfirmation}}})).then((function(){return D(r.state)})).then((function(e){return c(e.data.user)})).then((function(){return a({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"})})).then((function(){return s.push("/my-wall")})).catch((function(e){r.setState({email:"",password:"",passwordConfirmation:""}),a({heading:"Sign Up Failed with error: "+e.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"})}))},r.state={name:"",email:"",password:"",passwordConfirmation:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.email,r=e.password,a=e.passwordConfirmation;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign Up"}),Object(g.jsxs)(E.a,{onSubmit:this.onSignUp,children:[Object(g.jsxs)(E.a.Group,{controlId:"name",children:[Object(g.jsx)(E.a.Label,{children:"Your Name"}),Object(g.jsx)(E.a.Control,{required:!0,type:"text",name:"name",value:t,placeholder:"Enter Name",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:n,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:r,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"passwordConfirmation",children:[Object(g.jsx)(E.a.Label,{children:"Password Confirmation"}),Object(g.jsx)(E.a.Control,{required:!0,name:"passwordConfirmation",value:a,type:"password",placeholder:"Confirm Password",onChange:this.handleChange})]}),Object(g.jsx)(L.a,{variant:"primary",type:"submit",style:{marginTop:"5px"},children:"Submit"})]})]})})}}]),n}(r.Component),G=Object(h.f)(F),q=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(P.a)({},e.target.name,e.target.value))},r.onSignIn=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,s=t.setUser;D(r.state).then((function(e){return s(e.data.user)})).then((function(){return n({heading:"Sign In Success",message:"Welcome!",variant:"success"})})).then((function(){return a.push("/my-wall")})).catch((function(e){r.setState({email:"",password:""}),n({heading:"Sign In Failed with error: "+e.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"})}))},r.state={email:"",password:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Sign In"}),Object(g.jsxs)(E.a,{onSubmit:this.onSignIn,children:[Object(g.jsxs)(E.a.Group,{controlId:"email",children:[Object(g.jsx)(E.a.Label,{children:"Email address"}),Object(g.jsx)(E.a.Control,{required:!0,type:"email",name:"email",value:t,placeholder:"Enter email",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"password",children:[Object(g.jsx)(E.a.Label,{children:"Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"password",value:n,type:"password",placeholder:"Password",onChange:this.handleChange})]}),Object(g.jsx)(L.a,{variant:"primary",type:"submit",style:{marginTop:"5px"},children:"Submit"})]})]})})}}]),n}(r.Component),_=Object(h.f)(q),z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.msgAlert,n=e.history,r=e.clearUser;(function(e){return B()({url:U+"/sign-out/",method:"DELETE",headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"})})).finally((function(){return n.push("/")})).finally((function(){return r()}))}},{key:"render",value:function(){return""}}]),n}(r.Component),M=Object(h.f)(z),H=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e){return r.setState(Object(P.a)({},e.target.name,e.target.value))},r.onChangePassword=function(e){e.preventDefault();var t=r.props,n=t.msgAlert,a=t.history,s=t.user;(function(e,t){return B()({url:U+"/change-password/",method:"PATCH",headers:{Authorization:"Bearer ".concat(t.token)},data:{passwords:{old:e.oldPassword,new:e.newPassword}}})})(r.state,s).then((function(){return n({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"})})).then((function(){return a.push("/")})).catch((function(e){r.setState({oldPassword:"",newPassword:""}),n({heading:"Change Password Failed with error: "+e.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"})}))},r.state={oldPassword:"",newPassword:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.oldPassword,n=e.newPassword;return Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(g.jsx)("h3",{children:"Change Password"}),Object(g.jsxs)(E.a,{onSubmit:this.onChangePassword,children:[Object(g.jsxs)(E.a.Group,{controlId:"oldPassword",children:[Object(g.jsx)(E.a.Label,{children:"Old password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"oldPassword",value:t,type:"password",placeholder:"Old Password",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"newPassword",children:[Object(g.jsx)(E.a.Label,{children:"New Password"}),Object(g.jsx)(E.a.Control,{required:!0,name:"newPassword",value:n,type:"password",placeholder:"New Password",onChange:this.handleChange})]}),Object(g.jsx)(L.a,{variant:"primary",type:"submit",style:{marginTop:"5px"},children:"Submit"})]})]})})}}]),n}(r.Component),R=Object(h.f)(H),W=function(e){return B()({method:"GET",url:U+"/chords",headers:{Authorization:"Bearer ".concat(e.token)}})},V=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target.name,n=e.target.value,a=Object.assign({},r.state.chord);a[t]=n,r.setState({chord:a,message:""})},r.handleSubmit=function(e){e.preventDefault();var t=r.props,n=t.user,a=t.msgAlert,s=t.history;(function(e,t){return B()({method:"POST",url:U+"/chords",headers:{Authorization:"Bearer ".concat(e.token)},data:{chord:{title:t.title,body:t.body}}})})(n,r.state.chord).then((function(e){return s.push("/my-wall")})).then((function(){return a({heading:"Chord Created!",message:"Check out your wall!",variant:"success"})})).catch((function(e){a({heading:"Chord creation failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.state={chord:{title:"",body:""},message:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.body;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"In Chord Create. Hello!"}),Object(g.jsx)("p",{children:this.state.message}),Object(g.jsxs)(E.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(E.a.Group,{controlId:"title",children:[Object(g.jsx)(E.a.Label,{children:"Chord Title"}),Object(g.jsx)(E.a.Control,{required:!0,name:"title",value:t,placeholder:"Chord Title",onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"body",children:[Object(g.jsx)(E.a.Label,{children:"Body"}),Object(g.jsx)(E.a.Control,{required:!0,name:"body",value:n,placeholder:"Chord Body",onChange:this.handleChange})]}),Object(g.jsx)(L.a,{type:"submit",style:{marginTop:"5px"},children:"Create Chord"})]})]})}}]),n}(a.a.Component),Y=Object(h.f)(V),J=n(107),Q={display:"flex",justifyContent:"space-between",alignItems:"center"},X={display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center"},K={textShadow:"2px",width:"45rem",border:"1px solid black",borderRadius:"7px",margin:"5px auto",padding:"10px"},Z={textShadow:"1px 1px black",fontSize:"32px",fontWeight:"bold",fontVariant:"small-caps",color:"#9966cc"},$={fontSize:"20px"},ee=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).destroy=function(e){var t=r.props,n=t.user,a=t.msgAlert;(function(e,t){return B()({method:"DELETE",url:U+"/chords/"+t,headers:{Authorization:"Bearer ".concat(e.token)}})})(n,e).then((function(){var t=Object.assign({},r.state);t.chords=t.chords.filter((function(t){return t._id!==e})),r.setState({chords:t.chords})})).then((function(){return a({heading:"Delete success",message:"Chord deleted",variant:"success"})})).catch((function(e){return a({heading:"Delete failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.state={chords:null},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,r=t.msgAlert;W(n).then((function(t){return e.setState({chords:t.data.chords})})).then((function(){return r({heading:"Index success",message:"Here are your chords",variant:"success"})})).catch((function(e){return r({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state.chords;if(null===this.state.chords)return"Loading...";var r=n.filter((function(e){return t.props.user._id===e.owner}));return e=0===r.length?"You have not created any chords yet, go create some!":r.map((function(e){return Object(g.jsx)(J.a,{style:K,children:Object(g.jsxs)(J.a.Body,{children:[Object(g.jsx)(J.a.Title,{style:Z,children:e.title}),Object(g.jsx)(J.a.Text,{style:$,children:e.body}),Object(g.jsx)(L.a,{onClick:function(){return t.destroy(e._id)},style:{marginRight:"6px"},children:"Delete Chord"}),Object(g.jsx)(L.a,{onClick:function(){return t.props.history.push("/chords/".concat(e._id,"/update"))},children:"Update Chord"})]})},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:Q,children:Object(g.jsxs)("h3",{style:{margin:"0 auto"},children:["Welcome to your Sound Board, ",this.props.user.name,"!"]})}),Object(g.jsx)("div",{style:X,children:e})]})}}]),n}(a.a.Component),te=Object(h.f)(ee),ne=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e){var t=e.target.name,n=e.target.value,a=Object.assign({},r.state.chord);a[t]=n,r.setState({chord:a})},r.handleSubmit=function(e){event.preventDefault();var t=r.props,n=t.user,a=t.msgAlert,s=t.history;(function(e,t,n){return B()({method:"PATCH",url:U+"/chords/"+t,headers:{Authorization:"Bearer ".concat(e.token)},data:{chord:{title:n.title,body:n.body}}})})(n,e,r.state.chord).then((function(e){return s.push("/my-wall")})).then((function(){return a({heading:"Chord Updated!",message:"Check out your wall!",variant:"success"})})).catch((function(e){a({heading:"Chord update failed",message:"Something went wrong: "+e.message,variant:"danger"})}))},r.state={chord:{title:"",body:""}},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e,t,n=this;(e=this.props.user,t=this.props.match.params.id,B()({method:"GET",url:U+"/chords/"+t,headers:{Authorization:"Bearer ".concat(e.token)}})).then((function(e){return n.setState({chord:{title:e.data.chord.title,body:e.data.chord.body}})})).catch((function(e){n.props.msgAlert({heading:"Failed to fetch chord",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e=this,t=this.state.chord,n=t.title,r=t.body;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"Update your chord!"}),Object(g.jsxs)(E.a,{onSubmit:function(){return e.handleSubmit(e.props.match.params.id)},children:[Object(g.jsxs)(E.a.Group,{controlId:"title",children:[Object(g.jsx)(E.a.Label,{children:"Chord Title"}),Object(g.jsx)(E.a.Control,{required:!0,name:"title",value:n,onChange:this.handleChange})]}),Object(g.jsxs)(E.a.Group,{controlId:"body",children:[Object(g.jsx)(E.a.Label,{children:"Body"}),Object(g.jsx)(E.a.Control,{required:!0,name:"body",value:r,onChange:this.handleChange})]}),Object(g.jsx)(L.a,{type:"submit",style:{marginTop:"5px"},children:"Update Chord"})]})]})}}]),n}(a.a.Component),re=Object(h.f)(ne),ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={users:null},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,r=t.msgAlert;(function(e){return B()({url:U+"/users",method:"GET",headers:{Authorization:"Bearer ".concat(e.token)}})})(n).then((function(t){return e.setState({users:t.data.users})})).then((function(){return r({heading:"Index Users",message:"Meet the other Musicians",variant:"success"})})).catch((function(e){return r({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state.users;if(null===this.state.users)return"Loading...";var r=n.filter((function(e){return t.props.user._id!==e._id}));return e=0===r.length?"No other musicians, check back soon":r.map((function(e){return Object(g.jsx)(J.a,{style:K,children:Object(g.jsxs)(J.a.Body,{children:[Object(g.jsx)(J.a.Title,{style:Z,children:e.name}),Object(g.jsx)(L.a,{onClick:function(){return t.props.history.push({pathname:"/users/".concat(e._id),musician:e.name})},children:"View Sound Board"})]})},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:Q,children:Object(g.jsx)("h3",{style:{margin:"0 auto"},children:"Here are all the other musicians"})}),Object(g.jsx)("div",{style:X,children:e})]})}}]),n}(a.a.Component),se=Object(h.f)(ae),ce=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={chords:null,musician:""},r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.user,r=t.msgAlert,a=t.location;W(n).then((function(t){e.setState({chords:t.data.chords,musician:a.musician})})).then((function(){return r({heading:"Index success",message:"Here are their chords",variant:"success"})})).catch((function(e){return r({heading:"Index failed",message:"Something went wrong: "+e.message,variant:"danger"})}))}},{key:"render",value:function(){var e,t=this,n=this.state,r=n.chords,a=n.musician;if(null===r)return"Loading...";var s=r.filter((function(e){return t.props.match.params.id===e.owner}));return e=0===s.length?"".concat(a," has not posted any chords"):s.map((function(e){return Object(g.jsx)(J.a,{style:K,children:Object(g.jsxs)(J.a.Body,{children:[Object(g.jsx)(J.a.Title,{style:Z,children:e.title}),Object(g.jsx)(J.a.Text,{style:$,children:e.body})]})},e._id)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{style:Q,children:Object(g.jsxs)("h3",{style:{margin:"0 auto"},children:["This Sound Board belongs to ",a]})}),Object(g.jsx)("div",{style:X,children:e})]})}}]),n}(a.a.Component),oe=Object(h.f)(ce),ie=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).setUser=function(e){return r.setState({user:e})},r.clearUser=function(){return r.setState({user:null})},r.deleteAlert=function(e){r.setState((function(t){return{msgAlerts:t.msgAlerts.filter((function(t){return t.id!==e}))}}))},r.msgAlert=function(e){var t=e.heading,n=e.message,a=e.variant,s=Object(j.a)();r.setState((function(e){return{msgAlerts:[].concat(Object(o.a)(e.msgAlerts),[{heading:t,message:n,variant:a,id:s}])}}))},r.state={user:null,msgAlerts:[]},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.msgAlerts,a=t.user;return Object(g.jsxs)(r.Fragment,{children:[Object(g.jsx)(k,{user:a}),n.map((function(t){return Object(g.jsx)(x,{heading:t.heading,variant:t.variant,message:t.message,id:t.id,deleteAlert:e.deleteAlert},t.id)})),Object(g.jsxs)("main",{className:"container",children:[Object(g.jsx)(h.b,{path:"/sign-up",render:function(){return Object(g.jsx)(G,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{path:"/sign-in",render:function(){return Object(g.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(h.b,{exact:!0,path:"/",render:function(){return Object(g.jsx)(_,{msgAlert:e.msgAlert,setUser:e.setUser})}}),Object(g.jsx)(O,{user:a,path:"/sign-out",render:function(){return Object(g.jsx)(M,{msgAlert:e.msgAlert,clearUser:e.clearUser,user:a})}}),Object(g.jsx)(O,{user:a,path:"/change-password",render:function(){return Object(g.jsx)(R,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(O,{user:a,path:"/create-chord",render:function(){return Object(g.jsx)(Y,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(O,{user:a,exact:!0,path:"/my-wall",render:function(){return Object(g.jsx)(te,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(O,{user:a,path:"/chords/:id/update",render:function(){return Object(g.jsx)(re,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(O,{user:a,exact:!0,path:"/users",render:function(){return Object(g.jsx)(se,{msgAlert:e.msgAlert,user:a})}}),Object(g.jsx)(O,{user:a,path:"/users/:id",render:function(){return Object(g.jsx)(oe,{msgAlert:e.msgAlert,user:a})}})]})]})}}]),n}(r.Component),de=Object(g.jsx)(y.a,{basename:"/React-team-project",children:Object(g.jsx)(ie,{})});c.a.render(de,document.getElementById("root"))},73:function(e,t,n){},82:function(e,t,n){}},[[103,1,2]]]);
//# sourceMappingURL=main.ff020c7b.chunk.js.map