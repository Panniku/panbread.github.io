import{ae as X,p as z,a6 as w,l as x,ac as F,m as G,g as H,N as J,a4 as K,a5 as M,a7 as C,u as I,af as P,a8 as B,q as L,r as Q,ag as R,ah as O,h as D,ai as W,B as Z,d as S,aj as $,ak as j,al as ee,am as ae,a2 as re,an as ne,ao as le,a9 as fe,k as ie}from"./Co9Y63dr.js";function de(i,e){return e}function se(i,e,a,u){for(var d=[],v=e.length,t=0;t<v;t++)j(e[t].e,d,!0);var g=v>0&&d.length===0&&a!==null;if(g){var c=a.parentNode;ee(c),c.append(a),u.clear(),y(i,e[0].prev,e[v-1].next)}ae(d,()=>{for(var _=0;_<v;_++){var r=e[_];g||(u.delete(r.k),y(i,r.prev,r.next)),re(r.e,!g)}})}function _e(i,e,a,u,d,v=null){var t=i,g={items:new Map,first:null};{var c=i;t=x?w(F(c)):c.appendChild(X())}x&&G();var _=null,r=!1,o=J(()=>{var n=a();return ie(n)?n:n==null?[]:O(n)});z(()=>{var n=H(o),s=n.length;if(r&&s===0)return;r=s===0;let l=!1;if(x){var A=t.data===K;A!==(s===0)&&(t=M(),w(t),C(!1),l=!0)}if(x){for(var p=null,f,h=0;h<s;h++){if(I.nodeType===8&&I.data===P){t=I,l=!0,C(!1);break}var m=n[h],T=u(m,h);f=V(I,g,p,null,m,T,h,d,e,a),g.items.set(T,f),p=f}s>0&&w(M())}x||te(n,g,t,d,e,u,a),v!==null&&(s===0?_?B(_):_=L(()=>v(t)):_!==null&&Q(_,()=>{_=null})),l&&C(!0),H(o)}),x&&(t=I)}function te(i,e,a,u,d,v,t){var g=i.length,c=e.items,_=e.first,r=_,o,n=null,s=[],l=[],A,p,f,h;for(h=0;h<g;h+=1){if(A=i[h],p=v(A,h),f=c.get(p),f===void 0){var m=r?r.e.nodes_start:a;n=V(m,e,n,n===null?e.first:n.next,A,p,h,u,d,t),c.set(p,n),s=[],l=[],r=n.next;continue}if(ue(f,A,h),f.e.f&R&&B(f.e),f!==r){if(o!==void 0&&o.has(f)){if(s.length<l.length){var T=l[0],E;n=T.prev;var b=s[0],k=s[s.length-1];for(E=0;E<s.length;E+=1)q(s[E],T,a);for(E=0;E<l.length;E+=1)o.delete(l[E]);y(e,b.prev,k.next),y(e,n,b),y(e,k,T),r=T,n=k,h-=1,s=[],l=[]}else o.delete(f),q(f,r,a),y(e,f.prev,f.next),y(e,f,n===null?e.first:n.next),y(e,n,f),n=f;continue}for(s=[],l=[];r!==null&&r.k!==p;)r.e.f&R||(o??(o=new Set)).add(r),l.push(r),r=r.next;if(r===null)continue;f=r}s.push(f),n=f,r=f.next}if(r!==null||o!==void 0){for(var N=o===void 0?[]:O(o);r!==null;)r.e.f&R||N.push(r),r=r.next;var Y=N.length;if(Y>0){var U=g===0?a:null;se(e,N,U,c)}}D.first=e.first&&e.first.e,D.last=n&&n.e}function ue(i,e,a,u){W(i.v,e),i.i=a}function V(i,e,a,u,d,v,t,g,c,_){var r=(c&ne)!==0,o=(c&le)===0,n=r?o?Z(d):S(d):d,s=c&$?S(t):t,l={i:s,v:n,k:v,a:null,e:null,prev:a,next:u};try{return l.e=L(()=>g(i,n,s,_),x),l.e.prev=a&&a.e,l.e.next=u&&u.e,a===null?e.first=l:(a.next=l,a.e.next=l.e),u!==null&&(u.prev=l,u.e.prev=l.e),l}finally{}}function q(i,e,a){for(var u=i.next?i.next.e.nodes_start:a,d=e?e.e.nodes_start:a,v=i.e.nodes_start;v!==u;){var t=fe(v);d.before(v),v=t}}function y(i,e,a){e===null?i.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{_e as e,de as i};
