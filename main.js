var Z,m,Le,un,I,je,Pe,Me,Ae,ue,ae,de,_n,R={},Ie=[],fn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Y=Array.isArray;function j(e,t){for(var r in t)e[r]=t[r];return e}function _e(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function z(e,t,r){var i,s,o,l={};for(o in t)o=="key"?i=t[o]:o=="ref"?s=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?Z.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return q(e,l,i,s,null)}function q(e,t,r,i,s){var o={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Le,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(o),o}function C(e){return e.children}function K(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?H(e):null}function $e(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return $e(e)}}function Ne(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!J.__r++||je!=m.debounceRendering)&&((je=m.debounceRendering)||Pe)(J)}function J(){for(var e,t,r,i,s,o,l,d=1;I.length;)I.length>d&&I.sort(Me),e=I.shift(),d=I.length,e.__d&&(r=void 0,i=void 0,s=(i=(t=e).__v).__e,o=[],l=[],t.__P&&((r=j({},i)).__v=i.__v+1,m.vnode&&m.vnode(r),fe(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,o,s??H(i),!!(32&i.__u),l),r.__v=i.__v,r.__.__k[r.__i]=r,ze(o,r,l),i.__e=i.__=null,r.__e!=s&&$e(r)));J.__r=0}function De(e,t,r,i,s,o,l,d,u,a,f){var c,h,_,y,S,w,g,x=i&&i.__k||Ie,P=t.length;for(u=hn(r,t,x,u,P),c=0;c<P;c++)(_=r.__k[c])!=null&&(h=_.__i==-1?R:x[_.__i]||R,_.__i=c,w=fe(e,_,h,s,o,l,d,u,a,f),y=_.__e,_.ref&&h.ref!=_.ref&&(h.ref&&he(h.ref,null,_),f.push(_.ref,_.__c||y,_)),S==null&&y!=null&&(S=y),(g=!!(4&_.__u))||h.__k===_.__k?u=He(_,u,e,g):typeof _.type=="function"&&w!==void 0?u=w:y&&(u=y.nextSibling),_.__u&=-7);return r.__e=S,u}function hn(e,t,r,i,s){var o,l,d,u,a,f=r.length,c=f,h=0;for(e.__k=new Array(s),o=0;o<s;o++)(l=t[o])!=null&&typeof l!="boolean"&&typeof l!="function"?(u=o+h,(l=e.__k[o]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?q(null,l,null,null,null):Y(l)?q(C,{children:l},null,null,null):l.constructor==null&&l.__b>0?q(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=e,l.__b=e.__b+1,d=null,(a=l.__i=mn(l,r,u,c))!=-1&&(c--,(d=r[a])&&(d.__u|=2)),d==null||d.__v==null?(a==-1&&(s>f?h--:s<f&&h++),typeof l.type!="function"&&(l.__u|=4)):a!=u&&(a==u-1?h--:a==u+1?h++:(a>u?h--:h++,l.__u|=4))):e.__k[o]=null;if(c)for(o=0;o<f;o++)(d=r[o])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=H(d)),Be(d,d));return i}function He(e,t,r,i){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=He(s[o],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=H(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function mn(e,t,r,i){var s,o,l,d=e.key,u=e.type,a=t[r],f=a!=null&&(2&a.__u)==0;if(a===null&&e.key==null||f&&d==a.key&&u==a.type)return r;if(i>(f?1:0)){for(s=r-1,o=r+1;s>=0||o<t.length;)if((a=t[l=s>=0?s--:o++])!=null&&(2&a.__u)==0&&d==a.key&&u==a.type)return l}return-1}function Ee(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||fn.test(t)?r:r+"px"}function G(e,t,r,i,s){var o,l;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||Ee(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||Ee(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Ae,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?i?r.u=i.u:(r.u=ue,e.addEventListener(t,o?de:ae,o)):e.removeEventListener(t,o?de:ae,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Te(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=ue++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function fe(e,t,r,i,s,o,l,d,u,a){var f,c,h,_,y,S,w,g,x,P,M,O,B,Ce,V,F,le,k=t.type;if(t.constructor!=null)return null;128&r.__u&&(u=!!(32&r.__u),o=[d=t.__e=r.__e]),(f=m.__b)&&f(t);e:if(typeof k=="function")try{if(g=t.props,x="prototype"in k&&k.prototype.render,P=(f=k.contextType)&&i[f.__c],M=f?P?P.props.value:f.__:i,r.__c?w=(c=t.__c=r.__c).__=c.__E:(x?t.__c=c=new k(g,M):(t.__c=c=new K(g,M),c.constructor=k,c.render=xn),P&&P.sub(c),c.props=g,c.state||(c.state={}),c.context=M,c.__n=i,h=c.__d=!0,c.__h=[],c._sb=[]),x&&c.__s==null&&(c.__s=c.state),x&&k.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=j({},c.__s)),j(c.__s,k.getDerivedStateFromProps(g,c.__s))),_=c.props,y=c.state,c.__v=t,h)x&&k.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),x&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(x&&k.getDerivedStateFromProps==null&&g!==_&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,M),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,M)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(c.props=g,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(D){D&&(D.__=t)}),O=0;O<c._sb.length;O++)c.__h.push(c._sb[O]);c._sb=[],c.__h.length&&l.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,M),x&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(_,y,S)})}if(c.context=M,c.props=g,c.__P=e,c.__e=!1,B=m.__r,Ce=0,x){for(c.state=c.__s,c.__d=!1,B&&B(t),f=c.render(c.props,c.state,c.context),V=0;V<c._sb.length;V++)c.__h.push(c._sb[V]);c._sb=[]}else do c.__d=!1,B&&B(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++Ce<25);c.state=c.__s,c.getChildContext!=null&&(i=j(j({},i),c.getChildContext())),x&&!h&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(_,y)),F=f,f!=null&&f.type===C&&f.key==null&&(F=Ue(f.props.children)),d=De(e,Y(F)?F:[F],t,r,i,s,o,l,d,u,a),c.base=t.__e,t.__u&=-161,c.__h.length&&l.push(c),w&&(c.__E=c.__=null)}catch(D){if(t.__v=null,u||o!=null)if(D.then){for(t.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;o[o.indexOf(d)]=null,t.__e=d}else{for(le=o.length;le--;)_e(o[le]);pe(t)}else t.__e=r.__e,t.__k=r.__k,D.then||pe(t);m.__e(D,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=gn(r.__e,t,r,i,s,o,l,u,a);return(f=m.diffed)&&f(t),128&t.__u?void 0:d}function pe(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(pe)}function ze(e,t,r){for(var i=0;i<r.length;i++)he(r[i],r[++i],r[++i]);m.__c&&m.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){m.__e(o,s.__v)}})}function Ue(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Y(e)?e.map(Ue):j({},e)}function gn(e,t,r,i,s,o,l,d,u){var a,f,c,h,_,y,S,w=r.props,g=t.props,x=t.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(a=0;a<o.length;a++)if((_=o[a])&&"setAttribute"in _==!!x&&(x?_.localName==x:_.nodeType==3)){e=_,o[a]=null;break}}if(e==null){if(x==null)return document.createTextNode(g);e=document.createElementNS(s,x,g.is&&g),d&&(m.__m&&m.__m(t,o),d=!1),o=null}if(x==null)w===g||d&&e.data==g||(e.data=g);else{if(o=o&&Z.call(e.childNodes),w=r.props||R,!d&&o!=null)for(w={},a=0;a<e.attributes.length;a++)w[(_=e.attributes[a]).name]=_.value;for(a in w)if(_=w[a],a!="children"){if(a=="dangerouslySetInnerHTML")c=_;else if(!(a in g)){if(a=="value"&&"defaultValue"in g||a=="checked"&&"defaultChecked"in g)continue;G(e,a,null,_,s)}}for(a in g)_=g[a],a=="children"?h=_:a=="dangerouslySetInnerHTML"?f=_:a=="value"?y=_:a=="checked"?S=_:d&&typeof _!="function"||w[a]===_||G(e,a,_,w[a],s);if(f)d||c&&(f.__html==c.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),De(t.type=="template"?e.content:e,Y(h)?h:[h],t,r,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,l,o?o[0]:r.__k&&H(r,0),d,u),o!=null)for(a=o.length;a--;)_e(o[a]);d||(a="value",x=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[a]||x=="progress"&&!y||x=="option"&&y!=w[a])&&G(e,a,y,w[a],s),a="checked",S!=null&&S!=e[a]&&G(e,a,S,w[a],s))}return e}function he(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){m.__e(s,r)}}function Be(e,t,r){var i,s;if(m.unmount&&m.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||he(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){m.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&Be(i[s],t,r||typeof e.type!="function");r||_e(e.__e),e.__c=e.__=e.__e=void 0}function xn(e,t,r){return this.constructor(e,r)}function Fe(e,t,r){var i,s,o,l;t==document&&(t=document.documentElement),m.__&&m.__(e,t),s=(i=typeof r=="function")?null:r&&r.__k||t.__k,o=[],l=[],fe(t,e=(!i&&r||t).__k=z(C,null,[e]),s||R,R,t.namespaceURI,!i&&r?[r]:s?null:t.firstChild?Z.call(t.childNodes):null,o,!i&&r?r:s?s.__e:t.firstChild,i,l),ze(o,e,l)}Z=Ie.slice,m={__e:function(e,t,r,i){for(var s,o,l;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),l=s.__d),l)return s.__E=s}catch(d){e=d}throw e}},Le=0,un=function(e){return e!=null&&e.constructor==null},K.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof e=="function"&&(e=e(j({},r),this.props)),e&&j(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ne(this))},K.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ne(this))},K.prototype.render=C,I=[],Pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Me=function(e,t){return e.__v.__b-t.__v.__b},J.__r=0,Ae=/(PointerCapture)$|Capture$/i,ue=0,ae=Te(!1),de=Te(!0),_n=0;var vn=0,Wn=Array.isArray;function n(e,t,r,i,s,o){t||(t={});var l,d,u=t;if("ref"in u)for(d in u={},t)d=="ref"?l=t[d]:u[d]=t[d];var a={type:e,props:u,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--vn,__i:-1,__u:0,__source:s,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(d in l)u[d]===void 0&&(u[d]=l[d]);return m.vnode&&m.vnode(a),a}var bn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Re=new Set(bn);function yn(e){let t={};for(let r in e){let i=r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);t[i]=e[r]}return t}var me=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},wn=new me;function Q(){return`styled-component-${wn.next()}`}function We(e){let t=document.styleSheets;for(let r of t)for(let i of r.cssRules)if(i.cssText.includes(`.${e} `))return!0;return!1}function ge(e,t){if(!We(e)){let r=document.createElement("style");r.innerHTML=`.${e} { ${t} }`,document.head.appendChild(r)}}function Sn(e,t){if(!We(e)){let r=document.createElement("style");r.innerHTML=`.${e} ${t}`,document.head.appendChild(r)}}function kn(e,t){let r=JSON.stringify(yn(t),null,2);r=r.replaceAll(",",";"),r=r.replaceAll('"',"");let i=Q(),s=Object.assign(o=>{let{children:l,...d}=o;Sn(i,r);let a={className:o.className||i,...d};return s.className=i,z(e,a,l)},{className:void 0});return s}function Cn(e,t,...r){let i=Q(),s=Object.assign(o=>{let{children:l,...d}=o,u="",a=r.length;t.forEach((h,_)=>{_<a?u+=h+r[_]:u+=h}),ge(i,u);let c={className:o.className||i,...d};return s.className=i,z(e,c,l)},{className:void 0});return s}function jn(e){return e.length==0?!0:typeof e[0]!="function"}function Nn(e,t,...r){if(jn(r))return Cn(e,t,...r);let i=Object.assign(s=>{let o="",l=r.length;t.forEach((c,h)=>{h<l?o+=c+r[h](s):o+=c});let{children:d,...u}=s,a=i.mappedId.get(s);a||(a=Q(),ge(a,o),i.mappedId.set(s,a));let f={className:s.className||a,...u};return z(e,f,d)},{mappedId:new Map});return i}function En(e){return(t,...r)=>{let i="",s=r.length;t.forEach((l,d)=>{d<s?i+=l+r[d]:i+=l});let o=Object.assign(l=>{let{children:d,...u}=l,a=Q();console.log("aaa"),ge(a,i),e.className&&(a=`${e.className} ${a}`);let f=l.className||a;o.className=f;let c={className:f,...u};return z(e,c,d)},{className:void 0});return o}}var Oe=En;Re.forEach(e=>{Oe[e]=function(t,...r){return Array.isArray(t)&&"raw"in t?Nn(e,t,...r):kn(e,t)}});var Ve=Oe;function xe(e){return(t,...r)=>{let i="",s=r.length;t.forEach((d,u)=>{u<s?i+=d+r[u]:i+=d});let o=`@keyframes ${e} { ${i} }
`,l=document.createElement("style");l.innerHTML=o,document.head.appendChild(l)}}var $=class{keys;_mainKey;maps=new Map;constructor(t,r){this.keys=t,this._mainKey=r;for(let i in t)this.maps.set(i,"")}init(t){for(let r in this.keys){let i=t(r);this.maps.set(r,i)}}setCSS(t){return(r,...i)=>{let s="",o=i.length;r.forEach((l,d)=>{d<o?s+=l+i[d]:s+=l}),this.maps.set(t,s)}}get mainKey(){return this._mainKey}generate(){let t={},r="";this.keys.forEach((s,o)=>{t[s]=s;let l=`.${t[s]}`;s!=this.mainKey&&(l=`.${this.mainKey}.${s}`),r+=`${l} { ${this.maps.get(s)} }
`});let i=document.createElement("style");return i.innerHTML=r,document.head.appendChild(i),t}};var p=Ve;var Ge=p.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
  display: grid;
  grid-template-columns: auto auto;
  overflow: visible;
  width: 100%;
  @media screen and (max-width: 900px) {
    grid-template-columns: auto 120px;
  }
`,qe=p.div`
  font-weight: bold;
  margin-top: 10px;
  & img {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    & img {
      width: 280px;
    }
  }
`,Tn=["dropDown"],Ke=new $(Tn,"dropDown");Ke.setCSS("dropDown")`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  z-index: 1000;
  color: #4e7295ff;
  & a {
   color: black;
   padding: 12px 16px;
   text-decoration: none;
   display: block;
  }
  & a:hover {
    background-color: #14508cff;
  }
`;var nr=Ke.generate(),Ln=p.nav`
  background-color: ${({isdark:e})=>e?"#111111":"white"};
  overflow: visible;
  margin-left: 0;
  margin-right: 0;
  grid-column: 2/2;
  grid-row: 1;
  position: relative;
  display: flex;
  align-items: center;
  height: auto;
  visibility: visible;
  justify-content: center;
  & a {
    font-size: 1.5vw;
    padding: 14px 15px;
    text-decoration: none;
    flex-direction: row;
    box-sizing: border-box;
    color: #4e7295ff;
    overflow: visible;
  }
  & a:hover {
    color: #4e72e5ff;
  }
  & a:hover .dropDown {
    display: block;
  }

  @media screen and (max-width: 900px) {
    visibility: ${({autohide:e})=>e?"hidden":"visible"};
  }
`,Je=Ln;var Ze=p.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: ${({top:e})=>e||0}px;
  z-index: ${({zIndex:e})=>e||8};
  list-style-type: none;
  display: none;
  /* move flex-items in column */
  flex-direction: column;

  right: ${({isOpen:e})=>e?"0":"-100%"};
  transition: right 0.3s ease-in-out;

  @media screen and (max-width: 900px) {
    visibility: visible;
    display: flex;
  }
  & button {
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  & button:hover {
    background-color: #ddd;
    color: black;
  }
`,Ye=p.div`
  background-color: transparent;
  cursor: pointer;
  height: 50px;
  width: 50px;
  position: sticky;
  margin-right: 60px;
  margin-left: 75%;
  margin-top: 40px;
  color: blue;
  background-image: url("static/cross.svg");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
`,Qe=p.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 6fr 4fr;
`,Xe=p.div`
  position: relative;
  height: 100%;
  width: auto;
  background-color: transparent;
  backdrop-filter: blur(5px);

  @media screen and (min-width: 600px) {
    display: none;
  }
  grid-column: 1;
  grid-row: 1;
  display: block;
`,et=p.div`
  position: relative;
  height: 100%;
  width: auto;
  grid-column: 1/3;
  background-color: white;
  @media screen and (min-width: 600px) {
    grid-column: 2/3;
  }

  grid-row: 1;
  display: block;
`,tt=p.nav`
  margin-left: 15%;
  margin-right: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 7fr 1fr;
  gap: 4px;
  position: relative;
`,ve=p.span`
  text-align: center;
  grid-column: 3;
  font-size: 25px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: #73acdeff;
  visibility: ${({hidden:e})=>e?"hidden":"visible"};
  cursor: pointer;
  & a {
    font-size: 15px;
    color: #73acdeff;
    text-decoration: none;
  }
`,nt=p.span`
  text-align: center;
  grid-column: 3;
  font-size: 25px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: #73acdeff;
  & a {
    color: #73acdeff;
    text-decoration: none;
  }
`,rt=p.div`
  grid-column: 2;
  width: auto;
  height: 100%;
  background-image: ${({ishidden:e})=>e?'url("static/arrow-down.svg")':'url("static/arrow-up.svg")'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-color: transparent;
  cursor: pointer;
  border: none;
`,or=p.a`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-top: ${({isBottom:e})=>e?"auto":"0"};
  &:hover {
    background-color: #ddd;
    color: black;
  }
`,it=p.div`
  grid-column: 2/2;
  display: flex;
  justify-content: right;
  align-items: center;
  grid-row: 1;
  margin-right: 20px;
`,ot=p.button`
  background-color: #73acdeff;

  color: white;
  border: none;
  border-radius: 25%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: hidden;
  background-image: url("static/menu.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`,sr=p.button`
  position: fixed;
  bottom: ${({bottom:e})=>e||20}px;
  left: ${({isOpen:e,left:t})=>e?t||210:20}px;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({alwaysShown:e})=>e?"visible":"hidden"};
  background-image: url("static/search_icon.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  transition: left 0.3s ease-in-out;

  & hover {
    background-color: #0056b3;
  }

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
`;function st({children:e,onClick:t}){return n(Ge,{children:[n(Pn,{}),n(Je,{autohide:!0,children:e}),n(it,{children:n(ot,{onClick:t})})]})}function Pn(){return n(qe,{children:n("a",{href:"https://www.navic.cc/",children:n("img",{src:"static/navic_logo.png"})})})}var ct=p.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
`,lt=p.img`
  height: auto;
  width: 53%;
  position: relative;
  object-fit: cover;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`,at=p.div`
  position: relative;
  width: 47%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`,dt=p.div`
  height: auto;
  z-index: 3;
  top: 10%;
  left: 10%;
  position: absolute;
  text-align: left;
  font-size: 4vw;
  font-weight: bold;
  color: #1b4f80;
  padding: 0;
  gap: 0;
`;function pt(){return n(ct,{children:[n(at,{}),n(lt,{src:"./static/navic_top.jpg"}),n(dt,{children:n("p",{children:["\u4EBA\u3068\u306E\u3064\u306A\u304C\u308A\u3092\u5927\u5207\u306B\u3002",n("br",{}),"\u69D8\u3005\u306A\u5206\u91CE\u3067\u65B0\u305F\u306A\u4FA1\u5024\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304F\u3002"]})})]})}var ut=p.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`,_t=p.img`
  height: auto;
  width: 50%;
  object-fit: cover;
`,ft=p.div`
  margin-left: 30px;
  font-size: 4vw;
  width: 50%;
  font-weight: bold;
  color: #1b4f80;
  margin-top: 5%;
`;function ht(){return n(ut,{children:[n(_t,{src:"static/section2.jpg"}),n(ft,{children:n("p",{children:["\u5E38\u306B\u5148\u3092\u898B\u636E\u3048\u305F",n("br",{}),"\u4E8B\u696D\u5C55\u958B\u3067",n("br",{}),"\u65B0\u305F\u306A\u672A\u6765\u3092\u5207\u308A\u958B\u304F\u3002"]})})]})}var Mn=["fade-in-section","is-visible"],be=new $(Mn,"fade-in-section");be.setCSS("fade-in-section")`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 0.6s ;
  will-change: opacity, visibility;
  margin: 0;
`;be.setCSS("is-visible")`
  opacity: 1;
  transform: none;
  visibility: visible;
`;var ye=be.generate(),mt=p.div`
  width: 100%;
  height: 30px;
`,An=p.span`
  position: relative;
  display: inline-block;
  & .tooltiptext {
    visibility: hidden;
    background-color: #222222;
    font-size: 20px;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 5px;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  &:hover .tooltiptext {
    visibility: visible;
  }
`,gt=p.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`,xt=p.div`
  text-align: left;
  margin-left: 12%;
  height: auto;
  align-self: center;
  justify-self: start;
  margin-bottom: 0%;
  grid-area: 1/1/2/2;
  position: relative;
  h2 {
    font-size: 6vw;
    margin: 0;
    color: white;
  }
`,vt=p.div`
  grid-area: 1/1/2/2;
  align-self: start;
  margin-bottom: 0%;
  margin-top: 5%;
  margin-right: 0;
  margin-right: 6%;

  justify-self: end;
  grid-area: 1/1/2/2;
  h1 {
    font-size: 8vw;
    color: #7296baff;
    margin: 0;
  }
`;var W,v,we,bt,ee=0,Et=[],b=m,yt=b.__b,wt=b.__r,St=b.diffed,kt=b.__c,Ct=b.unmount,jt=b.__;function ke(e,t){b.__h&&b.__h(v,e,ee||t),ee=0;var r=v.__H||(v.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function U(e){return ee=1,In(Pt,e)}function In(e,t,r){var i=ke(W++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):Pt(void 0,t),function(d){var u=i.__N?i.__N[0]:i.__[0],a=i.t(u,d);u!==a&&(i.__N=[a,i.__[1]],i.__c.setState({}))}],i.__c=v,!v.__f)){var s=function(d,u,a){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(h){return!!h.__c});if(f.every(function(h){return!h.__N}))return!o||o.call(this,d,u,a);var c=i.__c.props!==d;return f.forEach(function(h){if(h.__N){var _=h.__[0];h.__=h.__N,h.__N=void 0,_!==h.__[0]&&(c=!0)}}),o&&o.call(this,d,u,a)||c};v.__f=!0;var o=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(d,u,a){if(this.__e){var f=o;o=void 0,s(d,u,a),o=f}l&&l.call(this,d,u,a)},v.shouldComponentUpdate=s}return i.__N||i.__}function te(e,t){var r=ke(W++,3);!b.__s&&Lt(r.__H,t)&&(r.__=e,r.u=t,v.__H.__h.push(r))}function Tt(e){return ee=5,$n(function(){return{current:e}},[])}function $n(e,t){var r=ke(W++,7);return Lt(r.__H,t)&&(r.__=e(),r.__H=t,r.__h=e),r.__}function Dn(){for(var e;e=Et.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(X),e.__H.__h.forEach(Se),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){v=null,yt&&yt(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),jt&&jt(e,t)},b.__r=function(e){wt&&wt(e),W=0;var t=(v=e.__c).__H;t&&(we===v?(t.__h=[],v.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(X),t.__h.forEach(Se),t.__h=[],W=0)),we=v},b.diffed=function(e){St&&St(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Et.push(t)!==1&&bt===b.requestAnimationFrame||((bt=b.requestAnimationFrame)||Hn)(Dn)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),we=v=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(X),r.__h=r.__h.filter(function(i){return!i.__||Se(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],b.__e(i,r.__v)}}),kt&&kt(e,t)},b.unmount=function(e){Ct&&Ct(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{X(i)}catch(s){t=s}}),r.__H=void 0,t&&b.__e(t,r.__v))};var Nt=typeof requestAnimationFrame=="function";function Hn(e){var t,r=function(){clearTimeout(i),Nt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);Nt&&(t=requestAnimationFrame(r))}function X(e){var t=v,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),v=t}function Se(e){var t=v;e.__c=e.__(),v=t}function Lt(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function Pt(e,t){return typeof t=="function"?t(e):t}function Mt({children:e}){let[t,r]=U(!0),i=Tt(null);return te(()=>{let s=new IntersectionObserver(o=>{o.forEach(l=>r(l.isIntersecting))});return s.observe(i.current),()=>s.unobserve(i.current)},[]),n("div",{className:`${ye["fade-in-section"]} ${t?ye["is-visible"]:""}`,ref:i,children:e})}function At(){return n(mt,{})}function ne({ja:e,en:t}){return n(gt,{children:[n(xt,{children:n("h2",{children:n("span",{children:e})})}),n(vt,{children:n("h1",{children:n("span",{children:t})})})]})}var It=p.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  background-color: #f5faffff;
`,$t=p.div`
  text-align: center;
  width: 100%;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  & h1 {
    margin: 1px;
    font-size: 9vw;
    color: #73acdeff;
    margin-bottom: 0;
  }
  & h5 {
    margin-bottom: 40px;
    margin-top: 0px;
    font-size: 1.5vw;
    color: #14508cff;
    @media screen and (max-width: 900px) {
      visibility: hidden;
      margin-bottom: 10px;
    }
  }
`,Dt=p.div`
  width: 100%;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 50px;
`;function Ht(){return n(It,{children:[n(Dt,{}),n($t,{children:[n("h1",{children:"NAVIC\u306E\u53D6\u308A\u7D44\u307F"}),n("h5",{children:"OUR SERVICE"})]})]})}var zt=p.section`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 6fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow-x: auto;

  max-width: var(--container-xl);
`,Ut=p.div`
  display: flex;
  gap: 15em;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  grid-column: 4;
  grid-row: 2/9;
  & img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    flex: 0 0 100%;
    scroll-snap-align: center;
  }
  scrollbar-width: none;
`,Bt=p.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  grid-row: 5;
  grid-column: 2;
  background-image: url("static/arrow-left.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
`,Ft=p.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  grid-row: 5;
  grid-column: 6;
  background-image: url("static/arrow-right.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
`;xe("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;function Rt(){te(()=>{let i=setInterval(()=>{r()},3e3);return()=>clearInterval(i)});let e=i=>{let{scrollLeft:s,clientWidth:o}=i.currentTarget;s>=o*4.8&&i.currentTarget.scrollTo({left:0,behavior:"instant"})},t=()=>{let i=document.getElementById("mainSlider");if(i!=null){let s=i.scrollLeft,o=i.clientWidth,l=s-o;if(l<0){l=2*o,i.scrollTo({left:l,behavior:"instant"});return}i.scrollTo({left:l,behavior:"smooth"})}},r=()=>{let i=document.getElementById("mainSlider");if(i!=null){let s=i.scrollLeft,o=i.clientWidth;i.scrollTo({left:s+o,behavior:"smooth"})}};return n(zt,{children:[n(Bt,{onClick:t}),n(Ut,{id:"mainSlider",onScroll:e,children:[n("img",{src:"static/display.jpg"}),n("img",{src:"static/display2.jpg"}),n("img",{src:"static/display3.jpg"}),n("img",{src:"static/display4.jpg"}),n("img",{src:"static/display.jpg"})]}),n(Ft,{onClick:r})]})}var Wt=p.section`
  display: grid;
  grid-area: 8/1/9/2;
  grid-template-columns: repeat(15, 1fr);
  position: relative;
  align-self: stretch;
  height: auto;
  gap: 30px;
`,Ot=p.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
  grid-column: 2/14;
  grid-row: 2;
`,re=p.img`
  width: 20%;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
`,ie=p.div`
  width: 80%;
  margin-left: 8px;
  overflow: clip;
  & h1 {
    font-size: 20px;
    color: #32679bff;
  }
  & h3 {
    font-size: 12px;
    color: #32679bff;
  }
`,oe=p.div`
  border: 1px solid blue;
  height: 16vw;
  display: flex;
`,Vt=p.div`
  grid-column: 2/14;
  grid-row: 3;

  & h3 {
    font-size: 40px;
  }
  & a {
    color: #14508cff;
  }
`;function Gt(){return n(Wt,{children:[n(Ot,{children:[n(oe,{children:[n(re,{src:"static/mv2.jpg"}),n(ie,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(oe,{children:[n(re,{src:"static/mv2.jpg"}),n(ie,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(oe,{children:[n(re,{src:"static/mv2.jpg"}),n(ie,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]})]}),n(Vt,{children:n("h3",{children:n("span",{children:n("a",{href:"https://www.navic.cc/news",children:"VIEW ALL"})})})})]})}var qt=p.section`
  align-items: center;
  position: relative;
  width: 100%;
`,Kt=p.div`
  display: grid;
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 3%;
  margin-bottom: 3%;
  grid-template-columns: auto auto auto auto auto auto auto;
  gap: 4px;
  @media screen and (max-width: 900px) {
    grid-template-columns: auto auto;
  }
`,N=p.div`
  align-items: center;
  border: 1px solid blue;
`,Jt=p.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,Zt=p.img`
  margin-top: 3px;
  margin-left: 4px;
  margin-right: 4px;
  width: 90%;
`,E=p.div`
  align-items: center;
  color: blue;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 10px;
`;function A({src:e}){return n(Jt,{children:n(Zt,{src:e})})}function Yt(){return n(qt,{children:n(Kt,{children:[n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]})]})})}var Qt=p.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template_columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  width: 100%;
`,Xt=p.div`
  align-self: center;
  justify-self: center;
  justify-content: center;
  grid-area: 1/1/2/2;
  position: relative;
  display: flex;
  height: auto;

  & img {
    object-fit: cover;
    width: 65%;
  }
  @media screen and (max-width: 900px) {
    & img {
      width: 45%;
    }
  }
`,en=p.div`
  grid-area: 1/1/2/2;
  position: relative;
  justify-self: center;
  align-self: center;
  display: flex;
  height: auto;
  width: 64%;
  aspect-ratio: 1;
  background: transparent;
  & svg {
    width: 100%;
    height: 100%;
    fill-opacity: 0;
    stroke: #14508cff;
    stroke-width: 1px;
  }
`;function se(e){switch(e){case 0:return{left:40,right:0,bottom:62,top:6};case 1:return{left:20,right:0,bottom:53,top:15};case 2:return{left:10,right:0,bottom:0,top:36};case 3:return{left:20,right:0,bottom:15,top:56};case 4:return{left:40,right:0,bottom:8,top:64};case 5:return{left:64,right:0,bottom:15,top:56};case 6:return{left:72,right:0,bottom:0,top:36};default:return{left:62,right:0,bottom:53,top:15}}}var T=p.div`
  aspect-ratio: 1;
  height: auto;
  display: grid;
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: start;
  margin-left: ${({place:e})=>se(e).left}%;
  margin-top: ${({place:e})=>se(e).top}%;
  margin-bottom: ${({place:e})=>se(e).bottom}%;
  margin-right: ${({place:e})=>se(e).right}%;
  width: 20%;
  position: relative;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  overflow: clip;
`,L=p.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #053769ff;
  width: 100%;
  gap: 0;
  margin: 0;
  padding: 0;
  & h2 {
    font-size: 33px;
    font-weight: bold;
    margin: 0;
  }

  & br {
    content: "";
    display: block;
  }
  & img {
    margin: 0;
    width: 80%;
  }
  @media screen and (max-width: 900px) {
    & h2 {
      font-size: 22px;
    }
    & img {
      width: 60%;
    }
  }
  position: relative;
`;function tn(){return n(Qt,{children:[n(en,{children:n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"20 20 160 160","aria-hidden":!0,datatype:"shape",role:"presentation","aria-label":"",preserveAspectRatio:"xMidYMid meet",children:n("g",{children:n("path",{d:"M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"})})})}),n(Xt,{children:n("img",{src:"static/navic_logo.png"})}),n(T,{place:0,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"EC\u4E8B\u696D"]}),n("img",{src:"static/center0.png"})]})}),n(T,{place:1,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"\u5378\u8CA9\u58F2",n("br",{}),"\u5916\u6CE8\u53D6\u4ED8"]}),n("img",{src:"static/center1.png"})]})}),n(T,{place:2,children:n(L,{children:[n("h2",{children:"\u30EC\u30F3\u30BF\u30EB"}),n("img",{src:"static/center2.png"})]})}),n(T,{place:3,children:n(L,{children:[n("h2",{children:"\u8CBF\u6613"}),n("img",{src:"static/center3.png"}),n("img",{src:"static/center3.1.png"})]})}),n(T,{place:4,children:n(L,{children:[n("h2",{children:["\u30B0\u30EB\u30FC\u30D7",n("br",{}),"\u4E8B\u696D"]}),n("img",{src:"static/center4.png"})]})}),n(T,{place:5,children:n(L,{children:[n("h2",{children:"\u5065\u5EB7"}),n("img",{src:"static/center5.png"})]})}),n(T,{place:6,children:n(L,{children:[n("h2",{children:["\u8C4A\u6A4B",n("br",{}),"\u30EA\u30C6\u30FC\u30EB"]}),n("img",{src:"static/center6.0.png",style:{maxHeight:30}}),n("img",{src:"static/center6.1.png"}),n("img",{src:"static/center6.2.png"})]})}),n(T,{place:7,children:n(L,{children:[n("h2",{children:["\u81EA\u793E\u5546\u54C1",n("br",{}),"\u958B\u767A"]}),n("img",{src:"static/center7.jpg"})]})})]})}var nn=p.section`
  position: relative;
`,rn=p.div`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
  background-color: #14508cff;
  color: white;
  display: flex;
  justify-content: center;
  height: 30px;
  & h5 {
    margin: 6px;
  }
`,on=p.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
`,sn=p.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  gap: 10%;
  width: 70%;
`,cn=p.span`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  width: 120px;
  height: 120px;
  position: relative;
  cursor: pointer;
  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 12px;
    text-align: center;
  }
  & img {
    width: 50px;
    transition: width 1s 0.1s;
  }
  &:hover {
    border-radius: 30%;
    background-color: #14508cff;
    & img {
      width: 100px;
    }
  }
`;function ln(){return n("footer",{children:n(nn,{children:[n(rn,{children:n("h5",{children:"Copyright(C) NAVIC Co.,LTD. All Rights Reserved."})}),n(on,{children:n(sn,{children:[n(ce,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ce,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ce,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",n("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),n(ce,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",n("br",{}),"TikTok"]})]})})]})})}function ce({img:e,url:t,children:r}){return n(cn,{children:n("a",{href:t,children:[n("img",{src:e}),n("span",{children:r})]})})}var zn=[{context:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D",url:"https://www.navic.cc/car-installation"},{context:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D",url:"https://www.navic.cc/car-supplies-onlineshop"},{context:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D",url:"https://www.navic.cc/clezeed"}];function an(){return n(tt,{children:[n(Un,{title:"\u4E8B\u696D\u7D39\u4ECB",menu:zn}),n(nt,{children:n("a",{href:"https://navic-plaza.com/",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})})]})}function Un({title:e,menu:t}){let[r,i]=U(!0),s=()=>{i(!r)};return n(C,{children:[n(rt,{onClick:s,ishidden:r}),n(ve,{onClick:s,children:e}),t.map(({context:o,url:l},d)=>n(ve,{hidden:r,children:n("a",{href:l,children:o})},d))]})}function Bn({onClick:e}){return n(st,{onClick:e,children:[n("a",{href:"#main",children:["\u4E8B\u696D\u7D39\u4ECB",n("div",{class:"dropDown",children:[n("a",{children:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D"}),n("a",{children:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D"}),n("a",{children:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D"})]})]}),n("a",{href:"#feature",children:"\u304A\u77E5\u3089\u305B"}),n("a",{href:"#install",children:["\u4F1A\u793E\u60C5\u5831",n("div",{class:"dropDown",children:[n("a",{children:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D"}),n("a",{children:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D"}),n("a",{children:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D"})]})]}),n("a",{href:"/doc",children:"\u63A1\u7528\u60C5\u5831"}),n("a",{href:"/doc",children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"}),n("a",{href:"/doc",children:"\u304A\u554F\u3044\u5408\u308F\u305B"}),n("a",{href:"/doc",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})]})}function dn(){let[e,t]=U(!1),r=()=>{t(!e)};return n(C,{children:[n(Mt,{children:n(Bn,{onClick:r})}),n(Ze,{isOpen:e,children:n(Qe,{children:[n(Xe,{}),n(et,{children:[n(Ye,{type:"button",onClick:r}),n(an,{})]})]})}),n(pt,{}),n(At,{}),n(ht,{}),n(Ht,{}),n(tn,{}),n(ne,{ja:"\u304A\u77E5\u3089\u305B",en:"NEWS"}),n(Gt,{}),n(ne,{ja:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2",en:"SOCIAL MEDIA"}),n(Rt,{}),n(ne,{ja:"\u5916\u90E8\u30EA\u30F3\u30AF",en:"LINK"}),n(Yt,{}),n(ln,{})]})}var pn=document.getElementById("mount");pn&&Fe(n(dn,{}),pn);
