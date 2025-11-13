var ee,m,Le,kn,M,Te,Pe,De,Me,fe,pe,he,Sn,R={},Ie=[],Cn=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,te=Array.isArray;function N(t,n){for(var r in n)t[r]=n[r];return t}function _e(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function U(t,n,r){var i,c,o,s={};for(o in n)o=="key"?i=n[o]:o=="ref"?c=n[o]:s[o]=n[o];if(arguments.length>2&&(s.children=arguments.length>3?ee.call(arguments,2):r),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return Y(t,s,i,c,null)}function Y(t,n,r,i,c){var o={type:t,props:n,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c??++Le,__i:-1,__u:0};return c==null&&m.vnode!=null&&m.vnode(o),o}function T(t){return t.children}function Q(t,n){this.props=t,this.context=n}function $(t,n){if(n==null)return t.__?$(t.__,t.__i+1):null;for(var r;n<t.__k.length;n++)if((r=t.__k[n])!=null&&r.__e!=null)return r.__e;return typeof t.type=="function"?$(t):null}function Fe(t){var n,r;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if((r=t.__k[n])!=null&&r.__e!=null){t.__e=t.__c.base=r.__e;break}return Fe(t)}}function Ne(t){(!t.__d&&(t.__d=!0)&&M.push(t)&&!X.__r++||Te!=m.debounceRendering)&&((Te=m.debounceRendering)||Pe)(X)}function X(){for(var t,n,r,i,c,o,s,p=1;M.length;)M.length>p&&M.sort(De),t=M.shift(),p=M.length,t.__d&&(r=void 0,i=void 0,c=(i=(n=t).__v).__e,o=[],s=[],n.__P&&((r=N({},i)).__v=i.__v+1,m.vnode&&m.vnode(r),me(n.__P,r,i,n.__n,n.__P.namespaceURI,32&i.__u?[c]:null,o,c??$(i),!!(32&i.__u),s),r.__v=i.__v,r.__.__k[r.__i]=r,He(o,r,s),i.__e=i.__=null,r.__e!=c&&Fe(r)));X.__r=0}function $e(t,n,r,i,c,o,s,p,h,l,f){var a,_,u,w,C,y,g,x=i&&i.__k||Ie,L=n.length;for(h=jn(r,n,x,h,L),a=0;a<L;a++)(u=r.__k[a])!=null&&(_=u.__i==-1?R:x[u.__i]||R,u.__i=a,y=me(t,u,_,c,o,s,p,h,l,f),w=u.__e,u.ref&&_.ref!=u.ref&&(_.ref&&ge(_.ref,null,u),f.push(u.ref,u.__c||w,u)),C==null&&w!=null&&(C=w),(g=!!(4&u.__u))||_.__k===u.__k?h=Ue(u,h,t,g):typeof u.type=="function"&&y!==void 0?h=y:w&&(h=w.nextSibling),u.__u&=-7);return r.__e=C,h}function jn(t,n,r,i,c){var o,s,p,h,l,f=r.length,a=f,_=0;for(t.__k=new Array(c),o=0;o<c;o++)(s=n[o])!=null&&typeof s!="boolean"&&typeof s!="function"?(h=o+_,(s=t.__k[o]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?Y(null,s,null,null,null):te(s)?Y(T,{children:s},null,null,null):s.constructor==null&&s.__b>0?Y(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,p=null,(l=s.__i=En(s,r,h,a))!=-1&&(a--,(p=r[l])&&(p.__u|=2)),p==null||p.__v==null?(l==-1&&(c>f?_--:c<f&&_++),typeof s.type!="function"&&(s.__u|=4)):l!=h&&(l==h-1?_--:l==h+1?_++:(l>h?_--:_++,s.__u|=4))):t.__k[o]=null;if(a)for(o=0;o<f;o++)(p=r[o])!=null&&(2&p.__u)==0&&(p.__e==i&&(i=$(p)),Re(p,p));return i}function Ue(t,n,r,i){var c,o;if(typeof t.type=="function"){for(c=t.__k,o=0;c&&o<c.length;o++)c[o]&&(c[o].__=t,n=Ue(c[o],n,r,i));return n}t.__e!=n&&(i&&(n&&t.type&&!n.parentNode&&(n=$(t)),r.insertBefore(t.__e,n||null)),n=t.__e);do n=n&&n.nextSibling;while(n!=null&&n.nodeType==8);return n}function En(t,n,r,i){var c,o,s,p=t.key,h=t.type,l=n[r],f=l!=null&&(2&l.__u)==0;if(l===null&&t.key==null||f&&p==l.key&&h==l.type)return r;if(i>(f?1:0)){for(c=r-1,o=r+1;c>=0||o<n.length;)if((l=n[s=c>=0?c--:o++])!=null&&(2&l.__u)==0&&p==l.key&&h==l.type)return s}return-1}function ze(t,n,r){n[0]=="-"?t.setProperty(n,r??""):t[n]=r==null?"":typeof r!="number"||Cn.test(n)?r:r+"px"}function J(t,n,r,i,c){var o,s;e:if(n=="style")if(typeof r=="string")t.style.cssText=r;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(n in i)r&&n in r||ze(t.style,n,"");if(r)for(n in r)i&&r[n]==i[n]||ze(t.style,n,r[n])}else if(n[0]=="o"&&n[1]=="n")o=n!=(n=n.replace(Me,"$1")),s=n.toLowerCase(),n=s in t||n=="onFocusOut"||n=="onFocusIn"?s.slice(2):n.slice(2),t.l||(t.l={}),t.l[n+o]=r,r?i?r.u=i.u:(r.u=fe,t.addEventListener(n,o?he:pe,o)):t.removeEventListener(n,o?he:pe,o);else{if(c=="http://www.w3.org/2000/svg")n=n.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(n!="width"&&n!="height"&&n!="href"&&n!="list"&&n!="form"&&n!="tabIndex"&&n!="download"&&n!="rowSpan"&&n!="colSpan"&&n!="role"&&n!="popover"&&n in t)try{t[n]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&n[4]!="-"?t.removeAttribute(n):t.setAttribute(n,n=="popover"&&r==1?"":r))}}function Ae(t){return function(n){if(this.l){var r=this.l[n.type+t];if(n.t==null)n.t=fe++;else if(n.t<r.u)return;return r(m.event?m.event(n):n)}}}function me(t,n,r,i,c,o,s,p,h,l){var f,a,_,u,w,C,y,g,x,L,P,Z,H,Ee,K,B,de,E=n.type;if(n.constructor!=null)return null;128&r.__u&&(h=!!(32&r.__u),o=[p=n.__e=r.__e]),(f=m.__b)&&f(n);e:if(typeof E=="function")try{if(g=n.props,x="prototype"in E&&E.prototype.render,L=(f=E.contextType)&&i[f.__c],P=f?L?L.props.value:f.__:i,r.__c?y=(a=n.__c=r.__c).__=a.__E:(x?n.__c=a=new E(g,P):(n.__c=a=new Q(g,P),a.constructor=E,a.render=Nn),L&&L.sub(a),a.props=g,a.state||(a.state={}),a.context=P,a.__n=i,_=a.__d=!0,a.__h=[],a._sb=[]),x&&a.__s==null&&(a.__s=a.state),x&&E.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=N({},a.__s)),N(a.__s,E.getDerivedStateFromProps(g,a.__s))),u=a.props,w=a.state,a.__v=n,_)x&&E.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),x&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(x&&E.getDerivedStateFromProps==null&&g!==u&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(g,P),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(g,a.__s,P)===!1||n.__v==r.__v){for(n.__v!=r.__v&&(a.props=g,a.state=a.__s,a.__d=!1),n.__e=r.__e,n.__k=r.__k,n.__k.some(function(F){F&&(F.__=n)}),Z=0;Z<a._sb.length;Z++)a.__h.push(a._sb[Z]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(g,a.__s,P),x&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(u,w,C)})}if(a.context=P,a.props=g,a.__P=t,a.__e=!1,H=m.__r,Ee=0,x){for(a.state=a.__s,a.__d=!1,H&&H(n),f=a.render(a.props,a.state,a.context),K=0;K<a._sb.length;K++)a.__h.push(a._sb[K]);a._sb=[]}else do a.__d=!1,H&&H(n),f=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++Ee<25);a.state=a.__s,a.getChildContext!=null&&(i=N(N({},i),a.getChildContext())),x&&!_&&a.getSnapshotBeforeUpdate!=null&&(C=a.getSnapshotBeforeUpdate(u,w)),B=f,f!=null&&f.type===T&&f.key==null&&(B=Be(f.props.children)),p=$e(t,te(B)?B:[B],n,r,i,c,o,s,p,h,l),a.base=n.__e,n.__u&=-161,a.__h.length&&s.push(a),y&&(a.__E=a.__=null)}catch(F){if(n.__v=null,h||o!=null)if(F.then){for(n.__u|=h?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;o[o.indexOf(p)]=null,n.__e=p}else{for(de=o.length;de--;)_e(o[de]);ue(n)}else n.__e=r.__e,n.__k=r.__k,F.then||ue(n);m.__e(F,n,r)}else o==null&&n.__v==r.__v?(n.__k=r.__k,n.__e=r.__e):p=n.__e=Tn(r.__e,n,r,i,c,o,s,h,l);return(f=m.diffed)&&f(n),128&n.__u?void 0:p}function ue(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(ue)}function He(t,n,r){for(var i=0;i<r.length;i++)ge(r[i],r[++i],r[++i]);m.__c&&m.__c(n,t),t.some(function(c){try{t=c.__h,c.__h=[],t.some(function(o){o.call(c)})}catch(o){m.__e(o,c.__v)}})}function Be(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:te(t)?t.map(Be):N({},t)}function Tn(t,n,r,i,c,o,s,p,h){var l,f,a,_,u,w,C,y=r.props,g=n.props,x=n.type;if(x=="svg"?c="http://www.w3.org/2000/svg":x=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((u=o[l])&&"setAttribute"in u==!!x&&(x?u.localName==x:u.nodeType==3)){t=u,o[l]=null;break}}if(t==null){if(x==null)return document.createTextNode(g);t=document.createElementNS(c,x,g.is&&g),p&&(m.__m&&m.__m(n,o),p=!1),o=null}if(x==null)y===g||p&&t.data==g||(t.data=g);else{if(o=o&&ee.call(t.childNodes),y=r.props||R,!p&&o!=null)for(y={},l=0;l<t.attributes.length;l++)y[(u=t.attributes[l]).name]=u.value;for(l in y)if(u=y[l],l!="children"){if(l=="dangerouslySetInnerHTML")a=u;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;J(t,l,null,u,c)}}for(l in g)u=g[l],l=="children"?_=u:l=="dangerouslySetInnerHTML"?f=u:l=="value"?w=u:l=="checked"?C=u:p&&typeof u!="function"||y[l]===u||J(t,l,u,y[l],c);if(f)p||a&&(f.__html==a.__html||f.__html==t.innerHTML)||(t.innerHTML=f.__html),n.__k=[];else if(a&&(t.innerHTML=""),$e(n.type=="template"?t.content:t,te(_)?_:[_],n,r,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":c,o,s,o?o[0]:r.__k&&$(r,0),p,h),o!=null)for(l=o.length;l--;)_e(o[l]);p||(l="value",x=="progress"&&w==null?t.removeAttribute("value"):w!=null&&(w!==t[l]||x=="progress"&&!w||x=="option"&&w!=y[l])&&J(t,l,w,y[l],c),l="checked",C!=null&&C!=t[l]&&J(t,l,C,y[l],c))}return t}function ge(t,n,r){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&n==null||(t.__u=t(n))}else t.current=n}catch(c){m.__e(c,r)}}function Re(t,n,r){var i,c;if(m.unmount&&m.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||ge(i,null,n)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){m.__e(o,n)}i.base=i.__P=null}if(i=t.__k)for(c=0;c<i.length;c++)i[c]&&Re(i[c],n,r||typeof t.type!="function");r||_e(t.__e),t.__c=t.__=t.__e=void 0}function Nn(t,n,r){return this.constructor(t,r)}function Oe(t,n,r){var i,c,o,s;n==document&&(n=document.documentElement),m.__&&m.__(t,n),c=(i=typeof r=="function")?null:r&&r.__k||n.__k,o=[],s=[],me(n,t=(!i&&r||n).__k=U(T,null,[t]),c||R,R,n.namespaceURI,!i&&r?[r]:c?null:n.firstChild?ee.call(n.childNodes):null,o,!i&&r?r:c?c.__e:n.firstChild,i,s),He(o,t,s)}ee=Ie.slice,m={__e:function(t,n,r,i){for(var c,o,s;n=n.__;)if((c=n.__c)&&!c.__)try{if((o=c.constructor)&&o.getDerivedStateFromError!=null&&(c.setState(o.getDerivedStateFromError(t)),s=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(t,i||{}),s=c.__d),s)return c.__E=c}catch(p){t=p}throw t}},Le=0,kn=function(t){return t!=null&&t.constructor==null},Q.prototype.setState=function(t,n){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=N({},this.state),typeof t=="function"&&(t=t(N({},r),this.props)),t&&N(r,t),t!=null&&this.__v&&(n&&this._sb.push(n),Ne(this))},Q.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ne(this))},Q.prototype.render=T,M=[],Pe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,De=function(t,n){return t.__v.__b-n.__v.__b},X.__r=0,Me=/(PointerCapture)$|Capture$/i,fe=0,pe=Ae(!1),he=Ae(!0),Sn=0;var zn=0,tr=Array.isArray;function e(t,n,r,i,c,o){n||(n={});var s,p,h=n;if("ref"in h)for(p in h={},n)p=="ref"?s=n[p]:h[p]=n[p];var l={type:t,props:h,key:r,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--zn,__i:-1,__u:0,__source:c,__self:o};if(typeof t=="function"&&(s=t.defaultProps))for(p in s)h[p]===void 0&&(h[p]=s[p]);return m.vnode&&m.vnode(l),l}var An=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],We=new Set(An);function Ln(t){let n={};for(let r in t){let i=r.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`);n[i]=t[r]}return n}var xe=class{uid=0;constructor(n){n&&(this.uid=n)}next(){return++this.uid}},Pn=new xe;function ne(){return`styled-component-${Pn.next()}`}function Ve(t){let n=document.styleSheets;for(let r of n)for(let i of r.cssRules)if(i.cssText.includes(`.${t} `))return!0;return!1}function ve(t,n){if(!Ve(t)){let r=document.createElement("style");r.innerHTML=`.${t} { ${n} }`,document.head.appendChild(r)}}function Dn(t,n){if(!Ve(t)){let r=document.createElement("style");r.innerHTML=`.${t} ${n}`,document.head.appendChild(r)}}function Mn(t,n){let r=JSON.stringify(Ln(n),null,2);r=r.replaceAll(",",";"),r=r.replaceAll('"',"");let i=ne(),c=Object.assign(o=>{let{children:s,...p}=o;Dn(i,r);let l={className:o.className||i,...p};return c.className=i,U(t,l,s)},{className:void 0});return c}function In(t,n,...r){let i=ne(),c=Object.assign(o=>{let{children:s,...p}=o,h="",l=r.length;n.forEach((_,u)=>{u<l?h+=_+r[u]:h+=_}),ve(i,h);let a={className:o.className||i,...p};return c.className=i,U(t,a,s)},{className:void 0});return c}function Fn(t){return t.length==0?!0:typeof t[0]!="function"}function $n(t,n,...r){if(Fn(r))return In(t,n,...r);let i=Object.assign(c=>{let o="",s=r.length;n.forEach((a,_)=>{_<s?o+=a+r[_](c):o+=a});let{children:p,...h}=c,l=i.mappedId.get(c);l||(l=ne(),ve(l,o),i.mappedId.set(c,l));let f={className:c.className||l,...h};return U(t,f,p)},{mappedId:new Map});return i}function Un(t){return(n,...r)=>{let i="",c=r.length;n.forEach((s,p)=>{p<c?i+=s+r[p]:i+=s});let o=Object.assign(s=>{let{children:p,...h}=s,l=ne();console.log("aaa"),ve(l,i),t.className&&(l=`${t.className} ${l}`);let f=s.className||l;o.className=f;let a={className:f,...h};return U(t,a,p)},{className:void 0});return o}}var Ge=Un;We.forEach(t=>{Ge[t]=function(n,...r){return Array.isArray(n)&&"raw"in n?$n(t,n,...r):Mn(t,n)}});var qe=Ge;var I=class{keys;_mainKey;maps=new Map;constructor(n,r){this.keys=n,this._mainKey=r;for(let i in n)this.maps.set(i,"")}init(n){for(let r in this.keys){let i=n(r);this.maps.set(r,i)}}setCSS(n){return(r,...i)=>{let c="",o=i.length;r.forEach((s,p)=>{p<o?c+=s+i[p]:c+=s}),this.maps.set(n,c)}}get mainKey(){return this._mainKey}generate(){let n={},r="";this.keys.forEach((c,o)=>{n[c]=c;let s=`.${n[c]}`;c!=this.mainKey&&(s=`.${this.mainKey}.${c}`),r+=`${s} { ${this.maps.get(c)} }
`});let i=document.createElement("style");return i.innerHTML=r,document.head.appendChild(i),n}};var d=qe;var Ze=d.header`
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
`,Ke=d.div`
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
  @media screen and (min-width: 1200px) {
    & img {
      width: 300px;
    }
  }
  @media screen and (min-width: 1500px) {
    & img {
      width: 480px;
    }
  }
`,Hn=["dropDown"],Je=new I(Hn,"dropDown");Je.setCSS("dropDown")`
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
`;var _r=Je.generate(),Bn=d.nav`
  background-color: ${({isdark:t})=>t?"#111111":"white"};
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
  @media screen and (max-width: 1100px) {
    & a {
      font-size: 1.4vw;
    }
  }
  @media screen and (max-width: 1000px) {
    & a {
      font-size: 1.32vw;
    }
  }
  @media screen and (max-width: 900px) {
    visibility: ${({autohide:t})=>t?"hidden":"visible"};
  }
`,Ye=Bn;var Qe=d.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: ${({top:t})=>t||0}px;
  z-index: ${({zIndex:t})=>t||8};
  list-style-type: none;
  display: none;
  /* move flex-items in column */
  flex-direction: column;

  right: ${({isOpen:t})=>t?"0":"-100%"};
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
`,Xe=d.div`
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
`,et=d.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 6fr 4fr;
`,tt=d.div`
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
`,nt=d.div`
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
`,rt=d.nav`
  margin-left: 15%;
  margin-right: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 7fr 1fr;
  gap: 4px;
  position: relative;
`,be=d.span`
  text-align: center;
  grid-column: 3;
  font-size: 25px;
  margin-bottom: 5px;
  margin-top: 5px;
  color: #73acdeff;
  visibility: ${({hidden:t})=>t?"hidden":"visible"};
  cursor: pointer;
  & a {
    font-size: 15px;
    color: #73acdeff;
    text-decoration: none;
  }
`,it=d.span`
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
`,ot=d.div`
  grid-column: 2;
  width: auto;
  height: 100%;
  background-image: ${({ishidden:t})=>t?'url("static/arrow-down.svg")':'url("static/arrow-up.svg")'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-color: transparent;
  cursor: pointer;
  border: none;
`,xr=d.a`
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  margin-top: ${({isBottom:t})=>t?"auto":"0"};
  &:hover {
    background-color: #ddd;
    color: black;
  }
`,ct=d.div`
  grid-column: 2/2;
  display: flex;
  justify-content: right;
  align-items: center;
  grid-row: 1;
  margin-right: 20px;
`,at=d.button`
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
`,vr=d.button`
  position: fixed;
  bottom: ${({bottom:t})=>t||20}px;
  left: ${({isOpen:t,left:n})=>t?n||210:20}px;
  background-color: white;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  visibility: ${({alwaysShown:t})=>t?"visible":"hidden"};
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
`;function st({children:t,onClick:n}){return e(Ze,{children:[e(Rn,{}),e(Ye,{autohide:!0,children:t}),e(ct,{children:e(at,{onClick:n})})]})}function Rn(){return e(Ke,{children:e("a",{href:"https://www.navic.cc/",children:e("img",{src:"static/navic_logo.png"})})})}var lt=d.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
`,dt=d.img`
  height: auto;
  width: 53%;
  position: relative;
  object-fit: cover;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`,pt=d.div`
  position: relative;
  width: 47%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`,ht=d.div`
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
`;function ut(){return e(lt,{children:[e(pt,{}),e(dt,{src:"./static/navic_top.jpg"}),e(ht,{children:e("p",{children:["\u4EBA\u3068\u306E\u3064\u306A\u304C\u308A\u3092\u5927\u5207\u306B\u3002",e("br",{}),"\u69D8\u3005\u306A\u5206\u91CE\u3067\u65B0\u305F\u306A\u4FA1\u5024\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304F\u3002"]})})]})}var ft=d.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`,_t=d.img`
  height: auto;
  width: 50%;
  object-fit: cover;
`,mt=d.div`
  margin-left: 30px;
  font-size: 4vw;
  width: 50%;
  font-weight: bold;
  color: #1b4f80;
  margin-top: 5%;
`;function gt(){return e(ft,{children:[e(_t,{src:"static/section2.jpg"}),e(mt,{children:e("p",{children:["\u5E38\u306B\u5148\u3092\u898B\u636E\u3048\u305F",e("br",{}),"\u4E8B\u696D\u5C55\u958B\u3067",e("br",{}),"\u65B0\u305F\u306A\u672A\u6765\u3092\u5207\u308A\u958B\u304F\u3002"]})})]})}var On=["fade-in-section","is-visible"],we=new I(On,"fade-in-section");we.setCSS("fade-in-section")`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 0.6s ;
  will-change: opacity, visibility;
  margin: 0;
`;we.setCSS("is-visible")`
  opacity: 1;
  transform: none;
  visibility: visible;
`;var Wn=we.generate(),xt=d.div`
  width: 100%;
  height: 30px;
`,Vn=d.span`
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
`,vt=d.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`,bt=d.div`
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
`,wt=d.div`
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
`;var ie,v,ye,yt,ke=0,zt=[],b=m,kt=b.__b,St=b.__r,Ct=b.diffed,jt=b.__c,Et=b.unmount,Tt=b.__;function At(t,n){b.__h&&b.__h(v,t,ke||n),ke=0;var r=v.__H||(v.__H={__:[],__h:[]});return t>=r.__.length&&r.__.push({}),r.__[t]}function O(t){return ke=1,Gn(Lt,t)}function Gn(t,n,r){var i=At(ie++,2);if(i.t=t,!i.__c&&(i.__=[r?r(n):Lt(void 0,n),function(p){var h=i.__N?i.__N[0]:i.__[0],l=i.t(h,p);h!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=v,!v.__f)){var c=function(p,h,l){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(_){return!!_.__c});if(f.every(function(_){return!_.__N}))return!o||o.call(this,p,h,l);var a=i.__c.props!==p;return f.forEach(function(_){if(_.__N){var u=_.__[0];_.__=_.__N,_.__N=void 0,u!==_.__[0]&&(a=!0)}}),o&&o.call(this,p,h,l)||a};v.__f=!0;var o=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(p,h,l){if(this.__e){var f=o;o=void 0,c(p,h,l),o=f}s&&s.call(this,p,h,l)},v.shouldComponentUpdate=c}return i.__N||i.__}function Ce(t,n){var r=At(ie++,3);!b.__s&&Kn(r.__H,n)&&(r.__=t,r.u=n,v.__H.__h.push(r))}function qn(){for(var t;t=zt.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(re),t.__H.__h.forEach(Se),t.__H.__h=[]}catch(n){t.__H.__h=[],b.__e(n,t.__v)}}b.__b=function(t){v=null,kt&&kt(t)},b.__=function(t,n){t&&n.__k&&n.__k.__m&&(t.__m=n.__k.__m),Tt&&Tt(t,n)},b.__r=function(t){St&&St(t),ie=0;var n=(v=t.__c).__H;n&&(ye===v?(n.__h=[],v.__h=[],n.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(n.__h.forEach(re),n.__h.forEach(Se),n.__h=[],ie=0)),ye=v},b.diffed=function(t){Ct&&Ct(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(zt.push(n)!==1&&yt===b.requestAnimationFrame||((yt=b.requestAnimationFrame)||Zn)(qn)),n.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),ye=v=null},b.__c=function(t,n){n.some(function(r){try{r.__h.forEach(re),r.__h=r.__h.filter(function(i){return!i.__||Se(i)})}catch(i){n.some(function(c){c.__h&&(c.__h=[])}),n=[],b.__e(i,r.__v)}}),jt&&jt(t,n)},b.unmount=function(t){Et&&Et(t);var n,r=t.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{re(i)}catch(c){n=c}}),r.__H=void 0,n&&b.__e(n,r.__v))};var Nt=typeof requestAnimationFrame=="function";function Zn(t){var n,r=function(){clearTimeout(i),Nt&&cancelAnimationFrame(n),setTimeout(t)},i=setTimeout(r,35);Nt&&(n=requestAnimationFrame(r))}function re(t){var n=v,r=t.__c;typeof r=="function"&&(t.__c=void 0,r()),v=n}function Se(t){var n=v;t.__c=t.__(),v=n}function Kn(t,n){return!t||t.length!==n.length||n.some(function(r,i){return r!==t[i]})}function Lt(t,n){return typeof n=="function"?n(t):n}function Pt(){return e(xt,{})}function oe({ja:t,en:n}){return e(vt,{children:[e(bt,{children:e("h2",{children:e("span",{children:t})})}),e(wt,{children:e("h1",{children:e("span",{children:n})})})]})}var Dt=d.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  background-color: #f5faffff;
`,Mt=d.div`
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
`,It=d.div`
  width: 100%;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 50px;
`;function Ft(){return e(Dt,{children:[e(It,{}),e(Mt,{children:[e("h1",{children:"NAVIC\u306E\u53D6\u308A\u7D44\u307F"}),e("h5",{children:"OUR SERVICE"})]})]})}var $t=d.section`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 6fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow-x: auto;

  max-width: var(--container-xl);
`,Ut=d.div`
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
`,Ht=d.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  grid-row: 5;
  grid-column: 2;
  margin-left: 25px;
  background-image: url("static/arrow-left.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
`,Bt=d.button`
  cursor: pointer;
  height: 50px;
  width: 50px;
  grid-row: 5;
  grid-column: 6;
  margin-left: 25px;
  background-image: url("static/arrow-right.svg");
  background-position: center;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  border: none;
  border-radius: 50%;
`;function Rt(){Ce(()=>{let i=setInterval(()=>{r()},3e3);return()=>clearInterval(i)});let t=i=>{let{scrollLeft:c,clientWidth:o}=i.currentTarget;c>=o*4.8&&i.currentTarget.scrollTo({left:0,behavior:"instant"})},n=()=>{let i=document.getElementById("mainSlider");if(i!=null){let c=i.scrollLeft,o=i.clientWidth,s=c-o;if(s<0){s=2*o,i.scrollTo({left:s,behavior:"instant"});return}i.scrollTo({left:s,behavior:"smooth"})}},r=()=>{let i=document.getElementById("mainSlider");if(i!=null){let c=i.scrollLeft,o=i.clientWidth;i.scrollTo({left:c+o+10,behavior:"smooth"})}};return e($t,{children:[e(Ht,{onClick:n}),e(Ut,{id:"mainSlider",onScroll:t,children:[e("img",{src:"static/display.jpg"}),e("img",{src:"static/display2.jpg"}),e("img",{src:"static/display3.jpg"}),e("img",{src:"static/display4.jpg"}),e("img",{src:"static/display.jpg"})]}),e(Bt,{onClick:r})]})}var Ot=d.section`
  display: grid;
  grid-area: 8/1/9/2;
  grid-template-columns: repeat(15, 1fr);
  position: relative;
  align-self: stretch;
  height: auto;
  gap: 30px;
`,Wt=d.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
  grid-column: 2/14;
  grid-row: 2;
`,ce=d.img`
  width: 20%;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
`,ae=d.div`
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
  @media screen and (max-width: 700px) {
    & h1 {
      font-size: 16px;
    }
    & h3 {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 550px) {
    & h1 {
      font-size: 14px;
    }
    & h3 {
      font-size: 8px;
    }
  }
  @media screen and (max-width: 400px) {
    & h1 {
      font-size: 10px;
    }
    & h3 {
      font-size: 6px;
    }
  }
`,se=d.div`
  border: 1px solid blue;
  height: 16vw;
  display: flex;
`,Vt=d.div`
  grid-column: 2/14;
  grid-row: 3;

  & h3 {
    font-size: 40px;
  }
  & a {
    color: #14508cff;
  }
`;function Gt(){return e(Ot,{children:[e(Wt,{children:[e(se,{children:[e(ce,{src:"static/mv2.jpg"}),e(ae,{children:[e("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),e("h3",{children:"7\u670810\u65E5"})]})]}),e(se,{children:[e(ce,{src:"static/mv2.jpg"}),e(ae,{children:[e("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),e("h3",{children:"7\u670810\u65E5"})]})]}),e(se,{children:[e(ce,{src:"static/mv2.jpg"}),e(ae,{children:[e("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),e("h3",{children:"7\u670810\u65E5"})]})]})]}),e(Vt,{children:e("h3",{children:e("span",{children:e("a",{href:"https://www.navic.cc/news",children:"VIEW ALL"})})})})]})}var qt=d.section`
  align-items: center;
  position: relative;
  width: 100%;
`,Zt=d.div`
  display: grid;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
  grid-template-columns: repeat(6, 1fr);
  gap: 4px;
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`,k=d.div`
  border: 1px solid #99ccffff;
  display: grid;
  grid-template-areas:
    "img"
    "text";
  grid-template-rows: 1fr 1fr;
  @media screen and (max-width: 700px) {
    grid-template-rows: 3fr 60px;
  }
  @media screen and (max-width: 600px) {
    grid-template-rows: 3fr 50px;
  }
  @media screen and (max-width: 500px) {
    grid-template-rows: 3fr 40px;
  }
  gap: 0px;
`,Kt=d.a`
  display: flex;
  justify-content: center;
  grid-area: img;
  width: 100%;
  margin: 0;
`,Jt=d.img`
  object-fit: contain;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  width: 100%;
`,S=d.div`
  align-items: center;
  grid-area: text;
  color: #14508cff;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 8px;
  font-weight: bold;
  margin: 0;
  @media screen and (max-width: 1200px) {
    font-size: 7px;
  }
  @media screen and (max-width: 800px) {
    font-size: 6px;
  }
  @media screen and (max-width: 700px) {
    font-size: 8px;
  }
  @media screen and (max-width: 600px) {
    font-size: 5px;
  }
`;function j({src:t,url:n}){return e(Kt,{href:n,children:e(Jt,{src:t})})}function Yt(){return e(qt,{children:e(Zt,{children:[e(k,{children:[e(j,{src:"static/links/link1.jpg",url:"https://www.navic-inc.jp/"}),e(S,{children:e("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),e(k,{children:[e(j,{src:"static/links/link2.jpg",url:"https://www.ja-oil.com/"}),e(S,{children:e("h1",{children:"J&A\u30AA\u30A4\u30EB"})})]}),e(k,{children:[e(j,{src:"static/links/link3.jpg",url:"https://www.clezeed.com/"}),e(S,{children:e("h1",{children:["CLEZEED(\u65E7CLESEED)",e("br",{}),"\u30B7\u30E7\u30C3\u30D7\u30B5\u30A4\u30C8"]})})]}),e(k,{children:[e(j,{src:"static/links/link4.jpg",url:"https://www.navic.cc/creer-shop/"}),e(S,{children:e("h1",{children:["\u30AF\u30EC\u30FC\u30EB",e("br",{}),"\u30AA\u30F3\u30E9\u30A4\u30F3\u30B7\u30E7\u30C3\u30D7"]})})]}),e(k,{children:[e(j,{src:"static/links/link5.jpg",url:"https://www.clevers.co.jp/"}),e(S,{children:e("h1",{children:["FEEL",e("br",{}),"\u8C4A\u6A4B\u5E97"]})})]}),e(k,{children:[e(j,{src:"static/links/link6.png",url:"https://kenkoucreer.base.shop/"}),e(S,{children:e("h1",{children:"\u5065\u5EB7\u30AF\u30EC\u30FC\u30EB"})})]}),e(k,{children:[e(j,{src:"static/links/link7.jpg",url:"https://tabirabo.com/"}),e(S,{children:e("h1",{children:["\u30AD\u30E3\u30F3\u30D4\u30F3\u30B0\u30AB\u30FC",e("br",{}),"\u30EC\u30F3\u30BF\u30EB"]})})]}),e(k,{children:[e(j,{src:"static/links/link8.jpg",url:"https://www.mimitakara.jp/"}),e(S,{children:e("h1",{children:"Mimitakara"})})]}),e(k,{children:[e(j,{src:"static/links/link9.jpg",url:"https://clevers-nagoya.com/"}),e(S,{children:e("h1",{children:["\u30AF\u30EC\u30F4\u30A1\u30FC\u30BA",e("br",{}),"\u540D\u53E4\u5C4B"]})})]}),e(k,{children:[e(j,{src:"static/links/link10.png",url:"https://navic-plaza.com/"}),e(S,{children:e("h1",{children:"NAVIC\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})})]}),e(k,{children:[e(j,{src:"static/links/link11.jpg",url:"https://www.outdo.jp/"}),e(S,{children:e("h1",{children:["\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0",e("br",{}),"\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC"]})})]})]})})}var Qt=d.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template-columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  width: 100%;
`,Xt=d.div`
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
`,en=d.div`
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
`;function le(t){switch(t){case 0:return{left:40,right:0,bottom:62,top:6};case 1:return{left:20,right:0,bottom:53,top:15};case 2:return{left:10,right:0,bottom:0,top:36};case 3:return{left:20,right:0,bottom:15,top:56};case 4:return{left:40,right:0,bottom:8,top:64};case 5:return{left:64,right:0,bottom:15,top:56};case 6:return{left:72,right:0,bottom:0,top:36};default:return{left:62,right:0,bottom:53,top:15}}}var z=d.div`
  aspect-ratio: 1 / 1;
  display: grid;
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: start;
  margin-left: ${({place:t})=>le(t).left}%;
  margin-top: ${({place:t})=>le(t).top}%;
  margin-bottom: ${({place:t})=>le(t).bottom}%;
  margin-right: ${({place:t})=>le(t).right}%;
  width: 20%;
  position: relative;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  overflow: clip;
`,A=d.div`
  text-align: center;
  align-items: center;
  align-self: center;
  justify-content: center;
  color: #053769ff;
  width: 100%;
  gap: 0;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: auto auto auto;
  & h2 {
    font-size: 33px;
    font-weight: bold;
    margin: 0;
    grid-column: 1/4;
    grid-row: 1;
  }

  & br {
    content: "";
    display: block;
  }
  & img {
    margin: 0;
    width: 100%;
    object-fit: contain;
    grid-column: 2;
    max-height: 150px;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 2fr 4fr 2fr;
    & h2 {
      font-size: 15px;
    }
    & img {
      object-fit: contain;
    }
  }
  @media screen and (max-width: 400px) {
    grid-template-columns: 2fr 2fr 2fr;
    & h2 {
      font-size: 12px;
    }
    & img {
      object-fit: contain;
    }
  }
  position: relative;
`;function tn(){return e(Qt,{children:[e(en,{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"20 20 160 160","aria-hidden":!0,datatype:"shape",role:"presentation","aria-label":"",preserveAspectRatio:"xMidYMid meet",children:e("g",{children:e("path",{d:"M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"})})})}),e(Xt,{children:e("img",{src:"static/navic_logo.png"})}),e(z,{place:0,children:e(A,{children:[e("h2",{children:["\u8ECA\u7528\u54C1",e("br",{}),"EC\u4E8B\u696D"]}),e("img",{src:"static/center0.png"})]})}),e(z,{place:1,children:e(A,{children:[e("h2",{children:["\u8ECA\u7528\u54C1",e("br",{}),"\u5378\u8CA9\u58F2",e("br",{}),"\u5916\u6CE8\u53D6\u4ED8"]}),e("img",{src:"static/center1.png"})]})}),e(z,{place:2,children:e(A,{children:[e("h2",{children:"\u30EC\u30F3\u30BF\u30EB"}),e("img",{src:"static/center2.png"})]})}),e(z,{place:3,children:e(A,{children:[e("h2",{children:"\u8CBF\u6613"}),e("img",{src:"static/center3.png"}),e("img",{src:"static/center3.1.png"})]})}),e(z,{place:4,children:e(A,{children:[e("h2",{children:["\u30B0\u30EB\u30FC\u30D7",e("br",{}),"\u4E8B\u696D"]}),e("img",{src:"static/center4.png"})]})}),e(z,{place:5,children:e(A,{children:[e("h2",{children:"\u5065\u5EB7"}),e("img",{src:"static/center5.png"})]})}),e(z,{place:6,children:e(A,{children:[e("h2",{children:["\u8C4A\u6A4B",e("br",{}),"\u30EA\u30C6\u30FC\u30EB"]}),e("img",{src:"static/center6.0.png",style:{maxHeight:30}}),e("img",{src:"static/center6.1.png"}),e("img",{src:"static/center6.2.png"})]})}),e(z,{place:7,children:e(A,{children:[e("h2",{children:["\u81EA\u793E\u5546\u54C1",e("br",{}),"\u958B\u767A"]}),e("img",{src:"static/center7.jpg"})]})})]})}var nn=d.footer`
  position: relative;
`,rn=d.div`
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
`,on=d.div`
  display: none;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
  @media screen and (max-width: 900px) {
    display: flex;
  }
`,je=d.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  gap: 10%;
  width: 70%;
`,cn=d.span`
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
`,an=d.div`
  background-color: #053769ff;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 12fr 1fr;
  @media screen and (max-width: 900px) {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    grid-template-columns: 1fr 6fr 1fr;
  }
`,sn=d.div`
  width: 100%;
  display: grid;
  grid-column: 2;
  grid-template-columns: 7fr 5fr;
  grid-template-rows: 1fr 5fr;
  grid-template-areas:
    "left ."
    "left right";

  height: auto;
  min-width: 1000px;
  & a {
    text-decoration: none;
    cursor: pointer;
  }
`,ln=d.div`
  display: grid;

  grid-area: left;
  margin-left: 10%;
  margin-right: 2%;
  margin-top: 8%;
  margin-bottom: 1%;
  gap: 10px 40px;

  grid-template-areas:
    "navigation . . . "
    "information introduction employment media "
    "information introduction employment media "
    "information introduction employment other "
    "information introduction employment .  ";
`,dn=d.div`
  grid-area: right;
  height: auto;
  display: grid;
  margin-top: 0;
  gap: 0;
  grid-template-areas:
    "sns"
    "icon";
`,pn=d.div`
  grid-area: sns;
  height: auto;
  margin-top: 0;
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
`,hn=d.div`
  grid-area: icon;
  align-self: center;
  justify-self: center;
  justify-content: center;
  position: relative;
  display: flex;
  height: auto;
  top: -50%;
  & img {
    object-fit: cover;
    width: 65%;
  }
  @media screen and (max-width: 1000px) {
    top: -80%;
  }
  @media screen and (max-width: 900px) {
    & img {
      width: 45%;
    }
  }
`,un=d.div`
  grid-area: navigation;
  & h4 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 15px;
    color: white;
  }
  margin-bottom: 4px;
  @media screen and (max-width: 1200px) {
    & h4 {
      font-size: 13px;
    }
  }
`,fn=d.div`
  grid-area: other;
  & h4 {
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 14px;
    color: white;
  }
  @media screen and (max-width: 1200px) {
    & h4 {
      font-size: 13px;
    }
  }
`,_n=d.div`
  grid-area: information;
`,mn=d.div`
  grid-area: introduction;
`,gn=d.div`
  grid-area: employment;
`,xn=d.div`
  grid-area: media;
`,W=d.div`
  display: grid;
  gap: 5px;
  grid-template-areas:
    "title title"
    "line menu";
  grid-template-columns: 10px auto;
  & h5 {
    margin-top: 0;
    margin-bottom: 7px;
    font-size: 12px;
    color: white;
  }
  & h4 {
    margin-top: 0;
    margin-bottom: 7px;
    font-size: 15px;
    color: white;
  }
  @media screen and (max-width: 1200px) {
    & h5 {
      font-size: 9px;
    }
    & h4 {
      font-size: 13px;
    }
  }
`,V=d.div`
  display: block;
  background-color: white;
  margin-bottom: 15px;
  margin-top: 0;
  grid-area: line;
  width: 2px;
`,G=d.div`
  display: block;
  margin-top: 0;
  grid-area: title;
`,q=d.div`
  display: block;
  margin-top: 0;
  grid-area: menu;
`;function vn(){return e(nn,{children:[e(an,{children:e(sn,{children:[e(ln,{children:[e(un,{children:[e("a",{onClick:()=>{globalThis.scrollTo({top:0,behavior:"smooth"})},children:e("h4",{children:"TOP"})}),e("h4",{children:"\u304A\u77E5\u3089\u305B"}),e("h4",{children:"\u304A\u554F\u3044\u5408\u308F\u305B"})]}),e(_n,{children:e(W,{children:[e(G,{children:e("h4",{children:"\u4F1A\u793E\u60C5\u5831"})}),e(V,{}),e(q,{children:[e("h5",{children:"\u4F1A\u793E\u6982\u8981"}),e("h5",{children:"\u7D4C\u55B6\u7406\u5FF5"}),e("h5",{children:"\u4F1A\u793E\u6CBF\u9769"}),e("h5",{children:"SDG\uFF53"}),e("h5",{children:"\u5065\u5EB7\u7D4C\u55B6"})]})]})}),e(mn,{children:e(W,{children:[e(G,{children:e("h4",{children:"\u4E8B\u696D\u7D39\u4ECB"})}),e(V,{}),e(q,{children:[e("h5",{children:"\u8ECA\u7528\u54C1EC\u4E8B\u696D"}),e("h5",{children:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D"}),e("h5",{children:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D"}),e("h5",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"}),e("h5",{children:"\u8C4A\u6A4B\u30EA\u30C6\u30FC\u30EB\u4E8B\u696D"}),e("h5",{children:"\u8CBF\u6613\u4E8B\u696D"}),e("h5",{children:"\u5065\u5EB7\u4E8B\u696D"}),e("h5",{children:"\u30B0\u30EB\u30FC\u30D7\u4E8B\u696D"})]})]})}),e(gn,{children:e(W,{children:[e(G,{children:e("h4",{children:"\u63A1\u7528\u60C5\u5831"})}),e(V,{}),e(q,{children:[e("h5",{children:"\u65B0\u5352\u63A1\u7528"}),e("h5",{children:"\u9AD8\u5352\u63A1\u7528"}),e("h5",{children:"\u4E2D\u9014\u63A1\u7528"})]})]})}),e(xn,{children:e(W,{children:[e(G,{children:e("h4",{children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"})}),e(V,{}),e(q,{children:[e("h5",{children:"NAVIC\u30AA\u30EA\u30B8\u30CA\u30EBCM"}),e("h5",{children:"CLEZEED\u516C\u5F0FYouTube"}),e("h5",{children:"\u8C4A\u6A4B\u30E2\u30FC\u30BF\u30FC\u30BA"}),e("h5",{children:"\u30EC\u30FC\u30B9\u6D3B\u52D5"})]})]})}),e(fn,{children:[e("h4",{children:"\u7279\u5B9A\u5546\u53D6\u5F15\u6CD5\u306B\u57FA\u3065\u304F\u8868\u8A18"}),e("h4",{children:"\u500B\u4EBA\u60C5\u5831\u306E\u4FDD\u8B77"})]})]}),e(dn,{children:[e(hn,{children:e("img",{src:"static/navic_logo2.png"})}),e(pn,{children:e(je,{children:[e(D,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",e("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),e(D,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",e("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),e(D,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",e("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),e(D,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",e("br",{}),"TikTok"]})]})})]})]})}),e(rn,{children:e("h5",{children:"Copyright(C) NAVIC Co.,LTD. All Rights Reserved."})}),e(on,{children:e(je,{children:[e(D,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",e("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),e(D,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",e("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),e(D,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",e("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),e(D,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",e("br",{}),"TikTok"]})]})})]})}function D({img:t,url:n,children:r}){return e(cn,{children:e("a",{href:n,children:[e("img",{src:t}),e("span",{children:r})]})})}var Jn=[{context:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D",url:"https://www.navic.cc/car-installation"},{context:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D",url:"https://www.navic.cc/car-supplies-onlineshop"},{context:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D",url:"https://www.navic.cc/clezeed"}];function bn(){return e(rt,{children:[e(Yn,{title:"\u4E8B\u696D\u7D39\u4ECB",menu:Jn}),e(it,{children:e("a",{href:"https://navic-plaza.com/",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})})]})}function Yn({title:t,menu:n}){let[r,i]=O(!0),c=()=>{i(!r)};return e(T,{children:[e(ot,{onClick:c,ishidden:r}),e(be,{onClick:c,children:t}),n.map(({context:o,url:s},p)=>e(be,{hidden:r,children:e("a",{href:s,children:o})},p))]})}function Qn({onClick:t}){return e(st,{onClick:t,children:[e("a",{href:"#main",children:["\u4E8B\u696D\u7D39\u4ECB",e("div",{class:"dropDown",children:[e("a",{children:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D"}),e("a",{children:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D"}),e("a",{children:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D"})]})]}),e("a",{href:"#feature",children:"\u304A\u77E5\u3089\u305B"}),e("a",{href:"#install",children:["\u4F1A\u793E\u60C5\u5831",e("div",{class:"dropDown",children:[e("a",{children:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D"}),e("a",{children:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D"}),e("a",{children:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D"})]})]}),e("a",{href:"/doc",children:"\u63A1\u7528\u60C5\u5831"}),e("a",{href:"/doc",children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"}),e("a",{href:"/doc",children:"\u304A\u554F\u3044\u5408\u308F\u305B"}),e("a",{href:"/doc",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})]})}function wn(){let[t,n]=O(!1),r=()=>{n(!t)};return e(T,{children:[e(Qn,{onClick:r}),e(Qe,{isOpen:t,children:e(et,{children:[e(tt,{}),e(nt,{children:[e(Xe,{type:"button",onClick:r}),e(bn,{})]})]})}),e(ut,{}),e(Pt,{}),e(gt,{}),e(Ft,{}),e(tn,{}),e(oe,{ja:"\u304A\u77E5\u3089\u305B",en:"NEWS"}),e(Gt,{}),e(oe,{ja:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2",en:"SOCIAL MEDIA"}),e(Rt,{}),e(oe,{ja:"\u5916\u90E8\u30EA\u30F3\u30AF",en:"LINK"}),e(Yt,{}),e(vn,{})]})}var yn=document.getElementById("mount");yn&&Oe(e(wn,{}),yn);
