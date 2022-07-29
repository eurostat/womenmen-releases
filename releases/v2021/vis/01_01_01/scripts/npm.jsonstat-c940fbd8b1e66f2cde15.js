(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{A6mo:function(t,e){function n(t){return new n.jsonstat(t)}var n;(n=n||{}).version="0.13.13",function(){"use strict";function t(t){return"[object Array]"===Object.prototype.toString.call(t)}function e(e){var i,r,l,s,o=function(e,n){var i,r=[];if("string"==typeof e&&(e=[e]),t(e)){if(e.length===n)return e;if(1===e.length){for(i=0;n>i;i++)r.push(e[0]);return r}}for(i=0;n>i;i++){var l=void 0===e[i]?null:e[i];r.push(l)}return r};if(this.length=0,this.id=[],null!==e&&void 0!==e)switch(this.class=e.class||"bundle",this.class){case"bundle":var a=[],u=0;if(this.error=null,this.length=0,"string"==typeof e&&console.log("Module does not accept a URI string, must be an object."),null===e||"object"!=typeof e)return void(this.class=null);if(e.hasOwnProperty("error"))return void(this.error=e.error);if("dataset"===e.class||"collection"===e.class||"dimension"===e.class)return n(e);for(r in e)u++,a.push(r);this.__tree__=e,this.length=u,this.id=a;break;case"dataset":e.hasOwnProperty("__tree__")?this.__tree__=i=e.__tree__:this.__tree__=i=e,this.label=i.label||null,this.note=i.note||null,this.link=i.link||null,this.href=i.href||null,this.updated=i.updated||null,this.source=i.source||null,this.extension=i.extension||null;var h,f=0,c=i.size||i.dimension&&i.dimension.size;if(this.size=c,i.hasOwnProperty("value")&&t(i.value))f=i.value.length;else{var d=1;for(h=c.length;h--;)d*=c[h];f=d}if(this.value=o(i.value,f),this.status=i.hasOwnProperty("status")?o(i.status,f):null,i.hasOwnProperty("dimension")){var v=i.dimension,p=i.role||!i.version&&v.role||null,g=i.id||v.id,y=c.length,b=function(t){p.hasOwnProperty(t)||(p[t]=null)};if(!t(g)||!t(c)||g.length!=y)return;if(this.length=y,this.id=g,p&&(b("time"),b("geo"),b("metric"),b("classification")),p&&null===p.classification){var _=[],m=["time","geo","metric"],x=function(t,e){for(var n=e.length;n--;)if(t===e[n])return!0;return!1};for(h=0;3>h;h++){var w=p[m[h]];null!==w&&(_=_.concat(w))}for(p.classification=[],h=0;y>h;h++)x(g[h],_)||p.classification.push(g[h]);0===p.classification.length&&(p.classification=null)}this.role=p,this.n=f;for(var k=0,O=this.length;O>k;k++)if(v[g[k]].category.hasOwnProperty("index")){if(t(v[g[k]].category.index)){var D={},j=v[g[k]].category.index;for(l=j.length,s=0;l>s;s++)D[j[s]]=s;v[g[k]].category.index=D}}else{var z=0;for(r in v[g[k]].category.index={},v[g[k]].category.label)v[g[k]].category.index[r]=z++}}else this.length=0;break;case"dimension":if(!e.hasOwnProperty("__tree__"))return n({version:"2.0",class:"dataset",dimension:{d:e},id:["d"],size:[function(e){var n=void 0===e.index?e.label:e.index;return t(n)?n.length:Object.keys(n).length}(e.category)],value:[null]}).Dimension(0);var P=[],E=(i=e.__tree__).category;if(!i.hasOwnProperty("category"))return;if(!E.hasOwnProperty("label"))for(r in E.label={},E.index)E.label[r]=r;for(r in E.index)P[E.index[r]]=r;this.__tree__=i,this.label=i.label||null,this.note=i.note||null,this.link=i.link||null,this.href=i.href||null,this.id=P,this.length=P.length,this.role=e.role,this.hierarchy=E.hasOwnProperty("child"),this.extension=i.extension||null;break;case"category":var C=e.child;this.id=C,this.length=null===C?0:C.length,this.index=e.index,this.label=e.label,this.note=e.note||null,this.unit=e.unit,this.coordinates=e.coord;break;case"collection":if(this.length=0,this.label=e.label||null,this.note=e.note||null,this.link=e.link||null,this.href=e.href||null,this.updated=e.updated||null,this.source=e.source||null,this.extension=e.extension||null,null!==this.link&&e.link.item){var S=e.link.item;if(this.length=t(S)?S.length:0,this.length)for(s=0;s<this.length;s++)this.id[s]=S[s].href}}}e.prototype.Item=function(t){if(null===this||"collection"!==this.class||!this.length)return null;if("number"==typeof t)return t>this.length||0>t?null:this.link.item[t];var e,n=[];if("object"==typeof t){if(!t.class&&!t.follow)return null;t.class&&(e="dataset"===t.class&&"boolean"==typeof t.embedded?!0===t.embedded?function(t,e,i){var r=t.link.item[e];i.class===r.class&&r.id&&r.size&&r.dimension&&n.push(r)}:function(t,e,i){var r=t.link.item[e];i.class!==r.class||r.id&&r.size&&r.dimension||n.push(r)}:function(t,e,i){i.class===t.link.item[e].class&&n.push(t.link.item[e])})}else e=function(t,e){n.push(t.link.item[e])};for(var i=0;i<this.length;i++)e(this,i,t);return n},e.prototype.Dataset=function(t){if(null===this)return null;if("dataset"===this.class)return void 0!==t?this:[this];var i,r=[],l=0;if("collection"===this.class){var s=this.Item({class:"dataset",embedded:!0});if(void 0===t){for(i=s.length;i>l;l++)r.push(n(s[l]));return r}if("number"==typeof t&&t>=0&&t<s.length)return n(s[t]);if("string"==typeof t)for(i=s.length;i>l;l++)if(s[l].href===t)return n(s[l]);return null}if("bundle"!==this.class)return null;if(void 0===t){for(i=this.id.length;i>l;l++)r.push(this.Dataset(this.id[l]));return r}if("number"==typeof t){var o=this.id[t];return void 0!==o?this.Dataset(o):null}var a=this.__tree__[t];return void 0===a?null:new e({class:"dataset",__tree__:a})},e.prototype.Dimension=function(t,n){n="boolean"!=typeof n||n;var i,r=[],l=this.id.length,s=function(t,e){if(null!==t)for(var n in t)for(var i=null!==t[n]?t[n].length:0;i--;)if(t[n][i]===e)return n;return null};if(null===this||"dataset"!==this.class)return null;if(void 0===t){for(i=0;l>i;i++)r.push(this.Dimension(this.id[i]));return r}if("number"==typeof t){var o=this.id[t];return void 0!==o?this.Dimension(o,n):null}var a=this.role;if("object"==typeof t){if(t.hasOwnProperty("role")){for(i=0;l>i;i++){var u=this.id[i];s(a,u)===t.role&&r.push(this.Dimension(u,n))}return void 0===r[0]?null:r}return null}var h=this.__tree__.dimension;if(void 0===h)return null;var f=h[t];return void 0===f?null:n?new e({class:"dimension",__tree__:f,role:s(a,t)}):function(t,e){var n=[];for(var i in t)n[t[i]]=e[i];return n}(f.category.index,f.category.label)},e.prototype.Category=function(t){if(null===this||"dimension"!==this.class)return null;if(void 0===t){for(var n=[],i=0,r=this.id.length;r>i;i++)n.push(this.Category(this.id[i]));return n}if("number"==typeof t){var l=this.id[t];return void 0!==l?this.Category(l):null}var s=this.__tree__.category;if(void 0===s)return null;var o=s.index[t];if(void 0===o)return null;var a=s.unit&&s.unit[t]||null,u=s.coordinates&&s.coordinates[t]||null,h=s.child&&s.child[t]||null,f=s.note&&s.note[t]||null;return new e({class:"category",index:o,label:s.label[t],note:f,child:h,unit:a,coord:u})},e.prototype.Slice=function(e){if(null===this||"dataset"!==this.class)return null;if(void 0===e)return this;if(!t(e)){var n,i=[];for(n in e)i.push([n,e[n]]);e=i}var r=this,l=e.length,s=r.toTable({field:"id",content:"id",status:!0}),o=r.status,a=s.shift(),u=!1,h=[],f=[],c=[],d=[];return e.forEach(function(t){var e=r.Dimension(t[0]);if(null!==e){var n=e.id.indexOf(t[1]);return-1===n?void(u=!0):(c.push([r.id.indexOf(t[0]),n]),void d.push(e.Category(n).label))}u=!0}),u?null:(s.forEach(function(t){var n,i={},r=0;for(n=t.length;n--;)i[a[n]]=t[n];e.forEach(function(t){i[t[0]]===t[1]&&r++}),l===r&&(h.push(i.value),f.push(i.status))}),r.n=h.length,r.value=r.__tree__.value=h,r.status=r.__tree__.status=null!==o?f:null,e.forEach(function(t,e){r.size[c[e][0]]=1,r.__tree__.dimension[t[0]].category.index={},r.__tree__.dimension[t[0]].category.index[t[1]]=0,r.__tree__.dimension[t[0]].category.label={},r.__tree__.dimension[t[0]].category.label[t[1]]=d[e]}),r)},e.prototype.Data=function(e,n){var i,r,l=[],s=function(t){for(var e in t)if(t.hasOwnProperty(e))return e};if(null===this||"dataset"!==this.class)return null;if(void 0===e){for(r=this.value.length,i=0;r>i;i++)l.push(this.Data(i));return l}if("boolean"!=typeof n&&(n=!0),"number"==typeof e){var o=this.value[e];return void 0===o?null:n?{value:o,status:this.status?this.status[e]:null}:o}var a="object",u=this.__tree__,h=u.size||u.dimension&&u.dimension.size,f=h.length;if(t(e)){if(!t(e[0])){if(this.length!==e.length)return null;var c=1,d=0,v=[],p=[];for(i=0;f>i;i++)if(void 0!==e[i]){if("number"!=typeof e[i]||e[i]>=h[i])return null;d+=(c*=i>0?h[f-i]:1)*e[f-i-1]}else v.push(i),p.push(h[i]);if(v.length>1)return null;if(1===v.length){for(var g=0,y=p[0];y>g;g++){var b=[];for(i=0;f>i;i++)i!==v[0]?b.push(e[i]):b.push(g);l.push(this.Data(b,n))}return l}return n?{value:this.value[d],status:this.status?this.status[d]:null}:this.value[d]}a="array"}var _=function(t,e,n){var i,r=[],l={},o=t.dimension,a=t.id||o.id,u=t.size||o&&o.size;if("array"===n){for(i=e.length;i--;)l[e[i][0]]=e[i][1];e=l}for(var h=0,f=a.length;f>h;h++){var c=a[h],d=e[c];r.push("string"==typeof d?d:1===u[h]?s(o[c].category.index):null)}return r}(u,e,a),m=[],x=u.dimension,w=u.id||x.id;for(i=0,r=_.length;r>i;i++)m.push(x[w[i]].category.index[_[i]]);return this.Data(m,n)},e.prototype.toTable=function(e,n){if(null===this||"dataset"!==this.class)return null;1==arguments.length&&"function"==typeof e&&(n=e,e=null),e=e||{field:"label",content:"label",vlabel:"Value",slabel:"Status",type:"array",status:!1,unit:!1,by:null,prefix:"",drop:[],meta:!1,comma:!1,bylabel:!1};var i,r,l,s,o,a=this.__tree__,u=!0===e.status;if("function"==typeof n){i=this.toTable(e);var h=[],f="array"!==e.type?0:1;for(o=(T="object"!==e.type?i.slice(f):i.rows.slice(0)).length,r=0;o>r;r++){var c=n.call(this,T[r],r);void 0!==c&&h.push(c)}return"object"===e.type?{cols:i.cols,rows:h}:("array"===e.type&&h.unshift(i[0]),h)}if("arrobj"===e.type){var d=[],v=(i=this.toTable({field:"id",content:e.content,status:u})).shift(),p=a.role&&a.role.metric,g=function(){},y={},b=this,_=b.id,m=e.by&&-1!==_.indexOf(e.by)?e.by:null,x=!0===e.meta,w=void 0!==e.drop&&t(e.drop)?e.drop:[],k=!0===e.comma,O=!0===e.bylabel,D=function(t){if(x){var n={};return _.forEach(function(t){var e=b.Dimension(t);n[t]={label:e.label,role:e.role,categories:{id:e.id,label:b.Dimension(t,!1)}}}),{meta:{label:b.label,source:b.source,updated:b.updated,id:_,status:u,unit:e.unit,by:m,bylabel:O,drop:null!==m&&w.length>0?w:null,prefix:null!==m?V||"":null,comma:k,dimensions:n},data:t}}return t};if(null===m&&e.unit&&p){if("id"!==e.content)for(var j=p.length;j--;){var z=this.Dimension(p[j]);y[p[j]]={};for(var P=z.length;P--;)y[p[j]][z.Category(P).label]=z.id[P]}g=function(t,n){if(-1!==p.indexOf(t)){var i=a.dimension[t].category;i.unit?E.unit=i.unit["id"!==e.content?y[t][n]:n]:E.unit=null}},e.unit=!0}else e.unit=!1;for(o=i.length,r=0;o>r;r++){var E={};for(l=i[r].length;l--;)E[v[l]]=i[r][l],g(v[l],i[r][l]);d.push(E)}if(k&&d.forEach(function(t){null!==t.value&&(t.value=(""+t.value).replace(".",","))}),null!==m){var C,S={},T=[],I={},V=void 0!==e.prefix?e.prefix:"";w.forEach(function(t,e){(!b.Dimension(t)||b.Dimension(t).length>1)&&(w[e]="")});var A=_.filter(function(t){return t!==m&&-1===w.indexOf(t)}),J=b.Dimension(m);for(var M in"id"!==e.content?O?C=function(t,e,n){t[e][V+n[m]]=n.value}:(J.Category().forEach(function(t,e){I[t.label]=J.id[e]}),C=function(t,e,n){t[e][V+I[n[m]]]=n.value}):C=function(t,e,n){t[e][V+n[m]]=n.value},d.forEach(function(t){var e=function(t,e){var n=[];return e.forEach(function(e){n.push(t[e])}),n.join("\t")}(t,A);void 0===S[e]&&(S[e]=function(t,e){var n={};return e.forEach(function(e){n[e]=t[e]}),n}(t,A)),C(S,e,t,m)}),S)T.push(S[M]);return u=!1,D(T)}return D(d)}var R,U,q,B,F="id"===e.field;if("object"===e.type){var G="number"==typeof this.value[0]||null===this.value[0]?"number":"string";R=function(t,e){var n=F&&t||e||t;tt.push({id:t,label:n,type:"string"})},U=function(t,e,n){var i=(F?"value":t)||"Value",r=(F?"status":e)||"Status";n&&tt.push({id:"status",label:r,type:"string"}),tt.push({id:"value",label:i,type:G})},q=function(t){ct.push({v:t})},B=function(t){ct.push({v:t}),et.push({c:ct})}}else R=function(t,e){var n=F&&t||e||t;tt.push(n)},U=function(t,e,n){var i=(F?"value":t)||"Value",r=(F?"status":e)||"Status";n&&tt.push(r),tt.push(i),$.push(tt)},q=function(t){ct.push(t)},B=function(t){ct.push(t),$.push(ct)};var H=a.dimension,K=a.id||H.id,L=a.size||H.size,N=K.length;if(N!=L.length)return!1;var Q=[],W=1,X=(j=1,[]),Y=[],Z=[],$=[],tt=[],et=[];for(r=0;N>r;r++){var nt=K[r];R(nt,H[nt].label),W*=L[r],j*=L[r];var it=[];for(l=0;l<L[r];l++)for(var rt in H[K[r]].category.index)if(H[K[r]].category.index[rt]===l){var lt="id"!==e.content&&H[K[r]].category.label?H[K[r]].category.label[rt]:rt;it.push(lt)}Q.push(it),X.push(j)}for(U(e.vlabel,e.slabel,u),o=Q.length,r=0;o>r;r++){for(var st=[],ot=0,at=Q[r].length;at>ot;ot++)for(var ut=0;ut<W/X[r];ut++)st.push(Q[r][ot]);Y.push(st)}for(o=Y.length,r=0;o>r;r++){var ht=[],ft=0;for(s=0;W>s;s++)ht.push(Y[r][ft]),++ft===Y[r].length&&(ft=0);Z.push(ht)}for(s=0;W>s;s++){var ct=[];o=Y.length;for(var dt=0;o>dt;dt++)q(Z[dt][s]);u&&q(this.status?this.status[s]:null),B(this.value[s])}return"object"===e.type?{cols:tt,rows:et}:$},e.prototype.node=function(){return this.__tree__},e.prototype.toString=function(){return this.class},n.jsonstat=e}(),t.exports=n}}]);