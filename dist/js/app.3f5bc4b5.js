(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],u=0,f=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),i=a.n(n);i.a},"0429":function(t,e,a){t.exports=a.p+"img/item7.a6b90ffb.png"},"0a2c":function(t,e,a){t.exports=a.p+"img/item4.0347e8dc.png"},"128b":function(t,e,a){var n={"./flyers/flyer-1.png":"96d6","./flyers/flyer-2.png":"e91a","./flyers/flyer-3.png":"7aaf","./flyers/flyer-4.png":"f019","./flyers/flyer-5.png":"c491","./flyers/flyer-6.jpg":"5a56","./logos/logo-1.png":"5480","./logos/logo-2.png":"6225","./logos/logo-3.png":"1ba9","./logos/logo-4.png":"2f74","./logos/logo-5.jpg":"2c89","./logos/logo-6.png":"99b3","./logos/logo-7.png":"f763","./logos/logo-8.png":"40cc","./logos/logo-9.png":"4d12"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="128b"},"12b0":function(t,e,a){},"13bc":function(t,e,a){"use strict";var n=a("9d77"),i=a.n(n);i.a},"14f2":function(t,e,a){t.exports=a.p+"img/item5.d165b55f.png"},"1ba9":function(t,e,a){t.exports=a.p+"img/logo-3.433b87c0.png"},"1d9e":function(t,e,a){t.exports=a.p+"img/item8.d5944fae.png"},2841:function(t,e,a){"use strict";var n=a("4a0f"),i=a.n(n);i.a},"29d0":function(t,e,a){"use strict";var n=a("f01a"),i=a.n(n);i.a},"2acf":function(t,e,a){"use strict";var n=a("ba0d"),i=a.n(n);i.a},"2c89":function(t,e,a){t.exports=a.p+"img/logo-5.e3632afb.jpg"},"2f74":function(t,e,a){t.exports=a.p+"img/logo-4.0a19638a.png"},"34f6":function(t,e,a){"use strict";var n=a("5bf4"),i=a.n(n);i.a},"3d1b":function(t,e,a){"use strict";var n=a("75c3"),i=a.n(n);i.a},"40cc":function(t,e,a){t.exports=a.p+"img/logo-8.cb39b3cd.png"},"4a0f":function(t,e,a){},"4d12":function(t,e,a){t.exports=a.p+"img/logo-9.364daac9.png"},"4eba":function(t,e,a){t.exports=a.p+"img/item6.ef3be51f.png"},5480:function(t,e,a){t.exports=a.p+"img/logo-1.fbcf53e4.png"},5669:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("app-nav")],1),a("transition",{attrs:{"enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[a("router-view")],1),a("app-footer")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"menu-btn"},on:{click:t.showMenuBtn}},[a("div"),a("div"),a("div")]),a("nav",{style:{display:t.showMenu?t.flex:t.none},attrs:{id:"main-nav"}},[a("router-link",{attrs:{to:"/",tag:"li"}},[a("a",[t._v("Home")])]),a("router-link",{attrs:{to:"/dev-work",tag:"li"}},[a("a",[t._v("Dev Work")])]),a("router-link",{attrs:{to:"/design-work",tag:"li"}},[a("a",[t._v("Design Work")])]),a("router-link",{attrs:{to:"/about",tag:"li"}},[a("a",[t._v("About")])]),a("router-link",{attrs:{to:"/contact",tag:"li"}},[a("a",[t._v("Contact")])])],1)])},r=[],l={components:{},data:function(){return{showMenu:!0,none:"none",flex:"flex"}},methods:{showMenuBtn:function(){this.showMenu=!this.showMenu}}},c=l,p=(a("5d36"),a("2877")),u=Object(p["a"])(c,o,r,!1,null,"75d1d1fd",null),f=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("footer",{attrs:{id:"main-footer"}},[a("div",{staticClass:"container footer-container"},[a("div",{staticClass:"social-links"},[a("a",{attrs:{href:t.socialLinks.linkedin,target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{attrs:{href:t.socialLinks.instagram,target:"_blank"}},[a("i",{staticClass:"fab fa-instagram"})]),a("a",{attrs:{href:t.socialLinks.twitter,target:"_blank"}},[a("i",{staticClass:"fab fa-twitter"})]),a("a",{attrs:{href:t.socialLinks.github,target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])]),a("div",{staticClass:"site-links"},[a("router-link",{attrs:{to:"/about",tag:"li"}},[a("a",[t._v("About")])]),a("router-link",{attrs:{to:"/contact",tag:"li"}},[a("a",[t._v("Contact")])]),a("router-link",{attrs:{to:"/dev-work",tag:"li"}},[a("a",[t._v("My Work")])]),a("li",[a("a",{attrs:{href:t.socialLinks.github,target:"_blank"}},[t._v("GitHub")])])],1),t._m(0)])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{attrs:{id:"copyright"}},[t._v("© 2021 Javano Collins")])])}],m={data:function(){return{socialLinks:{linkedin:"https://www.linkedin.com/in/javano-collins/",twitter:"https://twitter.com/JavanoCollins",instagram:"https://www.instagram.com/javanocollins/",github:"https://github.com/JavanoCollins"}}}},v=m,b=(a("de69"),Object(p["a"])(v,d,g,!1,null,"51854298",null)),h=b.exports,y={components:{appNav:f,appFooter:h}},_=y,x=(a("034f"),Object(p["a"])(_,i,s,!1,null,null,null)),k=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container"},[a("app-type-writer")],1),a("app-specializations"),a("app-languages")],1)},C=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"typewriter"}},[a("div",{attrs:{id:"header-content"}},[a("h1",[t._v(" I am Javano Collins. "),a("span",{staticClass:"typed-text"},[t._v(t._s(t.typeValue))]),a("span",{staticClass:"cursor",class:{typing:t.typeStatus}})]),a("p",{staticClass:"lead"},[t._v(" I specialize in Web Development, and Graphic Design. ")]),a("router-link",{staticClass:"btn-light",attrs:{to:"/dev-work",tag:"button"}},[t._v("View My Work")])],1)])},S=[],T={data:function(){return{typeValue:"",typeStatus:!1,typeArray:["Software Engineer","Graphic Designer"],typingSpeed:40,erasingSpeed:80,newTextDelay:800,typeArrayIndex:0,charIndex:0}},methods:{typeText:function(){this.charIndex<this.typeArray[this.typeArrayIndex].length?(this.typeStatus||(this.typeStatus=!0),this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typeStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typeStatus||(this.typeStatus=!0),this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typeStatus=!1,this.typeArrayIndex+=1,this.typeArrayIndex>=this.typeArray.length&&(this.typeArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))}},created:function(){setTimeout(this.typeText,this.newTextDelay+200)}},I=T,O=(a("2acf"),Object(p["a"])(I,j,S,!1,null,"2d7556ef",null)),U=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"specialize"}},[a("div",{staticClass:"specials container"},[a("Specialize",{staticClass:"one",attrs:{icon:"fab fa-chrome",title:"Fullstack Developer",description:"I am a Fullstack Developer always open to learning new technologies. I ensure that applications are beautiful, performant, and mobile responsive.",subtitles:"Languages I speak",subtools:t.webSubTools,tools:t.webTools}}),a("Specialize",{staticClass:"two",attrs:{icon:"fas fa-brush",title:"Designer",description:"I have an extensive background in graphic design. I specialize in mobile and web design, logos, flyers, and business cards.",subtitles:"I enjoy designing",subtools:t.designSubTools,tools:t.designTools}})],1)])},D=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"specialization"},[a("i",{class:t.icon}),a("h3",{staticClass:"title"},[t._v(t._s(t.title))]),a("p",{staticClass:"description"},[t._v(t._s(t.description))]),a("div",{staticClass:"subtitles-div"},[a("p",{staticClass:"subtitles"},[t._v(t._s(t.subtitles)+":")]),t._l(t.subtools,(function(e,n){return a("p",{key:e,staticClass:"subtool"},[t._v(" "+t._s(t.subtools[n])+" ")])}))],2),a("div",{staticClass:"tools-div"},[a("p",{staticClass:"toolsType"},[t._v(t._s(t.toolsType)+" Tools:")]),t._l(t.tools,(function(e,n){return a("p",{key:e,staticClass:"tools"},[t._v(" "+t._s(t.tools[n])+" ")])}))],2)])},M=[],$={props:{icon:String,title:String,description:String,subtitles:String,subtools:Array,tools:Array,toolsType:String},data:function(){return{toolsTypeq:["Dev","Design"]}}},P=$,L=(a("34f6"),Object(p["a"])(P,A,M,!1,null,"741768e0",null)),z=L.exports,W={components:{Specialize:z},data:function(){return{webTools:["VS Code","Git","Github","Postman","PyCharm","Terminal"],webSubTools:["JavaScript","Vue","React","SASS","Node","Python","MySQL"],designTools:["Adobe XD","Illustrator","Photoshop"],designSubTools:["UX","UI","Logos","Flyers","Web","Mobile"]}}},V=W,N=(a("2841"),Object(p["a"])(V,E,D,!1,null,"14382536",null)),F=N.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"skills"}},[a("div",{attrs:{id:"html"}},[a("i",{staticClass:"fab fa-html5"}),a("p",{staticClass:"skill-name"},[t._v("Html5")])]),a("div",{attrs:{id:"css3"}},[a("i",{staticClass:"fab fa-css3-alt"}),a("p",{staticClass:"skill-name"},[t._v("Css3")])]),a("div",{attrs:{id:"js"}},[a("i",{staticClass:"fab fa-js"}),a("p",{staticClass:"skill-name"},[t._v("JavaScript")])]),a("div",{attrs:{id:"python"}},[a("i",{staticClass:"fab fa-python"}),a("p",{staticClass:"skill-name"},[t._v("Python")])]),a("div",{attrs:{id:"vue"}},[a("i",{staticClass:"fab fa-vuejs"}),a("p",{staticClass:"skill-name"},[t._v("Vue")])]),a("div",{attrs:{id:"react"}},[a("i",{staticClass:"fab fa-react"}),a("p",{staticClass:"skill-name"},[t._v("React")])]),a("div",{attrs:{id:"node"}},[a("i",{staticClass:"fab fa-node"}),a("p",{staticClass:"skill-name"},[t._v("Node")])]),a("div",{attrs:{id:"mysql"}},[a("i",{staticClass:"fas fa-database"}),a("p",{staticClass:"skill-name"},[t._v("MySQL")])])])])}],B={},H=B,R=(a("6f5e"),Object(p["a"])(H,G,J,!1,null,"7fde46ae",null)),Q=R.exports,X={components:{appTypeWriter:U,appSpecializations:F,appLanguages:Q}},q=X,K=Object(p["a"])(q,w,C,!1,null,"af89869c",null),Y=K.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container work-vue"},[t._m(0),a("h2",[t._v("**Under Maintenance**")]),a("div",{staticClass:"work-grid"},[a("app-dev-work-box",{attrs:{"image-url":"item1.png","project-title":"King's Castle","project-url":"http://youtube.com","project-type":"Website",projectDescription:"Vegan Restaurant"}}),a("app-dev-work-box",{attrs:{"image-url":"item2.png","project-title":"Great Designs","project-url":"http://udemy.com"}}),a("app-dev-work-box",{attrs:{"image-url":"item3.png","project-title":"Great Designs","project-url":"http://facebook.com"}})],1)])},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work"},[a("h1",[t._v("Dev Work")]),a("p",[t._v("Check out some of my projects")])])}],et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center py-2",attrs:{id:"work-a"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"items"},[n("div",{staticClass:"item"},[n("div",{staticClass:"item-image"},[n("img",{attrs:{src:a("fcca")("./"+t.imageUrl)}})]),n("div",{staticClass:"item-text"},[n("div",{staticClass:"item-text-wrap"},[n("p",{staticClass:"item-text-category"},[t._v(t._s(t.projectType))]),n("h2",{staticClass:"item-text-title"},[t._v(t._s(t.projectTitle))]),n("p",[t._v(t._s(t.projectDescription))]),n("a",{staticClass:"btn-light",attrs:{href:t.projectUrl}},[t._v("Check It Out")])])])])])])])},at=[],nt={props:{imageUrl:String,projectTitle:String,projectUrl:String,projectType:String,projectDescription:String},data:function(){return{title:{name:"Hello World"}}},methods:{goToUrl:function(){console.log("object")}}},it=nt,st=(a("13bc"),Object(p["a"])(it,et,at,!1,null,"7be4ff60",null)),ot=st.exports,rt={components:{appDevWorkBox:ot},methods:{navigateHome:function(){}}},lt=rt,ct=(a("c0e8"),Object(p["a"])(lt,Z,tt,!1,null,"ef80edbe",null)),pt=ct.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container work-vue"},[t._m(0),a("h2",{staticClass:"subtitle",attrs:{id:"logos"}},[t._v("Logos")]),a("div",{staticClass:"work-grid"},[a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-1.png"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-6.png"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-3.png"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-2.png"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-4.png"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-5.jpg"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-8.png"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-7.png"}}),a("app-design-work-box",{attrs:{directory:"logos",imageUrl:"logo-9.png"}})],1),a("h2",{staticClass:"subtitle",attrs:{id:"flyers"}},[t._v("Flyers")]),a("div",{staticClass:"work-grid"},[a("app-design-work-box",{attrs:{directory:"flyers",imageUrl:"flyer-1.png"}}),a("app-design-work-box",{attrs:{directory:"flyers",imageUrl:"flyer-2.png"}}),a("app-design-work-box",{attrs:{directory:"flyers",imageUrl:"flyer-5.png"}}),a("app-design-work-box",{attrs:{directory:"flyers",imageUrl:"flyer-4.png"}}),a("app-design-work-box",{attrs:{directory:"flyers",imageUrl:"flyer-6.jpg"}}),a("app-design-work-box",{attrs:{directory:"flyers",imageUrl:"flyer-3.png"}})],1)])},ft=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work"},[a("h1",[t._v("Design Work")]),a("p",[t._v("Check out some of my projects")])])}],dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-center py-2",attrs:{id:"work-a"}},[n("div",{staticClass:"container"},[n("img",{attrs:{src:a("128b")("./"+t.directory+"/"+t.imageUrl),alt:""}})])])},gt=[],mt={props:{imageUrl:String,directory:String},data:function(){return{}},methods:{goToUrl:function(){console.log("object")}}},vt=mt,bt=(a("29d0"),Object(p["a"])(vt,dt,gt,!1,null,"22683dd8",null)),ht=bt.exports,yt={components:{appDesignWorkBox:ht},methods:{navigateHome:function(){}}},_t=yt,xt=(a("cded"),Object(p["a"])(_t,ut,ft,!1,null,"78ac20c2",null)),kt=xt.exports,wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"about-me"},[n("h1",[t._v(t._s(t.title1))]),n("p",[t._v(" I'm Javano Collins, currently a Software Engineering major at "),n("a",{attrs:{id:"btvi",href:"//"+t.btviUrl,target:"_blank"}},[t._v("BTVI")]),t._v(" 🏫 . As a Software Engineer, I have fallen in love with web technologies, and find a academic and career interest in Machine Learning. ")]),n("br"),n("br"),t._m(0),n("br"),n("br"),t._m(1),n("img",{attrs:{id:"tools-banner",src:a("9cfb"),alt:"",srcset:""}})])])},Ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Additional things about me: "),a("br"),t._v(" I am a boxer, "),a("br"),t._v(" I am an avid reader (subjects: finance, psychology, history, stem) "),a("br"),t._v(" I love marine science and I self-proclaim to be an advocate for environmental health. An additional passion of mine lies in applying technology to marine science to save the ocean. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Some of the tools I use:"),a("br"),t._v(" Vue, React, Node, Sass, Python, MySQL, Photoshop, Illustrator, XD, Figma, Git, GitHub, VSCode, Postman ")])}],jt={data:function(){return{title1:"ABOUT ME",btviUrl:"btvi.edu.bs"}}},St=jt,Tt=(a("3d1b"),Object(p["a"])(St,wt,Ct,!1,null,"07818575",null)),It=Tt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{attrs:{id:"contact-form"}},[a("h1",[t._v("Shoot Me A Message")]),a("p",{attrs:{id:"alt-contact"}},[t._v(" You can also contact me on "),a("a",{attrs:{id:"instagram",href:"//"+t.instagramUrl,target:"_blank"}},[t._v("Instagram")]),t._v(" or "),a("a",{attrs:{id:"linkedin",href:"//"+t.linkedinUrl,target:"_blank"}},[t._v("LinkedIn")])]),t._m(0)])])},Ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{attrs:{method:"POST",action:"/contact"}},[a("label",{attrs:{for:"name"}},[t._v("Name:")]),a("div",[a("input",{staticClass:"input-field",attrs:{type:"name",placeholder:"Name",size:"40",name:"name"}})]),a("label",{attrs:{for:"email"}},[t._v("Email:")]),a("div",[a("input",{staticClass:"input-field",attrs:{type:"email",placeholder:"Email",size:"40",name:"email"}})]),a("label",{attrs:{for:"phone"}},[t._v("Phone:")]),a("div",[a("input",{staticClass:"input-field",attrs:{type:"phone",placeholder:"Phone",size:"40",name:"phone"}})]),a("label",{attrs:{for:"name"}},[t._v("Subject:")]),a("div",[a("input",{staticClass:"input-field",attrs:{type:"text",placeholder:"Subject",size:"40",name:"subject"}})]),a("label",{attrs:{for:"email"}},[t._v("Message:")]),a("div",[a("textarea",{attrs:{rows:"13",cols:"80",placeholder:"Feel free to shoot me a message",name:"message"}})]),a("button",{staticClass:"btn-light",attrs:{type:"submit"}},[t._v("Send Email")])])}],Et={data:function(){return{instagramUrl:"instagram.com/javanocollins/",linkedinUrl:"linkedin.com/in/javano-collins/"}}},Dt=Et,At=(a("7b7f"),Object(p["a"])(Dt,Ot,Ut,!1,null,"34f1a956",null)),Mt=At.exports,$t=[{path:"",component:Y},{path:"/about",component:It},{path:"/dev-work",component:pt},{path:"/design-work",component:kt},{path:"/contact",component:Mt}],Pt=a("8c4f"),Lt=a("660e");n["a"].config.productionTip=!1,n["a"].use(Pt["a"]),n["a"].use(Lt["a"],{breakpoints:{mobile:450,tablet:900,laptop:1920,desktop:1/0}});var zt=new Pt["a"]({routes:$t,mode:"history",scrollBehavior:function(){return{y:0}}});new n["a"]({render:function(t){return t(k)},router:zt}).$mount("#app")},"5a56":function(t,e,a){t.exports=a.p+"img/flyer-6.895fec92.jpg"},"5bf4":function(t,e,a){},"5d36":function(t,e,a){"use strict";var n=a("96f7"),i=a.n(n);i.a},6225:function(t,e,a){t.exports=a.p+"img/logo-2.1b2c7c43.png"},6726:function(t,e,a){t.exports=a.p+"img/item9.529c9c3c.png"},"6f5e":function(t,e,a){"use strict";var n=a("c5ba"),i=a.n(n);i.a},"75c3":function(t,e,a){},"7aaf":function(t,e,a){t.exports=a.p+"img/flyer-3.417fab7e.png"},"7b7f":function(t,e,a){"use strict";var n=a("12b0"),i=a.n(n);i.a},"7c71":function(t,e,a){t.exports=a.p+"img/item3.d82e2625.png"},"85ec":function(t,e,a){},"96d6":function(t,e,a){t.exports=a.p+"img/flyer-1.5276b7fc.png"},"96f7":function(t,e,a){},"99b3":function(t,e,a){t.exports=a.p+"img/logo-6.f68fa6a7.png"},"9b2d":function(t,e,a){},"9cfb":function(t,e,a){t.exports=a.p+"img/github-banner.24282079.jpg"},"9d77":function(t,e,a){},a861:function(t,e,a){t.exports=a.p+"img/item2.9184a0a0.png"},ba0d:function(t,e,a){},bda0:function(t,e,a){t.exports=a.p+"img/item1.8a1ff749.png"},c0e8:function(t,e,a){"use strict";var n=a("e987"),i=a.n(n);i.a},c491:function(t,e,a){t.exports=a.p+"img/flyer-5.1345ab23.png"},c5ba:function(t,e,a){},caa6:function(t,e,a){t.exports=a.p+"img/pexels-photo-747964.d0c5c88c.jpeg"},cded:function(t,e,a){"use strict";var n=a("9b2d"),i=a.n(n);i.a},de69:function(t,e,a){"use strict";var n=a("5669"),i=a.n(n);i.a},e91a:function(t,e,a){t.exports=a.p+"img/flyer-2.8f0ef881.png"},e987:function(t,e,a){},f019:function(t,e,a){t.exports=a.p+"img/flyer-4.a5c2cfdb.png"},f01a:function(t,e,a){},f763:function(t,e,a){t.exports=a.p+"img/logo-7.8901bc7d.png"},fcca:function(t,e,a){var n={"./item1.png":"bda0","./item2.png":"a861","./item3.png":"7c71","./item4.png":"0a2c","./item5.png":"14f2","./item6.png":"4eba","./item7.png":"0429","./item8.png":"1d9e","./item9.png":"6726","./pexels-photo-747964.jpeg":"caa6"};function i(t){var e=s(t);return a(e)}function s(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id="fcca"}});
//# sourceMappingURL=app.3f5bc4b5.js.map