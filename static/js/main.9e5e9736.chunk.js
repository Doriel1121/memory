(this.webpackJsonpmemorygame=this.webpackJsonpmemorygame||[]).push([[0],{150:function(e,t,n){},151:function(e,t,n){},457:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n.n(c),o=n(12),s=n.n(o),i=(n(150),n(30)),d=n(31),l=n(33),u=n(32),m=(n(151),n(34)),j=n(6),h=(n(93),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){},a.state={},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"mainDiv",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-2"}),Object(a.jsx)("div",{className:"difficulty col-8",children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{style:{color:"#3bd6a4",fontWeight:"900"},children:"Memory Game"}),Object(a.jsx)("h2",{style:{color:"#3bd6a4"},children:"Difficulty"}),Object(a.jsx)(m.b,{to:{pathname:"/game",state:{amount:5}},children:Object(a.jsx)("button",{children:"EASY"})}),Object(a.jsx)(m.b,{to:{pathname:"/game",state:{amount:8}},children:Object(a.jsx)("button",{children:"MEDIUM"})}),Object(a.jsx)(m.b,{to:{pathname:"/game",state:{amount:11}},children:Object(a.jsx)("button",{children:"HARD"})})]})}),Object(a.jsx)("div",{className:"col-2"})]})})})}}]),n}(c.PureComponent)),b=n(91),p=(n(156),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){console.log(a.state.tempCard)},a.clickToFlip=function(){document.getElementById(a.props.location).style.transform="rotateY(180deg)",a.props.returnedCard(a.props.card.name,a.props.location)},a.state={tempCard:void 0,id:void 0},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.state.tempCard),Object(a.jsxs)("div",{id:"".concat(this.props.location),onClick:function(){return e.clickToFlip()},className:"card",children:[Object(a.jsx)("div",{className:"card-face frontCard",children:Object(a.jsx)("img",{className:"image",alt:"pic",src:"./png/".concat(this.props.card.name,".png")})}),Object(a.jsx)("div",{className:"card-face backCard",children:this.props.location%2===0?"Try me!":"Or me"})]})}}]),n}(c.PureComponent)),O=n(90),f=n.n(O),x=n(63),g=n.n(x),y=n(460),v=n(461),C=n(144),k=n.n(C),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){var e;switch(a.props.location.state.amount){case 5:e=a.state.cards.slice(0,5);break;case 8:e=a.state.cards.slice(0,8);break;default:e=a.state.cards.slice(0,11)}(e=[].concat(Object(b.a)(e),Object(b.a)(e))).sort((function(e,t){return.5-Math.random()})),a.setState({shuffledCards:e})},a.countMatch=function(e){console.log(e),a.setState({count:e})},a.FlipBack=function(e,t){document.getElementById(e).style.transform="rotateY(0deg)",document.getElementById(t).style.transform="rotateY(0deg)",a.setState({tempCard:"",tempId:""}),document.querySelector(".noclick").style.display="none"},a.getTempCard=function(e,t){var n=a.state.counter;""===a.state.tempCard?a.setState({tempCard:e,tempId:t}):e===a.state.tempCard?(++n===a.props.location.state.amount&&a.setState({trigger:!0}),a.setState({tempCard:"",tempId:"",counter:n})):e!==a.state.tempCard&&(f()(document).ready((function(){f()("body").append('<div class="noclick" />'),document.querySelector(".noclick").style.display="block"})),setTimeout((function(){a.FlipBack(t,a.state.tempId)}),1500))},a.handleClose=function(){a.setState({trigger:!1})},a.state={cards:[{name:"001-youtube"},{name:"002-yelp"},{name:"003-wordpress"},{name:"004-wikipedia"},{name:"005-whatsapp"},{name:"006-vine"},{name:"007-vimeo"},{name:"008-twitter"},{name:"009-tumblr"},{name:"010-trello"},{name:"011-stumbleupon"},{name:"012-spotify"},{name:"013-soundcloud"},{name:"014-snapchat"},{name:"015-skype"},{name:"016-shutterstock"},{name:"017-scribd"},{name:"018-reddit"},{name:"019-quora"},{name:"020-plaxo"}],shuffledCards:[],tempCard:"",tempId:"",counter:0,trigger:!1},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.state.counter),Object(a.jsxs)("div",{children:[this.state.trigger?Object(a.jsx)(k.a,{width:window.innerWidth,height:window.innerHeight}):null,Object(a.jsxs)(y.a,{show:this.state.trigger,onHide:this.handleClose,children:[Object(a.jsx)(y.a.Header,{style:{backgroundColor:"#f9ffc0"},closeButton:!0,children:Object(a.jsx)(y.a.Title,{children:"Great job"})}),Object(a.jsx)(y.a.Body,{style:{backgroundColor:"#d0ffb6"},children:"Woohoo, you have finished the game. Let's have another one"}),Object(a.jsx)(y.a.Footer,{style:{backgroundColor:"#f9ffc0",justifyContent:"center"},children:Object(a.jsx)(v.a,{variant:"secondary",onClick:this.handleClose,children:Object(a.jsx)(m.b,{style:{textDecoration:"none",color:"white"},to:"/",children:"Play"})})})]}),Object(a.jsxs)("div",{id:"header",children:[Object(a.jsxs)("h2",{id:"headerCounter",children:["Score:",this.state.counter]}),Object(a.jsxs)("h2",{children:["Time:"," ",Object(a.jsx)("span",{style:{color:"grey"},children:Object(a.jsxs)(g.a,{startImmediately:!0,children:[Object(a.jsx)(g.a.Minutes,{}),":",Object(a.jsx)(g.a.Seconds,{})]})})]})]}),Object(a.jsx)("div",{className:"cardParentDiv",children:this.state.shuffledCards.map((function(t,n){return console.log(n),Object(a.jsx)("div",{className:"scene",children:Object(a.jsx)(p,{returnedCard:e.getTempCard,counter:e.countMatch,card:t,location:n})},n)}))})]})}}]),n}(c.PureComponent),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{id:"App",children:Object(a.jsx)(m.a,{basename:"/memory",children:Object(a.jsxs)(j.c,{children:[Object(a.jsx)(j.a,{exact:!0,path:"/",component:h}),Object(a.jsx)(j.a,{exact:!0,path:"/game",component:w})]})})})}}]),n}(c.PureComponent),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,462)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),I()}},[[457,1,2]]]);
//# sourceMappingURL=main.9e5e9736.chunk.js.map