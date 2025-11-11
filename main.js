var J,m,je,qt,H,ye,Ce,Ne,Ee,ae,se,ce,Gt,F={},Te=[],Kt=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z=Array.isArray;function j(e,t){for(var r in t)e[r]=t[r];return e}function _e(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function M(e,t,r){var i,s,o,l={};for(o in t)o=="key"?i=t[o]:o=="ref"?s=t[o]:l[o]=t[o];if(arguments.length>2&&(l.children=arguments.length>3?J.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)l[o]===void 0&&(l[o]=e.defaultProps[o]);return q(e,l,i,s,null)}function q(e,t,r,i,s){var o={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++je,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(o),o}function A(e){return e.children}function G(e,t){this.props=e,this.context=t}function I(e,t){if(t==null)return e.__?I(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?I(e):null}function Pe(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Pe(e)}}function we(e){(!e.__d&&(e.__d=!0)&&H.push(e)&&!K.__r++||ye!=m.debounceRendering)&&((ye=m.debounceRendering)||Ce)(K)}function K(){for(var e,t,r,i,s,o,l,_=1;H.length;)H.length>_&&H.sort(Ne),e=H.shift(),_=H.length,e.__d&&(r=void 0,i=void 0,s=(i=(t=e).__v).__e,o=[],l=[],t.__P&&((r=j({},i)).__v=i.__v+1,m.vnode&&m.vnode(r),pe(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,o,s??I(i),!!(32&i.__u),l),r.__v=i.__v,r.__.__k[r.__i]=r,Le(o,r,l),i.__e=i.__=null,r.__e!=s&&Pe(r)));K.__r=0}function $e(e,t,r,i,s,o,l,_,d,a,f){var c,h,u,y,S,w,g,x=i&&i.__k||Te,P=t.length;for(d=Jt(r,t,x,d,P),c=0;c<P;c++)(u=r.__k[c])!=null&&(h=u.__i==-1?F:x[u.__i]||F,u.__i=c,w=pe(e,u,h,s,o,l,_,d,a,f),y=u.__e,u.ref&&h.ref!=u.ref&&(h.ref&&de(h.ref,null,u),f.push(u.ref,u.__c||y,u)),S==null&&y!=null&&(S=y),(g=!!(4&u.__u))||h.__k===u.__k?d=Ae(u,d,e,g):typeof u.type=="function"&&w!==void 0?d=w:y&&(d=y.nextSibling),u.__u&=-7);return r.__e=S,d}function Jt(e,t,r,i,s){var o,l,_,d,a,f=r.length,c=f,h=0;for(e.__k=new Array(s),o=0;o<s;o++)(l=t[o])!=null&&typeof l!="boolean"&&typeof l!="function"?(d=o+h,(l=e.__k[o]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?q(null,l,null,null,null):Z(l)?q(A,{children:l},null,null,null):l.constructor==null&&l.__b>0?q(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=e,l.__b=e.__b+1,_=null,(a=l.__i=Zt(l,r,d,c))!=-1&&(c--,(_=r[a])&&(_.__u|=2)),_==null||_.__v==null?(a==-1&&(s>f?h--:s<f&&h++),typeof l.type!="function"&&(l.__u|=4)):a!=d&&(a==d-1?h--:a==d+1?h++:(a>d?h--:h++,l.__u|=4))):e.__k[o]=null;if(c)for(o=0;o<f;o++)(_=r[o])!=null&&(2&_.__u)==0&&(_.__e==i&&(i=I(_)),De(_,_));return i}function Ae(e,t,r,i){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=Ae(s[o],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=I(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Zt(e,t,r,i){var s,o,l,_=e.key,d=e.type,a=t[r],f=a!=null&&(2&a.__u)==0;if(a===null&&e.key==null||f&&_==a.key&&d==a.type)return r;if(i>(f?1:0)){for(s=r-1,o=r+1;s>=0||o<t.length;)if((a=t[l=s>=0?s--:o++])!=null&&(2&a.__u)==0&&_==a.key&&d==a.type)return l}return-1}function Se(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||Kt.test(t)?r:r+"px"}function V(e,t,r,i,s){var o,l;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||Se(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||Se(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Ee,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?i?r.u=i.u:(r.u=ae,e.addEventListener(t,o?ce:se,o)):e.removeEventListener(t,o?ce:se,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function ke(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=ae++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function pe(e,t,r,i,s,o,l,_,d,a){var f,c,h,u,y,S,w,g,x,P,$,R,z,be,W,B,oe,k=t.type;if(t.constructor!=null)return null;128&r.__u&&(d=!!(32&r.__u),o=[_=t.__e=r.__e]),(f=m.__b)&&f(t);e:if(typeof k=="function")try{if(g=t.props,x="prototype"in k&&k.prototype.render,P=(f=k.contextType)&&i[f.__c],$=f?P?P.props.value:f.__:i,r.__c?w=(c=t.__c=r.__c).__=c.__E:(x?t.__c=c=new k(g,$):(t.__c=c=new G(g,$),c.constructor=k,c.render=Yt),P&&P.sub(c),c.props=g,c.state||(c.state={}),c.context=$,c.__n=i,h=c.__d=!0,c.__h=[],c._sb=[]),x&&c.__s==null&&(c.__s=c.state),x&&k.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=j({},c.__s)),j(c.__s,k.getDerivedStateFromProps(g,c.__s))),u=c.props,y=c.state,c.__v=t,h)x&&k.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),x&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(x&&k.getDerivedStateFromProps==null&&g!==u&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,$),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,$)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(c.props=g,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(D){D&&(D.__=t)}),R=0;R<c._sb.length;R++)c.__h.push(c._sb[R]);c._sb=[],c.__h.length&&l.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,$),x&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(u,y,S)})}if(c.context=$,c.props=g,c.__P=e,c.__e=!1,z=m.__r,be=0,x){for(c.state=c.__s,c.__d=!1,z&&z(t),f=c.render(c.props,c.state,c.context),W=0;W<c._sb.length;W++)c.__h.push(c._sb[W]);c._sb=[]}else do c.__d=!1,z&&z(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++be<25);c.state=c.__s,c.getChildContext!=null&&(i=j(j({},i),c.getChildContext())),x&&!h&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(u,y)),B=f,f!=null&&f.type===A&&f.key==null&&(B=He(f.props.children)),_=$e(e,Z(B)?B:[B],t,r,i,s,o,l,_,d,a),c.base=t.__e,t.__u&=-161,c.__h.length&&l.push(c),w&&(c.__E=c.__=null)}catch(D){if(t.__v=null,d||o!=null)if(D.then){for(t.__u|=d?160:128;_&&_.nodeType==8&&_.nextSibling;)_=_.nextSibling;o[o.indexOf(_)]=null,t.__e=_}else{for(oe=o.length;oe--;)_e(o[oe]);le(t)}else t.__e=r.__e,t.__k=r.__k,D.then||le(t);m.__e(D,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):_=t.__e=Qt(r.__e,t,r,i,s,o,l,d,a);return(f=m.diffed)&&f(t),128&t.__u?void 0:_}function le(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(le)}function Le(e,t,r){for(var i=0;i<r.length;i++)de(r[i],r[++i],r[++i]);m.__c&&m.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){m.__e(o,s.__v)}})}function He(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Z(e)?e.map(He):j({},e)}function Qt(e,t,r,i,s,o,l,_,d){var a,f,c,h,u,y,S,w=r.props,g=t.props,x=t.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(a=0;a<o.length;a++)if((u=o[a])&&"setAttribute"in u==!!x&&(x?u.localName==x:u.nodeType==3)){e=u,o[a]=null;break}}if(e==null){if(x==null)return document.createTextNode(g);e=document.createElementNS(s,x,g.is&&g),_&&(m.__m&&m.__m(t,o),_=!1),o=null}if(x==null)w===g||_&&e.data==g||(e.data=g);else{if(o=o&&J.call(e.childNodes),w=r.props||F,!_&&o!=null)for(w={},a=0;a<e.attributes.length;a++)w[(u=e.attributes[a]).name]=u.value;for(a in w)if(u=w[a],a!="children"){if(a=="dangerouslySetInnerHTML")c=u;else if(!(a in g)){if(a=="value"&&"defaultValue"in g||a=="checked"&&"defaultChecked"in g)continue;V(e,a,null,u,s)}}for(a in g)u=g[a],a=="children"?h=u:a=="dangerouslySetInnerHTML"?f=u:a=="value"?y=u:a=="checked"?S=u:_&&typeof u!="function"||w[a]===u||V(e,a,u,w[a],s);if(f)_||c&&(f.__html==c.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),$e(t.type=="template"?e.content:e,Z(h)?h:[h],t,r,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,l,o?o[0]:r.__k&&I(r,0),_,d),o!=null)for(a=o.length;a--;)_e(o[a]);_||(a="value",x=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[a]||x=="progress"&&!y||x=="option"&&y!=w[a])&&V(e,a,y,w[a],s),a="checked",S!=null&&S!=e[a]&&V(e,a,S,w[a],s))}return e}function de(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){m.__e(s,r)}}function De(e,t,r){var i,s;if(m.unmount&&m.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||de(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){m.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&De(i[s],t,r||typeof e.type!="function");r||_e(e.__e),e.__c=e.__=e.__e=void 0}function Yt(e,t,r){return this.constructor(e,r)}function Ie(e,t,r){var i,s,o,l;t==document&&(t=document.documentElement),m.__&&m.__(e,t),s=(i=typeof r=="function")?null:r&&r.__k||t.__k,o=[],l=[],pe(t,e=(!i&&r||t).__k=M(A,null,[e]),s||F,F,t.namespaceURI,!i&&r?[r]:s?null:t.firstChild?J.call(t.childNodes):null,o,!i&&r?r:s?s.__e:t.firstChild,i,l),Le(o,e,l)}J=Te.slice,m={__e:function(e,t,r,i){for(var s,o,l;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),l=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),l=s.__d),l)return s.__E=s}catch(_){e=_}throw e}},je=0,qt=function(e){return e!=null&&e.constructor==null},G.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof e=="function"&&(e=e(j({},r),this.props)),e&&j(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),we(this))},G.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),we(this))},G.prototype.render=A,H=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ne=function(e,t){return e.__v.__b-t.__v.__b},K.__r=0,Ee=/(PointerCapture)$|Capture$/i,ae=0,se=ke(!1),ce=ke(!0),Gt=0;var Xt=0,yn=Array.isArray;function n(e,t,r,i,s,o){t||(t={});var l,_,d=t;if("ref"in d)for(_ in d={},t)_=="ref"?l=t[_]:d[_]=t[_];var a={type:e,props:d,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Xt,__i:-1,__u:0,__source:s,__self:o};if(typeof e=="function"&&(l=e.defaultProps))for(_ in l)d[_]===void 0&&(d[_]=l[_]);return m.vnode&&m.vnode(a),a}var en=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Me=new Set(en);function tn(e){let t={};for(let r in e){let i=r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);t[i]=e[r]}return t}var ue=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},nn=new ue;function Q(){return`styled-component-${nn.next()}`}function Ue(e){let t=document.styleSheets;for(let r of t)for(let i of r.cssRules)if(i.cssText.includes(`.${e} `))return!0;return!1}function fe(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} { ${t} }`,document.head.appendChild(r)}}function rn(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} ${t}`,document.head.appendChild(r)}}function on(e,t){let r=JSON.stringify(tn(t),null,2);r=r.replaceAll(",",";"),r=r.replaceAll('"',"");let i=Q(),s=Object.assign(o=>{let{children:l,..._}=o;rn(i,r);let a={className:o.className||i,..._};return s.className=i,M(e,a,l)},{className:void 0});return s}function sn(e,t,...r){let i=Q(),s=Object.assign(o=>{let{children:l,..._}=o,d="",a=r.length;t.forEach((h,u)=>{u<a?d+=h+r[u]:d+=h}),fe(i,d);let c={className:o.className||i,..._};return s.className=i,M(e,c,l)},{className:void 0});return s}function cn(e){return e.length==0?!0:typeof e[0]!="function"}function ln(e,t,...r){if(cn(r))return sn(e,t,...r);let i=Object.assign(s=>{let o="",l=r.length;t.forEach((c,h)=>{h<l?o+=c+r[h](s):o+=c});let{children:_,...d}=s,a=i.mappedId.get(s);a||(a=Q(),fe(a,o),i.mappedId.set(s,a));let f={className:s.className||a,...d};return M(e,f,_)},{mappedId:new Map});return i}function an(e){return(t,...r)=>{let i="",s=r.length;t.forEach((l,_)=>{_<s?i+=l+r[_]:i+=l});let o=Object.assign(l=>{let{children:_,...d}=l,a=Q();console.log("aaa"),fe(a,i),e.className&&(a=`${e.className} ${a}`);let f=l.className||a;o.className=f;let c={className:f,...d};return M(e,c,_)},{className:void 0});return o}}var ze=an;Me.forEach(e=>{ze[e]=function(t,...r){return Array.isArray(t)&&"raw"in t?ln(e,t,...r):on(e,t)}});var Be=ze;function he(e){return(t,...r)=>{let i="",s=r.length;t.forEach((_,d)=>{d<s?i+=_+r[d]:i+=_});let o=`@keyframes ${e} { ${i} }
`,l=document.createElement("style");l.innerHTML=o,document.head.appendChild(l)}}var O=class{keys;_mainKey;maps=new Map;constructor(t,r){this.keys=t,this._mainKey=r;for(let i in t)this.maps.set(i,"")}init(t){for(let r in this.keys){let i=t(r);this.maps.set(r,i)}}setCSS(t){return(r,...i)=>{let s="",o=i.length;r.forEach((l,_)=>{_<o?s+=l+i[_]:s+=l}),this.maps.set(t,s)}}get mainKey(){return this._mainKey}generate(){let t={},r="";this.keys.forEach((s,o)=>{t[s]=s;let l=`.${t[s]}`;s!=this.mainKey&&(l=`.${this.mainKey}.${s}`),r+=`${l} { ${this.maps.get(s)} }
`});let i=document.createElement("style");return i.innerHTML=r,document.head.appendChild(i),t}};var p=Be;var Fe=p.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
  display: grid;
  grid-template_columns: auto auto;
  margin-left: 10px;
  z-index: 10;
  overflow: visible;
`,Oe=p.div`
  font-weight: bold;
  margin-top: 10px;
  & img {
    width: 250px;
  }
`,_n=["dropDown"],Re=new O(_n,"dropDown");Re.setCSS("dropDown")`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1000;
  & a {
   color: black;
   padding: 12px 16px;
   text-decoration: none;
   display: block;
  }
`;var Hn=Re.generate(),pn=p.nav`
  backdrop-filter: blur(10px);
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
    z-index: 999;
  }
  & a:hover .dropDown {
    display: block;
  }

  @media screen and (max-width: 900px) {
    visibility: ${({autohide:e})=>e?"hidden":"visible"};
  }
`,We=pn;function Ve({children:e}){return n(Fe,{children:[n(dn,{}),n(We,{autohide:!0,children:e})]})}function dn(){return n(Oe,{children:n("a",{href:"https://www.navic.cc/",children:n("img",{src:"static/navic_logo.png"})})})}var qe=p.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
`,Ge=p.img`
  height: auto;
  width: 53%;
  position: relative;
  object-fit: cover;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`,Ke=p.div`
  position: relative;
  width: 47%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`,Je=p.div`
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
`;function Ze(){return n(qe,{children:[n(Ke,{}),n(Ge,{src:"./static/navic_top.jpg"}),n(Je,{children:n("p",{children:["\u4EBA\u3068\u306E\u3064\u306A\u304C\u308A\u3092\u5927\u5207\u306B\u3002",n("br",{}),"\u69D8\u3005\u306A\u5206\u91CE\u3067\u65B0\u305F\u306A\u4FA1\u5024\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304F\u3002"]})})]})}var Qe=p.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`,Ye=p.img`
  height: auto;
  width: 50%;
  object-fit: cover;
`,Xe=p.div`
  margin-left: 30px;
  font-size: 4vw;
  width: 50%;
  font-weight: bold;
  color: #1b4f80;
  margin-top: 5%;
`;function et(){return n(Qe,{children:[n(Ye,{src:"static/section2.jpg"}),n(Xe,{children:n("p",{children:["\u5E38\u306B\u5148\u3092\u898B\u636E\u3048\u305F",n("br",{}),"\u4E8B\u696D\u5C55\u958B\u3067",n("br",{}),"\u65B0\u305F\u306A\u672A\u6765\u3092\u5207\u308A\u958B\u304F\u3002"]})})]})}var tt=p.div`
  width: 100%;
  height: 30px;
`,un=p.span`
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
`,nt=p.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`,rt=p.div`
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
`,it=p.div`
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
`;function ot(){return n(tt,{})}function Y({ja:e,en:t}){return n(nt,{children:[n(rt,{children:n("h2",{children:n("span",{children:e})})}),n(it,{children:n("h1",{children:n("span",{children:t})})})]})}var st=p.li`
  backdrop-filter: blur(10px);
  width: ${({width:e})=>e||180}px;
  height: 100%;
  background-color: #333330aa;
  position: fixed;
  top: ${({top:e})=>e||0}px;
  z-index: ${({zIndex:e})=>e||3};
  visibility: ${({autohide:e})=>e?"hidden":"visible"};
  list-style-type: none;
  display: flex;
  /* move flex-items in column */
  flex-direction: column;

  left: ${({isOpen:e})=>e?"0":"-200px"};
  transition: left 0.3s ease-in-out;

  @media screen and (max-width: 900px) {
    visibility: visible;
  }
  & button {
    background-color: transparent;
    border-width: 0;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  & button:hover {
    background-color: #ddd;
    color: black;
  }
`,U=p.a`
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
`,ct=p.button`
  position: fixed;
  top: ${({top:e})=>e||20}px;
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
`,tr=p.button`
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
`;var ge,v,me,lt,xe=0,mt=[],b=m,at=b.__b,_t=b.__r,pt=b.diffed,dt=b.__c,ut=b.unmount,ft=b.__;function fn(e,t){b.__h&&b.__h(v,e,xe||t),xe=0;var r=v.__H||(v.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function gt(e){return xe=1,hn(xt,e)}function hn(e,t,r){var i=fn(ge++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):xt(void 0,t),function(_){var d=i.__N?i.__N[0]:i.__[0],a=i.t(d,_);d!==a&&(i.__N=[a,i.__[1]],i.__c.setState({}))}],i.__c=v,!v.__f)){var s=function(_,d,a){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(h){return!!h.__c});if(f.every(function(h){return!h.__N}))return!o||o.call(this,_,d,a);var c=i.__c.props!==_;return f.forEach(function(h){if(h.__N){var u=h.__[0];h.__=h.__N,h.__N=void 0,u!==h.__[0]&&(c=!0)}}),o&&o.call(this,_,d,a)||c};v.__f=!0;var o=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(_,d,a){if(this.__e){var f=o;o=void 0,s(_,d,a),o=f}l&&l.call(this,_,d,a)},v.shouldComponentUpdate=s}return i.__N||i.__}function mn(){for(var e;e=mt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(X),e.__H.__h.forEach(ve),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){v=null,at&&at(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ft&&ft(e,t)},b.__r=function(e){_t&&_t(e),ge=0;var t=(v=e.__c).__H;t&&(me===v?(t.__h=[],v.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(X),t.__h.forEach(ve),t.__h=[],ge=0)),me=v},b.diffed=function(e){pt&&pt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(mt.push(t)!==1&&lt===b.requestAnimationFrame||((lt=b.requestAnimationFrame)||gn)(mn)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),me=v=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(X),r.__h=r.__h.filter(function(i){return!i.__||ve(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],b.__e(i,r.__v)}}),dt&&dt(e,t)},b.unmount=function(e){ut&&ut(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{X(i)}catch(s){t=s}}),r.__H=void 0,t&&b.__e(t,r.__v))};var ht=typeof requestAnimationFrame=="function";function gn(e){var t,r=function(){clearTimeout(i),ht&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);ht&&(t=requestAnimationFrame(r))}function X(e){var t=v,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),v=t}function ve(e){var t=v;e.__c=e.__(),v=t}function xt(e,t){return typeof t=="function"?t(e):t}var vt=p.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  background-color: #f5faffff;
`,bt=p.div`
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
`,yt=p.div`
  width: 100%;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 50px;
`;function wt(){return n(vt,{children:[n(yt,{}),n(bt,{children:[n("h1",{children:"NAVIC\u306E\u53D6\u308A\u7D44\u307F"}),n("h5",{children:"OUR SERVICE"})]})]})}var St=p.section`
  overflow: hidden;
  position: relative;
  display: flex;
  border: 5px solid red;
  overflow-x: auto;
  max-width: var(--container-xl);
`,kt=p.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  animation: spin 5s infinite linear;
`;he("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;function jt(){return n(St,{children:n(kt,{children:[n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"})]})})}var Ct=p.section`
  display: grid;
  grid-area: 8/1/9/2;
  position: relative;
  align-self: stretch;
  height: auto;
`,Nt=p.div`
  margin-top: 50px;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
`,ee=p.img`
  width: 20%;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
`,te=p.div`
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
`,ne=p.div`
  border: 1px solid blue;
  height: 16vw;
  display: flex;
`;function Et(){return n(Ct,{children:n(Nt,{children:[n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]})]})})}var Tt=p.section`
  align-items: center;
  position: relative;
  width: 100%;
`,Pt=p.div`
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
`,C=p.div`
  align-items: center;
  border: 1px solid blue;
`,$t=p.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,At=p.img`
  margin-top: 3px;
  margin-left: 4px;
  margin-right: 4px;
  width: 90%;
`,N=p.div`
  align-items: center;
  color: blue;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 10px;
`;function L({src:e}){return n($t,{children:n(At,{src:e})})}function Lt(){return n(Tt,{children:n(Pt,{children:[n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(C,{children:[n(L,{src:"static/mv2.jpg"}),n(N,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]})]})})}var Ht=p.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template_columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  width: 100%;
`,Dt=p.div`
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
`,It=p.div`
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
`;function re(e){switch(e){case 0:return{left:40,right:0,bottom:62,top:6};case 1:return{left:20,right:0,bottom:53,top:15};case 2:return{left:10,right:0,bottom:0,top:36};case 3:return{left:20,right:0,bottom:15,top:56};case 4:return{left:40,right:0,bottom:8,top:64};case 5:return{left:64,right:0,bottom:15,top:56};case 6:return{left:72,right:0,bottom:0,top:36};default:return{left:62,right:0,bottom:53,top:15}}}var E=p.div`
  aspect-ratio: 1;
  height: auto;
  display: grid;
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: start;
  margin-left: ${({place:e})=>re(e).left}%;
  margin-top: ${({place:e})=>re(e).top}%;
  margin-bottom: ${({place:e})=>re(e).bottom}%;
  margin-right: ${({place:e})=>re(e).right}%;
  width: 20%;
  position: relative;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  overflow: clip;
`,T=p.div`
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
`;function Mt(){return n(Ht,{children:[n(It,{children:n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"20 20 160 160","aria-hidden":!0,datatype:"shape",role:"presentation","aria-label":"",preserveAspectRatio:"xMidYMid meet",children:n("g",{children:n("path",{d:"M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"})})})}),n(Dt,{children:n("img",{src:"static/navic_logo.png"})}),n(E,{place:0,children:n(T,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"EC\u4E8B\u696D"]}),n("img",{src:"static/center0.png"})]})}),n(E,{place:1,children:n(T,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"\u5378\u8CA9\u58F2",n("br",{}),"\u5916\u6CE8\u53D6\u4ED8"]}),n("img",{src:"static/center1.png"})]})}),n(E,{place:2,children:n(T,{children:[n("h2",{children:"\u30EC\u30F3\u30BF\u30EB"}),n("img",{src:"static/center2.png"})]})}),n(E,{place:3,children:n(T,{children:[n("h2",{children:"\u8CBF\u6613"}),n("img",{src:"static/center3.png"}),n("img",{src:"static/center3.1.png"})]})}),n(E,{place:4,children:n(T,{children:[n("h2",{children:["\u30B0\u30EB\u30FC\u30D7",n("br",{}),"\u4E8B\u696D"]}),n("img",{src:"static/center4.png"})]})}),n(E,{place:5,children:n(T,{children:[n("h2",{children:"\u5065\u5EB7"}),n("img",{src:"static/center5.png"})]})}),n(E,{place:6,children:n(T,{children:[n("h2",{children:["\u8C4A\u6A4B",n("br",{}),"\u30EA\u30C6\u30FC\u30EB"]}),n("img",{src:"static/center6.0.png",style:{maxHeight:30}}),n("img",{src:"static/center6.1.png"}),n("img",{src:"static/center6.2.png"})]})}),n(E,{place:7,children:n(T,{children:[n("h2",{children:["\u81EA\u793E\u5546\u54C1",n("br",{}),"\u958B\u767A"]}),n("img",{src:"static/center7.jpg"})]})})]})}var Ut=p.section`
  position: relative;
`,zt=p.div`
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
`,Bt=p.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
`,Ft=p.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  gap: 10%;
  width: 70%;
`,Ot=p.span`
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
`;function Rt(){return n("footer",{children:n(Ut,{children:[n(zt,{children:n("h5",{children:"Copyright(C) NAVIC Co.,LTD. All Rights Reserved."})}),n(Bt,{children:n(Ft,{children:[n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",n("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),n(ie,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",n("br",{}),"TikTok"]})]})})]})})}function ie({img:e,url:t,children:r}){return n(Ot,{children:n("a",{href:t,children:[n("img",{src:e}),n("span",{children:r})]})})}function xn(){return n(Ve,{children:[n("a",{href:"#main",children:["\u4E8B\u696D\u7D39\u4ECB",n("div",{class:"dropDown",children:[n("a",{href:"#",children:"Link 1"}),n("a",{href:"#",children:"Link 2"}),n("a",{href:"#",children:"Link 3"})]})]}),n("a",{href:"#feature",children:"\u304A\u77E5\u3089\u305B"}),n("a",{href:"#install",children:"\u4F1A\u793E\u60C5\u5831"}),n("a",{href:"/doc",children:"\u63A1\u7528\u60C5\u5831"}),n("a",{href:"/doc",children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"}),n("a",{href:"/doc",children:"\u304A\u554F\u3044\u5408\u308F\u305B"}),n("a",{href:"/doc",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})]})}function Wt(){let[e,t]=gt(!1),r=()=>{t(!e)};return n(A,{children:[n(xn,{}),n(ct,{isOpen:e,onClick:()=>r()}),n(st,{isOpen:e,autohide:!0,children:[n(U,{href:"#main",children:"Neocmakelsp"}),n(U,{href:"#feature",children:"Features"}),n(U,{href:"#install",children:"Install"}),n(U,{href:"/doc",children:"Document"}),n(U,{isBottom:!0,href:"https://github.com/neocmakelsp/neocmakelsp",children:"Github"}),n("button",{type:"button",class:"bottom",onClick:()=>r(),children:"<<"})]}),n(Ze,{}),n(ot,{}),n(et,{}),n(wt,{}),n(Mt,{}),n(Y,{ja:"\u304A\u77E5\u3089\u305B",en:"NEWS"}),n(Et,{}),n(Y,{ja:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2",en:"SOCIAL MEDIA"}),n(jt,{}),n(Y,{ja:"\u5916\u90E8\u30EA\u30F3\u30AF",en:"LINK"}),n(Lt,{}),n(Rt,{})]})}var Vt=document.getElementById("mount");Vt&&Ie(n(Wt,{}),Vt);
