(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/aNI":function(e,t,a){e.exports=a.p+"static/suit-1547d7c16594f64a2c263469c44d2eed.png"},"3vT7":function(e,t,a){e.exports=a.p+"static/RESUME-2937d4396ba3eb5743fdcf0a8098e0ed.pdf"},"PEP/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=s(a("q1tI")),r=s(a("i8i4")),l=s(a("l3G4"));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.resizeImage=function(){var e=r.default.findDOMNode(a.refs.image);if(null!==e){var t=e instanceof HTMLImageElement?e.naturalWidth:0,n=e instanceof HTMLImageElement?e.naturalHeight:0,i=a.props.width/t,l=a.props.height/n;i<l?a.setState({width:t*i,height:n*i}):a.setState({width:t*l,height:n*l})}},a.showNoImage=function(){null!=a.props.noImageSrc&&a.setState({isNoImage:!0})},a.state={width:0,height:0,isNoImage:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e={wrapper:{position:"relative",width:this.props.width,height:this.props.height,backgroundColor:this.props.backgroundColor},image:{position:"absolute",display:"block",left:(this.props.width-this.state.width)/2,top:(this.props.height-this.state.height)/2,width:this.state.width,height:this.state.height}},t=this.props.style?(0,l.default)(this.props.style,e.wrapper):e.wrapper;return this.state.isNoImage?i.default.createElement("div",{style:t},i.default.createElement("img",{ref:"image",src:this.props.noImageSrc,alt:this.props.noImageAlt||"noimage",style:e.image,onLoad:this.resizeImage})):i.default.createElement("div",{style:t},i.default.createElement("img",{ref:"image",src:this.props.src,alt:this.props.alt,style:e.image,onLoad:this.resizeImage,onError:this.showNoImage}))}}]),t}(i.default.Component);t.default=o},RXBc:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.r(t);var i=a("dI71"),r=a("q1tI"),l=a.n(r),s=a("Bl7J"),o=function(e){return l.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},l.a.createElement("div",{className:"logo"},l.a.createElement("span",{className:"icon fa-diamond"})),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"David Vilensky"),l.a.createElement("p",null,l.a.createElement("b",null,"Cornell University 2024",l.a.createElement("br",null)," Languages: English & Russian",l.a.createElement("br",null)," Majors: Applied Economics & Management || Information Science")))),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("intro")}},"About Me")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("projects")}},"Projects")),l.a.createElement("li",null),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("resume")}},"Resume")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(){e.onOpenArticle("contact")}},"Contact")))))},c=(a("PEP/"),a("/aNI")),m=a.n(c),u=a("3vT7"),h=a.n(u),p=(a("oGbZ"),a("Uuh6")),d=a.n(p),f=(a("uD+Z"),a("kUlh")),A=a.n(f),E=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this,t=l.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return l.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},l.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{className:"major"},"Intro"),l.a.createElement("span",{className:"image main"},l.a.createElement("img",{src:m.a,alt:""})),l.a.createElement("p",null,"Hi, my name is David Vilensky. I'm currently studying Information Science at Cornell's College of Agricultural Life Sciences. I'm involved in a variety of clubs on campus, including ",l.a.createElement("a",{href:"https://www.cebscornell.com"},"Cornell European Business Society (CEBS) "),"and ",l.a.createElement("a",{href:"https://cusd.cornell.edu/"}," Cornell University Sustainability and Design (CUSD)"),". CUSD is currently working on updating our website to better reflect our mission and standards."),l.a.createElement("p",null,"I'm really fascinated by Data Science and how it relates to business. My objective is to leverage my mathemanmntical and programming abilities to help businesses gain actionable, data-driven insights. See the projects page for an example of how I used data science to analyze and compare mutual fund + ETF returns."),t),l.a.createElement("article",{id:"projects",className:("projects"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{style:{color:"darkorchid"},className:"major"},"Projects"),l.a.createElement("span",{className:"image main"},l.a.createElement("h2",{style:{color:"darkorchid"}}," Mutual Fund vs. ETF Analysis"),l.a.createElement("li",null,"During my second semester at Cornell I enrolled in the Introduction to Data Science course where we learned the basics of data cleaning and machine learning. As part of the course, I used Pandas to analyze Mutual Funds vs ETF returns. This included determing which criteria are most conducive to a fund's success as well as using machine learning techniques to actually predict the returns of various funds.",l.a.createElement("i",null,l.a.createElement("b",null," Click ",l.a.createElement("b",{style:{color:"darkorchid"}},l.a.createElement("a",{href:"https://www.kaggle.com/davidvilensky/mf-and-etfs-analysis"},"here"))," to view the executed .ipynb file."))," ",l.a.createElement("br",null)),l.a.createElement("h2",{style:{color:"darkorchid"}}," ",l.a.createElement("br",null)," RNA Splicing Research "),l.a.createElement("li",null,"From the end of junior year until the beginning of the COVID pandemic I participated in a research project in the field of computational biology at Albert Einstein College of Medicine. I worked alongside with Dr. Kenny Ye and Dr. Matt Gamble to analyze on the dysregulation of alternative splicing, a fundamental phenomenon in cell biology that enables a single gene to encode multiple proteins. Dysregulation of alternative splicing has been linked to cancer and several developmental diseases. My contribution to the project was to analyze data from RNA transcription data to create mathematical models representing the relative amount of nascent RNAs at several termination sites.",l.a.createElement("i",null,l.a.createElement("b",null," Click ",l.a.createElement("b",{style:{color:"darkorchid"}},l.a.createElement("a",{href:A.a},"here"))," to download a copy of the research abstract.")))),t),l.a.createElement("article",{id:"resume",className:("resume"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{style:{color:"hotpink"},className:"major"},"resume"),l.a.createElement("span",{className:"major"},l.a.createElement("a",{href:h.a,style:{color:"hotpink"}},"Download link"),l.a.createElement("br",null),l.a.createElement("img",{src:d.a,alt:"",width:"750",height:"1000"})),t),l.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},l.a.createElement("h2",{style:{color:"darkorchid"},className:"major"},"Contact"),l.a.createElement("form",{action:"https://getform.io/f/07ce7048-eb6a-4612-8fbe-bbc5b0f8d537",method:"POST"},l.a.createElement("div",{className:"field half first"},l.a.createElement("label",{htmlFor:"name"},"Name"),l.a.createElement("input",{type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"field half"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{type:"text",name:"email",id:"email"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"message"},"Message"),l.a.createElement("textarea",{name:"message",id:"message",rows:"4"})),l.a.createElement("button",{type:"submit"},"Send")),l.a.createElement("li",null,l.a.createElement("h2",{style:{color:"darkorchid"}},"Find me on social media!")),l.a.createElement("ul",{className:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/david.vilensky.52",className:"icon fa-facebook"},l.a.createElement("span",{className:"label"},"Facebook"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/davidvilensky_/?hl=en",className:"icon fa-instagram"},l.a.createElement("span",{className:"label"},"Instagram"))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/davidarik",className:"icon fa-github"},l.a.createElement("span",{className:"label"},"GitHub")))),t))},t}(l.a.Component),b=function(e){return l.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},l.a.createElement("p",{className:"copyright"},"© Gatsby Starter - Dimension. Design: ",l.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with: ",l.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))},y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(n(a)),a.handleCloseArticle=a.handleCloseArticle.bind(n(a)),a.setWrapperRef=a.setWrapperRef.bind(n(a)),a.handleClickOutside=a.handleClickOutside.bind(n(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return l.a.createElement(s.a,{location:this.props.location},l.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},l.a.createElement("div",{id:"wrapper"},l.a.createElement(o,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),l.a.createElement(E,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),l.a.createElement(b,{timeout:this.state.timeout})),l.a.createElement("div",{id:"bg"})))},t}(l.a.Component);t.default=y},Uuh6:function(e,t,a){e.exports=a.p+"static/ResumeSS-15bc70c87bd2c8c7b4dc0eb020f33563.png"},kUlh:function(e,t,a){e.exports=a.p+"static/ResearchAbstract-52f0dbc89dac6d4a21563d763c2cd894.pdf"},l3G4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,i=a("YVoz"),r=(n=i)&&n.__esModule?n:{default:n};t.default=function(){for(var e={},t=arguments.length,a=Array(t),n=0;n<t;n++)a[n]=arguments[n];for(var i=0;i<a.length;++i)a[i]&&(0,r.default)(e,a[i]);return e}},oGbZ:function(e,t,a){e.exports=a.p+"static/prompic-dc74b7c2663d0ca1dfaa499b5a722b5f.jpg"},"uD+Z":function(e,t){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=component---src-pages-index-js-5ae33c4e9a5d02e2223f.js.map