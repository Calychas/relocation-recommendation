(this.webpackJsonpstreamlit_component_template=this.webpackJsonpstreamlit_component_template||[]).push([[0],{127:function(e,t){},168:function(e,t,n){e.exports=n(200)},193:function(e,t){},200:function(e,t,n){"use strict";n.r(t);var a=n(9),o=n.n(a),l=n(150),r=n.n(l),c=n(1),i=n(2),u=n(3),p=n(116),d=n(214),s=n(212),v=n(213),m=n(157),b=n(217),f={layers:n(199)};Object(s.a)({username:"public",apiKey:"default_public"});var h=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={selectedHexId:""},e.render=function(){var t=e.props.args.initialViewState,n=new b.a({configuration:f}),a=e.props.args.layers.map((function(e){return n.convert(e)}));e.props.theme;return o.a.createElement("span",null,o.a.createElement("div",{style:{position:"relative",height:"500px"}},o.a.createElement(d.a,{initialViewState:t,controller:!0,layers:a,height:"500px",onClick:function(t,n){var a,o,l=null!==(a=null===(o=t.object)||void 0===o?void 0:o.hex_id)&&void 0!==a?a:e.state.selectedHexId;console.log(l),e.setState({selectedHexId:l}),p.a.setComponentValue(l)},getTooltip:function(e){var t,n,a,o,l,r,c,i,u,p;return e&&{text:"Hex ID: ".concat(null!==(t=null===(n=e.object)||void 0===n?void 0:n.hex_id)&&void 0!==t?t:"","\nAverage price: ").concat(null!==(a=null===(o=e.object)||void 0===o?void 0:o.price)&&void 0!==a?a:0,"\nAverage price per m2: ").concat(null!==(l=null===(r=e.object)||void 0===r?void 0:r.price_per_m)&&void 0!==l?l:0,"\nAverage area: ").concat(null!==(c=null===(i=e.object)||void 0===i?void 0:i.area)&&void 0!==c?c:0,"\nNumber of offers: ").concat(null!==(u=null===(p=e.object)||void 0===p?void 0:p.count)&&void 0!==u?u:0)}}},o.a.createElement(m.a,{mapStyle:v.a.POSITRON}))))},e}return n}(p.b),g=Object(p.c)(h);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.7df5e08e.chunk.js.map