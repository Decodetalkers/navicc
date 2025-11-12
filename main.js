var K,m,je,nn,$,we,Ne,Ee,Te,le,se,ce,rn,B={},Le=[],on=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function j(e,t){for(var r in t)e[r]=t[r];return e}function pe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function I(e,t,r){var i,s,o,a={};for(o in t)o=="key"?i=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?K.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return V(e,a,i,s,null)}function V(e,t,r,i,s){var o={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s??++je,__i:-1,__u:0};return s==null&&m.vnode!=null&&m.vnode(o),o}function C(e){return e.children}function q(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?D(e):null}function Me(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Me(e)}}function Se(e){(!e.__d&&(e.__d=!0)&&$.push(e)&&!G.__r++||we!=m.debounceRendering)&&((we=m.debounceRendering)||Ne)(G)}function G(){for(var e,t,r,i,s,o,a,p=1;$.length;)$.length>p&&$.sort(Ee),e=$.shift(),p=$.length,e.__d&&(r=void 0,i=void 0,s=(i=(t=e).__v).__e,o=[],a=[],t.__P&&((r=j({},i)).__v=i.__v+1,m.vnode&&m.vnode(r),de(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[s]:null,o,s??D(i),!!(32&i.__u),a),r.__v=i.__v,r.__.__k[r.__i]=r,$e(o,r,a),i.__e=i.__=null,r.__e!=s&&Me(r)));G.__r=0}function Ae(e,t,r,i,s,o,a,p,_,l,f){var c,h,u,y,S,w,g,x=i&&i.__k||Le,M=t.length;for(_=sn(r,t,x,_,M),c=0;c<M;c++)(u=r.__k[c])!=null&&(h=u.__i==-1?B:x[u.__i]||B,u.__i=c,w=de(e,u,h,s,o,a,p,_,l,f),y=u.__e,u.ref&&h.ref!=u.ref&&(h.ref&&_e(h.ref,null,u),f.push(u.ref,u.__c||y,u)),S==null&&y!=null&&(S=y),(g=!!(4&u.__u))||h.__k===u.__k?_=Pe(u,_,e,g):typeof u.type=="function"&&w!==void 0?_=w:y&&(_=y.nextSibling),u.__u&=-7);return r.__e=S,_}function sn(e,t,r,i,s){var o,a,p,_,l,f=r.length,c=f,h=0;for(e.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(_=o+h,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?V(null,a,null,null,null):J(a)?V(C,{children:a},null,null,null):a.constructor==null&&a.__b>0?V(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,p=null,(l=a.__i=cn(a,r,_,c))!=-1&&(c--,(p=r[l])&&(p.__u|=2)),p==null||p.__v==null?(l==-1&&(s>f?h--:s<f&&h++),typeof a.type!="function"&&(a.__u|=4)):l!=_&&(l==_-1?h--:l==_+1?h++:(l>_?h--:h++,a.__u|=4))):e.__k[o]=null;if(c)for(o=0;o<f;o++)(p=r[o])!=null&&(2&p.__u)==0&&(p.__e==i&&(i=D(p)),De(p,p));return i}function Pe(e,t,r,i){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=Pe(s[o],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=D(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function cn(e,t,r,i){var s,o,a,p=e.key,_=e.type,l=t[r],f=l!=null&&(2&l.__u)==0;if(l===null&&e.key==null||f&&p==l.key&&_==l.type)return r;if(i>(f?1:0)){for(s=r-1,o=r+1;s>=0||o<t.length;)if((l=t[a=s>=0?s--:o++])!=null&&(2&l.__u)==0&&p==l.key&&_==l.type)return a}return-1}function ke(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||on.test(t)?r:r+"px"}function W(e,t,r,i,s){var o,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||ke(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||ke(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Te,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?i?r.u=i.u:(r.u=le,e.addEventListener(t,o?ce:se,o)):e.removeEventListener(t,o?ce:se,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Ce(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=le++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function de(e,t,r,i,s,o,a,p,_,l){var f,c,h,u,y,S,w,g,x,M,A,R,z,ye,O,U,oe,k=t.type;if(t.constructor!=null)return null;128&r.__u&&(_=!!(32&r.__u),o=[p=t.__e=r.__e]),(f=m.__b)&&f(t);e:if(typeof k=="function")try{if(g=t.props,x="prototype"in k&&k.prototype.render,M=(f=k.contextType)&&i[f.__c],A=f?M?M.props.value:f.__:i,r.__c?w=(c=t.__c=r.__c).__=c.__E:(x?t.__c=c=new k(g,A):(t.__c=c=new q(g,A),c.constructor=k,c.render=ln),M&&M.sub(c),c.props=g,c.state||(c.state={}),c.context=A,c.__n=i,h=c.__d=!0,c.__h=[],c._sb=[]),x&&c.__s==null&&(c.__s=c.state),x&&k.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=j({},c.__s)),j(c.__s,k.getDerivedStateFromProps(g,c.__s))),u=c.props,y=c.state,c.__v=t,h)x&&k.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),x&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(x&&k.getDerivedStateFromProps==null&&g!==u&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,A),!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,A)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(c.props=g,c.state=c.__s,c.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(H){H&&(H.__=t)}),R=0;R<c._sb.length;R++)c.__h.push(c._sb[R]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,A),x&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(u,y,S)})}if(c.context=A,c.props=g,c.__P=e,c.__e=!1,z=m.__r,ye=0,x){for(c.state=c.__s,c.__d=!1,z&&z(t),f=c.render(c.props,c.state,c.context),O=0;O<c._sb.length;O++)c.__h.push(c._sb[O]);c._sb=[]}else do c.__d=!1,z&&z(t),f=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++ye<25);c.state=c.__s,c.getChildContext!=null&&(i=j(j({},i),c.getChildContext())),x&&!h&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(u,y)),U=f,f!=null&&f.type===C&&f.key==null&&(U=He(f.props.children)),p=Ae(e,J(U)?U:[U],t,r,i,s,o,a,p,_,l),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),w&&(c.__E=c.__=null)}catch(H){if(t.__v=null,_||o!=null)if(H.then){for(t.__u|=_?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;o[o.indexOf(p)]=null,t.__e=p}else{for(oe=o.length;oe--;)pe(o[oe]);ae(t)}else t.__e=r.__e,t.__k=r.__k,H.then||ae(t);m.__e(H,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):p=t.__e=an(r.__e,t,r,i,s,o,a,_,l);return(f=m.diffed)&&f(t),128&t.__u?void 0:p}function ae(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ae)}function $e(e,t,r){for(var i=0;i<r.length;i++)_e(r[i],r[++i],r[++i]);m.__c&&m.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){m.__e(o,s.__v)}})}function He(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:J(e)?e.map(He):j({},e)}function an(e,t,r,i,s,o,a,p,_){var l,f,c,h,u,y,S,w=r.props,g=t.props,x=t.type;if(x=="svg"?s="http://www.w3.org/2000/svg":x=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((u=o[l])&&"setAttribute"in u==!!x&&(x?u.localName==x:u.nodeType==3)){e=u,o[l]=null;break}}if(e==null){if(x==null)return document.createTextNode(g);e=document.createElementNS(s,x,g.is&&g),p&&(m.__m&&m.__m(t,o),p=!1),o=null}if(x==null)w===g||p&&e.data==g||(e.data=g);else{if(o=o&&K.call(e.childNodes),w=r.props||B,!p&&o!=null)for(w={},l=0;l<e.attributes.length;l++)w[(u=e.attributes[l]).name]=u.value;for(l in w)if(u=w[l],l!="children"){if(l=="dangerouslySetInnerHTML")c=u;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;W(e,l,null,u,s)}}for(l in g)u=g[l],l=="children"?h=u:l=="dangerouslySetInnerHTML"?f=u:l=="value"?y=u:l=="checked"?S=u:p&&typeof u!="function"||w[l]===u||W(e,l,u,w[l],s);if(f)p||c&&(f.__html==c.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(c&&(e.innerHTML=""),Ae(t.type=="template"?e.content:e,J(h)?h:[h],t,r,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:r.__k&&D(r,0),p,_),o!=null)for(l=o.length;l--;)pe(o[l]);p||(l="value",x=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[l]||x=="progress"&&!y||x=="option"&&y!=w[l])&&W(e,l,y,w[l],s),l="checked",S!=null&&S!=e[l]&&W(e,l,S,w[l],s))}return e}function _e(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(s){m.__e(s,r)}}function De(e,t,r){var i,s;if(m.unmount&&m.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||_e(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){m.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(s=0;s<i.length;s++)i[s]&&De(i[s],t,r||typeof e.type!="function");r||pe(e.__e),e.__c=e.__=e.__e=void 0}function ln(e,t,r){return this.constructor(e,r)}function Ie(e,t,r){var i,s,o,a;t==document&&(t=document.documentElement),m.__&&m.__(e,t),s=(i=typeof r=="function")?null:r&&r.__k||t.__k,o=[],a=[],de(t,e=(!i&&r||t).__k=I(C,null,[e]),s||B,B,t.namespaceURI,!i&&r?[r]:s?null:t.firstChild?K.call(t.childNodes):null,o,!i&&r?r:s?s.__e:t.firstChild,i,a),$e(o,e,a)}K=Le.slice,m={__e:function(e,t,r,i){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,i||{}),a=s.__d),a)return s.__E=s}catch(p){e=p}throw e}},je=0,nn=function(e){return e!=null&&e.constructor==null},q.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof e=="function"&&(e=e(j({},r),this.props)),e&&j(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),Se(this))},q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Se(this))},q.prototype.render=C,$=[],Ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ee=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,Te=/(PointerCapture)$|Capture$/i,le=0,se=Ce(!1),ce=Ce(!0),rn=0;var pn=0,Pn=Array.isArray;function n(e,t,r,i,s,o){t||(t={});var a,p,_=t;if("ref"in _)for(p in _={},t)p=="ref"?a=t[p]:_[p]=t[p];var l={type:e,props:_,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--pn,__i:-1,__u:0,__source:s,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(p in a)_[p]===void 0&&(_[p]=a[p]);return m.vnode&&m.vnode(l),l}var dn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=new Set(dn);function _n(e){let t={};for(let r in e){let i=r.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`);t[i]=e[r]}return t}var ue=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},un=new ue;function Z(){return`styled-component-${un.next()}`}function Ue(e){let t=document.styleSheets;for(let r of t)for(let i of r.cssRules)if(i.cssText.includes(`.${e} `))return!0;return!1}function fe(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} { ${t} }`,document.head.appendChild(r)}}function fn(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} ${t}`,document.head.appendChild(r)}}function hn(e,t){let r=JSON.stringify(_n(t),null,2);r=r.replaceAll(",",";"),r=r.replaceAll('"',"");let i=Z(),s=Object.assign(o=>{let{children:a,...p}=o;fn(i,r);let l={className:o.className||i,...p};return s.className=i,I(e,l,a)},{className:void 0});return s}function mn(e,t,...r){let i=Z(),s=Object.assign(o=>{let{children:a,...p}=o,_="",l=r.length;t.forEach((h,u)=>{u<l?_+=h+r[u]:_+=h}),fe(i,_);let c={className:o.className||i,...p};return s.className=i,I(e,c,a)},{className:void 0});return s}function gn(e){return e.length==0?!0:typeof e[0]!="function"}function xn(e,t,...r){if(gn(r))return mn(e,t,...r);let i=Object.assign(s=>{let o="",a=r.length;t.forEach((c,h)=>{h<a?o+=c+r[h](s):o+=c});let{children:p,..._}=s,l=i.mappedId.get(s);l||(l=Z(),fe(l,o),i.mappedId.set(s,l));let f={className:s.className||l,..._};return I(e,f,p)},{mappedId:new Map});return i}function vn(e){return(t,...r)=>{let i="",s=r.length;t.forEach((a,p)=>{p<s?i+=a+r[p]:i+=a});let o=Object.assign(a=>{let{children:p,..._}=a,l=Z();console.log("aaa"),fe(l,i),e.className&&(l=`${e.className} ${l}`);let f=a.className||l;o.className=f;let c={className:f,..._};return I(e,c,p)},{className:void 0});return o}}var Be=vn;ze.forEach(e=>{Be[e]=function(t,...r){return Array.isArray(t)&&"raw"in t?xn(e,t,...r):hn(e,t)}});var Fe=Be;function he(e){return(t,...r)=>{let i="",s=r.length;t.forEach((p,_)=>{_<s?i+=p+r[_]:i+=p});let o=`@keyframes ${e} { ${i} }
`,a=document.createElement("style");a.innerHTML=o,document.head.appendChild(a)}}var F=class{keys;_mainKey;maps=new Map;constructor(t,r){this.keys=t,this._mainKey=r;for(let i in t)this.maps.set(i,"")}init(t){for(let r in this.keys){let i=t(r);this.maps.set(r,i)}}setCSS(t){return(r,...i)=>{let s="",o=i.length;r.forEach((a,p)=>{p<o?s+=a+i[p]:s+=a}),this.maps.set(t,s)}}get mainKey(){return this._mainKey}generate(){let t={},r="";this.keys.forEach((s,o)=>{t[s]=s;let a=`.${t[s]}`;s!=this.mainKey&&(a=`.${this.mainKey}.${s}`),r+=`${a} { ${this.maps.get(s)} }
`});let i=document.createElement("style");return i.innerHTML=r,document.head.appendChild(i),t}};var d=Fe;var Re=d.header`
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
`,Oe=d.div`
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
`,bn=["dropDown"],We=new F(bn,"dropDown");We.setCSS("dropDown")`
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
`;var qn=We.generate(),yn=d.nav`
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
`,Ve=yn;var qe=d.div`
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
`,Ge=d.div`
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
`,Ke=d.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 6fr 4fr;
`,Je=d.div`
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
`,Ze=d.div`
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
`,Qe=d.nav`
  margin-left: 15%;
  margin-right: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 7fr 1fr;
  gap: 4px;
  position: relative;
`,me=d.span`
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
`,Ye=d.span`
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
`,Xe=d.div`
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
`,Jn=d.a`
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
`,et=d.div`
  grid-column: 2/2;
  display: flex;
  justify-content: right;
  align-items: center;
  grid-row: 1;
  margin-right: 20px;
`,tt=d.button`
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
`,Zn=d.button`
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
`;function nt({children:e,onClick:t}){return n(Re,{children:[n(wn,{}),n(Ve,{autohide:!0,children:e}),n(et,{children:n(tt,{onClick:t})})]})}function wn(){return n(Oe,{children:n("a",{href:"https://www.navic.cc/",children:n("img",{src:"static/navic_logo.png"})})})}var rt=d.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
`,it=d.img`
  height: auto;
  width: 53%;
  position: relative;
  object-fit: cover;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`,ot=d.div`
  position: relative;
  width: 47%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`,st=d.div`
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
`;function ct(){return n(rt,{children:[n(ot,{}),n(it,{src:"./static/navic_top.jpg"}),n(st,{children:n("p",{children:["\u4EBA\u3068\u306E\u3064\u306A\u304C\u308A\u3092\u5927\u5207\u306B\u3002",n("br",{}),"\u69D8\u3005\u306A\u5206\u91CE\u3067\u65B0\u305F\u306A\u4FA1\u5024\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304F\u3002"]})})]})}var at=d.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`,lt=d.img`
  height: auto;
  width: 50%;
  object-fit: cover;
`,pt=d.div`
  margin-left: 30px;
  font-size: 4vw;
  width: 50%;
  font-weight: bold;
  color: #1b4f80;
  margin-top: 5%;
`;function dt(){return n(at,{children:[n(lt,{src:"static/section2.jpg"}),n(pt,{children:n("p",{children:["\u5E38\u306B\u5148\u3092\u898B\u636E\u3048\u305F",n("br",{}),"\u4E8B\u696D\u5C55\u958B\u3067",n("br",{}),"\u65B0\u305F\u306A\u672A\u6765\u3092\u5207\u308A\u958B\u304F\u3002"]})})]})}var _t=d.div`
  width: 100%;
  height: 30px;
`,Sn=d.span`
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
`,ut=d.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`,ft=d.div`
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
`,ht=d.div`
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
`;function mt(){return n(_t,{})}function Q({ja:e,en:t}){return n(ut,{children:[n(ft,{children:n("h2",{children:n("span",{children:e})})}),n(ht,{children:n("h1",{children:n("span",{children:t})})})]})}var xe,v,ge,gt,ve=0,Ct=[],b=m,xt=b.__b,vt=b.__r,bt=b.diffed,yt=b.__c,wt=b.unmount,St=b.__;function kn(e,t){b.__h&&b.__h(v,e,ve||t),ve=0;var r=v.__H||(v.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function X(e){return ve=1,Cn(jt,e)}function Cn(e,t,r){var i=kn(xe++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):jt(void 0,t),function(p){var _=i.__N?i.__N[0]:i.__[0],l=i.t(_,p);_!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=v,!v.__f)){var s=function(p,_,l){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(h){return!!h.__c});if(f.every(function(h){return!h.__N}))return!o||o.call(this,p,_,l);var c=i.__c.props!==p;return f.forEach(function(h){if(h.__N){var u=h.__[0];h.__=h.__N,h.__N=void 0,u!==h.__[0]&&(c=!0)}}),o&&o.call(this,p,_,l)||c};v.__f=!0;var o=v.shouldComponentUpdate,a=v.componentWillUpdate;v.componentWillUpdate=function(p,_,l){if(this.__e){var f=o;o=void 0,s(p,_,l),o=f}a&&a.call(this,p,_,l)},v.shouldComponentUpdate=s}return i.__N||i.__}function jn(){for(var e;e=Ct.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){v=null,xt&&xt(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),St&&St(e,t)},b.__r=function(e){vt&&vt(e),xe=0;var t=(v=e.__c).__H;t&&(ge===v?(t.__h=[],v.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Y),t.__h.forEach(be),t.__h=[],xe=0)),ge=v},b.diffed=function(e){bt&&bt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ct.push(t)!==1&&gt===b.requestAnimationFrame||((gt=b.requestAnimationFrame)||Nn)(jn)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ge=v=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Y),r.__h=r.__h.filter(function(i){return!i.__||be(i)})}catch(i){t.some(function(s){s.__h&&(s.__h=[])}),t=[],b.__e(i,r.__v)}}),yt&&yt(e,t)},b.unmount=function(e){wt&&wt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{Y(i)}catch(s){t=s}}),r.__H=void 0,t&&b.__e(t,r.__v))};var kt=typeof requestAnimationFrame=="function";function Nn(e){var t,r=function(){clearTimeout(i),kt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);kt&&(t=requestAnimationFrame(r))}function Y(e){var t=v,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),v=t}function be(e){var t=v;e.__c=e.__(),v=t}function jt(e,t){return typeof t=="function"?t(e):t}var Nt=d.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  background-color: #f5faffff;
`,Et=d.div`
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
`,Tt=d.div`
  width: 100%;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 50px;
`;function Lt(){return n(Nt,{children:[n(Tt,{}),n(Et,{children:[n("h1",{children:"NAVIC\u306E\u53D6\u308A\u7D44\u307F"}),n("h5",{children:"OUR SERVICE"})]})]})}var Mt=d.section`
  overflow: hidden;
  position: relative;
  display: flex;
  border: 5px solid red;
  overflow-x: auto;
  max-width: var(--container-xl);
`,At=d.div`
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
  animation: spin 5s infinite linear;
`;he("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;function Pt(){return n(Mt,{children:n(At,{children:[n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"}),n("img",{src:"static/mv2.jpg"})]})})}var $t=d.section`
  display: grid;
  grid-area: 8/1/9/2;
  grid-template-columns: repeat(15, 1fr);
  position: relative;
  align-self: stretch;
  height: auto;
  gap: 30px;
`,Ht=d.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
  grid-column: 2/14;
  grid-row: 2;
`,ee=d.img`
  width: 20%;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
`,te=d.div`
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
`,ne=d.div`
  border: 1px solid blue;
  height: 16vw;
  display: flex;
`,Dt=d.div`
  grid-column: 2/14;
  grid-row: 3;

  & h3 {
    font-size: 40px;
  }
  & a {
    color: #14508cff;
  }
`;function It(){return n($t,{children:[n(Ht,{children:[n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(ne,{children:[n(ee,{src:"static/mv2.jpg"}),n(te,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]})]}),n(Dt,{children:n("h3",{children:n("span",{children:n("a",{href:"https://www.navic.cc/news",children:"VIEW ALL"})})})})]})}var zt=d.section`
  align-items: center;
  position: relative;
  width: 100%;
`,Ut=d.div`
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
`,N=d.div`
  align-items: center;
  border: 1px solid blue;
`,Bt=d.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,Ft=d.img`
  margin-top: 3px;
  margin-left: 4px;
  margin-right: 4px;
  width: 90%;
`,E=d.div`
  align-items: center;
  color: blue;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 10px;
`;function P({src:e}){return n(Bt,{children:n(Ft,{src:e})})}function Rt(){return n(zt,{children:n(Ut,{children:[n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(P,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]})]})})}var Ot=d.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template_columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  width: 100%;
`,Wt=d.div`
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
`,Vt=d.div`
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
`;function re(e){switch(e){case 0:return{left:40,right:0,bottom:62,top:6};case 1:return{left:20,right:0,bottom:53,top:15};case 2:return{left:10,right:0,bottom:0,top:36};case 3:return{left:20,right:0,bottom:15,top:56};case 4:return{left:40,right:0,bottom:8,top:64};case 5:return{left:64,right:0,bottom:15,top:56};case 6:return{left:72,right:0,bottom:0,top:36};default:return{left:62,right:0,bottom:53,top:15}}}var T=d.div`
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
`,L=d.div`
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
`;function qt(){return n(Ot,{children:[n(Vt,{children:n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"20 20 160 160","aria-hidden":!0,datatype:"shape",role:"presentation","aria-label":"",preserveAspectRatio:"xMidYMid meet",children:n("g",{children:n("path",{d:"M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"})})})}),n(Wt,{children:n("img",{src:"static/navic_logo.png"})}),n(T,{place:0,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"EC\u4E8B\u696D"]}),n("img",{src:"static/center0.png"})]})}),n(T,{place:1,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"\u5378\u8CA9\u58F2",n("br",{}),"\u5916\u6CE8\u53D6\u4ED8"]}),n("img",{src:"static/center1.png"})]})}),n(T,{place:2,children:n(L,{children:[n("h2",{children:"\u30EC\u30F3\u30BF\u30EB"}),n("img",{src:"static/center2.png"})]})}),n(T,{place:3,children:n(L,{children:[n("h2",{children:"\u8CBF\u6613"}),n("img",{src:"static/center3.png"}),n("img",{src:"static/center3.1.png"})]})}),n(T,{place:4,children:n(L,{children:[n("h2",{children:["\u30B0\u30EB\u30FC\u30D7",n("br",{}),"\u4E8B\u696D"]}),n("img",{src:"static/center4.png"})]})}),n(T,{place:5,children:n(L,{children:[n("h2",{children:"\u5065\u5EB7"}),n("img",{src:"static/center5.png"})]})}),n(T,{place:6,children:n(L,{children:[n("h2",{children:["\u8C4A\u6A4B",n("br",{}),"\u30EA\u30C6\u30FC\u30EB"]}),n("img",{src:"static/center6.0.png",style:{maxHeight:30}}),n("img",{src:"static/center6.1.png"}),n("img",{src:"static/center6.2.png"})]})}),n(T,{place:7,children:n(L,{children:[n("h2",{children:["\u81EA\u793E\u5546\u54C1",n("br",{}),"\u958B\u767A"]}),n("img",{src:"static/center7.jpg"})]})})]})}var Gt=d.section`
  position: relative;
`,Kt=d.div`
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
`,Jt=d.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
`,Zt=d.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  gap: 10%;
  width: 70%;
`,Qt=d.span`
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
`;function Yt(){return n("footer",{children:n(Gt,{children:[n(Kt,{children:n("h5",{children:"Copyright(C) NAVIC Co.,LTD. All Rights Reserved."})}),n(Jt,{children:n(Zt,{children:[n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",n("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),n(ie,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",n("br",{}),"TikTok"]})]})})]})})}function ie({img:e,url:t,children:r}){return n(Qt,{children:n("a",{href:t,children:[n("img",{src:e}),n("span",{children:r})]})})}var En=[{context:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D",url:"https://www.navic.cc/car-installation"},{context:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D",url:"https://www.navic.cc/car-supplies-onlineshop"},{context:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D",url:"https://www.navic.cc/clezeed"}];function Xt(){return n(Qe,{children:[n(Tn,{title:"\u4E8B\u696D\u7D39\u4ECB",menu:En}),n(Ye,{children:n("a",{href:"https://navic-plaza.com/",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})})]})}function Tn({title:e,menu:t}){let[r,i]=X(!0),s=()=>{i(!r)};return n(C,{children:[n(Xe,{onClick:s,ishidden:r}),n(me,{onClick:s,children:e}),t.map(({context:o,url:a},p)=>n(me,{hidden:r,children:n("a",{href:a,children:o})},p))]})}function Ln({onClick:e}){return n(nt,{onClick:e,children:[n("a",{href:"#main",children:["\u4E8B\u696D\u7D39\u4ECB",n("div",{class:"dropDown",children:[n("a",{href:"#",children:"Link 1"}),n("a",{href:"#",children:"Link 2"}),n("a",{href:"#",children:"Link 3"})]})]}),n("a",{href:"#feature",children:"\u304A\u77E5\u3089\u305B"}),n("a",{href:"#install",children:"\u4F1A\u793E\u60C5\u5831"}),n("a",{href:"/doc",children:"\u63A1\u7528\u60C5\u5831"}),n("a",{href:"/doc",children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"}),n("a",{href:"/doc",children:"\u304A\u554F\u3044\u5408\u308F\u305B"}),n("a",{href:"/doc",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})]})}function en(){let[e,t]=X(!1),r=()=>{t(!e)};return n(C,{children:[n(Ln,{onClick:r}),n(qe,{isOpen:e,children:n(Ke,{children:[n(Je,{}),n(Ze,{children:[n(Ge,{type:"button",onClick:r}),n(Xt,{})]})]})}),n(ct,{}),n(mt,{}),n(dt,{}),n(Lt,{}),n(qt,{}),n(Q,{ja:"\u304A\u77E5\u3089\u305B",en:"NEWS"}),n(It,{}),n(Q,{ja:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2",en:"SOCIAL MEDIA"}),n(Pt,{}),n(Q,{ja:"\u5916\u90E8\u30EA\u30F3\u30AF",en:"LINK"}),n(Rt,{}),n(Yt,{})]})}var tn=document.getElementById("mount");tn&&Ie(n(en,{}),tn);
