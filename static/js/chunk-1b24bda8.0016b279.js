(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b24bda8"],{"6aca":function(t,e,i){"use strict";var a=i("e1c3"),n=i.n(a);n.a},"6f00":function(t,e,i){"use strict";var a=i("c726"),n=i.n(a);n.a},"85fb":function(t,e,i){},"8d75":function(t,e,i){"use strict";var a=i("85fb"),n=i.n(a);n.a},"92d5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAABu0lEQVRIib3VuYtUQRDH8c+sy6KBd+AFBgbCgmuisoGgGIgHImiimCn+AwobCv4LGilopoFiIHgiiAiCeCAmiq5goAYeizfr4npRUgvtMM7Mg5n5waNfd3XXd6a6ql6tdmxEhzUTXxq4XI7VeIIH/bm4BxswDzX8xjje40OuzcBA2r7hO37mOAvLMISl4Rj3MZp7N2M3+vAaZwK8Cac7/K/X59NIP3AufsGaTse6hSK6twI8vcfgQzLmtR6DN2JFgCd7BPxavF+L5JrdZVjU65WsjsinVWHoz/TulrbhZuH7ej5/7/h81FUXwKN10H8U4H042wXw0WbGCPVO3Mg7mFvYIulO4DJWYgEe4QU+4WNWRHSqwxguzr7ByVbgO1iLX3W2LVP3gYtNfDxOPxdy/iq71kQzcIT6VHaT+biEh4XDdjVW7IsQP291LsBX8S7n23Ew34ebnKtXCbrbzoG+HOfgc4b7dq6tqwB+m3kSulcFvLDoLBNZYgcwWAH+LMfxKuD4di7GkpzvyMYSSTWtTXClnj8F3pvjkcK2CFvzw9+OomGEdlUBv8w+erzO/rRBmf1PUbdRv/tb7sQf7IhZ5C8mHewAAAAASUVORK5CYII="},"99dd":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"RegionalPrice"},[a("div",{staticClass:"main"},[a("div",{attrs:{id:"tabs"}},[a("a-tabs",{attrs:{type:"card"},on:{change:t.callback}},[a("a-tab-pane",{key:"1",attrs:{tab:"种植"}},[t._v(" 种植 ")]),a("a-tab-pane",{key:"2",attrs:{tab:"养殖"}},[a("div",{staticClass:"itemList"},t._l(t.tabsData[0],(function(e,i){return a("div",{key:i,class:["choiceItem",i==t.currentIndex?t.activeChoose:null],on:{click:function(e){return t.chooseItem(i)}}},[t._v(t._s(e)+" ")])})),0),a("a-input",{attrs:{placeholder:"请输入城市名"}},[a("a-icon",{attrs:{slot:"suffix",type:"search"},slot:"suffix"})],1)],1)],1)],1),a("div",{staticClass:"topList"}),a("div",{staticClass:"map"}),a("div",{staticClass:"BlockList"},t._l(t.rightOptions,(function(e,n){return a("div",{key:n,staticClass:"Block"},[a("div",{staticClass:"header"},[a("img",{attrs:{src:i("92d5"),alt:""}}),a("span",[t._v(t._s(e.title))])]),a("div",{staticClass:"content"},[a("my-echarts",{attrs:{id:e.id,options:e.options}})],1)])})),0)])])},n=[],s=i("ade3"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"eClass",attrs:{id:t.id}})},c=[],r={name:"MyEcharts",props:["options","id"],components:{},directives:{},data:function(){return{echart:null,echartInstance:null}},watch:{options:{handler:function(t,e){this.echartInstance.clear(),this.updateECharts(this.options)},deep:!0}},mounted:function(){this.initEcharts(this.id),this.updateECharts(this.options),window.addEventListener("resize",this.screenAdapter),this.screenAdapter()},beforeDestroy:function(){window.removeEventListener("resize",this.screenAdapter)},methods:{initEcharts:function(t){this.echart=document.getElementById(t),this.echartInstance=this.$echarts.init(this.echart)},updateECharts:function(t){this.echartInstance.setOption(t)},screenAdapter:function(){this.echartInstance.resize()}}},l=r,d=(i("6f00"),i("0c7c")),h=Object(d["a"])(l,o,c,!1,null,"880b1e4c",null),u=h.exports,p={name:"RegionalPrice",components:{MyEcharts:u},directives:{},data:function(){var t,e;return{rightOptions:[{title:"价格指数",id:"line_1",options:{title:{text:"单位:元",right:"84%",top:0,textStyle:{fontWeight:"normal",fontSize:12,color:"gray"}},tooltip:{trigger:"axis"},grid:{show:!0,bottom:4,top:"10%",right:10,left:0,containLabel:!0},calculable:!0,xAxis:[{type:"category",data:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],boundaryGap:!1,axisLine:{lineStyle:{color:"#ccc"}},axisTick:{length:0}}],yAxis:[{max:50,min:0,scale:!0,type:"value",name:"价格/天数",nameLocation:"start",nameTextStyle:{fontSize:9},axisLine:{lineStyle:{color:"#ccc"}}}],series:[{name:"产量",symbol:"none",type:"line",data:[22,21,20,25,26,27,28,29,31,33,24,28,22,20,20],itemStyle:{color:"#348f6c"},barWidth:12,areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:"#A0BF7C"},{offset:1,color:"white"}],global:!1}}}]}},{title:"总产值",id:"bar_2",options:{title:{text:"单位:KG",right:"84%",top:0,textStyle:{fontWeight:"normal",fontSize:12,color:"gray"}},tooltip:{trigger:"axis"},grid:{show:!0,bottom:4,top:"10%",right:10,left:0,containLabel:!0},calculable:!0,xAxis:[(t={axisLine:{lineStyle:{}},type:"category",data:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]},Object(s["a"])(t,"axisLine",{lineStyle:{color:"#ccc"}}),Object(s["a"])(t,"axisTick",{length:0}),t)],yAxis:[{max:50,min:0,scale:!0,type:"value",name:"产量/天数",nameLocation:"start",nameTextStyle:{fontSize:9},axisLine:{lineStyle:{color:"#ccc"}}}],series:[{name:"产量",type:"bar",data:[22,21,20,25,26,27,28,29,31,33,24,28,22,20,20],itemStyle:{color:"#A0BF7C"},barWidth:12}]}},{title:"交易量",id:"bar_3",options:{title:{text:"单位:个",right:"84%",top:0,textStyle:{fontWeight:"normal",fontSize:12,color:"gray"}},tooltip:{trigger:"axis"},grid:{show:!0,bottom:4,top:"10%",right:10,left:0,containLabel:!0},calculable:!0,xAxis:[(e={axisLine:{lineStyle:{}},type:"category",data:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30]},Object(s["a"])(e,"axisLine",{lineStyle:{color:"#ccc"}}),Object(s["a"])(e,"axisTick",{length:0}),e)],yAxis:[{max:10,min:0,scale:!0,type:"value",name:"交易量/天数",nameLocation:"start",nameTextStyle:{fontSize:9},axisLine:{lineStyle:{color:"#ccc"}}}],series:[{name:"产量",type:"bar",data:[4,5,6,7,8,9,10,10,1,2,3,4,3,2,6],itemStyle:{color:"#8BBDB2"},barWidth:12}]}}],tabsData:[["猪","牛","羊","鸡","鸭","鹅"]],currentIndex:0,activeChoose:"activeChoose"}},mounted:function(){},methods:{callback:function(t){},chooseItem:function(t){this.currentIndex=t}}},m=p,f=(i("6aca"),i("8d75"),Object(d["a"])(m,a,n,!1,null,"5d77348a",null));e["default"]=f.exports},c726:function(t,e,i){},e1c3:function(t,e,i){}}]);