(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),r=n(6),c=n.n(r),o=n(1),i=n(2),l=n(4),u=n(3),m=(n(13),n(7)),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isReversed:!1,sortBy:""},t.reverse=function(){t.setState((function(t){return{isReversed:!t.reverse}}))},t.reset=function(){t.setState({isReversed:!1,sortBy:""})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.props.goods,n=Object(m.a)(e);return n.sort((function(e,n){switch(t.state.sortBy){case"name":return e.localeCompare(n);case"length":return e.length-n.length;default:return 0}})),this.state.isReversed&&n.reverse(),s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"list"},n.map((function(t){return s.a.createElement("li",{className:"list__item",key:t},t)}))),s.a.createElement("div",{className:"container"},s.a.createElement("button",{type:"button",className:"list__btn",onClick:this.reverse},"Reverse"),s.a.createElement("button",{type:"button",className:"list__btn",onClick:function(){t.setState({sortBy:"name"})}},"Sort by alphabet"),s.a.createElement("button",{type:"button",className:"list__btn",onClick:function(){t.setState({sortBy:"length"})}},"Sort by length"),s.a.createElement("button",{type:"button",className:"list__btn",onClick:this.reset},"Reset")))}}]),n}(s.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={isListVisible:!1},t.showList=function(){return t.setState({isListVisible:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.isListVisible;return s.a.createElement("div",{className:"App"},t?s.a.createElement(b,{goods:p}):s.a.createElement("button",{type:"button",className:"start__btn",onClick:this.showList},"Start"))}}]),n}(s.a.Component);c.a.render(s.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.eb13970b.chunk.js.map