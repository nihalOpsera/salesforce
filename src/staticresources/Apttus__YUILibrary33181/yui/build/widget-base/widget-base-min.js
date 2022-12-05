YUI.add("widget-base",function(e,t){function R(e){var t=this,n,r,i=t.constructor;t._strs={},t._cssPrefix=i.CSS_PREFIX||s(i.NAME.toLowerCase()),e=e||{},R.superclass.constructor.call(t,e),r=t.get(T),r&&(r!==P&&(n=r),t.render(n))}var n=e.Lang,r=e.Node,i=e.ClassNameManager,s=i.getClassName,o,u=e.cached(function(e){return e.substring(0,1).toUpperCase()+e.substring(1)}),a="content",f="visible",l="hidden",c="disabled",h="focused",p="width",d="height",v="boundingBox",m="contentBox",g="parentNode",y="ownerDocument",b="auto",w="srcNode",E="body",S="tabIndex",x="id",T="render",N="rendered",C="destroyed",k="strings",L="<div></div>",A="Change",O="loading",M="_uiSet",_="",D=function(){},P=!0,H=!1,B,j={},F=[f,c,d,p,h,S],I=e.UA.webkit,q={};R.NAME="widget",B=R.UI_SRC="ui",R.ATTRS=j,j[x]={valueFn:"_guid",writeOnce:P},j[N]={value:H,readOnly:P},j[v]={valueFn:"_defaultBB",setter:"_setBB",writeOnce:P},j[m]={valueFn:"_defaultCB",setter:"_setCB",writeOnce:P},j[S]={value:null,validator:"_validTabIndex"},j[h]={value:H,readOnly:P},j[c]={value:H},j[f]={value:P},j[d]={value:_},j[p]={value:_},j[k]={value:{},setter:"_strSetter",getter:"_strGetter"},j[T]={value:H,writeOnce:P},R.CSS_PREFIX=s(R.NAME.toLowerCase()),R.getClassName=function(){return s.apply(i,[R.CSS_PREFIX].concat(e.Array(arguments),!0))},o=R.getClassName,R.getByNode=function(t){var n,i=o();return t=r.one(t),t&&(t=t.ancestor("."+i,!0),t&&(n=q[e.stamp(t,!0)])),n||null},e.extend(R,e.Base,{getClassName:function(){return s.apply(i,[this._cssPrefix].concat(e.Array(arguments),!0))},initializer:function(t){var n=this.get(v);n instanceof r&&this._mapInstance(e.stamp(n))},_mapInstance:function(e){q[e]=this},destructor:function(){var t=this.get(v),n;t instanceof r&&(n=e.stamp(t,!0),n in q&&delete q[n],this._destroyBox())},destroy:function(e){return this._destroyAllNodes=e,R.superclass.destroy.apply(this)},_destroyBox:function(){var e=this.get(v),t=this.get(m),n=this._destroyAllNodes,r;r=e&&e.compareTo(t),this.UI_EVENTS&&this._destroyUIEvents(),this._unbindUI(e),t&&(n&&t.empty(),t.remove(P)),r||(n&&e.empty(),e.remove(P))},render:function(e){return!this.get(C)&&!this.get(N)&&(this.publish(T,{queuable:H,fireOnce:P,defaultTargetOnly:P,defaultFn:this._defRenderFn}),this.fire(T,{parentNode:e?r.one(e):null})),this},_defRenderFn:function(e){this._parentNode=e.parentNode,this.renderer(),this._set(N,P),this._removeLoadingClassNames()},renderer:function(){var e=this;e._renderUI(),e.renderUI(),e._bindUI(),e.bindUI(),e._syncUI(),e.syncUI()},bindUI:D,renderUI:D,syncUI:D,hide:function(){return this.set(f,H)},show:function(){return this.set(f,P)},focus:function(){return this._set(h,P)},blur:function(){return this._set(h,H)},enable:function(){return this.set(c,H)},disable:function(){return this.set(c,P)},_uiSizeCB:function(e){this.get(m).toggleClass(o(a,"expanded"),e)},_renderBox:function(e){var t=this,n=t.get(m),i=t.get(v),s=t.get(w),o=t.DEF_PARENT_NODE,u=s&&s.get(y)||i.get(y)||n.get(y);s&&!s.compareTo(n)&&!n.inDoc(u)&&s.replace(n),!i.compareTo(n.get(g))&&!i.compareTo(n)&&(n.inDoc(u)&&n.replace(i),i.appendChild(n)),e=e||o&&r.one(o),e?e.appendChild(i):i.inDoc(u)||r.one(E).insert(i,0)},_setBB:function(e){return this._setBox(this.get(x),e,this.BOUNDING_TEMPLATE,!0)},_setCB:function(e){return this.CONTENT_TEMPLATE===null?this.get(v):this._setBox(null,e,this.CONTENT_TEMPLATE,!1)},_defaultBB:function(){var e=this.get(w),t=this.CONTENT_TEMPLATE===null;return e&&t?e:null},_defaultCB:function(e){return this.get(w)||null},_setBox:function(t,n,i,s){return n=r.one(n),n||(n=r.create(i),s?this._bbFromTemplate=!0:this._cbFromTemplate=!0),n.get(x)||n.set(x,t||e.guid()),n},_renderUI:function(){this._renderBoxClassNames(),this._renderBox(this._parentNode)},_renderBoxClassNames:function(){var e=this._getClasses(),t,n=this.get(v),r;n.addClass(o());for(r=e.length-3;r>=0;r--)t=e[r],n.addClass(t.CSS_PREFIX||s(t.NAME.toLowerCase()));this.get(m).addClass(this.getClassName(a))},_removeLoadingClassNames:function(){var e=this.get(v),t=this.get(m),n=this.getClassName(O),r=o(O);e.removeClass(r).removeClass(n),t.removeClass(r).removeClass(n)},_bindUI:function(){this._bindAttrUI(this._UI_ATTRS.BIND),this._bindDOM()},_unbindUI:function(e){this._unbindDOM(e)},_bindDOM:function(){var t=this.get(v).get(y),n=R._hDocFocus;n||(n=R._hDocFocus=t.on("focus",this._onDocFocus,this),n.listeners={count:0}),n.listeners[e.stamp(this,!0)]=!0,n.listeners.count++,I&&(this._hDocMouseDown=t.on("mousedown",this._onDocMouseDown,this))},_unbindDOM:function(t){var n=R._hDocFocus,r=e.stamp(this,!0),i,s=this._hDocMouseDown;n&&(i=n.listeners,i[r]&&(delete i[r],i.count--),i.count===0&&(n.detach(),R._hDocFocus=null)),I&&s&&s.detach()},_syncUI:function(){this._syncAttrUI(this._UI_ATTRS.SYNC)},_uiSetHeight:function(e){this._uiSetDim(d,e),this._uiSizeCB(e!==_&&e!==b)},_uiSetWidth:function(e){this._uiSetDim(p,e)},_uiSetDim:function(e,t){this.get(v).setStyle(e,n.isNumber(t)?t+this.DEF_UNIT:t)},_uiSetVisible:function(e){this.get(v).toggleClass(this.getClassName(l),!e)},_uiSetDisabled:function(e){this.get(v).toggleClass(this.getClassName(c),e)},_uiSetFocused:function(e,t){var n=this.get(v);n.toggleClass(this.getClassName(h),e),t!==B&&(e?n.focus():n.blur())},_uiSetTabIndex:function(e){var t=this.get(v);n.isNumber(e)?t.set(S,e):t.removeAttribute(S)},_onDocMouseDown:function(e){this._domFocus&&this._onDocFocus(e)},_onDocFocus:function(e){var t=R.getByNode(e.target),n=R._active;n&&n!==t&&(n._domFocus=!1,n._set(h,!1,{src:B}),R._active=null),t&&(t._domFocus=!0,t._set(h,!0,{src:B}),R._active=t)},toString:function(){return this.name+"["+this.get(x)+"]"},DEF_UNIT:"px",DEF_PARENT_NODE:null,CONTENT_TEMPLATE:L,BOUNDING_TEMPLATE:L,_guid:function(){return e.guid()},_validTabIndex:function(e){return n.isNumber(e)||n.isNull(e)},_bindAttrUI:function(e){var t,n=e.length;for(t=0;t<n;t++)this.after(e[t]+A,this._setAttrUI)},_syncAttrUI:function(e){var t,n=e.length,r;for(t=0;t<n;t++)r=e[t],this[M+u(r)](this.get(r))},_setAttrUI:function(e){e.target===this&&this[M+u(e.attrName
)](e.newVal,e.src)},_strSetter:function(t){return e.merge(this.get(k),t)},getString:function(e){return this.get(k)[e]},getStrings:function(){return this.get(k)},_UI_ATTRS:{BIND:F,SYNC:F}}),e.Widget=R},"@VERSION@",{requires:["attribute","base-base","base-pluginhost","classnamemanager","event-focus","node-base","node-style"],skinnable:!0});
