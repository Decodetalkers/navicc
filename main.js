var K,m,je,sn,$,we,Ne,Te,Ee,de,se,le,ln,B={},Le=[],an=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J=Array.isArray;function j(e,t){for(var r in t)e[r]=t[r];return e}function pe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function D(e,t,r){var o,c,i,l={};for(i in t)i=="key"?o=t[i]:i=="ref"?c=t[i]:l[i]=t[i];if(arguments.length>2&&(l.children=arguments.length>3?K.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)l[i]===void 0&&(l[i]=e.defaultProps[i]);return V(e,l,o,c,null)}function V(e,t,r,o,c){var i={type:e,props:t,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c??++je,__i:-1,__u:0};return c==null&&m.vnode!=null&&m.vnode(i),i}function C(e){return e.children}function q(e,t){this.props=e,this.context=t}function H(e,t){if(t==null)return e.__?H(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?H(e):null}function Pe(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Pe(e)}}function ke(e){(!e.__d&&(e.__d=!0)&&$.push(e)&&!G.__r++||we!=m.debounceRendering)&&((we=m.debounceRendering)||Ne)(G)}function G(){for(var e,t,r,o,c,i,l,d=1;$.length;)$.length>d&&$.sort(Te),e=$.shift(),d=$.length,e.__d&&(r=void 0,o=void 0,c=(o=(t=e).__v).__e,i=[],l=[],t.__P&&((r=j({},o)).__v=o.__v+1,m.vnode&&m.vnode(r),ue(t.__P,r,o,t.__n,t.__P.namespaceURI,32&o.__u?[c]:null,i,c??H(o),!!(32&o.__u),l),r.__v=o.__v,r.__.__k[r.__i]=r,$e(i,r,l),o.__e=o.__=null,r.__e!=c&&Pe(r)));G.__r=0}function Me(e,t,r,o,c,i,l,d,u,a,f){var s,h,_,y,k,w,g,x=o&&o.__k||Le,P=t.length;for(u=dn(r,t,x,u,P),s=0;s<P;s++)(_=r.__k[s])!=null&&(h=_.__i==-1?B:x[_.__i]||B,_.__i=s,w=ue(e,_,h,c,i,l,d,u,a,f),y=_.__e,_.ref&&h.ref!=_.ref&&(h.ref&&_e(h.ref,null,_),f.push(_.ref,_.__c||y,_)),k==null&&y!=null&&(k=y),(g=!!(4&_.__u))||h.__k===_.__k?u=Ae(_,u,e,g):typeof _.type=="function"&&w!==void 0?u=w:y&&(u=y.nextSibling),_.__u&=-7);return r.__e=k,u}function dn(e,t,r,o,c){var i,l,d,u,a,f=r.length,s=f,h=0;for(e.__k=new Array(c),i=0;i<c;i++)(l=t[i])!=null&&typeof l!="boolean"&&typeof l!="function"?(u=i+h,(l=e.__k[i]=typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?V(null,l,null,null,null):J(l)?V(C,{children:l},null,null,null):l.constructor==null&&l.__b>0?V(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l).__=e,l.__b=e.__b+1,d=null,(a=l.__i=pn(l,r,u,s))!=-1&&(s--,(d=r[a])&&(d.__u|=2)),d==null||d.__v==null?(a==-1&&(c>f?h--:c<f&&h++),typeof l.type!="function"&&(l.__u|=4)):a!=u&&(a==u-1?h--:a==u+1?h++:(a>u?h--:h++,l.__u|=4))):e.__k[i]=null;if(s)for(i=0;i<f;i++)(d=r[i])!=null&&(2&d.__u)==0&&(d.__e==o&&(o=H(d)),He(d,d));return o}function Ae(e,t,r,o){var c,i;if(typeof e.type=="function"){for(c=e.__k,i=0;c&&i<c.length;i++)c[i]&&(c[i].__=e,t=Ae(c[i],t,r,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=H(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function pn(e,t,r,o){var c,i,l,d=e.key,u=e.type,a=t[r],f=a!=null&&(2&a.__u)==0;if(a===null&&e.key==null||f&&d==a.key&&u==a.type)return r;if(o>(f?1:0)){for(c=r-1,i=r+1;c>=0||i<t.length;)if((a=t[l=c>=0?c--:i++])!=null&&(2&a.__u)==0&&d==a.key&&u==a.type)return l}return-1}function Se(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||an.test(t)?r:r+"px"}function O(e,t,r,o,c){var i,l;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)r&&t in r||Se(e.style,t,"");if(r)for(t in r)o&&r[t]==o[t]||Se(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")i=t!=(t=t.replace(Ee,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=r,r?o?r.u=o.u:(r.u=de,e.addEventListener(t,i?le:se,i)):e.removeEventListener(t,i?le:se,i);else{if(c=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function Ce(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=de++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function ue(e,t,r,o,c,i,l,d,u,a){var f,s,h,_,y,k,w,g,x,P,M,R,z,ye,W,U,ce,S=t.type;if(t.constructor!=null)return null;128&r.__u&&(u=!!(32&r.__u),i=[d=t.__e=r.__e]),(f=m.__b)&&f(t);e:if(typeof S=="function")try{if(g=t.props,x="prototype"in S&&S.prototype.render,P=(f=S.contextType)&&o[f.__c],M=f?P?P.props.value:f.__:o,r.__c?w=(s=t.__c=r.__c).__=s.__E:(x?t.__c=s=new S(g,M):(t.__c=s=new q(g,M),s.constructor=S,s.render=_n),P&&P.sub(s),s.props=g,s.state||(s.state={}),s.context=M,s.__n=o,h=s.__d=!0,s.__h=[],s._sb=[]),x&&s.__s==null&&(s.__s=s.state),x&&S.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=j({},s.__s)),j(s.__s,S.getDerivedStateFromProps(g,s.__s))),_=s.props,y=s.state,s.__v=t,h)x&&S.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),x&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(x&&S.getDerivedStateFromProps==null&&g!==_&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,M),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,M)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(s.props=g,s.state=s.__s,s.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(I){I&&(I.__=t)}),R=0;R<s._sb.length;R++)s.__h.push(s._sb[R]);s._sb=[],s.__h.length&&l.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,M),x&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(_,y,k)})}if(s.context=M,s.props=g,s.__P=e,s.__e=!1,z=m.__r,ye=0,x){for(s.state=s.__s,s.__d=!1,z&&z(t),f=s.render(s.props,s.state,s.context),W=0;W<s._sb.length;W++)s.__h.push(s._sb[W]);s._sb=[]}else do s.__d=!1,z&&z(t),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++ye<25);s.state=s.__s,s.getChildContext!=null&&(o=j(j({},o),s.getChildContext())),x&&!h&&s.getSnapshotBeforeUpdate!=null&&(k=s.getSnapshotBeforeUpdate(_,y)),U=f,f!=null&&f.type===C&&f.key==null&&(U=Ie(f.props.children)),d=Me(e,J(U)?U:[U],t,r,o,c,i,l,d,u,a),s.base=t.__e,t.__u&=-161,s.__h.length&&l.push(s),w&&(s.__E=s.__=null)}catch(I){if(t.__v=null,u||i!=null)if(I.then){for(t.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;i[i.indexOf(d)]=null,t.__e=d}else{for(ce=i.length;ce--;)pe(i[ce]);ae(t)}else t.__e=r.__e,t.__k=r.__k,I.then||ae(t);m.__e(I,t,r)}else i==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=un(r.__e,t,r,o,c,i,l,u,a);return(f=m.diffed)&&f(t),128&t.__u?void 0:d}function ae(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(ae)}function $e(e,t,r){for(var o=0;o<r.length;o++)_e(r[o],r[++o],r[++o]);m.__c&&m.__c(t,e),e.some(function(c){try{e=c.__h,c.__h=[],e.some(function(i){i.call(c)})}catch(i){m.__e(i,c.__v)}})}function Ie(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:J(e)?e.map(Ie):j({},e)}function un(e,t,r,o,c,i,l,d,u){var a,f,s,h,_,y,k,w=r.props,g=t.props,x=t.type;if(x=="svg"?c="http://www.w3.org/2000/svg":x=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),i!=null){for(a=0;a<i.length;a++)if((_=i[a])&&"setAttribute"in _==!!x&&(x?_.localName==x:_.nodeType==3)){e=_,i[a]=null;break}}if(e==null){if(x==null)return document.createTextNode(g);e=document.createElementNS(c,x,g.is&&g),d&&(m.__m&&m.__m(t,i),d=!1),i=null}if(x==null)w===g||d&&e.data==g||(e.data=g);else{if(i=i&&K.call(e.childNodes),w=r.props||B,!d&&i!=null)for(w={},a=0;a<e.attributes.length;a++)w[(_=e.attributes[a]).name]=_.value;for(a in w)if(_=w[a],a!="children"){if(a=="dangerouslySetInnerHTML")s=_;else if(!(a in g)){if(a=="value"&&"defaultValue"in g||a=="checked"&&"defaultChecked"in g)continue;O(e,a,null,_,c)}}for(a in g)_=g[a],a=="children"?h=_:a=="dangerouslySetInnerHTML"?f=_:a=="value"?y=_:a=="checked"?k=_:d&&typeof _!="function"||w[a]===_||O(e,a,_,w[a],c);if(f)d||s&&(f.__html==s.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(s&&(e.innerHTML=""),Me(t.type=="template"?e.content:e,J(h)?h:[h],t,r,o,x=="foreignObject"?"http://www.w3.org/1999/xhtml":c,i,l,i?i[0]:r.__k&&H(r,0),d,u),i!=null)for(a=i.length;a--;)pe(i[a]);d||(a="value",x=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[a]||x=="progress"&&!y||x=="option"&&y!=w[a])&&O(e,a,y,w[a],c),a="checked",k!=null&&k!=e[a]&&O(e,a,k,w[a],c))}return e}function _e(e,t,r){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(c){m.__e(c,r)}}function He(e,t,r){var o,c;if(m.unmount&&m.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||_e(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(i){m.__e(i,t)}o.base=o.__P=null}if(o=e.__k)for(c=0;c<o.length;c++)o[c]&&He(o[c],t,r||typeof e.type!="function");r||pe(e.__e),e.__c=e.__=e.__e=void 0}function _n(e,t,r){return this.constructor(e,r)}function De(e,t,r){var o,c,i,l;t==document&&(t=document.documentElement),m.__&&m.__(e,t),c=(o=typeof r=="function")?null:r&&r.__k||t.__k,i=[],l=[],ue(t,e=(!o&&r||t).__k=D(C,null,[e]),c||B,B,t.namespaceURI,!o&&r?[r]:c?null:t.firstChild?K.call(t.childNodes):null,i,!o&&r?r:c?c.__e:t.firstChild,o,l),$e(i,e,l)}K=Le.slice,m={__e:function(e,t,r,o){for(var c,i,l;t=t.__;)if((c=t.__c)&&!c.__)try{if((i=c.constructor)&&i.getDerivedStateFromError!=null&&(c.setState(i.getDerivedStateFromError(e)),l=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(e,o||{}),l=c.__d),l)return c.__E=c}catch(d){e=d}throw e}},je=0,sn=function(e){return e!=null&&e.constructor==null},q.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof e=="function"&&(e=e(j({},r),this.props)),e&&j(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),ke(this))},q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ke(this))},q.prototype.render=C,$=[],Ne=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Te=function(e,t){return e.__v.__b-t.__v.__b},G.__r=0,Ee=/(PointerCapture)$|Capture$/i,de=0,se=Ce(!1),le=Ce(!0),ln=0;var fn=0,Dn=Array.isArray;function n(e,t,r,o,c,i){t||(t={});var l,d,u=t;if("ref"in u)for(d in u={},t)d=="ref"?l=t[d]:u[d]=t[d];var a={type:e,props:u,key:r,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--fn,__i:-1,__u:0,__source:c,__self:i};if(typeof e=="function"&&(l=e.defaultProps))for(d in l)u[d]===void 0&&(u[d]=l[d]);return m.vnode&&m.vnode(a),a}var hn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ze=new Set(hn);function mn(e){let t={};for(let r in e){let o=r.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`);t[o]=e[r]}return t}var fe=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},gn=new fe;function Z(){return`styled-component-${gn.next()}`}function Ue(e){let t=document.styleSheets;for(let r of t)for(let o of r.cssRules)if(o.cssText.includes(`.${e} `))return!0;return!1}function he(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} { ${t} }`,document.head.appendChild(r)}}function xn(e,t){if(!Ue(e)){let r=document.createElement("style");r.innerHTML=`.${e} ${t}`,document.head.appendChild(r)}}function vn(e,t){let r=JSON.stringify(mn(t),null,2);r=r.replaceAll(",",";"),r=r.replaceAll('"',"");let o=Z(),c=Object.assign(i=>{let{children:l,...d}=i;xn(o,r);let a={className:i.className||o,...d};return c.className=o,D(e,a,l)},{className:void 0});return c}function bn(e,t,...r){let o=Z(),c=Object.assign(i=>{let{children:l,...d}=i,u="",a=r.length;t.forEach((h,_)=>{_<a?u+=h+r[_]:u+=h}),he(o,u);let s={className:i.className||o,...d};return c.className=o,D(e,s,l)},{className:void 0});return c}function yn(e){return e.length==0?!0:typeof e[0]!="function"}function wn(e,t,...r){if(yn(r))return bn(e,t,...r);let o=Object.assign(c=>{let i="",l=r.length;t.forEach((s,h)=>{h<l?i+=s+r[h](c):i+=s});let{children:d,...u}=c,a=o.mappedId.get(c);a||(a=Z(),he(a,i),o.mappedId.set(c,a));let f={className:c.className||a,...u};return D(e,f,d)},{mappedId:new Map});return o}function kn(e){return(t,...r)=>{let o="",c=r.length;t.forEach((l,d)=>{d<c?o+=l+r[d]:o+=l});let i=Object.assign(l=>{let{children:d,...u}=l,a=Z();console.log("aaa"),he(a,o),e.className&&(a=`${e.className} ${a}`);let f=l.className||a;i.className=f;let s={className:f,...u};return D(e,s,d)},{className:void 0});return i}}var Be=kn;ze.forEach(e=>{Be[e]=function(t,...r){return Array.isArray(t)&&"raw"in t?wn(e,t,...r):vn(e,t)}});var Fe=Be;function me(e){return(t,...r)=>{let o="",c=r.length;t.forEach((d,u)=>{u<c?o+=d+r[u]:o+=d});let i=`@keyframes ${e} { ${o} }
`,l=document.createElement("style");l.innerHTML=i,document.head.appendChild(l)}}var F=class{keys;_mainKey;maps=new Map;constructor(t,r){this.keys=t,this._mainKey=r;for(let o in t)this.maps.set(o,"")}init(t){for(let r in this.keys){let o=t(r);this.maps.set(r,o)}}setCSS(t){return(r,...o)=>{let c="",i=o.length;r.forEach((l,d)=>{d<i?c+=l+o[d]:c+=l}),this.maps.set(t,c)}}get mainKey(){return this._mainKey}generate(){let t={},r="";this.keys.forEach((c,i)=>{t[c]=c;let l=`.${t[c]}`;c!=this.mainKey&&(l=`.${this.mainKey}.${c}`),r+=`${l} { ${this.maps.get(c)} }
`});let o=document.createElement("style");return o.innerHTML=r,document.head.appendChild(o),t}};var p=Fe;var Re=p.header`
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
`,We=p.div`
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
`,Sn=["dropDown"],Oe=new F(Sn,"dropDown");Oe.setCSS("dropDown")`
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
`;var Zn=Oe.generate(),Cn=p.nav`
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
  & a:hover .dropDown {
    display: block;
  }

  @media screen and (max-width: 900px) {
    visibility: ${({autohide:e})=>e?"hidden":"visible"};
  }
`,Ve=Cn;var qe=p.div`
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
`,Ge=p.div`
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
`,Ke=p.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 6fr 4fr;
`,Je=p.div`
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
`,Ze=p.div`
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
`,Qe=p.nav`
  margin-left: 15%;
  margin-right: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr 7fr 1fr;
  gap: 4px;
  position: relative;
`,ge=p.span`
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
`,Ye=p.span`
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
`,Xe=p.div`
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
`,Xn=p.a`
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
`,et=p.div`
  grid-column: 2/2;
  display: flex;
  justify-content: right;
  align-items: center;
  grid-row: 1;
  margin-right: 20px;
`,tt=p.button`
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
`,er=p.button`
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
`;function nt({children:e,onClick:t}){return n(Re,{children:[n(jn,{}),n(Ve,{autohide:!0,children:e}),n(et,{children:n(tt,{onClick:t})})]})}function jn(){return n(We,{children:n("a",{href:"https://www.navic.cc/",children:n("img",{src:"static/navic_logo.png"})})})}var rt=p.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
`,ot=p.img`
  height: auto;
  width: 53%;
  position: relative;
  object-fit: cover;
  z-index: 1;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`,it=p.div`
  position: relative;
  width: 47%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`,ct=p.div`
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
`;function st(){return n(rt,{children:[n(it,{}),n(ot,{src:"./static/navic_top.jpg"}),n(ct,{children:n("p",{children:["\u4EBA\u3068\u306E\u3064\u306A\u304C\u308A\u3092\u5927\u5207\u306B\u3002",n("br",{}),"\u69D8\u3005\u306A\u5206\u91CE\u3067\u65B0\u305F\u306A\u4FA1\u5024\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304F\u3002"]})})]})}var lt=p.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`,at=p.img`
  height: auto;
  width: 50%;
  object-fit: cover;
`,dt=p.div`
  margin-left: 30px;
  font-size: 4vw;
  width: 50%;
  font-weight: bold;
  color: #1b4f80;
  margin-top: 5%;
`;function pt(){return n(lt,{children:[n(at,{src:"static/section2.jpg"}),n(dt,{children:n("p",{children:["\u5E38\u306B\u5148\u3092\u898B\u636E\u3048\u305F",n("br",{}),"\u4E8B\u696D\u5C55\u958B\u3067",n("br",{}),"\u65B0\u305F\u306A\u672A\u6765\u3092\u5207\u308A\u958B\u304F\u3002"]})})]})}var ut=p.div`
  width: 100%;
  height: 30px;
`,Nn=p.span`
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
`,_t=p.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`,ft=p.div`
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
`,ht=p.div`
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
`;function mt(){return n(ut,{})}function Q({ja:e,en:t}){return n(_t,{children:[n(ft,{children:n("h2",{children:n("span",{children:e})})}),n(ht,{children:n("h1",{children:n("span",{children:t})})})]})}var X,v,xe,gt,ve=0,Ct=[],b=m,xt=b.__b,vt=b.__r,bt=b.diffed,yt=b.__c,wt=b.unmount,kt=b.__;function jt(e,t){b.__h&&b.__h(v,e,ve||t),ve=0;var r=v.__H||(v.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function ee(e){return ve=1,Tn(Tt,e)}function Tn(e,t,r){var o=jt(X++,2);if(o.t=e,!o.__c&&(o.__=[r?r(t):Tt(void 0,t),function(d){var u=o.__N?o.__N[0]:o.__[0],a=o.t(u,d);u!==a&&(o.__N=[a,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.__f)){var c=function(d,u,a){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(h){return!!h.__c});if(f.every(function(h){return!h.__N}))return!i||i.call(this,d,u,a);var s=o.__c.props!==d;return f.forEach(function(h){if(h.__N){var _=h.__[0];h.__=h.__N,h.__N=void 0,_!==h.__[0]&&(s=!0)}}),i&&i.call(this,d,u,a)||s};v.__f=!0;var i=v.shouldComponentUpdate,l=v.componentWillUpdate;v.componentWillUpdate=function(d,u,a){if(this.__e){var f=i;i=void 0,c(d,u,a),i=f}l&&l.call(this,d,u,a)},v.shouldComponentUpdate=c}return o.__N||o.__}function Nt(e,t){var r=jt(X++,3);!b.__s&&Pn(r.__H,t)&&(r.__=e,r.u=t,v.__H.__h.push(r))}function En(){for(var e;e=Ct.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Y),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){v=null,xt&&xt(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),kt&&kt(e,t)},b.__r=function(e){vt&&vt(e),X=0;var t=(v=e.__c).__H;t&&(xe===v?(t.__h=[],v.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Y),t.__h.forEach(be),t.__h=[],X=0)),xe=v},b.diffed=function(e){bt&&bt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ct.push(t)!==1&&gt===b.requestAnimationFrame||((gt=b.requestAnimationFrame)||Ln)(En)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),xe=v=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Y),r.__h=r.__h.filter(function(o){return!o.__||be(o)})}catch(o){t.some(function(c){c.__h&&(c.__h=[])}),t=[],b.__e(o,r.__v)}}),yt&&yt(e,t)},b.unmount=function(e){wt&&wt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(o){try{Y(o)}catch(c){t=c}}),r.__H=void 0,t&&b.__e(t,r.__v))};var St=typeof requestAnimationFrame=="function";function Ln(e){var t,r=function(){clearTimeout(o),St&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(r,35);St&&(t=requestAnimationFrame(r))}function Y(e){var t=v,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),v=t}function be(e){var t=v;e.__c=e.__(),v=t}function Pn(e,t){return!e||e.length!==t.length||t.some(function(r,o){return r!==e[o]})}function Tt(e,t){return typeof t=="function"?t(e):t}var Et=p.section`
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0;
  background-color: #f5faffff;
`,Lt=p.div`
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
`,Pt=p.div`
  width: 100%;
  background-image: url("static/wave.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 50px;
`;function Mt(){return n(Et,{children:[n(Pt,{}),n(Lt,{children:[n("h1",{children:"NAVIC\u306E\u53D6\u308A\u7D44\u307F"}),n("h5",{children:"OUR SERVICE"})]})]})}var At=p.section`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 6fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow-x: auto;

  max-width: var(--container-xl);
`,$t=p.div`
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
`,It=p.button`
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
`,Ht=p.button`
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
`;me("spin")`
  from { translate: 0; }
  to { translate: -100% }
`;function Dt(){Nt(()=>{let o=setInterval(()=>{r()},3e3);return()=>clearInterval(o)});let e=o=>{let{scrollLeft:c,clientWidth:i}=o.currentTarget;c>=i*4.8&&o.currentTarget.scrollTo({left:0,behavior:"instant"})},t=()=>{let o=document.getElementById("mainSlider");if(o!=null){let c=o.scrollLeft,i=o.clientWidth,l=c-i;if(l<0){l=2*i,o.scrollTo({left:l,behavior:"instant"});return}o.scrollTo({left:l,behavior:"smooth"})}},r=()=>{let o=document.getElementById("mainSlider");if(o!=null){let c=o.scrollLeft,i=o.clientWidth;o.scrollTo({left:c+i,behavior:"smooth"})}};return n(At,{children:[n(It,{onClick:t}),n($t,{id:"mainSlider",onScroll:e,children:[n("img",{src:"static/display.jpg"}),n("img",{src:"static/display2.jpg"}),n("img",{src:"static/display3.jpg"}),n("img",{src:"static/display4.jpg"}),n("img",{src:"static/display.jpg"})]}),n(Ht,{onClick:r})]})}var zt=p.section`
  display: grid;
  grid-area: 8/1/9/2;
  grid-template-columns: repeat(15, 1fr);
  position: relative;
  align-self: stretch;
  height: auto;
  gap: 30px;
`,Ut=p.div`
  display: grid;
  grid-template-columns: auto;
  align-items: center;
  gap: 4px;
  grid-column: 2/14;
  grid-row: 2;
`,te=p.img`
  width: 20%;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 10px;
`,ne=p.div`
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
`,re=p.div`
  border: 1px solid blue;
  height: 16vw;
  display: flex;
`,Bt=p.div`
  grid-column: 2/14;
  grid-row: 3;

  & h3 {
    font-size: 40px;
  }
  & a {
    color: #14508cff;
  }
`;function Ft(){return n(zt,{children:[n(Ut,{children:[n(re,{children:[n(te,{src:"static/mv2.jpg"}),n(ne,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(re,{children:[n(te,{src:"static/mv2.jpg"}),n(ne,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(re,{children:[n(te,{src:"static/mv2.jpg"}),n(ne,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]})]}),n(Bt,{children:n("h3",{children:n("span",{children:n("a",{href:"https://www.navic.cc/news",children:"VIEW ALL"})})})})]})}var Rt=p.section`
  align-items: center;
  position: relative;
  width: 100%;
`,Wt=p.div`
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
`,Ot=p.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,Vt=p.img`
  margin-top: 3px;
  margin-left: 4px;
  margin-right: 4px;
  width: 90%;
`,T=p.div`
  align-items: center;
  color: blue;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 10px;
`;function A({src:e}){return n(Ot,{children:n(Vt,{src:e})})}function qt(){return n(Rt,{children:n(Wt,{children:[n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(T,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]})]})})}var Gt=p.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template_columns: minmax(0px, 1fr);
  background-color: #d1e2f0ff;
  width: 100%;
`,Kt=p.div`
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
`,Jt=p.div`
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
`;function oe(e){switch(e){case 0:return{left:40,right:0,bottom:62,top:6};case 1:return{left:20,right:0,bottom:53,top:15};case 2:return{left:10,right:0,bottom:0,top:36};case 3:return{left:20,right:0,bottom:15,top:56};case 4:return{left:40,right:0,bottom:8,top:64};case 5:return{left:64,right:0,bottom:15,top:56};case 6:return{left:72,right:0,bottom:0,top:36};default:return{left:62,right:0,bottom:53,top:15}}}var E=p.div`
  aspect-ratio: 1;
  height: auto;
  display: grid;
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: start;
  margin-left: ${({place:e})=>oe(e).left}%;
  margin-top: ${({place:e})=>oe(e).top}%;
  margin-bottom: ${({place:e})=>oe(e).bottom}%;
  margin-right: ${({place:e})=>oe(e).right}%;
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
`;function Zt(){return n(Gt,{children:[n(Jt,{children:n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"20 20 160 160","aria-hidden":!0,datatype:"shape",role:"presentation","aria-label":"",preserveAspectRatio:"xMidYMid meet",children:n("g",{children:n("path",{d:"M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"})})})}),n(Kt,{children:n("img",{src:"static/navic_logo.png"})}),n(E,{place:0,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"EC\u4E8B\u696D"]}),n("img",{src:"static/center0.png"})]})}),n(E,{place:1,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"\u5378\u8CA9\u58F2",n("br",{}),"\u5916\u6CE8\u53D6\u4ED8"]}),n("img",{src:"static/center1.png"})]})}),n(E,{place:2,children:n(L,{children:[n("h2",{children:"\u30EC\u30F3\u30BF\u30EB"}),n("img",{src:"static/center2.png"})]})}),n(E,{place:3,children:n(L,{children:[n("h2",{children:"\u8CBF\u6613"}),n("img",{src:"static/center3.png"}),n("img",{src:"static/center3.1.png"})]})}),n(E,{place:4,children:n(L,{children:[n("h2",{children:["\u30B0\u30EB\u30FC\u30D7",n("br",{}),"\u4E8B\u696D"]}),n("img",{src:"static/center4.png"})]})}),n(E,{place:5,children:n(L,{children:[n("h2",{children:"\u5065\u5EB7"}),n("img",{src:"static/center5.png"})]})}),n(E,{place:6,children:n(L,{children:[n("h2",{children:["\u8C4A\u6A4B",n("br",{}),"\u30EA\u30C6\u30FC\u30EB"]}),n("img",{src:"static/center6.0.png",style:{maxHeight:30}}),n("img",{src:"static/center6.1.png"}),n("img",{src:"static/center6.2.png"})]})}),n(E,{place:7,children:n(L,{children:[n("h2",{children:["\u81EA\u793E\u5546\u54C1",n("br",{}),"\u958B\u767A"]}),n("img",{src:"static/center7.jpg"})]})})]})}var Qt=p.section`
  position: relative;
`,Yt=p.div`
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
`,Xt=p.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  background-color: #053769ff;
  gap: 10%;
`,en=p.div`
  display: flex;
  flex-direction: flow;
  justify-content: center;
  gap: 10%;
  width: 70%;
`,tn=p.span`
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
`;function nn(){return n("footer",{children:n(Qt,{children:[n(Yt,{children:n("h5",{children:"Copyright(C) NAVIC Co.,LTD. All Rights Reserved."})}),n(Xt,{children:n(en,{children:[n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(ie,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",n("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),n(ie,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",n("br",{}),"TikTok"]})]})})]})})}function ie({img:e,url:t,children:r}){return n(tn,{children:n("a",{href:t,children:[n("img",{src:e}),n("span",{children:r})]})})}var Mn=[{context:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D",url:"https://www.navic.cc/car-installation"},{context:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D",url:"https://www.navic.cc/car-supplies-onlineshop"},{context:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D",url:"https://www.navic.cc/clezeed"}];function rn(){return n(Qe,{children:[n(An,{title:"\u4E8B\u696D\u7D39\u4ECB",menu:Mn}),n(Ye,{children:n("a",{href:"https://navic-plaza.com/",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})})]})}function An({title:e,menu:t}){let[r,o]=ee(!0),c=()=>{o(!r)};return n(C,{children:[n(Xe,{onClick:c,ishidden:r}),n(ge,{onClick:c,children:e}),t.map(({context:i,url:l},d)=>n(ge,{hidden:r,children:n("a",{href:l,children:i})},d))]})}function $n({onClick:e}){return n(nt,{onClick:e,children:[n("a",{href:"#main",children:["\u4E8B\u696D\u7D39\u4ECB",n("div",{class:"dropDown",children:[n("a",{href:"#",children:"Link 1"}),n("a",{href:"#",children:"Link 2"}),n("a",{href:"#",children:"Link 3"})]})]}),n("a",{href:"#feature",children:"\u304A\u77E5\u3089\u305B"}),n("a",{href:"#install",children:"\u4F1A\u793E\u60C5\u5831"}),n("a",{href:"/doc",children:"\u63A1\u7528\u60C5\u5831"}),n("a",{href:"/doc",children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"}),n("a",{href:"/doc",children:"\u304A\u554F\u3044\u5408\u308F\u305B"}),n("a",{href:"/doc",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})]})}function on(){let[e,t]=ee(!1),r=()=>{t(!e)};return n(C,{children:[n($n,{onClick:r}),n(qe,{isOpen:e,children:n(Ke,{children:[n(Je,{}),n(Ze,{children:[n(Ge,{type:"button",onClick:r}),n(rn,{})]})]})}),n(st,{}),n(mt,{}),n(pt,{}),n(Mt,{}),n(Zt,{}),n(Q,{ja:"\u304A\u77E5\u3089\u305B",en:"NEWS"}),n(Ft,{}),n(Q,{ja:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2",en:"SOCIAL MEDIA"}),n(Dt,{}),n(Q,{ja:"\u5916\u90E8\u30EA\u30F3\u30AF",en:"LINK"}),n(qt,{}),n(nn,{})]})}var cn=document.getElementById("mount");cn&&De(n(on,{}),cn);
