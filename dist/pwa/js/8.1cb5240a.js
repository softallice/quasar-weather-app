(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"5ead":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.events&&t.content.location.country?e("q-page",{attrs:{padding:""}},[e("EventsCountry",{attrs:{country:t.content.location.country,events:t.events}})],1):t._e()},r=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Sports today in "+t._s(t.country))]),t._v("\n  "+t._s(t.countryFootballEvents)+"\n  "),e("hr"),t._v("\n  "+t._s(t.countryCricketEvents)+"\n  "),e("hr"),t._v("\n  "+t._s(t.countryGolfEvents)+"\n")])},c=[],a={props:{country:{type:String,required:!0},events:{type:Object,required:!0}},computed:{countryFootballEvents(){return this.events.football.filter((t=>t.country===this.country))},countryCricketEvents(){return this.events.cricket.filter((t=>t.country===this.country))},countryGolfEvents(){return this.events.golf.filter((t=>t.country===this.country))}}},i=a,u=e("2877"),l=Object(u["a"])(i,s,c,!1,null,null,null),v=l.exports,p={name:"EventsPage",components:{EventsCountry:v},props:{content:{type:Object,required:!0}},beforeMount(){this.content&&this.content.location.country&&this.getLocationEvents()},data:()=>({events:null}),methods:{getLocationEvents(){const t={key:"45129826589045a4a67172834201512",q:this.content.location.country};this.$axios.get("https://api.weatherapi.com/v1/sports.json",{params:t}).then((t=>{this.events=t.data})).catch((t=>{console.log("Go to location error page")}))}},watch:{content:function(t){t&&this.getLocationEvents()}}},y=p,h=e("9989"),d=e("eebe"),f=e.n(d),E=Object(u["a"])(y,o,r,!1,null,null,null);n["default"]=E.exports;f()(E,"components",{QPage:h["a"]})}}]);