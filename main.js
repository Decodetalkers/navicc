var K,m,Ce,Xt,$,we,Ne,Ee,Te,le,se,ce,en,B={},Le=[],tn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function C(e,t){for(var r in t)e[r]=t[r];return e}function pe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function z(e,t,r){var i,s,o,a={};for(o in t)o=="key"?i=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?K.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return V(e,a,i,s,null)}function V(e,t,r,i,s){var o={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++Ce,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(o),o}function j(e){return e.children}function q(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?D(e):null}function Ae(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Ae(e)}}function Se(e){(!e.__d&&(e.__d=!0)&&$.push(e)&&!G.__r++||we!=m.debounceRendering)&&((we=m.debounceRendering)||Ne)(G)}function G(){for(var e,t,r,i,s,o,a,p=1;$.length;)$.length>p&&$.sort(Ee),e=$.shift(),p=$.length,e.__d&&(r=void 0,i=void 0,s=(i=(t=e).__v).__e,o=[],a=[],t.__P&&((r=C({},i)).__v=i.__v+1,m.vnode&&m.vnode(r),_e(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,o,s??D(i),!!(32&i.__u),a),r.__v=i.__v,r.__.__k[r.__i]=r,$e(o,r,a),i.__e=i.__=null,r.__e!=s&&Ae(r)));G.__r=0}function Pe(e,t,r,i,s,o,a,p,d,l,f){var c,h,u,y,S,w,g,x=i&&i.__k||Le,A=t.length;for(d=nn(r,t,x,d,A),c=0;c<A;c++)(u=r.__k[c])!=null&&(h=u.__i==-1?B:x[u.__i]||B,u.__i=c,w=_e(e,u,h,s,o,a,p,d,l,f),y=u.__e,u.ref&&h.ref!=u.ref&&(h.ref&&de(h.ref,null,u),f.push(u.ref,u.__c||y,u)),S==null&&y!=null&&(S=y),(g=!!(4&u.__u))||h.__k===u.__k?d=Me(u,d,e,g):typeof u.type=="function"&&w!==void 0?d=w:y&&(d=y.nextSibling),u.__u&=-7);return r.__e=S,d}function nn(e,t,r,i,s){var o,a,p,d,l,f=r.length,c=f,h=0;for(e.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(d=o+h,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?V(null,a,null,null,null):J(a)?V(j,{children:a},null,null,null):a.constructor==null&&a.__b>0?V(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,p=null,(l=a.__i=rn(a,r,d,c))!=-1&&(c--,(p=r[l])&&(p.__u|=2)),p==null||p.__v==null?(l==-1&&(s>f?h--:s<f&&h++),typeof a.type!="function"&&(a.__u|=4)):l!=d&&(l==d-1?h--:l==d+1?h++:(l>d?h--:h++,a.__u|=4))):e.__k[o]=null;if(c)for(o=0;o<f;o++)(p=r[o])!=null&&(2&p.__u)==0&&(p.__e==i&&(i=D(p)),De(p,p));return i}function Me(e,t,r,i){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=Me(s[o],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=D(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function rn(e,t,r,i){var s,o,a,p=e.key,d=e.type,l=t[r],f=l!=null&&(2&l.__u)==0;if(l===null&&e.key==null||f&&p==l.key&&d==l.type)return r;if(i>(f?1:0)){for(s=r-1,o=r+1;s>=0||o<t.length;)if((l=t[a=s>=0?s--:o++])!=null&&(2&l.__u)==0&&p==l.key&&d==l.type)return a}return-1}function ke(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||tn.test(t)?r:r+"px"}function W(e,t,r,i,s){var o,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||ke(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||ke(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Te,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?i?r.u=i.u:(r.u=le,e.addEventListener(t,o?ce:se,o)):e.removeEventListener(t,o?ce:se,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function je(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=le++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function _e(e,t,r,i,s,o,a,p,d,l){var f,c,h,u,y,S,w,g,x,A,P,O,I,ye,R,U,oe,k=t.type;if(t.constructor!=null)return null;128&r.__u&&(d=!!(32&r.__u),o=[p=t.__e=r.__e]),(f=m.__b)&&f(t);e:if(typeof k=="function")try{if(g=t.props,x="prototype"in k&&k.prototype.render,A=(f=k.contextType)&&i[f.__c],P=f?A?A.props.value:f.__:i,r.__c?w=(c=t.__c=r.__c).__=c.__E:(x?t.__c=c=new k(g,P):(t.__c=c=new q(g,P),c.constructor=k,c.render=sn),A&&A.sub(c),c.props=g,c.state||(c.state={}),c.context=P,c.__n=i,h=c.__d=!0,c.__h=[],c._sb=[]),x&&c.__s==null&&(c.__s=c.state),x&&k.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=C({},c.__s)),C(c.__s,k.getDerivedStateFromProps(g,c.__s))),u=c.props,y=c.state,c.__v=t,h)x&&k.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),x&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(x&&k.getDerivedStateFromProps==null&&g!==u&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,P),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,P)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(c.props=g,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(H){H&&(H.__=t)}),O=0;O<c._sb.length;O++)c.__h.push(c._sb[O]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,P),x&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(u,y,S)})}if(c.context=P,c.props=g,c.__P=e,c.__e=!1,I=m.__r,ye=0,x){for(c.state=c.__s,c.__d=!1,I&&I(t),f=c.render(c.props,c.state,c.context),R=0;R<c._sb.length;R++)c.__h.push(c._sb[R]);c._sb=[]}else do c.__d=!1,I&&I(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++ye<25);c.state=c.__s,c.getChildContext!=null&&(i=C(C({},i),c.getChildContext())),x&&!h&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(u,y)),U=f,f!=null&&f.type===j&&f.key==null&&(U=He(f.props.children)),p=Pe(e,J(U)?U:[U],t,r,i,s,o,a,p,d,l),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),w&&(c.__E=c.__=null)}catch(H){if(t.__v=null,d||o!=null)if(H.then){for(t.__u|=d?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;o[o.indexOf(p)]=null,t.__e=p}else{for(oe=o.length;oe--;)pe(o[oe]);ae(t)}else t.__e=r.__e,t.__k=r.__k,H.then||ae(t);m.__e(H,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):p=t.__e=on(r.__e,t,r,i,s,o,a,d,l);return(f=m.diffed)&&f(t),128&t.__u?void 0:p}function ae(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ae)}function $e(e,t,r){for(var i=0;i<r.length;i++)de(r[i],r[++i],r[++i]);m.__c&&m.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){m.__e(o,s.__v)}})}function He(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:J(e)?e.map(He):C({},e)}function on(e,t,r,i,s,o,a,p,d){var l,f,c,h,u,y,S,w=r.props,g=t.props,x=t.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((u=o[l])&&"setAttribute"in u==!!x&&(x?u.localName==x:u.nodeType==3)){e=u,o[l]=null;break}}if(e==null){if(x==null)return document.createTextNode(g);e=document.createElementNS(s,x,g.is&&g),p&&(m.__m&&m.__m(t,o),p=!1),o=null}if(x==null)w===g||p&&e.data==g||(e.data=g);else{if(o=o&&K.call(e.childNodes),w=r.props||B,!p&&o!=null)for(w={},l=0;l<e.attributes.length;l++)w[(u=e.attributes[l]).name]=u.value;for(l in w)if(u=w[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=u;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;W(e,l,null,u,s)}}for(l in g)u=g[l],l=="children"?h=u:l=="dangerouslySetInnerHTML"?f=u:l=="value"?y=u:l=="checked"?S=u:p&&typeof u!="function"||w[l]===u||W(e,l,u,w[l],s);if(f)p||c&&(f.__html==c.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),Pe(t.type=="template"?e.content:e,J(h)?h:[h],t,r,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:r.__k&&D(r,0),p,d),o!=null)for(l=o.length;l--;)pe(o[l]);p||(l="value",x=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[l]||x=="progress"&&!y||x=="option"&&y!=w[l])&&W(e,l,y,w[l],s),l="checked",S!=null&&S!=e[l]&&W(e,l,S,w[l],s))}return e}function de(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){m.__e(s,r)}}function De(e,t,r){var i,s;if(m.unmount&&m.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||de(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){m.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&De(i[s],t,r||typeof e.type!="function");r||pe(e.__e),e.__c=e.__=e.__e=void 0}function sn(e,t,r){return this.constructor(e,r)}function ze(e,t,r){var i,s,o,a;t==document&&(t=document.documentElement),m.__&&m.__(e,t),s=(i=typeof r=="function")?null:r&&r.__k||t.__k,o=[],a=[],_e(t,e=(!i&&r||t).__k=z(j,null,[e]),s||B,B,t.namespaceURI,!i&&r?[r]:s?null:t.firstChild?K.call(t.childNodes):null,o,!i&&r?r:s?s.__e:t.firstChild,i,a),$e(o,e,a)}K=Le.slice,m={__e:function(e,t,r,i){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),a=s.__d),a)return s.__E=s}catch(p){e=p}throw e}},Ce=0,Xt=function(e){return e!=null&&e.constructor==null},q.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},r),this.props)),e&&C(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Se(this))},q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Se(this))},q.prototype.render=j,$=[],Ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ee=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,Te=/(PointerCapture)$|Capture$/i,le=0,se=je(!1),ce=je(!0),en=0;var cn=0,Ln=Array.isArray;function n(e,t,r,i,s,o){t||(t={});var a,p,d=t;if("ref"in d)for(p in d={},t)p=="ref"?a=t[p]:d[p]=t[p];var l={type:e,props:d,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--cn,__i:-1,__u:0,__source:s,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(p in a)d[p]===void 0&&(d[p]=a[p]);return m.vnode&&m.vnode(l),l}var an=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ie=new Set(an);function ln(e){let t={};for(let r in e){let i=r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);t[i]=e[r]}return t}var ue=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},pn=new ue;function Z(){return`styled-component-${pn.next()}`}function Ue(e){let t=document.styleSheets;for(let r of t)for(let i of r.cssRules)if(i.cssText.includes(`.${e} `))return!0;return!1}function fe(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} { ${t} }`,document.head.appendChild(r)}}function _n(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} ${t}`,document.head.appendChild(r)}}function dn(e,t){let r=JSON.stringify(ln(t),null,2);r=r.replaceAll(",",";"),r=r.replaceAll('"',"");let i=Z(),s=Object.assign(o=>{let{children:a,...p}=o;_n(i,r);let l={className:o.className||i,...p};return s.className=i,z(e,l,a)},{className:void 0});return s}function un(e,t,...r){let i=Z(),s=Object.assign(o=>{let{children:a,...p}=o,d="",l=r.length;t.forEach((h,u)=>{u<l?d+=h+r[u]:d+=h}),fe(i,d);let c={className:o.className||i,...p};return s.className=i,z(e,c,a)},{className:void 0});return s}function fn(e){return e.length==0?!0:typeof e[0]!="function"}function hn(e,t,...r){if(fn(r))return un(e,t,...r);let i=Object.assign(s=>{let o="",a=r.length;t.forEach((c,h)=>{h<a?o+=c+r[h](s):o+=c});let{children:p,...d}=s,l=i.mappedId.get(s);l||(l=Z(),fe(l,o),i.mappedId.set(s,l));let f={className:s.className||l,...d};return z(e,f,p)},{mappedId:new Map});return i}function mn(e){return(t,...r)=>{let i="",s=r.length;t.forEach((a,p)=>{p<s?i+=a+r[p]:i+=a});let o=Object.assign(a=>{let{children:p,...d}=a,l=Z();console.log("aaa"),fe(l,i),e.className&&(l=`${e.className} ${l}`);let f=a.className||l;o.className=f;let c={className:f,...d};return z(e,c,p)},{className:void 0});return o}}var Be=mn;Ie.forEach(e=>{Be[e]=function(t,...r){return Array.isArray(t)&&"raw"in t?hn(e,t,...r):dn(e,t)}});var Fe=Be;function he(e){return(t,...r)=>{let i="",s=r.length;t.forEach((p,d)=>{d<s?i+=p+r[d]:i+=p});let o=`@keyframes ${e} { ${i} }
`,a=document.createElement("style");a.innerHTML=o,document.head.appendChild(a)}}var F=class{keys;_mainKey;maps=new Map;constructor(t,r){this.keys=t,this._mainKey=r;for(let i in t)this.maps.set(i,"")}init(t){for(let r in this.keys){let i=t(r);this.maps.set(r,i)}}setCSS(t){return(r,...i)=>{let s="",o=i.length;r.forEach((a,p)=>{p<o?s+=a+i[p]:s+=a}),this.maps.set(t,s)}}get mainKey(){return this._mainKey}generate(){let t={},r="";this.keys.forEach((s,o)=>{t[s]=s;let a=`.${t[s]}`;s!=this.mainKey&&(a=`.${this.mainKey}.${s}`),r+=`${a} { ${this.maps.get(s)} }
`});let i=document.createElement("style");return i.innerHTML=r,document.head.appendChild(i),t}};var _=Fe;var Oe=_.header`
  background-color: white;
  border-bottom: 1px;
  height: auto;
  display: grid;
  grid-template_columns: auto auto;
  margin-left: 10px;
  z-index: 10;
  overflow: visible;
`,Re=_.div`
  font-weight: bold;
  margin-top: 10px;
  & img {
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    & img {
      width: 350px;
    }
  }
`,gn=["dropDown"],We=new F(gn,"dropDown");We.setCSS("dropDown")`
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
`;var Rn=We.generate(),xn=_.nav`
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
`,Ve=xn;var qe=_.div`
  width: 100%;
  height: 100%;
  background-color: white;
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
`,Ge=_.div`
  background-color: transparent;
  cursor: pointer;
  height: 50px;
  width: 50px;
  position: sticky;
  margin-right: 40px;
  margin-left: 85%;
  margin-top: 40px;
  color: blue;
  background-image: url("static/cross.svg");
  background-position: center;
  background-repeat: no-repeat;
  border: none;
`,Ke=_.nav`
  margin-left: 15%;
  margin-right: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 7fr 1fr;
  gap: 4px;
  position: relative;
`,me=_.span`
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
`,Je=_.span`
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
`,Ze=_.div`
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
`,qn=_.a`
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
`,Qe=_.div`
  grid-column: 2/2;
  display: flex;
  justify-content: right;
  align-items: center;
  grid-row: 1;
  margin-right: 20px;
`,Ye=_.button`
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
`,Gn=_.button`
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
`;function Xe({children:e,onClick:t}){return n(Oe,{children:[n(vn,{}),n(Ve,{autohide:!0,children:e}),n(Qe,{children:n(Ye,{onClick:t})})]})}function vn(){return n(Re,{children:n("a",{href:"https://www.navic.cc/",children:n("img",{src:"static/navic_logo.png"})})})}var et=_.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
`,tt=_.img`
  height: auto;
  width: 53%;
  position: relative;
  object-fit: cover;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`,nt=_.div`
  position: relative;
  width: 47%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`,rt=_.div`
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
`;function it(){return n(et,{children:[n(nt,{}),n(tt,{src:"./static/navic_top.jpg"}),n(rt,{children:n("p",{children:["\u4EBA\u3068\u306E\u3064\u306A\u304C\u308A\u3092\u5927\u5207\u306B\u3002",n("br",{}),"\u69D8\u3005\u306A\u5206\u91CE\u3067\u65B0\u305F\u306A\u4FA1\u5024\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304F\u3002"]})})]})}var ot=_.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`,st=_.img`
  height: auto;
  width: 50%;
  object-fit: cover;
`,ct=_.div`
  margin-left: 30px;
  font-size: 4vw;
  width: 50%;
  font-weight: bold;
  color: #1b4f80;
  margin-top: 5%;
`;function at(){return n(ot,{children:[n(st,{src:"static/section2.jpg"}),n(ct,{children:n("p",{children:["\u5E38\u306B\u5148\u3092\u898B\u636E\u3048\u305F",n("br",{}),"\u4E8B\u696D\u5C55\u958B\u3067",n("br",{}),"\u65B0\u305F\u306A\u672A\u6765\u3092\u5207\u308A\u958B\u304F\u3002"]})})]})}var lt=_.div`
  width: 100%;
  height: 30px;
`,bn=_.span`
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
`,pt=_.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`,_t=_.div`
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
`,dt=_.div`
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
`;function ut(){return n(lt,{})}function Q({ja:e,en:t}){return n(pt,{children:[n(_t,{children:n("h2",{children:n("span",{children:e})})}),n(dt,{children:n("h1",{children:n("span",{children:t})})})]})}var xe,v,ge,ft,ve=0,wt=[],b=m,ht=b.__b,mt=b.__r,gt=b.diffed,xt=b.__c,vt=b.unmount,bt=b.__;function yn(e,t){b.__h&&b.__h(v,e,ve||t),ve=0;var r=v.__H||(v.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function X(e){return ve=1,wn(St,e)}function wn(e,t,r){var i=yn(xe++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):St(void 0,t),function(p){var d=i.__N?i.__N[0]:i.__[0],l=i.t(d,p);d!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=v,!v.__f)){var s=function(p,d,l){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(h){return!!h.__c});if(f.every(function(h){return!h.__N}))return!o||o.call(this,p,d,l);var c=i.__c.props!==p;return f.forEach(function(h){if(h.__N){var u=h.__[0];h.__=h.__N,h.__N=void 0,u!==h.__[0]&&(c=!0)}}),o&&o.call(this,p,d,l)||c};v.__f=!0;var o=v.shouldComponentUpdate,a=v.componentWillUpdate;v.componentWillUpdate=function(p,d,l){if(this.__e){var f=o;o=void 0,s(p,d,l),o=f}a&&a.call(this,p,d,l)},v.shouldComponentUpdate=s}return i.__N||i.__}function Sn(){for(var e;e=wt.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){v=null,ht&&ht(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),bt&&bt(e,t)},b.__r=function(e){mt&&mt(e),xe=0;var t=(v=e.__c).__H;t&&(ge===v?(t.__h=[],v.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Y),t.__h.forEach(be),t.__h=[],xe=0)),ge=v},b.diffed=function(e){gt&&gt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(wt.push(t)!==1&&ft===b.requestAnimationFrame||((ft=b.requestAnimationFrame)||kn)(Sn)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ge=v=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Y),r.__h=r.__h.filter(function(i){return!i.__||be(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],b.__e(i,r.__v)}}),xt&&xt(e,t)},b.unmount=function(e){vt&&vt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{Y(i)}catch(s){t=s}}),r.__H=void 0,t&&b.__e(t,r.__v))};var yt=typeof requestAnimationFrame=="function";function kn(e){var t,r=function(){clearTimeout(i),yt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);yt&&(t=requestAnimationFrame(r))}function Y(e){var t=v,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),v=t}function be(e){var t=v;e.__c=e.__(),v=t}function St(e,t){return typeof t=="function"?t(e):t}var kt=_.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  background-color: #f5faffff;
`,jt=_.div`
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
`,Ct=_.div`
  width: 100%;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 50px;
`;function Nt(){return n(kt,{children:[n(Ct,{}),n(jt,{children:[n("h1",{children:"NAVIC\u306E\u53D6\u308A\u7D44\u307F"}),n("h5",{children:"OUR SERVICE"})]})]})}var Et=_.section`
  overflow: hidden;
  position: relative;
  display: flex;
  border: 5px solid red;
  overflow-x: auto;
  max-width: var(--container-xl);
`,Tt=_.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  animation: spin 5s infinite linear;
`;he("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;function Lt(){return n(Et,{children:n(Tt,{children:[n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"})]})})}var At=_.section`
  display: grid;
  grid-area: 8/1/9/2;
  grid-template-columns: repeat(15, 1fr);
  position: relative;
  align-self: stretch;
  height: auto;
  gap: 30px;
`,Pt=_.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
  grid-column: 2/14;
  grid-row: 2;
`,ee=_.img`
  width: 20%;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
`,te=_.div`
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
`,ne=_.div`
  border: 1px solid blue;
  height: 16vw;
  display: flex;
`,Mt=_.div`
  grid-column: 2/14;
  grid-row: 3;

  & h3 {
    font-size: 40px;
  }
  & a {
    color: #14508cff;
  }
`;function $t(){return n(At,{children:[n(Pt,{children:[n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]})]}),n(Mt,{children:n("h3",{children:n("span",{children:n("a",{href:"https://www.navic.cc/news",children:"VIEW ALL"})})})})]})}var Ht=_.section`
  align-items: center;
  position: relative;
  width: 100%;
`,Dt=_.div`
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
`,N=_.div`
  align-items: center;
  border: 1px solid blue;
`,zt=_.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,It=_.img`
  margin-top: 3px;
  margin-left: 4px;
  margin-right: 4px;
  width: 90%;
`,E=_.div`
  align-items: center;
  color: blue;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 10px;
`;function M({src:e}){return n(zt,{children:n(It,{src:e})})}function Ut(){return n(Ht,{children:n(Dt,{children:[n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(M,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]})]})})}var Bt=_.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template_columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  width: 100%;
`,Ft=_.div`
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
`,Ot=_.div`
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
`;function re(e){switch(e){case 0:return{left:40,right:0,bottom:62,top:6};case 1:return{left:20,right:0,bottom:53,top:15};case 2:return{left:10,right:0,bottom:0,top:36};case 3:return{left:20,right:0,bottom:15,top:56};case 4:return{left:40,right:0,bottom:8,top:64};case 5:return{left:64,right:0,bottom:15,top:56};case 6:return{left:72,right:0,bottom:0,top:36};default:return{left:62,right:0,bottom:53,top:15}}}var T=_.div`
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
`,L=_.div`
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
`;function Rt(){return n(Bt,{children:[n(Ot,{children:n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"20 20 160 160","aria-hidden":!0,datatype:"shape",role:"presentation","aria-label":"",preserveAspectRatio:"xMidYMid meet",children:n("g",{children:n("path",{d:"M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"})})})}),n(Ft,{children:n("img",{src:"static/navic_logo.png"})}),n(T,{place:0,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"EC\u4E8B\u696D"]}),n("img",{src:"static/center0.png"})]})}),n(T,{place:1,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"\u5378\u8CA9\u58F2",n("br",{}),"\u5916\u6CE8\u53D6\u4ED8"]}),n("img",{src:"static/center1.png"})]})}),n(T,{place:2,children:n(L,{children:[n("h2",{children:"\u30EC\u30F3\u30BF\u30EB"}),n("img",{src:"static/center2.png"})]})}),n(T,{place:3,children:n(L,{children:[n("h2",{children:"\u8CBF\u6613"}),n("img",{src:"static/center3.png"}),n("img",{src:"static/center3.1.png"})]})}),n(T,{place:4,children:n(L,{children:[n("h2",{children:["\u30B0\u30EB\u30FC\u30D7",n("br",{}),"\u4E8B\u696D"]}),n("img",{src:"static/center4.png"})]})}),n(T,{place:5,children:n(L,{children:[n("h2",{children:"\u5065\u5EB7"}),n("img",{src:"static/center5.png"})]})}),n(T,{place:6,children:n(L,{children:[n("h2",{children:["\u8C4A\u6A4B",n("br",{}),"\u30EA\u30C6\u30FC\u30EB"]}),n("img",{src:"static/center6.0.png",style:{maxHeight:30}}),n("img",{src:"static/center6.1.png"}),n("img",{src:"static/center6.2.png"})]})}),n(T,{place:7,children:n(L,{children:[n("h2",{children:["\u81EA\u793E\u5546\u54C1",n("br",{}),"\u958B\u767A"]}),n("img",{src:"static/center7.jpg"})]})})]})}var Wt=_.section`
  position: relative;
`,Vt=_.div`
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
`,qt=_.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
`,Gt=_.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  gap: 10%;
  width: 70%;
`,Kt=_.span`
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
`;function Jt(){return n("footer",{children:n(Wt,{children:[n(Vt,{children:n("h5",{children:"Copyright(C) NAVIC Co.,LTD. All Rights Reserved."})}),n(qt,{children:n(Gt,{children:[n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",n("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),n(ie,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",n("br",{}),"TikTok"]})]})})]})})}function ie({img:e,url:t,children:r}){return n(Kt,{children:n("a",{href:t,children:[n("img",{src:e}),n("span",{children:r})]})})}var jn=[{context:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D",url:"https://www.navic.cc/car-installation"},{context:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D",url:"https://www.navic.cc/car-supplies-onlineshop"},{context:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D",url:"https://www.navic.cc/clezeed"}];function Zt(){return n(Ke,{children:[n(Cn,{title:"\u4E8B\u696D\u7D39\u4ECB",menu:jn}),n(Je,{children:n("a",{href:"https://navic-plaza.com/",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})})]})}function Cn({title:e,menu:t}){let[r,i]=X(!0),s=()=>{i(!r)};return n(j,{children:[n(Ze,{onClick:s,ishidden:r}),n(me,{onClick:s,children:e}),t.map(({context:o,url:a},p)=>n(me,{hidden:r,children:n("a",{href:a,children:o})},p))]})}function Nn({onClick:e}){return n(Xe,{onClick:e,children:[n("a",{href:"#main",children:["\u4E8B\u696D\u7D39\u4ECB",n("div",{class:"dropDown",children:[n("a",{href:"#",children:"Link 1"}),n("a",{href:"#",children:"Link 2"}),n("a",{href:"#",children:"Link 3"})]})]}),n("a",{href:"#feature",children:"\u304A\u77E5\u3089\u305B"}),n("a",{href:"#install",children:"\u4F1A\u793E\u60C5\u5831"}),n("a",{href:"/doc",children:"\u63A1\u7528\u60C5\u5831"}),n("a",{href:"/doc",children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"}),n("a",{href:"/doc",children:"\u304A\u554F\u3044\u5408\u308F\u305B"}),n("a",{href:"/doc",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})]})}function Qt(){let[e,t]=X(!1),r=()=>{t(!e)};return n(j,{children:[n(Nn,{onClick:r}),n(qe,{isOpen:e,children:[n(Ge,{type:"button",onClick:r}),n(Zt,{})]}),n(it,{}),n(ut,{}),n(at,{}),n(Nt,{}),n(Rt,{}),n(Q,{ja:"\u304A\u77E5\u3089\u305B",en:"NEWS"}),n($t,{}),n(Q,{ja:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2",en:"SOCIAL MEDIA"}),n(Lt,{}),n(Q,{ja:"\u5916\u90E8\u30EA\u30F3\u30AF",en:"LINK"}),n(Ut,{}),n(Jt,{})]})}var Yt=document.getElementById("mount");Yt&&ze(n(Qt,{}),Yt);
