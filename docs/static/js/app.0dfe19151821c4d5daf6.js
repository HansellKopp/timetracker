webpackJsonp([1],{150:function(t,e,s){"use strict";var a=s(3),n=s(247),i=s(240),r=s.n(i),o=s(239),l=s.n(o),c=s(238),u=s.n(c),d=s(213),m=s.n(d),f=s(246),j=s.n(f),p=s(245),h=s.n(p),v=s(228),k=(s.n(v),s(216)),_=s.n(k),w=s(249),y=s.n(w);a.default.use(n.a),a.default.use(j.a),a.default.use(m.a,{locale:_.a}),a.default.use(h.a),a.default.use(y.a),e.a=new n.a({routes:[{path:"/",name:"List",component:l.a},{path:"/view",name:"View",component:r.a,props:!0},{path:"/new",name:"Create",component:u.a},{path:"/edit/:id",name:"Edit",component:u.a,props:!0}]})},151:function(t,e,s){function a(t){s(232)}var n=s(8)(s(176),s(244),a,null,null);t.exports=n.exports},174:function(t,e,s){"use strict";function a(t,e){console.log(t,e);var s=(new Date(e)-new Date(t))/1e3;s=Math.floor(s/60);var a=Math.round(s%60);s=Math.floor(s/60);var n=Math.round(s%24);return console.log(n,a),("00"+n).slice(-2)+":"+("00"+a).slice(-2)}function n(t,e,s){var n=s.get("workdayItems"),i=t.start.split(":"),r=t.end.split(":"),c=new Date(t.date),u=new Date(c.getDate()+(r[1]<i[0]?1:0)),d=new Date(c.getYear(),c.getMonth(),c.getDay(),i[0],i[1]),m=new Date(u.getYear(),u.getMonth(),u.getDay(),r[0],r[1]);console.log(d,m);var f=o()({},t,{id:t.id||l(),hours:a(d,m),timestamp:Date.now()});e>=0?n[e]=f:n.push(f),s.set("workdayItems",n)}function i(t,e){var s=e.get("workdayItems"),a=s.findIndex(function(e){return e.id===t});return a>=0?{item:s[a],index:a}:null}e.a=n,e.b=i;var r=s(180),o=s.n(r),l=s(237)},175:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(3),n=s(151),i=s.n(n),r=s(150);a.default.config.productionTip=!1,new a.default({el:"#app",router:r.a,template:"<App/>",localStorage:{workdayItems:{type:Array,default:[]}},components:{App:i.a}})},176:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},177:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(174);e.default={props:["id"],data:function(){return{item:{date:new Date,start:"12:00",end:"13:00",itemIndex:-1}}},methods:{save:function(){s.i(a.a)(this.item,this.itemIndex,this.$localStorage),this.$router.push("/")},loadItem:function(){var t=s.i(a.b)(this.id,this.$localStorage);t?this.$router.push("/"):(this.item=t.item,this.itemIndex=t.itemIndex)},goBack:function(){this.$router.push("/")}},mounted:function(){this.id&&this.loadItem()}}},178:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{workdayItems:[]}},methods:{loadItems:function(){this.workdayItems=this.$localStorage.get("workdayItems")},createItem:function(){this.$router.push("new")}},mounted:function(){this.loadItems()},computed:{itemsCount:function(){return this.workdayItems.length},totalHours:function(){var t=0,e=0;return this.workdayItems.map(function(s){var a=s.hours.split(":");t+=parseInt(a[0],10),e+=parseInt(a[1],10)}),e>59&&(t+=Math.floor(e/60),e%=60),("00"+t).slice(-2)+":"+("00"+e).slice(-2)}}}},179:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["id"],data:function(){return{item:{}}},methods:{load:function(){var t=this,e=this.$localStorage.get("workdayItems");this.item=e.find(function(e){return e.id===t.id}),this.item||this.$router.push("/")},edit:function(){this.$router.push({name:"Edit",params:{id:this.item.id}})},remove:function(){var t=this;this.$swal({title:"Warning",text:"This will delete this item. Continue",type:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!"}).then(function(){var e=t.$localStorage.get("workdayItems"),s=e.findIndex(function(e){return e.id===t.id});e.splice(s,1),t.$localStorage.set("workdayItems",e),t.$router.push("/")})},goBack:function(){this.$router.push("/")}},mounted:function(){this.load()}}},228:function(t,e){},229:function(t,e){},230:function(t,e){},231:function(t,e){},232:function(t,e){},233:function(t,e,s){function a(t){return s(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":33,"./af.js":33,"./ar":40,"./ar-dz":34,"./ar-dz.js":34,"./ar-kw":35,"./ar-kw.js":35,"./ar-ly":36,"./ar-ly.js":36,"./ar-ma":37,"./ar-ma.js":37,"./ar-sa":38,"./ar-sa.js":38,"./ar-tn":39,"./ar-tn.js":39,"./ar.js":40,"./az":41,"./az.js":41,"./be":42,"./be.js":42,"./bg":43,"./bg.js":43,"./bn":44,"./bn.js":44,"./bo":45,"./bo.js":45,"./br":46,"./br.js":46,"./bs":47,"./bs.js":47,"./ca":48,"./ca.js":48,"./cs":49,"./cs.js":49,"./cv":50,"./cv.js":50,"./cy":51,"./cy.js":51,"./da":52,"./da.js":52,"./de":55,"./de-at":53,"./de-at.js":53,"./de-ch":54,"./de-ch.js":54,"./de.js":55,"./dv":56,"./dv.js":56,"./el":57,"./el.js":57,"./en-au":58,"./en-au.js":58,"./en-ca":59,"./en-ca.js":59,"./en-gb":60,"./en-gb.js":60,"./en-ie":61,"./en-ie.js":61,"./en-nz":62,"./en-nz.js":62,"./eo":63,"./eo.js":63,"./es":65,"./es-do":64,"./es-do.js":64,"./es.js":65,"./et":66,"./et.js":66,"./eu":67,"./eu.js":67,"./fa":68,"./fa.js":68,"./fi":69,"./fi.js":69,"./fo":70,"./fo.js":70,"./fr":73,"./fr-ca":71,"./fr-ca.js":71,"./fr-ch":72,"./fr-ch.js":72,"./fr.js":73,"./fy":74,"./fy.js":74,"./gd":75,"./gd.js":75,"./gl":76,"./gl.js":76,"./gom-latn":77,"./gom-latn.js":77,"./he":78,"./he.js":78,"./hi":79,"./hi.js":79,"./hr":80,"./hr.js":80,"./hu":81,"./hu.js":81,"./hy-am":82,"./hy-am.js":82,"./id":83,"./id.js":83,"./is":84,"./is.js":84,"./it":85,"./it.js":85,"./ja":86,"./ja.js":86,"./jv":87,"./jv.js":87,"./ka":88,"./ka.js":88,"./kk":89,"./kk.js":89,"./km":90,"./km.js":90,"./kn":91,"./kn.js":91,"./ko":92,"./ko.js":92,"./ky":93,"./ky.js":93,"./lb":94,"./lb.js":94,"./lo":95,"./lo.js":95,"./lt":96,"./lt.js":96,"./lv":97,"./lv.js":97,"./me":98,"./me.js":98,"./mi":99,"./mi.js":99,"./mk":100,"./mk.js":100,"./ml":101,"./ml.js":101,"./mr":102,"./mr.js":102,"./ms":104,"./ms-my":103,"./ms-my.js":103,"./ms.js":104,"./my":105,"./my.js":105,"./nb":106,"./nb.js":106,"./ne":107,"./ne.js":107,"./nl":109,"./nl-be":108,"./nl-be.js":108,"./nl.js":109,"./nn":110,"./nn.js":110,"./pa-in":111,"./pa-in.js":111,"./pl":112,"./pl.js":112,"./pt":114,"./pt-br":113,"./pt-br.js":113,"./pt.js":114,"./ro":115,"./ro.js":115,"./ru":116,"./ru.js":116,"./sd":117,"./sd.js":117,"./se":118,"./se.js":118,"./si":119,"./si.js":119,"./sk":120,"./sk.js":120,"./sl":121,"./sl.js":121,"./sq":122,"./sq.js":122,"./sr":124,"./sr-cyrl":123,"./sr-cyrl.js":123,"./sr.js":124,"./ss":125,"./ss.js":125,"./sv":126,"./sv.js":126,"./sw":127,"./sw.js":127,"./ta":128,"./ta.js":128,"./te":129,"./te.js":129,"./tet":130,"./tet.js":130,"./th":131,"./th.js":131,"./tl-ph":132,"./tl-ph.js":132,"./tlh":133,"./tlh.js":133,"./tr":134,"./tr.js":134,"./tzl":135,"./tzl.js":135,"./tzm":137,"./tzm-latn":136,"./tzm-latn.js":136,"./tzm.js":137,"./uk":138,"./uk.js":138,"./ur":139,"./ur.js":139,"./uz":141,"./uz-latn":140,"./uz-latn.js":140,"./uz.js":141,"./vi":142,"./vi.js":142,"./x-pseudo":143,"./x-pseudo.js":143,"./yo":144,"./yo.js":144,"./zh-cn":145,"./zh-cn.js":145,"./zh-hk":146,"./zh-hk.js":146,"./zh-tw":147,"./zh-tw.js":147};a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id=233},238:function(t,e,s){function a(t){s(229)}var n=s(8)(s(177),s(241),a,null,null);t.exports=n.exports},239:function(t,e,s){function a(t){s(230)}var n=s(8)(s(178),s(242),a,"data-v-1cc486ec",null);t.exports=n.exports},240:function(t,e,s){function a(t){s(231)}var n=s(8)(s(179),s(243),a,"data-v-2ea029de",null);t.exports=n.exports},241:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"CreateNote u-absolute-flex-column"},[s("header",{staticClass:"app-header"},[s("div",{staticClass:"u-flex-row"},[s("a",{staticClass:"back-button",on:{click:function(e){t.goBack()}}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("div",{staticClass:"menu-text u-elastic"},[t._v(t._s(t.id?"Editing Item":"Create Item"))])])]),t._v(" "),s("div",{staticClass:"app-controls"},[s("div",{staticClass:"u-flex-row"},[s("el-button",{staticClass:"u-elastic",attrs:{type:"primary"},on:{click:function(e){t.save()}}},[t._v("Save")])],1)]),t._v(" "),s("ul",{staticClass:"u-scroller"},[s("el-form",{ref:"form",staticClass:"create-form",attrs:{model:t.item,"input-width":"120px"}},[s("el-form-item",{attrs:{label:"Date"}},[s("el-col",[s("el-date-picker",{attrs:{type:"date",placeholder:"Pick a date",large:"","picker-options":{start:"00:01",step:"00:05",end:"23:59"}},model:{value:t.item.date,callback:function(e){t.item.date=e},expression:"item.date"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"Start"}},[s("el-col",[s("el-time-select",{attrs:{placeholder:"Start time",size:"large","picker-options":{start:"00:01",step:"00:05",end:"23:59"}},model:{value:t.item.start,callback:function(e){t.item.start=e},expression:"item.start"}})],1)],1),t._v(" "),s("el-form-item",{attrs:{label:"End"}},[s("el-col",[s("el-time-select",{attrs:{placeholder:"End time",size:"large"},model:{value:t.item.end,callback:function(e){t.item.end=e},expression:"item.end"}})],1)],1)],1)],1)])},staticRenderFns:[]}},242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"itemList u-absolute-flex-column"},[s("header",{staticClass:"app-header"},[t._v("Worked days: "+t._s(t.itemsCount)+" Total Hours: "+t._s(t.totalHours))]),t._v(" "),s("div",{staticClass:"app-controls"},[s("div",{staticClass:"u-flex-row"},[s("el-button",{staticClass:"u-elastic",attrs:{type:"primary"},on:{click:function(e){t.createItem()}}},[s("i",{staticClass:"el-icon-time"}),t._v("\n        Add Working hours\n      ")])],1)]),t._v(" "),s("ul",{staticClass:"u-scroller"},t._l(t.workdayItems,function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:{name:"View",params:{id:e.id}}}},[s("i",{staticClass:"el-icon-arrow-right"}),t._v(" "),s("p",{staticClass:"note-title"},[t._v(t._s(t._f("moment")(e.date,"dddd, MMMM Do YYYY"))+"   ( "+t._s(e.hours)+"  )")]),t._v(" "),s("p",{staticClass:"small"},[t._v(t._s(e.start)+"-"+t._s(e.end))])])],1)}))])},staticRenderFns:[]}},243:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Note u-absolute-flex-column"},[s("header",{staticClass:"app-header"},[s("div",{staticClass:"u-flex-row"},[s("a",{staticClass:"back-button",on:{click:function(e){t.goBack()}}},[s("i",{staticClass:"el-icon-arrow-left"})]),t._v(" "),s("div",{staticClass:"menu-text u-elastic"},[t._v("Viewing Workday")]),t._v(" "),s("a",{on:{click:function(e){t.edit()}}},[s("i",{staticClass:"el-icon-edit"})]),t._v(" "),s("a",{on:{click:function(e){t.remove()}}},[s("i",{staticClass:"el-icon-delete"})])])]),t._v(" "),s("div",{staticClass:"u-scroller"},[s("div",{staticClass:"content"},[s("h2",[t._v(t._s(t._f("moment")(t.item.date,"dddd, MMMM Do YYYY")))]),t._v(" "),s("h3",[t._v("Start:"+t._s(t.item.start))]),t._v(" "),s("h3",[t._v("  End:"+t._s(t.item.end))]),t._v(" "),s("h3",[t._v("Time worked:"+t._s(t.item.hours))])])])])},staticRenderFns:[]}},244:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"App"}},[s("router-view")],1)},staticRenderFns:[]}}},[175]);
//# sourceMappingURL=app.0dfe19151821c4d5daf6.js.map