var ea,mh="fast-kernel";try{if(document.currentScript)ea=document.currentScript.getAttribute(mh);else{let e=document.getElementsByTagName("script");ea=e[e.length-1].getAttribute(mh)}}catch{ea="isolate"}var ro;switch(ea){case"share":ro=Object.freeze({updateQueue:1,observable:2,contextEvent:3,elementRegistry:4});break;case"share-v2":ro=Object.freeze({updateQueue:1.2,observable:2.2,contextEvent:3.2,elementRegistry:4.2});break;default:let e=`-${Math.random().toString(36).substring(2,8)}`;ro=Object.freeze({updateQueue:`1.2${e}`,observable:`2.2${e}`,contextEvent:`3.2${e}`,elementRegistry:`4.2${e}`});break}var Xt=e=>typeof e=="function",Ot=e=>typeof e=="string",oa=()=>{};(function(){if(!(typeof globalThis<"u"))if(typeof global<"u")global.globalThis=global;else if(typeof self<"u")self.globalThis=self;else if(typeof window<"u")window.globalThis=window;else{let t=new Function("return this")();t.globalThis=t}})();var fh={configurable:!1,enumerable:!1,writable:!1};globalThis.FAST===void 0&&Reflect.defineProperty(globalThis,"FAST",Object.assign({value:Object.create(null)},fh));var dt=globalThis.FAST;if(dt.getById===void 0){let e=Object.create(null);Reflect.defineProperty(dt,"getById",Object.assign({value(t,o){let i=e[t];return i===void 0&&(i=o?e[t]=o():null),i}},fh))}dt.error===void 0&&Object.assign(dt,{warn(){},error(e){return new Error(`Error ${e}`)},addMessages(){}});var Ne=Object.freeze([]);function Pr(){let e=new Map;return Object.freeze({register(t){return e.has(t.type)?!1:(e.set(t.type,t),!0)},getByType(t){return e.get(t)},getForInstance(t){if(t!=null)return e.get(t.constructor)}})}function ia(){let e=new WeakMap;return function(t){let o=e.get(t);if(o===void 0){let i=Reflect.getPrototypeOf(t);for(;o===void 0&&i!==null;)o=e.get(i),i=Reflect.getPrototypeOf(i);o=o===void 0?[]:o.slice(0),e.set(t,o)}return o}}function Te(e){e.prototype.toJSON=oa}var Vt=Object.freeze({none:0,attribute:1,booleanAttribute:2,property:3,content:4,tokenList:5,event:6}),yh=e=>e,BS=globalThis.trustedTypes?globalThis.trustedTypes.createPolicy("fast-html",{createHTML:yh}):{createHTML:yh},ra=Object.freeze({createHTML(e){return BS.createHTML(e)},protect(e,t,o,i){return i}}),VS=ra,Ge=Object.freeze({get policy(){return ra},setPolicy(e){if(ra!==VS)throw dt.error(1201);ra=e},setAttribute(e,t,o){o==null?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)}});var $=dt.getById(ro.updateQueue,()=>{let e=[],t=[],o=globalThis.requestAnimationFrame,i=!0;function r(){if(t.length)throw t.shift()}function s(c){try{c.call()}catch(p){if(i)t.push(p),setTimeout(r,0);else throw e.length=0,p}}function n(){let p=0;for(;p<e.length;)if(s(e[p]),p++,p>1024){for(let d=0,u=e.length-p;d<u;d++)e[d]=e[d+p];e.length-=p,p=0}e.length=0}function l(c){e.push(c),e.length<2&&(i?o(n):n())}return Object.freeze({enqueue:l,next:()=>new Promise(l),process:n,setMode:c=>i=c})});var je=class{constructor(t,o){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.subject=t,this.sub1=o}has(t){return this.spillover===void 0?this.sub1===t||this.sub2===t:this.spillover.indexOf(t)!==-1}subscribe(t){let o=this.spillover;if(o===void 0){if(this.has(t))return;if(this.sub1===void 0){this.sub1=t;return}if(this.sub2===void 0){this.sub2=t;return}this.spillover=[this.sub1,this.sub2,t],this.sub1=void 0,this.sub2=void 0}else o.indexOf(t)===-1&&o.push(t)}unsubscribe(t){let o=this.spillover;if(o===void 0)this.sub1===t?this.sub1=void 0:this.sub2===t&&(this.sub2=void 0);else{let i=o.indexOf(t);i!==-1&&o.splice(i,1)}}notify(t){let o=this.spillover,i=this.subject;if(o===void 0){let r=this.sub1,s=this.sub2;r!==void 0&&r.handleChange(i,t),s!==void 0&&s.handleChange(i,t)}else for(let r=0,s=o.length;r<s;++r)o[r].handleChange(i,t)}},Vi=class{constructor(t){this.subscribers={},this.subjectSubscribers=null,this.subject=t}notify(t){var o,i;(o=this.subscribers[t])===null||o===void 0||o.notify(t),(i=this.subjectSubscribers)===null||i===void 0||i.notify(t)}subscribe(t,o){var i,r;let s;o?s=(i=this.subscribers[o])!==null&&i!==void 0?i:this.subscribers[o]=new je(this.subject):s=(r=this.subjectSubscribers)!==null&&r!==void 0?r:this.subjectSubscribers=new je(this.subject),s.subscribe(t)}unsubscribe(t,o){var i,r;o?(i=this.subscribers[o])===null||i===void 0||i.unsubscribe(t):(r=this.subjectSubscribers)===null||r===void 0||r.unsubscribe(t)}};var Lr=Object.freeze({unknown:void 0,coupled:1}),I=dt.getById(ro.observable,()=>{let e=$.enqueue,t=/(:|&&|\|\||if|\?\.)/,o=new WeakMap,i,r=p=>{throw dt.error(1101)};function s(p){var d;let u=(d=p.$fastController)!==null&&d!==void 0?d:o.get(p);return u===void 0&&(Array.isArray(p)?u=r(p):o.set(p,u=new Vi(p))),u}let n=ia();class l{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return i!==void 0&&i.watch(d,this.name),d[this.field]}setValue(d,u){let g=this.field,x=d[g];if(x!==u){d[g]=u;let k=d[this.callback];Xt(k)&&k.call(d,x,u),s(d).notify(this.name)}}}class c extends je{constructor(d,u,g=!1){super(d,u),this.expression=d,this.isVolatileBinding=g,this.needsRefresh=!0,this.needsQueue=!0,this.isAsync=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}setMode(d){this.isAsync=this.needsQueue=d}bind(d){this.controller=d;let u=this.observe(d.source,d.context);return!d.isBound&&this.requiresUnbind(d)&&d.onUnbind(this),u}requiresUnbind(d){return d.sourceLifetime!==Lr.coupled||this.first!==this.last||this.first.propertySource!==d.source}unbind(d){this.dispose()}observe(d,u){this.needsRefresh&&this.last!==null&&this.dispose();let g=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let x;try{x=this.expression(d,u)}finally{i=g}return x}disconnect(){this.dispose()}dispose(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=this.isAsync}}watch(d,u){let g=this.last,x=s(d),k=g===null?this.first:{};if(k.propertySource=d,k.propertyName=u,k.notifier=x,x.subscribe(this,u),g!==null){if(!this.needsRefresh){let R;i=void 0,R=g.propertySource[g.propertyName],i=this,d===R&&(this.needsRefresh=!0)}g.next=k}this.last=k}handleChange(){this.needsQueue?(this.needsQueue=!1,e(this)):this.isAsync||this.call()}call(){this.last!==null&&(this.needsQueue=this.isAsync,this.notify(this))}*records(){let d=this.first;for(;d!==void 0;)yield d,d=d.next}}return Te(c),Object.freeze({setArrayObserverFactory(p){r=p},getNotifier:s,track(p,d){i&&i.watch(p,d)},trackVolatile(){i&&(i.needsRefresh=!0)},notify(p,d){s(p).notify(d)},defineProperty(p,d){Ot(d)&&(d=new l(d)),n(p).push(d),Reflect.defineProperty(p,d.name,{enumerable:!0,get(){return d.getValue(this)},set(u){d.setValue(this,u)}})},getAccessors:n,binding(p,d,u=this.isVolatileBinding(p)){return new c(p,d,u)},isVolatileBinding(p){return t.test(p.toString())}})});function f(e,t){I.defineProperty(e,t)}function Bc(e,t,o){return Object.assign({},o,{get(){return I.trackVolatile(),o.get.apply(this)}})}var gh=dt.getById(ro.contextEvent,()=>{let e=null;return{get(){return e},set(t){e=t}}}),Ue=Object.freeze({default:{index:0,length:0,get event(){return Ue.getEvent()},eventDetail(){return this.event.detail},eventTarget(){return this.event.target}},getEvent(){return gh.get()},setEvent(e){gh.set(e)}});var fe=class{constructor(t,o,i){this.index=t,this.removed=o,this.addedCount=i}adjustTo(t){let o=this.index,i=t.length;return o>i?o=i-this.addedCount:o<0&&(o=i+this.removed.length+o-this.addedCount),this.index=o<0?0:o,this}},NS=Object.freeze({reset:1,splice:2,optimized:3}),xh=new fe(0,Ne,0);xh.reset=!0;var vh=[xh];function GS(e,t,o,i,r,s){let n=s-r+1,l=o-t+1,c=new Array(n),p,d;for(let u=0;u<n;++u)c[u]=new Array(l),c[u][0]=u;for(let u=0;u<l;++u)c[0][u]=u;for(let u=1;u<n;++u)for(let g=1;g<l;++g)e[t+g-1]===i[r+u-1]?c[u][g]=c[u-1][g-1]:(p=c[u-1][g]+1,d=c[u][g-1]+1,c[u][g]=p<d?p:d);return c}function jS(e){let t=e.length-1,o=e[0].length-1,i=e[t][o],r=[];for(;t>0||o>0;){if(t===0){r.push(2),o--;continue}if(o===0){r.push(3),t--;continue}let s=e[t-1][o-1],n=e[t-1][o],l=e[t][o-1],c;n<l?c=n<s?n:s:c=l<s?l:s,c===s?(s===i?r.push(0):(r.push(1),i=s),t--,o--):c===n?(r.push(3),t--,i=n):(r.push(2),o--,i=l)}return r.reverse()}function US(e,t,o){for(let i=0;i<o;++i)if(e[i]!==t[i])return i;return o}function qS(e,t,o){let i=e.length,r=t.length,s=0;for(;s<o&&e[--i]===t[--r];)s++;return s}function WS(e,t,o,i){return t<o||i<e?-1:t===o||i===e?0:e<o?t<i?t-o:i-o:i<t?i-e:t-e}function KS(e,t,o,i,r,s){let n=0,l=0,c=Math.min(o-t,s-r);if(t===0&&r===0&&(n=US(e,i,c)),o===e.length&&s===i.length&&(l=qS(e,i,c-n)),t+=n,r+=n,o-=l,s-=l,o-t===0&&s-r===0)return Ne;if(t===o){let k=new fe(t,[],0);for(;r<s;)k.removed.push(i[r++]);return[k]}else if(r===s)return[new fe(t,[],o-t)];let p=jS(GS(e,t,o,i,r,s)),d=[],u,g=t,x=r;for(let k=0;k<p.length;++k)switch(p[k]){case 0:u!==void 0&&(d.push(u),u=void 0),g++,x++;break;case 1:u===void 0&&(u=new fe(g,[],0)),u.addedCount++,g++,u.removed.push(i[x]),x++;break;case 2:u===void 0&&(u=new fe(g,[],0)),u.addedCount++,g++;break;case 3:u===void 0&&(u=new fe(g,[],0)),u.removed.push(i[x]),x++;break}return u!==void 0&&d.push(u),d}function XS(e,t){let o=!1,i=0;for(let r=0;r<t.length;r++){let s=t[r];if(s.index+=i,o)continue;let n=WS(e.index,e.index+e.removed.length,s.index,s.index+s.addedCount);if(n>=0){t.splice(r,1),r--,i-=s.addedCount-s.removed.length,e.addedCount+=s.addedCount-n;let l=e.removed.length+s.removed.length-n;if(!e.addedCount&&!l)o=!0;else{let c=s.removed;if(e.index<s.index){let p=e.removed.slice(0,s.index-e.index);p.push(...c),c=p}if(e.index+e.removed.length>s.index+s.addedCount){let p=e.removed.slice(s.index+s.addedCount-e.index);c.push(...p)}e.removed=c,s.index<e.index&&(e.index=s.index)}}else if(e.index<s.index){o=!0,t.splice(r,0,e),r++;let l=e.addedCount-e.removed.length;s.index+=l,i+=l}}o||t.push(e)}function YS(e,t){let o=[],i=[];for(let r=0,s=t.length;r<s;r++)XS(t[r],i);for(let r=0,s=i.length;r<s;++r){let n=i[r];if(n.addedCount===1&&n.removed.length===1){n.removed[0]!==e[n.index]&&o.push(n);continue}o=o.concat(KS(e,n.index,n.index+n.addedCount,n.removed,0,n.removed.length))}return o}var Nc=Object.freeze({support:NS.optimized,normalize(e,t,o){return e===void 0?o===void 0?Ne:YS(t,o):vh},pop(e,t,o,i){let r=e.length>0,s=o.apply(e,i);return r&&t.addSplice(new fe(e.length,[s],0)),s},push(e,t,o,i){let r=o.apply(e,i);return t.addSplice(new fe(e.length-i.length,[],i.length).adjustTo(e)),r},reverse(e,t,o,i){let r=o.apply(e,i);return t.reset(e),r},shift(e,t,o,i){let r=e.length>0,s=o.apply(e,i);return r&&t.addSplice(new fe(0,[s],0)),s},sort(e,t,o,i){let r=o.apply(e,i);return t.reset(e),r},splice(e,t,o,i){let r=o.apply(e,i);return t.addSplice(new fe(+i[0],r,i.length>2?i.length-2:0).adjustTo(e)),r},unshift(e,t,o,i){let r=o.apply(e,i);return t.addSplice(new fe(0,[],i.length).adjustTo(e)),r}}),BF=Object.freeze({reset:vh,setDefaultStrategy(e){Nc=e}});function Sh(e,t,o){Reflect.defineProperty(e,t,{value:o,enumerable:!1})}var Vc=class extends je{constructor(t){super(t),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this._strategy=null,this._lengthObserver=void 0,this.call=this.flush,Sh(t,"$fastController",this)}get strategy(){return this._strategy}set strategy(t){this._strategy=t}get lengthObserver(){let t=this._lengthObserver;if(t===void 0){let o=this.subject;this._lengthObserver=t={length:o.length,handleChange(){this.length!==o.length&&(this.length=o.length,I.notify(t,"length"))}},this.subscribe(t)}return t}subscribe(t){this.flush(),super.subscribe(t)}addSplice(t){this.splices===void 0?this.splices=[t]:this.splices.push(t),this.enqueue()}reset(t){this.oldCollection=t,this.enqueue()}flush(){var t;let o=this.splices,i=this.oldCollection;o===void 0&&i===void 0||(this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0,this.notify(((t=this._strategy)!==null&&t!==void 0?t:Nc).normalize(i,this.subject,o)))}enqueue(){this.needsQueue&&(this.needsQueue=!1,$.enqueue(this))}},bh=!1,wh=Object.freeze({enable(){if(bh)return;bh=!0,I.setArrayObserverFactory(t=>new Vc(t));let e=Array.prototype;e.$fastPatch||(Sh(e,"$fastPatch",1),[e.pop,e.push,e.reverse,e.shift,e.sort,e.splice,e.unshift].forEach(t=>{e[t.name]=function(...o){var i;let r=this.$fastController;return r===void 0?t.apply(this,o):((i=r.strategy)!==null&&i!==void 0?i:Nc)[t.name](this,r,t,o)}}))}});var De=class{constructor(t,o,i=!1){this.evaluate=t,this.policy=o,this.isVolatile=i}};var Gc=class extends De{createObserver(t){return I.binding(this.evaluate,t,this.isVolatile)}};function Et(e,t,o=I.isVolatileBinding(e)){return new Gc(e,t,o)}var sa=class extends De{createObserver(){return this}bind(t){return this.evaluate(t.source,t.context)}};Te(sa);function _r(e,t){return new sa(e,t)}function jc(e){return Xt(e)?Et(e):e instanceof De?e:_r(()=>e)}var kh;function Ch(e){return e.map(t=>t instanceof ut?Ch(t.styles):[t]).reduce((t,o)=>t.concat(o),[])}var ut=class e{constructor(t){this.styles=t,this.targets=new WeakSet,this._strategy=null,this.behaviors=t.map(o=>o instanceof e?o.behaviors:null).reduce((o,i)=>i===null?o:o===null?i:o.concat(i),null)}get strategy(){return this._strategy===null&&this.withStrategy(kh),this._strategy}addStylesTo(t){this.strategy.addStylesTo(t),this.targets.add(t)}removeStylesFrom(t){this.strategy.removeStylesFrom(t),this.targets.delete(t)}isAttachedTo(t){return this.targets.has(t)}withBehaviors(...t){return this.behaviors=this.behaviors===null?t:this.behaviors.concat(t),this}withStrategy(t){return this._strategy=new t(Ch(this.styles)),this}static setDefaultStrategy(t){kh=t}static normalize(t){return t===void 0?void 0:Array.isArray(t)?new e(t):t instanceof e?t:new e([t])}};ut.supportsAdoptedStyleSheets=Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype;var Uc=Pr(),Ni=Object.freeze({getForInstance:Uc.getForInstance,getByType:Uc.getByType,define(e){return Uc.register({type:e}),e}});function Oo(){return function(e){Ni.define(e)}}function qc(e,t,o){t.source.style.setProperty(e.targetAspect,o.bind(t))}var Hr=class{constructor(t,o){this.dataBinding=t,this.targetAspect=o}createCSS(t){return t(this),`var(${this.targetAspect})`}addedCallback(t){var o;let i=t.source;if(!i.$cssBindings){i.$cssBindings=new Map;let s=i.setAttribute;i.setAttribute=(n,l)=>{s.call(i,n,l),n==="style"&&i.$cssBindings.forEach((c,p)=>qc(p,c.controller,c.observer))}}let r=(o=t[this.targetAspect])!==null&&o!==void 0?o:t[this.targetAspect]=this.dataBinding.createObserver(this,this);r.controller=t,t.source.$cssBindings.set(this,{controller:t,observer:r})}connectedCallback(t){qc(this,t,t[this.targetAspect])}removedCallback(t){t.source.$cssBindings&&t.source.$cssBindings.delete(this)}handleChange(t,o){qc(this,o.controller,o)}};Ni.define(Hr);var QS=`${Math.random().toString(36).substring(2,8)}`,JS=0,Th=()=>`--v${QS}${++JS}`;function Dh(e,t){let o=[],i="",r=[],s=n=>{r.push(n)};for(let n=0,l=e.length-1;n<l;++n){i+=e[n];let c=t[n];Xt(c)?c=new Hr(Et(c),Th()).createCSS(s):c instanceof De?c=new Hr(c,Th()).createCSS(s):Ni.getForInstance(c)!==void 0&&(c=c.createCSS(s)),c instanceof ut||c instanceof CSSStyleSheet?(i.trim()!==""&&(o.push(i),i=""),o.push(c)):i+=c}return i+=e[e.length-1],i.trim()!==""&&o.push(i),{styles:o,behaviors:r}}var y=(e,...t)=>{let{styles:o,behaviors:i}=Dh(e,t),r=new ut(o);return i.length?r.withBehaviors(...i):r},na=class{constructor(t,o){this.behaviors=o,this.css="";let i=t.reduce((r,s)=>(Ot(s)?this.css+=s:r.push(s),r),[]);i.length&&(this.styles=new ut(i))}createCSS(t){return this.behaviors.forEach(t),this.styles&&t(this),this.css}addedCallback(t){t.addStyles(this.styles)}removedCallback(t){t.removeStyles(this.styles)}};Ni.define(na);y.partial=(e,...t)=>{let{styles:o,behaviors:i}=Dh(e,t);return new na(o,i)};var Wc=`fast-${Math.random().toString(36).substring(2,8)}`,aa=`${Wc}{`,Bs=`}${Wc}`,ZS=Bs.length,t0=0,ui=()=>`${Wc}-${++t0}`,zr=Object.freeze({interpolation:e=>`${aa}${e}${Bs}`,attribute:e=>`${ui()}="${aa}${e}${Bs}"`,comment:e=>`<!--${aa}${e}${Bs}-->`}),Vs=Object.freeze({parse(e,t){let o=e.split(aa);if(o.length===1)return null;let i=[];for(let r=0,s=o.length;r<s;++r){let n=o[r],l=n.indexOf(Bs),c;if(l===-1)c=n;else{let p=n.substring(0,l);i.push(t[p]),c=n.substring(l+ZS)}c!==""&&i.push(c)}return i}});var Kc=Pr(),wt=Object.freeze({getForInstance:Kc.getForInstance,getByType:Kc.getByType,define(e,t){return t=t||{},t.type=e,Kc.register(t),e},assignAspect(e,t){if(!t){e.aspectType=Vt.content;return}switch(e.sourceAspect=t,t[0]){case":":e.targetAspect=t.substring(1),e.aspectType=e.targetAspect==="classList"?Vt.tokenList:Vt.property;break;case"?":e.targetAspect=t.substring(1),e.aspectType=Vt.booleanAttribute;break;case"@":e.targetAspect=t.substring(1),e.aspectType=Vt.event;break;default:e.targetAspect=t,e.aspectType=Vt.attribute;break}}});function Ns(e){return function(t){wt.define(t,e)}}var mi=class{constructor(t){this.options=t}createHTML(t){return zr.attribute(t(this))}createBehavior(){return this}};Te(mi);function e0(e,t,o,i){if(o==null&&(o=""),o.create){e.textContent="";let r=e.$fastView;r===void 0?r=o.create():e.$fastTemplate!==o&&(r.isComposed&&(r.remove(),r.unbind()),r=o.create()),r.isComposed?r.needsBindOnly&&(r.needsBindOnly=!1,r.bind(i.source,i.context)):(r.isComposed=!0,r.bind(i.source,i.context),r.insertBefore(e),e.$fastView=r,e.$fastTemplate=o)}else{let r=e.$fastView;r!==void 0&&r.isComposed&&(r.isComposed=!1,r.remove(),r.needsBindOnly?r.needsBindOnly=!1:r.unbind()),e.textContent=o}}function o0(e,t,o){var i;let r=`${this.id}-t`,s=(i=e[r])!==null&&i!==void 0?i:e[r]={v:0,cv:Object.create(null)},n=s.cv,l=s.v,c=e[t];if(o!=null&&o.length){let p=o.split(/\s+/);for(let d=0,u=p.length;d<u;++d){let g=p[d];g!==""&&(n[g]=l,c.add(g))}}if(s.v=l+1,l!==0){l-=1;for(let p in n)n[p]===l&&c.remove(p)}}var i0={[Vt.attribute]:Ge.setAttribute,[Vt.booleanAttribute]:Ge.setBooleanAttribute,[Vt.property]:(e,t,o)=>e[t]=o,[Vt.content]:e0,[Vt.tokenList]:o0,[Vt.event]:()=>{}},so=class{constructor(t){this.dataBinding=t,this.updateTarget=null,this.aspectType=Vt.content}createHTML(t){return zr.interpolation(t(this))}createBehavior(){var t;if(this.updateTarget===null){let o=i0[this.aspectType],i=(t=this.dataBinding.policy)!==null&&t!==void 0?t:this.policy;if(!o)throw dt.error(1205);this.data=`${this.id}-d`,this.updateTarget=i.protect(this.targetTagName,this.aspectType,this.targetAspect,o)}return this}bind(t){var o;let i=t.targets[this.targetNodeId];switch(this.aspectType){case Vt.event:i[this.data]=t,i.addEventListener(this.targetAspect,this,this.dataBinding.options);break;case Vt.content:t.onUnbind(this);default:let r=(o=i[this.data])!==null&&o!==void 0?o:i[this.data]=this.dataBinding.createObserver(this,this);r.target=i,r.controller=t,this.updateTarget(i,this.targetAspect,r.bind(t),t);break}}unbind(t){let i=t.targets[this.targetNodeId].$fastView;i!==void 0&&i.isComposed&&(i.unbind(),i.needsBindOnly=!0)}handleEvent(t){let o=t.currentTarget[this.data];if(o.isBound){Ue.setEvent(t);let i=this.dataBinding.evaluate(o.source,o.context);Ue.setEvent(null),i!==!0&&t.preventDefault()}}handleChange(t,o){let i=o.target,r=o.controller;this.updateTarget(i,this.targetAspect,o.bind(r),r)}};wt.define(so,{aspected:!0});function Rh(e,t){let o=e.parentNode,i=e,r;for(;i!==t;)r=i.nextSibling,o.removeChild(i),i=r;o.removeChild(t)}var Eo=class{constructor(t,o,i){this.fragment=t,this.factories=o,this.targets=i,this.behaviors=null,this.unbindables=[],this.source=null,this.isBound=!1,this.sourceLifetime=Lr.unknown,this.context=this,this.index=0,this.length=0,this.firstChild=t.firstChild,this.lastChild=t.lastChild}get event(){return Ue.getEvent()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}eventDetail(){return this.event.detail}eventTarget(){return this.event.target}appendTo(t){t.appendChild(this.fragment)}insertBefore(t){if(this.fragment.hasChildNodes())t.parentNode.insertBefore(this.fragment,t);else{let o=this.lastChild;if(t.previousSibling===o)return;let i=t.parentNode,r=this.firstChild,s;for(;r!==o;)s=r.nextSibling,i.insertBefore(r,t),r=s;i.insertBefore(o,t)}}remove(){let t=this.fragment,o=this.lastChild,i=this.firstChild,r;for(;i!==o;)r=i.nextSibling,t.appendChild(i),i=r;t.appendChild(o)}dispose(){Rh(this.firstChild,this.lastChild),this.unbind()}onUnbind(t){this.unbindables.push(t)}bind(t,o=this){if(this.source===t)return;let i=this.behaviors;if(i===null){this.source=t,this.context=o,this.behaviors=i=new Array(this.factories.length);let r=this.factories;for(let s=0,n=r.length;s<n;++s){let l=r[s].createBehavior();l.bind(this),i[s]=l}}else{this.source!==null&&this.evaluateUnbindables(),this.isBound=!1,this.source=t,this.context=o;for(let r=0,s=i.length;r<s;++r)i[r].bind(this)}this.isBound=!0}unbind(){!this.isBound||this.source===null||(this.evaluateUnbindables(),this.source=null,this.context=this,this.isBound=!1)}evaluateUnbindables(){let t=this.unbindables;for(let o=0,i=t.length;o<i;++o)t[o].unbind(this);t.length=0}static disposeContiguousBatch(t){if(t.length!==0){Rh(t[0].firstChild,t[t.length-1].lastChild);for(let o=0,i=t.length;o<i;++o)t[o].unbind()}}};Te(Eo);I.defineProperty(Eo.prototype,"index");I.defineProperty(Eo.prototype,"length");var $h=(e,t)=>`${e}.${t}`,Fh={},no={index:0,node:null};function Ih(e){e.startsWith("fast-")||dt.warn(1204,{name:e})}var r0=new Proxy(document.createElement("div"),{get(e,t){Ih(t);let o=Reflect.get(e,t);return Xt(o)?o.bind(e):o},set(e,t,o){return Ih(t),Reflect.set(e,t,o)}}),Xc=class{constructor(t,o,i){this.fragment=t,this.directives=o,this.policy=i,this.proto=null,this.nodeIds=new Set,this.descriptors={},this.factories=[]}addFactory(t,o,i,r,s){var n,l;this.nodeIds.has(i)||(this.nodeIds.add(i),this.addTargetDescriptor(o,i,r)),t.id=(n=t.id)!==null&&n!==void 0?n:ui(),t.targetNodeId=i,t.targetTagName=s,t.policy=(l=t.policy)!==null&&l!==void 0?l:this.policy,this.factories.push(t)}freeze(){return this.proto=Object.create(null,this.descriptors),this}addTargetDescriptor(t,o,i){let r=this.descriptors;if(o==="r"||o==="h"||r[o])return;if(!r[t]){let n=t.lastIndexOf("."),l=t.substring(0,n),c=parseInt(t.substring(n+1));this.addTargetDescriptor(l,t,c)}let s=Fh[o];if(!s){let n=`_${o}`;Fh[o]=s={get(){var l;return(l=this[n])!==null&&l!==void 0?l:this[n]=this[t].childNodes[i]}}}r[o]=s}createView(t){let o=this.fragment.cloneNode(!0),i=Object.create(this.proto);i.r=o,i.h=t??r0;for(let r of this.nodeIds)i[r];return new Eo(o,this.factories,i)}};function Oh(e,t,o,i,r,s=!1){let n=o.attributes,l=e.directives;for(let c=0,p=n.length;c<p;++c){let d=n[c],u=d.value,g=Vs.parse(u,l),x=null;g===null?s&&(x=new so(_r(()=>u,e.policy)),wt.assignAspect(x,d.name)):x=la.aggregate(g,e.policy),x!==null&&(o.removeAttributeNode(d),c--,p--,e.addFactory(x,t,i,r,o.tagName))}}function s0(e,t,o,i,r){let s=Vs.parse(t.textContent,e.directives);if(s===null)return no.node=t.nextSibling,no.index=r+1,no;let n,l=n=t;for(let c=0,p=s.length;c<p;++c){let d=s[c];c!==0&&(r++,i=$h(o,r),n=l.parentNode.insertBefore(document.createTextNode(""),l.nextSibling)),Ot(d)?n.textContent=d:(n.textContent=" ",wt.assignAspect(d),e.addFactory(d,o,i,r,null)),l=n}return no.index=r+1,no.node=l.nextSibling,no}function Eh(e,t,o){let i=0,r=t.firstChild;for(;r;){let s=n0(e,o,r,i);r=s.node,i=s.index}}function n0(e,t,o,i){let r=$h(t,i);switch(o.nodeType){case 1:Oh(e,t,o,r,i),Eh(e,o,r);break;case 3:return s0(e,o,t,r,i);case 8:let s=Vs.parse(o.data,e.directives);s!==null&&e.addFactory(la.aggregate(s),t,r,i,null);break}return no.index=i+1,no.node=o.nextSibling,no}function a0(e,t){return e&&e.nodeType==8&&Vs.parse(e.data,t)!==null}var Ah="TEMPLATE",la={compile(e,t,o=Ge.policy){let i;if(Ot(e)){i=document.createElement(Ah),i.innerHTML=o.createHTML(e);let n=i.content.firstElementChild;n!==null&&n.tagName===Ah&&(i=n)}else i=e;!i.content.firstChild&&!i.content.lastChild&&i.content.appendChild(document.createComment(""));let r=document.adoptNode(i.content),s=new Xc(r,t,o);return Oh(s,"",i,"h",0,!0),(a0(r.firstChild,t)||r.childNodes.length===1&&Object.keys(t).length>0)&&r.insertBefore(document.createComment(""),r.firstChild),Eh(s,r,"r"),no.node=null,s.freeze()},setDefaultStrategy(e){this.compile=e},aggregate(e,t=Ge.policy){if(e.length===1)return e[0];let o,i,r=!1,s,n=e.length,l=e.map(d=>Ot(d)?()=>d:(o=d.sourceAspect||o,i=d.dataBinding||i,r=r||d.dataBinding.isVolatile,s=s||d.dataBinding.policy,d.dataBinding.evaluate)),c=(d,u)=>{let g="";for(let x=0;x<n;++x)g+=l[x](d,u);return g};i.evaluate=c,i.isVolatile=r,i.policy=s??t;let p=new so(i);return wt.assignAspect(p,o),p}};var l0=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/,c0=Object.create(null),qe=class{constructor(t,o=c0){this.html=t,this.factories=o}createHTML(t){let o=this.factories;for(let i in o)t(o[i]);return this.html}};qe.empty=new qe("");wt.define(qe);function d0(e,t,o,i=wt.getForInstance(e)){if(i.aspected){let r=l0.exec(t);r!==null&&wt.assignAspect(e,r[2])}return e.createHTML(o)}var Gs=class e{constructor(t,o={},i){this.policy=i,this.result=null,this.html=t,this.factories=o}create(t){return this.result===null&&(this.result=la.compile(this.html,this.factories,this.policy)),this.result.createView(t)}inline(){return new qe(Ot(this.html)?this.html:this.html.innerHTML,this.factories)}withPolicy(t){if(this.result)throw dt.error(1208);if(this.policy)throw dt.error(1207);return this.policy=t,this}render(t,o,i){let r=this.create(i);return r.bind(t),r.appendTo(o),r}static create(t,o,i){let r="",s=Object.create(null),n=l=>{var c;let p=(c=l.id)!==null&&c!==void 0?c:l.id=ui();return s[p]=l,p};for(let l=0,c=t.length-1;l<c;++l){let p=t[l],d=o[l],u;if(r+=p,Xt(d))d=new so(Et(d));else if(d instanceof De)d=new so(d);else if(!(u=wt.getForInstance(d))){let g=d;d=new so(_r(()=>g))}r+=d0(d,p,n,u)}return new e(r+t[t.length-1],s,i)}};Te(Gs);var m=(e,...t)=>{if(Array.isArray(e)&&Array.isArray(e.raw))return Gs.create(e,t);throw dt.error(1206)};m.partial=e=>new qe(e);var js=class extends mi{bind(t){t.source[this.options]=t.targets[this.targetNodeId]}};wt.define(js);var z=e=>new js(e);var p0=()=>null;function Mh(e){return e===void 0?p0:Xt(e)?e:()=>e}function X(e,t,o){let i=Xt(e)?e:()=>e,r=Mh(t),s=Mh(o);return(n,l)=>i(n,l)?r(n,l):s(n,l)}var Ph=Object.freeze({positioning:!1,recycle:!0});function h0(e,t,o,i){e.context.parent=i.source,e.context.parentContext=i.context,e.bind(t[o])}function u0(e,t,o,i){e.context.parent=i.source,e.context.parentContext=i.context,e.context.length=t.length,e.context.index=o,e.bind(t[o])}var ca=class{constructor(t){this.directive=t,this.items=null,this.itemsObserver=null,this.bindView=h0,this.views=[],this.itemsBindingObserver=t.dataBinding.createObserver(this,t),this.templateBindingObserver=t.templateBinding.createObserver(this,t),t.options.positioning&&(this.bindView=u0)}bind(t){this.location=t.targets[this.directive.targetNodeId],this.controller=t,this.items=this.itemsBindingObserver.bind(t),this.template=this.templateBindingObserver.bind(t),this.observeItems(!0),this.refreshAllViews(),t.onUnbind(this)}unbind(){this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews()}handleChange(t,o){if(o===this.itemsBindingObserver)this.items=this.itemsBindingObserver.bind(this.controller),this.observeItems(),this.refreshAllViews();else if(o===this.templateBindingObserver)this.template=this.templateBindingObserver.bind(this.controller),this.refreshAllViews(!0);else if(o[0])o[0].reset?this.refreshAllViews():this.updateViews(o);else return}observeItems(t=!1){if(!this.items){this.items=Ne;return}let o=this.itemsObserver,i=this.itemsObserver=I.getNotifier(this.items),r=o!==i;r&&o!==null&&o.unsubscribe(this),(r||t)&&i.subscribe(this)}updateViews(t){let o=this.views,i=this.bindView,r=this.items,s=this.template,n=this.controller,l=this.directive.options.recycle,c=[],p=0,d=0;for(let u=0,g=t.length;u<g;++u){let x=t[u],k=x.removed,R=0,F=x.index,A=F+x.addedCount,P=o.splice(x.index,k.length),V=d=c.length+P.length;for(;F<A;++F){let rt=o[F],et=rt?rt.firstChild:this.location,ot;l&&d>0?(R<=V&&P.length>0?(ot=P[R],R++):(ot=c[p],p++),d--):ot=s.create(),o.splice(F,0,ot),i(ot,r,F,n),ot.insertBefore(et)}P[R]&&c.push(...P.slice(R))}for(let u=p,g=c.length;u<g;++u)c[u].dispose();if(this.directive.options.positioning)for(let u=0,g=o.length;u<g;++u){let x=o[u].context;x.length=g,x.index=u}}refreshAllViews(t=!1){let o=this.items,i=this.template,r=this.location,s=this.bindView,n=this.controller,l=o.length,c=this.views,p=c.length;if((l===0||t||!this.directive.options.recycle)&&(Eo.disposeContiguousBatch(c),p=0),p===0){this.views=c=new Array(l);for(let d=0;d<l;++d){let u=i.create();s(u,o,d,n),c[d]=u,u.insertBefore(r)}}else{let d=0;for(;d<l;++d)if(d<p){let g=c[d];s(g,o,d,n)}else{let g=i.create();s(g,o,d,n),c.push(g),g.insertBefore(r)}let u=c.splice(d,p-d);for(d=0,l=u.length;d<l;++d)u[d].dispose()}}unbindAllViews(){let t=this.views;for(let o=0,i=t.length;o<i;++o)t[o].unbind()}},Re=class{constructor(t,o,i){this.dataBinding=t,this.templateBinding=o,this.options=i,wh.enable()}createHTML(t){return zr.comment(t(this))}createBehavior(){return new ca(this)}};wt.define(Re);function fi(e,t,o=Ph){let i=jc(e),r=jc(t);return new Re(i,r,Object.assign(Object.assign({},Ph),o))}var m0=e=>e.nodeType===1,Rt=e=>e?t=>t.nodeType===1&&t.matches(e):m0,Gi=class extends mi{get id(){return this._id}set id(t){this._id=t,this._controllerProperty=`${t}-c`}bind(t){let o=t.targets[this.targetNodeId];o[this._controllerProperty]=t,this.updateTarget(t.source,this.computeNodes(o)),this.observe(o),t.onUnbind(this)}unbind(t){let o=t.targets[this.targetNodeId];this.updateTarget(t.source,Ne),this.disconnect(o),o[this._controllerProperty]=null}getSource(t){return t[this._controllerProperty].source}updateTarget(t,o){t[this.options.property]=o}computeNodes(t){let o=this.getNodes(t);return"filter"in this.options&&(o=o.filter(this.options.filter)),o}};var Lh="slotchange",Us=class extends Gi{observe(t){t.addEventListener(Lh,this)}disconnect(t){t.removeEventListener(Lh,this)}getNodes(t){return t.assignedNodes(this.options)}handleEvent(t){let o=t.currentTarget;this.updateTarget(this.getSource(o),this.computeNodes(o))}};wt.define(Us);function M(e){return Ot(e)&&(e={property:e}),new Us(e)}var qs=class extends Gi{constructor(t){super(t),this.observerProperty=Symbol(),this.handleEvent=(o,i)=>{let r=i.target;this.updateTarget(this.getSource(r),this.computeNodes(r))},t.childList=!0}observe(t){let o=t[this.observerProperty];o||(o=new MutationObserver(this.handleEvent),o.toJSON=oa,t[this.observerProperty]=o),o.target=t,o.observe(t,this.options)}disconnect(t){let o=t[this.observerProperty];o.target=null,o.disconnect()}getNodes(t){return"selector"in this.options?Array.from(t.querySelectorAll(this.options.selector)):Array.from(t.childNodes)}};wt.define(qs);function Mo(e){return Ot(e)&&(e={property:e}),new qs(e)}var _h="boolean",Hh="reflect",Po=Object.freeze({locate:ia()}),Lo={toView(e){return e?"true":"false"},fromView(e){return!(e==null||e==="false"||e===!1||e===0)}},Yc={toView(e){return typeof e=="boolean"?e.toString():""},fromView(e){return[null,void 0,void 0].includes(e)?null:Lo.fromView(e)}};function zh(e){if(e==null)return null;let t=e*1;return isNaN(t)?null:t}var G={toView(e){let t=zh(e);return t&&t.toString()},fromView:zh},Ws=class e{constructor(t,o,i=o.toLowerCase(),r=Hh,s){this.guards=new Set,this.Owner=t,this.name=o,this.attribute=i,this.mode=r,this.converter=s,this.fieldName=`_${o}`,this.callbackName=`${o}Changed`,this.hasCallback=this.callbackName in t.prototype,r===_h&&s===void 0&&(this.converter=Lo)}setValue(t,o){let i=t[this.fieldName],r=this.converter;r!==void 0&&(o=r.fromView(o)),i!==o&&(t[this.fieldName]=o,this.tryReflectToAttribute(t),this.hasCallback&&t[this.callbackName](i,o),t.$fastController.notify(this.name))}getValue(t){return I.track(t,this.name),t[this.fieldName]}onAttributeChangedCallback(t,o){this.guards.has(t)||(this.guards.add(t),this.setValue(t,o),this.guards.delete(t))}tryReflectToAttribute(t){let o=this.mode,i=this.guards;i.has(t)||o==="fromView"||$.enqueue(()=>{i.add(t);let r=t[this.fieldName];switch(o){case Hh:let s=this.converter;Ge.setAttribute(t,this.attribute,s!==void 0?s.toView(r):r);break;case _h:Ge.setBooleanAttribute(t,this.attribute,r);break}i.delete(t)})}static collect(t,...o){let i=[];o.push(Po.locate(t));for(let r=0,s=o.length;r<s;++r){let n=o[r];if(n!==void 0)for(let l=0,c=n.length;l<c;++l){let p=n[l];Ot(p)?i.push(new e(t,p)):i.push(new e(t,p.property,p.attribute,p.mode,p.converter))}}return i}};function h(e,t){let o;function i(r,s){arguments.length>1&&(o.property=s),Po.locate(r.constructor).push(o)}if(arguments.length>1){o={},i(e,t);return}return o=e===void 0?{}:e,i}var Bh={mode:"open"},Vh={},Nh=new Set,da=dt.getById(ro.elementRegistry,()=>Pr()),Mt=class e{constructor(t,o=t.definition){var i;this.platformDefined=!1,Ot(o)&&(o={name:o}),this.type=t,this.name=o.name,this.template=o.template,this.registry=(i=o.registry)!==null&&i!==void 0?i:customElements;let r=t.prototype,s=Ws.collect(t,o.attributes),n=new Array(s.length),l={},c={};for(let p=0,d=s.length;p<d;++p){let u=s[p];n[p]=u.attribute,l[u.name]=u,c[u.attribute]=u,I.defineProperty(r,u)}Reflect.defineProperty(t,"observedAttributes",{value:n,enumerable:!0}),this.attributes=s,this.propertyLookup=l,this.attributeLookup=c,this.shadowOptions=o.shadowOptions===void 0?Bh:o.shadowOptions===null?void 0:Object.assign(Object.assign({},Bh),o.shadowOptions),this.elementOptions=o.elementOptions===void 0?Vh:Object.assign(Object.assign({},Vh),o.elementOptions),this.styles=ut.normalize(o.styles),da.register(this)}get isDefined(){return this.platformDefined}define(t=this.registry){let o=this.type;return t.get(this.name)||(this.platformDefined=!0,t.define(this.name,o,this.elementOptions)),this}static compose(t,o){return Nh.has(t)||da.getByType(t)?new e(class extends t{},o):new e(t,o)}static registerBaseType(t){Nh.add(t)}};Mt.getByType=da.getByType;Mt.getForInstance=da.getForInstance;var f0={bubbles:!0,composed:!0,cancelable:!0},Qc="isConnected",Uh=new WeakMap;function pa(e){var t,o;return(o=(t=e.shadowRoot)!==null&&t!==void 0?t:Uh.get(e))!==null&&o!==void 0?o:null}var Gh,ji=class extends Vi{constructor(t,o){super(t),this.boundObservables=null,this.needsInitialization=!0,this.hasExistingShadowRoot=!1,this._template=null,this.stage=3,this.guardBehaviorConnection=!1,this.behaviors=null,this._mainStyles=null,this.$fastController=this,this.view=null,this.source=t,this.definition=o;let i=o.shadowOptions;if(i!==void 0){let s=t.shadowRoot;s?this.hasExistingShadowRoot=!0:(s=t.attachShadow(i),i.mode==="closed"&&Uh.set(t,s))}let r=I.getAccessors(t);if(r.length>0){let s=this.boundObservables=Object.create(null);for(let n=0,l=r.length;n<l;++n){let c=r[n].name,p=t[c];p!==void 0&&(delete t[c],s[c]=p)}}}get isConnected(){return I.track(this,Qc),this.stage===1}get context(){var t,o;return(o=(t=this.view)===null||t===void 0?void 0:t.context)!==null&&o!==void 0?o:Ue.default}get isBound(){var t,o;return(o=(t=this.view)===null||t===void 0?void 0:t.isBound)!==null&&o!==void 0?o:!1}get sourceLifetime(){var t;return(t=this.view)===null||t===void 0?void 0:t.sourceLifetime}get template(){var t;if(this._template===null){let o=this.definition;this.source.resolveTemplate?this._template=this.source.resolveTemplate():o.template&&(this._template=(t=o.template)!==null&&t!==void 0?t:null)}return this._template}set template(t){this._template!==t&&(this._template=t,this.needsInitialization||this.renderTemplate(t))}get mainStyles(){var t;if(this._mainStyles===null){let o=this.definition;this.source.resolveStyles?this._mainStyles=this.source.resolveStyles():o.styles&&(this._mainStyles=(t=o.styles)!==null&&t!==void 0?t:null)}return this._mainStyles}set mainStyles(t){this._mainStyles!==t&&(this._mainStyles!==null&&this.removeStyles(this._mainStyles),this._mainStyles=t,this.needsInitialization||this.addStyles(t))}onUnbind(t){var o;(o=this.view)===null||o===void 0||o.onUnbind(t)}addBehavior(t){var o,i;let r=(o=this.behaviors)!==null&&o!==void 0?o:this.behaviors=new Map,s=(i=r.get(t))!==null&&i!==void 0?i:0;s===0?(r.set(t,1),t.addedCallback&&t.addedCallback(this),t.connectedCallback&&!this.guardBehaviorConnection&&(this.stage===1||this.stage===0)&&t.connectedCallback(this)):r.set(t,s+1)}removeBehavior(t,o=!1){let i=this.behaviors;if(i===null)return;let r=i.get(t);r!==void 0&&(r===1||o?(i.delete(t),t.disconnectedCallback&&this.stage!==3&&t.disconnectedCallback(this),t.removedCallback&&t.removedCallback(this)):i.set(t,r-1))}addStyles(t){var o;if(!t)return;let i=this.source;if(t instanceof HTMLElement)((o=pa(i))!==null&&o!==void 0?o:this.source).append(t);else if(!t.isAttachedTo(i)){let r=t.behaviors;if(t.addStylesTo(i),r!==null)for(let s=0,n=r.length;s<n;++s)this.addBehavior(r[s])}}removeStyles(t){var o;if(!t)return;let i=this.source;if(t instanceof HTMLElement)((o=pa(i))!==null&&o!==void 0?o:i).removeChild(t);else if(t.isAttachedTo(i)){let r=t.behaviors;if(t.removeStylesFrom(i),r!==null)for(let s=0,n=r.length;s<n;++s)this.removeBehavior(r[s])}}connect(){if(this.stage!==3)return;if(this.stage=0,this.boundObservables!==null){let o=this.source,i=this.boundObservables,r=Object.keys(i);for(let s=0,n=r.length;s<n;++s){let l=r[s];o[l]=i[l]}this.boundObservables=null}let t=this.behaviors;if(t!==null){this.guardBehaviorConnection=!0;for(let o of t.keys())o.connectedCallback&&o.connectedCallback(this);this.guardBehaviorConnection=!1}this.needsInitialization?(this.renderTemplate(this.template),this.addStyles(this.mainStyles),this.needsInitialization=!1):this.view!==null&&this.view.bind(this.source),this.stage=1,I.notify(this,Qc)}disconnect(){if(this.stage!==1)return;this.stage=2,I.notify(this,Qc),this.view!==null&&this.view.unbind();let t=this.behaviors;if(t!==null)for(let o of t.keys())o.disconnectedCallback&&o.disconnectedCallback(this);this.stage=3}onAttributeChangedCallback(t,o,i){let r=this.definition.attributeLookup[t];r!==void 0&&r.onAttributeChangedCallback(this.source,i)}emit(t,o,i){return this.stage===1?this.source.dispatchEvent(new CustomEvent(t,Object.assign(Object.assign({detail:o},f0),i))):!1}renderTemplate(t){var o;let i=this.source,r=(o=pa(i))!==null&&o!==void 0?o:i;if(this.view!==null)this.view.dispose(),this.view=null;else if(!this.needsInitialization||this.hasExistingShadowRoot){this.hasExistingShadowRoot=!1;for(let s=r.firstChild;s!==null;s=r.firstChild)r.removeChild(s)}t&&(this.view=t.render(i,r,i),this.view.sourceLifetime=Lr.coupled)}static forCustomElement(t){let o=t.$fastController;if(o!==void 0)return o;let i=Mt.getForInstance(t);if(i===void 0)throw dt.error(1401);return t.$fastController=new Gh(t,i)}static setStrategy(t){Gh=t}};Te(ji);ji.setStrategy(ji);function ha(e){var t;return"adoptedStyleSheets"in e?e:(t=pa(e))!==null&&t!==void 0?t:e.getRootNode()}var ua=class e{constructor(t){let o=e.styleSheetCache;this.sheets=t.map(i=>{if(i instanceof CSSStyleSheet)return i;let r=o.get(i);return r===void 0&&(r=new CSSStyleSheet,r.replaceSync(i),o.set(i,r)),r})}addStylesTo(t){qh(ha(t),this.sheets)}removeStylesFrom(t){Wh(ha(t),this.sheets)}};ua.styleSheetCache=new Map;var y0=0,g0=()=>`fast-${++y0}`;function jh(e){return e===document?document.body:e}var Jc=class{constructor(t){this.styles=t,this.styleClass=g0()}addStylesTo(t){t=jh(ha(t));let o=this.styles,i=this.styleClass;for(let r=0;r<o.length;r++){let s=document.createElement("style");s.innerHTML=o[r],s.className=i,t.append(s)}}removeStylesFrom(t){t=jh(ha(t));let o=t.querySelectorAll(`.${this.styleClass}`);for(let i=0,r=o.length;i<r;++i)t.removeChild(o[i])}},qh=(e,t)=>{e.adoptedStyleSheets=[...e.adoptedStyleSheets,...t]},Wh=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(o=>t.indexOf(o)===-1)};if(ut.supportsAdoptedStyleSheets){try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),qh=(e,t)=>{e.adoptedStyleSheets.push(...t)},Wh=(e,t)=>{for(let o of t){let i=e.adoptedStyleSheets.indexOf(o);i!==-1&&e.adoptedStyleSheets.splice(i,1)}}}catch{}ut.setDefaultStrategy(ua)}else ut.setDefaultStrategy(Jc);function Kh(e){let t=class extends e{constructor(){super(),ji.forCustomElement(this)}$emit(o,i,r){return this.$fastController.emit(o,i,r)}connectedCallback(){this.$fastController.connect()}disconnectedCallback(){this.$fastController.disconnect()}attributeChangedCallback(o,i,r){this.$fastController.onAttributeChangedCallback(o,i,r)}};return Mt.registerBaseType(t),t}function b0(e,t){return Xt(e)?Mt.compose(e,t):Mt.compose(this,e)}function x0(e,t){return Xt(e)?Mt.compose(e,t).define().type:Mt.compose(this,e).define().type}function v0(e){return Kh(e)}var D=Object.assign(Kh(HTMLElement),{from:v0,define:x0,compose:b0});var S0=(e,t)=>{if(typeof e=="number"){if(t===3)return{mode:"rgb",r:(e>>8&15|e>>4&240)/255,g:(e>>4&15|e&240)/255,b:(e&15|e<<4&240)/255};if(t===4)return{mode:"rgb",r:(e>>12&15|e>>8&240)/255,g:(e>>8&15|e>>4&240)/255,b:(e>>4&15|e&240)/255,alpha:(e&15|e<<4&240)/255};if(t===6)return{mode:"rgb",r:(e>>16&255)/255,g:(e>>8&255)/255,b:(e&255)/255};if(t===8)return{mode:"rgb",r:(e>>24&255)/255,g:(e>>16&255)/255,b:(e>>8&255)/255,alpha:(e&255)/255}}},ma=S0;var w0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xh=w0;var k0=e=>ma(Xh[e.toLowerCase()],6),Yh=k0;var C0=/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i,T0=e=>{let t;return(t=e.match(C0))?ma(parseInt(t[1],16),t[1].length):void 0},Qh=T0;var ee="([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)",u$=`(?:${ee}|none)`,Ui=`${ee}%`,m$=`(?:${ee}%|none)`,Ks=`(?:${ee}%|${ee})`,D0=`(?:${ee}%|${ee}|none)`,Jh=`(?:${ee}(deg|grad|rad|turn)|${ee})`,f$=`(?:${ee}(deg|grad|rad|turn)|${ee}|none)`,yi="\\s*,\\s*";var y$=new RegExp("^"+D0+"$");var R0=new RegExp(`^rgba?\\(\\s*${ee}${yi}${ee}${yi}${ee}\\s*(?:,\\s*${Ks}\\s*)?\\)$`),F0=new RegExp(`^rgba?\\(\\s*${Ui}${yi}${Ui}${yi}${Ui}\\s*(?:,\\s*${Ks}\\s*)?\\)$`),I0=e=>{let t={mode:"rgb"},o;if(o=e.match(R0))o[1]!==void 0&&(t.r=o[1]/255),o[2]!==void 0&&(t.g=o[2]/255),o[3]!==void 0&&(t.b=o[3]/255);else if(o=e.match(F0))o[1]!==void 0&&(t.r=o[1]/100),o[2]!==void 0&&(t.g=o[2]/100),o[3]!==void 0&&(t.b=o[3]/100);else return;return o[4]!==void 0?t.alpha=o[4]/100:o[5]!==void 0&&(t.alpha=+o[5]),t},Zh=I0;var A0=(e,t)=>e===void 0?void 0:typeof e!="object"?qi(e):e.mode!==void 0?e:t?{...e,mode:t}:void 0,_o=A0;var $0=(e="rgb")=>t=>(t=_o(t,e))!==void 0?t.mode===e?t:We[t.mode][e]?We[t.mode][e](t):e==="rgb"?We[t.mode].rgb(t):We.rgb[e](We[t.mode].rgb(t)):void 0,Ft=$0;var We={},tu={},Xs=[],Zc={},O0=e=>e,Ho=e=>(We[e.mode]={...We[e.mode],...e.toMode},Object.keys(e.fromMode||{}).forEach(t=>{We[t]||(We[t]={}),We[t][e.mode]=e.fromMode[t]}),e.ranges||(e.ranges={}),e.difference||(e.difference={}),e.channels.forEach(t=>{if(e.ranges[t]===void 0&&(e.ranges[t]=[0,1]),!e.interpolate[t])throw new Error(`Missing interpolator for: ${t}`);typeof e.interpolate[t]=="function"&&(e.interpolate[t]={use:e.interpolate[t]}),e.interpolate[t].fixup||(e.interpolate[t].fixup=O0)}),tu[e.mode]=e,(e.parse||[]).forEach(t=>{eu(t,e.mode)}),Ft(e.mode)),Fe=e=>tu[e],eu=(e,t)=>{if(typeof e=="string"){if(!t)throw new Error("'mode' required when 'parser' is a string");Zc[e]=t}else typeof e=="function"&&Xs.indexOf(e)<0&&Xs.push(e)};var td=/[^\x00-\x7F]|[a-zA-Z_]/,E0=/[^\x00-\x7F]|[-\w]/,_={Function:"function",Ident:"ident",Number:"number",Percentage:"percentage",ParenClose:")",None:"none",Hue:"hue",Alpha:"alpha"},L=0;function fa(e){let t=e[L],o=e[L+1];return t==="-"||t==="+"?/\d/.test(o)||o==="."&&/\d/.test(e[L+2]):t==="."?/\d/.test(o):/\d/.test(t)}function ed(e){if(L>=e.length)return!1;let t=e[L];if(td.test(t))return!0;if(t==="-"){if(e.length-L<2)return!1;let o=e[L+1];return!!(o==="-"||td.test(o))}return!1}var M0={deg:1,rad:180/Math.PI,grad:9/10,turn:360};function Ys(e){let t="";if((e[L]==="-"||e[L]==="+")&&(t+=e[L++]),t+=ya(e),e[L]==="."&&/\d/.test(e[L+1])&&(t+=e[L++]+ya(e)),(e[L]==="e"||e[L]==="E")&&((e[L+1]==="-"||e[L+1]==="+")&&/\d/.test(e[L+2])?t+=e[L++]+e[L++]+ya(e):/\d/.test(e[L+1])&&(t+=e[L++]+ya(e))),ed(e)){let o=ga(e);return o==="deg"||o==="rad"||o==="turn"||o==="grad"?{type:_.Hue,value:t*M0[o]}:void 0}return e[L]==="%"?(L++,{type:_.Percentage,value:+t}):{type:_.Number,value:+t}}function ya(e){let t="";for(;/\d/.test(e[L]);)t+=e[L++];return t}function ga(e){let t="";for(;L<e.length&&E0.test(e[L]);)t+=e[L++];return t}function P0(e){let t=ga(e);return e[L]==="("?(L++,{type:_.Function,value:t}):t==="none"?{type:_.None,value:void 0}:{type:_.Ident,value:t}}function L0(e=""){let t=e.trim(),o=[],i;for(L=0;L<t.length;){if(i=t[L++],i===`
`||i==="	"||i===" "){for(;L<t.length&&(t[L]===`
`||t[L]==="	"||t[L]===" ");)L++;continue}if(i===",")return;if(i===")"){o.push({type:_.ParenClose});continue}if(i==="+"){if(L--,fa(t)){o.push(Ys(t));continue}return}if(i==="-"){if(L--,fa(t)){o.push(Ys(t));continue}if(ed(t)){o.push({type:_.Ident,value:ga(t)});continue}return}if(i==="."){if(L--,fa(t)){o.push(Ys(t));continue}return}if(i==="/"){for(;L<t.length&&(t[L]===`
`||t[L]==="	"||t[L]===" ");)L++;let r;if(fa(t)&&(r=Ys(t),r.type!==_.Hue)){o.push({type:_.Alpha,value:r});continue}if(ed(t)&&ga(t)==="none"){o.push({type:_.Alpha,value:{type:_.None,value:void 0}});continue}return}if(/\d/.test(i)){L--,o.push(Ys(t));continue}if(td.test(i)){L--,o.push(P0(t));continue}return}return o}function _0(e){e._i=0;let t=e[e._i++];if(!t||t.type!==_.Function||t.value!=="color"||(t=e[e._i++],t.type!==_.Ident))return;let o=Zc[t.value];if(!o)return;let i={mode:o},r=ou(e,!1);if(!r)return;let s=Fe(o).channels;for(let n=0,l;n<s.length;n++)l=r[n],l.type!==_.None&&(i[s[n]]=l.type===_.Number?l.value:l.value/100);return i}function ou(e,t){let o=[],i;for(;e._i<e.length;){if(i=e[e._i++],i.type===_.None||i.type===_.Number||i.type===_.Alpha||i.type===_.Percentage||t&&i.type===_.Hue){o.push(i);continue}if(i.type===_.ParenClose){if(e._i<e.length)return;continue}return}if(!(o.length<3||o.length>4)){if(o.length===4){if(o[3].type!==_.Alpha)return;o[3]=o[3].value}return o.length===3&&o.push({type:_.None,value:void 0}),o.every(r=>r.type!==_.Alpha)?o:void 0}}function H0(e,t){e._i=0;let o=e[e._i++];if(!o||o.type!==_.Function)return;let i=ou(e,t);if(i)return i.unshift(o.value),i}var z0=e=>{if(typeof e!="string")return;let t=L0(e),o=t?H0(t,!0):void 0,i,r=0,s=Xs.length;for(;r<s;)if((i=Xs[r++](e,o))!==void 0)return i;return t?_0(t):void 0},qi=z0;function B0(e,t){if(!t||t[0]!=="rgb"&&t[0]!=="rgba")return;let o={mode:"rgb"},[,i,r,s,n]=t;if(!(i.type===_.Hue||r.type===_.Hue||s.type===_.Hue))return i.type!==_.None&&(o.r=i.type===_.Number?i.value/255:i.value/100),r.type!==_.None&&(o.g=r.type===_.Number?r.value/255:r.value/100),s.type!==_.None&&(o.b=s.type===_.Number?s.value/255:s.value/100),n.type!==_.None&&(o.alpha=n.type===_.Number?n.value:n.value/100),o}var iu=B0;var V0=e=>e==="transparent"?{mode:"rgb",r:0,g:0,b:0,alpha:0}:void 0,ru=V0;var su=(e,t,o)=>e+o*(t-e);var N0=e=>{let t=[];for(let o=0;o<e.length-1;o++){let i=e[o],r=e[o+1];i===void 0&&r===void 0?t.push(void 0):i!==void 0&&r!==void 0?t.push([i,r]):t.push(i!==void 0?[i,i]:[r,r])}return t},nu=e=>t=>{let o=N0(t);return i=>{let r=i*o.length,s=i>=1?o.length-1:Math.max(Math.floor(r),0),n=o[s];return n===void 0?void 0:e(n[0],n[1],r-s)}};var ao=nu(su);var ba=e=>{let t=!1,o=e.map(i=>i!==void 0?(t=!0,i):1);return t?o:e};var G0={mode:"rgb",channels:["r","g","b","alpha"],parse:[iu,Qh,Zh,Yh,ru,"srgb"],serialize:"srgb",interpolate:{r:ao,g:ao,b:ao,alpha:{use:ao,fixup:ba}},gamut:!0},zo=G0;var od=e=>{let t=Math.abs(e);return t<=.04045?e/12.92:(Math.sign(e)||1)*Math.pow((t+.055)/1.055,2.4)},j0=({r:e,g:t,b:o,alpha:i})=>{let r={mode:"lrgb",r:od(e),g:od(t),b:od(o)};return i!==void 0&&(r.alpha=i),r},xa=j0;var id=e=>{let t=Math.abs(e);return t>.0031308?(Math.sign(e)||1)*(1.055*Math.pow(t,.4166666666666667)-.055):e*12.92},U0=({r:e,g:t,b:o,alpha:i},r="rgb")=>{let s={mode:r,r:id(e),g:id(t),b:id(o)};return i!==void 0&&(s.alpha=i),s},va=U0;var q0=e=>(e=e%360)<0?e+360:e,lo=q0;var W0=(e,t)=>e.map((o,i,r)=>{if(o===void 0)return o;let s=lo(o);return i===0||e[i-1]===void 0?s:t(s-lo(r[i-1]))}).reduce((o,i)=>!o.length||i===void 0||o[o.length-1]===void 0?(o.push(i),o):(o.push(i+o[o.length-1]),o),[]),au=e=>W0(e,t=>Math.abs(t)<=180?t:t-360*Math.sign(t));var lu=(e,t)=>{if(e.h===void 0||t.h===void 0||!e.s||!t.s)return 0;let o=lo(e.h),i=lo(t.h),r=Math.sin((i-o+360)/2*Math.PI/180);return 2*Math.sqrt(e.s*t.s)*r};var cu=e=>{let t=e.reduce((o,i)=>{if(i!==void 0){let r=i*Math.PI/180;o.sin+=Math.sin(r),o.cos+=Math.cos(r)}return o},{sin:0,cos:0});return Math.atan2(t.sin,t.cos)*180/Math.PI};function rd({h:e,s:t,l:o,alpha:i}){e=lo(e);let r=o+t*(o<.5?o:1-o),s=r-(r-o)*2*Math.abs(e/60%2-1),n;switch(Math.floor(e/60)){case 0:n={r,g:s,b:2*o-r};break;case 1:n={r:s,g:r,b:2*o-r};break;case 2:n={r:2*o-r,g:r,b:s};break;case 3:n={r:2*o-r,g:s,b:r};break;case 4:n={r:s,g:2*o-r,b:r};break;case 5:n={r,g:2*o-r,b:s};break;default:n={r:2*o-r,g:2*o-r,b:2*o-r}}return n.mode="rgb",i!==void 0&&(n.alpha=i),n}function sd({r:e,g:t,b:o,alpha:i}){let r=Math.max(e,t,o),s=Math.min(e,t,o),n={mode:"hsl",s:r===s?0:(r-s)/(1-Math.abs(r+s-1)),l:.5*(r+s)};return r-s!==0&&(n.h=(r===e?(t-o)/(r-s)+(t<o)*6:r===t?(o-e)/(r-s)+2:(e-t)/(r-s)+4)*60),i!==void 0&&(n.alpha=i),n}var K0=(e,t)=>{switch(t){case"deg":return+e;case"rad":return e/Math.PI*180;case"grad":return e/10*9;case"turn":return e*360}},du=K0;var X0=new RegExp(`^hsla?\\(\\s*${Jh}${yi}${Ui}${yi}${Ui}\\s*(?:,\\s*${Ks}\\s*)?\\)$`),Y0=e=>{let t=e.match(X0);if(!t)return;let o={mode:"hsl"};return t[3]!==void 0?o.h=+t[3]:t[1]!==void 0&&t[2]!==void 0&&(o.h=du(t[1],t[2])),t[4]!==void 0&&(o.s=Math.min(Math.max(0,t[4]/100),1)),t[5]!==void 0&&(o.l=Math.min(Math.max(0,t[5]/100),1)),t[6]!==void 0?o.alpha=t[6]/100:t[7]!==void 0&&(o.alpha=+t[7]),o},pu=Y0;function Q0(e,t){if(!t||t[0]!=="hsl"&&t[0]!=="hsla")return;let o={mode:"hsl"},[,i,r,s,n]=t;if(i.type!==_.None){if(i.type===_.Percentage)return;o.h=i.value}if(r.type!==_.None){if(r.type===_.Hue)return;o.s=r.type===_.Number?r.value:r.value/100}if(s.type!==_.None){if(s.type===_.Hue)return;o.l=s.type===_.Number?s.value:s.value/100}return n.type!==_.None&&(o.alpha=n.type===_.Number?n.value:n.value/100),o}var hu=Q0;var J0={mode:"hsl",toMode:{rgb:rd},fromMode:{rgb:sd},channels:["h","s","l","alpha"],ranges:{h:[0,360]},gamut:"rgb",parse:[hu,pu],serialize:e=>`hsl(${e.h||0} ${e.s!==void 0?e.s*100+"%":"none"} ${e.l!==void 0?e.l*100+"%":"none"}${e.alpha<1?` / ${e.alpha}`:""})`,interpolate:{h:{use:ao,fixup:au},s:ao,l:ao,alpha:{use:ao,fixup:ba}},difference:{h:lu},average:{h:cu}},uu=J0;var Z0={...zo,mode:"lrgb",toMode:{rgb:va},fromMode:{rgb:xa},parse:["srgb-linear"],serialize:"srgb-linear"},nd=Z0;var tw=({r:e,g:t,b:o,alpha:i})=>{let r=Math.cbrt(.41222147079999993*e+.5363325363*t+.0514459929*o),s=Math.cbrt(.2119034981999999*e+.6806995450999999*t+.1073969566*o),n=Math.cbrt(.08830246189999998*e+.2817188376*t+.6299787005000002*o),l={mode:"oklab",l:.2104542553*r+.793617785*s-.0040720468*n,a:1.9779984951*r-2.428592205*s+.4505937099*n,b:.0259040371*r+.7827717662*s-.808675766*n};return i!==void 0&&(l.alpha=i),l},mu=tw;var ew=e=>{let t=mu(xa(e));return e.r===e.b&&e.b===e.g&&(t.a=t.b=0),t},fu=ew;var ow=({l:e,a:t,b:o,alpha:i})=>{let r=Math.pow(e*.9999999984505198+.39633779217376786*t+.2158037580607588*o,3),s=Math.pow(e*1.0000000088817609-.10556134232365635*t-.06385417477170591*o,3),n=Math.pow(e*1.0000000546724108-.08948418209496575*t-1.2914855378640917*o,3),l={mode:"lrgb",r:4.076741661347994*r-3.307711590408193*s+.230969928729428*n,g:-1.2684380040921763*r+2.6097574006633715*s-.3413193963102197*n,b:-.004196086541837188*r-.7034186144594493*s+1.7076147009309444*n};return i!==void 0&&(l.alpha=i),l},Sa=ow;var iw=e=>va(Sa(e)),yu=iw;function gu(e){let i=1.170873786407767;return .5*(i*e-.206+Math.sqrt((i*e-.206)*(i*e-.206)+4*.03*i*e))}function bu(e){return(e*e+.206*e)/(1.170873786407767*(e+.03))}function rw(e,t){let o,i,r,s,n,l,c,p;-1.88170328*e-.80936493*t>1?(o=1.19086277,i=1.76576728,r=.59662641,s=.75515197,n=.56771245,l=4.0767416621,c=-3.3077115913,p=.2309699292):1.81444104*e-1.19445276*t>1?(o=.73956515,i=-.45954404,r=.08285427,s=.1254107,n=.14503204,l=-1.2684380046,c=2.6097574011,p=-.3413193965):(o=1.35733652,i=-.00915799,r=-1.1513021,s=-.50559606,n=.00692167,l=-.0041960863,c=-.7034186147,p=1.707614701);let d=o+i*e+r*t+s*e*e+n*e*t,u=.3963377774*e+.2158037573*t,g=-.1055613458*e-.0638541728*t,x=-.0894841775*e-1.291485548*t;{let k=1+d*u,R=1+d*g,F=1+d*x,A=k*k*k,P=R*R*R,V=F*F*F,rt=3*u*k*k,et=3*g*R*R,ot=3*x*F*F,ue=6*u*u*k,ae=6*g*g*R,Ve=6*x*x*F,Fo=l*A+c*P+p*V,io=l*rt+c*et+p*ot,me=l*ue+c*ae+p*Ve;d=d-Fo*io/(io*io-.5*Fo*me)}return d}function ad(e,t){let o=rw(e,t),i=Sa({l:1,a:o*e,b:o*t}),r=Math.cbrt(1/Math.max(i.r,i.g,i.b)),s=r*o;return[r,s]}function sw(e,t,o,i,r,s=null){s||(s=ad(e,t));let n;if((o-r)*s[1]-(s[0]-r)*i<=0)n=s[1]*r/(i*s[0]+s[1]*(r-o));else{n=s[1]*(r-1)/(i*(s[0]-1)+s[1]*(r-o));{let l=o-r,c=i,p=.3963377774*e+.2158037573*t,d=-.1055613458*e-.0638541728*t,u=-.0894841775*e-1.291485548*t,g=l+c*p,x=l+c*d,k=l+c*u;{let R=r*(1-n)+n*o,F=n*i,A=R+F*p,P=R+F*d,V=R+F*u,rt=A*A*A,et=P*P*P,ot=V*V*V,ue=3*g*A*A,ae=3*x*P*P,Ve=3*k*V*V,Fo=6*g*g*A,io=6*x*x*P,me=6*k*k*V,zs=4.0767416621*rt-3.3077115913*et+.2309699292*ot-1,Io=4.0767416621*ue-3.3077115913*ae+.2309699292*Ve,hi=4.0767416621*Fo-3.3077115913*io+.2309699292*me,Ao=Io/(Io*Io-.5*zs*hi),$o=-zs*Ao,ta=-1.2684380046*rt+2.6097574011*et-.3413193965*ot-1,Lc=-1.2684380046*ue+2.6097574011*ae-.3413193965*Ve,HS=-1.2684380046*Fo+2.6097574011*io-.3413193965*me,ph=Lc/(Lc*Lc-.5*ta*HS),_c=-ta*ph,hh=-.0041960863*rt-.7034186147*et+1.707614701*ot-1,Hc=-.0041960863*ue-.7034186147*ae+1.707614701*Ve,zS=-.0041960863*Fo-.7034186147*io+1.707614701*me,uh=Hc/(Hc*Hc-.5*hh*zS),zc=-hh*uh;$o=Ao>=0?$o:1e6,_c=ph>=0?_c:1e6,zc=uh>=0?zc:1e6,n+=Math.min($o,Math.min(_c,zc))}}}return n}function nw(e,t,o=null){o||(o=ad(e,t));let i=o[0],r=o[1];return[r/i,r/(1-i)]}function wa(e,t,o){let i=ad(t,o),r=sw(t,o,e,1,e,i),s=nw(t,o,i),n=.11516993+1/(7.4477897+4.1590124*o+t*(-2.19557347+1.75198401*o+t*(-2.13704948-10.02301043*o+t*(-4.24894561+5.38770819*o+4.69891013*t)))),l=.11239642+1/(1.6132032-.68124379*o+t*(.40370612+.90148123*o+t*(-.27087943+.6122399*o+t*(.00299215-.45399568*o-.14661872*t)))),c=r/Math.min(e*s[0],(1-e)*s[1]),p=e*n,d=(1-e)*l,u=.9*c*Math.sqrt(Math.sqrt(1/(1/(p*p*p*p)+1/(d*d*d*d))));return p=e*.4,d=(1-e)*.8,[Math.sqrt(1/(1/(p*p)+1/(d*d))),u,r]}function ka(e){let t={mode:"okhsl",l:gu(e.l)};e.alpha!==void 0&&(t.alpha=e.alpha);let o=Math.sqrt(e.a*e.a+e.b*e.b);if(!o)return t.s=0,t;let[i,r,s]=wa(e.l,e.a/o,e.b/o),n;if(o<r){let l=0,c=.8*i,p=1-c/r;n=(o-l)/(c+p*(o-l))*.8}else{let l=r,c=.2*r*r*1.25*1.25/i,p=1-c/(s-r);n=.8+.2*((o-l)/(c+p*(o-l)))}return n&&(t.s=n,t.h=lo(Math.atan2(e.b,e.a)*180/Math.PI)),t}function Ca(e){let t=bu(e.l),o={mode:"oklab",l:t};if(e.alpha!==void 0&&(o.alpha=e.alpha),!e.s||e.l===1)return o.a=o.b=0,o;let i=Math.cos(e.h/180*Math.PI),r=Math.sin(e.h/180*Math.PI),[s,n,l]=wa(t,i,r),c,p,d,u;e.s<.8?(c=1.25*e.s,p=0,d=.8*s,u=1-d/n):(c=5*(e.s-.8),p=n,d=.2*n*n*1.25*1.25/s,u=1-d/(l-n));let g=p+c*d/(1-u*c);return o.a=g*i,o.b=g*r,o}var aw={...uu,mode:"okhsl",channels:["h","s","l","alpha"],parse:["--okhsl"],serialize:"--okhsl",fromMode:{oklab:ka,rgb:e=>ka(fu(e))},toMode:{oklab:Ca,rgb:e=>yu(Ca(e))}},ld=aw;var lw=(e,t)=>Math.round(e*(t=Math.pow(10,t)))/t,cw=(e=4)=>t=>typeof t=="number"?lw(t,e):t,xu=cw;var dw=xu(2),vu=e=>Math.max(0,Math.min(1,e)),Br=e=>Math.round(vu(e)*255),Su=e=>{if(e===void 0)return;let t=Br(e.r),o=Br(e.g),i=Br(e.b);return"#"+(1<<24|t<<16|o<<8|i).toString(16).slice(1)};var wu=e=>{if(e===void 0)return;let t=e.r!==void 0?Br(e.r):"none",o=e.g!==void 0?Br(e.g):"none",i=e.b!==void 0?Br(e.b):"none";return e.alpha===void 0||e.alpha===1?`rgb(${t}, ${o}, ${i})`:`rgba(${t}, ${o}, ${i}, ${dw(vu(e.alpha))})`};var cd=e=>Su(Ft("rgb")(e));var dd=e=>wu(Ft("rgb")(e));var ku=(e,t="rgb",o=!1)=>{let i=t?Fe(t).channels:null,r=t?Ft(t):_o;return s=>{let n=r(s);if(!n)return;let l=(i||Fe(n.mode).channels).reduce((p,d)=>{let u=e(n[d],d,n,t);return u!==void 0&&!isNaN(u)&&(p[d]=u),p},{mode:n.mode});if(!o)return l;let c=_o(s);return c&&c.mode!==l.mode?Ft(c.mode)(l):l}},Cu=(e,t,o)=>t!=="alpha"?(e||0)*(o.alpha!==void 0?o.alpha:1):e,Tu=(e,t,o)=>t!=="alpha"&&o.alpha!==0?(e||0)/(o.alpha!==void 0?o.alpha:1):e;var pw=e=>{e[0]===void 0&&(e[0]=0),e[e.length-1]===void 0&&(e[e.length-1]=1);let t=1,o,i,r,s;for(;t<e.length;){if(e[t]===void 0){for(i=t,r=e[t-1],o=t;e[o]===void 0;)o++;for(s=(e[o]-r)/(o-t+1);t<o;)e[t]=r+(t+1-i)*s,t++}else e[t]<e[t-1]&&(e[t]=e[t-1]);t++}return e},Du=pw;var hw=(e=.5)=>t=>e<=0?1:e>=1?0:Math.pow(t,Math.log(.5)/Math.log(e)),Ru=hw;var Ta=e=>typeof e=="function",Wi=e=>e&&typeof e=="object",Fu=e=>typeof e=="number",Iu=(e,t="rgb",o,i)=>{let r=Fe(t),s=Ft(t),n=[],l=[],c={};e.forEach(g=>{Array.isArray(g)?(n.push(s(g[0])),l.push(g[1])):Fu(g)||Ta(g)?c[l.length]=g:(n.push(s(g)),l.push(void 0))}),Du(l);let p=r.channels.reduce((g,x)=>{let k;return Wi(o)&&Wi(o[x])&&o[x].fixup?k=o[x].fixup:Wi(r.interpolate[x])&&r.interpolate[x].fixup?k=r.interpolate[x].fixup:k=R=>R,g[x]=k(n.map(R=>R[x])),g},{});if(i){let g=n.map((x,k)=>r.channels.reduce((R,F)=>(R[F]=p[F][k],R),{mode:t}));p=r.channels.reduce((x,k)=>(x[k]=g.map(R=>{let F=i(R[k],k,R,t);return isNaN(F)?void 0:F}),x),{})}let d=r.channels.reduce((g,x)=>{let k;return Ta(o)?k=o:Wi(o)&&Ta(o[x])?k=o[x]:Wi(o)&&Wi(o[x])&&o[x].use?k=o[x].use:Ta(r.interpolate[x])?k=r.interpolate[x]:Wi(r.interpolate[x])&&(k=r.interpolate[x].use),g[x]=k(p[x]),g},{}),u=n.length-1;return g=>{if(g=Math.min(Math.max(0,g),1),g<=l[0])return n[0];if(g>l[u])return n[u];let x=0;for(;l[x]<g;)x++;let k=l[x-1],R=l[x]-k,F=(g-k)/R,A=c[x]||c[0];A!==void 0&&(Fu(A)&&(A=Ru((A-k)/R)),F=A(F));let P=(x-1+F)/u;return r.channels.reduce((V,rt)=>{let et=d[rt](P);return et!==void 0&&(V[rt]=et),V},{mode:t})}},Da=(e,t="rgb",o)=>Iu(e,t,o),Au=(e,t)=>(o,i="rgb",r)=>{let s=t?ku(t,i):void 0,n=Iu(o,i,r,e);return s?l=>s(n(l)):n},uw=Au(Cu,Tu);var mw=(e=1)=>e===1?t=>t:t=>Math.pow(t,e),$u=mw;var fw=(e=2,t=1)=>{let o=$u(t);if(e<2)return e<1?[]:[o(.5)];let i=[];for(let r=0;r<e;r++)i.push(o(r/(e-1)));return i},Ra=fw;var Ou=Ft("rgb"),Eu=e=>{let t={mode:e.mode,r:Math.max(0,Math.min(e.r,1)),g:Math.max(0,Math.min(e.g,1)),b:Math.max(0,Math.min(e.b,1))};return e.alpha!==void 0&&(t.alpha=e.alpha),t},yw=e=>Eu(Ou(e)),Mu=e=>e!==void 0&&e.r>=0&&e.r<=1&&e.g>=0&&e.g<=1&&e.b>=0&&e.b<=1;function Pu(e){return Mu(Ou(e))}function pd(e="rgb"){let{gamut:t}=Fe(e);if(!t)return i=>!0;let o=Ft(typeof t=="string"?t:e);return i=>Mu(o(i))}function Lu(e="rgb"){let{gamut:t}=Fe(e);if(!t)return s=>_o(s);let o=typeof t=="string"?t:e,i=Ft(o),r=pd(o);return s=>{let n=_o(s);if(!n)return;let l=i(n);if(r(l))return n;let c=Eu(l);return n.mode===c.mode?c:Ft(n.mode)(c)}}function hd(e,t="lch",o="rgb"){e=_o(e);let i=o==="rgb"?Pu:pd(o),r=o==="rgb"?yw:Lu(o);if(e===void 0||i(e))return e;let s=Ft(e.mode);e=Ft(t)(e);let n={...e,c:0};if(!i(n))return s(r(n));let l=0,c=e.c,p=Fe(t).ranges.c,d=(p[1]-p[0])/Math.pow(2,13),u;for(;c-l>d;)n.c=l+(c-l)*.5,i(n)?(u=n.c,l=n.c):c=n.c;return s(i(n)?n:{...n,c:u})}function ud(e){let t=Ft("lrgb")(e);return .2126*t.r+.7152*t.g+.0722*t.b}function a(e,t,o,i){var r=arguments.length,s=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,o,i);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(r<3?n(s):r>3?n(t,o,s):n(t,o))||s);return r>3&&s&&Object.defineProperty(t,o,s),s}function gi(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function bi(e,t,o,i){function r(s){return s instanceof o?s:new o(function(n){n(s)})}return new(o||(o=Promise))(function(s,n){function l(d){try{p(i.next(d))}catch(u){n(u)}}function c(d){try{p(i.throw(d))}catch(u){n(u)}}function p(d){d.done?s(d.value):r(d.value).then(l,c)}p((i=i.apply(e,t||[])).next())})}function Fa(e,t){let o=e.relativeLuminance>t.relativeLuminance?e:t,i=e.relativeLuminance>t.relativeLuminance?t:e;return(o.relativeLuminance+.05)/(i.relativeLuminance+.05)}var Qs;Ho(zo);Ho(nd);var Bo=Qs=class{constructor(t){this.contrast=Fa.bind(null,this),this.createCSS=this.toColorString,this.color=Object.freeze(t),this._relativeLuminance=ud(this.color)}get relativeLuminance(){return this._relativeLuminance}toColorString(){return this.color.alpha!==void 0&&this.color.alpha<1?dd(this.color):cd(this.color)}static from(t){let o={mode:"rgb",...t};return console.log("from",o),new Qs(o)}static fromRgb(t,o,i,r){let s={mode:"rgb",r:t,g:o,b:i,alpha:r};return console.log("fromRgb",s),new Qs(s)}static parse(t){let o=qi(t);if(o)return new Qs(o)}};Bo=Qs=a([Oo(),gi("design:paramtypes",[Object])],Bo);var _u=Ho(zo),gw={mode:"rgb",r:0,g:0,b:0},bw={mode:"rgb",r:1,g:1,b:1};function md(e,t,o){return o-t===0?0:(e-t)/(o-t)}function Hu(e,t,o){let i=md(e.r,t.r,o.r),r=md(e.g,t.g,o.g),s=md(e.b,t.b,o.b);return(i+r+s)/3}function xw(e,t){let o=gw,i=Hu(e,t,o);return i<=0&&(o=bw,i=Hu(e,t,o)),i=Math.round(i*1e3)/1e3,Object.assign({},o,{alpha:i})}var ye=class e extends Bo{constructor(t,o){super(t),this._intendedColor=o}get relativeLuminance(){return this._intendedColor?this._intendedColor.relativeLuminance:super.relativeLuminance}toTransparent(t=0){let o={...this.color};return o.alpha=t,new e(o,this)}static from(t){let o={mode:"rgb",...t};return new e(o)}static fromRgb(t,o,i,r){let s={mode:"rgb",r:t,g:o,b:i,alpha:r};return new e(s)}static fromColor(t){return new e(t.color)}static parse(t){let o=qi(t);if(o)return new e(o)}static asOverlay(t,o){let i=o._intendedColor?o._intendedColor.color:o.color,r=xw(_u(t.color),_u(i));return new e(r,t)}};var Vo=ye.fromRgb(1,1,1),xi=ye.fromRgb(0,0,0);function Js(e,t,o){let i=o?xi:Vo,r=o?Vo:xi,s=e.contrast(i),n=e.contrast(r);return s>=t?i:n>=t?r:s>n?i:r}function fd(e,t,o){let i=d=>d?Js(d,t,o):null,r=i(e.rest),s=i(e.hover),n=r&&s&&r.relativeLuminance===s.relativeLuminance?r:i(e.active),l=i(e.focus),p=i(e.disabled)?.toTransparent(.3)??null;return{rest:r,hover:s,active:n,focus:l,disabled:p}}function Ia(e,t,o=0,i=e.length-1){if(i===o)return e[o];let r=Math.floor((i-o)/2)+o;return t(e[r])?Ia(e,t,o,r):Ia(e,t,r+1,i)}var vw=(-.1+Math.sqrt(.21))/2;function zu(e){return e.relativeLuminance<=vw}function co(e){return zu(e)?No.lighter:No.darker}var No=Object.freeze({darker:1,lighter:-1});function Zs(e){return typeof e=="function"?e():e}var Aa=class{constructor(t,o){this.closestIndexCache=new Map,this.source=t,this.swatches=o,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(t,o,i,r=co(t)){i===void 0&&(i=this.closestIndexOf(t));let s=this.swatches,n=this.lastIndex,l=i,c=p=>Fa(t,p)>=o;return r===No.lighter&&(s=this.reversedSwatches,l=n-l),Ia(s,c,l,n)}delta(t,o,i){let r=Zs(i);return this.get(this.closestIndexOf(t)+r*o)}closestIndexOf(t){if(this.closestIndexCache.has(t.relativeLuminance))return this.closestIndexCache.get(t.relativeLuminance);let o=this.swatches.indexOf(t);if(o!==-1)return this.closestIndexCache.set(t.relativeLuminance,o),o;let i=this.swatches.reduce((r,s)=>Math.abs(s.relativeLuminance-t.relativeLuminance)<Math.abs(r.relativeLuminance-t.relativeLuminance)?s:r);return o=this.swatches.indexOf(i),this.closestIndexCache.set(t.relativeLuminance,o),o}clamp(t,o,i){return isNaN(t)||t<=o?o:t>=i?i:t}get(t){return this.swatches[t]||this.swatches[this.clamp(t,0,this.lastIndex)]}};function Go(e,t,o,i,r,s,n,l,c=e,p=co(t),d=!1){let u=Zs(p),g=e.closestIndexOf(t),x=e.colorContrast(t,o,g),k=e.closestIndexOf(x),R=k+u*Math.abs(i-r),F=u===No.darker?i<r:u*i>u*r,A,P;F?(A=k,P=R):(A=R,P=k);function V(rt,et){let ot=rt.get(et);return d===!0&&et===g?ot.toTransparent():ot}return{rest:V(e,A),hover:V(e,P),active:V(e,A+u*s),focus:V(e,A+u*n),disabled:V(c,g+u*l)}}function Bu(e,t,o,i=co(t)){return e.colorContrast(t,o,void 0,i)}function tn(e,t,o,i,r,s,n=o,l=e,c=co(t),p=!1){let d=e.closestIndexOf(t),u=Zs(c);function g(x,k){let R=x.get(d+u*k);return p===!0&&k===0?R.toTransparent():R}return{rest:g(e,o),hover:g(e,i),active:g(e,r),focus:g(e,s),disabled:g(l,n)}}function Vu(e,t,o,i=co(t)){return e.delta(t,o,i)}function Nu(e){return ye.fromRgb(e,e,e)}function en(e,t,o){return e&&o?ye.asOverlay(e,t):e}function Gu(e,t,o){return o?{rest:en(e.rest,t,o),hover:en(e.hover,t,o),active:en(e.active,t,o),focus:en(e.focus,t,o),disabled:en(e.disabled,t,o)}:e}var Sw=Ho(ld),ww=Ho(zo),ju=56,Ki=class e extends Aa{static from(t){let o=t instanceof Bo?t:Bo.parse(t);if(!o)throw new Error(`Unable to parse source: ${t}`);let i=Sw(o.color),r=Object.assign({},i,{l:.01}),s=Object.assign({},i,{l:.99}),n=1-i.l,l=Math.round(n*ju),c=ju-l,p=[s,i],d=[i,r],u=Da(p,"okhsl"),g=Da(d,"okhsl"),x=Ra(l).map(u),k=Ra(c).map(g),F=[...x,...k.slice(1)].map(A=>ye.from(ww(hd(A,"okhsl"))));return F[0]=Vo,F[F.length-1]=xi,new e(o,F)}};function N(e){return e?typeof e=="string"?new qe(e):"inline"in e?e.inline():e:qe.empty}function yt(e){if(typeof e=="string")return e;if(typeof e=="function"&&(e=Mt.getByType(e),!e))throw new Error("Missing FASTElement definition.");return e.name}var Q=class{};a([h({attribute:"aria-atomic"})],Q.prototype,"ariaAtomic",void 0);a([h({attribute:"aria-busy"})],Q.prototype,"ariaBusy",void 0);a([h({attribute:"aria-controls"})],Q.prototype,"ariaControls",void 0);a([h({attribute:"aria-current"})],Q.prototype,"ariaCurrent",void 0);a([h({attribute:"aria-describedby"})],Q.prototype,"ariaDescribedby",void 0);a([h({attribute:"aria-details"})],Q.prototype,"ariaDetails",void 0);a([h({attribute:"aria-disabled"})],Q.prototype,"ariaDisabled",void 0);a([h({attribute:"aria-errormessage"})],Q.prototype,"ariaErrormessage",void 0);a([h({attribute:"aria-flowto"})],Q.prototype,"ariaFlowto",void 0);a([h({attribute:"aria-haspopup"})],Q.prototype,"ariaHaspopup",void 0);a([h({attribute:"aria-hidden"})],Q.prototype,"ariaHidden",void 0);a([h({attribute:"aria-invalid"})],Q.prototype,"ariaInvalid",void 0);a([h({attribute:"aria-keyshortcuts"})],Q.prototype,"ariaKeyshortcuts",void 0);a([h({attribute:"aria-label"})],Q.prototype,"ariaLabel",void 0);a([h({attribute:"aria-labelledby"})],Q.prototype,"ariaLabelledby",void 0);a([h({attribute:"aria-live"})],Q.prototype,"ariaLive",void 0);a([h({attribute:"aria-owns"})],Q.prototype,"ariaOwns",void 0);a([h({attribute:"aria-relevant"})],Q.prototype,"ariaRelevant",void 0);a([h({attribute:"aria-roledescription"})],Q.prototype,"ariaRoledescription",void 0);var q=class{};function J(e){return m`
        <slot name="end" ${z("end")}>${N(e.end)}</slot>
    `.inline()}function Z(e){return m`
        <slot name="start" ${z("start")}>${N(e.start)}</slot>
    `.inline()}function yd(e={}){return m`
        <div
            class="heading"
            part="heading"
            role="heading"
            aria-level="${t=>t.headinglevel}"
        >
            <button
                class="button"
                part="button"
                ${z("expandbutton")}
                ?disabled="${t=>t.disabled?"true":void 0}"
                aria-expanded="${t=>t.expanded}"
                aria-controls="${t=>t.id}-panel"
                id="${t=>t.id}"
                @click="${(t,o)=>t.clickHandler(o.event)}"
            >
                <span class="heading-content" part="heading-content">
                    <slot name="heading"></slot>
                </span>
            </button>
            ${Z(e)}
            ${J(e)}
            <span class="icon" part="icon" aria-hidden="true">
                <slot name="expanded-icon">
                    ${N(e.expandedIcon)}
                </slot>
                <slot name="collapsed-icon">
                    ${N(e.collapsedIcon)}
                </slot>
            <span>
        </div>
        <div
            class="region"
            part="region"
            id="${t=>t.id}-panel"
            role="region"
            aria-labelledby="${t=>t.id}"
        >
            <slot></slot>
        </div>
`}var kt={horizontal:"horizontal",vertical:"vertical"};function Uu(e,t){let o=e.length;for(;o--;)if(t(e[o],o,e))return o;return-1}function po(...e){return e.every(t=>t instanceof HTMLElement)}function qu(e,t){return!e||!t||!po(e)?void 0:Array.from(e.querySelectorAll(t)).filter(i=>i.offsetParent!==null)}var gd="click";var bd="focus",xd="focusin",jo="focusout";var Uo="keydown";var vd="resize";var Sd="scroll";var nt="ArrowDown",Pt="ArrowLeft",Lt="ArrowRight",at="ArrowUp",Wu="Backspace",Ku="Delete",gt="End",bt="Enter",Yt="Escape",xt="Home";var Xu="F2";var $a="PageDown",Oa="PageUp";var Qt=" ",vi="Tab",Si={ArrowDown:nt,ArrowLeft:Pt,ArrowRight:Lt,ArrowUp:at};var it;(function(e){e.ltr="ltr",e.rtl="rtl"})(it||(it={}));function Yu(e,t,o){return o<e?t:o>t?e:o}function ho(e,t,o){return Math.min(Math.max(o,e),t)}function on(e,t,o=0){return[t,o]=[t,o].sort((i,r)=>i-r),t<=e&&e<o}var kw=0;function Nt(e=""){return`${e}${kw++}`}function H(e,...t){let o=Po.locate(e);t.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(e.prototype,s,Object.getOwnPropertyDescriptor(i.prototype,s))}),Po.locate(i).forEach(s=>o.push(s))})}var oe=class extends D{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.disabled=!1,this.id=Nt("accordion-"),this.clickHandler=t=>{this.disabled||this.$emit("click",t)}}};a([h({attribute:"heading-level",mode:"fromView",converter:G})],oe.prototype,"headinglevel",void 0);a([h({mode:"boolean"})],oe.prototype,"expanded",void 0);a([h({mode:"boolean"})],oe.prototype,"disabled",void 0);a([h],oe.prototype,"id",void 0);H(oe,q);var Ea={single:"single",multi:"multi"};var Xi=class extends D{constructor(){super(...arguments),this.expandmode=Ea.multi,this.activeItemIndex=0,this.change=()=>{this.$emit("change",this.activeid)},this.setItems=()=>{if(this.slottedAccordionItems.length===0)return;let t=Array.from(this.children);if(this.removeItemListeners(t),t.forEach(o=>I.getNotifier(o).subscribe(this,"disabled")),this.accordionItems=t.filter(o=>!o.hasAttribute("disabled")),this.accordionIds=this.getItemIds(),this.accordionItems.forEach((o,i)=>{o instanceof oe&&(o.addEventListener("click",this.activeItemChange),I.getNotifier(o).subscribe(this,"expanded"));let r=this.accordionIds[i];o.setAttribute("id",typeof r!="string"?`accordion-${i+1}`:r),this.activeid=this.accordionIds[this.activeItemIndex],o.addEventListener("keydown",this.handleItemKeyDown),o.addEventListener("focus",this.handleItemFocus)}),this.isSingleExpandMode()){let o=this.findExpandedItem();this.setSingleExpandMode(o)}},this.removeItemListeners=t=>{t.forEach((o,i)=>{I.getNotifier(o).unsubscribe(this,"disabled"),I.getNotifier(o).unsubscribe(this,"expanded"),o.removeEventListener("click",this.activeItemChange),o.removeEventListener("keydown",this.handleItemKeyDown),o.removeEventListener("focus",this.handleItemFocus)})},this.activeItemChange=t=>{t.defaultPrevented||t.target!==t.currentTarget||(t.preventDefault(),this.handleExpandedChange(t.target))},this.handleExpandedChange=t=>{t instanceof oe&&(this.activeid=t.getAttribute("id"),this.isSingleExpandMode()?this.setSingleExpandMode(t):(t.expanded=!t.expanded,this.activeItemIndex=this.accordionItems.indexOf(t)),this.change())},this.handleItemKeyDown=t=>{if(t.target===t.currentTarget)switch(this.accordionIds=this.getItemIds(),t.key){case at:t.preventDefault(),this.adjust(-1);break;case nt:t.preventDefault(),this.adjust(1);break;case xt:this.activeItemIndex=0,this.focusItem();break;case gt:this.activeItemIndex=this.accordionItems.length-1,this.focusItem();break}},this.handleItemFocus=t=>{if(t.target===t.currentTarget){let o=t.target,i=this.activeItemIndex=Array.from(this.accordionItems).indexOf(o);this.activeItemIndex!==i&&i!==-1&&(this.activeItemIndex=i,this.activeid=this.accordionIds[this.activeItemIndex])}}}expandmodeChanged(t,o){if(!this.$fastController.isConnected)return;let i=this.findExpandedItem();i&&(o!==Ea.single?i?.expandbutton.removeAttribute("aria-disabled"):this.setSingleExpandMode(i))}slottedAccordionItemsChanged(t,o){this.$fastController.isConnected&&this.setItems()}handleChange(t,o){o==="disabled"?this.setItems():o==="expanded"&&t.expanded&&this.isSingleExpandMode()&&this.setSingleExpandMode(t)}findExpandedItem(){var t;return this.accordionItems.length===0?null:(t=this.accordionItems.find(o=>o instanceof oe&&o.expanded))!==null&&t!==void 0?t:this.accordionItems[0]}setSingleExpandMode(t){if(this.accordionItems.length===0)return;let o=Array.from(this.accordionItems);this.activeItemIndex=o.indexOf(t),o.forEach((i,r)=>{this.activeItemIndex===r?(i.expanded=!0,i.expandbutton.setAttribute("aria-disabled","true")):(i.expanded=!1,i.hasAttribute("disabled")||i.expandbutton.removeAttribute("aria-disabled"))})}getItemIds(){return this.slottedAccordionItems.map(t=>t.id)}isSingleExpandMode(){return this.expandmode===Ea.single}adjust(t){this.activeItemIndex=Yu(0,this.accordionItems.length-1,this.activeItemIndex+t),this.focusItem()}focusItem(){let t=this.accordionItems[this.activeItemIndex];t instanceof oe&&t.expandbutton.focus()}};a([h({attribute:"expand-mode"})],Xi.prototype,"expandmode",void 0);a([f],Xi.prototype,"slottedAccordionItems",void 0);function wd(){return m`
        <template>
            <slot
                ${M({property:"slottedAccordionItems",filter:Rt()})}
            ></slot>
        </template>
    `}var Gt=class extends D{};a([h],Gt.prototype,"download",void 0);a([h],Gt.prototype,"href",void 0);a([h],Gt.prototype,"hreflang",void 0);a([h],Gt.prototype,"ping",void 0);a([h],Gt.prototype,"referrerpolicy",void 0);a([h],Gt.prototype,"rel",void 0);a([h],Gt.prototype,"target",void 0);a([h],Gt.prototype,"type",void 0);a([f],Gt.prototype,"defaultSlottedContent",void 0);var wi=class{};a([h({attribute:"aria-expanded"})],wi.prototype,"ariaExpanded",void 0);H(wi,Q);H(Gt,q,wi);function rn(e={}){return m`
        <a
            class="control"
            part="control"
            download="${t=>t.download}"
            href="${t=>t.href}"
            hreflang="${t=>t.hreflang}"
            ping="${t=>t.ping}"
            referrerpolicy="${t=>t.referrerpolicy}"
            rel="${t=>t.rel}"
            target="${t=>t.target}"
            type="${t=>t.type}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            ${z("control")}
        >
            ${Z(e)}
            <span class="content" part="content">
                <slot ${M("defaultSlottedContent")}></slot>
            </span>
            ${J(e)}
        </a>
    `}var kd={horizontalDefaultPosition:"center",horizontalPositioningMode:"locktodefault",horizontalInset:!1,horizontalScaling:"anchor"},Ma=Object.assign(Object.assign({},kd),{verticalDefaultPosition:"top",verticalPositioningMode:"locktodefault",verticalInset:!1,verticalScaling:"content"}),Pa=Object.assign(Object.assign({},kd),{verticalDefaultPosition:"bottom",verticalPositioningMode:"locktodefault",verticalInset:!1,verticalScaling:"content"}),La=Object.assign(Object.assign({},kd),{verticalPositioningMode:"dynamic",verticalInset:!1,verticalScaling:"content"}),Cd=Object.assign(Object.assign({},Ma),{verticalScaling:"fill"}),_a=Object.assign(Object.assign({},Pa),{verticalScaling:"fill"}),Td=Object.assign(Object.assign({},La),{verticalScaling:"fill"});var qo=e=>{var t;return((t=e.closest("[dir]"))===null||t===void 0?void 0:t.dir)==="rtl"?it.rtl:it.ltr};var Ha=class{constructor(){this.intersectionDetector=null,this.observedElements=new Map,this.requestPosition=(t,o)=>{var i;if(this.intersectionDetector!==null){if(this.observedElements.has(t)){(i=this.observedElements.get(t))===null||i===void 0||i.push(o);return}this.observedElements.set(t,[o]),this.intersectionDetector.observe(t)}},this.cancelRequestPosition=(t,o)=>{let i=this.observedElements.get(t);if(i!==void 0){let r=i.indexOf(o);r!==-1&&i.splice(r,1)}},this.initializeIntersectionDetector=()=>{globalThis.IntersectionObserver&&(this.intersectionDetector=new IntersectionObserver(this.handleIntersection,{root:null,rootMargin:"0px",threshold:[0,1]}))},this.handleIntersection=t=>{if(this.intersectionDetector===null)return;let o=[],i=[];t.forEach(r=>{var s;(s=this.intersectionDetector)===null||s===void 0||s.unobserve(r.target);let n=this.observedElements.get(r.target);n!==void 0&&(n.forEach(l=>{let c=o.indexOf(l);c===-1&&(c=o.length,o.push(l),i.push([])),i[c].push(r)}),this.observedElements.delete(r.target))}),o.forEach((r,s)=>{r(i[s])})},this.initializeIntersectionDetector()}};var pt=class e extends D{constructor(){super(...arguments),this.anchor="",this.viewport="",this.horizontalPositioningMode="uncontrolled",this.horizontalDefaultPosition="unset",this.horizontalViewportLock=!1,this.horizontalInset=!1,this.horizontalScaling="content",this.verticalPositioningMode="uncontrolled",this.verticalDefaultPosition="unset",this.verticalViewportLock=!1,this.verticalInset=!1,this.verticalScaling="content",this.fixedPlacement=!1,this.autoUpdateMode="anchor",this.anchorElement=null,this.viewportElement=null,this.initialLayoutComplete=!1,this.resizeDetector=null,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.pendingPositioningUpdate=!1,this.pendingReset=!1,this.currentDirection=it.ltr,this.regionVisible=!1,this.forceUpdate=!1,this.updateThreshold=.5,this.update=()=>{this.pendingPositioningUpdate||this.requestPositionUpdates()},this.startObservers=()=>{this.stopObservers(),this.anchorElement!==null&&(this.requestPositionUpdates(),this.resizeDetector!==null&&(this.resizeDetector.observe(this.anchorElement),this.resizeDetector.observe(this)))},this.requestPositionUpdates=()=>{this.anchorElement===null||this.pendingPositioningUpdate||(e.intersectionService.requestPosition(this,this.handleIntersection),e.intersectionService.requestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&e.intersectionService.requestPosition(this.viewportElement,this.handleIntersection),this.pendingPositioningUpdate=!0)},this.stopObservers=()=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,e.intersectionService.cancelRequestPosition(this,this.handleIntersection),this.anchorElement!==null&&e.intersectionService.cancelRequestPosition(this.anchorElement,this.handleIntersection),this.viewportElement!==null&&e.intersectionService.cancelRequestPosition(this.viewportElement,this.handleIntersection)),this.resizeDetector!==null&&this.resizeDetector.disconnect()},this.getViewport=()=>{if(typeof this.viewport!="string"||this.viewport==="")return document.documentElement;let t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.viewport):document.getElementById(this.viewport)},this.getAnchor=()=>{let t=this.getRootNode();return t instanceof ShadowRoot?t.getElementById(this.anchor):document.getElementById(this.anchor)},this.handleIntersection=t=>{this.pendingPositioningUpdate&&(this.pendingPositioningUpdate=!1,this.applyIntersectionEntries(t)&&this.updateLayout())},this.applyIntersectionEntries=t=>{let o=t.find(s=>s.target===this),i=t.find(s=>s.target===this.anchorElement),r=t.find(s=>s.target===this.viewportElement);return o===void 0||r===void 0||i===void 0?!1:!this.regionVisible||this.forceUpdate||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0||this.isRectDifferent(this.anchorRect,i.boundingClientRect)||this.isRectDifferent(this.viewportRect,r.boundingClientRect)||this.isRectDifferent(this.regionRect,o.boundingClientRect)?(this.regionRect=o.boundingClientRect,this.anchorRect=i.boundingClientRect,this.viewportElement===document.documentElement?this.viewportRect=new DOMRectReadOnly(r.boundingClientRect.x+document.documentElement.scrollLeft,r.boundingClientRect.y+document.documentElement.scrollTop,r.boundingClientRect.width,r.boundingClientRect.height):this.viewportRect=r.boundingClientRect,this.updateRegionOffset(),this.forceUpdate=!1,!0):!1},this.updateRegionOffset=()=>{this.anchorRect&&this.regionRect&&(this.baseHorizontalOffset=this.baseHorizontalOffset+(this.anchorRect.left-this.regionRect.left)+(this.translateX-this.baseHorizontalOffset),this.baseVerticalOffset=this.baseVerticalOffset+(this.anchorRect.top-this.regionRect.top)+(this.translateY-this.baseVerticalOffset))},this.isRectDifferent=(t,o)=>Math.abs(t.top-o.top)>this.updateThreshold||Math.abs(t.right-o.right)>this.updateThreshold||Math.abs(t.bottom-o.bottom)>this.updateThreshold||Math.abs(t.left-o.left)>this.updateThreshold,this.handleResize=t=>{this.update()},this.reset=()=>{this.pendingReset&&(this.pendingReset=!1,this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.viewportElement===null&&(this.viewportElement=this.getViewport()),this.currentDirection=qo(this),this.startObservers())},this.updateLayout=()=>{let t,o;if(this.horizontalPositioningMode!=="uncontrolled"){let s=this.getPositioningOptions(this.horizontalInset);if(this.horizontalDefaultPosition==="center")o="center";else if(this.horizontalDefaultPosition!=="unset"){let g=this.horizontalDefaultPosition;if(g==="start"||g==="end"){let x=qo(this);if(x!==this.currentDirection){this.currentDirection=x,this.initialize();return}this.currentDirection===it.ltr?g=g==="start"?"left":"right":g=g==="start"?"right":"left"}switch(g){case"left":o=this.horizontalInset?"insetStart":"start";break;case"right":o=this.horizontalInset?"insetEnd":"end";break}}let n=this.horizontalThreshold!==void 0?this.horizontalThreshold:this.regionRect!==void 0?this.regionRect.width:0,l=this.anchorRect!==void 0?this.anchorRect.left:0,c=this.anchorRect!==void 0?this.anchorRect.right:0,p=this.anchorRect!==void 0?this.anchorRect.width:0,d=this.viewportRect!==void 0?this.viewportRect.left:0,u=this.viewportRect!==void 0?this.viewportRect.right:0;(o===void 0||this.horizontalPositioningMode!=="locktodefault"&&this.getAvailableSpace(o,l,c,p,d,u)<n)&&(o=this.getAvailableSpace(s[0],l,c,p,d,u)>this.getAvailableSpace(s[1],l,c,p,d,u)?s[0]:s[1])}if(this.verticalPositioningMode!=="uncontrolled"){let s=this.getPositioningOptions(this.verticalInset);if(this.verticalDefaultPosition==="center")t="center";else if(this.verticalDefaultPosition!=="unset")switch(this.verticalDefaultPosition){case"top":t=this.verticalInset?"insetStart":"start";break;case"bottom":t=this.verticalInset?"insetEnd":"end";break}let n=this.verticalThreshold!==void 0?this.verticalThreshold:this.regionRect!==void 0?this.regionRect.height:0,l=this.anchorRect!==void 0?this.anchorRect.top:0,c=this.anchorRect!==void 0?this.anchorRect.bottom:0,p=this.anchorRect!==void 0?this.anchorRect.height:0,d=this.viewportRect!==void 0?this.viewportRect.top:0,u=this.viewportRect!==void 0?this.viewportRect.bottom:0;(t===void 0||this.verticalPositioningMode!=="locktodefault"&&this.getAvailableSpace(t,l,c,p,d,u)<n)&&(t=this.getAvailableSpace(s[0],l,c,p,d,u)>this.getAvailableSpace(s[1],l,c,p,d,u)?s[0]:s[1])}let i=this.getNextRegionDimension(o,t),r=this.horizontalPosition!==o||this.verticalPosition!==t;if(this.setHorizontalPosition(o,i),this.setVerticalPosition(t,i),this.updateRegionStyle(),!this.initialLayoutComplete){this.initialLayoutComplete=!0,this.requestPositionUpdates();return}this.regionVisible||(this.regionVisible=!0,this.style.removeProperty("pointer-events"),this.style.removeProperty("opacity"),this.classList.toggle("loaded",!0),this.$emit("loaded",this,{bubbles:!1})),this.updatePositionClasses(),r&&this.$emit("positionchange",this,{bubbles:!1})},this.updateRegionStyle=()=>{this.style.width=this.regionWidth,this.style.height=this.regionHeight,this.style.transform=`translate(${this.translateX}px, ${this.translateY}px)`},this.updatePositionClasses=()=>{this.classList.toggle("top",this.verticalPosition==="start"),this.classList.toggle("bottom",this.verticalPosition==="end"),this.classList.toggle("inset-top",this.verticalPosition==="insetStart"),this.classList.toggle("inset-bottom",this.verticalPosition==="insetEnd"),this.classList.toggle("vertical-center",this.verticalPosition==="center"),this.classList.toggle("left",this.horizontalPosition==="start"),this.classList.toggle("right",this.horizontalPosition==="end"),this.classList.toggle("inset-left",this.horizontalPosition==="insetStart"),this.classList.toggle("inset-right",this.horizontalPosition==="insetEnd"),this.classList.toggle("horizontal-center",this.horizontalPosition==="center")},this.setHorizontalPosition=(t,o)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.horizontalScaling){case"anchor":case"fill":i=this.horizontalViewportLock?this.viewportRect.width:o.width,this.regionWidth=`${i}px`;break;case"content":i=this.regionRect.width,this.regionWidth="unset";break}let r=0;switch(t){case"start":this.translateX=this.baseHorizontalOffset-i,this.horizontalViewportLock&&this.anchorRect.left>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.right));break;case"insetStart":this.translateX=this.baseHorizontalOffset-i+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right>this.viewportRect.right&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.right));break;case"insetEnd":this.translateX=this.baseHorizontalOffset,this.horizontalViewportLock&&this.anchorRect.left<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.left-this.viewportRect.left));break;case"end":this.translateX=this.baseHorizontalOffset+this.anchorRect.width,this.horizontalViewportLock&&this.anchorRect.right<this.viewportRect.left&&(this.translateX=this.translateX-(this.anchorRect.right-this.viewportRect.left));break;case"center":if(r=(this.anchorRect.width-i)/2,this.translateX=this.baseHorizontalOffset+r,this.horizontalViewportLock){let s=this.anchorRect.left+r,n=this.anchorRect.right-r;s<this.viewportRect.left&&!(n>this.viewportRect.right)?this.translateX=this.translateX-(s-this.viewportRect.left):n>this.viewportRect.right&&!(s<this.viewportRect.left)&&(this.translateX=this.translateX-(n-this.viewportRect.right))}break}this.horizontalPosition=t},this.setVerticalPosition=(t,o)=>{if(t===void 0||this.regionRect===void 0||this.anchorRect===void 0||this.viewportRect===void 0)return;let i=0;switch(this.verticalScaling){case"anchor":case"fill":i=this.verticalViewportLock?this.viewportRect.height:o.height,this.regionHeight=`${i}px`;break;case"content":i=this.regionRect.height,this.regionHeight="unset";break}let r=0;switch(t){case"start":this.translateY=this.baseVerticalOffset-i,this.verticalViewportLock&&this.anchorRect.top>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.bottom));break;case"insetStart":this.translateY=this.baseVerticalOffset-i+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom>this.viewportRect.bottom&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.bottom));break;case"insetEnd":this.translateY=this.baseVerticalOffset,this.verticalViewportLock&&this.anchorRect.top<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.top-this.viewportRect.top));break;case"end":this.translateY=this.baseVerticalOffset+this.anchorRect.height,this.verticalViewportLock&&this.anchorRect.bottom<this.viewportRect.top&&(this.translateY=this.translateY-(this.anchorRect.bottom-this.viewportRect.top));break;case"center":if(r=(this.anchorRect.height-i)/2,this.translateY=this.baseVerticalOffset+r,this.verticalViewportLock){let s=this.anchorRect.top+r,n=this.anchorRect.bottom-r;s<this.viewportRect.top&&!(n>this.viewportRect.bottom)?this.translateY=this.translateY-(s-this.viewportRect.top):n>this.viewportRect.bottom&&!(s<this.viewportRect.top)&&(this.translateY=this.translateY-(n-this.viewportRect.bottom))}}this.verticalPosition=t},this.getPositioningOptions=t=>t?["insetStart","insetEnd"]:["start","end"],this.getAvailableSpace=(t,o,i,r,s,n)=>{let l=o-s,c=n-(o+r);switch(t){case"start":return l;case"insetStart":return l+r;case"insetEnd":return c+r;case"end":return c;case"center":return Math.min(l,c)*2+r}},this.getNextRegionDimension=(t,o)=>{let i={height:this.regionRect!==void 0?this.regionRect.height:0,width:this.regionRect!==void 0?this.regionRect.width:0};return t!==void 0&&this.horizontalScaling==="fill"?i.width=this.getAvailableSpace(t,this.anchorRect!==void 0?this.anchorRect.left:0,this.anchorRect!==void 0?this.anchorRect.right:0,this.anchorRect!==void 0?this.anchorRect.width:0,this.viewportRect!==void 0?this.viewportRect.left:0,this.viewportRect!==void 0?this.viewportRect.right:0):this.horizontalScaling==="anchor"&&(i.width=this.anchorRect!==void 0?this.anchorRect.width:0),o!==void 0&&this.verticalScaling==="fill"?i.height=this.getAvailableSpace(o,this.anchorRect!==void 0?this.anchorRect.top:0,this.anchorRect!==void 0?this.anchorRect.bottom:0,this.anchorRect!==void 0?this.anchorRect.height:0,this.viewportRect!==void 0?this.viewportRect.top:0,this.viewportRect!==void 0?this.viewportRect.bottom:0):this.verticalScaling==="anchor"&&(i.height=this.anchorRect!==void 0?this.anchorRect.height:0),i},this.startAutoUpdateEventListeners=()=>{window.addEventListener(vd,this.update,{passive:!0}),window.addEventListener(Sd,this.update,{passive:!0,capture:!0}),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.observe(this.viewportElement)},this.stopAutoUpdateEventListeners=()=>{window.removeEventListener(vd,this.update),window.removeEventListener(Sd,this.update),this.resizeDetector!==null&&this.viewportElement!==null&&this.resizeDetector.unobserve(this.viewportElement)}}anchorChanged(){this.initialLayoutComplete&&(this.anchorElement=this.getAnchor())}viewportChanged(){this.initialLayoutComplete&&(this.viewportElement=this.getViewport())}horizontalPositioningModeChanged(){this.requestReset()}horizontalDefaultPositionChanged(){this.updateForAttributeChange()}horizontalViewportLockChanged(){this.updateForAttributeChange()}horizontalInsetChanged(){this.updateForAttributeChange()}horizontalThresholdChanged(){this.updateForAttributeChange()}horizontalScalingChanged(){this.updateForAttributeChange()}verticalPositioningModeChanged(){this.requestReset()}verticalDefaultPositionChanged(){this.updateForAttributeChange()}verticalViewportLockChanged(){this.updateForAttributeChange()}verticalInsetChanged(){this.updateForAttributeChange()}verticalThresholdChanged(){this.updateForAttributeChange()}verticalScalingChanged(){this.updateForAttributeChange()}fixedPlacementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}autoUpdateModeChanged(t,o){this.$fastController.isConnected&&this.initialLayoutComplete&&(t==="auto"&&this.stopAutoUpdateEventListeners(),o==="auto"&&this.startAutoUpdateEventListeners())}anchorElementChanged(){this.requestReset()}viewportElementChanged(){this.$fastController.isConnected&&this.initialLayoutComplete&&this.initialize()}connectedCallback(){super.connectedCallback(),this.autoUpdateMode==="auto"&&this.startAutoUpdateEventListeners(),this.initialize()}disconnectedCallback(){super.disconnectedCallback(),this.autoUpdateMode==="auto"&&this.stopAutoUpdateEventListeners(),this.stopObservers(),this.disconnectResizeDetector()}adoptedCallback(){this.initialize()}disconnectResizeDetector(){this.resizeDetector!==null&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.handleResize)}updateForAttributeChange(){this.$fastController.isConnected&&this.initialLayoutComplete&&(this.forceUpdate=!0,this.update())}initialize(){this.initializeResizeDetector(),this.anchorElement===null&&(this.anchorElement=this.getAnchor()),this.requestReset()}requestReset(){this.$fastController.isConnected&&this.pendingReset===!1&&(this.setInitialState(),$.enqueue(()=>this.reset()),this.pendingReset=!0)}setInitialState(){this.initialLayoutComplete=!1,this.regionVisible=!1,this.translateX=0,this.translateY=0,this.baseHorizontalOffset=0,this.baseVerticalOffset=0,this.viewportRect=void 0,this.regionRect=void 0,this.anchorRect=void 0,this.verticalPosition=void 0,this.horizontalPosition=void 0,this.style.opacity="0",this.style.pointerEvents="none",this.forceUpdate=!1,this.style.position=this.fixedPlacement?"fixed":"absolute",this.updatePositionClasses(),this.updateRegionStyle()}};pt.intersectionService=new Ha;a([h],pt.prototype,"anchor",void 0);a([h],pt.prototype,"viewport",void 0);a([h({attribute:"horizontal-positioning-mode"})],pt.prototype,"horizontalPositioningMode",void 0);a([h({attribute:"horizontal-default-position"})],pt.prototype,"horizontalDefaultPosition",void 0);a([h({attribute:"horizontal-viewport-lock",mode:"boolean"})],pt.prototype,"horizontalViewportLock",void 0);a([h({attribute:"horizontal-inset",mode:"boolean"})],pt.prototype,"horizontalInset",void 0);a([h({attribute:"horizontal-threshold"})],pt.prototype,"horizontalThreshold",void 0);a([h({attribute:"horizontal-scaling"})],pt.prototype,"horizontalScaling",void 0);a([h({attribute:"vertical-positioning-mode"})],pt.prototype,"verticalPositioningMode",void 0);a([h({attribute:"vertical-default-position"})],pt.prototype,"verticalDefaultPosition",void 0);a([h({attribute:"vertical-viewport-lock",mode:"boolean"})],pt.prototype,"verticalViewportLock",void 0);a([h({attribute:"vertical-inset",mode:"boolean"})],pt.prototype,"verticalInset",void 0);a([h({attribute:"vertical-threshold"})],pt.prototype,"verticalThreshold",void 0);a([h({attribute:"vertical-scaling"})],pt.prototype,"verticalScaling",void 0);a([h({attribute:"fixed-placement",mode:"boolean"})],pt.prototype,"fixedPlacement",void 0);a([h({attribute:"auto-update-mode"})],pt.prototype,"autoUpdateMode",void 0);a([f],pt.prototype,"anchorElement",void 0);a([f],pt.prototype,"viewportElement",void 0);a([f],pt.prototype,"initialLayoutComplete",void 0);function Dd(){return m`
        <template data-loaded="${e=>e.initialLayoutComplete?"loaded":""}">
            ${X(e=>e.initialLayoutComplete,m`
                    <slot></slot>
                `)}
        </template>
    `}function Rd(e={}){return m`
        <div class="backplate" part="backplate">
            <slot name="media">${N(e.media)}</slot>
            <slot></slot>
        </div>
        <slot name="badge"></slot>
    `}var sn=class extends D{};function Fd(){return m`
        <div class="control" part="control">
            <slot></slot>
        </div>
    `}var nn=class extends D{};function Id(e={}){return m`
        <div role="listitem" class="listitem" part="listitem">
            ${rn(e).inline()}
            ${X(t=>t.separator,m`
                    <span class="separator" part="separator" aria-hidden="true">
                        <slot name="separator">
                            ${N(e.separator)}
                        </slot>
                    </span>
                `)}
        </div>
    `}var Wo=class extends Gt{constructor(){super(...arguments),this.separator=!0}};a([f],Wo.prototype,"separator",void 0);H(Wo,q,wi);function Ad(){return m`
        <template role="navigation">
            <div role="list" class="list" part="list">
                <slot
                    ${M({property:"slottedBreadcrumbItems",filter:Rt()})}
                ></slot>
            </div>
        </template>
    `}var Vr=class extends D{slottedBreadcrumbItemsChanged(){if(this.$fastController.isConnected){if(this.slottedBreadcrumbItems===void 0||this.slottedBreadcrumbItems.length===0)return;let t=this.slottedBreadcrumbItems[this.slottedBreadcrumbItems.length-1];this.slottedBreadcrumbItems.forEach(o=>{let i=o===t;this.setItemSeparator(o,i),this.setAriaCurrent(o,i)})}}setItemSeparator(t,o){t instanceof Wo&&(t.separator=!o)}findChildAnchor(t){var o,i;return t.childElementCount>0?t.querySelector("a"):!((o=t.shadowRoot)===null||o===void 0)&&o.childElementCount?(i=t.shadowRoot)===null||i===void 0?void 0:i.querySelector("a"):t}setAriaCurrent(t,o){let i=this.findChildAnchor(t);i!==null&&(o?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current"))}};a([f],Vr.prototype,"slottedBreadcrumbItems",void 0);var Qu="form-associated-proxy",Ju="ElementInternals",Zu=Ju in window&&"setFormValue"in window[Ju].prototype,tm=new WeakMap;function It(e){let t=class extends e{constructor(...o){super(...o),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Zu}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let o=this.proxy.labels,i=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=o?i.concat(Array.from(o)):i;return Object.freeze(r)}else return Ne}valueChanged(o,i){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(o,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(o,i){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),$.enqueue(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(o,i){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(o,i){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),$.enqueue(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Zu)return null;let o=tm.get(this);return o||(o=this.attachInternals(),tm.set(this,o)),o}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(o=>this.proxy.removeEventListener(o,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(o,i,r){this.elementInternals?this.elementInternals.setValidity(o,i,r):typeof i=="string"&&this.proxy.setCustomValidity(i)}formDisabledCallback(o){this.disabled=o}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var o;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(i=>this.proxy.addEventListener(i,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Qu),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Qu)),(o=this.shadowRoot)===null||o===void 0||o.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var o;this.removeChild(this.proxy),(o=this.shadowRoot)===null||o===void 0||o.removeChild(this.proxySlot)}validate(o){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,o)}setFormValue(o,i){this.elementInternals&&this.elementInternals.setFormValue(o,i||o)}_keypressHandler(o){switch(o.key){case bt:if(this.form instanceof HTMLFormElement){let i=this.form.querySelector("[type=submit]");i?.click()}break}}stopPropagation(o){o.stopPropagation()}};return h({mode:"boolean"})(t.prototype,"disabled"),h({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),h({attribute:"current-value"})(t.prototype,"currentValue"),h(t.prototype,"name"),h({mode:"boolean"})(t.prototype,"required"),f(t.prototype,"value"),t}function Nr(e){class t extends It(e){}class o extends t{constructor(...r){super(r),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(r,s){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),r!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(r,s){this.checked=this.currentChecked}updateForm(){let r=this.checked?this.value:null;this.setFormValue(r,r)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return h({attribute:"checked",mode:"boolean"})(o.prototype,"checkedAttribute"),h({attribute:"current-checked",converter:Lo})(o.prototype,"currentChecked"),f(o.prototype,"defaultChecked"),f(o.prototype,"checked"),o}var $d=class extends D{},za=class extends It($d){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var an={submit:"submit",reset:"reset",button:"button"};var ie=class extends za{constructor(){super(...arguments),this.handleSubmission=()=>{if(!this.form)return;let t=this.proxy.isConnected;t||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),t||this.detachProxy()},this.handleFormReset=()=>{var t;(t=this.form)===null||t===void 0||t.reset()}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(t,o){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),o===an.submit&&this.addEventListener("click",this.handleSubmission),t===an.submit&&this.removeEventListener("click",this.handleSubmission),o===an.reset&&this.addEventListener("click",this.handleFormReset),t===an.reset&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type)}};a([h({mode:"boolean"})],ie.prototype,"autofocus",void 0);a([h({attribute:"form"})],ie.prototype,"formId",void 0);a([h],ie.prototype,"formaction",void 0);a([h],ie.prototype,"formenctype",void 0);a([h],ie.prototype,"formmethod",void 0);a([h({mode:"boolean"})],ie.prototype,"formnovalidate",void 0);a([h],ie.prototype,"formtarget",void 0);a([h],ie.prototype,"type",void 0);a([f],ie.prototype,"defaultSlottedContent",void 0);var Yi=class{};a([h({attribute:"aria-expanded"})],Yi.prototype,"ariaExpanded",void 0);a([h({attribute:"aria-pressed"})],Yi.prototype,"ariaPressed",void 0);H(Yi,Q);H(ie,q,Yi);function Od(e={}){return m`
        <button
            class="control"
            part="control"
            ?autofocus="${t=>t.autofocus}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.formId}"
            formaction="${t=>t.formaction}"
            formenctype="${t=>t.formenctype}"
            formmethod="${t=>t.formmethod}"
            ?formnovalidate="${t=>t.formnovalidate}"
            formtarget="${t=>t.formtarget}"
            name="${t=>t.name}"
            type="${t=>t.type}"
            value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-pressed="${t=>t.ariaPressed}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            ${z("control")}
        >
            ${Z(e)}
            <span class="content" part="content">
                <slot ${M("defaultSlottedContent")}></slot>
            </span>
            ${J(e)}
        </button>
    `}var Ba={"2-digit":"2-digit",numeric:"numeric"},Va={long:"long",narrow:"narrow",short:"short"},Na={"2-digit":"2-digit",numeric:"numeric",short:"short",long:"long",narrow:"narrow"},Ga={"2-digit":"2-digit",numeric:"numeric"};var ja=class{constructor(t){if(this.dayFormat=Ba.numeric,this.weekdayFormat=Va.long,this.monthFormat=Na.long,this.yearFormat=Ga.numeric,this.date=new Date,t)for(let o in t){let i=t[o];o==="date"?this.date=this.getDateObject(i):this[o]=i}}getDateObject(t){if(typeof t=="string"){let o=t.split(/[/-]/);return o.length<3?new Date:new Date(parseInt(o[2],10),parseInt(o[0],10)-1,parseInt(o[1],10))}else if("day"in t&&"month"in t&&"year"in t){let{day:o,month:i,year:r}=t;return new Date(r,i-1,o)}return t}getDate(t=this.date,o={weekday:this.weekdayFormat,month:this.monthFormat,day:this.dayFormat,year:this.yearFormat},i=this.locale){let r=this.getDateObject(t);if(!r.getTime())return"";let s=Object.assign({timeZone:Intl.DateTimeFormat().resolvedOptions().timeZone},o);return new Intl.DateTimeFormat(i,s).format(r)}getDay(t=this.date.getDate(),o=this.dayFormat,i=this.locale){return this.getDate({month:1,day:t,year:2020},{day:o},i)}getMonth(t=this.date.getMonth()+1,o=this.monthFormat,i=this.locale){return this.getDate({month:t,day:2,year:2020},{month:o},i)}getYear(t=this.date.getFullYear(),o=this.yearFormat,i=this.locale){return this.getDate({month:2,day:2,year:t},{year:o},i)}getWeekday(t=0,o=this.weekdayFormat,i=this.locale){let r=`1-${t+1}-2017`;return this.getDate(r,{weekday:o},i)}getWeekdays(t=this.weekdayFormat,o=this.locale){return Array(7).fill(null).map((i,r)=>this.getWeekday(r,t,o))}};var _t=class extends D{constructor(){super(...arguments),this.dateFormatter=new ja,this.readonly=!1,this.locale="en-US",this.firstDay=0,this.month=new Date().getMonth()+1,this.year=new Date().getFullYear(),this.dayFormat=Ba.numeric,this.weekdayFormat=Va.short,this.monthFormat=Na.long,this.yearFormat=Ga.numeric,this.minWeeks=0,this.disabledDates="",this.selectedDates="",this.oneDayInMs=864e5}localeChanged(){this.dateFormatter.locale=this.locale}dayFormatChanged(){this.dateFormatter.dayFormat=this.dayFormat}weekdayFormatChanged(){this.dateFormatter.weekdayFormat=this.weekdayFormat}monthFormatChanged(){this.dateFormatter.monthFormat=this.monthFormat}yearFormatChanged(){this.dateFormatter.yearFormat=this.yearFormat}getMonthInfo(t=this.month,o=this.year){let i=c=>new Date(c.getFullYear(),c.getMonth(),1).getDay(),r=c=>{let p=new Date(c.getFullYear(),c.getMonth()+1,1);return new Date(p.getTime()-this.oneDayInMs).getDate()},s=new Date(o,t-1),n=new Date(o,t),l=new Date(o,t-2);return{length:r(s),month:t,start:i(s),year:o,previous:{length:r(l),month:l.getMonth()+1,start:i(l),year:l.getFullYear()},next:{length:r(n),month:n.getMonth()+1,start:i(n),year:n.getFullYear()}}}getDays(t=this.getMonthInfo(),o=this.minWeeks){o=o>10?10:o;let{length:i,previous:r,next:s}=t,n=t.start-Math.min(Math.max(0,this.firstDay),6);n=n<0?7+n:n;let l=[],c=1-n;for(;c<i+1||l.length<o||l[l.length-1].length%7!==0;){let{month:p,year:d}=c<1?r:c>i?s:t,u=c<1?r.length+c:c>i?c-i:c,g=`${p}-${u}-${d}`,x=this.dateInString(g,this.disabledDates),k=this.dateInString(g,this.selectedDates),R={day:u,month:p,year:d,disabled:x,selected:k},F=l[l.length-1];l.length===0||F.length%7===0?l.push([R]):F.push(R),c++}return l}dateInString(t,o){let i=o.split(",").map(r=>r.trim());return t=typeof t=="string"?t:`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`,i.some(r=>r===t)}getDayClassNames(t,o){let{day:i,month:r,year:s,disabled:n,selected:l}=t,c=o===`${r}-${i}-${s}`,p=this.month!==r;return["day",c&&"today",p&&"inactive",n&&"disabled",l&&"selected"].filter(Boolean).join(" ")}getWeekdayText(){let t=this.dateFormatter.getWeekdays().map(i=>({text:i}));if(this.weekdayFormat!=="long"){let i=this.dateFormatter.getWeekdays("long");t.forEach((r,s)=>{r.abbr=i[s]})}let o=Math.min(Math.max(0,this.firstDay),6);return[...t.slice(o),...t.slice(0,o)]}handleDateSelect(t,o){t.preventDefault,this.$emit("dateselected",o)}handleKeydown(t,o){return t.key===bt&&this.handleDateSelect(t,o),!0}};a([h({mode:"boolean"})],_t.prototype,"readonly",void 0);a([h],_t.prototype,"locale",void 0);a([h({attribute:"first-day",converter:G})],_t.prototype,"firstDay",void 0);a([h({converter:G})],_t.prototype,"month",void 0);a([h({converter:G})],_t.prototype,"year",void 0);a([h({attribute:"day-format",mode:"fromView"})],_t.prototype,"dayFormat",void 0);a([h({attribute:"weekday-format",mode:"fromView"})],_t.prototype,"weekdayFormat",void 0);a([h({attribute:"month-format",mode:"fromView"})],_t.prototype,"monthFormat",void 0);a([h({attribute:"year-format",mode:"fromView"})],_t.prototype,"yearFormat",void 0);a([h({attribute:"min-weeks",converter:G})],_t.prototype,"minWeeks",void 0);a([h({attribute:"disabled-dates"})],_t.prototype,"disabledDates",void 0);a([h({attribute:"selected-dates"})],_t.prototype,"selectedDates",void 0);H(_t,q);function Ed(){return m`
        <div
            class="title"
            part="title"
            aria-label="${e=>e.dateFormatter.getDate(`${e.month}-2-${e.year}`,{month:"long",year:"numeric"})}"
        >
            <span part="month">${e=>e.dateFormatter.getMonth(e.month)}</span>
            <span part="year">${e=>e.dateFormatter.getYear(e.year)}</span>
        </div>
    `}function em(e){let t=m.partial(yt(e.dataGridCell));return m`
        <${t}
            class="week-day"
            part="week-day"
            tabindex="-1"
            grid-column="${(o,i)=>i.index+1}"
            abbr="${o=>o.abbr}"
        >
            ${o=>o.text}
        </${t}>
    `}function om(e,t){let o=m.partial(yt(e.dataGridCell));return m`
        <${o}
            class="${(i,r)=>r.parentContext.parent.getDayClassNames(i,t)}"
            part="day"
            tabindex="-1"
            role="gridcell"
            grid-column="${(i,r)=>r.index+1}"
            @click="${(i,r)=>r.parentContext.parent.handleDateSelect(r.event,i)}"
            @keydown="${(i,r)=>r.parentContext.parent.handleKeydown(r.event,i)}"
            aria-label="${(i,r)=>r.parentContext.parent.dateFormatter.getDate(`${i.month}-${i.day}-${i.year}`,{month:"long",day:"numeric"})}"
        >
            <div
                class="date"
                part="${i=>t===`${i.month}-${i.day}-${i.year}`?"today":"date"}"
            >
                ${(i,r)=>r.parentContext.parent.dateFormatter.getDay(i.day)}
            </div>
            <slot name="${i=>i.month}-${i=>i.day}-${i=>i.year}"></slot>
        </${o}>
    `}function im(e,t){let o=m.partial(yt(e.dataGridRow));return m`
        <${o}
            class="week"
            part="week"
            role="row"
            role-type="default"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
        ${fi(i=>i,om(e,t),{positioning:!0})}
        </${o}>
    `}function rm(e,t){let o=m.partial(yt(e.dataGrid)),i=m.partial(yt(e.dataGridRow));return m`
    <${o} class="days interact" part="days" generate-header="none">
        <${i}
            class="week-days"
            part="week-days"
            role="row"
            row-type="header"
            grid-template-columns="1fr 1fr 1fr 1fr 1fr 1fr 1fr"
        >
            ${fi(r=>r.getWeekdayText(),em(e),{positioning:!0})}
        </${i}>
        ${fi(r=>r.getDays(),im(e,t))}
    </${o}>
    `}function sm(e,t){return m`
        <div class="days" part="days">
            <div class="week-days" part="week-days">
                ${fi(o=>o.getWeekdayText(),m`
                        <div class="week-day" part="week-day" abbr="${o=>o.abbr}">
                            ${o=>o.text}
                        </div>
                    `)}
            </div>
            ${fi(o=>o.getDays(),m`
                    <div class="week">
                        ${fi(o=>o,m`
                                <div
                                    class="${(o,i)=>i.parentContext.parent.getDayClassNames(o,t)}"
                                    part="day"
                                    aria-label="${(o,i)=>i.parentContext.parent.dateFormatter.getDate(`${o.month}-${o.day}-${o.year}`,{month:"long",day:"numeric"})}"
                                >
                                    <div
                                        class="date"
                                        part="${o=>t===`${o.month}-${o.day}-${o.year}`?"today":"date"}"
                                    >
                                        ${(o,i)=>i.parentContext.parent.dateFormatter.getDay(o.day)}
                                    </div>
                                    <slot
                                        name="${o=>o.month}-${o=>o.day}-${o=>o.year}"
                                    ></slot>
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `}function Md(e){let t=new Date,o=`${t.getMonth()+1}-${t.getDate()}-${t.getFullYear()}`;return m`
        ${Z(e)} ${N(e.title)}
        <slot></slot>
        ${X(i=>i.readonly,sm(e,o),rm(e,o))}
        ${J(e)}
    `}function Pd(){return m`
        <slot></slot>
    `}var ln=class extends D{};function Ld(e={}){return m`
        <template
            role="checkbox"
            aria-checked="${t=>t.indeterminate?"mixed":t.checked}"
            aria-required="${t=>t.required}"
            aria-disabled="${t=>t.disabled}"
            tabindex="${t=>t.disabled?null:0}"
            @keypress="${(t,o)=>t.keypressHandler(o.event)}"
            @click="${(t,o)=>t.clickHandler(o.event)}"
        >
            <div part="control" class="control">
                <slot name="checked-indicator">
                    ${N(e.checkedIndicator)}
                </slot>
                <slot name="indeterminate-indicator">
                    ${N(e.indeterminateIndicator)}
                </slot>
            </div>
            <label
                part="label"
                class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
            >
                <slot ${M("defaultSlottedNodes")}></slot>
            </label>
        </template>
    `}var _d=class extends D{},Ua=class extends Nr(_d){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Qi=class extends Ua{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=t=>{if(!this.disabled)switch(t.key){case Qt:this.toggleChecked();break}},this.clickHandler=t=>{this.disabled||this.toggleChecked()},this.proxy.setAttribute("type","checkbox")}toggleChecked(){this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked}};a([f],Qi.prototype,"defaultSlottedNodes",void 0);a([f],Qi.prototype,"indeterminate",void 0);var nm=["top","right","bottom","left"];var ki=Math.min,re=Math.max,dn=Math.round,pn=Math.floor,Ko=e=>({x:e,y:e}),Cw={left:"right",right:"left",bottom:"top",top:"bottom"},Tw={start:"end",end:"start"};function Hd(e,t,o){return re(e,ki(t,o))}function Gr(e,t){return typeof e=="function"?e(t):e}function Ci(e){return e.split("-")[0]}function hn(e){return e.split("-")[1]}function zd(e){return e==="x"?"y":"x"}function Bd(e){return e==="y"?"height":"width"}function un(e){return["top","bottom"].includes(Ci(e))?"y":"x"}function Vd(e){return zd(un(e))}function am(e,t,o){o===void 0&&(o=!1);let i=hn(e),r=Vd(e),s=Bd(r),n=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(n=cn(n)),[n,cn(n)]}function lm(e){let t=cn(e);return[qa(e),t,qa(t)]}function qa(e){return e.replace(/start|end/g,t=>Tw[t])}function Dw(e,t,o){let i=["left","right"],r=["right","left"],s=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return o?t?r:i:t?i:r;case"left":case"right":return t?s:n;default:return[]}}function cm(e,t,o,i){let r=hn(e),s=Dw(Ci(e),o==="start",i);return r&&(s=s.map(n=>n+"-"+r),t&&(s=s.concat(s.map(qa)))),s}function cn(e){return e.replace(/left|right|bottom|top/g,t=>Cw[t])}function Rw(e){return{top:0,right:0,bottom:0,left:0,...e}}function dm(e){return typeof e!="number"?Rw(e):{top:e,right:e,bottom:e,left:e}}function Ji(e){return{...e,top:e.y,left:e.x,right:e.x+e.width,bottom:e.y+e.height}}function pm(e,t,o){let{reference:i,floating:r}=e,s=un(t),n=Vd(t),l=Bd(n),c=Ci(t),p=s==="y",d=i.x+i.width/2-r.width/2,u=i.y+i.height/2-r.height/2,g=i[l]/2-r[l]/2,x;switch(c){case"top":x={x:d,y:i.y-r.height};break;case"bottom":x={x:d,y:i.y+i.height};break;case"right":x={x:i.x+i.width,y:u};break;case"left":x={x:i.x-r.width,y:u};break;default:x={x:i.x,y:i.y}}switch(hn(t)){case"start":x[n]-=g*(o&&p?-1:1);break;case"end":x[n]+=g*(o&&p?-1:1);break}return x}var mm=async(e,t,o)=>{let{placement:i="bottom",strategy:r="absolute",middleware:s=[],platform:n}=o,l=s.filter(Boolean),c=await(n.isRTL==null?void 0:n.isRTL(t)),p=await n.getElementRects({reference:e,floating:t,strategy:r}),{x:d,y:u}=pm(p,i,c),g=i,x={},k=0;for(let R=0;R<l.length;R++){let{name:F,fn:A}=l[R],{x:P,y:V,data:rt,reset:et}=await A({x:d,y:u,initialPlacement:i,placement:g,strategy:r,middlewareData:x,rects:p,platform:n,elements:{reference:e,floating:t}});d=P??d,u=V??u,x={...x,[F]:{...x[F],...rt}},et&&k<=50&&(k++,typeof et=="object"&&(et.placement&&(g=et.placement),et.rects&&(p=et.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:r}):et.rects),{x:d,y:u}=pm(p,g,c)),R=-1)}return{x:d,y:u,placement:g,strategy:r,middlewareData:x}};async function mn(e,t){var o;t===void 0&&(t={});let{x:i,y:r,platform:s,rects:n,elements:l,strategy:c}=e,{boundary:p="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:g=!1,padding:x=0}=Gr(t,e),k=dm(x),F=l[g?u==="floating"?"reference":"floating":u],A=Ji(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(F)))==null||o?F:F.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:p,rootBoundary:d,strategy:c})),P=u==="floating"?{...n.floating,x:i,y:r}:n.reference,V=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),rt=await(s.isElement==null?void 0:s.isElement(V))?await(s.getScale==null?void 0:s.getScale(V))||{x:1,y:1}:{x:1,y:1},et=Ji(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:P,offsetParent:V,strategy:c}):P);return{top:(A.top-et.top+k.top)/rt.y,bottom:(et.bottom-A.bottom+k.bottom)/rt.y,left:(A.left-et.left+k.left)/rt.x,right:(et.right-A.right+k.right)/rt.x}}var fm=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;let{placement:r,middlewareData:s,rects:n,initialPlacement:l,platform:c,elements:p}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:g,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:R=!0,...F}=Gr(e,t);if((o=s.arrow)!=null&&o.alignmentOffset)return{};let A=Ci(r),P=Ci(l)===l,V=await(c.isRTL==null?void 0:c.isRTL(p.floating)),rt=g||(P||!R?[cn(l)]:lm(l));!g&&k!=="none"&&rt.push(...cm(l,R,k,V));let et=[l,...rt],ot=await mn(t,F),ue=[],ae=((i=s.flip)==null?void 0:i.overflows)||[];if(d&&ue.push(ot[A]),u){let me=am(r,n,V);ue.push(ot[me[0]],ot[me[1]])}if(ae=[...ae,{placement:r,overflows:ue}],!ue.every(me=>me<=0)){var Ve,Fo;let me=(((Ve=s.flip)==null?void 0:Ve.index)||0)+1,zs=et[me];if(zs)return{data:{index:me,overflows:ae},reset:{placement:zs}};let Io=(Fo=ae.filter(hi=>hi.overflows[0]<=0).sort((hi,Ao)=>hi.overflows[1]-Ao.overflows[1])[0])==null?void 0:Fo.placement;if(!Io)switch(x){case"bestFit":{var io;let hi=(io=ae.map(Ao=>[Ao.placement,Ao.overflows.filter($o=>$o>0).reduce(($o,ta)=>$o+ta,0)]).sort((Ao,$o)=>Ao[1]-$o[1])[0])==null?void 0:io[0];hi&&(Io=hi);break}case"initialPlacement":Io=l;break}if(r!==Io)return{reset:{placement:Io}}}return{}}}};function hm(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function um(e){return nm.some(t=>e[t]>=0)}var ym=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:o}=t,{strategy:i="referenceHidden",...r}=Gr(e,t);switch(i){case"referenceHidden":{let s=await mn(t,{...r,elementContext:"reference"}),n=hm(s,o.reference);return{data:{referenceHiddenOffsets:n,referenceHidden:um(n)}}}case"escaped":{let s=await mn(t,{...r,altBoundary:!0}),n=hm(s,o.floating);return{data:{escapedOffsets:n,escaped:um(n)}}}default:return{}}}}};var gm=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:o,y:i,placement:r}=t,{mainAxis:s=!0,crossAxis:n=!1,limiter:l={fn:F=>{let{x:A,y:P}=F;return{x:A,y:P}}},...c}=Gr(e,t),p={x:o,y:i},d=await mn(t,c),u=un(Ci(r)),g=zd(u),x=p[g],k=p[u];if(s){let F=g==="y"?"top":"left",A=g==="y"?"bottom":"right",P=x+d[F],V=x-d[A];x=Hd(P,x,V)}if(n){let F=u==="y"?"top":"left",A=u==="y"?"bottom":"right",P=k+d[F],V=k-d[A];k=Hd(P,k,V)}let R=l.fn({...t,[g]:x,[u]:k});return{...R,data:{x:R.x-o,y:R.y-i}}}}};var bm=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:o,rects:i,platform:r,elements:s}=t,{apply:n=()=>{},...l}=Gr(e,t),c=await mn(t,l),p=Ci(o),d=hn(o),u=un(o)==="y",{width:g,height:x}=i.floating,k,R;p==="top"||p==="bottom"?(k=p,R=d===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(R=p,k=d==="end"?"top":"bottom");let F=x-c[k],A=g-c[R],P=!t.middlewareData.shift,V=F,rt=A;if(u){let ot=g-c.left-c.right;rt=d||P?ki(A,ot):ot}else{let ot=x-c.top-c.bottom;V=d||P?ki(F,ot):ot}if(P&&!d){let ot=re(c.left,0),ue=re(c.right,0),ae=re(c.top,0),Ve=re(c.bottom,0);u?rt=g-2*(ot!==0||ue!==0?ot+ue:re(c.left,c.right)):V=x-2*(ae!==0||Ve!==0?ae+Ve:re(c.top,c.bottom))}await n({...t,availableWidth:rt,availableHeight:V});let et=await r.getDimensions(s.floating);return g!==et.width||x!==et.height?{reset:{rects:!0}}:{}}}};function Xo(e){return vm(e)?(e.nodeName||"").toLowerCase():"#document"}function le(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function uo(e){var t;return(t=(vm(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function vm(e){return e instanceof Node||e instanceof le(e).Node}function mo(e){return e instanceof Element||e instanceof le(e).Element}function Ke(e){return e instanceof HTMLElement||e instanceof le(e).HTMLElement}function xm(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof le(e).ShadowRoot}function Ur(e){let{overflow:t,overflowX:o,overflowY:i,display:r}=ge(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(r)}function Sm(e){return["table","td","th"].includes(Xo(e))}function Wa(e){let t=Ka(),o=ge(e);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function Nd(e){let t=Zi(e);for(;Ke(t)&&!fn(t);){if(Wa(t))return t;t=Zi(t)}return null}function Ka(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function fn(e){return["html","body","#document"].includes(Xo(e))}function ge(e){return le(e).getComputedStyle(e)}function yn(e){return mo(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Zi(e){if(Xo(e)==="html")return e;let t=e.assignedSlot||e.parentNode||xm(e)&&e.host||uo(e);return xm(t)?t.host:t}function wm(e){let t=Zi(e);return fn(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ke(t)&&Ur(t)?t:wm(t)}function jr(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);let r=wm(e),s=r===((i=e.ownerDocument)==null?void 0:i.body),n=le(r);return s?t.concat(n,n.visualViewport||[],Ur(r)?r:[],n.frameElement&&o?jr(n.frameElement):[]):t.concat(r,jr(r,[],o))}function Tm(e){let t=ge(e),o=parseFloat(t.width)||0,i=parseFloat(t.height)||0,r=Ke(e),s=r?e.offsetWidth:o,n=r?e.offsetHeight:i,l=dn(o)!==s||dn(i)!==n;return l&&(o=s,i=n),{width:o,height:i,$:l}}function Gd(e){return mo(e)?e:e.contextElement}function qr(e){let t=Gd(e);if(!Ke(t))return Ko(1);let o=t.getBoundingClientRect(),{width:i,height:r,$:s}=Tm(t),n=(s?dn(o.width):o.width)/i,l=(s?dn(o.height):o.height)/r;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}var Fw=Ko(0);function Dm(e){let t=le(e);return!Ka()||!t.visualViewport?Fw:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Iw(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==le(e)?!1:t}function tr(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);let r=e.getBoundingClientRect(),s=Gd(e),n=Ko(1);t&&(i?mo(i)&&(n=qr(i)):n=qr(e));let l=Iw(s,o,i)?Dm(s):Ko(0),c=(r.left+l.x)/n.x,p=(r.top+l.y)/n.y,d=r.width/n.x,u=r.height/n.y;if(s){let g=le(s),x=i&&mo(i)?le(i):i,k=g.frameElement;for(;k&&i&&x!==g;){let R=qr(k),F=k.getBoundingClientRect(),A=ge(k),P=F.left+(k.clientLeft+parseFloat(A.paddingLeft))*R.x,V=F.top+(k.clientTop+parseFloat(A.paddingTop))*R.y;c*=R.x,p*=R.y,d*=R.x,u*=R.y,c+=P,p+=V,k=le(k).frameElement}}return Ji({width:d,height:u,x:c,y:p})}var Aw=[":popover-open",":modal"];function Rm(e){let t=!1,o=0,i=0;function r(n){try{t=t||e.matches(n)}catch{}}Aw.forEach(n=>{r(n)});let s=Nd(e);if(t&&s){let n=s.getBoundingClientRect();o=n.x,i=n.y}return[t,o,i]}function $w(e){let{elements:t,rect:o,offsetParent:i,strategy:r}=e,s=uo(i),[n]=t?Rm(t.floating):[!1];if(i===s||n)return o;let l={scrollLeft:0,scrollTop:0},c=Ko(1),p=Ko(0),d=Ke(i);if((d||!d&&r!=="fixed")&&((Xo(i)!=="body"||Ur(s))&&(l=yn(i)),Ke(i))){let u=tr(i);c=qr(i),p.x=u.x+i.clientLeft,p.y=u.y+i.clientTop}return{width:o.width*c.x,height:o.height*c.y,x:o.x*c.x-l.scrollLeft*c.x+p.x,y:o.y*c.y-l.scrollTop*c.y+p.y}}function Ow(e){return Array.from(e.getClientRects())}function Fm(e){return tr(uo(e)).left+yn(e).scrollLeft}function Ew(e){let t=uo(e),o=yn(e),i=e.ownerDocument.body,r=re(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),s=re(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight),n=-o.scrollLeft+Fm(e),l=-o.scrollTop;return ge(i).direction==="rtl"&&(n+=re(t.clientWidth,i.clientWidth)-r),{width:r,height:s,x:n,y:l}}function Mw(e,t){let o=le(e),i=uo(e),r=o.visualViewport,s=i.clientWidth,n=i.clientHeight,l=0,c=0;if(r){s=r.width,n=r.height;let p=Ka();(!p||p&&t==="fixed")&&(l=r.offsetLeft,c=r.offsetTop)}return{width:s,height:n,x:l,y:c}}function Pw(e,t){let o=tr(e,!0,t==="fixed"),i=o.top+e.clientTop,r=o.left+e.clientLeft,s=Ke(e)?qr(e):Ko(1),n=e.clientWidth*s.x,l=e.clientHeight*s.y,c=r*s.x,p=i*s.y;return{width:n,height:l,x:c,y:p}}function km(e,t,o){let i;if(t==="viewport")i=Mw(e,o);else if(t==="document")i=Ew(uo(e));else if(mo(t))i=Pw(t,o);else{let r=Dm(e);i={...t,x:t.x-r.x,y:t.y-r.y}}return Ji(i)}function Im(e,t){let o=Zi(e);return o===t||!mo(o)||fn(o)?!1:ge(o).position==="fixed"||Im(o,t)}function Lw(e,t){let o=t.get(e);if(o)return o;let i=jr(e,[],!1).filter(l=>mo(l)&&Xo(l)!=="body"),r=null,s=ge(e).position==="fixed",n=s?Zi(e):e;for(;mo(n)&&!fn(n);){let l=ge(n),c=Wa(n);!c&&l.position==="fixed"&&(r=null),(s?!c&&!r:!c&&l.position==="static"&&!!r&&["absolute","fixed"].includes(r.position)||Ur(n)&&!c&&Im(e,n))?i=i.filter(d=>d!==n):r=l,n=Zi(n)}return t.set(e,i),i}function _w(e){let{element:t,boundary:o,rootBoundary:i,strategy:r}=e,n=[...o==="clippingAncestors"?Lw(t,this._c):[].concat(o),i],l=n[0],c=n.reduce((p,d)=>{let u=km(t,d,r);return p.top=re(u.top,p.top),p.right=ki(u.right,p.right),p.bottom=ki(u.bottom,p.bottom),p.left=re(u.left,p.left),p},km(t,l,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Hw(e){let{width:t,height:o}=Tm(e);return{width:t,height:o}}function zw(e,t,o,i){let r=Ke(t),s=uo(t),n=o==="fixed",l=tr(e,!0,n,t),c={scrollLeft:0,scrollTop:0},p=Ko(0);if(r||!r&&!n)if((Xo(t)!=="body"||Ur(s))&&(c=yn(t)),r){let R=tr(t,!0,n,t);p.x=R.x+t.clientLeft,p.y=R.y+t.clientTop}else s&&(p.x=Fm(s));let d=l.left+c.scrollLeft-p.x,u=l.top+c.scrollTop-p.y,[g,x,k]=Rm(i);return g&&(d+=x,u+=k,r&&(d+=t.clientLeft,u+=t.clientTop)),{x:d,y:u,width:l.width,height:l.height}}function Cm(e,t){return!Ke(e)||ge(e).position==="fixed"?null:t?t(e):e.offsetParent}function Am(e,t){let o=le(e);if(!Ke(e))return o;let i=Cm(e,t);for(;i&&Sm(i)&&ge(i).position==="static";)i=Cm(i,t);return i&&(Xo(i)==="html"||Xo(i)==="body"&&ge(i).position==="static"&&!Wa(i))?o:i||Nd(e)||o}var Bw=async function(e){let t=this.getOffsetParent||Am,o=this.getDimensions;return{reference:zw(e.reference,await t(e.floating),e.strategy,e.floating),floating:{x:0,y:0,...await o(e.floating)}}};function Vw(e){return ge(e).direction==="rtl"}var Nw={convertOffsetParentRelativeRectToViewportRelativeRect:$w,getDocumentElement:uo,getClippingRect:_w,getOffsetParent:Am,getElementRects:Bw,getClientRects:Ow,getDimensions:Hw,getScale:qr,isElement:mo,isRTL:Vw};function Gw(e,t){let o=null,i,r=uo(e);function s(){var l;clearTimeout(i),(l=o)==null||l.disconnect(),o=null}function n(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();let{left:p,top:d,width:u,height:g}=e.getBoundingClientRect();if(l||t(),!u||!g)return;let x=pn(d),k=pn(r.clientWidth-(p+u)),R=pn(r.clientHeight-(d+g)),F=pn(p),P={rootMargin:-x+"px "+-k+"px "+-R+"px "+-F+"px",threshold:re(0,ki(1,c))||1},V=!0;function rt(et){let ot=et[0].intersectionRatio;if(ot!==c){if(!V)return n();ot?n(!1,ot):i=setTimeout(()=>{n(!1,1e-7)},100)}V=!1}try{o=new IntersectionObserver(rt,{...P,root:r.ownerDocument})}catch{o=new IntersectionObserver(rt,P)}o.observe(e)}return n(!0),s}function Ti(e,t,o,i){i===void 0&&(i={});let{ancestorScroll:r=!0,ancestorResize:s=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=i,p=Gd(e),d=r||s?[...p?jr(p):[],...jr(t)]:[];d.forEach(A=>{r&&A.addEventListener("scroll",o,{passive:!0}),s&&A.addEventListener("resize",o)});let u=p&&l?Gw(p,o):null,g=-1,x=null;n&&(x=new ResizeObserver(A=>{let[P]=A;P&&P.target===p&&x&&(x.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var V;(V=x)==null||V.observe(t)})),o()}),p&&!c&&x.observe(p),x.observe(t));let k,R=c?tr(e):null;c&&F();function F(){let A=tr(e);R&&(A.x!==R.x||A.y!==R.y||A.width!==R.width||A.height!==R.height)&&o(),R=A,k=requestAnimationFrame(F)}return o(),()=>{var A;d.forEach(P=>{r&&P.removeEventListener("scroll",o),s&&P.removeEventListener("resize",o)}),u?.(),(A=x)==null||A.disconnect(),x=null,c&&cancelAnimationFrame(k)}}var Xa=gm,Di=fm,Wr=bm,Ya=ym;var Ri=(e,t,o)=>{let i=new Map,r={platform:Nw,...o},s={...r.platform,_c:i};return mm(e,t,{...r,platform:s})};function Qa(e){return po(e)&&(e.getAttribute("role")==="option"||e instanceof HTMLOptionElement)}var be=class extends D{constructor(t,o,i,r){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,t&&(this.textContent=t),o&&(this.initialValue=o),i&&(this.defaultSelected=i),r&&(this.selected=r),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(t,o){if(typeof o=="boolean"){this.ariaChecked=o?"true":"false";return}this.ariaChecked=null}contentChanged(t,o){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(t,o){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var t;return(t=this.value)!==null&&t!==void 0?t:this.text}get text(){var t,o;return(o=(t=this.textContent)===null||t===void 0?void 0:t.replace(/\s+/g," ").trim())!==null&&o!==void 0?o:""}set value(t){let o=`${t??""}`;this._value=o,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=o),I.notify(this,"value")}get value(){var t;return I.track(this,"value"),(t=this._value)!==null&&t!==void 0?t:this.text}get form(){return this.proxy?this.proxy.form:null}};a([f],be.prototype,"checked",void 0);a([f],be.prototype,"content",void 0);a([f],be.prototype,"defaultSelected",void 0);a([h({mode:"boolean"})],be.prototype,"disabled",void 0);a([h({attribute:"selected",mode:"boolean"})],be.prototype,"selectedAttribute",void 0);a([f],be.prototype,"selected",void 0);a([h({attribute:"value",mode:"fromView"})],be.prototype,"initialValue",void 0);var Yo=class{};a([f],Yo.prototype,"ariaChecked",void 0);a([f],Yo.prototype,"ariaPosInSet",void 0);a([f],Yo.prototype,"ariaSelected",void 0);a([f],Yo.prototype,"ariaSetSize",void 0);H(Yo,Q);H(be,q,Yo);var At=class e extends D{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var t;return(t=this.selectedOptions[0])!==null&&t!==void 0?t:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(t=>t.disabled)}get length(){var t,o;return(o=(t=this.options)===null||t===void 0?void 0:t.length)!==null&&o!==void 0?o:0}get options(){return I.track(this,"options"),this._options}set options(t){this._options=t,I.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(t){this.typeaheadExpired=t}static slottedOptionFilter(t){return Qa(t)&&!t.hidden}clickHandler(t){let o=t.target.closest("option,[role=option]");if(o&&!o.disabled)return this.selectedIndex=this.options.indexOf(o),!0}focusAndScrollOptionIntoView(t=this.firstSelectedOption){this.contains(document.activeElement)&&t!==null&&(t.focus(),requestAnimationFrame(()=>{t.scrollIntoView({block:"nearest"})}))}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let t=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),o=new RegExp(`^${t}`,"gi");return this.options.filter(i=>i.text.trim().match(o))}getSelectableIndex(t=this.selectedIndex,o){let i=t>o?-1:t<o?1:0,r=t+i,s=null;switch(i){case-1:{s=this.options.reduceRight((n,l,c)=>!n&&!l.disabled&&c<r?l:n,s);break}case 1:{s=this.options.reduce((n,l,c)=>!n&&!l.disabled&&c>r?l:n,s);break}}return this.options.indexOf(s)}handleChange(t,o){switch(o){case"selected":{e.slottedOptionFilter(t)&&(this.selectedIndex=this.options.indexOf(t)),this.setSelectedOptions();break}}}handleTypeAhead(t){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,e.TYPE_AHEAD_TIMEOUT_MS),!(t.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${t}`)}keydownHandler(t){if(this.disabled)return!0;this.shouldSkipFocus=!1;let o=t.key;switch(o){case xt:{t.shiftKey||(t.preventDefault(),this.selectFirstOption());break}case nt:{t.shiftKey||(t.preventDefault(),this.selectNextOption());break}case at:{t.shiftKey||(t.preventDefault(),this.selectPreviousOption());break}case gt:{t.preventDefault(),this.selectLastOption();break}case vi:return this.focusAndScrollOptionIntoView(),!0;case bt:case Yt:return!0;case Qt:if(this.typeaheadExpired)return!0;default:return o.length===1&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(t){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(t,o){this.ariaMultiSelectable=o?"true":null}selectedIndexChanged(t,o){var i;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((i=this.options[this.selectedIndex])===null||i===void 0)&&i.disabled&&typeof t=="number"){let r=this.getSelectableIndex(t,o),s=r>-1?r:t;this.selectedIndex=s,o===s&&this.selectedIndexChanged(o,s);return}this.setSelectedOptions()}selectedOptionsChanged(t,o){var i;let r=o.filter(e.slottedOptionFilter);(i=this.options)===null||i===void 0||i.forEach(s=>{let n=I.getNotifier(s);n.unsubscribe(this,"selected"),s.selected=r.includes(s),n.subscribe(this,"selected")})}selectFirstOption(){var t,o;this.disabled||(this.selectedIndex=(o=(t=this.options)===null||t===void 0?void 0:t.findIndex(i=>!i.disabled))!==null&&o!==void 0?o:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Uu(this.options,t=>!t.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var t,o;this.selectedIndex=(o=(t=this.options)===null||t===void 0?void 0:t.findIndex(i=>i.defaultSelected))!==null&&o!==void 0?o:-1}setSelectedOptions(){var t,o,i;!((t=this.options)===null||t===void 0)&&t.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(i=(o=this.firstSelectedOption)===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(t,o){this.options=o.reduce((r,s)=>(Qa(s)&&r.push(s),r),[]);let i=`${this.options.length}`;this.options.forEach((r,s)=>{r.id||(r.id=Nt("option-")),r.ariaPosInSet=`${s+1}`,r.ariaSetSize=i}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(t,o){if(this.$fastController.isConnected){let i=this.getTypeaheadMatches();if(i.length){let r=this.options.indexOf(i[0]);r>-1&&(this.selectedIndex=r)}this.typeaheadExpired=!1}}};At.TYPE_AHEAD_TIMEOUT_MS=1e3;a([h({mode:"boolean"})],At.prototype,"disabled",void 0);a([f],At.prototype,"selectedIndex",void 0);a([f],At.prototype,"selectedOptions",void 0);a([f],At.prototype,"slottedOptions",void 0);a([f],At.prototype,"typeaheadBuffer",void 0);var Ie=class{};a([f],Ie.prototype,"ariaActiveDescendant",void 0);a([f],Ie.prototype,"ariaDisabled",void 0);a([f],Ie.prototype,"ariaExpanded",void 0);a([f],Ie.prototype,"ariaMultiSelectable",void 0);H(Ie,Q);H(At,Ie);var jd=class extends At{},Ja=class extends It(jd){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var gn={inline:"inline",list:"list",both:"both",none:"none"};var Qo=class extends Ja{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.listboxId=Nt("listbox-"),this.open=!1}formResetCallback(){var t;if(super.formResetCallback(),this.setDefaultSelectedOption(),!this.firstSelectedOption){this.value=(t=this.initialValue)!==null&&t!==void 0?t:"";return}this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===gn.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===gn.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===gn.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",$.enqueue(()=>this.setPositioning()),this.focusAndScrollOptionIntoView(),$.enqueue(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return I.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(t){this._options=t,I.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}get value(){return I.track(this,"value"),this._value}set value(t){var o,i,r;let s=`${this._value}`;if(this.$fastController.isConnected&&this.options){let n=this.options.findIndex(p=>p.text.toLowerCase()===t.toLowerCase()),l=(o=this.options[this.selectedIndex])===null||o===void 0?void 0:o.text,c=(i=this.options[n])===null||i===void 0?void 0:i.text;this.selectedIndex=l!==c?n:this.selectedIndex,t=((r=this.firstSelectedOption)===null||r===void 0?void 0:r.text)||t}s!==t&&(this._value=t,super.valueChanged(s,t),I.notify(this,"value"))}clickHandler(t){if(!this.disabled){if(this.open){let o=t.target.closest("option,[role=option]");if(!o||o.disabled)return;this.selectedOptions=[o],this.control.value=o.text,this.clearSelectionRange(),this.updateValue(!0)}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.value&&(this.initialValue=this.value)}disabledChanged(t,o){super.disabledChanged&&super.disabledChanged(t,o),this.ariaDisabled=this.disabled?"true":"false"}disconnectedCallback(){var t;(t=this.cleanup)===null||t===void 0||t.call(this),super.disconnectedCallback()}filterOptions(){(!this.autocomplete||this.autocomplete===gn.none)&&(this.filter="");let t=this.filter.toLowerCase();this.filteredOptions=this._options.filter(o=>o.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!t&&(this.filteredOptions=this._options),this._options.forEach(o=>{o.hidden=!this.filteredOptions.includes(o)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var t;(t=this.firstSelectedOption)===null||t===void 0||t.scrollIntoView({block:"nearest"})}))}focusoutHandler(t){if(this.updateValue(),!this.open)return!0;let o=t.relatedTarget;if(this.isSameNode(o)){this.focus();return}(!this.options||!this.options.includes(o))&&(this.open=!1)}inputHandler(t){if(this.filter=this.control.value,this.filterOptions(),t.inputType==="deleteContentBackward"||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&this.filteredOptions.length&&(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection())}keydownHandler(t){let o=t.key;if(t.ctrlKey||t.shiftKey)return!0;switch(o){case"Enter":{this.updateValue(!0),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.updateValue(),!this.open)return!0;t.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(t),this.isAutocompleteInline&&(this.updateValue(),this.setInlineSelection());break}default:return!0}}keyupHandler(t){switch(t.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(t,o){if(this.$fastController.isConnected){if(o=ho(-1,this.options.length-1,o),o!==this.selectedIndex){this.selectedIndex=o;return}super.selectedIndexChanged(t,o)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let t=this.options.findIndex(o=>o.getAttribute("selected")!==null||o.selected);this.selectedIndex=t,!this.dirtyValue&&this.firstSelectedOption?this.value=this.firstSelectedOption.text:this.value="",this.setSelectedOptions()}}setInlineSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}setPositioning(){this.$fastController.isConnected&&(this.cleanup=Ti(this,this.listbox,()=>bi(this,void 0,void 0,function*(){var t;let{middlewareData:o,x:i,y:r}=yield Ri(this,this.listbox,{placement:"bottom",strategy:"fixed",middleware:[Di(),Wr({apply:({availableHeight:s,rects:n})=>{Object.assign(this.listbox.style,{maxHeight:`${s}px`,width:`${n.reference.width}px`})}}),Ya()]});if(!((t=o.hide)===null||t===void 0)&&t.referenceHidden){this.open=!1,this.cleanup();return}Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${i}px, ${r}px)`})})))}selectedOptionsChanged(t,o){this.$fastController.isConnected&&this._options.forEach(i=>{i.selected=o.includes(i)})}slottedOptionsChanged(t,o){super.slottedOptionsChanged(t,o),this.updateValue()}updateValue(t){var o;this.$fastController.isConnected&&(this.value=((o=this.firstSelectedOption)===null||o===void 0?void 0:o.text)||this.control.value),t&&this.$emit("change")}clearSelectionRange(){let t=this.control.value.length;this.control.setSelectionRange(t,t)}};a([h({attribute:"autocomplete",mode:"fromView"})],Qo.prototype,"autocomplete",void 0);a([h({attribute:"open",mode:"boolean"})],Qo.prototype,"open",void 0);a([h],Qo.prototype,"placeholder",void 0);var er=class{};a([f],er.prototype,"ariaAutoComplete",void 0);a([f],er.prototype,"ariaControls",void 0);H(er,Ie);H(Qo,q,er);function Ud(e={}){return m`
        <template
            aria-disabled="${t=>t.ariaDisabled}"
            autocomplete="${t=>t.autocomplete}"
            ?open="${t=>t.open}"
            tabindex="${t=>t.disabled?null:"0"}"
            @click="${(t,o)=>t.clickHandler(o.event)}"
            @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
            @keydown="${(t,o)=>t.keydownHandler(o.event)}"
        >
            <div class="control" part="control">
                ${Z(e)}
                <slot name="control">
                    <input
                        aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                        aria-autocomplete="${t=>t.ariaAutoComplete}"
                        aria-controls="${t=>t.ariaControls}"
                        aria-disabled="${t=>t.ariaDisabled}"
                        aria-expanded="${t=>t.ariaExpanded}"
                        aria-haspopup="listbox"
                        class="selected-value"
                        part="selected-value"
                        placeholder="${t=>t.placeholder}"
                        role="combobox"
                        type="text"
                        ?disabled="${t=>t.disabled}"
                        :value="${t=>t.value}"
                        @input="${(t,o)=>t.inputHandler(o.event)}"
                        @keyup="${(t,o)=>t.keyupHandler(o.event)}"
                        ${z("control")}
                    />
                    <div class="indicator" part="indicator" aria-hidden="true">
                        <slot name="indicator">
                            ${N(e.indicator)}
                        </slot>
                    </div>
                </slot>
                ${J(e)}
            </div>
            <div
                class="listbox"
                id="${t=>t.listboxId}"
                part="listbox"
                role="listbox"
                ?disabled="${t=>t.disabled}"
                ?hidden="${t=>!t.open}"
                ${z("listbox")}
            >
                <slot
                    ${M({filter:At.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
                ></slot>
            </div>
        </template>
    `}function jw(e){let t=m.partial(yt(e.dataGridRow));return m`
    <${t}
        :rowData="${o=>o}"
        :cellItemTemplate="${(o,i)=>i.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(o,i)=>i.parent.headerCellItemTemplate}"
    ></${t}>
`}function qd(e){let t=yt(e.dataGridRow);return m`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${t}"
            :defaultRowItemTemplate="${jw(e)}"
            ${Mo({property:"rowElements",filter:Rt("[role=row]")})}
        >
            <slot></slot>
        </template>
    `}function Za(e){let t=e.parentElement;if(t)return t;{let o=e.getRootNode();if(o.host instanceof HTMLElement)return o.host}return null}function $m(e,t){let o=t;for(;o!==null;){if(o===e)return!0;o=Za(o)}return!1}var Kr=Object.freeze({create(e){let t=[],o={},i=null,r=!1;return{source:e,context:Ue.default,targets:o,get isBound(){return r},addBehaviorFactory(s,n){var l,c,p,d;let u=s;u.id=(l=u.id)!==null&&l!==void 0?l:ui(),u.targetNodeId=(c=u.targetNodeId)!==null&&c!==void 0?c:ui(),u.targetTagName=(p=n.tagName)!==null&&p!==void 0?p:null,u.policy=(d=u.policy)!==null&&d!==void 0?d:Ge.policy,this.addTarget(u.targetNodeId,n),this.addBehavior(u.createBehavior())},addTarget(s,n){o[s]=n},addBehavior(s){t.push(s),r&&s.bind(this)},onUnbind(s){i===null&&(i=[]),i.push(s)},connectedCallback(s){r||(r=!0,t.forEach(n=>n.bind(this)))},disconnectedCallback(s){r&&(r=!1,i!==null&&i.forEach(n=>n.unbind(this)))}}}});var bn={none:"none",default:"default",sticky:"sticky"},ce={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},xe={default:"default",header:"header",stickyHeader:"sticky-header"};var Wd={columnheader:"columnheader",rowheader:"rowheader",default:"gridcell"},jt={none:"none",singleRow:"single-row",multiRow:"multi-row"},or={programmatic:"programmatic",keyboardOnly:"keyboard-only",auto:"auto"};var mt=class e extends D{constructor(){super(...arguments),this.noTabbing=!1,this.generateHeader=bn.default,this.selectionMode=jt.none,this.selectionBehavior=or.auto,this.rowSelectableCallback=e.defaultRowSelectableCallback,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this._selectedRowIndexes=[],this.rowsPlaceholder=null,this.behaviorOrchestrator=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.lastNotShiftSelectedRowIndex=-1,this.preShiftRowSelection=null,this.selectionUpdated=!1,this.focusOnCell=(t,o,i)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}let r=Math.max(0,Math.min(this.rowElements.length-1,t)),n=this.rowElements[r].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(n.length-1,o)),c=n[l];c&&(c.scrollIntoView({block:i}),c.focus())},this.onChildListChange=(t,o)=>{this.deselectAllRows(),t&&t.length&&(t.forEach(i=>{i.addedNodes.forEach(r=>{r.nodeType===1&&r.getAttribute("role")==="row"&&(r.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,$.enqueue(this.updateRowIndexes))},this.updateRowIndexes=()=>{let t=this.gridTemplateColumns;if(t===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){let o=this.rowElements[0];this.generatedGridTemplateColumns=new Array(o.cellElements.length).fill("1fr").join(" ")}t=this.generatedGridTemplateColumns}this.rowElements.forEach((o,i)=>{let r=o;r.rowIndex=i,r.gridTemplateColumns=t,r.selectionBehavior=this.selectionBehavior,(this.selectionMode===jt.singleRow||this.selectionMode===jt.multiRow)&&(r.selected=!!this._selectedRowIndexes.includes(i)),this.columnDefinitionsStale&&(r.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1,this.selectionUpdated&&(this.selectionUpdated=!1,this.$emit("selectionchange"))}}static generateColumns(t){return Object.getOwnPropertyNames(t).map((o,i)=>({columnDataKey:o,gridColumn:`${i}`}))}static generateTemplateColumns(t){let o="";return t.forEach(i=>{o=`${o}${o===""?"":" "}1fr`}),o}static defaultRowSelectableCallback(t,o){return!(o.rowElements.length<t||o.rowElements[t].rowType!==xe.default)}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}selectionModeChanged(t,o){this.$fastController.isConnected&&((t==="single-row"||t==="multi-row")&&this.removeEventListener("rowselectionchange",this.handleRowSelectedChange),(o==="single-row"||o==="multi-row")&&this.addEventListener("rowselectionchange",this.handleRowSelectedChange),this.deselectAllRows())}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=e.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&(this.toggleGeneratedHeader(),this.deselectAllRows())}columnDefinitionsChanged(){this.columnDefinitions&&(this.generatedGridTemplateColumns=e.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate()))}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}get selectedRowIndexes(){return this._selectedRowIndexes.slice()}set selectedRowIndexes(t){this.selectionMode!==jt.multiRow&&this.selectionMode!==jt.singleRow||(t=t.filter(o=>this.rowSelectableCallback(o,this)),this.selectionMode===jt.singleRow&&t.length>1?this._selectedRowIndexes.splice(0,this.selectedRowIndexes.length,t[0]):this._selectedRowIndexes.splice(0,this.selectedRowIndexes.length,...t),this.selectionUpdated=!0,this.queueRowIndexUpdate())}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.behaviorOrchestrator===null&&(this.behaviorOrchestrator=Kr.create(this),this.$fastController.addBehavior(this.behaviorOrchestrator),this.behaviorOrchestrator.addBehaviorFactory(new Re(Et(t=>t.rowsData),Et(t=>t.rowItemTemplate),{positioning:!0}),this.appendChild(this.rowsPlaceholder=document.createComment("")))),this.toggleGeneratedHeader(),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(bd,this.handleFocus),this.addEventListener(Uo,this.handleKeydown),this.addEventListener(jo,this.handleFocusOut),(this.selectionMode===jt.singleRow||this.selectionMode===jt.multiRow)&&this.addEventListener("rowselectionchange",this.handleRowSelectedChange),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),$.enqueue(()=>{if(this.selectionMode!==jt.none&&this.initialRowSelection){let t=this.initialRowSelection.split(","),o=[];t.forEach(i=>{o.push(parseInt(i.trim()))}),this.updateSelectedRows(o)}}),this.queueRowIndexUpdate()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(bd,this.handleFocus),this.removeEventListener(Uo,this.handleKeydown),this.removeEventListener(jo,this.handleFocusOut),(this.selectionMode===jt.singleRow||this.selectionMode===jt.multiRow)&&this.removeEventListener("rowselectionchange",this.handleRowSelectedChange),this.observer.disconnect(),this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null)}handleRowFocus(t){this.isUpdatingFocus=!0;let o=t.target;this.focusRowIndex=this.rowElements.indexOf(o),this.focusColumnIndex=o.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(t){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,"nearest")}handleFocusOut(t){(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(t){if(t.defaultPrevented)return;let o;switch(t.key){case at:t.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,"nearest");break;case nt:t.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,"nearest");break;case Oa:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,"nearest");break}o=Math.max(0,this.focusRowIndex-this.getPageSize()),this.focusOnCell(o,this.focusColumnIndex,"start");break;case $a:if(t.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,"nearest");break}o=Math.min(this.rowElements.length-1,this.focusRowIndex+this.getPageSize()),this.focusOnCell(o,this.focusColumnIndex,"end");break;case xt:t.ctrlKey&&(t.preventDefault(),this.focusOnCell(0,0,"nearest"));break;case gt:t.ctrlKey&&this.columnDefinitions!==null&&(t.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,"nearest"));break;case"a":if(!t.ctrlKey)return;switch(this.selectionMode){case"multi-row":this.selectAllRows(),t.preventDefault();return}break}}handleRowSelectedChange(t){if(t.defaultPrevented||this.selectionMode===jt.none)return;let i=t.composedPath().find(r=>this.rowElements.indexOf(r)!==-1);if(i){t.preventDefault();let r=i,s=t.detail;switch(this.selectionMode){case jt.singleRow:this.handleSingleRowSelection(r,s);break;case jt.multiRow:s.isKeyboardEvent?this.handleMultiRowKeyboardSelection(r,s):this.handleMultiRowPointerSelection(r,s);break}}}handleMultiRowPointerSelection(t,o){let i=this.selectedRowIndexes.slice();if(o.shiftKey){if(this.lastNotShiftSelectedRowIndex===-1)this.handleSingleRowSelection(t,o);else{this.preShiftRowSelection!==null?i=this.preShiftRowSelection.slice():this.preShiftRowSelection=i.slice();let r=t.rowIndex>this.lastNotShiftSelectedRowIndex?1:-1,s=this.lastNotShiftSelectedRowIndex+r;for(s;s!==t.rowIndex+r;s=s+r){let n=i.indexOf(s);!i.includes(t.rowIndex)&&n===-1&&i.push(s)}}this.updateSelectedRows(i)}else o.ctrlKey?(o.newValue&&!i.includes(t.rowIndex)&&(i.push(t.rowIndex),this.lastNotShiftSelectedRowIndex=t.rowIndex),!o.newValue&&i.includes(t.rowIndex)&&(i.splice(i.indexOf(t.rowIndex),1),this.lastNotShiftSelectedRowIndex=-1),this.preShiftRowSelection=null,this.updateSelectedRows(i)):(this.handleSingleRowSelection(t,o),this.preShiftRowSelection=null)}handleMultiRowKeyboardSelection(t,o){if(o.isKeyboardEvent&&!o.shiftKey)return;this.preShiftRowSelection=null,this.lastNotShiftSelectedRowIndex=-1;let i=this.selectedRowIndexes.slice();i.includes(t.rowIndex)?i.splice(i.indexOf(t.rowIndex),1):i.push(t.rowIndex),this.updateSelectedRows(i)}handleSingleRowSelection(t,o){o.isKeyboardEvent&&!o.shiftKey||(o.newValue?(this.updateSelectedRows([t.rowIndex]),this.lastNotShiftSelectedRowIndex=t.rowIndex):(this.updateSelectedRows([]),this.lastNotShiftSelectedRowIndex=-1))}getPageSize(){if(this.pageSize)return this.pageSize;let t=50;this.rowElements.forEach(i=>{var r;(!i.hasAttribute("rowType")||!(!((r=i.getAttribute("rowType"))===null||r===void 0)&&r.includes("header")))&&(t=i.clientHeight)});let o=1;return t===0||(this.clientHeight<this.scrollHeight?o=this.clientHeight/t:o=document.body.clientHeight/t,o=Math.max(Math.round(o),1)),o}updateSelectedRows(t){this.selectedRowIndexes=t}selectAllRows(){if(this.selectionMode!==jt.multiRow||this.rowElements.length===0)return;let t=[];for(let r=0,s=this.rowElements.length;r<s;r++)this.rowSelectableCallback(r,this)||t.push(r);let o=Math.max(this.rowElements.length-t.length,0);if(this._selectedRowIndexes.length===o){this.updateSelectedRows([]);return}let i=[];this.rowElements.forEach(r=>{i.push(r.rowIndex)}),this.lastNotShiftSelectedRowIndex=-1,this.updateSelectedRows(i)}deselectAllRows(){this.updateSelectedRows([]),this.lastNotShiftSelectedRowIndex=-1}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,$.enqueue(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,"nearest")}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==bn.none&&this.columnDefinitions&&this.columnDefinitions.length){let t=document.createElement(this.rowElementTag);this.generatedHeader=t,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===bn.sticky?xe.stickyHeader:xe.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(t,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};a([h({attribute:"no-tabbing",mode:"boolean"})],mt.prototype,"noTabbing",void 0);a([h({attribute:"generate-header"})],mt.prototype,"generateHeader",void 0);a([h({attribute:"grid-template-columns"})],mt.prototype,"gridTemplateColumns",void 0);a([h({attribute:"page-size",converter:G})],mt.prototype,"pageSize",void 0);a([h({attribute:"selection-mode"})],mt.prototype,"selectionMode",void 0);a([h({attribute:"selection-behavior"})],mt.prototype,"selectionBehavior",void 0);a([h({attribute:"initial-row-selection"})],mt.prototype,"initialRowSelection",void 0);a([f],mt.prototype,"rowSelectableCallback",void 0);a([f],mt.prototype,"rowsData",void 0);a([f],mt.prototype,"columnDefinitions",void 0);a([f],mt.prototype,"rowItemTemplate",void 0);a([f],mt.prototype,"cellItemTemplate",void 0);a([f],mt.prototype,"headerCellItemTemplate",void 0);a([f],mt.prototype,"focusRowIndex",void 0);a([f],mt.prototype,"focusColumnIndex",void 0);a([f],mt.prototype,"defaultRowItemTemplate",void 0);a([f],mt.prototype,"rowElementTag",void 0);a([f],mt.prototype,"rowElements",void 0);function Uw(e){let t=m.partial(yt(e.dataGridCell));return m`
    <${t}
        cell-type="${o=>o.isRowHeader?"rowheader":void 0}"
        grid-column="${(o,i)=>i.index+1}"
        :rowData="${(o,i)=>i.parent.rowData}"
        :columnDefinition="${o=>o}"
    ></${t}>
`}function qw(e){let t=m.partial(yt(e.dataGridCell));return m`
    <${t}
        cell-type="columnheader"
        grid-column="${(o,i)=>i.index+1}"
        :columnDefinition="${o=>o}"
    ></${t}>
`}function Kd(e){return m`
        <template
            role="row"
            :defaultCellItemTemplate="${Uw(e)}"
            :defaultHeaderCellItemTemplate="${qw(e)}"
            aria-selected="${t=>t.selected!==void 0?t.selected:void 0}"
            ${Mo({property:"cellElements",filter:Rt('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${M("slottedCellElements")}></slot>
        </template>
    `}var Ht=class extends D{constructor(){super(...arguments),this.rowType=xe.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.behaviorOrchestrator=null,this.selectionBehavior=or.auto,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.behaviorOrchestrator===null&&(this.updateItemTemplate(),this.behaviorOrchestrator=Kr.create(this),this.$fastController.addBehavior(this.behaviorOrchestrator),this.behaviorOrchestrator.addBehaviorFactory(new Re(Et(t=>t.columnDefinitions),Et(t=>t.activeCellItemTemplate),{positioning:!0}),this.appendChild(document.createComment("")))),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(jo,this.handleFocusout),this.addEventListener(Uo,this.handleKeydown),this.addEventListener(gd,this.handleClick),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(jo,this.handleFocusout),this.removeEventListener(Uo,this.handleKeydown),this.removeEventListener(gd,this.handleClick)}toggleSelected(t){this.$emit("rowselectionchange",t)}handleFocusout(t){this.contains(t.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(t){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(t.target),this.$emit("row-focused",this)}handleKeydown(t){if(t.defaultPrevented)return;let o=0;switch(t.key){case Pt:o=Math.max(0,this.focusColumnIndex-1),this.cellElements[o].focus(),t.preventDefault();break;case Lt:o=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[o].focus(),t.preventDefault();break;case xt:t.ctrlKey||(this.cellElements[0].focus(),t.preventDefault());break;case gt:t.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),t.preventDefault());break;case Qt:this.selected!==void 0&&this.selectionBehavior!==or.programmatic&&(t.preventDefault(),this.toggleSelected({newValue:!this.isSelected(),shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,isKeyboardEvent:!0}));break}}isSelected(){return this.selected}handleClick(t){t.defaultPrevented||this.selectionBehavior!==or.auto||this.selected===void 0||(t.preventDefault(),this.toggleSelected({newValue:!this.isSelected(),shiftKey:t.shiftKey,ctrlKey:t.ctrlKey,isKeyboardEvent:!1}))}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===xe.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===xe.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};a([h({attribute:"grid-template-columns"})],Ht.prototype,"gridTemplateColumns",void 0);a([h({attribute:"row-type"})],Ht.prototype,"rowType",void 0);a([f],Ht.prototype,"rowData",void 0);a([f],Ht.prototype,"columnDefinitions",void 0);a([f],Ht.prototype,"cellItemTemplate",void 0);a([f],Ht.prototype,"headerCellItemTemplate",void 0);a([f],Ht.prototype,"rowIndex",void 0);a([f],Ht.prototype,"isActiveRow",void 0);a([f],Ht.prototype,"activeCellItemTemplate",void 0);a([f],Ht.prototype,"defaultCellItemTemplate",void 0);a([f],Ht.prototype,"defaultHeaderCellItemTemplate",void 0);a([f],Ht.prototype,"cellElements",void 0);a([f],Ht.prototype,"selected",void 0);function Xd(){return m`
        <template
            tabindex="-1"
            role="${e=>{var t;return(t=Wd[e.cellType])!==null&&t!==void 0?t:Wd.default}}"
        >
            <slot></slot>
        </template>
    `}var Em=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],Ww=Em.join(","),Mm=typeof Element>"u",xn=Mm?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Yd=!Mm&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument};var Kw=function(t,o){return t.tabIndex<0&&(o||/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||t.isContentEditable)&&isNaN(parseInt(t.getAttribute("tabindex"),10))?0:t.tabIndex};var Pm=function(t){return t.tagName==="INPUT"},Xw=function(t){return Pm(t)&&t.type==="hidden"},Yw=function(t){var o=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(i){return i.tagName==="SUMMARY"});return o},Qw=function(t,o){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===o)return t[i]},Jw=function(t){if(!t.name)return!0;var o=t.form||Yd(t),i=function(l){return o.querySelectorAll('input[type="radio"][name="'+l+'"]')},r;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")r=i(window.CSS.escape(t.name));else try{r=i(t.name)}catch(n){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",n.message),!1}var s=Qw(r,t.form);return!s||s===t},Zw=function(t){return Pm(t)&&t.type==="radio"},tk=function(t){return Zw(t)&&!Jw(t)},Om=function(t){var o=t.getBoundingClientRect(),i=o.width,r=o.height;return i===0&&r===0},ek=function(t,o){var i=o.displayCheck,r=o.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var s=xn.call(t,"details>summary:first-of-type"),n=s?t.parentElement:t;if(xn.call(n,"details:not([open]) *"))return!0;var l=Yd(t).host,c=l?.ownerDocument.contains(l)||t.ownerDocument.contains(t);if(!i||i==="full"){if(typeof r=="function"){for(var p=t;t;){var d=t.parentElement,u=Yd(t);if(d&&!d.shadowRoot&&r(d)===!0)return Om(t);t.assignedSlot?t=t.assignedSlot:!d&&u!==t.ownerDocument?t=u.host:t=d}t=p}if(c)return!t.getClientRects().length}else if(i==="non-zero-area")return Om(t);return!1},ok=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var o=t.parentElement;o;){if(o.tagName==="FIELDSET"&&o.disabled){for(var i=0;i<o.children.length;i++){var r=o.children.item(i);if(r.tagName==="LEGEND")return xn.call(o,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}o=o.parentElement}return!1},Lm=function(t,o){return!(o.disabled||Xw(o)||ek(o,t)||Yw(o)||ok(o))},ik=function(t,o){return!(tk(o)||Kw(o)<0||!Lm(t,o))};var Qd=function(t,o){if(o=o||{},!t)throw new Error("No node provided");return xn.call(t,Ww)===!1?!1:ik(o,t)},rk=Em.concat("iframe").join(","),Jd=function(t,o){if(o=o||{},!t)throw new Error("No node provided");return xn.call(t,rk)===!1?!1:Lm(o,t)};var sk=m`
    <template>
        ${e=>e.rowData===null||e.columnDefinition===null||e.columnDefinition.columnDataKey===null?null:e.rowData[e.columnDefinition.columnDataKey]}
    </template>
`,nk=m`
    <template>
        ${e=>e.columnDefinition===null?null:e.columnDefinition.title===void 0?e.columnDefinition.columnDataKey:e.columnDefinition.title}
    </template>
`;var Jo=class extends D{constructor(){super(...arguments),this.cellType=ce.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(t,o){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var t;super.connectedCallback(),this.addEventListener(xd,this.handleFocusin),this.addEventListener(jo,this.handleFocusout),this.addEventListener(Uo,this.handleKeydown),this.style.gridColumn=`${((t=this.columnDefinition)===null||t===void 0?void 0:t.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(xd,this.handleFocusin),this.removeEventListener(jo,this.handleFocusout),this.removeEventListener(Uo,this.handleKeydown),this.disconnectCellView()}handleFocusin(t){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case ce.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){let o=this.columnDefinition.headerCellFocusTargetCallback(this);o!==null&&o.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){let o=this.columnDefinition.cellFocusTargetCallback(this);o!==null&&o.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(t){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}hasInternalFocusQueue(){return this.columnDefinition===null?!1:!!(this.cellType===ce.default&&this.columnDefinition.cellInternalFocusQueue||this.cellType===ce.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue)}handleKeydown(t){if(t.defaultPrevented||this.columnDefinition===null||!this.hasInternalFocusQueue())return;let o=this.getRootActiveElement();switch(t.key){case bt:case Xu:if(this.contains(o)&&o!==this)return;switch(this.cellType){case ce.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){let i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus(),t.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){let i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus(),t.preventDefault()}break}break;case Yt:this.contains(o)&&o!==this&&(this.focus(),t.preventDefault());break;case nt:case Pt:case Lt:case at:case gt:case xt:case $a:case Oa:this.contains(o)&&o!==this&&t.stopPropagation();break}}getRootActiveElement(){let t=this.getRootNode();return t instanceof ShadowRoot?t.activeElement:document.activeElement}updateCellView(){var t,o;if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case ce.columnHeader:this.customCellView=m`
                    ${(t=this.columnDefinition.headerCellTemplate)!==null&&t!==void 0?t:nk}
                `.render(this,this);break;case void 0:case ce.rowHeader:case ce.default:this.customCellView=m`
                    ${(o=this.columnDefinition.cellTemplate)!==null&&o!==void 0?o:sk}
                `.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};a([h({attribute:"cell-type"})],Jo.prototype,"cellType",void 0);a([h({attribute:"grid-column"})],Jo.prototype,"gridColumn",void 0);a([f],Jo.prototype,"rowData",void 0);a([f],Jo.prototype,"columnDefinition",void 0);var vn=class e{constructor(t){this.value=t,this.notifier=I.getNotifier(this),this.dependencies=new Set,this.binding=I.binding(t,this),this.binding.setMode(!1)}static getOrCreate(t){let o=e.cache.get(t);return o||(o=new e(t),e.cache.set(t,o),o)}evaluate(t,o){let i=r=>{if(this.dependencies.add(r),o===r){if(t.parent)return t.parent.getTokenValue(r);throw new Error("DesignTokenNode has encountered a circular token reference. Avoid this by setting the token value for an ancestor node.")}else return t.getTokenValue(r)};return this.binding.observe(i)}handleChange(){this.notifier.notify(void 0)}};vn.cache=new WeakMap;var Zd=class{constructor(t,o,i,r){this.token=t,this.evaluator=o,this.node=i,this.subscriber=r,this.value=o.evaluate(i,t),this.subscriber&&I.getNotifier(this.evaluator).subscribe(this.subscriber)}dispose(){this.subscriber&&I.getNotifier(this.evaluator).unsubscribe(this.subscriber)}update(){return this.value=this.evaluator.evaluate(this.node,this.token),this}},Jt=class{constructor(t,o,i,r){this.target=t,this.type=o,this.token=i,this.value=r}notify(){I.getNotifier(this.token).notify(this)}},Xr=class e{constructor(){this._parent=null,this._children=new Set,this._values=new Map,this._derived=new Map,this.dependencyGraph=new Map}static isDerivedTokenValue(t){return typeof t=="function"}static isDerivedFor(t,o){return t._derived.has(o)}static collectDerivedContext(t){let o=new Map;if(t.parent===null)return o;let i=e.getAssignedTokensForNode(t),r=t.parent;do{let s=e.getAssignedTokensForNode(r);for(let n=0,l=s.length;n<l;n++){let c=s[n];!i.includes(c)&&e.isDerivedFor(r,c)&&o.set(c,r._derived.get(c))}i=Array.from(new Set(i.concat(s))),r=r.parent}while(r!==null);return o}static getLocalTokenValue(t,o){return e.isAssigned(t,o)?e.isDerivedFor(t,o)?t._derived.get(o).value:t._values.get(o):void 0}static getOrCreateDependencyGraph(t,o){let i=t.dependencyGraph.get(o);return i||(i=new Set,t.dependencyGraph.set(o,i),i)}static notify(){let t=this._notifications;this._notifications=[];for(let o of t)o.notify()}static queueNotification(...t){this._notifications.push(...t)}static getAssignedTokensForNode(t){return Array.from(t._values.keys())}static composeAssignedTokensForNode(t){let o=new Set(e.getAssignedTokensForNode(t)),i=t.parent;for(;i!==null;){let r=e.getAssignedTokensForNode(i);for(let s of r)o.add(s);i=i.parent}return Array.from(o)}static isAssigned(t,o){return t._values.has(o)}get parent(){return this._parent}get children(){return Array.from(this._children)}appendChild(t){var o,i;let r=null;t.parent!==null&&(r=e.composeAssignedTokensForNode(t.parent),t.parent._children.delete(t));let s=e.composeAssignedTokensForNode(this),n=e.collectDerivedContext(this);t._parent=this,this._children.add(t);for(let l of s){let c=0;if(r!==null){let p=r.indexOf(l);p!==-1&&(c=1,r.splice(p,1))}t.dispatch(new Jt(this,c,l,(o=n.get(l))===null||o===void 0?void 0:o.evaluator.value))}if(r!==null&&r.length>0)for(let l of r)t.dispatch(new Jt(this,2,l,(i=n.get(l))===null||i===void 0?void 0:i.evaluator.value));e.notify()}removeChild(t){if(t.parent===this){let o=e.composeAssignedTokensForNode(this);t._parent=null,this._children.delete(t);for(let i of o)t.dispatch(new Jt(this,2,i));e.notify()}}dispose(){this.parent&&(this.parent._children.delete(this),this._parent=null);for(let[,t]of this._derived)t.dispose()}setTokenValue(t,o){let i=e.isAssigned(this,t)||e.isDerivedFor(this,t)?1:0,r=e.getLocalTokenValue(this,t);this._values.set(t,o),e.isDerivedFor(this,t)&&this.tearDownDerivedTokenValue(t);let s=e.isDerivedTokenValue(o),n=e.collectDerivedContext(this),l;s?l=this.setupDerivedTokenValue(t,o,!0).value:l=o,r!==l&&e.queueNotification(new Jt(this,i,t,o)),this.dispatch(new Jt(this,i,t,o)),n.forEach((c,p)=>{if(!e.isDerivedFor(this,p)){let d=e.getLocalTokenValue(this,p);c=this.setupDerivedTokenValue(p,c.evaluator.value);let u=c.value;d!==u&&e.queueNotification(new Jt(this,1,p,c.evaluator.value)),this.dispatch(new Jt(this,0,p,c.evaluator.value))}}),e.notify()}getTokenValue(t){let o=this,i;for(;o!==null;){if(e.isDerivedFor(o,t)){i=o._derived.get(t).value;break}if(e.isAssigned(o,t)){i=o._values.get(t);break}o=o._parent}if(i!==void 0)return i;throw new Error(`No value set for token ${t} in node tree.`)}deleteTokenValue(t){if(e.isAssigned(this,t)){let o=e.getLocalTokenValue(this,t);this._values.delete(t),this.tearDownDerivedTokenValue(t);let i;try{i=this.getTokenValue(t)}catch{i=void 0}e.queueNotification(new Jt(this,2,t)),o!==i&&this.dispatch(new Jt(this,2,t)),e.notify()}}dispatch(t){var o,i,r;if(this!==t.target){let{token:s}=t,n=e.isAssigned(this,s),l=n&&((o=this._derived.get(s))===null||o===void 0?void 0:o.evaluator.dependencies.has(s));if(n&&!l)return;t.type===2&&!n&&e.isDerivedFor(this,s)&&(this.tearDownDerivedTokenValue(s),e.queueNotification(new Jt(this,2,s))),l&&(t=new Jt(this,1,s,(i=this._derived.get(s))===null||i===void 0?void 0:i.evaluator.value));let{value:c}=t;if(c&&e.isDerivedTokenValue(c)){let p=vn.getOrCreate(c).dependencies,d=!1;for(let u of p)if(e.isAssigned(this,u)){d=!0;break}if(d){let u=(r=this._derived.get(s))===null||r===void 0?void 0:r.value,g=this.setupDerivedTokenValue(s,c);if(u!==g.value){let x=u===void 0?0:1,k=new Jt(this,x,s,g.evaluator.value);e.queueNotification(k),t=k}}}}this.collectLocalChangeRecords(t).forEach(s=>{e.queueNotification(s),this.dispatch(s)}),this.notifyChildren(t)}collectLocalChangeRecords(t){let o=new Map;for(let i of e.getOrCreateDependencyGraph(this,t.token))i.value!==i.update().value&&o.set(i.token,new Jt(this,1,i.token,i.evaluator.value));return o}notifyChildren(...t){if(this.children.length)for(let o=0,i=this.children.length;o<i;o++)for(let r=0;r<t.length;r++)this.children[o].dispatch(t[r])}tearDownDerivedTokenValue(t){if(e.isDerivedFor(this,t)){let o=this._derived.get(t);o.dispose(),this._derived.delete(t),o.evaluator.dependencies.forEach(i=>{e.getOrCreateDependencyGraph(this,i).delete(o)})}}setupDerivedTokenValue(t,o,i=!1){let r=new Zd(t,vn.getOrCreate(o),this,i?{handleChange:()=>{if(r.value!==r.update().value){let s=new Jt(this,1,r.token,r.evaluator.value);e.queueNotification(s),this.dispatch(s),e.notify()}}}:void 0);return this._derived.set(t,r),r.evaluator.dependencies.forEach(s=>{s!==t&&e.getOrCreateDependencyGraph(this,s).add(r)}),r}};Xr._notifications=[];var Sn=class{setProperty(t,o){$.enqueue(()=>this.target.setProperty(t,o))}removeProperty(t){$.enqueue(()=>this.target.removeProperty(t))}},ep=class extends Sn{constructor(t){super();let o=new CSSStyleSheet;this.target=o.cssRules[o.insertRule(":host{}")].style,t.$fastController.addStyles(new ut([o]))}},op=class extends Sn{constructor(){super();let t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,t]}},ip=class extends Sn{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:t}=this.style;if(t){let o=t.insertRule(":root{}",t.cssRules.length);this.target=t.cssRules[o].style}}},tl=class{constructor(t){this.store=new Map,this.target=null;let o=t.$fastController;this.style=document.createElement("style"),o.addStyles(this.style),I.getNotifier(o).subscribe(this,"isConnected"),this.handleChange(o,"isConnected")}targetChanged(){if(this.target!==null)for(let[t,o]of this.store.entries())this.target.setProperty(t,o)}setProperty(t,o){this.store.set(t,o),$.enqueue(()=>{this.target!==null&&this.target.setProperty(t,o)})}removeProperty(t){this.store.delete(t),$.enqueue(()=>{this.target!==null&&this.target.removeProperty(t)})}handleChange(t,o){let{sheet:i}=this.style;if(i){let r=i.insertRule(":host{}",i.cssRules.length);this.target=i.cssRules[r].style}else this.target=null}};a([f],tl.prototype,"target",void 0);var Fi=class e{setProperty(t,o){e.properties[t]=o;for(let i of e.roots.values())i.setProperty(t,o)}removeProperty(t){delete e.properties[t];for(let o of e.roots.values())o.removeProperty(t)}static registerRoot(t){let{roots:o}=e;if(!o.has(t)){o.add(t);for(let i in e.properties)t.setProperty(i,e.properties[i])}}static unregisterRoot(t){let{roots:o}=e;if(o.has(t)){o.delete(t);for(let i in e.properties)t.removeProperty(i)}}};Fi.roots=new Set;Fi.properties={};var tp=new WeakMap,ak=ut.supportsAdoptedStyleSheets?ep:tl,el=Object.freeze({getOrCreate(e){if(tp.has(e))return tp.get(e);let t;return e instanceof Document?t=ut.supportsAdoptedStyleSheets?new op:new ip:t=new ak(e),tp.set(e,t),t}});var de=class e{constructor(t){this.subscriberNotifier={handleChange:(o,i)=>{let r={target:i.target===se.defaultNode?"default":i.target.target,token:this};this.subscribers.notify(r)}},this.name=t.name,I.getNotifier(this).subscribe(this.subscriberNotifier)}get $value(){return this.default}get default(){return se.defaultNode.getTokenValue(this)}get subscribers(){return this._subscribers?this._subscribers:(this._subscribers=new je(this),this._subscribers)}static isCSSDesignTokenConfiguration(t){return typeof t.cssCustomPropertyName=="string"}static create(t){return typeof t=="string"?new Xe({name:t,cssCustomPropertyName:t}):e.isCSSDesignTokenConfiguration(t)?new Xe(t):new e(t)}static withStrategy(t){se.withStrategy(t)}static registerDefaultStyleTarget(t=document){(t instanceof D||t instanceof Document)&&(t=el.getOrCreate(t)),Fi.registerRoot(t)}static unregisterDefaultStyleTarget(t=document){(t instanceof D||t instanceof Document)&&(t=el.getOrCreate(t)),Fi.unregisterRoot(t)}getValueFor(t){return se.getOrCreate(t).getTokenValue(this)}setValueFor(t,o){se.getOrCreate(t).setTokenValue(this,this.normalizeValue(o))}deleteValueFor(t){return se.getOrCreate(t).deleteTokenValue(this),this}withDefault(t){return se.defaultNode.setTokenValue(this,this.normalizeValue(t)),this}subscribe(t){this.subscribers.subscribe(t)}unsubscribe(t){this.subscribers.unsubscribe(t)}alias(t){return o=>o(t)}normalizeValue(t){return t instanceof e&&(t=this.alias(t)),t}},Xe=class extends de{constructor(t){super(t),this.cssReflector={handleChange:(o,i)=>{let r=i.target===se.defaultNode?se.rootStyleSheetTarget:i.target instanceof se?el.getOrCreate(i.target.target):null;r&&(i.type===2?r.removeProperty(this.cssCustomProperty):r.setProperty(this.cssCustomProperty,this.resolveCSSValue(i.target.getTokenValue(this))))}},this.cssCustomProperty=`--${t.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`,I.getNotifier(this).subscribe(this.cssReflector)}createCSS(){return this.cssVar}createHTML(){return this.cssVar}resolveCSSValue(t){return t&&typeof t.createCSS=="function"?t.createCSS():t}};Xe=a([Oo(),Ns()],Xe);var lk={contains:$m,parent(e){let t=Za(e);for(;t!==null;){if(t instanceof D)return t;t=Za(t)}return null}},se=class e extends Xr{constructor(t){super(),this.target=t,this.setTokenValue=this.lazyAttachToDefault(super.setTokenValue),this.getTokenValue=this.lazyAttachToDefault(super.getTokenValue),this.deleteTokenValue=this.lazyAttachToDefault(super.deleteTokenValue)}static get strategy(){return this._strategy===void 0&&e.withStrategy(lk),this._strategy}connectedCallback(t){let o=e.findParent(t.source);if(o===null&&(o=e.defaultNode),o!==this.parent){let i=[];for(let r of o.children)r instanceof e&&e.strategy.contains(t.source,r.target)&&i.push(r);o.appendChild(this);for(let r of i)this.appendChild(r)}}disconnectedCallback(t){e.cache.delete(this.target),this.dispose()}static getOrCreate(t){let o=e.cache.get(t);return o||(o=new e(t),e.cache.set(t,o),t.$fastController.addBehavior(e.strategy),t.$fastController.addBehavior(o),o)}static withStrategy(t){this._strategy=t}static findParent(t){let o=e.strategy.parent(t);for(;o!==null;){let i=e.cache.get(o);if(i)return i;o=e.strategy.parent(o)}return null}lazyAttachToDefault(t){return(...i)=>(this.parent===null&&e.defaultNode.appendChild(this),t.apply(this,i))}};se.defaultNode=new Xr;se.rootStyleSheetTarget=new Fi;se.cache=new WeakMap;function rp(){return m`
        <div class="positioning-region" part="positioning-region">
            ${X(e=>e.modal,m`
                    <div
                        class="overlay"
                        part="overlay"
                        role="presentation"
                        @click="${e=>e.dismiss()}"
                    ></div>
                `)}
            <div
                role="dialog"
                tabindex="-1"
                class="control"
                part="control"
                aria-modal="${e=>e.modal?e.modal:void 0}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-label="${e=>e.ariaLabel}"
                ${z("dialog")}
            >
                <slot></slot>
            </div>
        </div>
    `}var Ye=class e extends D{constructor(){super(...arguments),this.modal=!1,this.hidden=!1,this.noFocusTrap=!1,this.noFocusTrapChanged=()=>{this.$fastController.isConnected&&this.updateTrapFocus()},this.isTrappingFocus=!1,this.handleDocumentKeydown=t=>{if(!t.defaultPrevented&&!this.hidden)switch(t.key){case Yt:this.dismiss(),t.preventDefault();break;case vi:this.handleTabKeyDown(t);break}},this.handleDocumentFocus=t=>{!t.defaultPrevented&&this.shouldForceFocus(t.target)&&(this.focusFirstElement(),t.preventDefault())},this.handleTabKeyDown=t=>{if(this.noFocusTrap||this.hidden)return;let o=this.getTabQueueBounds();if(o.length!==0){if(o.length===1){o[0].focus(),t.preventDefault();return}t.shiftKey&&t.target===o[0]?(o[o.length-1].focus(),t.preventDefault()):!t.shiftKey&&t.target===o[o.length-1]&&(o[0].focus(),t.preventDefault())}},this.getTabQueueBounds=()=>{let t=[];return e.reduceTabbableItems(t,this)},this.focusFirstElement=()=>{let t=this.getTabQueueBounds();t.length>0?t[0].focus():this.dialog instanceof HTMLElement&&this.dialog.focus()},this.shouldForceFocus=t=>this.isTrappingFocus&&!this.contains(t),this.shouldTrapFocus=()=>!this.noFocusTrap&&!this.hidden,this.updateTrapFocus=t=>{let o=t===void 0?this.shouldTrapFocus():t;o&&!this.isTrappingFocus?(this.isTrappingFocus=!0,document.addEventListener("focusin",this.handleDocumentFocus),$.enqueue(()=>{this.shouldForceFocus(document.activeElement)&&this.focusFirstElement()})):!o&&this.isTrappingFocus&&(this.isTrappingFocus=!1,document.removeEventListener("focusin",this.handleDocumentFocus))}}dismiss(){this.$emit("dismiss"),this.$emit("cancel")}show(){this.hidden=!1}hide(){this.hidden=!0,this.$emit("close")}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleDocumentKeydown),this.notifier=I.getNotifier(this),this.notifier.subscribe(this,"hidden"),this.updateTrapFocus()}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleDocumentKeydown),this.updateTrapFocus(!1),this.notifier.unsubscribe(this,"hidden")}handleChange(t,o){switch(o){case"hidden":this.updateTrapFocus();break;default:break}}static reduceTabbableItems(t,o){return o.getAttribute("tabindex")==="-1"?t:Qd(o)||e.isFocusableFastElement(o)&&e.hasTabbableShadow(o)?(t.push(o),t):o.childElementCount?t.concat(Array.from(o.children).reduce(e.reduceTabbableItems,[])):t}static isFocusableFastElement(t){var o,i;return!!(!((i=(o=t.$fastController)===null||o===void 0?void 0:o.definition.shadowOptions)===null||i===void 0)&&i.delegatesFocus)}static hasTabbableShadow(t){var o,i;return Array.from((i=(o=t.shadowRoot)===null||o===void 0?void 0:o.querySelectorAll("*"))!==null&&i!==void 0?i:[]).some(r=>Qd(r))}};a([h({mode:"boolean"})],Ye.prototype,"modal",void 0);a([h({mode:"boolean"})],Ye.prototype,"hidden",void 0);a([h({attribute:"no-focus-trap",mode:"boolean"})],Ye.prototype,"noFocusTrap",void 0);a([h({attribute:"aria-describedby"})],Ye.prototype,"ariaDescribedby",void 0);a([h({attribute:"aria-labelledby"})],Ye.prototype,"ariaLabelledby",void 0);a([h({attribute:"aria-label"})],Ye.prototype,"ariaLabel",void 0);function sp(e={}){return m`
        <details class="disclosure" ${z("details")}>
            <summary
                class="invoker"
                role="button"
                aria-controls="disclosure-content"
                aria-expanded="${t=>t.expanded}"
            >
                ${Z(e)}
                <slot name="summary">${t=>t.summary}</slot>
                ${J(e)}
            </summary>
            <div id="disclosure-content"><slot></slot></div>
        </details>
    `}var Ii=class extends D{constructor(){super(...arguments),this.expanded=!1}connectedCallback(){super.connectedCallback(),this.setup()}disconnectedCallback(){super.disconnectedCallback(),this.details.removeEventListener("toggle",this.onToggle)}show(){this.details.open=!0}hide(){this.details.open=!1}toggle(){this.details.open=!this.details.open}setup(){this.onToggle=this.onToggle.bind(this),this.details.addEventListener("toggle",this.onToggle),this.expanded&&this.show()}onToggle(){this.expanded=this.details.open,this.$emit("toggle")}};a([h({mode:"boolean"})],Ii.prototype,"expanded",void 0);a([h],Ii.prototype,"summary",void 0);H(Ii,q);var ol={separator:"separator",presentation:"presentation"},_m=kt;function np(){return m`
        <template
            role="${e=>e.role}"
            aria-orientation="${e=>e.role!==ol.presentation?e.orientation:void 0}"
        >
            <slot></slot>
        </template>
    `}var ir=class extends D{constructor(){super(...arguments),this.role=ol.separator,this.orientation=_m.horizontal}};a([h],ir.prototype,"role",void 0);a([h],ir.prototype,"orientation",void 0);function ap(e={}){let t={};function o(i,r){let s=t[i];return s||(t[i]=s=m`
                <span part="${i}" class="${i}">
                    <slot name="${i}">
                        ${N(r[i])}
                    </slot>
                </span>
            `),s}return m`
        <template
            role="button"
            aria-disabled="${i=>i.disabled?!0:void 0}"
            tabindex="${i=>i.hiddenFromAT?-1:0}"
            @keyup="${(i,r)=>i.keyupHandler(r.event)}"
        >
            ${i=>o(i.direction,e)}
        </template>
    `}var lp={next:"next",previous:"previous"};var Ai=class extends D{constructor(){super(...arguments),this.hiddenFromAT=!0,this.direction=lp.next}keyupHandler(t){if(!this.hiddenFromAT){let o=t.key;(o==="Enter"||o==="Space")&&this.$emit("click",t),o==="Escape"&&this.blur()}}};a([h({mode:"boolean"})],Ai.prototype,"disabled",void 0);a([h({attribute:"aria-hidden",converter:Lo})],Ai.prototype,"hiddenFromAT",void 0);a([h],Ai.prototype,"direction",void 0);function cp(e={}){return m`
        <template
            aria-checked="${t=>t.ariaChecked}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-posinset="${t=>t.ariaPosInSet}"
            aria-selected="${t=>t.ariaSelected}"
            aria-setsize="${t=>t.ariaSetSize}"
            role="option"
        >
            ${Z(e)}
            <span class="content" part="content">
                <slot ${M("content")}></slot>
            </span>
            ${J(e)}
        </template>
    `}var Ae=class extends At{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var t;return(t=this.options)===null||t===void 0?void 0:t.filter(o=>o.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(t,o){var i,r;this.ariaActiveDescendant=(r=(i=this.options[o])===null||i===void 0?void 0:i.id)!==null&&r!==void 0?r:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let t=this.activeOption;t&&(t.checked=!0)}checkFirstOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((o,i)=>{o.checked=on(i,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,i)=>{o.checked=on(i,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((o,i)=>{o.checked=on(i,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(t=!1){t?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((o,i)=>{o.checked=on(i,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(t){var o;if(!this.multiple)return super.clickHandler(t);let i=(o=t.target)===null||o===void 0?void 0:o.closest("[role=option]");if(!(!i||i.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(i),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(t){if(!this.multiple)return super.focusinHandler(t);!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(t){this.multiple&&this.uncheckAllOptions()}keydownHandler(t){if(!this.multiple)return super.keydownHandler(t);if(this.disabled)return!0;let{key:o,shiftKey:i}=t;switch(this.shouldSkipFocus=!1,o){case xt:{this.checkFirstOption(i);return}case nt:{this.checkNextOption(i);return}case at:{this.checkPreviousOption(i);return}case gt:{this.checkLastOption(i);return}case vi:return this.focusAndScrollOptionIntoView(),!0;case Yt:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Qt:if(t.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return o.length===1&&this.handleTypeAhead(`${o}`),!0}}mousedownHandler(t){if(t.offsetX>=0&&t.offsetX<=this.scrollWidth)return super.mousedownHandler(t)}multipleChanged(t,o){var i;this.ariaMultiSelectable=o?"true":null,(i=this.options)===null||i===void 0||i.forEach(r=>{r.checked=o?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(t=>t.selected),this.focusAndScrollOptionIntoView())}sizeChanged(t,o){var i;let r=Math.max(0,parseInt((i=o?.toFixed())!==null&&i!==void 0?i:"",10));r!==o&&$.enqueue(()=>{this.size=r})}toggleSelectedForAllCheckedOptions(){let t=this.checkedOptions.filter(i=>!i.disabled),o=!t.every(i=>i.selected);t.forEach(i=>i.selected=o),this.selectedIndex=this.options.indexOf(t[t.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(t,o){if(!this.multiple){super.typeaheadBufferChanged(t,o);return}if(this.$fastController.isConnected){let i=this.getTypeaheadMatches(),r=this.options.indexOf(i[0]);r>-1&&(this.activeIndex=r,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(t=!1){this.options.forEach(o=>o.checked=this.multiple?!1:void 0),t||(this.rangeStartIndex=-1)}};a([f],Ae.prototype,"activeIndex",void 0);a([h({mode:"boolean"})],Ae.prototype,"multiple",void 0);a([h({converter:G})],Ae.prototype,"size",void 0);function dp(){return m`
        <template
            aria-activedescendant="${e=>e.ariaActiveDescendant}"
            aria-multiselectable="${e=>e.ariaMultiSelectable}"
            role="listbox"
            tabindex="${e=>e.disabled?null:"0"}"
            @click="${(e,t)=>e.clickHandler(t.event)}"
            @focusin="${(e,t)=>e.focusinHandler(t.event)}"
            @keydown="${(e,t)=>e.keydownHandler(t.event)}"
            @mousedown="${(e,t)=>e.mousedownHandler(t.event)}"
        >
            <slot
                ${M({filter:Ae.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </template>
    `}var ck=m`
    <template>${e=>e.value}</template>
`,Zo=class extends D{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){this.disconnectView(),super.disconnectedCallback()}handleKeyDown(t){return t.defaultPrevented?!1:t.key===bt?(this.handleInvoke(),!1):!0}handleClick(t){return t.defaultPrevented||this.handleInvoke(),!1}handleInvoke(){this.$emit("pickeriteminvoked")}updateView(){var t,o;this.disconnectView(),this.customView=(o=(t=this.contentsTemplate)===null||t===void 0?void 0:t.render(this,this))!==null&&o!==void 0?o:ck.render(this,this)}disconnectView(){var t;(t=this.customView)===null||t===void 0||t.dispose(),this.customView=void 0}};a([h({attribute:"value"})],Zo.prototype,"value",void 0);a([f],Zo.prototype,"contentsTemplate",void 0);function pp(){return m`
        <template
            role="listitem"
            tabindex="0"
            @click="${(e,t)=>e.handleClick(t.event)}"
            @keydown="${(e,t)=>e.handleKeyDown(t.event)}"
        >
            <slot></slot>
        </template>
    `}var wn=class extends D{};function hp(){return m`
        <template slot="list-region" role="list">
            <slot></slot>
            <slot name="input-region"></slot>
        </template>
    `}var dk=m`
    <template>${e=>e.value}</template>
`,ti=class extends D{contentsTemplateChanged(){this.$fastController.isConnected&&this.updateView()}connectedCallback(){super.connectedCallback(),this.updateView()}disconnectedCallback(){super.disconnectedCallback(),this.disconnectView()}handleClick(t){return t.defaultPrevented||this.handleInvoked(),!1}handleInvoked(){this.$emit("pickeroptioninvoked")}updateView(){var t,o;this.disconnectView(),this.customView=(o=(t=this.contentsTemplate)===null||t===void 0?void 0:t.render(this,this))!==null&&o!==void 0?o:dk.render(this,this)}disconnectView(){var t;(t=this.customView)===null||t===void 0||t.dispose(),this.customView=void 0}};a([h({attribute:"value"})],ti.prototype,"value",void 0);a([f],ti.prototype,"contentsTemplate",void 0);function up(){return m`
        <template
            role="listitem"
            tabindex="-1"
            @click="${(e,t)=>e.handleClick(t.event)}"
        >
            <slot></slot>
        </template>
    `}var ei=class extends D{constructor(){super(...arguments),this.optionElements=[]}menuElementsChanged(){this.updateOptions()}headerElementsChanged(){this.updateOptions()}footerElementsChanged(){this.updateOptions()}updateOptions(){this.optionElements.splice(0,this.optionElements.length),this.addSlottedListItems(this.headerElements),this.addSlottedListItems(this.menuElements),this.addSlottedListItems(this.footerElements),this.$emit("optionsupdated",{bubbles:!1})}addSlottedListItems(t){t!==void 0&&t.forEach(o=>{o.nodeType===1&&o.getAttribute("role")==="listitem"&&(o.id=o.id||Nt("option-"),this.optionElements.push(o))})}};a([f],ei.prototype,"menuElements",void 0);a([f],ei.prototype,"headerElements",void 0);a([f],ei.prototype,"footerElements",void 0);a([f],ei.prototype,"suggestionsAvailableText",void 0);function mp(){return m`
        <template role="list" slot="menu-region">
            <div class="options-display" part="options-display">
                <div class="header-region" part="header-region">
                    <slot name="header-region" ${M("headerElements")}></slot>
                </div>

                <slot ${M("menuElements")}></slot>
                <div class="footer-region" part="footer-region">
                    <slot name="footer-region" ${M("footerElements")}></slot>
                </div>
                <div
                    role="alert"
                    aria-live="polite"
                    part="suggestions-available-alert"
                    class="suggestions-available-alert"
                >
                    ${e=>e.suggestionsAvailableText}
                </div>
            </div>
        </template>
    `}var fp=class extends D{},il=class extends It(fp){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Hm={bottom:"bottom",bottomFill:"bottom-fill",tallest:"tallest",tallestFill:"tallest-fill",top:"top",topFill:"top-fill"};var pk=m`
    <input
        slot="input-region"
        role="combobox"
        type="text"
        autocapitalize="off"
        autocomplete="off"
        haspopup="list"
        aria-label="${e=>e.label}"
        aria-labelledby="${e=>e.labelledBy}"
        placeholder="${e=>e.placeholder}"
        ${z("inputElement")}
    />
`,K=class extends il{constructor(){super(...arguments),this.selection="",this.filterSelected=!0,this.filterQuery=!0,this.maxSelected=null,this.noSuggestionsText="No suggestions available",this.suggestionsAvailableText="Suggestions available",this.loadingText="Loading suggestions",this.menuPlacement=Hm.bottomFill,this.showLoading=!1,this.optionsList=[],this.filteredOptionsList=[],this.flyoutOpen=!1,this.menuFocusIndex=-1,this.showNoOptions=!1,this.selectedItems=[],this.inputElementView=null,this.behaviorOrchestrator=null,this.handleTextInput=t=>{this.query=this.inputElement.value},this.handleInputClick=t=>{t.preventDefault(),this.toggleFlyout(!0)},this.setRegionProps=()=>{if(this.flyoutOpen){if(this.region===null||this.region===void 0){$.enqueue(this.setRegionProps);return}this.region.anchorElement=this.inputElement}},this.configLookup={top:Ma,bottom:Pa,tallest:La,"top-fill":Cd,"bottom-fill":_a,"tallest-fill":Td}}selectionChanged(){this.$fastController.isConnected&&(this.handleSelectionChange(),this.proxy instanceof HTMLInputElement&&(this.proxy.value=this.selection,this.validate()))}optionsChanged(){this.optionsList=this.options.split(",").map(t=>t.trim()).filter(t=>t!=="")}menuPlacementChanged(){this.$fastController.isConnected&&this.updateMenuConfig()}showLoadingChanged(){this.$fastController.isConnected&&$.enqueue(()=>{this.setFocusedOption(0)})}listItemTemplateChanged(){this.updateListItemTemplate()}defaultListItemTemplateChanged(){this.updateListItemTemplate()}menuOptionTemplateChanged(){this.updateOptionTemplate()}defaultMenuOptionTemplateChanged(){this.updateOptionTemplate()}optionsListChanged(){this.updateFilteredOptions()}queryChanged(){this.$fastController.isConnected&&(this.inputElement.value!==this.query&&(this.inputElement.value=this.query),this.updateFilteredOptions(),this.$emit("querychange",{bubbles:!1}))}filteredOptionsListChanged(){this.$fastController.isConnected&&$.enqueue(()=>{this.showNoOptions=this.menuElement.querySelectorAll('[role="listitem"]').length===0,this.setFocusedOption(this.showNoOptions?-1:0)})}flyoutOpenChanged(){this.flyoutOpen?($.enqueue(this.setRegionProps),this.$emit("menuopening",{bubbles:!1})):this.$emit("menuclosing",{bubbles:!1})}showNoOptionsChanged(){this.$fastController.isConnected&&$.enqueue(()=>{this.setFocusedOption(0)})}connectedCallback(){super.connectedCallback(),this.listElement||(this.listElement=document.createElement(this.selectedListTag),this.appendChild(this.listElement),this.itemsPlaceholderElement=document.createComment(""),this.listElement.appendChild(this.itemsPlaceholderElement)),this.inputElementView=pk.render(this,this.listElement);let t=this.menuTag.toUpperCase();this.menuElement=Array.from(this.children).find(o=>o.tagName===t),this.menuElement||(this.menuElement=document.createElement(this.menuTag),this.appendChild(this.menuElement),this.menuElement.id===""&&(this.menuElement.id=Nt("listbox-")),this.menuId=this.menuElement.id),this.optionsPlaceholder||(this.optionsPlaceholder=document.createComment(""),this.menuElement.appendChild(this.optionsPlaceholder)),this.updateMenuConfig(),$.enqueue(()=>this.initialize())}disconnectedCallback(){super.disconnectedCallback(),this.toggleFlyout(!1),this.inputElement.removeEventListener("input",this.handleTextInput),this.inputElement.removeEventListener("click",this.handleInputClick),this.inputElementView!==null&&(this.inputElementView.dispose(),this.inputElementView=null)}focus(){this.inputElement.focus()}initialize(){this.updateListItemTemplate(),this.updateOptionTemplate(),this.behaviorOrchestrator===null&&(this.behaviorOrchestrator=Kr.create(this),this.$fastController.addBehavior(this.behaviorOrchestrator),this.behaviorOrchestrator.addBehaviorFactory(new Re(Et(t=>t.selectedItems),Et(t=>t.activeListItemTemplate),{positioning:!0}),this.itemsPlaceholderElement),this.behaviorOrchestrator.addBehaviorFactory(new Re(Et(t=>t.filteredOptionsList),Et(t=>t.activeMenuOptionTemplate),{positioning:!0}),this.optionsPlaceholder)),this.inputElement.addEventListener("input",this.handleTextInput),this.inputElement.addEventListener("click",this.handleInputClick),this.menuElement.suggestionsAvailableText=this.suggestionsAvailableText,this.menuElement.addEventListener("optionsupdated",this.handleMenuOptionsUpdated),this.handleSelectionChange()}toggleFlyout(t){if(this.flyoutOpen!==t){if(t&&this.getRootActiveElement()===this.inputElement){this.flyoutOpen=t,$.enqueue(()=>{this.menuElement!==void 0?this.setFocusedOption(0):this.disableMenu()});return}this.flyoutOpen=!1,this.disableMenu()}}handleMenuOptionsUpdated(t){t.preventDefault(),this.flyoutOpen&&this.setFocusedOption(0)}handleKeyDown(t){if(t.defaultPrevented)return!1;let o=this.getRootActiveElement();switch(t.key){case nt:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{let i=this.flyoutOpen?Math.min(this.menuFocusIndex+1,this.menuElement.optionElements.length-1):0;this.setFocusedOption(i)}return!1}case at:{if(!this.flyoutOpen)this.toggleFlyout(!0);else{let i=this.flyoutOpen?Math.max(this.menuFocusIndex-1,0):0;this.setFocusedOption(i)}return!1}case Yt:return this.toggleFlyout(!1),!1;case bt:return this.menuFocusIndex!==-1&&this.menuElement.optionElements.length>this.menuFocusIndex&&this.menuElement.optionElements[this.menuFocusIndex].click(),!1;case Lt:return o!==this.inputElement?(this.incrementFocusedItem(1),!1):!0;case Pt:return this.inputElement.selectionStart===0?(this.incrementFocusedItem(-1),!1):!0;case Ku:case Wu:{if(o===null)return!0;if(o===this.inputElement)return this.inputElement.selectionStart===0?(this.selection=this.selectedItems.slice(0,this.selectedItems.length-1).toString(),this.toggleFlyout(!1),!1):!0;let i=Array.from(this.listElement.children),r=i.indexOf(o);return r>-1?(this.selection=this.selectedItems.splice(r,1).toString(),$.enqueue(()=>{i[Math.min(i.length,r)].focus()}),!1):!0}}return this.toggleFlyout(!0),!0}handleFocusIn(t){return!1}handleFocusOut(t){return(this.menuElement===void 0||!this.menuElement.contains(t.relatedTarget))&&this.toggleFlyout(!1),!1}handleSelectionChange(){this.selectedItems.toString()!==this.selection&&(this.selectedItems=this.selection===""?[]:this.selection.split(","),this.updateFilteredOptions(),$.enqueue(()=>{this.checkMaxItems()}),this.$emit("selectionchange",{bubbles:!1}))}handleRegionLoaded(t){$.enqueue(()=>{this.setFocusedOption(0),this.$emit("menuloaded",{bubbles:!1})})}checkMaxItems(){if(this.inputElement!==void 0)if(this.maxSelected!==null&&this.maxSelected!==0&&this.selectedItems.length>=this.maxSelected){if(this.getRootActiveElement()===this.inputElement){let t=Array.from(this.listElement.querySelectorAll("[role='listitem']"));t[t.length-1].focus()}this.inputElement.hidden=!0}else this.inputElement.hidden=!1}getRootActiveElement(){let t=this.getRootNode();return t instanceof ShadowRoot?t.activeElement:document.activeElement}handleItemInvoke(t){if(t.defaultPrevented)return!1;if(t.target instanceof Zo){let i=Array.from(this.listElement.querySelectorAll("[role='listitem']")).indexOf(t.target);if(i!==-1){let r=this.selectedItems.slice();r.splice(i,1),this.selection=r.toString(),$.enqueue(()=>{this.incrementFocusedItem(0),this.toggleFlyout(!0)})}return!1}return!0}handleOptionInvoke(t){return t.defaultPrevented?!1:t.target instanceof ti&&t.target.value!==void 0?(this.maxSelected===0?this.query=t.target.value:(this.query="",this.selection=`${this.selection}${this.selection===""?"":","}${t.target.value}`),this.toggleFlyout(!1),this.inputElement.focus(),!1):!0}incrementFocusedItem(t){if(this.selectedItems.length===0){this.inputElement.focus();return}let o=Array.from(this.listElement.querySelectorAll("[role='listitem']")),i=this.getRootActiveElement();if(i!==null){let r=o.indexOf(i);r===-1&&(r=o.length);let s=Math.min(o.length,Math.max(0,r+t));s===o.length?this.maxSelected!==null&&this.selectedItems.length>=this.maxSelected?o[s-1].focus():this.inputElement.focus():o[s].focus()}}disableMenu(){var t,o,i;this.menuFocusIndex=-1,this.menuFocusOptionId=void 0,(t=this.inputElement)===null||t===void 0||t.removeAttribute("aria-activedescendant"),(o=this.inputElement)===null||o===void 0||o.removeAttribute("aria-owns"),(i=this.inputElement)===null||i===void 0||i.removeAttribute("aria-expanded")}setFocusedOption(t){if(!this.flyoutOpen||t===-1||this.showNoOptions||this.showLoading){this.disableMenu();return}if(this.menuElement.optionElements.length===0)return;this.menuElement.optionElements.forEach(i=>{i.setAttribute("aria-selected","false")}),this.menuFocusIndex=t,this.menuFocusIndex>this.menuElement.optionElements.length-1&&(this.menuFocusIndex=this.menuElement.optionElements.length-1),this.menuFocusOptionId=this.menuElement.optionElements[this.menuFocusIndex].id,this.inputElement.setAttribute("aria-owns",this.menuId),this.inputElement.setAttribute("aria-expanded","true"),this.inputElement.setAttribute("aria-activedescendant",this.menuFocusOptionId);let o=this.menuElement.optionElements[this.menuFocusIndex];o.setAttribute("aria-selected","true"),o.scrollIntoView(!0)}updateListItemTemplate(){var t;this.activeListItemTemplate=(t=this.listItemTemplate)!==null&&t!==void 0?t:this.defaultListItemTemplate}updateOptionTemplate(){var t;this.activeMenuOptionTemplate=(t=this.menuOptionTemplate)!==null&&t!==void 0?t:this.defaultMenuOptionTemplate}updateFilteredOptions(){if(this.filteredOptionsList=this.optionsList.slice(0),this.filterSelected&&(this.filteredOptionsList=this.filteredOptionsList.filter(t=>this.selectedItems.indexOf(t)===-1)),this.filterQuery&&this.query!==""&&this.query!==void 0){let t=this.query.toLowerCase();this.filteredOptionsList=this.filteredOptionsList.filter(o=>o.toLowerCase().indexOf(t)!==-1)}}updateMenuConfig(){let t=this.configLookup[this.menuPlacement];t===null&&(t=_a),this.menuConfig=Object.assign(Object.assign({},t),{autoUpdateMode:"auto",fixedPlacement:!0,horizontalViewportLock:!1,verticalViewportLock:!1})}};a([h({attribute:"selection"})],K.prototype,"selection",void 0);a([h({attribute:"options"})],K.prototype,"options",void 0);a([h({attribute:"filter-selected",mode:"boolean"})],K.prototype,"filterSelected",void 0);a([h({attribute:"filter-query",mode:"boolean"})],K.prototype,"filterQuery",void 0);a([h({attribute:"max-selected",converter:G})],K.prototype,"maxSelected",void 0);a([h({attribute:"no-suggestions-text"})],K.prototype,"noSuggestionsText",void 0);a([h({attribute:"suggestions-available-text"})],K.prototype,"suggestionsAvailableText",void 0);a([h({attribute:"loading-text"})],K.prototype,"loadingText",void 0);a([h({attribute:"label"})],K.prototype,"label",void 0);a([h({attribute:"labelledby"})],K.prototype,"labelledBy",void 0);a([h({attribute:"placeholder"})],K.prototype,"placeholder",void 0);a([h({attribute:"menu-placement"})],K.prototype,"menuPlacement",void 0);a([f],K.prototype,"showLoading",void 0);a([f],K.prototype,"listItemTemplate",void 0);a([f],K.prototype,"defaultListItemTemplate",void 0);a([f],K.prototype,"activeListItemTemplate",void 0);a([f],K.prototype,"menuOptionTemplate",void 0);a([f],K.prototype,"defaultMenuOptionTemplate",void 0);a([f],K.prototype,"activeMenuOptionTemplate",void 0);a([f],K.prototype,"listItemContentsTemplate",void 0);a([f],K.prototype,"menuOptionContentsTemplate",void 0);a([f],K.prototype,"optionsList",void 0);a([f],K.prototype,"query",void 0);a([f],K.prototype,"filteredOptionsList",void 0);a([f],K.prototype,"flyoutOpen",void 0);a([f],K.prototype,"menuId",void 0);a([f],K.prototype,"selectedListTag",void 0);a([f],K.prototype,"menuTag",void 0);a([f],K.prototype,"menuFocusIndex",void 0);a([f],K.prototype,"menuFocusOptionId",void 0);a([f],K.prototype,"showNoOptions",void 0);a([f],K.prototype,"menuConfig",void 0);a([f],K.prototype,"selectedItems",void 0);function hk(e){let t=m.partial(yt(e.pickerListItem));return m`
    <${t}
        value="${o=>o}"
        :contentsTemplate="${(o,i)=>i.parent.listItemContentsTemplate}"
    >
    </${t}>
    `}function uk(e){let t=m.partial(yt(e.pickerMenuOption));return m`
    <${t}
        value="${o=>o}"
        :contentsTemplate="${(o,i)=>i.parent.menuOptionContentsTemplate}"
    >
    </${t}>
    `}function yp(e){let t=m.partial(yt(e.anchoredRegion)),o=yt(e.pickerMenu),i=yt(e.pickerList),r=m.partial(yt(e.progressRing));return m`
        <template
            :selectedListTag="${()=>i}"
            :menuTag="${()=>o}"
            :defaultListItemTemplate="${hk(e)}"
            :defaultMenuOptionTemplate="${uk(e)}"
            @focusin="${(s,n)=>s.handleFocusIn(n.event)}"
            @focusout="${(s,n)=>s.handleFocusOut(n.event)}"
            @keydown="${(s,n)=>s.handleKeyDown(n.event)}"
            @pickeriteminvoked="${(s,n)=>s.handleItemInvoke(n.event)}"
            @pickeroptioninvoked="${(s,n)=>s.handleOptionInvoke(n.event)}"
        >
            <slot name="list-region"></slot>

            ${X(s=>s.flyoutOpen,m`
                <${t}
                    class="region"
                    part="region"
                    auto-update-mode="${s=>s.menuConfig.autoUpdateMode}"
                    fixed-placement="${s=>s.menuConfig.fixedPlacement}"
                    vertical-positioning-mode="${s=>s.menuConfig.verticalPositioningMode}"
                    vertical-default-position="${s=>s.menuConfig.verticalDefaultPosition}"
                    vertical-scaling="${s=>s.menuConfig.verticalScaling}"
                    vertical-inset="${s=>s.menuConfig.verticalInset}"
                    vertical-viewport-lock="${s=>s.menuConfig.verticalViewportLock}"
                    horizontal-positioning-mode="${s=>s.menuConfig.horizontalPositioningMode}"
                    horizontal-default-position="${s=>s.menuConfig.horizontalDefaultPosition}"
                    horizontal-scaling="${s=>s.menuConfig.horizontalScaling}"
                    horizontal-inset="${s=>s.menuConfig.horizontalInset}"
                    horizontal-viewport-lock="${s=>s.menuConfig.horizontalViewportLock}"
                    @loaded="${(s,n)=>s.handleRegionLoaded(n.event)}"
                    ${z("region")}
                >
                    ${X(s=>!s.showNoOptions&&!s.showLoading,m`
                            <slot name="menu-region"></slot>
                        `)}
                    ${X(s=>s.showNoOptions&&!s.showLoading,m`
                            <div class="no-options-display" part="no-options-display">
                                <slot name="no-options-region">
                                    ${s=>s.noSuggestionsText}
                                </slot>
                            </div>
                        `)}
                    ${X(s=>s.showLoading,m`
                            <div class="loading-display" part="loading-display">
                                <slot name="loading-region">
                                    <${r}
                                        part="loading-progress"
                                        class="loading-progress"
                                        slot="loading-region"
                                    ></${r}>
                                        ${s=>s.loadingText}
                                </slot>
                            </div>
                        `)}
                </${t}>
            `)}
        </template>
    `}var zt={menuitem:"menuitem",menuitemcheckbox:"menuitemcheckbox",menuitemradio:"menuitemradio"},zm={[zt.menuitem]:"menuitem",[zt.menuitemcheckbox]:"menuitemcheckbox",[zt.menuitemradio]:"menuitemradio"};var ne=class extends D{constructor(){super(...arguments),this.role=zt.menuitem,this.checked=!1,this.focusSubmenuOnLoad=!1,this.handleMenuItemKeyDown=t=>{if(t.defaultPrevented)return!1;switch(t.key){case bt:case Qt:return this.invoke(),!1;case Lt:return this.expanded&&this.submenu?this.submenu.focus():this.expandAndFocus(),!1;case Yt:if(this.expanded)return this.closeSubMenu(),!1;break;case Pt:if(this.expanded)return this.closeSubMenu(),!1}return!0},this.handleMenuItemClick=t=>(t.defaultPrevented||this.disabled||this.invoke(),!1),this.submenuLoaded=()=>{this.focusSubmenuOnLoad&&(this.focusSubmenuOnLoad=!1,this.submenu&&(this.submenu.focus(),this.setAttribute("tabindex","-1")))},this.handleMouseOver=t=>(this.disabled||!this.hasSubmenu||this.expanded||(this.expanded=!0),!1),this.handleMouseOut=t=>(!this.expanded||this.contains(document.activeElement)||(this.expanded=!1),!1),this.closeSubMenu=()=>{this.expanded=!1,this.focus()},this.expandAndFocus=()=>{this.hasSubmenu&&(this.focusSubmenuOnLoad=!0,this.expanded=!0)},this.invoke=()=>{if(!this.disabled)switch(this.role){case zt.menuitemcheckbox:this.checked=!this.checked;break;case zt.menuitem:if(this.hasSubmenu){this.expandAndFocus();break}this.$emit("change");break;case zt.menuitemradio:this.checked||(this.checked=!0);break}}}expandedChanged(t,o){this.$fastController.isConnected&&(o&&this.submenu&&this.updateSubmenu(),this.$emit("expanded-change",this,{bubbles:!1}))}checkedChanged(t,o){this.$fastController.isConnected&&this.$emit("change")}get hasSubmenu(){return!!this.submenu}slottedSubmenuChanged(t,o){o.length&&(this.submenu=o[0],this.updateSubmenu())}disconnectedCallback(){var t;(t=this.cleanup)===null||t===void 0||t.call(this),super.disconnectedCallback()}updateSubmenu(){var t;(t=this.cleanup)===null||t===void 0||t.call(this),!(!this.submenu||!this.expanded)&&$.enqueue(()=>{this.cleanup=Ti(this,this.submenuContainer,()=>bi(this,void 0,void 0,function*(){let o=["left-start","right-start"],{x:i,y:r}=yield Ri(this,this.submenuContainer,{middleware:[Xa(),Wr({apply:({availableWidth:s,rects:n})=>{s<n.floating.width&&o.push("bottom-end","top-end")}}),Di({fallbackPlacements:o})],placement:"right-start",strategy:"fixed"});Object.assign(this.submenuContainer.style,{left:`${i}px`,position:"fixed",top:`${r}px`}),this.submenuLoaded()}))})}};a([h({mode:"boolean"})],ne.prototype,"disabled",void 0);a([h({mode:"boolean"})],ne.prototype,"expanded",void 0);a([h],ne.prototype,"role",void 0);a([h({mode:"boolean"})],ne.prototype,"checked",void 0);a([h({mode:"boolean"})],ne.prototype,"hidden",void 0);a([f],ne.prototype,"slottedSubmenu",void 0);a([f],ne.prototype,"submenu",void 0);H(ne,q);function gp(){return m`
        <template
            slot="${e=>e.slot?e.slot:e.isNestedMenu()?"submenu":void 0}"
            role="menu"
            @keydown="${(e,t)=>e.handleMenuKeyDown(t.event)}"
            @focusout="${(e,t)=>e.handleFocusOut(t.event)}"
        >
            <slot ${M("items")}></slot>
        </template>
    `}var rr=class e extends D{constructor(){super(...arguments),this.expandedItem=null,this.focusIndex=-1,this.isNestedMenu=()=>this.parentElement!==null&&po(this.parentElement)&&this.parentElement.getAttribute("role")==="menuitem",this.handleFocusOut=t=>{if(!this.contains(t.relatedTarget)&&this.menuItems!==void 0){this.collapseExpandedItem();let o=this.menuItems.findIndex(this.isFocusableElement);this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.menuItems[o].setAttribute("tabindex","0"),this.focusIndex=o}},this.handleItemFocus=t=>{let o=t.target;this.menuItems!==void 0&&o!==this.menuItems[this.focusIndex]&&(this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0"))},this.handleExpandedChanged=t=>{if(t.defaultPrevented||t.target===null||this.menuItems===void 0||this.menuItems.indexOf(t.target)<0)return;t.preventDefault();let o=t.target;if(this.expandedItem!==null&&o===this.expandedItem&&o.expanded===!1){this.expandedItem=null;return}o.expanded&&(this.expandedItem!==null&&this.expandedItem!==o&&(this.expandedItem.expanded=!1),this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.expandedItem=o,this.focusIndex=this.menuItems.indexOf(o),o.setAttribute("tabindex","0"))},this.changeHandler=t=>{if(this.menuItems===void 0)return;let o=t.target,i=this.menuItems.indexOf(o);if(i!==-1&&o.role==="menuitemradio"&&o.checked===!0){for(let s=i-1;s>=0;--s){let n=this.menuItems[s],l=n.getAttribute("role");if(l===zt.menuitemradio&&(n.checked=!1),l==="separator")break}let r=this.menuItems.length-1;for(let s=i+1;s<=r;++s){let n=this.menuItems[s],l=n.getAttribute("role");if(l===zt.menuitemradio&&(n.checked=!1),l==="separator")break}}},this.isMenuItemElement=t=>t instanceof ne||po(t)&&t.getAttribute("role")in e.focusableElementRoles,this.isFocusableElement=t=>this.isMenuItemElement(t)}itemsChanged(t,o){this.$fastController.isConnected&&this.menuItems!==void 0&&this.setItems()}connectedCallback(){super.connectedCallback(),$.enqueue(()=>{this.setItems()}),this.addEventListener("change",this.changeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeItemListeners(),this.menuItems=void 0,this.removeEventListener("change",this.changeHandler)}focus(){this.setFocus(0,1)}collapseExpandedItem(){this.expandedItem!==null&&(this.expandedItem.expanded=!1,this.expandedItem=null)}handleMenuKeyDown(t){if(!(t.defaultPrevented||this.menuItems===void 0))switch(t.key){case nt:this.setFocus(this.focusIndex+1,1);return;case at:this.setFocus(this.focusIndex-1,-1);return;case gt:this.setFocus(this.menuItems.length-1,-1);return;case xt:this.setFocus(0,1);return;default:return!0}}removeItemListeners(t=this.items){t.forEach(o=>{o.removeEventListener("focus",this.handleItemFocus),o.removeEventListener("expanded-changed",this.handleExpandedChanged),I.getNotifier(o).unsubscribe(this,"hidden")})}setItems(){let t=Array.from(this.children);this.removeItemListeners(t),t.forEach(r=>I.getNotifier(r).subscribe(this,"hidden"));let o=t.filter(r=>!r.hasAttribute("hidden"));this.menuItems=o;let i=this.menuItems.filter(this.isMenuItemElement);i.length&&(this.focusIndex=0),i.forEach((r,s)=>{r.setAttribute("tabindex",s===0?"0":"-1"),r.addEventListener("expanded-change",this.handleExpandedChanged),r.addEventListener("focus",this.handleItemFocus)})}handleChange(t,o){o==="hidden"&&this.setItems()}setFocus(t,o){if(this.menuItems!==void 0)for(;t>=0&&t<this.menuItems.length;){let i=this.menuItems[t];if(this.isFocusableElement(i)){this.focusIndex>-1&&this.menuItems.length>=this.focusIndex-1&&this.menuItems[this.focusIndex].setAttribute("tabindex","-1"),this.focusIndex=t,i.setAttribute("tabindex","0"),i.focus();break}t+=o}}};rr.focusableElementRoles=zt;a([f],rr.prototype,"items",void 0);function bp(e={}){return m`
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${M("defaultSlottedNodes")}></slot>
        </label>
        <div class="root" part="root">
            ${Z(e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                @keydown="${(t,o)=>t.handleKeyDown(o.event)}"
                @blur="${(t,o)=>t.handleBlur()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                type="text"
                inputmode="numeric"
                min="${t=>t.min}"
                max="${t=>t.max}"
                step="${t=>t.step}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${z("control")}
            />
            ${X(t=>!t.hideStep&&!t.readOnly&&!t.disabled,m`
                    <div class="controls" part="controls">
                        <div class="step-up" part="step-up" @click="${t=>t.stepUp()}">
                            <slot name="step-up-glyph">
                                ${N(e.stepUpGlyph)}
                            </slot>
                        </div>
                        <div
                            class="step-down"
                            part="step-down"
                            @click="${t=>t.stepDown()}"
                        >
                            <slot name="step-down-glyph">
                                ${N(e.stepDownGlyph)}
                            </slot>
                        </div>
                    </div>
                `)}
            ${J(e)}
        </div>
    `}var xp=class extends D{},rl=class extends It(xp){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var vp={email:"email",password:"password",tel:"tel",text:"text",url:"url"};var Ut=class extends rl{constructor(){super(...arguments),this.type=vp.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&$.enqueue(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};a([h({attribute:"readonly",mode:"boolean"})],Ut.prototype,"readOnly",void 0);a([h({mode:"boolean"})],Ut.prototype,"autofocus",void 0);a([h],Ut.prototype,"placeholder",void 0);a([h],Ut.prototype,"type",void 0);a([h],Ut.prototype,"list",void 0);a([h({converter:G})],Ut.prototype,"maxlength",void 0);a([h({converter:G})],Ut.prototype,"minlength",void 0);a([h],Ut.prototype,"pattern",void 0);a([h({converter:G})],Ut.prototype,"size",void 0);a([h({mode:"boolean"})],Ut.prototype,"spellcheck",void 0);a([f],Ut.prototype,"defaultSlottedNodes",void 0);var oi=class{};H(oi,Q);H(Ut,q,oi);var Sp=class extends D{},sl=class extends It(Sp){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Bt=class extends sl{constructor(){super(...arguments),this.hideStep=!1,this.step=1,this.isUserInput=!1}maxChanged(t,o){var i;this.max=Math.max(o,(i=this.min)!==null&&i!==void 0?i:o);let r=Math.min(this.min,this.max);this.min!==void 0&&this.min!==r&&(this.min=r),this.value=this.getValidValue(this.value)}minChanged(t,o){var i;this.min=Math.min(o,(i=this.max)!==null&&i!==void 0?i:o);let r=Math.max(this.min,this.max);this.max!==void 0&&this.max!==r&&(this.max=r),this.value=this.getValidValue(this.value)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,o){var i;let r=this.getValidValue(o);if(o!==r){this.value=r;return}this.$fastController.isConnected&&((i=this.control)===null||i===void 0?void 0:i.value)!==r&&(this.control.value=this.value),super.valueChanged(t,this.value),t!==void 0&&!this.isUserInput&&(this.$emit("input"),this.$emit("change")),this.isUserInput=!1}validate(){super.validate(this.control)}getValidValue(t){var o,i;let r=parseFloat(parseFloat(t).toPrecision(12));return isNaN(r)?r="":(r=Math.min(r,(o=this.max)!==null&&o!==void 0?o:r),r=Math.max(r,(i=this.min)!==null&&i!==void 0?i:r).toString()),r}stepUp(){let t=parseFloat(this.value),o=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:this.step:t+this.step;this.value=o.toString()}stepDown(){let t=parseFloat(this.value),o=isNaN(t)?this.min>0?this.min:this.max<0?this.max:this.min?0:0-this.step:t-this.step;this.value=o.toString()}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","number"),this.validate(),this.control.value=this.value,this.autofocus&&$.enqueue(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.control.value=this.control.value.replace(/[^0-9\-+e.]/g,""),this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(t){if(this.disabled||this.readOnly)return!0;switch(t.key){case at:return this.stepUp(),!1;case nt:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}};a([h({attribute:"readonly",mode:"boolean"})],Bt.prototype,"readOnly",void 0);a([h({mode:"boolean"})],Bt.prototype,"autofocus",void 0);a([h({attribute:"hide-step",mode:"boolean"})],Bt.prototype,"hideStep",void 0);a([h],Bt.prototype,"placeholder",void 0);a([h],Bt.prototype,"list",void 0);a([h({converter:G})],Bt.prototype,"maxlength",void 0);a([h({converter:G})],Bt.prototype,"minlength",void 0);a([h({converter:G})],Bt.prototype,"size",void 0);a([h({converter:G})],Bt.prototype,"step",void 0);a([h({converter:G})],Bt.prototype,"max",void 0);a([h({converter:G})],Bt.prototype,"min",void 0);a([f],Bt.prototype,"defaultSlottedNodes",void 0);H(Bt,q,oi);var fo=class extends D{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){let t=typeof this.min=="number"?this.min:0,o=typeof this.max=="number"?this.max:100,i=typeof this.value=="number"?this.value:0,r=o-t;this.percentComplete=r===0?0:Math.fround((i-t)/r*100)}};a([h({converter:G})],fo.prototype,"value",void 0);a([h({converter:G})],fo.prototype,"min",void 0);a([h({converter:G})],fo.prototype,"max",void 0);a([f],fo.prototype,"percentComplete",void 0);var kn=class extends fo{};var Cn=class extends fo{};var nl=kt;function wp(){return m`
        <template
            role="radiogroup"
            tabindex="${e=>e.disabled?-1:void 0}"
            aria-disabled="${e=>e.disabled}"
            aria-readonly="${e=>e.readOnly}"
            aria-orientation="${e=>e.orientation}"
            @click="${(e,t)=>e.clickHandler(t.event)}"
            @mousedown="${(e,t)=>e.handleDisabledClick(t.event)}"
            @keydown="${(e,t)=>e.keydownHandler(t.event)}"
            @focusout="${(e,t)=>e.focusOutHandler(t.event)}"
        >
            <slot name="label"></slot>
            <div
                class="positioning-region ${e=>e.orientation===nl.horizontal?"horizontal":"vertical"}"
                part="positioning-region"
            >
                <slot
                    ${M({property:"slottedRadioButtons",filter:Rt("[role=radio]")})}
                ></slot>
            </div>
        </template>
    `}var Yr=e=>{var t;return e.nodeType!==Node.TEXT_NODE||!!(!((t=e.nodeValue)===null||t===void 0)&&t.trim().length)};function kp(e={}){return m`
        <template
            role="radio"
            aria-checked="${t=>t.checked}"
            aria-required="${t=>t.required}"
            aria-disabled="${t=>t.disabled}"
            @keypress="${(t,o)=>t.keypressHandler(o.event)}"
        >
            <div part="control" class="control">
                <slot name="checked-indicator">
                    ${N(e.checkedIndicator)}
                </slot>
            </div>
            <label
                part="label"
                class="${t=>{var o;return["label",!(!((o=t.defaultSlottedNodes)===null||o===void 0)&&o.length)&&"label__hidden"].filter(Boolean).join(" ")}}"
            >
                <slot
                    ${M({property:"defaultSlottedNodes",filter:Yr})}
                ></slot>
            </label>
        </template>
    `}var Cp=class extends D{},al=class extends Nr(Cp){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var ii=class extends al{constructor(){super(),this.initialValue="on",this.proxy.setAttribute("type","radio")}get radioGroup(){return this.closest("[role=radiogroup]")}defaultCheckedChanged(){var t;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}connectedCallback(){var t,o;super.connectedCallback(),this.validate(),((t=this.parentElement)===null||t===void 0?void 0:t.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(o=this.defaultChecked)!==null&&o!==void 0?o:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.radioGroup!==null}keypressHandler(t){var o;switch(t.key){case Qt:!this.checked&&!(!((o=this.radioGroup)===null||o===void 0)&&o.readOnly)&&(this.checked=!0);return}return!0}};a([f],ii.prototype,"name",void 0);a([f],ii.prototype,"defaultSlottedNodes",void 0);var $e=class extends D{constructor(){super(...arguments),this.orientation=nl.horizontal,this.radioChangeHandler=t=>{let o=t.target;o.checked&&(this.slottedRadioButtons.forEach(i=>{i!==o&&(i.checked=!1,this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"))}),this.selectedRadio=o,this.value=o.value,o.setAttribute("tabindex","0"),this.focusedRadio=o),t.stopPropagation()},this.moveToRadioByIndex=(t,o)=>{let i=t[o];this.isInsideToolbar||(i.setAttribute("tabindex","0"),i.checked=!0,this.selectedRadio=i),this.focusedRadio=i,i.focus()},this.moveRightOffGroup=()=>{var t;(t=this.nextElementSibling)===null||t===void 0||t.focus()},this.moveLeftOffGroup=()=>{var t;(t=this.previousElementSibling)===null||t===void 0||t.focus()},this.focusOutHandler=t=>{let o=this.slottedRadioButtons,i=t.target,r=i!==null?o.indexOf(i):0,s=this.focusedRadio?o.indexOf(this.focusedRadio):-1;return(s===0&&r===s||s===o.length-1&&s===r)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),o.forEach(n=>{n!==this.selectedRadio&&n.setAttribute("tabindex","-1")}))):(this.focusedRadio=o[0],this.focusedRadio.setAttribute("tabindex","0"),o.forEach(n=>{n!==this.focusedRadio&&n.setAttribute("tabindex","-1")}))),!0},this.handleDisabledClick=t=>{if(this.disabled){t.preventDefault();return}return!0},this.clickHandler=t=>{if(this.disabled)return;t.preventDefault();let o=t.target;o&&o instanceof ii&&(o.checked=!0,o.setAttribute("tabindex","0"),this.selectedRadio=o,this.focusedRadio=o)},this.shouldMoveOffGroupToTheRight=(t,o,i)=>t===o.length&&this.isInsideToolbar&&i===Lt,this.shouldMoveOffGroupToTheLeft=(t,o)=>(this.focusedRadio?t.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&o===Pt,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=t=>{let o=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?o.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(i,o,t.key)){this.moveRightOffGroup();return}else i===o.length&&(i=0);for(;i<o.length&&o.length>1;)if(o[i].disabled){if(this.focusedRadio&&i===o.indexOf(this.focusedRadio))break;if(i+1>=o.length){if(this.isInsideToolbar)break;i=0}else i+=1}else{this.moveToRadioByIndex(o,i);break}},this.moveLeft=t=>{let o=this.slottedRadioButtons,i=0;if(i=this.focusedRadio?o.indexOf(this.focusedRadio)-1:0,i=i<0?o.length-1:i,this.shouldMoveOffGroupToTheLeft(o,t.key)){this.moveLeftOffGroup();return}for(;i>=0&&o.length>1;)if(o[i].disabled){if(this.focusedRadio&&i===o.indexOf(this.focusedRadio))break;i-1<0?i=o.length-1:i-=1}else{this.moveToRadioByIndex(o,i);break}},this.keydownHandler=t=>{let o=t.key;if(o in Si&&(this.isInsideFoundationToolbar||this.disabled))return!0;switch(o){case bt:{this.checkFocusedRadio();break}case Lt:case nt:{this.direction===it.ltr?this.moveRight(t):this.moveLeft(t);break}case Pt:case at:{this.direction===it.ltr?this.moveLeft(t):this.moveRight(t);break}default:return!0}}}disabledChanged(){}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(t=>{t.value===this.value&&(t.checked=!0,this.selectedRadio=t)}),this.$emit("change")}slottedRadioButtonsChanged(t,o){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var t;return(t=this.parentToolbar)!==null&&t!==void 0?t:!1}get isInsideFoundationToolbar(){var t;return!!(!((t=this.parentToolbar)===null||t===void 0)&&t.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=qo(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(t=>{t.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){let t=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=t?t.length:0;if(o>1){let r=t[o-1];r.checked=!0}let i=!1;if(this.slottedRadioButtons.forEach(r=>{this.name!==void 0&&r.setAttribute("name",this.name),this.value&&this.value===r.value?(this.selectedRadio=r,this.focusedRadio=r,r.checked=!0,r.setAttribute("tabindex","0"),i=!0):(this.isInsideFoundationToolbar||r.setAttribute("tabindex","-1"),r.checked=!1),r.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){let r=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),s=r!==null?r.length:0;if(s>0&&!i){let n=r[s-1];n.checked=!0,this.focusedRadio=n,n.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};a([h({attribute:"readonly",mode:"boolean"})],$e.prototype,"readOnly",void 0);a([h({attribute:"disabled",mode:"boolean"})],$e.prototype,"disabled",void 0);a([h],$e.prototype,"name",void 0);a([h],$e.prototype,"value",void 0);a([h],$e.prototype,"orientation",void 0);a([f],$e.prototype,"childItems",void 0);a([f],$e.prototype,"slottedRadioButtons",void 0);var Tp={default:"default",mobile:"mobile"},Dp={linear:"linear",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out"};var ve=class extends D{constructor(){super(...arguments),this.framesPerSecond=60,this.updatingItems=!1,this.speed=600,this.easing=Dp.easeInOut,this.flippersHiddenFromAT=!1,this.scrolling=!1,this.resizeDetector=null}get frameTime(){return 1e3/this.framesPerSecond}scrollingChanged(t,o){if(this.scrollContainer){let i=this.scrolling==!0?"scrollstart":"scrollend";this.$emit(i,this.scrollContainer.scrollLeft)}}get isRtl(){return this.scrollItems.length>1&&this.scrollItems[0].offsetLeft>this.scrollItems[1].offsetLeft}connectedCallback(){super.connectedCallback(),this.initializeResizeDetector()}disconnectedCallback(){this.disconnectResizeDetector(),super.disconnectedCallback()}scrollItemsChanged(t,o){o&&!this.updatingItems&&$.enqueue(()=>this.setStops())}disconnectResizeDetector(){this.resizeDetector&&(this.resizeDetector.disconnect(),this.resizeDetector=null)}initializeResizeDetector(){this.disconnectResizeDetector(),this.resizeDetector=new window.ResizeObserver(this.resized.bind(this)),this.resizeDetector.observe(this)}updateScrollStops(){this.updatingItems=!0;let t=this.scrollItems.reduce((o,i)=>i instanceof HTMLSlotElement?o.concat(i.assignedElements()):(o.push(i),o),[]);this.scrollItems=t,this.updatingItems=!1}setStops(){this.updateScrollStops();let{scrollContainer:t}=this,{scrollLeft:o}=t,{width:i,left:r}=t.getBoundingClientRect();this.width=i;let s=0,n=this.scrollItems.map((l,c)=>{let{left:p,width:d}=l.getBoundingClientRect(),u=Math.round(p+o-r),g=Math.round(u+d);return this.isRtl?-g:(s=g,c===0?0:u)}).concat(s);n=this.fixScrollMisalign(n),n.sort((l,c)=>Math.abs(l)-Math.abs(c)),this.scrollStops=n,this.setFlippers()}validateStops(t=!0){let o=()=>!!this.scrollStops.find(i=>i>0);return!o()&&t&&this.setStops(),o()}fixScrollMisalign(t){if(this.isRtl&&t.some(o=>o>0)){t.sort((i,r)=>r-i);let o=t[0];t=t.map(i=>i-o)}return t}setFlippers(){var t,o;let i=this.scrollContainer.scrollLeft;if((t=this.previousFlipperContainer)===null||t===void 0||t.classList.toggle("disabled",i===0),this.scrollStops){let r=Math.abs(this.scrollStops[this.scrollStops.length-1]);(o=this.nextFlipperContainer)===null||o===void 0||o.classList.toggle("disabled",this.validateStops(!1)&&Math.abs(i)+this.width>=r)}}scrollInView(t,o=0,i){var r;if(typeof t!="number"&&t&&(t=this.scrollItems.findIndex(s=>s===t||s.contains(t))),t!==void 0){i=i??o;let{scrollContainer:s,scrollStops:n,scrollItems:l}=this,{scrollLeft:c}=this.scrollContainer,{width:p}=s.getBoundingClientRect(),d=n[t],{width:u}=l[t].getBoundingClientRect(),g=d+u,x=c+o>d;if(x||c+p-i<g){let R=(r=[...n].sort((F,A)=>x?A-F:F-A).find(F=>x?F+o<d:F+p-(i??0)>g))!==null&&r!==void 0?r:0;this.scrollToPosition(R)}}}keyupHandler(t){switch(t.key){case"ArrowLeft":this.scrollToPrevious();break;case"ArrowRight":this.scrollToNext();break}}scrollToPrevious(){this.validateStops();let t=this.scrollContainer.scrollLeft,o=this.scrollStops.findIndex((s,n)=>s>=t&&(this.isRtl||n===this.scrollStops.length-1||this.scrollStops[n+1]>t)),i=Math.abs(this.scrollStops[o+1]),r=this.scrollStops.findIndex(s=>Math.abs(s)+this.width>i);(r>=o||r===-1)&&(r=o>0?o-1:0),this.scrollToPosition(this.scrollStops[r],t)}scrollToNext(){this.validateStops();let t=this.scrollContainer.scrollLeft,o=this.scrollStops.findIndex(s=>Math.abs(s)>=Math.abs(t)),i=this.scrollStops.findIndex(s=>Math.abs(t)+this.width<=Math.abs(s)),r=o;i>o+2?r=i-2:o<this.scrollStops.length-2&&(r=o+1),this.scrollToPosition(this.scrollStops[r],t)}scrollToPosition(t,o=this.scrollContainer.scrollLeft){var i;if(this.scrolling)return;this.scrolling=!0;let r=(i=this.duration)!==null&&i!==void 0?i:`${Math.abs(t-o)/this.speed}s`;this.content.style.setProperty("transition-duration",r);let s=parseFloat(getComputedStyle(this.content).getPropertyValue("transition-duration")),n=p=>{p&&p.target!==p.currentTarget||(this.content.style.setProperty("transition-duration","0s"),this.content.style.removeProperty("transform"),this.scrollContainer.style.setProperty("scroll-behavior","auto"),this.scrollContainer.scrollLeft=t,this.setFlippers(),this.content.removeEventListener("transitionend",n),this.scrolling=!1)};if(s===0){n();return}this.content.addEventListener("transitionend",n);let l=this.scrollContainer.scrollWidth-this.scrollContainer.clientWidth,c=this.scrollContainer.scrollLeft-Math.min(t,l);this.isRtl&&(c=this.scrollContainer.scrollLeft+Math.min(Math.abs(t),l)),this.content.style.setProperty("transition-property","transform"),this.content.style.setProperty("transition-timing-function",this.easing),this.content.style.setProperty("transform",`translateX(${c}px)`)}resized(){this.resizeTimeout&&(this.resizeTimeout=clearTimeout(this.resizeTimeout)),this.resizeTimeout=setTimeout(()=>{this.width=this.scrollContainer.offsetWidth,this.setFlippers()},this.frameTime)}scrolled(){this.scrollTimeout&&(this.scrollTimeout=clearTimeout(this.scrollTimeout)),this.scrollTimeout=setTimeout(()=>{this.setFlippers()},this.frameTime)}};a([h({converter:G})],ve.prototype,"speed",void 0);a([h],ve.prototype,"duration",void 0);a([h],ve.prototype,"easing",void 0);a([h({attribute:"flippers-hidden-from-at",converter:Lo})],ve.prototype,"flippersHiddenFromAT",void 0);a([f],ve.prototype,"scrolling",void 0);a([f],ve.prototype,"scrollItems",void 0);a([h({attribute:"view"})],ve.prototype,"view",void 0);H(ve,q);function Rp(e={}){return m`
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${M({property:"defaultSlottedNodes",filter:Yr})}
            ></slot>
        </label>
        <div class="root" part="root" ${z("root")}>
            ${Z(e)}
            <div class="input-wrapper" part="input-wrapper">
                <input
                    class="control"
                    part="control"
                    id="control"
                    @input="${t=>t.handleTextInput()}"
                    @change="${t=>t.handleChange()}"
                    ?autofocus="${t=>t.autofocus}"
                    ?disabled="${t=>t.disabled}"
                    list="${t=>t.list}"
                    maxlength="${t=>t.maxlength}"
                    minlength="${t=>t.minlength}"
                    pattern="${t=>t.pattern}"
                    placeholder="${t=>t.placeholder}"
                    ?readonly="${t=>t.readOnly}"
                    ?required="${t=>t.required}"
                    size="${t=>t.size}"
                    ?spellcheck="${t=>t.spellcheck}"
                    :value="${t=>t.value}"
                    type="search"
                    aria-atomic="${t=>t.ariaAtomic}"
                    aria-busy="${t=>t.ariaBusy}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-current="${t=>t.ariaCurrent}"
                    aria-describedby="${t=>t.ariaDescribedby}"
                    aria-details="${t=>t.ariaDetails}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-errormessage="${t=>t.ariaErrormessage}"
                    aria-flowto="${t=>t.ariaFlowto}"
                    aria-haspopup="${t=>t.ariaHaspopup}"
                    aria-hidden="${t=>t.ariaHidden}"
                    aria-invalid="${t=>t.ariaInvalid}"
                    aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                    aria-label="${t=>t.ariaLabel}"
                    aria-labelledby="${t=>t.ariaLabelledby}"
                    aria-live="${t=>t.ariaLive}"
                    aria-owns="${t=>t.ariaOwns}"
                    aria-relevant="${t=>t.ariaRelevant}"
                    aria-roledescription="${t=>t.ariaRoledescription}"
                    ${z("control")}
                />
                <slot name="clear-button">
                    <button
                        class="clear-button ${t=>t.value?"":"clear-button__hidden"}"
                        part="clear-button"
                        tabindex="-1"
                        @click=${t=>t.handleClearInput()}
                    >
                        <slot name="clear-glyph">
                            <svg
                                width="9"
                                height="9"
                                viewBox="0 0 9 9"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0.146447 0.146447C0.338683 -0.0478972 0.645911 -0.0270359 0.853553 0.146447L4.5 3.793L8.14645 0.146447C8.34171 -0.0488155 8.65829 -0.0488155 8.85355 0.146447C9.04882 0.341709 9.04882 0.658291 8.85355 0.853553L5.207 4.5L8.85355 8.14645C9.05934 8.35223 9.03129 8.67582 8.85355 8.85355C8.67582 9.03129 8.35409 9.02703 8.14645 8.85355L4.5 5.207L0.853553 8.85355C0.658291 9.04882 0.341709 9.04882 0.146447 8.85355C-0.0488155 8.65829 -0.0488155 8.34171 0.146447 8.14645L3.793 4.5L0.146447 0.853553C-0.0268697 0.680237 -0.0457894 0.34079 0.146447 0.146447Z"
                                />
                            </svg>
                        </slot>
                    </button>
                </slot>
            </div>
            ${J(e)}
        </div>
    `}var Fp=class extends D{},ll=class extends It(Fp){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Zt=class extends ll{readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.validate(),this.autofocus&&$.enqueue(()=>{this.focus()})}validate(){super.validate(this.control)}handleTextInput(){this.value=this.control.value}handleClearInput(){this.value="",this.control.focus(),this.handleChange()}handleChange(){this.$emit("change")}};a([h({attribute:"readonly",mode:"boolean"})],Zt.prototype,"readOnly",void 0);a([h({mode:"boolean"})],Zt.prototype,"autofocus",void 0);a([h],Zt.prototype,"placeholder",void 0);a([h],Zt.prototype,"list",void 0);a([h({converter:G})],Zt.prototype,"maxlength",void 0);a([h({converter:G})],Zt.prototype,"minlength",void 0);a([h],Zt.prototype,"pattern",void 0);a([h({converter:G})],Zt.prototype,"size",void 0);a([h({mode:"boolean"})],Zt.prototype,"spellcheck",void 0);a([f],Zt.prototype,"defaultSlottedNodes",void 0);var Tn=class{};H(Tn,Q);H(Zt,q,Tn);var Ip=class extends Ae{},cl=class extends It(Ip){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var ri=class extends cl{constructor(){super(...arguments),this.open=!1,this.listboxId=Nt("listbox-")}openChanged(t,o){var i;if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",$.enqueue(()=>this.setPositioning()),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,$.enqueue(()=>this.focus());return}(i=this.cleanup)===null||i===void 0||i.call(this),this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return I.track(this,"value"),this._value}set value(t){var o,i,r,s,n,l,c;let p=`${this._value}`;if(!((o=this._options)===null||o===void 0)&&o.length){let d=this._options.findIndex(x=>x.value===t),u=(r=(i=this._options[this.selectedIndex])===null||i===void 0?void 0:i.value)!==null&&r!==void 0?r:null,g=(n=(s=this._options[d])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null;(d===-1||u!==g)&&(t="",this.selectedIndex=d),t=(c=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&c!==void 0?c:t}p!==t&&(this._value=t,super.valueChanged(p,t),I.notify(this,"value"),this.updateDisplayValue())}updateValue(t){var o,i;this.$fastController.isConnected&&(this.value=(i=(o=this.firstSelectedOption)===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:""),t&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(t,o){super.selectedIndexChanged(t,o),this.updateValue()}setPositioning(){this.$fastController.isConnected&&(this.cleanup=Ti(this,this.listbox,()=>bi(this,void 0,void 0,function*(){var t;let{middlewareData:o,x:i,y:r}=yield Ri(this.control,this.listbox,{placement:"bottom",strategy:"fixed",middleware:[Di(),Wr({apply:({availableHeight:s,rects:n})=>{Object.assign(this.listbox.style,{maxHeight:`${s}px`,width:`${n.reference.width}px`})}}),Ya()]});if(!((t=o.hide)===null||t===void 0)&&t.referenceHidden){this.open=!1;return}Object.assign(this.listbox.style,{position:"fixed",top:"0",left:"0",transform:`translate(${i}px, ${r}px)`})})))}get displayValue(){var t,o;return I.track(this,"displayValue"),(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)!==null&&o!==void 0?o:""}disabledChanged(t,o){super.disabledChanged&&super.disabledChanged(t,o),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(t){if(!this.disabled){if(this.open){let o=t.target.closest("option,[role=option]");if(o&&o.disabled)return}return super.clickHandler(t),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(t){var o;if(super.focusoutHandler(t),!this.open)return!0;let i=t.relatedTarget;if(this.isSameNode(i)){this.focus();return}!((o=this.options)===null||o===void 0)&&o.includes(i)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(t,o){super.handleChange(t,o),o==="value"&&this.updateValue()}slottedOptionsChanged(t,o){this.options.forEach(i=>{I.getNotifier(i).unsubscribe(this,"value")}),super.slottedOptionsChanged(t,o),this.options.forEach(i=>{I.getNotifier(i).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(t){var o;return t.offsetX>=0&&t.offsetX<=((o=this.listbox)===null||o===void 0?void 0:o.scrollWidth)?super.mousedownHandler(t):this.collapsible}multipleChanged(t,o){super.multipleChanged(t,o),this.proxy&&(this.proxy.multiple=o)}selectedOptionsChanged(t,o){var i;super.selectedOptionsChanged(t,o),(i=this.options)===null||i===void 0||i.forEach((r,s)=>{var n;let l=(n=this.proxy)===null||n===void 0?void 0:n.options.item(s);l&&(l.selected=r.selected)})}setDefaultSelectedOption(){var t;let o=(t=this.options)!==null&&t!==void 0?t:Array.from(this.children).filter(At.slottedOptionFilter),i=o?.findIndex(r=>r.hasAttribute("selected")||r.selected||r.value===this.value);if(i!==-1){this.selectedIndex=i;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(t=>{let o=t.proxy||(t instanceof HTMLOptionElement?t.cloneNode():null);o&&this.proxy.options.add(o)}))}keydownHandler(t){super.keydownHandler(t);let o=t.key||t.key.charCodeAt(0);switch(o){case Qt:{t.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case xt:case gt:{t.preventDefault();break}case bt:{t.preventDefault(),this.open=!this.open;break}case Yt:{this.collapsible&&this.open&&(t.preventDefault(),this.open=!1);break}case vi:return this.collapsible&&this.open&&(t.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(o===nt||o===at)}connectedCallback(){super.connectedCallback(),this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){var t;this.removeEventListener("contentchange",this.updateDisplayValue),(t=this.cleanup)===null||t===void 0||t.call(this),super.disconnectedCallback()}sizeChanged(t,o){super.sizeChanged(t,o),this.proxy&&(this.proxy.size=o)}updateDisplayValue(){this.collapsible&&I.notify(this,"displayValue")}};a([h({attribute:"open",mode:"boolean"})],ri.prototype,"open",void 0);a([Bc],ri.prototype,"collapsible",null);a([f],ri.prototype,"control",void 0);var Qr=class{};a([f],Qr.prototype,"ariaControls",void 0);H(Qr,Ie);H(ri,q,Qr);function Ap(e={}){return m`
        <template
            aria-activedescendant="${t=>t.ariaActiveDescendant}"
            aria-controls="${t=>t.ariaControls}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-expanded="${t=>t.ariaExpanded}"
            aria-haspopup="${t=>t.collapsible?"listbox":null}"
            aria-multiselectable="${t=>t.ariaMultiSelectable}"
            ?open="${t=>t.open}"
            role="combobox"
            tabindex="${t=>t.disabled?null:"0"}"
            @click="${(t,o)=>t.clickHandler(o.event)}"
            @focusin="${(t,o)=>t.focusinHandler(o.event)}"
            @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
            @keydown="${(t,o)=>t.keydownHandler(o.event)}"
            @mousedown="${(t,o)=>t.mousedownHandler(o.event)}"
        >
            ${X(t=>t.collapsible,m`
                    <div
                        class="control"
                        part="control"
                        ?disabled="${t=>t.disabled}"
                        ${z("control")}
                    >
                        ${Z(e)}
                        <slot name="button-container">
                            <div class="selected-value" part="selected-value">
                                <slot name="selected-value">${t=>t.displayValue}</slot>
                            </div>
                            <div aria-hidden="true" class="indicator" part="indicator">
                                <slot name="indicator">
                                    ${N(e.indicator)}
                                </slot>
                            </div>
                        </slot>
                        ${J(e)}
                    </div>
                `)}
            <div
                class="listbox"
                id="${t=>t.listboxId}"
                part="listbox"
                role="listbox"
                ?disabled="${t=>t.disabled}"
                ?hidden="${t=>t.collapsible?!t.open:!1}"
                ${z("listbox")}
            >
                <slot
                    ${M({filter:At.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
                ></slot>
            </div>
        </template>
    `}var Bm={rect:"rect",circle:"circle"},si=class extends D{constructor(){super(...arguments),this.shape=Bm.rect}};a([h],si.prototype,"fill",void 0);a([h],si.prototype,"shape",void 0);a([h],si.prototype,"pattern",void 0);a([h({mode:"boolean"})],si.prototype,"shimmer",void 0);var Jr=kt,Vm={singleValue:"single-value"};function Dn(e,t,o,i){let r=ho(0,1,(e-t)/(o-t));return i===it.rtl&&(r=1-r),r}var dl={min:0,max:0,direction:it.ltr,orientation:Jr.horizontal,disabled:!1},Se=class extends D{constructor(){super(...arguments),this.hideMark=!1,this.orientation=Jr.horizontal,this.sliderDirection=it.ltr,this.getSliderConfiguration=()=>{if(!this.isSliderConfig(this.parentNode))this.sliderDirection=dl.direction||it.ltr,this.orientation=dl.orientation||Jr.horizontal,this.sliderMaxPosition=dl.max,this.sliderMinPosition=dl.min;else{let t=this.parentNode,{min:o,max:i,direction:r,orientation:s,disabled:n}=t;n!==void 0&&(this.disabled=n),this.sliderDirection=r||it.ltr,this.orientation=s||Jr.horizontal,this.sliderMaxPosition=i,this.sliderMinPosition=o}},this.positionAsStyle=()=>{let t=this.sliderDirection?this.sliderDirection:it.ltr,o=Dn(Number(this.position),Number(this.sliderMinPosition),Number(this.sliderMaxPosition)),i=Math.round((1-o)*100),r=Math.round(o*100);return Number.isNaN(r)&&Number.isNaN(i)&&(i=50,r=50),this.orientation===Jr.horizontal?t===it.rtl?`right: ${r}%; left: ${i}%;`:`left: ${r}%; right: ${i}%;`:`top: ${i}%; bottom: ${r}%;`}}positionChanged(){this.positionStyle=this.positionAsStyle()}orientationChanged(){}connectedCallback(){super.connectedCallback(),this.getSliderConfiguration(),this.positionStyle=this.positionAsStyle(),this.notifier=I.getNotifier(this.parentNode),this.notifier.subscribe(this,"orientation"),this.notifier.subscribe(this,"direction"),this.notifier.subscribe(this,"max"),this.notifier.subscribe(this,"min")}disconnectedCallback(){super.disconnectedCallback(),this.notifier.unsubscribe(this,"orientation"),this.notifier.unsubscribe(this,"direction"),this.notifier.unsubscribe(this,"max"),this.notifier.unsubscribe(this,"min")}handleChange(t,o){switch(o){case"direction":this.sliderDirection=t.direction;break;case"orientation":this.orientation=t.orientation;break;case"max":this.sliderMaxPosition=t.max;break;case"min":this.sliderMinPosition=t.min;break;default:break}this.positionStyle=this.positionAsStyle()}isSliderConfig(t){return t.max!==void 0&&t.min!==void 0}};a([f],Se.prototype,"positionStyle",void 0);a([h],Se.prototype,"position",void 0);a([h({attribute:"hide-mark",mode:"boolean"})],Se.prototype,"hideMark",void 0);a([h({attribute:"disabled",mode:"boolean"})],Se.prototype,"disabled",void 0);a([h],Se.prototype,"orientation",void 0);a([f],Se.prototype,"sliderMinPosition",void 0);a([f],Se.prototype,"sliderMaxPosition",void 0);a([f],Se.prototype,"sliderDirection",void 0);var $p=class extends D{},pl=class extends It($p){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var Tt=class extends pl{constructor(){super(...arguments),this.direction=it.ltr,this.isDragging=!1,this.trackWidth=0,this.trackMinWidth=0,this.trackHeight=0,this.trackLeft=0,this.trackMinHeight=0,this.valueTextFormatter=()=>null,this.min=0,this.max=10,this.orientation=kt.horizontal,this.mode=Vm.singleValue,this.keypressHandler=t=>{if(!(this.readOnly||this.disabled)){if(t.key===xt)t.preventDefault(),this.direction!==it.rtl&&this.orientation!==kt.vertical?this.value=`${this.min}`:this.value=`${this.max}`;else if(t.key===gt)t.preventDefault(),this.direction!==it.rtl&&this.orientation!==kt.vertical?this.value=`${this.max}`:this.value=`${this.min}`;else if(!t.shiftKey)switch(t.key){case Lt:case at:t.preventDefault(),this.increment();break;case Pt:case nt:t.preventDefault(),this.decrement();break}}},this.setupTrackConstraints=()=>{let t=this.track.getBoundingClientRect();this.trackWidth=this.track.clientWidth,this.trackMinWidth=this.track.clientLeft,this.trackHeight=t.top,this.trackMinHeight=t.bottom,this.trackLeft=this.getBoundingClientRect().left,this.trackWidth===0&&(this.trackWidth=1)},this.setupListeners=(t=!1)=>{let o=`${t?"remove":"add"}EventListener`;this[o]("keydown",this.keypressHandler),this[o]("mousedown",this.handleMouseDown),this.thumb[o]("mousedown",this.handleThumbMouseDown,{passive:!0}),this.thumb[o]("touchstart",this.handleThumbMouseDown,{passive:!0}),t&&(this.handleMouseDown(null),this.handleThumbMouseDown(null))},this.initialValue="",this.handleThumbMouseDown=t=>{let o=`${t!==null?"add":"remove"}EventListener`;window[o]("mouseup",this.handleWindowMouseUp),window[o]("mousemove",this.handleMouseMove,{passive:!0}),window[o]("touchmove",this.handleMouseMove,{passive:!0}),window[o]("touchend",this.handleWindowMouseUp),this.isDragging=t!==null},this.handleMouseMove=t=>{if(this.readOnly||this.disabled||t.defaultPrevented)return;let o=window.TouchEvent&&t instanceof TouchEvent?t.touches[0]:t,i=this.orientation===kt.horizontal?o.pageX-document.documentElement.scrollLeft-this.trackLeft:o.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`},this.handleWindowMouseUp=t=>{this.stopDragging()},this.stopDragging=()=>{this.isDragging=!1,this.handleMouseDown(null),this.handleThumbMouseDown(null)},this.handleMouseDown=t=>{let o=`${t!==null?"add":"remove"}EventListener`;if((t===null||!this.disabled&&!this.readOnly)&&(window[o]("mouseup",this.handleWindowMouseUp),window.document[o]("mouseleave",this.handleWindowMouseUp),window[o]("mousemove",this.handleMouseMove),t)){this.setupTrackConstraints();let i=this.orientation===kt.horizontal?t.pageX-document.documentElement.scrollLeft-this.trackLeft:t.pageY-document.documentElement.scrollTop;this.value=`${this.calculateNewValue(i)}`}}}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}get valueAsNumber(){return parseFloat(super.value)}set valueAsNumber(t){this.value=t.toString()}valueChanged(t,o){if(this.$fastController.isConnected){let i=parseFloat(o),r=ho(this.min,this.max,this.convertToConstrainedValue(i)).toString();if(r!==o){this.value=r;return}super.valueChanged(t,o),this.setThumbPositionForOrientation(this.direction),this.$emit("change")}}minChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.min=`${this.min}`),this.validate()}maxChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.max=`${this.max}`),this.validate()}stepChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.step=`${this.step}`),this.updateStepMultiplier(),this.validate()}orientationChanged(){this.$fastController.isConnected&&this.setThumbPositionForOrientation(this.direction)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type","range"),this.direction=qo(this),this.updateStepMultiplier(),this.setupTrackConstraints(),this.setupListeners(),this.setupDefaultValue(),this.setThumbPositionForOrientation(this.direction)}disconnectedCallback(){this.setupListeners(!0)}increment(){let t=this.direction!==it.rtl&&this.orientation!==kt.vertical?Number(this.value)+Number(this.stepValue):Number(this.value)+Number(this.stepValue),o=this.convertToConstrainedValue(t),i=o<Number(this.max)?`${o}`:`${this.max}`;this.value=i}decrement(){let t=this.direction!==it.rtl&&this.orientation!==kt.vertical?Number(this.value)-Number(this.stepValue):Number(this.value)-Number(this.stepValue),o=this.convertToConstrainedValue(t),i=o>Number(this.min)?`${o}`:`${this.min}`;this.value=i}get stepValue(){return this.step===void 0?1:this.step}setThumbPositionForOrientation(t){let i=(1-Dn(Number(this.value),Number(this.min),Number(this.max),t))*100;this.orientation===kt.horizontal?this.position=this.isDragging?`right: ${i}%; transition: none;`:`right: ${i}%; transition: all 0.2s ease;`:this.position=this.isDragging?`top: ${i}%; transition: none;`:`top: ${i}%; transition: all 0.2s ease;`}updateStepMultiplier(){let t=this.stepValue+"",o=this.stepValue%1?t.length-t.indexOf(".")-1:0;this.stepMultiplier=Math.pow(10,o)}get midpoint(){return`${this.convertToConstrainedValue((this.max+this.min)/2)}`}setupDefaultValue(){if(typeof this.value=="string")if(this.value.length===0)this.initialValue=this.midpoint;else{let t=parseFloat(this.value);!Number.isNaN(t)&&(t<this.min||t>this.max)&&(this.value=this.midpoint)}}calculateNewValue(t){this.setupTrackConstraints();let o=Dn(t,this.orientation===kt.horizontal?this.trackMinWidth:this.trackMinHeight,this.orientation===kt.horizontal?this.trackWidth:this.trackHeight,this.direction),i=(this.max-this.min)*o+this.min;return this.convertToConstrainedValue(i)}convertToConstrainedValue(t){isNaN(t)&&(t=this.min);let o=t-this.min,i=Math.round(o/this.stepValue),r=o-i*(this.stepMultiplier*this.stepValue)/this.stepMultiplier;return o=r>=Number(this.stepValue)/2?o-r+Number(this.stepValue):o-r,o+this.min}};a([h({attribute:"readonly",mode:"boolean"})],Tt.prototype,"readOnly",void 0);a([f],Tt.prototype,"direction",void 0);a([f],Tt.prototype,"isDragging",void 0);a([f],Tt.prototype,"position",void 0);a([f],Tt.prototype,"trackWidth",void 0);a([f],Tt.prototype,"trackMinWidth",void 0);a([f],Tt.prototype,"trackHeight",void 0);a([f],Tt.prototype,"trackLeft",void 0);a([f],Tt.prototype,"trackMinHeight",void 0);a([f],Tt.prototype,"valueTextFormatter",void 0);a([h({converter:G})],Tt.prototype,"min",void 0);a([h({converter:G})],Tt.prototype,"max",void 0);a([h({converter:G})],Tt.prototype,"step",void 0);a([h],Tt.prototype,"orientation",void 0);a([h],Tt.prototype,"mode",void 0);function Op(e={}){return m`
        <template
            role="switch"
            aria-checked="${t=>t.checked}"
            aria-disabled="${t=>t.disabled}"
            aria-readonly="${t=>t.readOnly}"
            tabindex="${t=>t.disabled?null:0}"
            @keypress="${(t,o)=>t.keypressHandler(o.event)}"
            @click="${(t,o)=>t.clickHandler(o.event)}"
        >
            <label
                part="label"
                class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
            >
                <slot ${M("defaultSlottedNodes")}></slot>
            </label>
            <div part="switch" class="switch">
                <slot name="switch">${N(e.switch)}</slot>
            </div>
        </template>
    `}var Ep=class extends D{},hl=class extends Nr(Ep){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var sr=class extends hl{constructor(){super(),this.initialValue="on",this.keypressHandler=t=>{if(!this.readOnly)switch(t.key){case bt:case Qt:this.checked=!this.checked;break}},this.clickHandler=t=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};a([h({attribute:"readonly",mode:"boolean"})],sr.prototype,"readOnly",void 0);a([f],sr.prototype,"defaultSlottedNodes",void 0);function Mp(){return m`
        <template slot="tabpanel" role="tabpanel">
            <slot></slot>
        </template>
    `}var Rn=class extends D{};function Pp(e={}){return m`
        <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
            ${Z(e)}
            <slot></slot>
            ${J(e)}
        </template>
    `}var nr=class extends D{};a([h({mode:"boolean"})],nr.prototype,"disabled",void 0);H(nr,q);var Lp=kt;function _p(e={}){return m`
        ${Z(e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot name="tab" ${M("tabs")}></slot>
        </div>
        ${J(e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${M("tabpanels")}></slot>
        </div>
    `}var yo=class extends D{constructor(){super(...arguments),this.orientation=Lp.horizontal,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=t=>t.getAttribute("aria-disabled")==="true",this.isHiddenElement=t=>t.hasAttribute("hidden"),this.isFocusableElement=t=>!this.isDisabledElement(t)&&!this.isHiddenElement(t),this.setTabs=()=>{let t="gridColumn",o="gridRow",i=this.isHorizontal()?t:o;this.activeTabIndex=this.getActiveIndex(),this.tabs.forEach((r,s)=>{if(r.slot==="tab"){let n=this.activeTabIndex===s&&this.isFocusableElement(r),l=this.tabIds[s],c=this.tabpanelIds[s];r.setAttribute("id",l),r.setAttribute("aria-selected",n?"true":"false"),r.setAttribute("aria-controls",c),r.addEventListener("click",this.handleTabClick),r.addEventListener("keydown",this.handleTabKeyDown),r.setAttribute("tabindex",n?"0":"-1"),n&&(this.activetab=r,this.activeid=l)}r.style[t]="",r.style[o]="",r.style[i]=`${s+1}`,this.isHorizontal()?r.classList.remove("vertical"):r.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((t,o)=>{let i=this.tabIds[o],r=this.tabpanelIds[o];t.setAttribute("id",r),t.setAttribute("aria-labelledby",i),this.activeTabIndex!==o?t.setAttribute("hidden",""):t.removeAttribute("hidden")})},this.handleTabClick=t=>{let o=t.currentTarget;o.nodeType===1&&this.isFocusableElement(o)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(o),this.setComponent())},this.handleTabKeyDown=t=>{if(this.isHorizontal())switch(t.key){case Pt:t.preventDefault(),this.adjustBackward(t);break;case Lt:t.preventDefault(),this.adjustForward(t);break}else switch(t.key){case at:t.preventDefault(),this.adjustBackward(t);break;case nt:t.preventDefault(),this.adjustForward(t);break}switch(t.key){case xt:t.preventDefault(),this.adjust(-this.activeTabIndex);break;case gt:t.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=t=>{let o=this.tabs,i=0;for(i=this.activetab?o.indexOf(this.activetab)+1:1,i===o.length&&(i=0);i<o.length&&o.length>1;)if(this.isFocusableElement(o[i])){this.moveToTabByIndex(o,i);break}else{if(this.activetab&&i===o.indexOf(this.activetab))break;i+1>=o.length?i=0:i+=1}},this.adjustBackward=t=>{let o=this.tabs,i=0;for(i=this.activetab?o.indexOf(this.activetab)-1:0,i=i<0?o.length-1:i;i>=0&&o.length>1;)if(this.isFocusableElement(o[i])){this.moveToTabByIndex(o,i);break}else i-1<0?i=o.length-1:i-=1},this.moveToTabByIndex=(t,o)=>{let i=t[o];this.activetab=i,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=o,i.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels())}activeidChanged(t,o){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(i=>i.id===t),this.setTabs(),this.setTabPanels())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(t=>{var o;return(o=t.getAttribute("id"))!==null&&o!==void 0?o:`tab-${Nt()}`})}getTabPanelIds(){return this.tabpanels.map(t=>{var o;return(o=t.getAttribute("id"))!==null&&o!==void 0?o:`panel-${Nt()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Lp.horizontal}adjust(t){let o=this.tabs.filter(n=>this.isFocusableElement(n)),i=o.indexOf(this.activetab),r=ho(0,o.length-1,i+t),s=this.tabs.indexOf(o[r]);s>-1&&this.moveToTabByIndex(this.tabs,s)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}};a([h],yo.prototype,"orientation",void 0);a([h],yo.prototype,"activeid",void 0);a([f],yo.prototype,"tabs",void 0);a([f],yo.prototype,"tabpanels",void 0);H(yo,q);function Hp(){return m`
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${M("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${z("control")}
        ></textarea>
    `}var zp=class extends D{},ul=class extends It(zp){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}};var Bp={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};var $t=class extends ul{constructor(){super(...arguments),this.resize=Bp.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};a([h({mode:"boolean"})],$t.prototype,"readOnly",void 0);a([h],$t.prototype,"resize",void 0);a([h({mode:"boolean"})],$t.prototype,"autofocus",void 0);a([h({attribute:"form"})],$t.prototype,"formId",void 0);a([h],$t.prototype,"list",void 0);a([h({converter:G})],$t.prototype,"maxlength",void 0);a([h({converter:G})],$t.prototype,"minlength",void 0);a([h],$t.prototype,"name",void 0);a([h],$t.prototype,"placeholder",void 0);a([h({converter:G,mode:"fromView"})],$t.prototype,"cols",void 0);a([h({converter:G,mode:"fromView"})],$t.prototype,"rows",void 0);a([h({mode:"boolean"})],$t.prototype,"spellcheck",void 0);a([f],$t.prototype,"defaultSlottedNodes",void 0);H($t,oi);function Vp(e={}){return m`
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${M({property:"defaultSlottedNodes",filter:Yr})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${Z(e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                name="${t=>t.name}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${z("control")}
            />
            ${J(e)}
        </div>
    `}var Zr=kt;function Np(e={}){return m`
        <template
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-orientation="${t=>t.orientation}"
            orientation="${t=>t.orientation}"
            role="toolbar"
            @click="${(t,o)=>t.clickHandler(o.event)}"
            @focusin="${(t,o)=>t.focusinHandler(o.event)}"
            @keydown="${(t,o)=>t.keydownHandler(o.event)}"
            ${Mo({property:"childItems",attributeFilter:["disabled","hidden"],selector:"*",subtree:!0})}
        >
            <slot name="label"></slot>
            <div class="positioning-region" part="positioning-region">
                ${Z(e)}
                <slot
                    ${M({filter:Rt(),property:"slottedItems"})}
                ></slot>
                ${J(e)}
            </div>
        </template>
    `}var Nm=Object.freeze({[Si.ArrowUp]:{[Zr.vertical]:-1},[Si.ArrowDown]:{[Zr.vertical]:1},[Si.ArrowLeft]:{[Zr.horizontal]:{[it.ltr]:-1,[it.rtl]:1}},[Si.ArrowRight]:{[Zr.horizontal]:{[it.ltr]:1,[it.rtl]:-1}}}),Qe=class e extends D{constructor(){super(...arguments),this._activeIndex=0,this.direction=it.ltr,this.orientation=Zr.horizontal}get activeIndex(){return I.track(this,"activeIndex"),this._activeIndex}set activeIndex(t){this.$fastController.isConnected&&(this._activeIndex=ho(0,this.focusableElements.length-1,t),I.notify(this,"activeIndex"))}slottedItemsChanged(){this.$fastController.isConnected&&this.reduceFocusableElements()}clickHandler(t){var o;let i=(o=this.focusableElements)===null||o===void 0?void 0:o.indexOf(t.target);return i>-1&&this.activeIndex!==i&&this.setFocusedElement(i),!0}childItemsChanged(t,o){this.$fastController.isConnected&&this.reduceFocusableElements()}connectedCallback(){super.connectedCallback(),this.direction=qo(this)}focusinHandler(t){let o=t.relatedTarget;!o||this.contains(o)||this.setFocusedElement()}getDirectionalIncrementer(t){var o,i,r,s,n;return(n=(r=(i=(o=Nm[t])===null||o===void 0?void 0:o[this.orientation])===null||i===void 0?void 0:i[this.direction])!==null&&r!==void 0?r:(s=Nm[t])===null||s===void 0?void 0:s[this.orientation])!==null&&n!==void 0?n:0}keydownHandler(t){let o=t.key;if(!(o in Si)||t.defaultPrevented||t.shiftKey)return!0;let i=this.getDirectionalIncrementer(o);if(!i)return!t.target.closest("[role=radiogroup]");let r=this.activeIndex+i;return this.focusableElements[r]&&t.preventDefault(),this.setFocusedElement(r),!0}get allSlottedItems(){var t,o,i,r;let s=(o=(t=this.start)===null||t===void 0?void 0:t.assignedElements())!==null&&o!==void 0?o:[],n=(r=(i=this.end)===null||i===void 0?void 0:i.assignedElements())!==null&&r!==void 0?r:[];return[...s,...this.slottedItems,...n]}reduceFocusableElements(){var t;let o=(t=this.focusableElements)===null||t===void 0?void 0:t[this.activeIndex];this.focusableElements=this.allSlottedItems.reduce(e.reduceFocusableItems,[]);let i=this.focusableElements.indexOf(o);this.activeIndex=Math.max(0,i),this.setFocusableElements()}setFocusedElement(t=this.activeIndex){var o;this.activeIndex=t,this.setFocusableElements(),(o=this.focusableElements[this.activeIndex])===null||o===void 0||o.focus()}static reduceFocusableItems(t,o){var i,r,s,n;let l=o.getAttribute("role")==="radio",c=(r=(i=o.$fastController)===null||i===void 0?void 0:i.definition.shadowOptions)===null||r===void 0?void 0:r.delegatesFocus,p=Array.from((n=(s=o.shadowRoot)===null||s===void 0?void 0:s.querySelectorAll("*"))!==null&&n!==void 0?n:[]).some(d=>Jd(d));return!o.hasAttribute("disabled")&&!o.hasAttribute("hidden")&&(Jd(o)||l||c||p)?(t.push(o),t):o.childElementCount?t.concat(Array.from(o.children).reduce(e.reduceFocusableItems,[])):t}setFocusableElements(){this.$fastController.isConnected&&this.focusableElements.length>0&&this.focusableElements.forEach((t,o)=>{t.tabIndex=this.activeIndex===o?0:-1})}};a([f],Qe.prototype,"direction",void 0);a([h],Qe.prototype,"orientation",void 0);a([f],Qe.prototype,"slottedItems",void 0);a([f],Qe.prototype,"slottedLabel",void 0);a([f],Qe.prototype,"childItems",void 0);var ar=class{};a([h({attribute:"aria-labelledby"})],ar.prototype,"ariaLabelledby",void 0);a([h({attribute:"aria-label"})],ar.prototype,"ariaLabel",void 0);H(ar,Q);H(Qe,q,ar);var Gm={bottom:"bottom",bottomEnd:"bottom-end",bottomStart:"bottom-start",left:"left",leftEnd:"left-end",leftStart:"left-start",right:"right",rightEnd:"right-end",rightStart:"right-start",top:"top",topEnd:"top-end",topStart:"top-start"};var Oe=class extends D{constructor(){super(...arguments),this._visible=!1,this.controlledVisibility=!1,this.focusoutAnchorHandler=()=>{!this.controlledVisibility&&this._visible&&this.hideTooltip()},this.focusinAnchorHandler=()=>{!this.controlledVisibility&&!this._visible&&this.showTooltip()},this.keydownDocumentHandler=t=>{if(!t.defaultPrevented&&this.visible)switch(t.key){case Yt:{this.dismiss();break}}},this.mouseoverAnchorHandler=()=>{var t;!((t=document.activeElement)===null||t===void 0)&&t.isSameNode(this.anchorElement)||this.showTooltip()},this.mouseoutAnchorHandler=t=>{var o;!(!((o=document.activeElement)===null||o===void 0)&&o.isSameNode(this.anchorElement))&&!this.isSameNode(t.relatedTarget)&&this.hideTooltip()},this.placement=Gm.bottom}anchorChanged(t,o){this.$fastController.isConnected&&(this.removeListeners(),this.removeAnchorAriaDescribedBy(this.id),this.anchorElement=this.getAnchorElement(o),this.addAnchorAriaDescribedBy(),this.controlledVisibility||this.addListeners())}controlledVisibilityChanged(t,o){if(!o){this.addListeners(),this.hideTooltip();return}this.removeListeners()}idChanged(t,o){this.removeAnchorAriaDescribedBy(t),$.enqueue(()=>{this.addAnchorAriaDescribedBy()})}positionStylesChanged(t,o){this.$fastController.removeStyles(t),this.$fastController.addStyles(o)}showChanged(t,o){this.setVisible(o)}get visible(){return this._visible}setVisible(t){if(this.controlledVisibility=typeof t=="boolean",this.controlledVisibility&&(this.show=t),t){this.showTooltip();return}this.hideTooltip()}addAnchorAriaDescribedBy(){var t;if(!this.id){this.id=Nt("tooltip-");return}if(!this.anchorElement)return;let o=(t=this.anchorElement.getAttribute("aria-describedby"))===null||t===void 0?void 0:t.concat(" ",this.id).trim();o&&this.anchorElement.setAttribute("aria-describedby",o)}addListeners(){this.anchorElement&&(this.anchorElement.addEventListener("focusin",this.focusinAnchorHandler),this.anchorElement.addEventListener("focusout",this.focusoutAnchorHandler),this.anchorElement.addEventListener("mouseout",this.mouseoutAnchorHandler),this.anchorElement.addEventListener("mouseover",this.mouseoverAnchorHandler),this.addEventListener("mouseout",this.mouseoutAnchorHandler),this.addEventListener("mouseover",this.mouseoverAnchorHandler),document.addEventListener("keydown",this.keydownDocumentHandler))}connectedCallback(){super.connectedCallback(),this.anchorChanged(void 0,this.anchor)}dismiss(){this.hideTooltip(),this.$emit("dismiss")}hideTooltip(){var t;this._visible=!1,(t=this.cleanup)===null||t===void 0||t.call(this)}getAnchorElement(t=""){let o=this.getRootNode();return o instanceof ShadowRoot?o.getElementById(t):document.getElementById(t)}removeAnchorAriaDescribedBy(t){var o;if(this.anchorElement){let i=(o=this.anchorElement.getAttribute("aria-describedby"))===null||o===void 0?void 0:o.split(" ");this.anchorElement.setAttribute("aria-describedby",(i??[]).filter(r=>r!==t).join(" ")),this.anchorElement.getAttribute("aria-describedby")===""&&this.anchorElement.removeAttribute("aria-describedby")}}removeListeners(){this.anchorElement&&(this.anchorElement.removeEventListener("focusin",this.focusinAnchorHandler),this.anchorElement.removeEventListener("focusout",this.focusoutAnchorHandler),this.anchorElement.removeEventListener("mouseout",this.mouseoutAnchorHandler),this.anchorElement.removeEventListener("mouseover",this.mouseoverAnchorHandler),this.removeEventListener("mouseout",this.mouseoutAnchorHandler),this.removeEventListener("mouseover",this.mouseoverAnchorHandler),document.removeEventListener("keydown",this.keydownDocumentHandler))}setPositioning(){var t;if((t=this.cleanup)===null||t===void 0||t.call(this),!this.anchorElement){this.hideTooltip();return}let o=this.anchorElement;this.cleanup=Ti(o,this,()=>bi(this,void 0,void 0,function*(){let i=[Xa()];this.placement||i.unshift(Di());let{x:r,y:s}=yield Ri(o,this,{placement:this.placement,strategy:"fixed",middleware:i});this.positionStyles=y`
                :host {
                    position: fixed;
                    left: ${r.toString()}px;
                    top: ${s.toString()}px;
                }
            `}))}showTooltip(){this._visible=!0,$.enqueue(()=>this.setPositioning())}};a([f],Oe.prototype,"_visible",void 0);a([h({attribute:"anchor"})],Oe.prototype,"anchor",void 0);a([f],Oe.prototype,"controlledVisibility",void 0);a([h],Oe.prototype,"id",void 0);a([h],Oe.prototype,"placement",void 0);a([f],Oe.prototype,"positionStyles",void 0);a([h({attribute:"show",converter:Yc,mode:"fromView"})],Oe.prototype,"show",void 0);function Gp(){return m`
        <template role="tooltip" ?visible="${e=>e.visible}">
            <slot></slot>
        </template>
    `}function go(e){return po(e)&&e.isTreeItem}var ht=class extends D{constructor(){super(...arguments),this.expanded=!1,this.isTreeItem=!0,this.focusable=!1,this.nested=!1,this.isNestedItem=()=>go(this.parentElement),this.handleExpandCollapseButtonClick=t=>{!this.disabled&&!t.defaultPrevented&&(this.expanded=!this.expanded)},this.handleFocus=t=>{this.setAttribute("tabindex","0")},this.handleBlur=t=>{this.setAttribute("tabindex","-1")}}expandedChanged(t,o){this.$fastController.isConnected&&this.$emit("expanded-change",this)}selectedChanged(t,o){this.$fastController.isConnected&&this.$emit("selected-change",this)}itemsChanged(t,o){this.$fastController.isConnected&&this.items.forEach(i=>{go(i)&&(i.nested=!0)})}static focusItem(t){t.focusable=!0,t.focus()}get childItemLength(){var t;return this.$fastController.isConnected?(t=this.childItems)===null||t===void 0?void 0:t.filter(o=>go(o)).length:0}};a([h({mode:"boolean"})],ht.prototype,"expanded",void 0);a([h({mode:"boolean"})],ht.prototype,"selected",void 0);a([h({mode:"boolean"})],ht.prototype,"disabled",void 0);a([f],ht.prototype,"focusable",void 0);a([f],ht.prototype,"childItems",void 0);a([f],ht.prototype,"items",void 0);a([h({mode:"boolean"})],ht.prototype,"nested",void 0);H(ht,q);function jp(){return m`
        <template
            role="tree"
            ${z("treeView")}
            @keydown="${(e,t)=>e.handleKeyDown(t.event)}"
            @focusin="${(e,t)=>e.handleFocus(t.event)}"
            @focusout="${(e,t)=>e.handleBlur(t.event)}"
            @click="${(e,t)=>e.handleClick(t.event)}"
            @selected-change="${(e,t)=>e.handleSelectedChange(t.event)}"
        >
            <slot ${M("slottedTreeItems")}></slot>
        </template>
    `}var lr=class extends D{constructor(){super(...arguments),this.currentFocused=null,this.handleFocus=t=>{if(!(this.slottedTreeItems.length<1)){if(t.target===this){this.currentFocused===null&&(this.currentFocused=this.getValidFocusableItem()),this.currentFocused!==null&&ht.focusItem(this.currentFocused);return}this.contains(t.target)&&(this.setAttribute("tabindex","-1"),this.currentFocused=t.target)}},this.handleBlur=t=>{t.target instanceof HTMLElement&&(t.relatedTarget===null||!this.contains(t.relatedTarget))&&this.setAttribute("tabindex","0")},this.handleKeyDown=t=>{if(t.defaultPrevented)return;if(this.slottedTreeItems.length<1)return!0;let o=this.getVisibleNodes();switch(t.key){case xt:o.length&&ht.focusItem(o[0]);return;case gt:o.length&&ht.focusItem(o[o.length-1]);return;case Pt:if(t.target&&this.isFocusableElement(t.target)){let i=t.target;i instanceof ht&&i.childItemLength>0&&i.expanded?i.expanded=!1:i instanceof ht&&i.parentElement instanceof ht&&ht.focusItem(i.parentElement)}return!1;case Lt:if(t.target&&this.isFocusableElement(t.target)){let i=t.target;i instanceof ht&&i.childItemLength>0&&!i.expanded?i.expanded=!0:i instanceof ht&&i.childItemLength>0&&this.focusNextNode(1,t.target)}return;case nt:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(1,t.target);return;case at:t.target&&this.isFocusableElement(t.target)&&this.focusNextNode(-1,t.target);return;case bt:this.handleClick(t);return}return!0},this.handleSelectedChange=t=>{if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!go(t.target))return!0;let o=t.target;o.selected?(this.currentSelected&&this.currentSelected!==o&&(this.currentSelected.selected=!1),this.currentSelected=o):!o.selected&&this.currentSelected===o&&(this.currentSelected=null)},this.setItems=()=>{let t=this.treeView.querySelector("[aria-selected='true']");this.currentSelected=t,(this.currentFocused===null||!this.contains(this.currentFocused))&&(this.currentFocused=this.getValidFocusableItem()),this.nested=this.checkForNestedItems(),this.getVisibleNodes().forEach(i=>{go(i)&&(i.nested=this.nested)})},this.isFocusableElement=t=>go(t),this.isSelectedElement=t=>t.selected}slottedTreeItemsChanged(){this.$fastController.isConnected&&this.setItems()}connectedCallback(){super.connectedCallback(),this.setAttribute("tabindex","0"),$.enqueue(()=>{this.setItems()})}handleClick(t){if(t.defaultPrevented)return;if(!(t.target instanceof Element)||!go(t.target))return!0;let o=t.target;o.disabled||(o.selected=!o.selected)}focusNextNode(t,o){let i=this.getVisibleNodes();if(!i)return;let r=i[i.indexOf(o)+t];po(r)&&ht.focusItem(r)}getValidFocusableItem(){let t=this.getVisibleNodes(),o=t.findIndex(this.isSelectedElement);return o===-1&&(o=t.findIndex(this.isFocusableElement)),o!==-1?t[o]:null}checkForNestedItems(){return this.slottedTreeItems.some(t=>go(t)&&t.querySelector("[role='treeitem']"))}getVisibleNodes(){return qu(this,"[role='treeitem']")||[]}};a([f],lr.prototype,"currentSelected",void 0);a([f],lr.prototype,"slottedTreeItems",void 0);function Up(e,...t){let o=Po.locate(e);t.forEach(i=>{Object.getOwnPropertyNames(i.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(e.prototype,s,Object.getOwnPropertyDescriptor(i.prototype,s))}),Po.locate(i).forEach(s=>o.push(s))})}var qp,O={color:"color",dimension:"dimension",fontFamily:"fontFamily",fontWeight:"fontWeight",duration:"duration",cubicBezier:"cubicBezier",number:"number",strokeStyle:"strokeStyle",border:"border",transition:"transition",shadow:"shadow",gradient:"gradient",typography:"typography",fontStyle:"fontStyle",fontVariations:"fontVariations",palette:"palette",recipe:"recipe",string:"string"},ml=class{get type(){return this._type}set type(t){this._type=t}get intendedFor(){return this._intendedFor}set intendedFor(t){this._intendedFor=t}init(t,o){this.type=t,o&&(Array.isArray(o)?this.intendedFor=o:this.intendedFor=[o])}},Fn=class e extends de{constructor(t,o,i){super({name:t}),this.init(o,i)}static createTyped(t,o,i){return new e(t,o,i)}};Up(Fn,ml);var Je=qp=class extends Xe{constructor(t,o,i){super({name:t,cssCustomPropertyName:t}),this.init(o,i)}static createTyped(t,o,i){return new qp(t,o,i)}};Je=qp=a([Oo(),Ns(),gi("design:paramtypes",[String,String,Object])],Je);Up(Je,ml);var fl=class extends Array{createCSS(){return this.map(o=>o&&typeof o.createCSS=="function"?o.createCSS():o).join(", ")}};var C={disabledAttribute:{interactivitySelector:":not([disabled])",disabledSelector:"[disabled]"},hrefAttribute:{interactivitySelector:"[href]",disabledSelector:void 0},always:{interactivitySelector:"",disabledSelector:void 0},never:{interactivitySelector:void 0,disabledSelector:void 0}},U={hostFocused:()=>({focusTarget:{ignoreInteractivity:!0}}),hostChildFocused:e=>({focusTarget:{stateOnHost:!0,part:e,ignoreInteractivity:!0},resetTarget:{ignoreInteractivity:!0}}),partFocused:e=>({focusTarget:{part:e,ignoreInteractivity:!0}}),partWithin:(e,t)=>({focusTarget:{part:e,focusSelector:"focus-within",ignoreInteractivity:!0},resetTarget:{part:t,ignoreInteractivity:!0}})},v={backgroundFill:"backgroundFill",foregroundFill:"foregroundFill",borderFillTop:"borderFillTop",borderFillRight:"borderFillRight",borderFillBottom:"borderFillBottom",borderFillLeft:"borderFillLeft",borderThicknessTop:"borderThicknessTop",borderThicknessRight:"borderThicknessRight",borderThicknessBottom:"borderThicknessBottom",borderThicknessLeft:"borderThicknessLeft",borderStyleTop:"borderStyleTop",borderStyleRight:"borderStyleRight",borderStyleBottom:"borderStyleBottom",borderStyleLeft:"borderStyleLeft",cornerRadiusTopLeft:"cornerRadiusTopLeft",cornerRadiusTopRight:"cornerRadiusTopRight",cornerRadiusBottomRight:"cornerRadiusBottomRight",cornerRadiusBottomLeft:"cornerRadiusBottomLeft",fontFamily:"fontFamily",fontSize:"fontSize",fontWeight:"fontWeight",fontStyle:"fontStyle",fontVariationSettings:"fontVariationSettings",letterSpacing:"letterSpacing",lineHeight:"lineHeight",paddingTop:"paddingTop",paddingRight:"paddingRight",paddingBottom:"paddingBottom",paddingLeft:"paddingLeft",gap:"gap",height:"height",width:"width",layoutDirection:"layoutDirection",opacity:"opacity",cursor:"cursor",outlineColor:"outlineColor",outlineOffset:"outlineOffset",outlineStyle:"outlineStyle",outlineWidth:"outlineWidth",shadow:"shadow"},bo=[v.borderFillTop,v.borderFillRight,v.borderFillBottom,v.borderFillLeft],Wp=[v.borderThicknessTop,v.borderThicknessRight,v.borderThicknessBottom,v.borderThicknessLeft],l3=[v.borderStyleTop,v.borderStyleRight,v.borderStyleBottom,v.borderStyleLeft],Kp=[v.cornerRadiusTopLeft,v.cornerRadiusTopRight,v.cornerRadiusBottomRight,v.cornerRadiusBottomLeft],c3=[v.paddingTop,v.paddingRight,v.paddingBottom,v.paddingLeft];var{create:m3}=de;function jm(e){return de.create({name:e})}var{createTyped:Um}=Je;function B(e,t,o){return Fn.createTyped(e,t,o)}function yl(e,t,o){return B(`${e}-recipe`,O.recipe,t).withDefault({evaluate:o})}function we(e,t){return Je.createTyped(e,O.dimension,t)}function gl(e){return Je.createTyped(e,O.fontFamily,v.fontFamily)}function xo(e){return we(e,v.fontSize)}function bl(e){return Je.createTyped(e,O.fontStyle,v.fontStyle)}function vo(e){return Je.createTyped(e,O.fontVariations,v.fontVariationSettings)}function xl(e){return Je.createTyped(e,O.fontWeight,v.fontWeight)}function So(e){return we(e,v.lineHeight)}function qt(e,t){return Je.createTyped(e,O.color,t)}var W=we("design-unit").withDefault("4px"),Ze=we("corner-radius-control",Kp).withDefault("4px"),qm=we("corner-radius-layer",Kp).withDefault("8px"),vt=we("stroke-thickness",Wp).withDefault("1px"),Wt=we("focus-stroke-thickness",Wp).withDefault("2px");var vl=B("density-adjustment-units",O.number).withDefault(0),ts=class{constructor(t,o,i,r,s){this.name=t,this.horizontalPaddingUnits=B(`${t}-horizontal-padding-units`,O.number).withDefault(o),this.horizontalPadding=we(`${t}-horizontal-padding`,[v.paddingTop,v.paddingRight,v.paddingBottom,v.paddingLeft]).withDefault(n=>`calc((${n(this.horizontalPaddingUnits)+n(vl)} * ${n(W)}) - ${n(vt)})`),this.horizontalGapUnits=B(`${t}-horizontal-gap-units`,O.number).withDefault(i),this.horizontalGap=we(`${t}-horizontal-gap`,v.gap).withDefault(n=>`calc((${n(this.horizontalGapUnits)} + ${n(vl)}) * ${n(W)})`),this.verticalPaddingUnits=B(`${t}-vertical-padding-units`,O.number).withDefault(r),this.verticalPadding=we(`${t}-vertical-padding`,[v.paddingTop,v.paddingRight,v.paddingBottom,v.paddingLeft]).withDefault(n=>`calc((${n(this.verticalPaddingUnits)+n(vl)} * ${n(W)}) - ${n(vt)})`),this.verticalGapUnits=B(`${t}-vertical-gap-units`,O.number).withDefault(s),this.verticalGap=we(`${t}-vertical-gap`,v.gap).withDefault(n=>`calc((${n(this.verticalGapUnits)} + ${n(vl)}) * ${n(W)})`)}get padding(){return y.partial`${this.verticalPadding} ${this.horizontalPadding}`}};function cr(e,t){let o=[],i=t&&t!=="disabled"?":"+t:"";if(e.hostCondition||t&&t!=="disabled"&&e.interactivitySelector!==void 0||t&&t==="disabled"&&e.disabledSelector!==void 0){let s=e.hostCondition||"";t&&(t!=="disabled"?(s+=e.interactivitySelector||"",(!e.part||e.stateOnHost===!0)&&(s+=i)):s+=e.disabledSelector||""),s!==""&&o.push(`:host(${s})`)}else e.part||o.push(":host");return e.part&&(e.part==="*"?o.push("*"):o.push(`.${e.part}${e.partCondition||""}${e.stateOnHost!==!0?i:""}`)),o.join(" ")}var Wm=e=>{switch(e){case v.backgroundFill:return"background-color";case v.foregroundFill:return"color";case v.borderFillTop:return"border-top-color";case v.borderFillRight:return"border-right-color";case v.borderFillBottom:return"border-bottom-color";case v.borderFillLeft:return"border-left-color";case v.borderThicknessTop:return"border-top-width";case v.borderThicknessRight:return"border-right-width";case v.borderThicknessBottom:return"border-bottom-width";case v.borderThicknessLeft:return"border-left-width";case v.borderStyleTop:return"border-top-style";case v.borderStyleRight:return"border-right-style";case v.borderStyleBottom:return"border-bottom-style";case v.borderStyleLeft:return"border-left-style";case v.cornerRadiusTopLeft:return"border-top-left-radius";case v.cornerRadiusTopRight:return"border-top-right-radius";case v.cornerRadiusBottomRight:return"border-bottom-right-radius";case v.cornerRadiusBottomLeft:return"border-bottom-left-radius";case v.fontFamily:return"font-family";case v.fontSize:return"font-size";case v.fontWeight:return"font-weight";case v.fontStyle:return"font-style";case v.fontVariationSettings:return"font-variation-settings";case v.letterSpacing:return"letter-spacing";case v.lineHeight:return"line-height";case v.paddingTop:return"padding-top";case v.paddingRight:return"padding-right";case v.paddingBottom:return"padding-bottom";case v.paddingLeft:return"padding-left";case v.gap:return"gap";case v.height:return"height";case v.width:return"width";case v.layoutDirection:return"flex-direction";case v.opacity:return"opacity";case v.cursor:return"cursor";case v.outlineColor:return"outline-color";case v.outlineOffset:return"outline-offset";case v.outlineStyle:return"outline-style";case v.outlineWidth:return"outline-width";case v.shadow:return"box-shadow"}};var Sl=class e{constructor(t){this._rules=new Map,this._evaluateFunctions=this.createStyleModules(t)}static declaration(t,o,i){let r=Wm(t),s=new Map([[r,o]]);return i===void 0&&t==="foregroundFill"&&s.set("fill","currentcolor"),s}static propertySingle(t,o){return i=>new Map([[cr(i),e.declaration(t,o)]])}static propertyInteractive(t,o){return i=>{let r=new Map;if(o.rest&&r.set(cr(i),e.declaration(t,o.rest)),i.interactivitySelector!==void 0&&o.hover&&r.set(cr(i,"hover"),e.declaration(t,o.hover,"hover")),i.interactivitySelector!==void 0&&o.active&&r.set(cr(i,"active"),e.declaration(t,o.active,"active")),i.interactivitySelector!==void 0&&o.focus){let s=i.focusSelector||"focus-visible";r.set(cr(i,s),e.declaration(t,o.focus,s))}return i.disabledSelector!==void 0&&o.disabled&&r.set(cr(i,"disabled"),e.declaration(t,o.disabled,"disabled")),r}}createStyleModules(t){return new Array(...t.effectiveProperties.entries()).map(([i,r])=>typeof r=="string"||r instanceof Xe||r&&typeof r.createCSS=="function"?e.propertySingle(i,r):e.propertyInteractive(i,r))}appendRule(t,o){let i=new Array(...o.entries()).map(([r,s])=>y.partial`${r}: ${s};`);this._rules.has(t)?this._rules.get(t).push(...i):this._rules.set(t,i)}render(t,o){let i=t.ignoreInteractivity===!0?C.always:o,r=Object.assign({},i,t);this._evaluateFunctions.forEach(p=>{let d=p(r);for(let u of d)this.appendRule(u[0],u[1])});let s=[],n=p=>{s.push(p)},l=[];for(let p of this._rules){let d=p[1].map(g=>g.createCSS(n)).join(" "),u=`${p[0]} { ${d} }`;l.push(u)}let c=new ut(l);return s.length>0?c.withBehaviors(...s):c}};function E(e,t,o){return B(`${e}-${t}-delta`,O.number).withDefault(o)}function Km(e,t){return B(`${e}-min-contrast`,O.number).withDefault(t)}function es(e,t,o){return B(`${e}-recipe`,O.recipe,t).withDefault({evaluate:o})}function Xp(e,t,o){return B(`${e}-recipe`,O.recipe,t).withDefault({evaluate:o})}function to(e,t,o){return B(`${e}-recipe`,O.recipe,t).withDefault({evaluate:o})}function wl(e,t){let i=t.name.split("-")[0]+"-"+e.name;return B(i,O.recipe,e.intendedFor).withDefault({evaluate:(r,s)=>{let n=Object.assign({palette:r(t)},s);return r(e).evaluate(r,n)}})}function In(e,t){return qt(`${e.name.replace("-value","")}-${t}`,e.intendedFor).withDefault(o=>o(e)[t])}function j(e){let t=e.name.replace("-recipe",""),o=B(`${t}-value`,O.color,e.intendedFor).withDefault(i=>i(e).evaluate(i));return{name:t,type:O.color,intendedFor:o.intendedFor,rest:In(o,"rest"),hover:In(o,"hover"),active:In(o,"active"),focus:In(o,"focus"),disabled:In(o,"disabled")}}function kl(e){return qt(`${e.name.replace("-recipe","")}`,e.intendedFor).withDefault(t=>t(e).evaluate(t))}function Xm(e,t){let i=`${`${e.name.replace("-recipe","")}`}-on-${t.name}`;function r(s,n){return qt(`${i}-${n}`).withDefault(l=>l(e).evaluate(l,{reference:l(t[n])})[s])}return{name:i,type:O.color,intendedFor:e.intendedFor,rest:r("rest","rest"),hover:r("rest","hover"),active:r("rest","active"),focus:r("rest","focus"),disabled:r("disabled","disabled")}}function Ym(e,t){let i=`${e.name.replace("-recipe","")}-on-${t.name}`,r=B(`${i}-value`,O.color).withDefault(n=>{let l={rest:n(t.rest),hover:n(t.hover),active:n(t.active),focus:n(t.focus),disabled:n(t.disabled)};return n(e).evaluate(n,l)});function s(n){return qt(`${i}-${n}`).withDefault(l=>l(r)[n])}return{name:i,intendedFor:e.intendedFor,type:O.color,rest:s("rest"),hover:s("hover"),active:s("active"),focus:s("focus"),disabled:s("disabled")}}var St={backgroundAndForeground:function(e,t){return{backgroundFill:e,foregroundFill:Xm(t,e)}},backgroundAndForegroundBySet:function(e,t){return{backgroundFill:e,foregroundFill:Ym(t,e)}},foregroundNonInteractiveWithDisabled:function(e,t){return{foregroundFill:{name:`${e.name}-with-disabled-value`,rest:e,hover:e,active:e,focus:e,disabled:t}}}},Cl={all:function(e){return{borderFillTop:e,borderFillRight:e,borderFillBottom:e,borderFillLeft:e}}},Qm={all:function(e){return{borderThicknessTop:e,borderThicknessRight:e,borderThicknessBottom:e,borderThicknessLeft:e}}},Jm={all:function(e){return{borderStyleTop:e,borderStyleRight:e,borderStyleBottom:e,borderStyleLeft:e}}},dr={all:function(e){return{cornerRadiusTopLeft:e,cornerRadiusTopRight:e,cornerRadiusBottomRight:e,cornerRadiusBottomLeft:e}}},An={all:function(e){return{paddingTop:e,paddingRight:e,paddingBottom:e,paddingLeft:e}},verticalHorizontal:function(e,t){return{paddingTop:e,paddingRight:t,paddingBottom:e,paddingLeft:t}}},b=class e{constructor(t,o){if(this.name=t,t&&e.Shared.has(t))throw`Style '${t}' already created. Update it instead.`;if(Array.isArray(o))this._composed=o,this.createEffectiveProperties();else{this._properties=new Map;for(let i in o){let r=i,s=o[r];s&&this._properties.set(r,s)}}t&&e.Shared.set(t,this)}get composed(){return this._composed}clearComposed(){this._composed=void 0,this._composedProperties=void 0}appendComposed(t){this._composed?.push(t),this.createEffectiveProperties()}get properties(){return this._properties}set properties(t){this._properties=t,this.createEffectiveProperties()}get effectiveProperties(){return this._composedProperties?this._composedProperties:this._properties?this._properties:new Map}createEffectiveProperties(){if(this._composed){let t=new Map;this._composed.forEach(o=>{o.effectiveProperties.forEach((i,r)=>{t.set(r,i)})}),this._properties?.forEach((o,i)=>{t.set(i,o)}),this._composedProperties=t}}static compose(t,o,i){return o&&t.push(e.fromProperties(o)),new e(i,t)}static fromProperties(t,o){return new e(o,t)}};b.Shared=new Map;var $n=Vo.toTransparent();function Zm(e,t){return t?e:{rest:$n,hover:$n,active:$n,focus:$n,disabled:$n}}var mk=B("neutral-base-color",O.color).withDefault("#808080"),On=B("neutral-palette",O.palette).withDefault(e=>Ki.from(e(mk))),fk=B("accent-base-color",O.color).withDefault("#F26C0D"),Yp=B("accent-palette",O.palette).withDefault(e=>Ki.from(e(fk))),yk=B("highlight-base-color",O.color).withDefault("#0DA1F2"),tf=B("highlight-palette",O.palette).withDefault(e=>Ki.from(e(yk))),gk=B("critical-base-color",O.color).withDefault("#D92635"),ef=B("critical-palette",O.palette).withDefault(e=>Ki.from(e(gk))),eo=B("disabled-palette",O.palette).withDefault(On);function wo(e){return wl(e,Yp)}function ko(e){return wl(e,tf)}function Co(e){return wl(e,ef)}function To(e){let t=On,i=t.name.split("-")[0]+"-"+e.name;return B(i,O.recipe,e.intendedFor).withDefault({evaluate:(r,s)=>{let n=Object.assign({palette:r(t)},s);return Gu(r(e).evaluate(r,n),n.reference||r(lt),r(xk))}})}var Tl=B("wcag-contrast-level",O.string).withDefault("aa"),Qp=B("min-contrast-safety",O.number).withDefault(e=>e(Tl)==="aa"?0:3),bk=B("min-contrast-subtle",O.number).withDefault(e=>e(Tl)==="aa"?1.5:3),Dl=B("min-contrast-discernible",O.number).withDefault(e=>e(Tl)==="aa"?3:4.5),En=B("min-contrast-readable",O.number).withDefault(e=>e(Tl)==="aa"?4.5:7),lt=qt("fill-color").withDefault(Vo),xk=jm("neutral-as-overlay").withDefault(!1),Mn=Xp("black-or-white-discernible",v.foregroundFill,(e,t)=>fd(t,e(Dl),!1)),Rl=Xp("black-or-white-readable",v.foregroundFill,(e,t)=>fd(t,e(En),!1)),os="fill-stealth",vk=E(os,"rest",0),Sk=E(os,"hover",3),wk=E(os,"active",2),kk=E(os,"focus",0),Ck=E(os,"disabled",0),Fl=to(os,v.backgroundFill,(e,t)=>tn(t.palette,t.reference||e(lt),e(vk),e(Sk),e(wk),e(kk),e(Ck),e(eo),void 0,!0)),is="fill-subtle",Tk=E(is,"rest",2),Dk=E(is,"hover",3),Rk=E(is,"active",1),Fk=E(is,"focus",2),Ik=E(is,"disabled",2),Il=to(is,v.backgroundFill,(e,t)=>tn(t.palette,t.reference||e(lt),e(Tk),e(Dk),e(Rk),e(Fk),e(Ik),e(eo))),rs="fill-discernible",Ak=E(rs,"rest",0),$k=E(rs,"hover",6),Ok=E(rs,"active",3),Ek=E(rs,"focus",0),Mk=E(rs,"disabled",2),Al=to(rs,v.backgroundFill,(e,t)=>Go(t.palette,t.reference||e(lt),e(Dl),e(Ak),e($k),e(Ok),e(Ek),e(Mk),e(eo))),ss="fill-readable",Pk=E(ss,"rest",0),Lk=E(ss,"hover",-2),_k=E(ss,"active",2),Hk=E(ss,"focus",0),zk=E(ss,"disabled",2),$l=to(ss,v.backgroundFill,(e,t)=>Go(t.palette,t.reference||e(lt),e(En),e(Pk),e(Lk),e(_k),e(Hk),e(zk),e(eo))),ns="stroke-safety",Bk=E(ns,"rest",0),Vk=E(ns,"hover",6),Nk=E(ns,"active",-6),Gk=E(ns,"focus",0),jk=E(ns,"disabled",0),Ol=to(ns,bo,(e,t)=>Zm(Go(t.palette,t.reference||e(lt),e(Qp),e(Bk),e(Vk),e(Nk),e(Gk),e(jk),e(eo)),e(Qp)>0)),as="stroke-stealth",Uk=E(as,"rest",0),qk=E(as,"hover",6),Wk=E(as,"active",-6),Kk=E(as,"focus",0),Xk=E(as,"disabled",0),El=to(as,bo,(e,t)=>Go(t.palette,t.reference||e(lt),e(Qp),e(Uk),e(qk),e(Wk),e(Kk),e(Xk),e(eo),void 0,!0)),ls="stroke-subtle",Yk=E(ls,"rest",0),Qk=E(ls,"hover",4),Jk=E(ls,"active",-2),Zk=E(ls,"focus",0),tC=E(ls,"disabled",8),Ml=to(ls,bo,(e,t)=>Go(t.palette,t.reference||e(lt),e(bk),e(Yk),e(Qk),e(Jk),e(Zk),e(tC),e(eo))),cs="stroke-discernible",eC=E(cs,"rest",0),oC=E(cs,"hover",8),iC=E(cs,"active",-4),rC=E(cs,"focus",0),sC=E(cs,"disabled",8),Pl=to(cs,bo,(e,t)=>Go(t.palette,t.reference||e(lt),e(Dl),e(eC),e(oC),e(iC),e(rC),e(sC),e(eo))),ds="stroke-readable",nC=E(ds,"rest",0),aC=E(ds,"hover",6),lC=E(ds,"active",-6),cC=E(ds,"focus",0),dC=E(ds,"disabled",8),Ll=to(ds,[...bo,v.foregroundFill],(e,t)=>Go(t.palette,t.reference||e(lt),e(En),e(nC),e(aC),e(lC),e(cC),e(dC),e(eo))),pr="stroke-strong",pC=Km(pr,12),hC=E(pr,"rest",0),uC=E(pr,"hover",10),mC=E(pr,"active",-10),fC=E(pr,"focus",0),yC=E(pr,"disabled",8),_l=to(pr,[...bo,v.foregroundFill],(e,t)=>Go(t.palette,t.reference||e(lt),e(pC),e(hC),e(uC),e(mC),e(fC),e(yC),e(eo))),gC=wo(Fl),ps=j(gC),s6=ps.rest,n6=ps.hover,a6=ps.active,l6=ps.focus,bC=wo(Il),hs=j(bC),c6=hs.rest,d6=hs.hover,p6=hs.active,h6=hs.focus,xC=wo(Al),us=j(xC),u6=us.rest,m6=us.hover,f6=us.active,y6=us.focus,vC=wo($l),ms=j(vC),hr=ms.rest,g6=ms.hover,b6=ms.active,x6=ms.focus,SC=wo(Ol),ur=j(SC),v6=ur.rest,S6=ur.hover,w6=ur.active,k6=ur.focus,wC=wo(El),Hl=j(wC),C6=Hl.rest,T6=Hl.hover,D6=Hl.active,R6=Hl.focus,kC=wo(Ml),zl=j(kC),F6=zl.rest,I6=zl.hover,A6=zl.active,$6=zl.focus,CC=wo(Pl),fs=j(CC),O6=fs.rest,E6=fs.hover,M6=fs.active,P6=fs.focus,Bl=wo(Ll),mr=j(Bl),L6=mr.rest,_6=mr.hover,H6=mr.active,z6=mr.focus,TC=wo(_l),Vl=j(TC),B6=Vl.rest,V6=Vl.hover,N6=Vl.active,G6=Vl.focus,DC=ko(Fl),ys=j(DC),j6=ys.rest,U6=ys.hover,q6=ys.active,W6=ys.focus,RC=ko(Il),gs=j(RC),K6=gs.rest,X6=gs.hover,Y6=gs.active,Q6=gs.focus,FC=ko(Al),bs=j(FC),J6=bs.rest,Z6=bs.hover,t8=bs.active,e8=bs.focus,IC=ko($l),xs=j(IC),o8=xs.rest,i8=xs.hover,r8=xs.active,s8=xs.focus,AC=ko(Ol),fr=j(AC),n8=fr.rest,a8=fr.hover,l8=fr.active,c8=fr.focus,$C=ko(El),Nl=j($C),d8=Nl.rest,p8=Nl.hover,h8=Nl.active,u8=Nl.focus,OC=ko(Ml),Gl=j(OC),m8=Gl.rest,f8=Gl.hover,y8=Gl.active,g8=Gl.focus,EC=ko(Pl),vs=j(EC),b8=vs.rest,x8=vs.hover,v8=vs.active,S8=vs.focus,jl=ko(Ll),yr=j(jl),Ss=yr.rest,w8=yr.hover,k8=yr.active,C8=yr.focus,MC=ko(_l),Ul=j(MC),T8=Ul.rest,D8=Ul.hover,R8=Ul.active,F8=Ul.focus,PC=Co(Fl),ws=j(PC),I8=ws.rest,A8=ws.hover,$8=ws.active,O8=ws.focus,LC=Co(Il),ks=j(LC),E8=ks.rest,M8=ks.hover,P8=ks.active,L8=ks.focus,_C=Co(Al),Cs=j(_C),_8=Cs.rest,H8=Cs.hover,z8=Cs.active,B8=Cs.focus,HC=Co($l),Ts=j(HC),V8=Ts.rest,N8=Ts.hover,G8=Ts.active,j8=Ts.focus,zC=Co(Ol),gr=j(zC),U8=gr.rest,q8=gr.hover,W8=gr.active,K8=gr.focus,BC=Co(El),ql=j(BC),X8=ql.rest,Y8=ql.hover,Q8=ql.active,J8=ql.focus,VC=Co(Ml),Wl=j(VC),Z8=Wl.rest,t9=Wl.hover,e9=Wl.active,o9=Wl.focus,NC=Co(Pl),Ds=j(NC),i9=Ds.rest,r9=Ds.hover,s9=Ds.active,n9=Ds.focus,Kl=Co(Ll),br=j(Kl),a9=br.rest,l9=br.hover,c9=br.active,d9=br.focus,GC=Co(_l),Xl=j(GC),p9=Xl.rest,h9=Xl.hover,u9=Xl.active,m9=Xl.focus,Yl=To(Fl),Rs=j(Yl),f9=Rs.rest,y9=Rs.hover,of=Rs.active,g9=Rs.focus,Jp=To(Il),xr=j(Jp),pe=xr.rest,rf=xr.hover,b9=xr.active,x9=xr.focus,jC=To(Al),Fs=j(jC),v9=Fs.rest,S9=Fs.hover,w9=Fs.active,k9=Fs.focus,UC=To($l),Is=j(UC),C9=Is.rest,T9=Is.hover,D9=Is.active,R9=Is.focus,qC=To(Ol),vr=j(qC),F9=vr.rest,I9=vr.hover,A9=vr.active,$9=vr.focus,WC=To(El),Ql=j(WC),O9=Ql.rest,E9=Ql.hover,M9=Ql.active,P9=Ql.focus,KC=To(Ml),Sr=j(KC),ke=Sr.rest,L9=Sr.hover,_9=Sr.active,H9=Sr.focus,XC=To(Pl),wr=j(XC),sf=wr.rest,z9=wr.hover,B9=wr.active,V9=wr.focus,YC=To(Ll),As=j(YC),Jl=As.rest,N9=As.hover,G9=As.active,j9=As.focus,Pn=To(_l),he=j(Pn),Zp=he.rest,U9=he.hover,q9=he.active,W9=he.focus,QC=B("focus-stroke-palette",O.palette).withDefault(Yp),JC=B("focus-stroke-min-contrast",O.number).withDefault(Dl),ZC="focus-stroke",tT=es(ZC,[...bo,v.outlineColor],(e,t)=>Bu(e(QC),t?.reference||e(lt),e(JC))),nf=kl(tT),eT="focus-stroke-outer",oT=es(eT,bo,e=>Js(e(lt),e(En),!0)),ni=kl(oT),iT="focus-stroke-inner",rT=es(iT,bo,e=>Js(e(ni),e(En),!1)),K9=kl(rT);var Y=new ts("density_control",3,2,2,1),Zl=new ts("density_item-container",1,0,1,0),tc=new ts("density_layer",4,4,4,4);var Ln=class{constructor(t,o,i,r,s){this.color=t,this.xOffset=o,this.yOffset=i,this.blurRadius=r,this.spread=s}createCSS(){let t=[`${this.xOffset}px`,`${this.yOffset}px`];return this.blurRadius&&t.push(`${this.blurRadius}px`),this.spread&&t.push(`${this.spread}px`),t.push(this.color.toColorString()),t.join(" ")}};Ln=a([Oo(),gi("design:paramtypes",[ye,Number,Number,Number,Number])],Ln);var ai=e=>Um(e,O.shadow,v.shadow);var $i=yl("elevation-recipe",v.shadow,(e,t)=>{let o=.12,i=.14;t>16&&(o=.2,i=.24);let r=new Ln(xi.toTransparent(o),0,0,2),s=new Ln(xi.toTransparent(i),0,t*.5,t);return new fl(r,s)}),sT=B("elevation-card-rest-size",O.number).withDefault(4),nT=B("elevation-card-hover-size",O.number).withDefault(8),aT=B("elevation-card-active-size",O.number).withDefault(2),lT=B("elevation-card-focus-size",O.number).withDefault(4),cT=B("elevation-card-disabled-size",O.number).withDefault(0),th=ai("elevation-card-rest").withDefault(e=>e($i).evaluate(e,e(sT))),dT=ai("elevation-card-hover").withDefault(e=>e($i).evaluate(e,e(nT))),pT=ai("elevation-card-active").withDefault(e=>e($i).evaluate(e,e(aT))),hT=ai("elevation-card-focus").withDefault(e=>e($i).evaluate(e,e(lT))),uT=ai("elevation-card-disabled").withDefault(e=>e($i).evaluate(e,e(cT))),af={name:"elevation-card",type:O.shadow,intendedFor:v.shadow,rest:th,hover:dT,active:pT,focus:hT,disabled:uT},mT=B("elevation-tooltip-size",O.number).withDefault(16),lf=ai("elevation-tooltip").withDefault(e=>e($i).evaluate(e,e(mT))),fT=B("elevation-flyout-size",O.number).withDefault(32),cf=ai("elevation-flyout").withDefault(e=>e($i).evaluate(e,e(fT))),yT=B("elevation-dialog-size",O.number).withDefault(128),df=ai("elevation-dialog").withDefault(e=>e($i).evaluate(e,e(yT)));var gT=Object.freeze({LightMode:.95,DarkMode:.15}),pf=B("layer-palette",O.palette).withDefault(On),Oi="layer-fill",bT=B(`${Oi}-base-luminance`,O.number).withDefault(gT.LightMode),hf=E(Oi,"rest",-2);var xT=E(Oi,"hover",-3),vT=E(Oi,"active",-1),ST=E(Oi,"focus",-3),wT=E(Oi,"disabled",-1),Do=`${Oi}-fixed`,li=yl(Do,v.backgroundFill,(e,t)=>Vu(e(pf),Nu(e(bT)),e(hf)*t,No.darker)),S7=qt(`${Do}-base`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,0)),w7=qt(`${Do}-minus-1`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,-1)),k7=qt(`${Do}-minus-2`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,-2)),C7=qt(`${Do}-minus-3`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,-3)),T7=qt(`${Do}-minus-4`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,-4)),ec=qt(`${Do}-plus-1`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,1)),D7=qt(`${Do}-plus-2`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,2)),R7=qt(`${Do}-plus-3`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,3)),F7=qt(`${Do}-plus-4`,v.backgroundFill).withDefault(e=>e(li).evaluate(e,4)),kT=`${Oi}-interactive`,CT=es(kT,v.backgroundFill,(e,t)=>tn(e(pf),t?.reference||e(lt),e(hf),e(xT),e(vT),e(ST),e(wT),void 0,No.darker)),_n=j(CT),uf=_n.rest,I7=_n.hover,A7=_n.active,$7=_n.focus,O7=_n.disabled;var TT={Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},Ee=gl("font-family").withDefault("Arial, Helvetica, sans-serif"),P7=gl("body-font-family").withDefault(Ee),mf=gl("label-font-family").withDefault(Ee),Me=xl("font-weight").withDefault(TT.Normal),L7=xl("body-font-weight").withDefault(Me),ff=xl("label-font-weight").withDefault(Me),yf=bl("font-style").withDefault("normal"),_7=bl("body-font-style").withDefault(yf),gf=bl("label-font-style").withDefault(yf);function ci(e){return t=>""}var eh=xo("type-ramp-base-font-size").withDefault("14px"),bf=So("type-ramp-base-line-height").withDefault("16px"),xf=vo("type-ramp-base-font-variations").withDefault(ci(eh)),oh=xo("type-ramp-minus-1-font-size").withDefault("12px"),vf=So("type-ramp-minus-1-line-height").withDefault("14px"),Sf=vo("type-ramp-minus-1-font-variations").withDefault(ci(oh)),ih=xo("type-ramp-minus-2-font-size").withDefault("10px"),wf=So("type-ramp-minus-2-line-height").withDefault("12px"),kf=vo("type-ramp-minus-2-font-variations").withDefault(ci(ih)),rh=xo("type-ramp-plus-1-font-size").withDefault("16px"),Cf=So("type-ramp-plus-1-line-height").withDefault("22px"),Tf=vo("type-ramp-plus-1-font-variations").withDefault(ci(rh)),sh=xo("type-ramp-plus-2-font-size").withDefault("20px"),Df=So("type-ramp-plus-2-line-height").withDefault("26px"),Rf=vo("type-ramp-plus-2-font-variations").withDefault(ci(sh)),nh=xo("type-ramp-plus-3-font-size").withDefault("24px"),Ff=So("type-ramp-plus-3-line-height").withDefault("32px"),If=vo("type-ramp-plus-3-font-variations").withDefault(ci(nh)),ah=xo("type-ramp-plus-4-font-size").withDefault("28px"),Af=So("type-ramp-plus-4-line-height").withDefault("36px"),$f=vo("type-ramp-plus-4-font-variations").withDefault(ci(ah)),lh=xo("type-ramp-plus-5-font-size").withDefault("32px"),Of=So("type-ramp-plus-5-line-height").withDefault("40px"),Ef=vo("type-ramp-plus-5-font-variations").withDefault(ci(lh)),ch=xo("type-ramp-plus-6-font-size").withDefault("40px"),Mf=So("type-ramp-plus-6-line-height").withDefault("52px"),Pf=vo("type-ramp-plus-6-font-variations").withDefault(ci(ch));var tt=b.fromProperties({...dr.all(Ze)},"shape.control"),Hn=b.fromProperties({...dr.all(qm)},"shape.layer"),Ce=b.fromProperties({...dr.all("999px")},"shape.round"),te=b.fromProperties({...An.verticalHorizontal(Y.verticalPadding,Y.horizontalPadding),gap:Y.horizontalGap},"density.control"),Lf=b.fromProperties({...An.verticalHorizontal(Y.verticalPadding,Y.verticalPadding),gap:Y.horizontalGap},"density.control-square"),DT=b.fromProperties({paddingTop:"0",paddingRight:Y.horizontalPadding,paddingBottom:"0",paddingLeft:Y.horizontalPadding,gap:Y.horizontalGap},"density.autofill-outer"),oc=b.fromProperties({paddingTop:Y.verticalPadding,paddingRight:"0",paddingBottom:Y.verticalPadding,paddingLeft:"0"},"density.autofill-inner"),Pe=b.fromProperties({...An.verticalHorizontal(Zl.verticalPadding,Zl.horizontalPadding),gap:Zl.horizontalGap},"density.item-container"),q7=b.fromProperties({...An.verticalHorizontal(tc.verticalPadding,tc.horizontalPadding),gap:tc.horizontalGap},"density.layer"),Ei="transparent",Ct=e=>({...Qm.all(vt),...Jm.all("solid"),...Cl.all(e)}),W7=b.fromProperties({...St.backgroundAndForeground(ps,Bl),...Ct(ur)},"color.accent-fill-stealth-control"),K7=b.fromProperties({...St.backgroundAndForeground(hs,Bl),...Ct(ur)},"color.accent-fill-subtle-control"),X7=b.fromProperties({...St.backgroundAndForegroundBySet(us,Mn),...Ct(Ei)},"color.accent-fill-discernible-control"),ic=b.fromProperties({...St.backgroundAndForegroundBySet(ms,Rl),...Ct(Ei)},"color.accent-fill-readable-control"),Y7=b.fromProperties({...Ct(fs),foregroundFill:mr,backgroundFill:lt},"color.accent-outline-discernible-control"),$s=b.fromProperties({foregroundFill:mr},"color.accent-foreground-readable-control"),Q7=b.fromProperties({...St.backgroundAndForeground(ys,jl),...Ct(fr)},"color.highlight-fill-stealth-control"),J7=b.fromProperties({...St.backgroundAndForeground(gs,jl),...Ct(fr)},"color.highlight-fill-subtle-control"),Z7=b.fromProperties({...St.backgroundAndForegroundBySet(bs,Mn),...Ct(Ei)},"color.highlight-fill-discernible-control"),Os=b.fromProperties({...St.backgroundAndForegroundBySet(xs,Rl),...Ct(Ei)},"color.highlight-fill-readable-control"),tG=b.fromProperties({...Ct(vs),foregroundFill:yr,backgroundFill:lt},"color.highlight-outline-discernible-control"),eG=b.fromProperties({foregroundFill:yr},"color.highlight-foreground-readable-control"),oG=b.fromProperties({...St.backgroundAndForeground(ws,Kl),...Ct(gr)},"color.critical-fill-stealth-control"),iG=b.fromProperties({...St.backgroundAndForeground(ks,Kl),...Ct(gr)},"color.critical-fill-subtle-control"),rG=b.fromProperties({...St.backgroundAndForegroundBySet(Cs,Mn),...Ct(Ei)},"color.critical-fill-discernible-control"),sG=b.fromProperties({...St.backgroundAndForegroundBySet(Ts,Rl),...Ct(Ei)},"color.critical-fill-readable-control"),nG=b.fromProperties({...Ct(Ds),foregroundFill:br,backgroundFill:lt},"color.critical-outline-discernible-control"),aG=b.fromProperties({foregroundFill:br},"color.critical-foreground-readable-control"),dh=b.fromProperties({...St.backgroundAndForeground(Rs,Pn),...Ct(vr)},"color.neutral-fill-stealth-control"),RT=b.fromProperties({...St.backgroundAndForeground(xr,Pn),...Ct(vr)},"color.neutral-fill-subtle-control"),lG=b.fromProperties({...St.backgroundAndForegroundBySet(Fs,Mn),...Ct(Ei)},"color.neutral-fill-discernible-control"),_f=b.fromProperties({...St.backgroundAndForeground(Is,Pn),...Ct(Ei)},"color.neutral-fill-readable-control"),Mi=b.fromProperties({...Ct(wr),...St.foregroundNonInteractiveWithDisabled(he.rest,he.disabled),backgroundFill:lt},"color.neutral-outline-discernible-control"),cG=b.fromProperties({...St.foregroundNonInteractiveWithDisabled(As.rest,he.disabled)},"color.neutral-foreground-readable-control"),di=b.fromProperties({...St.foregroundNonInteractiveWithDisabled(he.rest,he.disabled)},"color.neutral-foreground-strong-element"),dG=b.fromProperties({...St.foregroundNonInteractiveWithDisabled(Sr.rest,he.disabled)},"color.neutral-divider-subtle-element"),pG=b.fromProperties({...St.foregroundNonInteractiveWithDisabled(wr.rest,he.disabled)},"color.neutral-divider-discernible-element"),ft=b.fromProperties({fontFamily:Ee,fontSize:eh,lineHeight:bf,fontWeight:Me,fontVariationSettings:xf},"text.type-ramp-base"),rc=b.fromProperties({fontFamily:Ee,fontSize:oh,lineHeight:vf,fontWeight:Me,fontVariationSettings:Sf},"text.type-ramp-minus-1"),hG=b.fromProperties({fontFamily:Ee,fontSize:ih,lineHeight:wf,fontWeight:Me,fontVariationSettings:kf},"text.type-ramp-minus-2"),uG=b.fromProperties({fontFamily:Ee,fontSize:rh,lineHeight:Cf,fontWeight:Me,fontVariationSettings:Tf},"text.type-ramp-plus-1"),mG=b.fromProperties({fontFamily:Ee,fontSize:sh,lineHeight:Df,fontWeight:Me,fontVariationSettings:Rf},"text.type-ramp-plus-2"),fG=b.fromProperties({fontFamily:Ee,fontSize:nh,lineHeight:Ff,fontWeight:Me,fontVariationSettings:If},"text.type-ramp-plus-3"),yG=b.fromProperties({fontFamily:Ee,fontSize:ah,lineHeight:Af,fontWeight:Me,fontVariationSettings:$f},"text.type-ramp-plus-4"),gG=b.fromProperties({fontFamily:Ee,fontSize:lh,lineHeight:Of,fontWeight:Me,fontVariationSettings:Ef},"text.type-ramp-plus-5"),bG=b.fromProperties({fontFamily:Ee,fontSize:ch,lineHeight:Mf,fontWeight:Me,fontVariationSettings:Pf},"text.type-ramp-plus-6"),Hf=b.fromProperties({shadow:th},"shadow.card"),xG=b.fromProperties({shadow:af},"shadow.card-interactive"),zf=b.fromProperties({shadow:lf},"shadow.tooltip"),FT=b.fromProperties({shadow:cf},"shadow.flyout"),Bf=b.fromProperties({shadow:df},"shadow.dialog"),sc=b.compose([tt,te,ft,RT],{...Ct(Sr)},"styles.action-control"),Vf=[tt,ft,b.compose([Mi],{backgroundFill:{name:"color.input-common-background",rest:lt,hover:lt,active:lt,focus:lt,disabled:xr.disabled}})],Pi=b.compose([...Vf,te],void 0,"styles.input-control"),nc=b.compose([...Vf,DT],void 0,"styles.input-autofill-control"),Li=b.compose([tt,ft,Os],void 0,"styles.selectable-control-selected"),Es=b.compose([tt,ft,Mi],void 0,"styles.selectable-control-unselected"),Le=b.compose([tt,te,ft,dh],void 0,"styles.item-control"),ct=b.compose([ft,di],void 0,"styles.text-plain"),_i=b.compose([ft,di],{fontFamily:mf,fontStyle:gf,fontWeight:ff},"styles.text-label"),Ro=b.compose([Hn,FT],{backgroundFill:ec},"styles.flyout"),Nf=b.fromProperties({cursor:"not-allowed"},"styles.disabled"),Gf=b.fromProperties({outlineColor:nf,outlineOffset:"1px",outlineStyle:"solid",outlineWidth:Wt},"styles.focus-indicator");var jf=e=>{let t={};return e.effectiveProperties.forEach((o,i)=>{let r;typeof o=="string"||o instanceof Xe||o&&typeof o.createCSS=="function"?r=o:r=o.focus,r&&(t[i]={rest:void 0,hover:void 0,active:void 0,focus:r,disabled:void 0})}),b.fromProperties(t)},IT=jf(Gf),AT=jf(b.fromProperties({outlineStyle:"none"})),Uf=e=>{let t=new Array;return e?.interactivity?.disabledSelector!==void 0&&t.push([{hostCondition:e.interactivity.disabledSelector,part:"*"},Nf]),e?.focus&&(e.focus?.resetTarget&&t.push([e.focus?.resetTarget,AT]),t.push([e.focus.focusTarget,IT])),t};var S=class{constructor(t,o=customElements,i=new Map){this._prefix=t,this._registry=o,this._statics=i}get prefix(){return this._prefix}get registry(){return this._registry}get statics(){return this._statics}configure(t){return this._prefix=t.prefix??this._prefix,this._registry=t.registry??this._registry,this._statics=t.statics??this._statics,this}withPrefix(t){return this._prefix=t,this}defineComponents(t){for(let o in t){let i=t[o];if(typeof i=="function")i(this).define();else if(i instanceof Mt){let r=i.name.split("-");if(r.shift()!==this._prefix){let n={...i,name:`${this._prefix}-${r.join("-")}`};i=Mt.compose(i.type,n)}i.define(this._registry)}}}static assembleStyles(t,o,i){let r=i?.styles?Array.isArray(i.styles)?i.styles:new Array(i.styles):t,s=[...Uf(o),...i&&i.styleModules?i.styleModules:[]];for(let[n,l]of s){let c=new Sl(l).render(n,o?.interactivity);r.push(c)}return new ut(r)}},w=new S("adaptive");var T=`
    :host([hidden]) {
        display: none !important;
    }

    :host {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }
`,Dt=`
    .stroked {
        stroke: currentcolor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 1px;
    }
`;var qf=y`
    :host {
        display: flex;
        flex-direction: column;
    }
`,Wf=y``;var $T={},OT={},Kf={interactivity:C.never,conditions:$T,parts:OT},Xf=e=>wd();var ET=[T,qf,Wf];function Yf(e,t){let o=S.assembleStyles(ET,Kf,t);return Xi.compose({name:`${e.prefix}-accordion`,template:t?.template?.(e)??Xf(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Qf=[[{},b.compose([ct],{borderFillTop:ke,borderStyleTop:"solid",borderThicknessTop:vt})]];var Jf=y`
    :host {
        display: flex;
        flex-direction: column;
    }

    .heading {
        display: flex;
        position: relative;
        align-items: center;
        z-index: 2;
    }

    .button {
        border: none;
        background: none;
        text-align: left;
        flex-grow: 1;
        padding: unset;
        outline: none;
        cursor: pointer;
        font: inherit;
    }

    .button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        cursor: pointer;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    slot[name="collapsed-icon"] * {
        display: flex;
    }

    :host([expanded]) slot[name="collapsed-icon"] * {
        display: none;
    }

    slot[name="expanded-icon"] * {
        display: none;
    }

    :host([expanded]) slot[name="expanded-icon"] * {
        display: flex;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    ::slotted([slot="start"]) {
        order: -1;
    }

    .region {
        display: none;
    }

    :host([expanded]) .region {
        display: flex;
    }

    :host([disabled]) .button::before {
        cursor: not-allowed;
    }
`,Zf=y`
    :host(:not([disabled])) .button:focus-visible::before {
        outline: ${Wt} solid ${ni};
    }
`;var _e={collapsed:"accordion-item-collapsed-icon",expanded:"accordion-item-expanded-icon"},MT={expanded:"[expanded]"},PT={heading:"heading",button:"button",headingContent:"heading-content",icon:"icon",region:"region"},kr={interactivity:C.disabledAttribute,conditions:MT,parts:PT},ty=e=>yd({collapsedIcon:e.statics.get(_e.collapsed),expandedIcon:e.statics.get(_e.expanded)});var LT=[T,Jf,Dt,Zf];function ey(e,t){t?.statics&&(e.statics.has(_e.collapsed)||e.statics.set(_e.collapsed,t.statics[_e.collapsed]),e.statics.has(_e.expanded)||e.statics.set(_e.expanded,t.statics[_e.expanded]));let o=S.assembleStyles(LT,kr,t);return oe.compose({name:`${e.prefix}-accordion-item`,template:t?.template?.(e)??ty(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var oy=[[{},b.compose([ct],{borderFillBottom:ke,borderStyleBottom:"solid",borderThicknessBottom:vt})],[{part:kr.parts.heading},b.compose([tt,te])],[{part:kr.parts.button},di],[{part:kr.parts.icon},$s],[{part:kr.parts.region},te]];var ac=class extends Gt{defaultSlottedContentChanged(){let t=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}focus(t){this.control.focus(t)}};var iy=y`
    :host {
        display: inline-flex;
    }

    .control {
        display: flex;
        align-items: center;
        white-space: nowrap;
        /* explicit width */
        flex-grow: 1;
        justify-content: center;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }
`,ry=y`
`;var _T={iconOnly:".icon-only",noHref:":not([href])"},HT={control:"control",content:"content"},Ms={interactivity:C.hrefAttribute,conditions:_T,parts:HT,focus:U.partFocused("control")},sy=e=>rn();var zT=[T,iy,ry];function ny(e,t){let o=S.assembleStyles(zT,Ms,t);return ac.compose({name:`${e.prefix}-anchor`,template:t?.template?.(e)??sy(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var ay=[[{part:Ms.parts.control},b.compose([tt,ft,$s],{gap:Y.horizontalGap})],[{hostCondition:Ms.conditions.noHref,part:Ms.parts.control},di]];var ly=y`
    :host {
        display: block;
        contain: layout;
    }
`,cy=y``;var BT={loaded:"[data-loaded='loaded']"},VT={},dy={interactivity:C.never,conditions:BT,parts:VT},py=e=>Dd();var NT=[T,ly,cy];function zn(e,t){let o=S.assembleStyles(NT,dy,t);return pt.compose({name:`${e.prefix}-anchored-region`,template:t?.template?.(e)??py(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var hy=[];var uy=y.partial`8`,lc=y.partial`0`,st=y.partial`32`;var my=y`
    :host {
        position: relative;
        display: flex;
    }

    .backplate {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    ::slotted([slot="media"]) {
        position: absolute;
        display: block;
        max-width: 100%;
    }

    ::slotted(:not([slot])) {
        display: block;
    }

    ::slotted([slot="badge"]) {
        position: absolute;
        display: block;
    }
`,fy=y`
    :host {
        height: calc(${st} * 1px);
        max-width: calc(${st} * 1px);
    }

    .backplate {
        border-radius: 100%;
        min-width: 100%;
    }

    ::slotted([slot="badge"]) {
        bottom: 0;
        right: 0;
    }
`;var GT={},jT={backplate:"backplate"},cc={interactivity:C.never,conditions:GT,parts:jT},yy=e=>Rd();var UT=[T,my,fy];function gy(e,t){let o=S.assembleStyles(UT,cc,t);return sn.compose({name:`${e.prefix}-avatar`,template:t?.template?.(e)??yy(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var by=[[{},ft],[{part:cc.parts.backplate},ic]];var xy=y`
    :host {
        display: inline-block;
    }
`,vy=y`
    .control {
        padding:
            calc(((${W} * 0.5) - ${vt}) * 1)
            calc((${W} - ${vt}) * 1);
    }
`;var qT={},WT={control:"control"},dc={interactivity:C.never,conditions:qT,parts:WT},Sy=e=>Fd();var KT=[T,xy,vy];function wy(e,t){let o=S.assembleStyles(KT,dc,t);return nn.compose({name:`${e.prefix}-badge`,template:t?.template?.(e)??Sy(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var ky=[[{},rc],[{part:dc.parts.control},b.compose([tt,_f])]];var Cy=y`
    :host {
        display: inline-block;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }
`,Ty=y`
`;var XT={},YT={list:"list"},Dy={interactivity:C.never,conditions:XT,parts:YT},Ry=e=>Ad();var QT=[T,Cy,Ty];function Fy(e,t){let o=S.assembleStyles(QT,Dy,t);return Vr.compose({name:`${e.prefix}-breadcrumb`,template:t?.template?.(e)??Ry(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Iy=[];var pc=class extends Wo{focus(t){this.control.focus(t)}};var Ay=y`
    :host {
        display: inline-flex;
    }

    .listitem {
        display: flex;
        align-items: center;
    }

    .control {
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    :host([href]) .control {
        cursor: pointer;
    }

    .control[aria-current] {
        text-decoration: none;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    .separator {
        display: flex;
    }
`,$y=y`
`;var Cr={separator:"breadcrumb-item-separator"},JT={noHref:":not([href])",current:"[aria-current]"},ZT={control:"control",content:"content",listitem:"listitem",separator:"separator"},oo={interactivity:C.hrefAttribute,conditions:JT,parts:ZT,focus:U.partFocused("control")},Oy=e=>Id({separator:e.statics.get(Cr.separator)});var tD=[T,Ay,Dt,$y];function Ey(e,t){t?.statics&&(e.statics.has(Cr.separator)||e.statics.set(Cr.separator,t.statics[Cr.separator]));let o=S.assembleStyles(tD,oo,t);return pc.compose({name:`${e.prefix}-breadcrumb-item`,template:t?.template?.(e)??Oy(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var My=[[{},ct],[{part:oo.parts.control},b.compose([tt,te])],[{hostCondition:oo.conditions.noHref,part:oo.parts.control},di],[{hostCondition:oo.interactivity?.interactivitySelector,part:oo.parts.control,partCondition:oo.conditions.current},di],[{hostCondition:oo.interactivity?.interactivitySelector,part:oo.parts.control},$s]];var hc=class extends ie{defaultSlottedContentChanged(){let t=this.defaultSlottedContent.filter(o=>o.nodeType===Node.ELEMENT_NODE);t.length===1&&t[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}focus(t){this.control.focus(t)}};var Py=y`
    :host {
        display: inline-flex;
    }

    .control {
        display: flex;
        align-items: center;
        white-space: nowrap;
        /* explicit width */
        flex-grow: 1;
        justify-content: center;
        /* reset */
        border: none;
        margin: 0;
        padding: 0;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }

    :host(:not([disabled])) .control {
        cursor: pointer;
    }
`,Ly=y`
`;var eD={iconOnly:".icon-only"},oD={control:"control",content:"content"},uc={interactivity:C.disabledAttribute,conditions:eD,parts:oD,focus:U.partFocused("control")},_y=e=>Od();var iD=[T,Py,Ly];function Hy(e,t){let o=S.assembleStyles(iD,uc,t);return hc.compose({name:`${e.prefix}-button`,template:t?.template?.(e)??_y(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var zy=[[{part:uc.parts.control},sc]];var By=y`
    :host {
        display: inline-block;
    }

    .days {
        text-align: center;
    }

    .week-days,
    .week {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
    }

    .interact .day {
        cursor: pointer;
    }
`,Vy=y`
    :host {
        --calendar-cell-size: calc((${uy} + 2 + ${lc}) * ${W});
        --calendar-gap: 2px;
    }

    .title {
        padding: ${W};
        font-weight: 600;
    }

    .week-days,
    .week {
        grid-gap: var(--calendar-gap);
        border: 0;
        padding: 0;
    }

    .day,
    .week-day {
        border: 0;
        width: var(--calendar-cell-size);
        height: var(--calendar-cell-size);
        line-height: var(--calendar-cell-size);
        padding: 0;
        box-sizing: initial;
    }

    .week-day {
        font-weight: 600;
    }

    .date {
        height: 100%;
    }

    .inactive .date,
    .inactive.disabled::before {
        color: ${Jl};
    }

    .disabled::before {
        content: "";
        display: inline-block;
        width: calc(var(--calendar-cell-size) * 0.8);
        height: ${vt};
        background: currentcolor;
        position: absolute;
        margin-top: calc(var(--calendar-cell-size) / 2);
        transform-origin: center;
        z-index: 1;
    }

    .selected {
        color: ${hr};
        border: 1px solid ${hr};
        background: ${lt};
    }

    .selected + .selected {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
        border-inline-start-width: 0;
        padding-inline-start: calc(var(--calendar-gap) + ${vt} + ${Ze});
        margin-inline-start: calc((${Ze} * -1) - var(--calendar-gap));
    }

    .today.disabled::before {
        color: ${Zp};
    }

    .today .date {
        color: ${Zp};
        background: ${pe};
        border-radius: 50%;
        position: relative;
    }
`;var Ny=y`
    :host {
        overflow: hidden;
        white-space: nowrap;
    }
`,Gy=y`
`;var rD={cellTypeDefault:`[cell-type='${ce.default}']`,cellTypeColumnHeader:`[cell-type='${ce.columnHeader}']`,cellTypeRowHeader:`[cell-type='${ce.rowHeader}']`},sD={},Bn={interactivity:C.never,conditions:rD,parts:sD,focus:U.hostFocused()},jy=e=>Xd();var nD=[T,Ny,Gy];function Tr(e,t){let o=S.assembleStyles(nD,Bn,t);return Jo.compose({name:`${e.prefix}-data-grid-cell`,template:t?.template?.(e)??jy(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Uy=[[{},b.compose([tt,te,ct])],[{hostCondition:Bn.conditions.cellTypeColumnHeader},b.fromProperties({fontWeight:"600"})],[{hostCondition:Bn.conditions.cellTypeRowHeader},b.fromProperties({fontWeight:"600"})]];var qy=y`
    :host {
        display: grid;
        width: 100%;
    }

    :host([row-type="sticky-header"]) {
        position: sticky;
        top: 0;
    }
`,Wy=y`
    :host([row-type="sticky-header"]) {
        background-color: ${pe};
    }

    :host([aria-selected="true"])::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: ${Ze};
        background-color: ${Ss};
        align-self: center;
        left: ${Wt};
        width: 3px;
        height: calc((${st} / 2) * 1px);
    }
`;var aD={rowTypeDefault:`[row-type='${xe.default}']`,rowTypeHeader:`[row-type='${xe.header}']`,rowTypeStickyHeader:`[row-type='${xe.stickyHeader}']`,selected:"[aria-selected='true']"},lD={},Ky={interactivity:C.never,conditions:aD,parts:lD},Xy=e=>Kd({dataGridCell:Tr(e)});var cD=[T,qy,Wy];function Dr(e,t){let o=S.assembleStyles(cD,Ky,t);return Ht.compose({name:`${e.prefix}-data-grid-row`,template:t?.template?.(e)??Xy(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Yy=[[{},b.fromProperties({borderFillBottom:ke,borderStyleBottom:"solid",borderThicknessBottom:vt})]];var Qy=y`
    :host {
        display: flex;
        position: relative;
        flex-direction: column;
    }

    :host([selection-mode="multi-row"]) {
        user-select: none;
    }
`,Jy=y``;var dD={},pD={},Zy={interactivity:C.never,conditions:dD,parts:pD},tg=e=>qd({dataGridRow:Dr(e)});var hD=[T,Qy,Jy];function Vn(e,t){let o=S.assembleStyles(hD,Zy,t);return mt.compose({name:`${e.prefix}-data-grid`,template:t?.template?.(e)??tg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var eg=[];var uD={},mD={title:"title",month:"month",year:"year",days:"days",week:"week",weekDay:"week-day",weekDays:"week-days",day:"day",date:"date",today:"today"},mc={interactivity:C.never,conditions:uD,parts:mD},og=e=>Md({dataGridCell:Tr(e),dataGridRow:Dr(e),dataGrid:Vn(e),title:Ed()});var fD=[T,By,Vy];function ig(e,t){let o=S.assembleStyles(fD,mc,t);return _t.compose({name:`${e.prefix}-calendar`,template:t?.template?.(e)??og(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var rg=[[{},ct],[{part:mc.parts.day},tt]];var sg=y`
    :host {
        display: block;
    }
`,ng=y`
`;var yD={},gD={},ag={interactivity:C.never,conditions:yD,parts:gD},lg=e=>Pd();var bD=[T,sg,ng];function cg(e,t){let o=S.assembleStyles(bD,ag,t);return ln.compose({name:`${e.prefix}-card`,template:t?.template?.(e)??lg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var dg=[[{},b.compose([Hn,ct,Hf],{backgroundFill:uf})]];var pg=y`
    :host {
        display: inline-flex;
        align-items: center;
    }

    .control {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    slot[name="checked-indicator"] *,
    slot[name="indeterminate-indicator"] * {
        /*opacity: 0;*/
        display: none;
        pointer-events: none;
    }

    :host([aria-checked="true"]) slot[name="checked-indicator"] *,
    :host([aria-checked="mixed"]) slot[name="indeterminate-indicator"] * {
        /*opacity: 1;*/
        display: flex;
    }

    .label {
        cursor: pointer;
    }

    .label.label__hidden {
        display: none;
        visibility: hidden;
    }
`,hg=y`
    .control {
        width: calc((${st} / 2) * 1px + ${W});
        height: calc((${st} / 2) * 1px + ${W});
    }
`;var He={checked:"checkbox-checked-indicator",indeterminate:"checkbox-indeterminate-indicator"},xD={checked:"[aria-checked='true']",indeterminate:"[aria-checked='mixed']"},vD={control:"control",label:"label"},Rr={interactivity:C.disabledAttribute,conditions:xD,parts:vD,focus:U.hostFocused()},ug=e=>Ld({checkedIndicator:e.statics.get(He.checked),indeterminateIndicator:e.statics.get(He.indeterminate)});var SD=[T,pg,Dt,hg];function mg(e,t){t?.statics&&(e.statics.has(He.checked)||e.statics.set(He.checked,t.statics[He.checked]),e.statics.has(He.indeterminate)||e.statics.set(He.indeterminate,t.statics[He.indeterminate]));let o=S.assembleStyles(SD,Rr,t);return Qi.compose({name:`${e.prefix}-checkbox`,template:t?.template?.(e)??ug(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var fg=[[{},b.fromProperties({gap:Y.horizontalGap})],[{part:Rr.parts.label},ct],[{part:Rr.parts.control},Es],[{hostCondition:Rr.conditions.checked,part:Rr.parts.control},Li]];var fc=class extends Qo{connectedCallback(){super.connectedCallback(),this.onfocus=this.focusinHandler}focusinHandler(t){!this.shouldSkipFocus&&t.target===t.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focus(t){this.control.focus(t)}};var yg=y`
    :host {
        display: inline-flex;
        position: relative;
        vertical-align: top;
    }

    .control {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    .indicator {
        display: flex;
    }

    .selected-value {
        width: 100%;
        /* reset */
        background: transparent;
        border: none;
        color: inherit;
        font: inherit;
        padding: unset;
    }

    .listbox {
        z-index: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        /* For Floating UI to calc default position */
        position: fixed;
        top: 0;
        left: 0;
    }

    :host(:empty) .listbox,
    .listbox[hidden] {
        display: none;
    }

    ::slotted([role="option"]) {
        flex: 0 0 auto;
    }
`,gg=y`
`;var Fr={indicator:"combobox-indicator"},wD={},kD={control:"control",selectedValue:"selected-value",indicator:"indicator",listbox:"listbox"},Nn={interactivity:C.disabledAttribute,conditions:wD,parts:kD,focus:U.partWithin("control","selected-value")},bg=e=>Ud({indicator:e.statics.get(Fr.indicator)});var CD=[T,yg,Dt,gg];function xg(e,t){t?.statics&&(e.statics.has(Fr.indicator)||e.statics.set(Fr.indicator,t.statics[Fr.indicator]));let o=S.assembleStyles(CD,Nn,t);return fc.compose({name:`${e.prefix}-combobox`,template:t?.template?.(e)??bg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var vg=[[{part:Nn.parts.control},Pi],[{part:Nn.parts.listbox},b.compose([Pe,Ro])]];var Sg=y`
    :host {
        --dialog-height: 480px;
        --dialog-width: 640px;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        justify-content: center;
    }

    .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        touch-action: none;
    }

    .control {
        position: relative;
        z-index: 1;
        margin-top: auto;
        margin-bottom: auto;
        width: var(--dialog-width);
        height: var(--dialog-height);
    }
`,wg=y`
`;var TD={},DD={positioningRegion:"positioning-region",overlay:"overlay",control:"control"},Gn={interactivity:C.never,conditions:TD,parts:DD},kg=e=>rp();var RD=[T,Sg,wg];function Cg(e,t){let o=S.assembleStyles(RD,Gn,t);return Ye.compose({name:`${e.prefix}-dialog`,template:t?.template?.(e)??kg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Tg=[[{part:Gn.parts.control},b.compose([Hn,Bf],{backgroundFill:ec})],[{part:Gn.parts.overlay},b.fromProperties({backgroundFill:Bo.fromRgb(0,0,0,.3)})]];var Dg=y`
    :host {
        display: block;
    }

    .invoker {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }

    #disclosure-content {
        display: none;
    }

    :host([expanded]) #disclosure-content {
        display: flex;
    }
`,Rg=y`
    .invoker {
        max-width: max-content;
    }
`;var FD={expanded:"[expanded]"},ID={invoker:"invoker"},yc={interactivity:C.always,conditions:FD,parts:ID,focus:U.partFocused("invoker")},Fg=e=>sp();var AD=[T,Dg,Rg];function Ig(e,t){let o=S.assembleStyles(AD,yc,t);return Ii.compose({name:`${e.prefix}-disclosure`,template:t?.template?.(e)??Fg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Ag=[[{},ft],[{part:yc.parts.invoker},b.compose([tt,te,ic])]];var $g=y`
    :host {
        display: block;
    }

    :host([orientation="vertical"]) {
        height: 100%;
    }
`,Og=y``;var $D={horizontal:"[orientation='horizontal']",vertical:"[orientation='vertical']"},OD={},jn={interactivity:C.never,conditions:$D,parts:OD},Eg=e=>np();var ED=[T,$g,Og];function Mg(e,t){let o=S.assembleStyles(ED,jn,t);return ir.compose({name:`${e.prefix}-divider`,template:t?.template?.(e)??Eg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Pg=[[{hostCondition:jn.conditions.horizontal},b.fromProperties({borderFillTop:ke,borderStyleTop:"solid",borderThicknessTop:vt})],[{hostCondition:jn.conditions.vertical},b.fromProperties({borderFillLeft:ke,borderStyleLeft:"solid",borderThicknessLeft:vt})]];var Lg=y`
    :host {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    .next,
    .previous {
        display: flex;
    }
`,_g=y`
`;var ze={next:"flipper-next",previous:"flipper-previous"},MD={next:"[direction='next']",previous:"[direction='previous']"},PD={next:"next",previous:"previous"},Hg={interactivity:C.disabledAttribute,conditions:MD,parts:PD,focus:U.hostFocused()},zg=e=>ap({previous:e.statics.get(ze.previous),next:e.statics.get(ze.next)});var LD=[T,Lg,Dt,_g];function Un(e,t){t?.statics&&(e.statics.has(ze.previous)||e.statics.set(ze.previous,t.statics[ze.previous]),e.statics.has(ze.next)||e.statics.set(ze.next,t.statics[ze.next]));let o=S.assembleStyles(LD,Hg,t);return Ai.compose({name:`${e.prefix}-flipper`,template:t?.template?.(e)??zg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Bg=[[{},b.compose([sc,Ce,Lf])]];var Vg=y`
    :host {
        position: relative;
        display: block;
        contain: layout;
    }

    .scroll-view {
        overflow-x: auto;
        scrollbar-width: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .content {
        position: relative;
        display: inline-flex;
        flex-wrap: nowrap;
        align-items: center;
    }
`,Ng=y`
`,gc=y`
    .scroll-area {
        position: relative;
    }

    .scroll-view {
        overflow-x: hidden !important;
    }

    .scroll-next,
    .scroll-previous {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        bottom: 0;
        user-select: none;
    }

    .scroll-next.disabled,
    .scroll-previous.disabled {
        display: none;
    }

    .scroll-previous {
        right: auto;
        left: 0;
    }

    .scroll-next {
        left: auto;
        right: 0;
    }
`;var _D={},HD={scrollArea:"scroll-area",scrollView:"scroll-view",content:"content",scrollPrevious:"scroll-previous",previousFlipper:"previous-flipper",scrollNext:"scroll-next",nextFlipper:"next-flipper"},Gg={interactivity:C.never,conditions:_D,parts:HD},jg=e=>{let t={flipper:Un(e)},o=m.partial(yt(t.flipper));return m`
            <template @keyup="${(i,r)=>i.keyupHandler(r.event)}">
                ${Z(t)}
                <div class="scroll-area" part="scroll-area">
                    <div class="scroll-view" part="scroll-view" @scroll="${i=>i.scrolled()}" ${z("scrollContainer")}>
                        <div class="content" part="content" ${z("content")}>
                            <slot
                                ${M({property:"scrollItems",filter:Rt()})}
                            ></slot>
                        </div>
                    </div>
                    ${X(i=>i.view!=="mobile",m`
                            <div class="scroll-previous" part="scroll-previous" ${z("previousFlipperContainer")}>
                                <slot name="previous-flipper">
                                    ${N(t.previousFlipper??m`
                                                <${o}
                                                    part="previous-flipper"
                                                    @click="${i=>i.scrollToPrevious()}"
                                                    direction="previous"
                                                    aria-hidden="${i=>i.flippersHiddenFromAT}"
                                                ></${o}>
                                            `)}
                                </slot>
                            </div>
                            <div class="scroll-next" part="scroll-next" ${z("nextFlipperContainer")}>
                                <slot name="next-flipper">
                                    ${N(t.nextFlipper??m`
                                                <${o}
                                                    part="next-flipper"
                                                    @click="${i=>i.scrollToNext()}"
                                                    aria-hidden="${i=>i.flippersHiddenFromAT}"
                                                ></${o}>
                                            `)}
                                </slot>
                            </div>
                        `)}
                </div>
                ${J(t)}
            </template>
        `};var bc=class extends ve{connectedCallback(){super.connectedCallback(),this.view!=="mobile"&&this.$fastController.addStyles(gc)}viewChanged(t,o){o===Tp.default?this.$fastController.addStyles(gc):this.$fastController.removeStyles(gc)}};var zD=[T,Vg,Ng];function Ug(e,t){let o=S.assembleStyles(zD,Gg,t);return bc.compose({name:`${e.prefix}-horizontal-scroll`,template:t?.template?.(e)??jg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var qg=[];var Wg=y`
    :host {
        display: inline-flex;
        flex-direction: column;
    }
`,Kg=y`
    :host(:not([aria-multiselectable]):not([disabled]):focus-visible) ::slotted([aria-selected="true"][role="option"]:not([disabled])),
    :host([aria-multiselectable="true"]:not([disabled]):focus-visible) ::slotted([aria-checked="true"][role="option"]:not([disabled])) {
        outline: ${Wt} solid ${ni};
        outline-offset: 1px;
    }
`;var BD={},VD={},Xg={interactivity:C.disabledAttribute,conditions:BD,parts:VD,focus:U.hostFocused()},Yg=e=>dp();var ND=[T,Wg,Kg];function Qg(e,t){let o=S.assembleStyles(ND,Xg,t);return Ae.compose({name:`${e.prefix}-listbox`,template:t?.template?.(e)??Yg(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Jg=[[{},b.compose([tt,Pe,Mi])]];var Zg=y`
    :host {
        display: inline-flex;
        align-items: center;
        overflow: hidden;
        user-select: none;
        white-space: nowrap;
        cursor: pointer;
    }

    /* Keep for now, show on full component not just children */
    :host([disabled]) {
        cursor: not-allowed;
    }

    .content {
        /* justify-self: start; */
        overflow: hidden;
        text-overflow: ellipsis;
        flex-grow: 1;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }
`,tb=y`
`;var GD={checked:"[aria-checked='true']",selected:"[aria-selected='true']"},jD={content:"content"},xc={interactivity:C.disabledAttribute,conditions:GD,parts:jD},eb=e=>cp();var UD=[T,Zg,tb];function ob(e,t){let o=S.assembleStyles(UD,xc,t);return be.compose({name:`${e.prefix}-option`,template:t?.template?.(e)??eb(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var ib=[[{},Le],[{hostCondition:xc.conditions.selected},Li]];var Ir=class extends ne{};a([h({attribute:"start-column-count"}),gi("design:type",Number)],Ir.prototype,"startColumnCount",void 0);var vc=class e extends rr{static elementIndent(t){let o=t.getAttribute("role"),i=t.querySelector("[slot=start]");return{hasControl:o!==zt.menuitem,hasStart:i!==null}}setItems(){super.setItems();let t=this.menuItems?.filter(this.isMenuItemElement);t?.forEach(o=>{let i=t.reduce((s,n)=>{let l=e.elementIndent(n);return{hasControl:s.hasControl||l.hasControl,hasStart:s.hasStart||l.hasStart}},{hasControl:!1,hasStart:!1}),r=i.hasControl&&i.hasStart?2:i.hasControl||i.hasStart?1:0;o instanceof Ir&&(o.startColumnCount=r)})}};var rb=y`
    :host {
        display: block;
    }

    :host([slot="submenu"]) {
        width: max-content;
    }
`,sb=y`
    :host {
        max-width: 368px;
        min-width: 64px;
    }

    ::slotted(adaptive-divider) {
        margin: 4px 0;
    }
`;var qD={submenu:"[slot='submenu']"},WD={},nb={interactivity:C.never,conditions:qD,parts:WD},ab=e=>gp();var KD=[T,rb,sb];function lb(e,t){let o=S.assembleStyles(KD,nb,t);return vc.compose({name:`${e.prefix}-menu`,template:t?.template?.(e)??ab(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var cb=[[{},b.compose([Pe,Ro])]];var db=y`
    :host {
        display: grid;
        align-items: center;
        justify-items: center;
        white-space: nowrap;
        /* unmanaged columns: start, content, end, submenu */
        grid-template-columns: auto 1fr auto var(--col-width);
        grid-template-rows: auto;
        cursor: pointer;
    }

    /* managed columns: content, end?, submenu? */

    :host([start-column-count="0"]) {
        grid-template-columns: 1fr auto var(--col-width);
    }

    :host([start-column-count="0"]) ::slotted([slot="end"]) {
        grid-column: 2;
    }

    :host([start-column-count="0"]) .submenu-icon {
        grid-column: 3;
    }

    /* managed columns: indicator OR start, content, end?, submenu? */

    :host([start-column-count="1"]) {
        grid-template-columns: var(--col-width) 1fr auto var(--col-width);
    }

    :host([start-column-count="1"]) .content {
        grid-column: 2;
    }

    :host([start-column-count="1"]) ::slotted([slot="end"]) {
        grid-column: 3;
    }

    :host([start-column-count="1"]) .submenu-icon {
        grid-column: 4;
    }

    /* managed columns: indicator, start, content, end?, submenu? */

    :host([start-column-count="2"]) {
        grid-template-columns: var(--col-width) var(--col-width) 1fr auto var(--col-width);
    }

    :host([start-column-count="2"]) ::slotted([slot="start"]) {
        grid-column: 2;
    }

    :host([start-column-count="2"]) .content {
        grid-column: 3;
    }

    :host([start-column-count="2"]) ::slotted([slot="end"]) {
        grid-column: 4;
    }

    :host([start-column-count="2"]) .submenu-icon {
        grid-column: 5;
    }

    .content {
        justify-self: start;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    ::slotted([slot="checkbox-indicator"]),
    ::slotted([slot="radio-indicator"]),
    ::slotted([slot="submenu-icon"]) {
        display: flex;
        pointer-events: none;
    }

    .checkbox-indicator,
    .radio-indicator,
    .submenu-icon {
        display: flex;
        flex-basis: content;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    :host(:not([aria-checked="true"])) .checkbox-indicator,
    :host(:not([aria-checked="true"])) .radio-indicator {
        visibility: hidden;
    }

    .submenu-container {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }

    /* Keep for now, show on full component not just children */
    :host([disabled]) {
        cursor: not-allowed;
    }
`,pb=y`
    :host {
        --col-width: minmax(20px, auto);
        overflow: visible;
    }

    :host([aria-expanded="true"]) {
        background: ${of};
    }

    ::slotted([slot="end"]:not(svg)) {
        color: ${Jl};
    }
`;var Kt={checkbox:"menu-item-checkbox-indicator",radio:"menu-item-radio-indicator",submenu:"menu-item-submenu-item"},XD={checked:"[aria-checked='true']"},YD={content:"content",submenuIcon:"submenu-icon"},hb={interactivity:C.disabledAttribute,conditions:XD,parts:YD,focus:U.hostFocused()},ub=e=>{let t={checkboxIndicator:e.statics.get(Kt.checkbox),radioIndicator:e.statics.get(Kt.radio),expandCollapseGlyph:e.statics.get(Kt.submenu)},o=new Map;function i(r,s){let n=o.get(r);if(!n){let l=r.replace("menuitem",""),c=l+"Indicator";n=m`
                    <span part="${l}-indicator" class="${l}-indicator">
                        <slot name="${l}-indicator">
                            ${N(s[c])}
                        </slot>
                    </span>
                `,o.set(r,n)}return n}return m`
            <template
                aria-haspopup="${r=>r.hasSubmenu?"menu":void 0}"
                aria-checked="${r=>r.role!==zt.menuitem?r.checked:void 0}"
                aria-disabled="${r=>r.disabled}"
                aria-expanded="${r=>r.expanded}"
                @keydown="${(r,s)=>r.handleMenuItemKeyDown(s.event)}"
                @click="${(r,s)=>r.handleMenuItemClick(s.event)}"
                @mouseover="${(r,s)=>r.handleMouseOver(s.event)}"
                @mouseout="${(r,s)=>r.handleMouseOut(s.event)}"
            >
                ${X(r=>r.role!==zt.menuitem,m`
                        ${r=>i(r.role,t)}
                    `)}
                ${Z(t)}
                <span class="content" part="content">
                    <slot></slot>
                </span>
                ${J(t)}
                ${X(r=>r.hasSubmenu,m`
                        <span part="submenu-icon" class="submenu-icon">
                            <slot name="submenu-icon">
                                ${N(t.expandCollapseGlyph)}
                            </slot>
                        </span>
                    `)}
                <span
                    ?hidden="${r=>!r.expanded}"
                    class="submenu-container"
                    part="submenu-container"
                    ${z("submenuContainer")}
                >
                    <slot
                        name="submenu"
                        ${M({property:"slottedSubmenu",filter:Rt("[role='menu']")})}
                    ></slot>
                </span>
            </template>
        `};var QD=[T,db,Dt,pb];function mb(e,t){t?.statics&&(e.statics.has(Kt.checkbox)||e.statics.set(Kt.checkbox,t.statics[Kt.checkbox]),e.statics.has(Kt.radio)||e.statics.set(Kt.radio,t.statics[Kt.radio]),e.statics.has(Kt.submenu)||e.statics.set(Kt.submenu,t.statics[Kt.submenu]));let o=S.assembleStyles(QD,hb,t);return Ir.compose({name:`${e.prefix}-menu-item`,template:t?.template?.(e)??ub(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var fb=[[{},Le]];var Sc=class extends Bt{focus(t){this.control.focus(t)}};var yb=y`
    :host {
        display: inline-flex;
        flex-direction: column;
    }

    .label {
        align-self: start;
        cursor: pointer;
    }

    .label.label__hidden {
        display: none;
        visibility: hidden;
    }

    .root {
        display: flex;
        align-items: center;
    }

    .control {
        width: 100%;
        /* reset */
        background: transparent;
        border: none;
        color: inherit;
        font: inherit;
        padding: unset;
    }

    .controls {
        opacity: 0;
    }

    :host(:enabled:hover) .controls,
    :host(:enabled:focus-within) .controls {
        opacity: 1;
    }

    .step-up,
    .step-down {
        display: flex;
        cursor: pointer;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }
`,gb=y`
`;var Be={stepDown:"number-field-step-down-icon",stepUp:"number-field-step-up-icon"},JD={},ZD={label:"label",root:"root",control:"control",controls:"controls",stepUp:"step-up",stepDown:"step-down"},Ps={interactivity:C.disabledAttribute,conditions:JD,parts:ZD,focus:U.partWithin("root","control")},bb=e=>bp({stepDownGlyph:e.statics.get(Be.stepDown),stepUpGlyph:e.statics.get(Be.stepUp)});var tR=[T,yb,Dt,gb];function xb(e,t){t?.statics&&(e.statics.has(Be.stepDown)||e.statics.set(Be.stepDown,t.statics[Be.stepDown]),e.statics.has(Be.stepUp)||e.statics.set(Be.stepUp,t.statics[Be.stepUp]));let o=S.assembleStyles(tR,Ps,t);return Sc.compose({name:`${e.prefix}-number-field`,template:t?.template?.(e)??bb(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var vb=[[{},b.compose([ft],{gap:Y.verticalGap})],[{part:Ps.parts.label},_i],[{part:Ps.parts.root},nc],[{part:Ps.parts.control},oc]];var Sb=y`
    :host {
        display: inline-flex;
    }

    .region {
        display: flex;
        z-index: 1000;
    }

    .loaded {
        opacity: 1;
        pointer-events: none;
    }

    .loading-display,
    .no-options-display {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-items: center;
    }

    .bottom {
        flex-direction: column;
    }

    .top {
        flex-direction: column-reverse;
    }
`,wb=y`
`;var kb=y`
    :host {
        display: flex;
        flex-wrap: wrap;
        outline: none;
        user-select: none;
    }

    ::slotted([role="combobox"]) {
        width: auto;
        border: none;
        outline: none;
        user-select: none;
        font: inherit;
    }
`,Cb=y`
    :host(:not([disabled]):focus-within) {
        outline: ${Wt} solid ${ni};
    }

    ::slotted([role="combobox"]) {
        padding: ${Y.verticalPadding} ${Y.horizontalPadding};
    }
`;var eR={},oR={},Tb={interactivity:C.always,conditions:eR,parts:oR},Db=e=>hp();var iR=[T,kb,Cb];function qn(e,t){let o=S.assembleStyles(iR,Tb,t);return wn.compose({name:`${e.prefix}-picker-list`,template:t?.template?.(e)??Db(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Rb=[[{},b.compose([tt,ft,Mi])]];var Fb=y`
    :host {
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        pointer-events: auto;
        z-index: 1000;
    }

    .suggestions-available-alert {
        height: 0;
        opacity: 0;
        overflow: hidden;
    }
`,Ib=y`
`;var rR={},sR={optionsDisplay:"options-display",headerRegion:"header-region",footerRegion:"footer-region",suggestionsAvailableAlert:"suggestions-available-alert"},Ab={interactivity:C.never,conditions:rR,parts:sR},$b=e=>mp();var nR=[T,Fb,Ib];function Wn(e,t){let o=S.assembleStyles(nR,Ab,t);return ei.compose({name:`${e.prefix}-picker-menu`,template:t?.template?.(e)??$b(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Ob=[[{},b.compose([Pe,Ro])]];var Eb=y`
    :host {
        display: flex;
        align-items: center;
        justify-items: center;
        overflow: hidden;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
    }
`,Mb=y`
`;var aR={},lR={},Pb={interactivity:C.always,conditions:aR,parts:lR,focus:U.hostFocused()},Lb=e=>pp();var cR=[T,Eb,Mb];function Kn(e,t){let o=S.assembleStyles(cR,Pb,t);return Zo.compose({name:`${e.prefix}-picker-list-item`,template:t?.template?.(e)??Lb(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var _b=[[{},Le]];var Hb=y`
    :host {
        display: flex;
        align-items: center;
        justify-items: center;
        overflow: hidden;
        white-space: nowrap;
        user-select: none;
        cursor: pointer;
    }
`,zb=y`
`;var dR={selected:"[aria-selected='true']"},pR={},wc={interactivity:C.always,conditions:dR,parts:pR},Bb=e=>up();var hR=[T,Hb,zb];function Xn(e,t){let o=S.assembleStyles(hR,wc,t);return ti.compose({name:`${e.prefix}-picker-menu-option`,template:t?.template?.(e)??Bb(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Vb=[[{},Le],[{hostCondition:wc.conditions.selected},Os]];var Nb=y`
    :host {
        position: relative;
        display: flex;
        align-items: center;
        contain: content;
    }
`,Gb=y`
    :host {
        height: calc(${st} * 1px);
        width: calc(${st} * 1px);
    }

    .progress {
        display: block;
        height: 100%;
        width: 100%;
    }

    .background {
        stroke: currentcolor;
        fill: none;
        stroke-width: 2px;
    }

    .indicator {
        stroke: currentcolor;
        fill: none;
        stroke-width: 2px;
        stroke-linecap: round;
        transform-origin: 50% 50%;
        transform: rotate(-90deg);
        transition: all 0.2s ease-in-out;
    }

    .determinate .indicator {
        --progress-segments: 44;
        stroke-dasharray: calc(((var(--progress-segments) * var(--percent-complete)) / 100) * 1px)
            calc(var(--progress-segments) * 1px);
    }

    .indeterminate .indicator {
        animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
        0% {
            stroke-dasharray: 0.01px 43.97px;
            transform: rotate(0deg);
        }
        50% {
            stroke-dasharray: 21.99px 21.99px;
            transform: rotate(450deg);
        }
        100% {
            stroke-dasharray: 0.01px 43.97px;
            transform: rotate(1080deg);
        }
    }
`;var uR={},mR={indicator:"indicator",determinate:"determinate",indeterminate:"indeterminate"},kc={interactivity:C.never,conditions:uR,parts:mR},jb=m`
    <svg viewBox="0 0 16 16" class="progress">
        <circle class="background" part="background" cx="8px" cy="8px" r="7px"></circle>
        <circle class="indicator" part="indicator" cx="8px" cy="8px" r="7px"></circle>
    </svg>
`,Ub=e=>{let t={determinateIndicator:jb,indeterminateIndicator:jb};return m`
            <template
                role="progressbar"
                aria-valuenow="${o=>o.value}"
                aria-valuemin="${o=>o.min}"
                aria-valuemax="${o=>o.max}"
            >
                ${X(o=>typeof o.value=="number",m`
                        <span
                            class="determinate"
                            part="determinate"
                            style="--percent-complete: ${o=>o.percentComplete}"
                        >
                            <slot name="determinate">
                                ${N(t.determinateIndicator)}
                            </slot>
                        </span>
                    `)}
                ${X(o=>typeof o.value!="number",m`
                        <span class="indeterminate" part="indeterminate">
                            <slot name="indeterminate">
                                ${N(t.indeterminateIndicator)}
                            </slot>
                        </span>
                    `)}
            </template>
        `};var fR=[T,Nb,Gb];function Yn(e,t){let o=S.assembleStyles(fR,kc,t);return kn.compose({name:`${e.prefix}-progress-ring`,template:t?.template?.(e)??Ub(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var qb=[[{},b.fromProperties({foregroundFill:pe})],[{part:kc.parts.indicator},b.fromProperties({foregroundFill:hr})]];var yR={},gR={region:"region",noOptionsDisplay:"no-options-display",loadingDisplay:"loading-display",loadingProgress:"loading-progress"},Qn={interactivity:C.never,conditions:yR,parts:gR},Wb=e=>yp({anchoredRegion:zn(e),pickerList:qn(e),pickerListItem:Kn(e),pickerMenu:Wn(e),pickerMenuOption:Xn(e),progressRing:Yn(e)});var bR=[T,Sb,wb];function Kb(e,t){let o=S.assembleStyles(bR,Qn,t);return K.compose({name:`${e.prefix}-picker`,template:t?.template?.(e)??Wb(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Xb=b.compose([ct,Pe,Ro]),Yb=[[{part:Qn.parts.loadingDisplay},Xb],[{part:Qn.parts.noOptionsDisplay},Xb]];var Qb=y`
    :host {
        position: relative;
        display: flex;
        align-items: center;
        contain: content;
    }

    .indicator {
        width: 100%;
    }

    .determinate {
        display: flex;
        height: 100%;
        width: calc(var(--percent-complete) * 1%);
    }

    .indeterminate {
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .indeterminate .indicator {
        position: absolute;
        height: 100%;
        width: 40%;
        opacity: 0;
    }
`,Jb=y`
    :host {
        height: ${W};
    }

    .determinate {
        transition: all 0.2s ease-in-out;
    }

    .indeterminate .indicator {
        animation: indeterminate 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes indeterminate {
        0% {
            opacity: 1;
            transform: translateX(-100%);
        }
        70% {
            opacity: 1;
            transform: translateX(300%);
        }
        70.01% {
            opacity: 0;
        }
        100% {
            opacity: 0;
            transform: translateX(300%);
        }
    }
`;var xR={},vR={indicator:"indicator",determinate:"determinate",indeterminate:"indeterminate"},Cc={interactivity:C.never,conditions:xR,parts:vR},Zb=m`
    <div class="indicator" part="indicator"></div>
`,tx=e=>{let t={determinateIndicator:Zb,indeterminateIndicator:Zb};return m`
            <template
                role="progressbar"
                aria-valuenow="${o=>o.value}"
                aria-valuemin="${o=>o.min}"
                aria-valuemax="${o=>o.max}"
            >
                ${X(o=>typeof o.value=="number",m`
                        <span
                            class="determinate"
                            part="determinate"
                            style="--percent-complete: ${o=>o.percentComplete}"
                        >
                            <slot name="determinate">
                                ${N(t.determinateIndicator)}
                            </slot>
                        </span>
                    `)}
                ${X(o=>typeof o.value!="number",m`
                        <span class="indeterminate" part="indeterminate">
                            <slot name="indeterminate">
                                ${N(t.indeterminateIndicator)}
                            </slot>
                        </span>
                    `)}
            </template>
        `};var SR=[T,Qb,Jb];function ex(e,t){let o=S.assembleStyles(SR,Cc,t);return Cn.compose({name:`${e.prefix}-progress`,template:t?.template?.(e)??tx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var ox=[[{},b.fromProperties({backgroundFill:pe,...dr.all(W)})],[{part:Cc.parts.indicator},b.fromProperties({backgroundFill:hr,...dr.all(W)})]];var ix=y`
    :host {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .control {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    slot[name="checked-indicator"] * {
        pointer-events: none;
    }

    slot[name="checked-indicator"] * {
        /*opacity: 0;*/
        display: none;
    }

    :host([aria-checked="true"]) slot[name="checked-indicator"] * {
        /*opacity: 1;*/
        display: flex;
    }

    .label {
        cursor: pointer;
    }

    .label.label__hidden {
        display: none;
        visibility: hidden;
    }
`,rx=y`
    .control {
        width: calc((${st} / 2) * 1px + ${W});
        height: calc((${st} / 2) * 1px + ${W});
    }
`;var Ar={checked:"radio-checked-indicator"},wR={checked:"[aria-checked='true']"},kR={control:"control",label:"label"},$r={interactivity:C.disabledAttribute,conditions:wR,parts:kR,focus:U.hostFocused()},sx=e=>kp({checkedIndicator:e.statics.get(Ar.checked)});var CR=[T,ix,Dt,rx];function nx(e,t){t?.statics&&(e.statics.has(Ar.checked)||e.statics.set(Ar.checked,t.statics[Ar.checked]));let o=S.assembleStyles(CR,$r,t);return ii.compose({name:`${e.prefix}-radio`,template:t?.template?.(e)??sx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var ax=[[{},b.fromProperties({gap:Y.horizontalGap})],[{part:$r.parts.label},ct],[{part:$r.parts.control},b.compose([Es,Ce])],[{hostCondition:$r.conditions.checked,part:$r.parts.control},b.compose([Li,Ce])]];var lx=y`
    :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .positioning-region {
        display: flex;
        flex-wrap: wrap;
    }

    :host([orientation="vertical"]) .positioning-region {
        flex-direction: column;
    }
`,cx=y`
`;var TR={horizontal:"[orientation='horizontal']",vertical:"[orientation='vertical']"},DR={positioningRegion:"positioning-region"},Tc={interactivity:C.disabledAttribute,conditions:TR,parts:DR},dx=e=>wp();var RR=[T,lx,cx];function px(e,t){let o=S.assembleStyles(RR,Tc,t);return $e.compose({name:`${e.prefix}-radio-group`,template:t?.template?.(e)??dx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var hx=[[{},b.fromProperties({gap:Y.verticalGap})],[{part:Tc.parts.positioningRegion},b.fromProperties({gap:Y.verticalGap})]];var Dc=class extends Zt{focus(t){this.control.focus(t)}};var ux=y`
    :host {
        display: inline-flex;
        flex-direction: column;
    }

    .label {
        align-self: start;
        cursor: pointer;
    }

    .label.label__hidden {
        display: none;
        visibility: hidden;
    }

    .root,
    .input-wrapper {
        display: flex;
        align-items: center;
    }

    .control {
        -webkit-appearance: none;
        /* reset */
        background: transparent;
        border: none;
        color: inherit;
        font: inherit;
        padding: unset;
    }

    .control::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }

    .clear-button {
        opacity: 0;
        background: transparent;
        border: none;
        outline: none;
        font: inherit;
    }

    .clear-button__hidden {
        opacity: 0;
    }

    :host(:not([disabled], [readonly]):hover) .clear-button,
    :host(:not([disabled], [readonly]):active) .clear-button,
    :host(:not([disabled], [readonly]):focus-within) .clear-button {
        opacity: 1;
    }

    :host(:not([disabled], [readonly]):hover) .clear-button__hidden,
    :host(:not([disabled], [readonly]):active) .clear-button__hidden,
    :host(:not([disabled], [readonly]):focus-within) .clear-button__hidden {
        opacity: 0;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }
`,mx=y`
    .clear-button {
        margin: 1px;
        height: calc(100% - 2px);
        min-width: calc(${st} * 1px);
        padding: 0 calc(10px + (${W} * (2 * ${lc})));
    }
`;var FR={},IR={label:"label",root:"root",control:"control",clearButton:"clear-button"},Ls={interactivity:C.disabledAttribute,conditions:FR,parts:IR,focus:U.partWithin("root","control")},fx=e=>Rp();var AR=[T,ux,mx];function yx(e,t){let o=S.assembleStyles(AR,Ls,t);return Dc.compose({name:`${e.prefix}-search`,template:t?.template?.(e)??fx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var gx=[[{},b.compose([ft],{gap:Y.verticalGap})],[{part:Ls.parts.label},_i],[{part:Ls.parts.root},Pi],[{part:Ls.parts.clearButton},b.compose([tt,dh])]];var Rc=class extends ri{multipleChanged(t,o){super.multipleChanged(t,o),this.updateComputedStylesheet()}sizeChanged(t,o){super.sizeChanged(t,o),this.updateComputedStylesheet()}updateComputedStylesheet(){this.$fastController.removeStyles(this.computedStylesheet),!this.collapsible&&(this.computedStylesheet=y`
            :host {
                --size: ${`${this.size??(this.multiple?4:0)}`};
            }
        `,this.$fastController.addStyles(this.computedStylesheet))}};var bx=y`
    :host {
        display: inline-flex;
        position: relative;
        user-select: none;
        vertical-align: top;
    }

    :host(:not([aria-haspopup])) {
        height: auto;
        min-width: 0;
    }

    :host([size="0"]) .listbox {
        max-height: none;
    }

    .control {
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 100%;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]),
    .indicator {
        display: flex;
    }

    .selected-value {
        flex: 1 1 auto;
    }

    .indicator {
        flex: 0 0 auto;
    }

    .listbox {
        z-index: 1;
        display: flex;
        flex-direction: column;
        overflow-y: auto;
    }

    :host([aria-haspopup]) .listbox {
        position: fixed;
    }

    .listbox[hidden] {
        display: none;
    }

    ::slotted([role="option"]) {
        flex: 0 0 auto;
    }

    :host([disabled]) .control {
        user-select: none;
    }
`,xx=y`
    :host(:not([aria-multiselectable]):not([disabled]):focus-visible) ::slotted([aria-selected="true"][role="option"]:not([disabled])),
    :host([aria-multiselectable="true"]:not([disabled]):focus-visible) ::slotted([aria-checked="true"][role="option"]:not([disabled])) {
        outline: ${Wt} solid ${ni};
        outline-offset: 1px;
    }

    .listbox {
        max-height: calc((var(--size, 0) * ${st}) * 1px + (${W} + ${vt} * 2));
    }
`;var Or={indicator:"select-indicator"},$R={isDropdown:"[aria-haspopup]",isListbox:":not([aria-haspopup])"},OR={control:"control",selectedValue:"selected-value",indicator:"indicator",listbox:"listbox"},pi={interactivity:C.disabledAttribute,conditions:$R,parts:OR,focus:U.hostFocused()},vx=e=>Ap({indicator:e.statics.get(Or.indicator)});var ER=[T,bx,Dt,xx];function Sx(e,t){t?.statics&&(e.statics.has(Or.indicator)||e.statics.set(Or.indicator,t.statics[Or.indicator]));let o=S.assembleStyles(ER,pi,t);return Rc.compose({name:`${e.prefix}-select`,template:t?.template?.(e)??vx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var wx=[[{part:pi.parts.control},Pi],[{part:pi.parts.listbox},b.compose([Pe])],[{hostCondition:pi.conditions.isListbox,part:pi.parts.listbox},b.compose([tt,Mi])],[{hostCondition:pi.conditions.isDropdown,part:pi.parts.listbox},Ro]];var kx=y`
    :host {
        position: relative;
        display: block;
        width: 100%;
        overflow: hidden;
    }

    object {
        position: absolute;
        width: 100%;
        height: auto;
        z-index: 2;
    }

    object img {
        width: 100%;
        height: auto;
    }

    ::slotted(svg) {
        z-index: 2;
    }

    .pattern {
        width: 100%;
        height: 100%;
    }

    .shimmer {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
`,Cx=y`
    .shimmer {
        background-image: linear-gradient(
            90deg,
            transparent 0%,
            ${rf} 50%,
            transparent 100%
        );
        background-size: 0px 0px / 90% 100%;
        background-repeat: no-repeat;
        animation: shimmer 2s infinite;
        animation-timing-function: ease-in-out;
        animation-direction: normal;
        
    }

    @keyframes shimmer {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
`;var MR={rectangle:"[shape='rect']",circle:"[shape='circle']"},PR={},Jn={interactivity:C.never,conditions:MR,parts:PR},Tx=e=>m`
            ${X(t=>t.shimmer===!0,m`
                    <span class="shimmer"></span>
                `)}
            ${X(t=>t.pattern,m`
                    <object type="image/svg+xml" data="${t=>t.pattern}" role="presentation">
                        <img class="pattern" src="${t=>t.pattern}" />
                    </object>
                `)}
            <slot></slot>
        `;var LR=[T,kx,Cx];function Dx(e,t){let o=S.assembleStyles(LR,Jn,t);return si.compose({name:`${e.prefix}-skeleton`,template:t?.template?.(e)??Tx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Rx=[[{},b.fromProperties({backgroundFill:pe})],[{hostCondition:Jn.conditions.rectangle},tt],[{hostCondition:Jn.conditions.circle},Ce]];var Fx=y`
    :host {
        display: inline-grid;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }

    :host([orientation="horizontal"]) {
        width: 100%;
        min-width: var(--thumb-size);
        touch-action: pan-y;
    }

    :host([orientation="vertical"]) {
        height: 100%;
        min-height: var(--thumb-size);
        touch-action: pan-x;
    }

    /* Keep for now, show on full component not just children */
    :host([disabled]) {
        cursor: not-allowed;
    }

    .positioning-region {
        position: relative;
        display: grid;
    }

    :host([orientation="horizontal"]) .positioning-region {
        grid-template-rows: var(--thumb-size) 1fr;
    }

    :host([orientation="vertical"]) .positioning-region {
        height: 100%;
        grid-template-columns: var(--thumb-size) 1fr;
    }

    .thumb-container {
        position: absolute;
        height: var(--thumb-size);
        width: var(--thumb-size);
        transition: all 0.2s ease;
    }

    :host([orientation="horizontal"]) .thumb-container {
        transform: translateX(calc(var(--thumb-size) * 0.5));
    }

    :host([orientation="vertical"]) .thumb-container {
        transform: translateY(calc(var(--thumb-size) * -0.5));
    }

    .thumb {
        width: var(--thumb-size);
        height: var(--thumb-size);
    }

    .track-start {
        position: absolute;
    }

    :host([orientation="horizontal"]) .track-start {
        height: 100%;
        left: 0;
    }

    :host([orientation="vertical"]) .track-start {
        width: 100%;
        bottom: 0;
    }

    .track {
        position: absolute;
    }

    :host([orientation="horizontal"]) .track {
        right: var(--track-overhang);
        left: var(--track-overhang);
        align-self: center;
        height: var(--track-width);
    }

    :host([orientation="vertical"]) .track {
        top: var(--track-overhang);
        bottom: var(--track-overhang);
        justify-self: center;
        height: 100%;
        width: var(--track-width);
    }
`,Ix=y`
    :host {
        --thumb-size: 16px;
        --track-width: ${W};
        --track-overhang: calc((${W} / 2) * -1);
        margin: ${W} 0;
    }

    :host([orientation="horizontal"]) .positioning-region {
        margin: 0 8px;
    }

    :host([orientation="vertical"]) .positioning-region {
        margin: 0 8px;
    }
`;var _R={horizontal:"[orientation='horizontal']",vertical:"[orientation='vertical']"},HR={positioningRegion:"positioning-region",track:"track",trackStart:"track-start",thumbContainer:"thumb-container",thumb:"thumb"},_s={interactivity:C.never,conditions:_R,parts:HR,focus:U.hostFocused()},Ax=e=>m`
            <template
                role="slider"
                tabindex="${t=>t.disabled?null:0}"
                aria-valuetext="${t=>t.valueTextFormatter(t.value)}"
                aria-valuenow="${t=>t.value}"
                aria-valuemin="${t=>t.min}"
                aria-valuemax="${t=>t.max}"
                aria-disabled="${t=>t.disabled?!0:void 0}"
                aria-readonly="${t=>t.readOnly?!0:void 0}"
                aria-orientation="${t=>t.orientation}"
            >
                <div part="positioning-region" class="positioning-region">
                    <div ${z("track")} part="track" class="track">
                        <slot name="track"></slot>
                        <div part="track-start" class="track-start" style="${t=>t.position}">
                            <slot name="track-start"></slot>
                        </div>
                    </div>
                    <slot></slot>
                    <div ${z("thumb")} part="thumb-container" class="thumb-container" style="${t=>t.position}">
                        <slot name="thumb">
                            ${N('<div class="thumb" part="thumb"></div>')}
                        </slot>
                    </div>
                </div>
            </template>
        `;var zR=[T,Fx,Ix];function $x(e,t){let o=S.assembleStyles(zR,_s,t);return Tt.compose({name:`${e.prefix}-slider`,template:t?.template?.(e)??Ax(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Ox=[[{},tt],[{part:_s.parts.track},b.compose([tt],{backgroundFill:sf})],[{part:_s.parts.trackStart},b.compose([tt,Os])],[{part:_s.parts.thumb},b.compose([Ce,Os])]];var Ex=y`
    :host([orientation="horizontal"]) {
        align-self: start;
        grid-row: 2;
        margin-top: -2px;
    }

    :host([orientation="vertical"]) {
        justify-self: start;
        grid-column: 2;
        margin-left: 2px;
    }

    .container {
        position: absolute;
        display: grid;
        justify-self: center;
    }

    :host([orientation="horizontal"]) .container {
        grid-template-rows: auto auto;
        grid-template-columns: 0;
    }

    :host([orientation="vertical"]) .container {
        grid-template-columns: auto auto;
        grid-template-rows: 0;
        min-width: calc(var(--thumb-size) * 1px);
        height: calc(var(--thumb-size) * 1px);
    }

    .content {
        justify-self: center;
        align-self: center;
        white-space: nowrap;
        max-width: 30px;
        margin-top: 4px;
    }

    :host([orientation="vertical"]) .content {
        margin-left: 4px;
    }

    .mark {
        justify-self: center;
    }

    :host([orientation="vertical"]) .mark {
        transform: rotate(90deg);
        align-self: center;
    }
`,Mx=y`
`;var BR={horizontal:"[orientation='horizontal']",vertical:"[orientation='vertical']"},VR={container:"container",mark:"mark",content:"content"},Fc={interactivity:C.never,conditions:BR,parts:VR},Px=e=>m`
            <template aria-disabled="${t=>t.disabled}">
                <div part="container" class="container" style="${t=>t.positionStyle}">
                    ${X(t=>!t.hideMark,m`
                            <div class="mark" part="mark"></div>
                        `)}
                    <span class="content" part="content">
                        <slot></slot>
                    </span>
                </div>
            </template>
        `;var NR=[T,Ex,Mx];function Lx(e,t){let o=S.assembleStyles(NR,Fc,t);return Se.compose({name:`${e.prefix}-slider-label`,template:t?.template?.(e)??Px(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var _x=[[{},rc],[{part:Fc.parts.mark},b.fromProperties({backgroundFill:ke,height:y.partial`calc(${W} *2)`,width:y.partial`calc(${W} / 2)`})]];var Hx=y`
    :host {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }

    .label {
        cursor: pointer;
    }

    .label.label__hidden {
        display: none;
        visibility: hidden;
    }

    .switch {
        display: flex;
        cursor: pointer;
    }

    :host([aria-checked="true"]) .switch {
        justify-content: flex-end;
    }
`,zx=y`
    .switch {
        position: relative;
        width: calc(((${st} / 2)) * 2px + (${W} * 2));
        height: calc(((${st} / 2)) * 1px + ${W});
        padding: 4px;
    }

    .thumb {
        position: absolute;
        height: calc((${st}) * 1px - (${W} * 5.5));
        width: calc((${st}) * 1px - (${W} * 5.5));
        top: ${W};
        background: currentcolor;
        fill: currentcolor;
        transition: all 0.2s ease-in-out;
    }
`;var GR={checked:"[aria-checked='true']"},jR={switch:"switch",label:"label",thumb:"thumb"},Hi={interactivity:C.disabledAttribute,conditions:GR,parts:jR,focus:U.hostFocused()},Bx=e=>Op({switch:'<div class="thumb" part="thumb"></div>'});var UR=[T,Hx,zx];function Vx(e,t){let o=S.assembleStyles(UR,Hi,t);return sr.compose({name:`${e.prefix}-switch`,template:t?.template?.(e)??Bx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Nx=[[{},b.fromProperties({gap:Y.horizontalGap})],[{part:Hi.parts.label},ct],[{part:Hi.parts.switch},b.compose([Es,Ce])],[{hostCondition:Hi.conditions.checked,part:Hi.parts.switch},b.compose([Li,Ce])],[{part:Hi.parts.thumb},Ce]];var Gx=y`
    :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        grid-row: 1;
        cursor: pointer;
    }

    :host([aria-selected="true"]) {
        z-index: 2;
    }
`,jx=y`
`;var qR={},WR={},Ux={interactivity:C.disabledAttribute,conditions:qR,parts:WR,focus:U.hostFocused()},qx=e=>Pp();var KR=[T,Gx,jx];function Wx(e,t){let o=S.assembleStyles(KR,Ux,t);return nr.compose({name:`${e.prefix}-tab`,template:t?.template?.(e)??qx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Kx=[[{},Le]];var Xx=y`
    :host {
        display: block;
    }
`,Yx=y`
`;var XR={},YR={},Qx={interactivity:C.never,conditions:XR,parts:YR},Jx=e=>Mp();var QR=[T,Xx,Yx];function Zx(e,t){let o=S.assembleStyles(QR,Qx,t);return Rn.compose({name:`${e.prefix}-tab-panel`,template:t?.template?.(e)??Jx(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var tv=[[{},b.compose([ct,te])]];var ev=y`
    :host {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto 1fr;
    }

    .tablist {
        position: relative;
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: auto;
        width: max-content;
        align-self: end;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        align-self: center;
    }

    .tabpanel {
        position: relative;
        grid-row: 2;
        grid-column-start: 1;
        grid-column-end: 4;
    }

    :host([orientation="vertical"]) {
        grid-template-rows: auto 1fr auto;
        grid-template-columns: auto 1fr;
    }

    :host([orientation="vertical"]) .tablist {
        position: relative;
        width: max-content;
        width: 100%;
        display: grid;
        grid-row-start: 2;
        grid-row-end: 2;
        grid-template-rows: auto;
        grid-template-columns: auto 1fr;
        justify-self: end;
    }

    :host([orientation="vertical"]) .tabpanel {
        grid-column: 2;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    :host([orientation="vertical"]) ::slotted([slot="end"]) {
        grid-row: 3;
    }
`,ov=y`
    ::slotted([role="tab"][aria-selected="true"])::after {
        content: "";
        display: block;
        position: absolute;
        border-radius: ${Ze};
        background: ${Ss};
    }

    :host([orientation="horizontal"]) ::slotted([role="tab"][aria-selected="true"])::after {
        bottom: ${Wt};
        width: 20px;
        height: 3px;
    }

    :host([orientation="vertical"]) ::slotted([role="tab"][aria-selected="true"])::after {
        left: ${Wt};
        width: 3px;
        height: calc((${st} / 2) * 1px);
    }
`;var JR={horizontal:"[orientation='horizontal']",vertical:"[orientation='vertical']"},ZR={tablist:"tablist",tabpanel:"tabpanel"},iv={interactivity:C.never,conditions:JR,parts:ZR},rv=e=>_p();var tF=[T,ev,ov];function sv(e,t){let o=S.assembleStyles(tF,iv,t);return yo.compose({name:`${e.prefix}-tabs`,template:t?.template?.(e)??rv(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var nv=[[{},ct]];var Ic=class extends $t{focus(t){this.control.focus(t)}};var av=y`
    :host {
        display: inline-flex;
        flex-direction: column;
        vertical-align: bottom;
        user-select: none;
    }

    .label.label__hidden {
        display: none;
        visibility: hidden;
    }

    .label {
        align-self: start;
        cursor: pointer;
    }

    .control {
        font: inherit;
        resize: none;
    }

    :host([resize="both"]) .control {
        resize: both;
    }

    :host([resize="horizontal"]) .control {
        resize: horizontal;
    }

    :host([resize="vertical"]) .control {
        resize: vertical;
    }
`,lv=y`
`;var eF={},oF={label:"label",control:"control"},Zn={interactivity:C.disabledAttribute,conditions:eF,parts:oF,focus:U.partFocused("control")},cv=e=>Hp();var iF=[T,av,lv];function dv(e,t){let o=S.assembleStyles(iF,Zn,t);return Ic.compose({name:`${e.prefix}-text-area`,template:t?.template?.(e)??cv(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var pv=[[{},b.compose([ft],{gap:Y.verticalGap})],[{part:Zn.parts.label},_i],[{part:Zn.parts.control},Pi]];var Ac=class extends Ut{focus(t){this.control.focus(t)}};var hv=y`
    :host {
        display: inline-flex;
        flex-direction: column;
    }

    .label {
        align-self: start;
        cursor: pointer;
    }

    .label.label__hidden {
        display: none;
        visibility: hidden;
    }

    .root {
        display: flex;
        align-items: center;
    }

    .control {
        width: 100%;
        /* reset */
        background: transparent;
        border: none;
        color: inherit;
        font: inherit;
        padding: unset;
    }


    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }
`,uv=y`
`;var rF={},sF={label:"label",root:"root",control:"control"},Hs={interactivity:C.disabledAttribute,conditions:rF,parts:sF,focus:U.partWithin("root","control")},mv=e=>Vp();var nF=[T,hv,uv];function fv(e,t){let o=S.assembleStyles(nF,Hs,t);return Ac.compose({name:`${e.prefix}-text-field`,template:t?.template?.(e)??mv(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var yv=[[{},b.compose([ft],{gap:Y.verticalGap})],[{part:Hs.parts.label},_i],[{part:Hs.parts.root},nc],[{part:Hs.parts.control},oc]];var gv=y`
    :host {
        display: inline-flex;
        align-items: center;
    }

    :host([orientation="vertical"]) {
        flex-direction: column;
    }

    .positioning-region {
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
    }

    :host([orientation="vertical"]) .positioning-region {
        flex-direction: column;
        align-items: start;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }
`,bv=y`
`;var aF={horizontal:"[orientation='horizontal']",vertical:"[orientation='vertical']"},lF={positioningRegion:"positioning-region"},$c={interactivity:C.never,conditions:aF,parts:lF},xv=e=>Np();var cF=[T,gv,bv];function vv(e,t){let o=S.assembleStyles(cF,$c,t);return Qe.compose({name:`${e.prefix}-toolbar`,template:t?.template?.(e)??xv(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Sv=[[{},b.fromProperties({foregroundFill:he,gap:Y.horizontalGap})],[{part:$c.parts.positioningRegion},b.fromProperties({gap:Y.horizontalGap})]];var wv=y`
    :host {
        height: fit-content;
        width: fit-content;
        white-space: nowrap;
        visibility: hidden;
    }

    :host([visible]) {
        visibility: visible;
    }
`,kv=y`
    :host([visible]) {
        transition: visibility 0s 0s linear, opacity 50ms 0.5s linear;
        opacity: 1;
    }

    :host(:not([visible])) {
        transition: visibility 0s 0.5s, opacity 50ms linear;
        opacity: 0;
    }

    :host([show="true"][visible]) {
        transition: none;
    }
`;var dF={show:"[show='true']",visible:"[visible]"},pF={},Cv={interactivity:C.never,conditions:dF,parts:pF},Tv=e=>Gp();var hF=[T,wv,kv];function Dv(e,t){let o=S.assembleStyles(hF,Cv,t);return Oe.compose({name:`${e.prefix}-tooltip`,template:t?.template?.(e)??Tv(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Rv=[[{},b.compose([tt,te,ct,zf],{...Cl.all(ke),backgroundFill:pe})]];var uF=de.create("tree-item-expand-collapse-hover").withDefault(e=>{let t=e(Yl);return t.evaluate(e,{reference:t.evaluate(e).hover}).hover}),mF=de.create("tree-item-expand-collapse-selected-hover").withDefault(e=>{let t=e(Jp);return e(Yl).evaluate(e,{reference:t.evaluate(e).rest}).hover}),Fv=y`
    :host {
        position: relative;
        display: block;
        contain: layout style;
        cursor: pointer;
    }

    .control {
        position: relative;
        display: flex;
        align-items: center;
        white-space: nowrap;
    }

    :host([nested]) .control {
        padding-inline-start: calc(8px + var(--expand-collapse-button-size) + var(--tree-item-nested-width, 0px));
    }
    
    .expand-collapse-button {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: absolute;
        transform: translateX(calc(-100% - 4px));
    }

    slot[name="expand-collapse-icon"] * {
        transition: transform 0.1s linear;
        transform-origin: center;
        transform: rotate(0deg);
        pointer-events: none;
    }

    .content {
        flex-grow: 1;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }
    
    .items {
        display: none;
        --tree-item-nested-width-slotted: calc(16px + var(--tree-item-nested-width, 0px));
    }

    :host([expanded]) slot[name="expand-collapse-icon"] * {
        transform: rotate(45deg);
    }

    :host([expanded]) > .items {
        display: block;
    }

    ::slotted(adaptive-tree-item) {
        --tree-item-nested-width: var(--tree-item-nested-width-slotted, 0px);
    }
`,Iv=y`
    :host {
        --expand-collapse-button-size: calc((12 + 6 + 6) * 1px);
    }

    .expand-collapse-button {
        width: var(--expand-collapse-button-size);
        height: var(--expand-collapse-button-size);
        padding: 4px;
    }

    .expand-collapse-button:hover {
        background: ${uF};
    }

    :host([selected]) .control {
        background: ${pe};
    }

    :host([selected]) .expand-collapse-button:hover {
        background: ${mF};
    }

    :host([selected])::after {
        content: "";
        display: block;
        position: absolute;
        top: calc((${st} / 4) * 1px);
        left: ${Wt};
        width: 3px;
        height: calc((${st} / 2) * 1px);
        border-radius: ${Ze};
        background: ${Ss};
    }
`;var Er={expandCollapse:"tree-item-expand-collapse-icon"},fF={selected:"[aria-selected='true']"},yF={control:"control",expandCollapseButton:"expand-collapse-button",content:"content",items:"items"},Oc={interactivity:C.disabledAttribute,conditions:fF,parts:yF,focus:U.hostChildFocused("control")},Av=e=>{let t={expandCollapseGlyph:e.statics.get(Er.expandCollapse)};return m`
            <template
                role="treeitem"
                slot="${o=>o.isNestedItem()?"item":void 0}"
                tabindex="-1"
                aria-expanded="${o=>o.childItems&&o.childItemLength>0?o.expanded:void 0}"
                aria-selected="${o=>o.selected}"
                aria-disabled="${o=>o.disabled}"
                @focusin="${(o,i)=>o.handleFocus(i.event)}"
                @focusout="${(o,i)=>o.handleBlur(i.event)}"
                ${Mo({property:"childItems",filter:Rt()})}
            >
                <div class="control" part="control">
                    ${X(o=>o.childItems&&o.childItemLength>0,m`
                            <div
                                aria-hidden="true"
                                class="expand-collapse-button"
                                part="expand-collapse-button"
                                @click="${(o,i)=>o.handleExpandCollapseButtonClick(i.event)}"
                                ${z("expandCollapseButton")}
                            >
                                <slot name="expand-collapse-icon">
                                    ${N(t.expandCollapseGlyph)}
                                </slot>
                            </div>
                        `)}
                    ${Z(t)}
                    <span class="content" part="content">
                        <slot></slot>
                    </span>
                    ${J(t)}
                </div>
                ${X(o=>o.childItems&&o.childItemLength>0&&o.expanded,m`
                        <div role="group" class="items" part="items">
                            <slot name="item" ${M("items")}></slot>
                        </div>
                    `)}
            </template>
        `};var gF=[T,Fv,Dt,Iv];function $v(e,t){t?.statics&&(e.statics.has(Er.expandCollapse)||e.statics.set(Er.expandCollapse,t.statics[Er.expandCollapse]));let o=S.assembleStyles(gF,Oc,t);return ht.compose({name:`${e.prefix}-tree-item`,template:t?.template?.(e)??Av(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Ov=[[{part:Oc.parts.control},Le]];var Ev=y`
    :host {
        display: flex;
        flex-direction: column;
        min-width: fit-content;
    }
`,Mv=y``;var bF={},xF={},Pv={interactivity:C.never,conditions:bF,parts:xF},Lv=e=>jp();var vF=[T,Ev,Mv];function _v(e,t){let o=S.assembleStyles(vF,Pv,t);return lr.compose({name:`${e.prefix}-tree-view`,template:t?.template?.(e)??Lv(e),styles:o,registry:e.registry,elementOptions:t?.elementOptions,shadowOptions:t?.shadowOptions})}var Hv=[];var zv=Yf(w,{styleModules:Qf});var Mr=(e,t="stroked")=>`<svg class="${t}" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="${e}" ${t==="filled"?'stroke="none"':'fill="none"'}/>
</svg>`,Ec=Mr("M3 9L5.5 11.5L13.5 4"),Bv=Mr("M2.5 8H13.5"),Mc=Mr("M12.5 8a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z","filled"),zi=Mr("M3.5 6L8 10.5L12.5 6"),Vv=Mr("M10 12.5L5.5 8L10 3.5"),Bi=Mr("M6 3.5L10.5 8L6 12.5"),Pc=Mr("M3.5 10L8 5.5L12.5 10");var Nv=ey(w,{statics:{[_e.collapsed]:zi,[_e.expanded]:Pc},styleModules:oy});var Gv=ny(w,{styleModules:ay});var jv=zn(w,{styleModules:hy});var Uv=gy(w,{styleModules:by});var qv=wy(w,{styleModules:ky});var Wv=Fy(w,{styleModules:Iy});var Kv=Ey(w,{statics:{[Cr.separator]:Bi},styleModules:My});var Xv=Hy(w,{styleModules:zy,shadowOptions:{delegatesFocus:!0}});var Yv=ig(w,{styleModules:rg});var Qv=cg(w,{styleModules:dg});var Jv=mg(w,{statics:{[He.checked]:Ec,[He.indeterminate]:Bv},styleModules:fg});var Zv=xg(w,{statics:{[Fr.indicator]:zi},styleModules:vg});var tS=Vn(w,{styleModules:eg});var eS=Tr(w,{styleModules:Uy});var oS=Dr(w,{styleModules:Yy});var iS=Cg(w,{styleModules:Tg});var rS=Ig(w,{styleModules:Ag});var sS=Mg(w,{styleModules:Pg});var nS=Un(w,{statics:{[ze.previous]:Vv,[ze.next]:Bi},styleModules:Bg});var aS=Ug(w,{styleModules:qg});var lS=Qg(w,{styleModules:Jg});var cS=ob(w,{styleModules:ib});var dS=lb(w,{styleModules:cb});var pS=mb(w,{statics:{[Kt.checkbox]:Ec,[Kt.radio]:Mc,[Kt.submenu]:Bi},styleModules:fb});var hS=xb(w,{statics:{[Be.stepDown]:zi,[Be.stepUp]:Pc},styleModules:vb});var uS=Kb(w,{styleModules:Yb});var mS=qn(w,{styleModules:Rb});var fS=Kn(w,{styleModules:_b});var yS=Wn(w,{styleModules:Ob});var gS=Xn(w,{styleModules:Vb});var bS=ex(w,{styleModules:ox});var xS=Yn(w,{styleModules:qb});var vS=nx(w,{statics:{[Ar.checked]:Mc},styleModules:ax});var SS=px(w,{styleModules:hx});var wS=yx(w,{styleModules:gx});var kS=Sx(w,{statics:{[Or.indicator]:zi},styleModules:wx});var CS=Dx(w,{styleModules:Rx});var TS=$x(w,{styleModules:Ox});var DS=Lx(w,{styleModules:_x});var RS=Vx(w,{styleModules:Nx});var FS=Wx(w,{styleModules:Kx});var IS=Zx(w,{styleModules:tv});var AS=sv(w,{styleModules:nv});var $S=dv(w,{styleModules:pv});var OS=fv(w,{styleModules:yv});var ES=vv(w,{styleModules:Sv,shadowOptions:{delegatesFocus:!0}});var MS=Dv(w,{styleModules:Rv});var PS=$v(w,{statics:{[Er.expandCollapse]:Bi},styleModules:Ov});var LS=_v(w,{styleModules:Hv});var _S={accordionDefinition:zv,accordionItemDefinition:Nv,anchorDefinition:Gv,anchoredRegionDefinition:jv,avatarDefinition:Uv,badgeDefinition:qv,breadcrumbDefinition:Wv,breadcrumbItemDefinition:Kv,buttonDefinition:Xv,calendarDefinition:Yv,cardDefinition:Qv,checkboxDefinition:Jv,comboboxDefinition:Zv,dataGridDefinition:tS,dataGridCellDefinition:eS,dataGridRowDefinition:oS,dialogDefinition:iS,disclosureDefinition:rS,dividerDefinition:sS,flipperDefinition:nS,horizontalScrollDefinition:aS,listboxDefinition:lS,listboxOptionDefinition:cS,menuDefinition:dS,menuItemDefinition:pS,numberFieldDefinition:hS,pickerDefinition:uS,pickerListDefinition:mS,pickerListItemDefinition:fS,pickerMenuDefinition:yS,pickerMenuOptionDefinition:gS,progressDefinition:bS,progressRingDefinition:xS,radioDefinition:vS,radioGroupDefinition:SS,searchDefinition:wS,selectDefinition:kS,skeletonDefinition:CS,sliderDefinition:TS,sliderLabelDefinition:DS,switchDefinition:RS,tabDefinition:FS,tabPanelDefinition:IS,tabsDefinition:AS,textAreaDefinition:$S,textFieldDefinition:OS,toolbarDefinition:ES,tooltipDefinition:MS,treeItemDefinition:PS,treeViewDefinition:LS};de.registerDefaultStyleTarget();w.defineComponents(_S);function Gct(e){e.registerCustomEventType("accordionchange",{browserEventName:"change",createEventArgs:t=>({activeId:t.detail})})}export{Gct as afterWebStarted};
//# sourceMappingURL=AdaptiveBlazor.lib.module.js.map
