(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5700be16"],{"2adb":function(e,n,t){var r=t("24fb");n=r(!1),n.push([e.i,"[data-v-8392d21e] .card-container .card{width:75px;height:75px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:1rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0}[data-v-8392d21e] .card-container .card.primary-box{background-color:var(--primary-color);padding:0;color:var(--primary-color-text)}[data-v-8392d21e] .card-container .card.styled-box-green .p-ink{background:rgba(75,175,80,.3)}[data-v-8392d21e] .card-container .card.styled-box-orange .p-ink{background:rgba(255,193,6,.3)}[data-v-8392d21e] .card-container .card.styled-box-purple .p-ink{background:rgba(156,39,176,.3)}[data-v-8392d21e] .card-container .card:last-child{margin-right:0}",""]),e.exports=n},"43c9":function(e,n,t){"use strict";t.r(n);var r=t("7a23"),c=function(e){return Object(r["J"])("data-v-8392d21e"),e=e(),Object(r["H"])(),e},p={class:"content-section introduction"},i=c((function(){return Object(r["k"])("div",{class:"feature-intro"},[Object(r["k"])("h1",null,"Ripple"),Object(r["k"])("p",null,"Ripple directive adds ripple effect to the host element.")],-1)})),l={class:"content-section implementation"},a={class:"card-container flex"},o={class:"card primary-box p-ripple"},d=Object(r["n"])("Default"),s=[d],b={class:"card styled-box-green p-ripple"},u=Object(r["n"])("Green"),j=[u],g={class:"card styled-box-orange p-ripple"},O=Object(r["n"])("Orange"),v=[O],m={class:"card styled-box-purple p-ripple"},k=Object(r["n"])("Purple"),x=[k];function f(e,n,t,c,d,u){var O=Object(r["O"])("AppDemoActions"),k=Object(r["O"])("RippleDoc"),f=Object(r["P"])("ripple");return Object(r["G"])(),Object(r["j"])("div",null,[Object(r["k"])("div",p,[i,Object(r["o"])(O)]),Object(r["k"])("div",l,[Object(r["k"])("div",a,[Object(r["Z"])((Object(r["G"])(),Object(r["j"])("div",o,s)),[[f]]),Object(r["Z"])((Object(r["G"])(),Object(r["j"])("div",b,j)),[[f]]),Object(r["Z"])((Object(r["G"])(),Object(r["j"])("div",g,v)),[[f]]),Object(r["Z"])((Object(r["G"])(),Object(r["j"])("div",m,x)),[[f]])])]),Object(r["o"])(k)])}var y=Object(r["k"])("h5",null,"Getting Started",-1),h=Object(r["k"])("h5",null,"Ripple",-1),w=Object(r["k"])("p",null,"Ripple is an optional animation for the supported components such as buttons. It is disabled by default and needs to be enabled at your app's entry file (e.g. main.js) during the PrimeVue setup.",-1),G=Object(r["k"])("code",null,"\nimport {createApp} from 'vue';\nimport PrimeVue from 'primevue/config';\nconst app = createApp(App);\n\napp.use(PrimeVue, {ripple: true});\n\n",-1),R=[G],D=Object(r["k"])("p",null,[Object(r["k"])("span",{class:"font-bold"},"Note"),Object(r["n"])(": That would be it to enable ripple on PrimeVue components, next section describes how to use it with your own components and standard elements.")],-1),A=Object(r["k"])("h5",null,"Directive",-1),P=Object(r["k"])("p",null,[Object(r["n"])("Ripple is a directive that needs to be imported and configured with a name of your choice. Global configuration is done with the "),Object(r["k"])("i",null,"app.directive"),Object(r["n"])(" function.")],-1),Z=Object(r["k"])("code",null,"\nimport Ripple from 'primevue/ripple';\n\napp.directive('ripple', Ripple);\n\n",-1),N=[Z],S=Object(r["k"])("p",null,"Ripple can also be configured locally using the directives property of your component.",-1),V=Object(r["k"])("code",null,"\ndirectives: {\n    'ripple': Ripple\n}\n\n",-1),_=[V],I=Object(r["k"])("p",null,[Object(r["n"])("Once the ripple is configured, add "),Object(r["k"])("i",null,".p-ripple"),Object(r["n"])(" class to the target and attach the directive with the v- prefix.")],-1),J=Object(r["k"])("code",null,[Object(r["k"])("template",null,[Object(r["n"])('\n<div class="p-ripple" v-ripple></div>\n')]),Object(r["n"])("\n")],-1),M=[J],z=Object(r["k"])("h5",null,"Styling",-1),H=Object(r["k"])("p",null,[Object(r["n"])("Default styling of the animation adds a shade of white. This can easily be customized using css that changes the color of "),Object(r["k"])("i",null,".p-ink"),Object(r["n"])(" element.")],-1),T=Object(r["k"])("code",null,[Object(r["k"])("template",null,[Object(r["n"])('\n<div class="p-ripple purple" v-ripple></div>\n')]),Object(r["n"])("\n")],-1),B=[T],C=Object(r["k"])("code",null,"\n.p-ripple.purple .p-ink {\n    background: rgba(256,39,176,.3);\n}\n\n",-1),E=[C],Y=Object(r["k"])("h5",null,"Styling",-1),q=Object(r["k"])("div",{class:"doc-tablewrapper"},[Object(r["k"])("table",{class:"doc-table"},[Object(r["k"])("thead",null,[Object(r["k"])("tr",null,[Object(r["k"])("th",null,"Name"),Object(r["k"])("th",null,"Element")])]),Object(r["k"])("tbody",null,[Object(r["k"])("tr",null,[Object(r["k"])("td",null,"p-ripple"),Object(r["k"])("td",null,"Host element.")]),Object(r["k"])("tr",null,[Object(r["k"])("td",null,"p-ink"),Object(r["k"])("td",null,"Ripple element.")]),Object(r["k"])("tr",null,[Object(r["k"])("td",null,"p-ink-active"),Object(r["k"])("td",null,"Ripple element during animating.")])])])],-1),F=Object(r["k"])("h5",null,"Dependencies",-1),K=Object(r["k"])("p",null,"None.",-1);function L(e,n,t,c,p,i){var l=Object(r["O"])("AppDoc"),a=Object(r["P"])("code");return Object(r["G"])(),Object(r["h"])(l,{name:"RippleDemo",sources:p.sources,github:"ripple/RippleDemo.vue"},{default:Object(r["Y"])((function(){return[y,h,w,Object(r["Z"])((Object(r["G"])(),Object(r["j"])("pre",null,R)),[[a,void 0,void 0,{script:!0}]]),D,A,P,Object(r["Z"])((Object(r["G"])(),Object(r["j"])("pre",null,N)),[[a,void 0,void 0,{script:!0}]]),S,Object(r["Z"])((Object(r["G"])(),Object(r["j"])("pre",null,_)),[[a,void 0,void 0,{script:!0}]]),I,Object(r["Z"])((Object(r["G"])(),Object(r["j"])("pre",null,M)),[[a]]),z,H,Object(r["Z"])((Object(r["G"])(),Object(r["j"])("pre",null,B)),[[a]]),Object(r["Z"])((Object(r["G"])(),Object(r["j"])("pre",null,E)),[[a,void 0,void 0,{css:!0}]]),Y,q,F,K]})),_:1},8,["sources"])}var Q={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <div class="card-container flex">\n            <div class="card primary-box p-ripple" v-ripple>Default</div>\n            <div class="card styled-box-green p-ripple" v-ripple>Green</div>\n            <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>\n            <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>\n\n<style lang="scss" scoped>\n::v-deep(.card-container) {\n    .card {\n        width: 75px;\n        height: 75px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1rem;\n        user-select: none;\n        padding: 0;\n        background: #ffffff;\n        padding: 2rem;\n        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        border-radius: 4px;\n        margin-bottom: 2rem;\n\n        &.primary-box {\n            background-color: var(--primary-color);\n            padding: 0;\n            color: var(--primary-color-text);\n        }\n\n        &.styled-box-green {\n            .p-ink {\n                background: rgba(#4baf50, 0.3);\n            }\n        }\n\n        &.styled-box-orange {\n            .p-ink {\n                background: rgba(#ffc106, 0.3);\n            }\n        }\n\n        &.styled-box-purple {\n            .p-ink {\n                background: rgba(#9c27b0, 0.3);\n            }\n        }\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <div class="card-container flex">\n            <div class="card primary-box p-ripple" v-ripple>Default</div>\n            <div class="card styled-box-green p-ripple" v-ripple>Green</div>\n            <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>\n            <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>\n\n<style lang="scss" scoped>\n::v-deep(.card-container) {\n    .card {\n        width: 75px;\n        height: 75px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1rem;\n        user-select: none;\n        padding: 0;\n        background: #ffffff;\n        padding: 2rem;\n        box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n        border-radius: 4px;\n        margin-bottom: 2rem;\n\n        &.primary-box {\n            background-color: var(--primary-color);\n            padding: 0;\n            color: var(--primary-color-text);\n        }\n\n        &.styled-box-green {\n            .p-ink {\n                background: rgba(#4baf50, 0.3);\n            }\n        }\n\n        &.styled-box-orange {\n            .p-ink {\n                background: rgba(#ffc106, 0.3);\n            }\n        }\n\n        &.styled-box-purple {\n            .p-ink {\n                background: rgba(#9c27b0, 0.3);\n            }\n        }\n\n        &:last-child {\n            margin-right: 0;\n        }\n    }\n}\n</style>'},"browser-source":{tabName:"Browser Source",content:'<div id="app" class="flex">\n        <div class="card primary-box p-ripple" v-ripple>Default</div>\n        <div class="card styled-box-green p-ripple" v-ripple>Green</div>\n        <div class="card styled-box-orange p-ripple" v-ripple>Orange</div>\n        <div class="card styled-box-purple p-ripple" v-ripple>Purple</div>\n    </div>\n\n    <script type="module">\n        const { createApp } = Vue;\n        const Ripple = primevue.ripple;\n\n        const App = {\n            directives: {\n                "ripple": Ripple\n            }\n        };\n\n        const app = createApp(App);\n        app.use(primevue.config.default, { ripple: true });\n        app.mount("#app");\n    <\\/script>\n    \n    <style>\n        .card {\n            width: 75px;\n            height: 75px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-right: 1rem;\n            user-select: none;\n            padding: 0;\n            background: #ffffff;\n            padding: 2rem;\n            box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);\n            border-radius: 4px;\n            margin-bottom: 2rem;\n        }\n        .card.primary-box {\n            background-color: var(--primary-color);\n            padding: 0;\n            color: var(--primary-color-text);\n        }\n\n        .card.styled-box-green .p-ink {\n            background: #4baf50;\n        }\n\n        .card.styled-box-orange .p-ink {\n            background: #ffc106;\n        }\n\n        .card.styled-box-purple .p-ink {\n            background: #9c27b0;\n        }\n\n        .card:last-child {\n            margin-right: 0;\n        }\n    </style>'}}}}},U=t("6b0d"),W=t.n(U);const X=W()(Q,[["render",L]]);var $=X,ee={components:{RippleDoc:$}};t("b8b8");const ne=W()(ee,[["render",f],["__scopeId","data-v-8392d21e"]]);n["default"]=ne},b8b8:function(e,n,t){"use strict";t("ce97")},ce97:function(e,n,t){var r=t("2adb");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var c=t("499e").default;c("3832a9c0",r,!0,{sourceMap:!1,shadowMode:!1})}}]);