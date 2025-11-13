var J,m,Ne,sn,I,Se,Ee,Te,Le,de,se,ae,an,F={},Pe=[],ln=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Z=Array.isArray;function j(e,t){for(var r in t)e[r]=t[r];return e}function pe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function H(e,t,r){var i,c,o,a={};for(o in t)o=="key"?i=t[o]:o=="ref"?c=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?J.call(arguments,2):r),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return G(e,a,i,c,null)}function G(e,t,r,i,c){var o={type:e,props:t,key:r,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:c??++Ne,__i:-1,__u:0};return c==null&&m.vnode!=null&&m.vnode(o),o}function C(e){return e.children}function q(e,t){this.props=e,this.context=t}function D(e,t){if(t==null)return e.__?D(e.__,e.__i+1):null;for(var r;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null)return r.__e;return typeof e.type=="function"?D(e):null}function Me(e){var t,r;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((r=e.__k[t])!=null&&r.__e!=null){e.__e=e.__c.base=r.__e;break}return Me(e)}}function ke(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!K.__r++||Se!=m.debounceRendering)&&((Se=m.debounceRendering)||Ee)(K)}function K(){for(var e,t,r,i,c,o,a,d=1;I.length;)I.length>d&&I.sort(Te),e=I.shift(),d=I.length,e.__d&&(r=void 0,i=void 0,c=(i=(t=e).__v).__e,o=[],a=[],t.__P&&((r=j({},i)).__v=i.__v+1,m.vnode&&m.vnode(r),ue(t.__P,r,i,t.__n,t.__P.namespaceURI,32&i.__u?[c]:null,o,c??D(i),!!(32&i.__u),a),r.__v=i.__v,r.__.__k[r.__i]=r,$e(o,r,a),i.__e=i.__=null,r.__e!=c&&Me(r)));K.__r=0}function Ae(e,t,r,i,c,o,a,d,u,l,f){var s,h,_,y,S,w,g,x=i&&i.__k||Pe,P=t.length;for(u=dn(r,t,x,u,P),s=0;s<P;s++)(_=r.__k[s])!=null&&(h=_.__i==-1?F:x[_.__i]||F,_.__i=s,w=ue(e,_,h,c,o,a,d,u,l,f),y=_.__e,_.ref&&h.ref!=_.ref&&(h.ref&&_e(h.ref,null,_),f.push(_.ref,_.__c||y,_)),S==null&&y!=null&&(S=y),(g=!!(4&_.__u))||h.__k===_.__k?u=Ie(_,u,e,g):typeof _.type=="function"&&w!==void 0?u=w:y&&(u=y.nextSibling),_.__u&=-7);return r.__e=S,u}function dn(e,t,r,i,c){var o,a,d,u,l,f=r.length,s=f,h=0;for(e.__k=new Array(c),o=0;o<c;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(u=o+h,(a=e.__k[o]=typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?G(null,a,null,null,null):Z(a)?G(C,{children:a},null,null,null):a.constructor==null&&a.__b>0?G(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,d=null,(l=a.__i=pn(a,r,u,s))!=-1&&(s--,(d=r[l])&&(d.__u|=2)),d==null||d.__v==null?(l==-1&&(c>f?h--:c<f&&h++),typeof a.type!="function"&&(a.__u|=4)):l!=u&&(l==u-1?h--:l==u+1?h++:(l>u?h--:h++,a.__u|=4))):e.__k[o]=null;if(s)for(o=0;o<f;o++)(d=r[o])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=D(d)),De(d,d));return i}function Ie(e,t,r,i){var c,o;if(typeof e.type=="function"){for(c=e.__k,o=0;c&&o<c.length;o++)c[o]&&(c[o].__=e,t=Ie(c[o],t,r,i));return t}e.__e!=t&&(i&&(t&&e.type&&!t.parentNode&&(t=D(e)),r.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function pn(e,t,r,i){var c,o,a,d=e.key,u=e.type,l=t[r],f=l!=null&&(2&l.__u)==0;if(l===null&&e.key==null||f&&d==l.key&&u==l.type)return r;if(i>(f?1:0)){for(c=r-1,o=r+1;c>=0||o<t.length;)if((l=t[a=c>=0?c--:o++])!=null&&(2&l.__u)==0&&d==l.key&&u==l.type)return a}return-1}function Ce(e,t,r){t[0]=="-"?e.setProperty(t,r??""):e[t]=r==null?"":typeof r!="number"||ln.test(t)?r:r+"px"}function V(e,t,r,i,c){var o,a;e:if(t=="style")if(typeof r=="string")e.style.cssText=r;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)r&&t in r||Ce(e.style,t,"");if(r)for(t in r)i&&r[t]==i[t]||Ce(e.style,t,r[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Le,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=r,r?i?r.u=i.u:(r.u=de,e.addEventListener(t,o?ae:se,o)):e.removeEventListener(t,o?ae:se,o);else{if(c=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=r??"";break e}catch{}typeof r=="function"||(r==null||r===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&r==1?"":r))}}function je(e){return function(t){if(this.l){var r=this.l[t.type+e];if(t.t==null)t.t=de++;else if(t.t<r.u)return;return r(m.event?m.event(t):t)}}}function ue(e,t,r,i,c,o,a,d,u,l){var f,s,h,_,y,S,w,g,x,P,M,W,U,we,O,B,ce,k=t.type;if(t.constructor!=null)return null;128&r.__u&&(u=!!(32&r.__u),o=[d=t.__e=r.__e]),(f=m.__b)&&f(t);e:if(typeof k=="function")try{if(g=t.props,x="prototype"in k&&k.prototype.render,P=(f=k.contextType)&&i[f.__c],M=f?P?P.props.value:f.__:i,r.__c?w=(s=t.__c=r.__c).__=s.__E:(x?t.__c=s=new k(g,M):(t.__c=s=new q(g,M),s.constructor=k,s.render=_n),P&&P.sub(s),s.props=g,s.state||(s.state={}),s.context=M,s.__n=i,h=s.__d=!0,s.__h=[],s._sb=[]),x&&s.__s==null&&(s.__s=s.state),x&&k.getDerivedStateFromProps!=null&&(s.__s==s.state&&(s.__s=j({},s.__s)),j(s.__s,k.getDerivedStateFromProps(g,s.__s))),_=s.props,y=s.state,s.__v=t,h)x&&k.getDerivedStateFromProps==null&&s.componentWillMount!=null&&s.componentWillMount(),x&&s.componentDidMount!=null&&s.__h.push(s.componentDidMount);else{if(x&&k.getDerivedStateFromProps==null&&g!==_&&s.componentWillReceiveProps!=null&&s.componentWillReceiveProps(g,M),!s.__e&&s.shouldComponentUpdate!=null&&s.shouldComponentUpdate(g,s.__s,M)===!1||t.__v==r.__v){for(t.__v!=r.__v&&(s.props=g,s.state=s.__s,s.__d=!1),t.__e=r.__e,t.__k=r.__k,t.__k.some(function(z){z&&(z.__=t)}),W=0;W<s._sb.length;W++)s.__h.push(s._sb[W]);s._sb=[],s.__h.length&&a.push(s);break e}s.componentWillUpdate!=null&&s.componentWillUpdate(g,s.__s,M),x&&s.componentDidUpdate!=null&&s.__h.push(function(){s.componentDidUpdate(_,y,S)})}if(s.context=M,s.props=g,s.__P=e,s.__e=!1,U=m.__r,we=0,x){for(s.state=s.__s,s.__d=!1,U&&U(t),f=s.render(s.props,s.state,s.context),O=0;O<s._sb.length;O++)s.__h.push(s._sb[O]);s._sb=[]}else do s.__d=!1,U&&U(t),f=s.render(s.props,s.state,s.context),s.state=s.__s;while(s.__d&&++we<25);s.state=s.__s,s.getChildContext!=null&&(i=j(j({},i),s.getChildContext())),x&&!h&&s.getSnapshotBeforeUpdate!=null&&(S=s.getSnapshotBeforeUpdate(_,y)),B=f,f!=null&&f.type===C&&f.key==null&&(B=ze(f.props.children)),d=Ae(e,Z(B)?B:[B],t,r,i,c,o,a,d,u,l),s.base=t.__e,t.__u&=-161,s.__h.length&&a.push(s),w&&(s.__E=s.__=null)}catch(z){if(t.__v=null,u||o!=null)if(z.then){for(t.__u|=u?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;o[o.indexOf(d)]=null,t.__e=d}else{for(ce=o.length;ce--;)pe(o[ce]);le(t)}else t.__e=r.__e,t.__k=r.__k,z.then||le(t);m.__e(z,t,r)}else o==null&&t.__v==r.__v?(t.__k=r.__k,t.__e=r.__e):d=t.__e=un(r.__e,t,r,i,c,o,a,u,l);return(f=m.diffed)&&f(t),128&t.__u?void 0:d}function le(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(le)}function $e(e,t,r){for(var i=0;i<r.length;i++)_e(r[i],r[++i],r[++i]);m.__c&&m.__c(t,e),e.some(function(c){try{e=c.__h,c.__h=[],e.some(function(o){o.call(c)})}catch(o){m.__e(o,c.__v)}})}function ze(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:Z(e)?e.map(ze):j({},e)}function un(e,t,r,i,c,o,a,d,u){var l,f,s,h,_,y,S,w=r.props,g=t.props,x=t.type;if(x=="svg"?c="http://www.w3.org/2000/svg":x=="math"?c="http://www.w3.org/1998/Math/MathML":c||(c="http://www.w3.org/1999/xhtml"),o!=null){for(l=0;l<o.length;l++)if((_=o[l])&&"setAttribute"in _==!!x&&(x?_.localName==x:_.nodeType==3)){e=_,o[l]=null;break}}if(e==null){if(x==null)return document.createTextNode(g);e=document.createElementNS(c,x,g.is&&g),d&&(m.__m&&m.__m(t,o),d=!1),o=null}if(x==null)w===g||d&&e.data==g||(e.data=g);else{if(o=o&&J.call(e.childNodes),w=r.props||F,!d&&o!=null)for(w={},l=0;l<e.attributes.length;l++)w[(_=e.attributes[l]).name]=_.value;for(l in w)if(_=w[l],l!="children"){if(l=="dangerouslySetInnerHTML")s=_;else if(!(l in g)){if(l=="value"&&"defaultValue"in g||l=="checked"&&"defaultChecked"in g)continue;V(e,l,null,_,c)}}for(l in g)_=g[l],l=="children"?h=_:l=="dangerouslySetInnerHTML"?f=_:l=="value"?y=_:l=="checked"?S=_:d&&typeof _!="function"||w[l]===_||V(e,l,_,w[l],c);if(f)d||s&&(f.__html==s.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(s&&(e.innerHTML=""),Ae(t.type=="template"?e.content:e,Z(h)?h:[h],t,r,i,x=="foreignObject"?"http://www.w3.org/1999/xhtml":c,o,a,o?o[0]:r.__k&&D(r,0),d,u),o!=null)for(l=o.length;l--;)pe(o[l]);d||(l="value",x=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[l]||x=="progress"&&!y||x=="option"&&y!=w[l])&&V(e,l,y,w[l],c),l="checked",S!=null&&S!=e[l]&&V(e,l,S,w[l],c))}return e}function _e(e,t,r){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(c){m.__e(c,r)}}function De(e,t,r){var i,c;if(m.unmount&&m.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||_e(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){m.__e(o,t)}i.base=i.__P=null}if(i=e.__k)for(c=0;c<i.length;c++)i[c]&&De(i[c],t,r||typeof e.type!="function");r||pe(e.__e),e.__c=e.__=e.__e=void 0}function _n(e,t,r){return this.constructor(e,r)}function He(e,t,r){var i,c,o,a;t==document&&(t=document.documentElement),m.__&&m.__(e,t),c=(i=typeof r=="function")?null:r&&r.__k||t.__k,o=[],a=[],ue(t,e=(!i&&r||t).__k=H(C,null,[e]),c||F,F,t.namespaceURI,!i&&r?[r]:c?null:t.firstChild?J.call(t.childNodes):null,o,!i&&r?r:c?c.__e:t.firstChild,i,a),$e(o,e,a)}J=Pe.slice,m={__e:function(e,t,r,i){for(var c,o,a;t=t.__;)if((c=t.__c)&&!c.__)try{if((o=c.constructor)&&o.getDerivedStateFromError!=null&&(c.setState(o.getDerivedStateFromError(e)),a=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(e,i||{}),a=c.__d),a)return c.__E=c}catch(d){e=d}throw e}},Ne=0,sn=function(e){return e!=null&&e.constructor==null},q.prototype.setState=function(e,t){var r;r=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=j({},this.state),typeof e=="function"&&(e=e(j({},r),this.props)),e&&j(r,e),e!=null&&this.__v&&(t&&this._sb.push(t),ke(this))},q.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ke(this))},q.prototype.render=C,I=[],Ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Te=function(e,t){return e.__v.__b-t.__v.__b},K.__r=0,Le=/(PointerCapture)$|Capture$/i,de=0,se=je(!1),ae=je(!0),an=0;var fn=0,Un=Array.isArray;function n(e,t,r,i,c,o){t||(t={});var a,d,u=t;if("ref"in u)for(d in u={},t)d=="ref"?a=t[d]:u[d]=t[d];var l={type:e,props:u,key:r,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--fn,__i:-1,__u:0,__source:c,__self:o};if(typeof e=="function"&&(a=e.defaultProps))for(d in a)u[d]===void 0&&(u[d]=a[d]);return m.vnode&&m.vnode(l),l}var hn=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Ue=new Set(hn);function mn(e){let t={};for(let r in e){let i=r.replace(/[A-Z]/g,c=>`-${c.toLowerCase()}`);t[i]=e[r]}return t}var fe=class{uid=0;constructor(t){t&&(this.uid=t)}next(){return++this.uid}},gn=new fe;function Y(){return`styled-component-${gn.next()}`}function Be(e){let t=document.styleSheets;for(let r of t)for(let i of r.cssRules)if(i.cssText.includes(`.${e} `))return!0;return!1}function he(e,t){if(!Be(e)){let r=document.createElement("style");r.innerHTML=`.${e} { ${t} }`,document.head.appendChild(r)}}function xn(e,t){if(!Be(e)){let r=document.createElement("style");r.innerHTML=`.${e} ${t}`,document.head.appendChild(r)}}function vn(e,t){let r=JSON.stringify(mn(t),null,2);r=r.replaceAll(",",";"),r=r.replaceAll('"',"");let i=Y(),c=Object.assign(o=>{let{children:a,...d}=o;xn(i,r);let l={className:o.className||i,...d};return c.className=i,H(e,l,a)},{className:void 0});return c}function bn(e,t,...r){let i=Y(),c=Object.assign(o=>{let{children:a,...d}=o,u="",l=r.length;t.forEach((h,_)=>{_<l?u+=h+r[_]:u+=h}),he(i,u);let s={className:o.className||i,...d};return c.className=i,H(e,s,a)},{className:void 0});return c}function yn(e){return e.length==0?!0:typeof e[0]!="function"}function wn(e,t,...r){if(yn(r))return bn(e,t,...r);let i=Object.assign(c=>{let o="",a=r.length;t.forEach((s,h)=>{h<a?o+=s+r[h](c):o+=s});let{children:d,...u}=c,l=i.mappedId.get(c);l||(l=Y(),he(l,o),i.mappedId.set(c,l));let f={className:c.className||l,...u};return H(e,f,d)},{mappedId:new Map});return i}function Sn(e){return(t,...r)=>{let i="",c=r.length;t.forEach((a,d)=>{d<c?i+=a+r[d]:i+=a});let o=Object.assign(a=>{let{children:d,...u}=a,l=Y();console.log("aaa"),he(l,i),e.className&&(l=`${e.className} ${l}`);let f=a.className||l;o.className=f;let s={className:f,...u};return H(e,s,d)},{className:void 0});return o}}var Fe=Sn;Ue.forEach(e=>{Fe[e]=function(t,...r){return Array.isArray(t)&&"raw"in t?wn(e,t,...r):vn(e,t)}});var Re=Fe;var $=class{keys;_mainKey;maps=new Map;constructor(t,r){this.keys=t,this._mainKey=r;for(let i in t)this.maps.set(i,"")}init(t){for(let r in this.keys){let i=t(r);this.maps.set(r,i)}}setCSS(t){return(r,...i)=>{let c="",o=i.length;r.forEach((a,d)=>{d<o?c+=a+i[d]:c+=a}),this.maps.set(t,c)}}get mainKey(){return this._mainKey}generate(){let t={},r="";this.keys.forEach((c,o)=>{t[c]=c;let a=`.${t[c]}`;c!=this.mainKey&&(a=`.${this.mainKey}.${c}`),r+=`${a} { ${this.maps.get(c)} }
`});let i=document.createElement("style");return i.innerHTML=r,document.head.appendChild(i),t}};var p=Re;var We=p.header`
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
`,Oe=p.div`
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
`,kn=["dropDown"],Ve=new $(kn,"dropDown");Ve.setCSS("dropDown")`
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
`;var Xn=Ve.generate(),Cn=p.nav`
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
    visibility: ${({autohide:e})=>e?"hidden":"visible"};
  }
`,Ge=Cn;var qe=p.div`
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
`,Ke=p.div`
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
`,Je=p.div`
  position: relative;
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 6fr 4fr;
`,Ze=p.div`
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
`,Ye=p.div`
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
`,me=p.span`
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
`,Xe=p.span`
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
`,et=p.div`
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
`,nr=p.a`
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
`,tt=p.div`
  grid-column: 2/2;
  display: flex;
  justify-content: right;
  align-items: center;
  grid-row: 1;
  margin-right: 20px;
`,nt=p.button`
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
`,rr=p.button`
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
`;function rt({children:e,onClick:t}){return n(We,{children:[n(jn,{}),n(Ge,{autohide:!0,children:e}),n(tt,{children:n(nt,{onClick:t})})]})}function jn(){return n(Oe,{children:n("a",{href:"https://www.navic.cc/",children:n("img",{src:"static/navic_logo.png"})})})}var it=p.section`
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
`,ct=p.div`
  position: relative;
  width: 47%;
  @media screen and (max-width: 900px) {
    width: 30%;
  }
`,st=p.div`
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
`;function at(){return n(it,{children:[n(ct,{}),n(ot,{src:"./static/navic_top.jpg"}),n(st,{children:n("p",{children:["\u4EBA\u3068\u306E\u3064\u306A\u304C\u308A\u3092\u5927\u5207\u306B\u3002",n("br",{}),"\u69D8\u3005\u306A\u5206\u91CE\u3067\u65B0\u305F\u306A\u4FA1\u5024\u3092\u751F\u307F\u51FA\u3057\u3066\u3044\u304F\u3002"]})})]})}var lt=p.section`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
`,dt=p.img`
  height: auto;
  width: 50%;
  object-fit: cover;
`,pt=p.div`
  margin-left: 30px;
  font-size: 4vw;
  width: 50%;
  font-weight: bold;
  color: #1b4f80;
  margin-top: 5%;
`;function ut(){return n(lt,{children:[n(dt,{src:"static/section2.jpg"}),n(pt,{children:n("p",{children:["\u5E38\u306B\u5148\u3092\u898B\u636E\u3048\u305F",n("br",{}),"\u4E8B\u696D\u5C55\u958B\u3067",n("br",{}),"\u65B0\u305F\u306A\u672A\u6765\u3092\u5207\u308A\u958B\u304F\u3002"]})})]})}var Nn=["fade-in-section","is-visible"],ge=new $(Nn,"fade-in-section");ge.setCSS("fade-in-section")`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 0.6s ;
  will-change: opacity, visibility;
  margin: 0;
`;ge.setCSS("is-visible")`
  opacity: 1;
  transform: none;
  visibility: visible;
`;var En=ge.generate(),_t=p.div`
  width: 100%;
  height: 30px;
`,Tn=p.span`
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
`,ft=p.section`
  background-color: #14508cff;
  justify-self: stretch;
  grid-area: 7/1/8/2;
  width: 100%;
  display: grid;
`,ht=p.div`
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
`,mt=p.div`
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
`;var X,v,xe,gt,ve=0,Ct=[],b=m,xt=b.__b,vt=b.__r,bt=b.diffed,yt=b.__c,wt=b.unmount,St=b.__;function jt(e,t){b.__h&&b.__h(v,e,ve||t),ve=0;var r=v.__H||(v.__H={__:[],__h:[]});return e>=r.__.length&&r.__.push({}),r.__[e]}function R(e){return ve=1,Ln(Nt,e)}function Ln(e,t,r){var i=jt(X++,2);if(i.t=e,!i.__c&&(i.__=[r?r(t):Nt(void 0,t),function(d){var u=i.__N?i.__N[0]:i.__[0],l=i.t(u,d);u!==l&&(i.__N=[l,i.__[1]],i.__c.setState({}))}],i.__c=v,!v.__f)){var c=function(d,u,l){if(!i.__c.__H)return!0;var f=i.__c.__H.__.filter(function(h){return!!h.__c});if(f.every(function(h){return!h.__N}))return!o||o.call(this,d,u,l);var s=i.__c.props!==d;return f.forEach(function(h){if(h.__N){var _=h.__[0];h.__=h.__N,h.__N=void 0,_!==h.__[0]&&(s=!0)}}),o&&o.call(this,d,u,l)||s};v.__f=!0;var o=v.shouldComponentUpdate,a=v.componentWillUpdate;v.componentWillUpdate=function(d,u,l){if(this.__e){var f=o;o=void 0,c(d,u,l),o=f}a&&a.call(this,d,u,l)},v.shouldComponentUpdate=c}return i.__N||i.__}function ye(e,t){var r=jt(X++,3);!b.__s&&An(r.__H,t)&&(r.__=e,r.u=t,v.__H.__h.push(r))}function Pn(){for(var e;e=Ct.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Q),e.__H.__h.forEach(be),e.__H.__h=[]}catch(t){e.__H.__h=[],b.__e(t,e.__v)}}b.__b=function(e){v=null,xt&&xt(e)},b.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),St&&St(e,t)},b.__r=function(e){vt&&vt(e),X=0;var t=(v=e.__c).__H;t&&(xe===v?(t.__h=[],v.__h=[],t.__.forEach(function(r){r.__N&&(r.__=r.__N),r.u=r.__N=void 0})):(t.__h.forEach(Q),t.__h.forEach(be),t.__h=[],X=0)),xe=v},b.diffed=function(e){bt&&bt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ct.push(t)!==1&&gt===b.requestAnimationFrame||((gt=b.requestAnimationFrame)||Mn)(Pn)),t.__H.__.forEach(function(r){r.u&&(r.__H=r.u),r.u=void 0})),xe=v=null},b.__c=function(e,t){t.some(function(r){try{r.__h.forEach(Q),r.__h=r.__h.filter(function(i){return!i.__||be(i)})}catch(i){t.some(function(c){c.__h&&(c.__h=[])}),t=[],b.__e(i,r.__v)}}),yt&&yt(e,t)},b.unmount=function(e){wt&&wt(e);var t,r=e.__c;r&&r.__H&&(r.__H.__.forEach(function(i){try{Q(i)}catch(c){t=c}}),r.__H=void 0,t&&b.__e(t,r.__v))};var kt=typeof requestAnimationFrame=="function";function Mn(e){var t,r=function(){clearTimeout(i),kt&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(r,35);kt&&(t=requestAnimationFrame(r))}function Q(e){var t=v,r=e.__c;typeof r=="function"&&(e.__c=void 0,r()),v=t}function be(e){var t=v;e.__c=e.__(),v=t}function An(e,t){return!e||e.length!==t.length||t.some(function(r,i){return r!==e[i]})}function Nt(e,t){return typeof t=="function"?t(e):t}function Et(){return n(_t,{})}function ee({ja:e,en:t}){return n(ft,{children:[n(ht,{children:n("h2",{children:n("span",{children:e})})}),n(mt,{children:n("h1",{children:n("span",{children:t})})})]})}var Tt=p.section`
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
`;function Mt(){return n(Tt,{children:[n(Pt,{}),n(Lt,{children:[n("h1",{children:"NAVIC\u306E\u53D6\u308A\u7D44\u307F"}),n("h5",{children:"OUR SERVICE"})]})]})}var At=p.section`
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 6fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow-x: auto;

  max-width: var(--container-xl);
`,It=p.div`
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
`,$t=p.button`
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
`,zt=p.button`
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
`;function Dt(){ye(()=>{let i=setInterval(()=>{r()},3e3);return()=>clearInterval(i)});let e=i=>{let{scrollLeft:c,clientWidth:o}=i.currentTarget;c>=o*4.8&&i.currentTarget.scrollTo({left:0,behavior:"instant"})},t=()=>{let i=document.getElementById("mainSlider");if(i!=null){let c=i.scrollLeft,o=i.clientWidth,a=c-o;if(a<0){a=2*o,i.scrollTo({left:a,behavior:"instant"});return}i.scrollTo({left:a,behavior:"smooth"})}},r=()=>{let i=document.getElementById("mainSlider");if(i!=null){let c=i.scrollLeft,o=i.clientWidth;i.scrollTo({left:c+o,behavior:"smooth"})}};return n(At,{children:[n($t,{onClick:t}),n(It,{id:"mainSlider",onScroll:e,children:[n("img",{src:"static/display.jpg"}),n("img",{src:"static/display2.jpg"}),n("img",{src:"static/display3.jpg"}),n("img",{src:"static/display4.jpg"}),n("img",{src:"static/display.jpg"})]}),n(zt,{onClick:r})]})}var Ht=p.section`
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
`;function Ft(){return n(Ht,{children:[n(Ut,{children:[n(re,{children:[n(te,{src:"static/mv2.jpg"}),n(ne,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(re,{children:[n(te,{src:"static/mv2.jpg"}),n(ne,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]}),n(re,{children:[n(te,{src:"static/mv2.jpg"}),n(ne,{children:[n("h1",{children:"\u6B21\u4E16\u4EE3\u30D0\u30A4\u30AF\u7528\u30CA\u30C8\u30EA\u30A6\u30E0\u30A4\u30AA\u30F3\u30D0\u30C3\u30C6\u30EA\u30FC\u304C\u65E5\u672C\u521D\u767B\u5834\u3002 Makuake\u306B\u3066\u4E88\u7D04\u8CA9\u58F2\u958B\u59CB\uFF01"}),n("h3",{children:"7\u670810\u65E5"})]})]})]}),n(Bt,{children:n("h3",{children:n("span",{children:n("a",{href:"https://www.navic.cc/news",children:"VIEW ALL"})})})})]})}var Rt=p.section`
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
`,E=p.div`
  align-items: center;
  color: blue;
  text-align: center;
  border-style: none;
  border-width: 0;
  font-size: 10px;
`;function A({src:e}){return n(Ot,{children:n(Vt,{src:e})})}function Gt(){return n(Rt,{children:n(Wt,{children:[n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]}),n(N,{children:[n(A,{src:"static/mv2.jpg"}),n(E,{children:n("h1",{children:"\u30EC\u30F3\u30BF\u30EB\u4E8B\u696D"})})]})]})})}var qt=p.section`
  display: grid;
  position: relative;
  justify-self: stretch;
  pointer-event: auto;
  grid-template-columns: minmax(0px, 1fr);
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
`;function ie(e){switch(e){case 0:return{left:40,right:0,bottom:62,top:6};case 1:return{left:20,right:0,bottom:53,top:15};case 2:return{left:10,right:0,bottom:0,top:36};case 3:return{left:20,right:0,bottom:15,top:56};case 4:return{left:40,right:0,bottom:8,top:64};case 5:return{left:64,right:0,bottom:15,top:56};case 6:return{left:72,right:0,bottom:0,top:36};default:return{left:62,right:0,bottom:53,top:15}}}var T=p.div`
  aspect-ratio: 1 / 1;
  display: grid;
  grid-area: 1/1/2/2;
  align-self: start;
  justify-self: start;
  margin-left: ${({place:e})=>ie(e).left}%;
  margin-top: ${({place:e})=>ie(e).top}%;
  margin-bottom: ${({place:e})=>ie(e).bottom}%;
  margin-right: ${({place:e})=>ie(e).right}%;
  width: 20%;
  position: relative;
  border-radius: 50%;
  background-color: white;
  align-items: center;
  overflow: clip;
`,L=p.div`
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
`;function Zt(){return n(qt,{children:[n(Jt,{children:n("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"20 20 160 160","aria-hidden":!0,datatype:"shape",role:"presentation","aria-label":"",preserveAspectRatio:"xMidYMid meet",children:n("g",{children:n("path",{d:"M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z"})})})}),n(Kt,{children:n("img",{src:"static/navic_logo.png"})}),n(T,{place:0,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"EC\u4E8B\u696D"]}),n("img",{src:"static/center0.png"})]})}),n(T,{place:1,children:n(L,{children:[n("h2",{children:["\u8ECA\u7528\u54C1",n("br",{}),"\u5378\u8CA9\u58F2",n("br",{}),"\u5916\u6CE8\u53D6\u4ED8"]}),n("img",{src:"static/center1.png"})]})}),n(T,{place:2,children:n(L,{children:[n("h2",{children:"\u30EC\u30F3\u30BF\u30EB"}),n("img",{src:"static/center2.png"})]})}),n(T,{place:3,children:n(L,{children:[n("h2",{children:"\u8CBF\u6613"}),n("img",{src:"static/center3.png"}),n("img",{src:"static/center3.1.png"})]})}),n(T,{place:4,children:n(L,{children:[n("h2",{children:["\u30B0\u30EB\u30FC\u30D7",n("br",{}),"\u4E8B\u696D"]}),n("img",{src:"static/center4.png"})]})}),n(T,{place:5,children:n(L,{children:[n("h2",{children:"\u5065\u5EB7"}),n("img",{src:"static/center5.png"})]})}),n(T,{place:6,children:n(L,{children:[n("h2",{children:["\u8C4A\u6A4B",n("br",{}),"\u30EA\u30C6\u30FC\u30EB"]}),n("img",{src:"static/center6.0.png",style:{maxHeight:30}}),n("img",{src:"static/center6.1.png"}),n("img",{src:"static/center6.2.png"})]})}),n(T,{place:7,children:n(L,{children:[n("h2",{children:["\u81EA\u793E\u5546\u54C1",n("br",{}),"\u958B\u767A"]}),n("img",{src:"static/center7.jpg"})]})})]})}var Yt=p.section`
  position: relative;
`,Qt=p.div`
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
`;function nn(){return n("footer",{children:n(Yt,{children:[n(Qt,{children:n("h5",{children:"Copyright(C) NAVIC Co.,LTD. All Rights Reserved."})}),n(Xt,{children:n(en,{children:[n(oe,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCgWqi12hhPgunsA2_-U9pGg",children:["NAVIC",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(oe,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["CLEZEED",n("br",{}),"\u516C\u5F0F\u30C1\u30E3\u30F3\u30CD\u30EB"]}),n(oe,{img:"static/youtube.svg",url:"https://www.youtube.com/channel/UCvsr7nZnUU0BnzITiSD-fpg",children:["\u8C4A\u6A4B",n("br",{}),"\u30E2\u30FC\u30BF\u30FC\u30BA"]}),n(oe,{img:"static/tiktok.svg",url:"https://www.tiktok.com/@navic.inc?_t=ZS-8tJwnPeJqDI&_r=1",children:["NAVIC\u516C\u5F0F",n("br",{}),"TikTok"]})]})})]})})}function oe({img:e,url:t,children:r}){return n(tn,{children:n("a",{href:t,children:[n("img",{src:e}),n("span",{children:r})]})})}var In=[{context:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D",url:"https://www.navic.cc/car-installation"},{context:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D",url:"https://www.navic.cc/car-supplies-onlineshop"},{context:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D",url:"https://www.navic.cc/clezeed"}];function rn(){return n(Qe,{children:[n($n,{title:"\u4E8B\u696D\u7D39\u4ECB",menu:In}),n(Xe,{children:n("a",{href:"https://navic-plaza.com/",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})})]})}function $n({title:e,menu:t}){let[r,i]=R(!0),c=()=>{i(!r)};return n(C,{children:[n(et,{onClick:c,ishidden:r}),n(me,{onClick:c,children:e}),t.map(({context:o,url:a},d)=>n(me,{hidden:r,children:n("a",{href:a,children:o})},d))]})}function zn({onClick:e}){return n(rt,{onClick:e,children:[n("a",{href:"#main",children:["\u4E8B\u696D\u7D39\u4ECB",n("div",{class:"dropDown",children:[n("a",{children:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D"}),n("a",{children:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D"}),n("a",{children:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D"})]})]}),n("a",{href:"#feature",children:"\u304A\u77E5\u3089\u305B"}),n("a",{href:"#install",children:["\u4F1A\u793E\u60C5\u5831",n("div",{class:"dropDown",children:[n("a",{children:"\u8ECA\u7528\u54C1 \u5378\u8CA9\u58F2\u30FB\u5916\u6CE8\u53D6\u4ED8\u4E8B\u696D"}),n("a",{children:"\u8ECA\u7528\u54C1 EC\u4E8B\u696D"}),n("a",{children:"\u81EA\u793E\u5546\u54C1\u958B\u767A\u4E8B\u696D"})]})]}),n("a",{href:"/doc",children:"\u63A1\u7528\u60C5\u5831"}),n("a",{href:"/doc",children:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2"}),n("a",{href:"/doc",children:"\u304A\u554F\u3044\u5408\u308F\u305B"}),n("a",{href:"/doc",children:"\u516C\u5F0F\u30B7\u30E7\u30C3\u30D7"})]})}function on(){let[e,t]=R(!1),r=()=>{t(!e)};return n(C,{children:[n(zn,{onClick:r}),n(qe,{isOpen:e,children:n(Je,{children:[n(Ze,{}),n(Ye,{children:[n(Ke,{type:"button",onClick:r}),n(rn,{})]})]})}),n(at,{}),n(Et,{}),n(ut,{}),n(Mt,{}),n(Zt,{}),n(ee,{ja:"\u304A\u77E5\u3089\u305B",en:"NEWS"}),n(Ft,{}),n(ee,{ja:"\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2",en:"SOCIAL MEDIA"}),n(Dt,{}),n(ee,{ja:"\u5916\u90E8\u30EA\u30F3\u30AF",en:"LINK"}),n(Gt,{}),n(nn,{})]})}var cn=document.getElementById("mount");cn&&He(n(on,{}),cn);
