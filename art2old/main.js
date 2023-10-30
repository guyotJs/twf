(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const b of r.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&n(b)}).observe(document,{childList:!0,subtree:!0});function i(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=i(l);fetch(l.href,r)}})();function _(){}function P(e){return e()}function O(){return Object.create(null)}function w(e){e.forEach(P)}function H(e){return typeof e=="function"}function M(e,s){return e!=e?s==s:e!==s||e&&typeof e=="object"||typeof e=="function"}function F(e){return Object.keys(e).length===0}function h(e,s,i){e.insertBefore(s,i||null)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function v(){return I(" ")}function g(e,s,i){i==null?e.removeAttribute(s):e.getAttribute(s)!==i&&e.setAttribute(s,i)}function R(e){return Array.from(e.childNodes)}let T;function k(e){T=e}const y=[],L=[];let x=[];const q=[],V=Promise.resolve();let $=!1;function W(){$||($=!0,V.then(A))}function E(e){x.push(e)}const N=new Set;let j=0;function A(){if(j!==0)return;const e=T;do{try{for(;j<y.length;){const s=y[j];j++,k(s),z(s.$$)}}catch(s){throw y.length=0,j=0,s}for(k(null),y.length=0,j=0;L.length;)L.pop()();for(let s=0;s<x.length;s+=1){const i=x[s];N.has(i)||(N.add(i),i())}x.length=0}while(y.length);for(;q.length;)q.pop()();$=!1,N.clear(),k(e)}function z(e){if(e.fragment!==null){e.update(),w(e.before_update);const s=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,s),e.after_update.forEach(E)}}function B(e){const s=[],i=[];x.forEach(n=>e.indexOf(n)===-1?s.push(n):i.push(n)),i.forEach(n=>n()),x=s}const C=new Set;function G(e,s){e&&e.i&&(C.delete(e),e.i(s))}function K(e,s,i,n){const{fragment:l,after_update:r}=e.$$;l&&l.m(s,i),n||E(()=>{const b=e.$$.on_mount.map(P).filter(H);e.$$.on_destroy?e.$$.on_destroy.push(...b):w(b),e.$$.on_mount=[]}),r.forEach(E)}function D(e,s){const i=e.$$;i.fragment!==null&&(B(i.after_update),w(i.on_destroy),i.fragment&&i.fragment.d(s),i.on_destroy=i.fragment=null,i.ctx=[])}function J(e,s){e.$$.dirty[0]===-1&&(y.push(e),W(),e.$$.dirty.fill(0)),e.$$.dirty[s/31|0]|=1<<s%31}function U(e,s,i,n,l,r,b,m=[-1]){const a=T;k(e);const t=e.$$={fragment:null,ctx:[],props:r,update:_,not_equal:l,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(a?a.$$.context:[])),callbacks:O(),dirty:m,skip_bound:!1,root:s.target||a.$$.root};b&&b(t.root);let p=!1;if(t.ctx=i?i(e,s.props||{},(f,o,...u)=>{const S=u.length?u[0]:o;return t.ctx&&l(t.ctx[f],t.ctx[f]=S)&&(!t.skip_bound&&t.bound[f]&&t.bound[f](S),p&&J(e,f)),o}):[],t.update(),p=!0,w(t.before_update),t.fragment=n?n(t.ctx):!1,s.target){if(s.hydrate){const f=R(s.target);t.fragment&&t.fragment.l(f),f.forEach(c)}else t.fragment&&t.fragment.c();s.intro&&G(e.$$.fragment),K(e,s.target,s.anchor,s.customElement),A()}k(a)}class Y{$destroy(){D(this,1),this.$destroy=_}$on(s,i){if(!H(i))return _;const n=this.$$.callbacks[s]||(this.$$.callbacks[s]=[]);return n.push(i),()=>{const l=n.indexOf(i);l!==-1&&n.splice(l,1)}}$set(s){this.$$set&&!F(s)&&(this.$$.skip_bound=!0,this.$$set(s),this.$$.skip_bound=!1)}}function Z(e){let s,i,n,l,r,b,m;return{c(){s=d("p"),s.innerHTML=`<top class="svelte-1bmiisj"><em>TheWestonFiles</em></top><br/> 
    <topSub class="svelte-1bmiisj">The <b>Wikipedia</b> for <em>Nerds</em></topSub> 
  `,i=d("br"),n=v(),l=d("p"),l.innerHTML="<em>This article has very<br/> little <b>Information</b>  </em>",r=d("br"),b=v(),m=d("div"),m.innerHTML=`<h1 class="svelte-1bmiisj">Nynorn</h1><br/> 
    <box style="float:left;width:136px;height:165px;border:1px solid black;background-color:rgb(238, 238, 238);margin-right:5px;"><p style="margin-top:10px;" class="bc-text-align svelte-1bmiisj"><b>Nynorn</b><br/>Hjetmål</p> 
      <p class="svelte-1bmiisj"> <a class="svelte-1bmiisj">Family: </a><span>Germanic</span></p> 
      <p class="svelte-1bmiisj"> <a class="svelte-1bmiisj">Early Form: </a><span>Norn</span></p> 
      <p class="svelte-1bmiisj"> <a class="svelte-1bmiisj">Script: </a><span>Latin</span></p></box> 
    <p class="svelte-1bmiisj">Nynorn is a project that aims to revive the <a href="https://en.wikipedia.org/wiki/Norn_language" class="svelte-1bmiisj">Norn language</a>. <a href="https://en.wikipedia.org/wiki/Norn_language" class="svelte-1bmiisj">Norn</a> was the language spoken in the islands of <a href="https://en.wikipedia.org/wiki/Shetland" class="svelte-1bmiisj">Shetland</a> and <a href="https://en.wikipedia.org/wiki/Orkney" class="svelte-1bmiisj">Orkney</a>.<a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">[1]</a> Nynorn as a project was started around 2006 and aims to recreate the <a href="https://en.wikipedia.org/wiki/Shetland" class="svelte-1bmiisj">Shetland</a> dialect with few plans to revive the <a href="https://en.wikipedia.org/wiki/Orkney" class="svelte-1bmiisj">Orkney</a> dialect.<a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">[1]</a> Nynorn as a project is still in the very early stages and is very experimental.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></p> 
    <h1 class="svelte-1bmiisj">Phonetics</h1><br/> 
    <p class="svelte-1bmiisj">The alphabet of Nynorn consists of 24 letters.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></p><br/>
    Various letters combination sounds.<br/><br/> 
    <ul style="margin-left:5%;"><li>hj sounds similar to the English j.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></li> 
      <li>sj sounds similar to the English sh.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></li> 
      <li>tsj sounds similar to the English ch.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></li> 
    </ul><br/> 
    <b>Alphabet</b> 
    <table class="bc-border svelte-1bmiisj"><tr class="bc-border"><th class="grid svelte-1bmiisj">Aa</th> 
        <th class="grid svelte-1bmiisj">Bb</th> 
        <th class="grid svelte-1bmiisj">Dd</th> 
        <th class="grid svelte-1bmiisj">Ðð</th> 
        <th class="grid svelte-1bmiisj">Ee</th> 
        <th class="grid svelte-1bmiisj">Ff</th> 
        <th class="grid svelte-1bmiisj">Gg</th> 
        <th class="grid svelte-1bmiisj">Hh</th></tr> 
      <tr class="bc-border"><th class="grid svelte-1bmiisj">Ii</th> 
        <th class="grid svelte-1bmiisj">Jj</th> 
        <th class="grid svelte-1bmiisj">Kk</th> 
        <th class="grid svelte-1bmiisj">Ll</th> 
        <th class="grid svelte-1bmiisj">Mm</th> 
        <th class="grid svelte-1bmiisj">Nn</th> 
        <th class="grid svelte-1bmiisj">Oo</th> 
        <th class="grid svelte-1bmiisj">Pp</th></tr> 
      <tr class="bc-border"><th class="grid svelte-1bmiisj">Rr</th> 
        <th class="grid svelte-1bmiisj">Ss</th> 
        <th class="grid svelte-1bmiisj">Tt</th> 
        <th class="grid svelte-1bmiisj">Uu</th> 
        <th class="grid svelte-1bmiisj">Vv</th> 
        <th class="grid svelte-1bmiisj">Yy</th> 
        <th class="grid svelte-1bmiisj">Øø</th> 
        <th style="gridEnd">Åå</th></tr> 
    </table><br/>
    The capital Ð is not a grammatically used letter and is only included in the alphabet for completeness.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a><br/><br/> 
    <h1 class="svelte-1bmiisj"><src class="svelte-1bmiisj">Sources</src></h1><br/>
    1.<a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">^</a> Zui (2021-07-24). <a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">&quot;Reviving a &quot;lost&quot; Viking language — The Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. The Language Closet. Retrieved 2022-10-17.<br/> 
    <br/>2.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">^</a>  <a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">&quot;Intoduction into the Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. nornlanguage.x10.mx. Retrieved 2022-10-17.`,g(s,"align","center"),g(s,"class","svelte-1bmiisj"),g(l,"align","center"),g(l,"class","svelte-1bmiisj"),g(m,"class","mobile svelte-1bmiisj")},m(a,t){h(a,s,t),h(a,i,t),h(a,n,t),h(a,l,t),h(a,r,t),h(a,b,t),h(a,m,t)},d(a){a&&c(s),a&&c(i),a&&c(n),a&&c(l),a&&c(r),a&&c(b),a&&c(m)}}}function Q(e){let s,i,n,l,r,b,m,a,t,p,f;return{c(){s=d("articleExtra"),s.innerHTML='<p align="center" class="svelte-1bmiisj">This article has very<br/> little <b>Information</b></p>',i=v(),n=d("top"),n.innerHTML="<em>TheWestonFiles</em>",l=d("br"),r=v(),b=d("topSub"),b.innerHTML="The <b>Wikipedia</b> for <em>Nerds</em>",m=v(),a=d("br"),t=d("br"),p=v(),f=d("main"),f.innerHTML=`<h1 class="svelte-1bmiisj">Nynorn</h1><br/> 
    <box style="float:right;width:200px;height:180px;border:1px solid black;background-color:rgb(238, 238, 238);"><p style="margin-top:10px;" class="bc-text-align svelte-1bmiisj"><b>Nynorn</b><br/>
      Hjetmål</p> 
    <p class="svelte-1bmiisj"><a class="svelte-1bmiisj"> Family</a><span>      Germanic</span> 
    </p><br/> 
    <p class="svelte-1bmiisj"> <a class="svelte-1bmiisj">Early Form</a><span>      Norn</span> 
    </p><br/> 
    <p class="svelte-1bmiisj"> <a class="svelte-1bmiisj">Writing System</a><span>     Latin</span></p></box> 
    <p class="svelte-1bmiisj">Nynorn is a project that aims to revive the <a href="https://en.wikipedia.org/wiki/Norn_language" class="svelte-1bmiisj">Norn language</a>. <a href="https://en.wikipedia.org/wiki/Norn_language" class="svelte-1bmiisj">Norn</a> was the language spoken in the islands of <a href="https://en.wikipedia.org/wiki/Shetland" class="svelte-1bmiisj">Shetland</a> and <a href="https://en.wikipedia.org/wiki/Orkney" class="svelte-1bmiisj">Orkney</a>.<a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">[1]</a> Nynorn as a project was started around 2006 and aims to recreate the <a href="https://en.wikipedia.org/wiki/Shetland" class="svelte-1bmiisj">Shetland</a> dialect with few plans to revive the <a href="https://en.wikipedia.org/wiki/Orkney" class="svelte-1bmiisj">Orkney</a> dialect.<a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">[1]</a> Nynorn as a project is still in the very early stages and is very experimental.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></p> 
    <h1 class="fix svelte-1bmiisj">Phonetics</h1><br/> 
    <p class="svelte-1bmiisj">The alphabet of Nynorn consists of 24 letters.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></p><br/>
    Various letters combination sounds.<br/><br/> 
    <ul style="margin-left:5%;"><li>hj sounds similar to the English j.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></li> 
      <li>sj sounds similar to the English sh.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></li> 
      <li>tsj sounds similar to the English ch.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a></li> 
    </ul><br/> 
    <b>Alphabet</b> 
    <table class="bc-border svelte-1bmiisj"><tr class="bc-border"><th class="grid svelte-1bmiisj">Aa</th> 
        <th class="grid svelte-1bmiisj">Bb</th> 
        <th class="grid svelte-1bmiisj">Dd</th> 
        <th class="grid svelte-1bmiisj">Ðð</th> 
        <th class="grid svelte-1bmiisj">Ee</th> 
        <th class="gridEnd svelte-1bmiisj">Ff</th> 
        <th class="grid svelte-1bmiisj">Gg</th> 
        <th class="grid svelte-1bmiisj">Hh</th> 
        <th class="grid svelte-1bmiisj">Ii</th> 
        <th class="grid svelte-1bmiisj">Jj</th> 
        <th class="grid svelte-1bmiisj">Kk</th> 
        <th class="gridEnd svelte-1bmiisj">Ll</th> 
        <th class="grid svelte-1bmiisj">Mm</th> 
        <th class="grid svelte-1bmiisj">Nn</th> 
        <th class="grid svelte-1bmiisj">Oo</th> 
        <th class="grid svelte-1bmiisj">Pp</th> 
        <th class="grid svelte-1bmiisj">Rr</th> 
        <th class="gridEnd svelte-1bmiisj">Ss</th> 
        <th class="grid svelte-1bmiisj">Tt</th> 
        <th class="grid svelte-1bmiisj">Uu</th> 
        <th class="grid svelte-1bmiisj">Vv</th> 
        <th class="grid svelte-1bmiisj">Yy</th> 
        <th class="grid svelte-1bmiisj">Øø</th> 
        <th style="gridEnd">Åå</th></tr> 
    </table><br/>
    The capital Ð is not a grammatically used letter and is only included in the alphabet for completeness.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">[2]</a><br/><br/> 
    <h1 class="svelte-1bmiisj"><src class="svelte-1bmiisj">Sources</src></h1><br/>
     1.<a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">^</a> Zui (2021-07-24). <a href="https://thelanguagecloset.com/2021/07/24/reviving-a-lost-viking-language-the-nynorn-project/" class="svelte-1bmiisj">&quot;Reviving a &quot;lost&quot; Viking language — The Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. The Language Closet. Retrieved 2022-10-17.<br/>
     2.<a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">^</a>  <a href="https://nornlanguage.x10.mx/index.php?nynorn" class="svelte-1bmiisj">&quot;Intoduction into the Nynorn Project&quot; <i class="fa fa-external-link" style="font-size:12px;"></i></a>. nornlanguage.x10.mx. Retrieved 2022-10-17.`,g(s,"class","svelte-1bmiisj"),g(n,"class","svelte-1bmiisj"),g(b,"class","svelte-1bmiisj"),g(f,"class","svelte-1bmiisj")},m(o,u){h(o,s,u),h(o,i,u),h(o,n,u),h(o,l,u),h(o,r,u),h(o,b,u),h(o,m,u),h(o,a,u),h(o,t,u),h(o,p,u),h(o,f,u)},d(o){o&&c(s),o&&c(i),o&&c(n),o&&c(l),o&&c(r),o&&c(b),o&&c(m),o&&c(a),o&&c(t),o&&c(p),o&&c(f)}}}function X(e){let s,i,n,l,r;function b(t,p){return t[0]?Z:Q}let m=b(e),a=m(e);return{c(){s=d("link"),i=v(),a.c(),n=v(),l=d("br"),r=d("br"),g(s,"rel","stylesheet"),g(s,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")},m(t,p){h(t,s,p),h(t,i,p),a.m(t,p),h(t,n,p),h(t,l,p),h(t,r,p)},p(t,[p]){m!==(m=b(t))&&(a.d(1),a=m(t),a&&(a.c(),a.m(n.parentNode,n)))},i:_,o:_,d(t){t&&c(s),t&&c(i),a.d(t),t&&c(n),t&&c(l),t&&c(r)}}}function ee(e,s,i){let n=!1;return window.innerWidth<window.innerHeight&&(n=!0),[n]}class se extends Y{constructor(s){super(),U(this,s,ee,X,M,{})}}new se({target:document.getElementById("app")});
