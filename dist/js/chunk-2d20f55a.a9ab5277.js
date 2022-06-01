(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f55a"],{b2d8:function(e,t,l){"use strict";l.r(t);var n=l("7a23"),c={class:"content-section introduction"},u=Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,"Chips"),Object(n["k"])("p",null,"Chips is used to enter multiple values on an input field.")],-1),a={class:"content-section implementation p-fluid"},s={class:"card"},o=Object(n["k"])("h5",null,"Basic",-1),i=Object(n["k"])("h5",null,"Comma Separator",-1),p=Object(n["k"])("h5",null,"Template",-1),r=Object(n["k"])("i",{class:"pi pi-user-plus",style:{"font-size":"14px"}},null,-1);function b(e,t,l,b,d,j){var O=Object(n["O"])("AppDemoActions"),k=Object(n["O"])("Chips"),h=Object(n["O"])("ChipsDoc");return Object(n["G"])(),Object(n["j"])("div",null,[Object(n["k"])("div",c,[u,Object(n["o"])(O)]),Object(n["k"])("div",a,[Object(n["k"])("div",s,[o,Object(n["o"])(k,{modelValue:d.value1,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.value1=e})},null,8,["modelValue"]),i,Object(n["o"])(k,{modelValue:d.value2,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.value2=e}),separator:","},null,8,["modelValue"]),p,Object(n["o"])(k,{modelValue:d.value3,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.value3=e})},{chip:Object(n["Y"])((function(e){return[Object(n["k"])("div",null,[Object(n["k"])("span",null,Object(n["S"])(e.value)+" - (active) ",1),r])]})),_:1},8,["modelValue"])])]),Object(n["o"])(h)])}var d=Object(n["k"])("h5",null,"Import via Module",-1),j=Object(n["k"])("code",null,"\nimport Chips from 'primevue/chips';\n\n",-1),O=[j],k=Object(n["k"])("h5",null,"Import via CDN",-1),h=Object(n["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/chips/chips.min.js"><\/script>\n\n',-1),v=[h],m=Object(n["k"])("h5",null,"Getting Started",-1),f=Object(n["k"])("p",null,"An array as the value can be bound using the standard v-model directive.",-1),C=Object(n["k"])("code",null,'\n<Chips v-model="value" />\n\n',-1),y=[C],w=Object(n["k"])("h5",null,"Custom Content",-1),g=Object(n["k"])("p",null,[Object(n["n"])("A chip is customized using the "),Object(n["k"])("i",null,"chip"),Object(n["n"])(" template where the chip value is passed to the slotProps with the value property.")],-1),P=Object(n["k"])("code",null,[Object(n["k"])("template",null,[Object(n["n"])('\n<Chips v-model="value">\n\t<template #chip="slotProps">\n\t\t<div>\n\t\t\t<span>{{slotProps.value}} - (active) </span>\n\t\t\t<i class="pi pi-user-plus" style="font-size: 14px"></i>\n\t\t</div>\n\t</template>\n</Chips>\n')]),Object(n["n"])("\n")],-1),A=[P],S=Object(n["k"])("h5",null,"Properties",-1),V=Object(n["k"])("p",null,"Any property such as name and placeholder are passed to the underlying input element. Following are the additional properties to configure the component.",-1),D=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Type"),Object(n["k"])("th",null,"Default"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"modelValue"),Object(n["k"])("td",null,"array"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Value of the component.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"max"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Maximum number of entries allowed.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"separator"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,'Separator char to add an item when pressed in addition to the enter key. Currently only possible value is ","')]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"addOnBlur"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"false"),Object(n["k"])("td",null,"Whether to add an item when the input loses focus.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"allowDuplicate"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"true"),Object(n["k"])("td",null,"Whether to allow duplicate values or not.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"style"),Object(n["k"])("td",null,"any"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Style class of the component input field.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"class"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Inline style of the component.")])])])],-1),x=Object(n["k"])("h5",null,"Events",-1),N=Object(n["k"])("p",null,"Any valid event such as focus, blur and input are passed to the underlying input element. Following are the additional events to configure the component.",-1),B=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"add"),Object(n["k"])("td",null,[Object(n["n"])("originalEvent: Browser event "),Object(n["k"])("br"),Object(n["n"])(" value: Added item value")]),Object(n["k"])("td",null,"Callback to invoke when a chip is added.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"remove"),Object(n["k"])("td",null,[Object(n["n"])("originalEvent: Browser event "),Object(n["k"])("br"),Object(n["n"])(" value: Removed item value")]),Object(n["k"])("td",null,"Callback to invoke when a chip is removed.")])])])],-1),G=Object(n["k"])("h5",null,"Slots",-1),z=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"chip"),Object(n["k"])("td",null,"value: Value of the component")])])])],-1),I=Object(n["k"])("h5",null,"Styling",-1),T=Object(n["n"])("Following is the list of structural style classes, for theming classes visit "),E=Object(n["n"])("theming"),Z=Object(n["n"])(" page."),F=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Element")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chips"),Object(n["k"])("td",null,"Container element")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chips-token"),Object(n["k"])("td",null,"Chip element container.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chips-token-icon"),Object(n["k"])("td",null,"Icon of a chip.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chips-token-label"),Object(n["k"])("td",null,"label of a chip.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chips-input-token"),Object(n["k"])("td",null,"Container of input element.")])])])],-1),U=Object(n["k"])("h5",null,"Dependencies",-1),Y=Object(n["k"])("p",null,"None.",-1);function _(e,t,l,c,u,a){var s=Object(n["O"])("router-link"),o=Object(n["O"])("AppDoc"),i=Object(n["P"])("code");return Object(n["G"])(),Object(n["h"])(o,{name:"ChipsDemo",sources:u.sources,github:"chips/ChipsDemo.vue"},{default:Object(n["Y"])((function(){return[d,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,O)),[[i,void 0,void 0,{script:!0}]]),k,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,v)),[[i]]),m,f,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,y)),[[i]]),w,g,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,A)),[[i]]),S,V,D,x,N,B,G,z,I,Object(n["k"])("p",null,[T,Object(n["o"])(s,{to:"/theming"},{default:Object(n["Y"])((function(){return[E]})),_:1}),Z]),F,U,Y]})),_:1},8,["sources"])}var J={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div class="p-fluid">\n        <div class="card">\n            <h5>Basic</h5>\n            <Chips v-model="value1" />\n\n            <h5>Comma Separator</h5>\n            <Chips v-model="value2" separator="," />\n\n            <h5>Template</h5>\n            <Chips v-model="value3">\n                <template #chip="slotProps">\n                    <div>\n                        <span>{{slotProps.value}} - (active) </span>\n                        <i class="pi pi-user-plus" style="font-size: 14px"></i>\n                    </div>\n                </template>\n            </Chips>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            value1: null,\n            value2: null,\n            value3: null\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div class="p-fluid">\n        <div class="card">\n            <h5>Basic</h5>\n            <Chips v-model="value1" />\n\n            <h5>Comma Separator</h5>\n            <Chips v-model="value2" separator="," />\n\n            <h5>Template</h5>\n            <Chips v-model="value3">\n                <template #chip="slotProps">\n                    <div>\n                        <span>{{slotProps.value}} - (active) </span>\n                        <i class="pi pi-user-plus" style="font-size: 14px"></i>\n                    </div>\n                </template>\n            </Chips>\n        </div>\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const value1 = ref();\n        const value2 = ref();\n        const value3 = ref();\n\n        return { value1, value2, value3 }\n    }\n}\n<\\/script>\n\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/chips/chips.min.js"><\\/script>',content:'<div id="app">\n            <div class="p-fluid">\n                <div class="card">\n                    <h5>Basic</h5>\n                    <p-chips v-model="value1"></p-chips>\n\n                    <h5>Comma Separator</h5>\n                    <p-chips v-model="value2" separator=","></p-chips>\n\n                    <h5>Template</h5>\n                    <p-chips v-model="value3">\n                        <template #chip="slotProps">\n                            <div>\n                                <span>{{slotProps.value}} - (active) </span>\n                                <i class="pi pi-user-plus" style="font-size: 14px"></i>\n                            </div>\n                        </template>\n                    </p-chips>\n                </div>\n            </div>\n        </div>\n\n        <script type="module">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const value1 = ref();\n                const value2 = ref();\n                const value3 = ref();\n\n                return { value1, value2, value3 }\n            },\n            components: {\n                "p-chips": primevue.chips\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n'}}}}},M=l("6b0d"),W=l.n(M);const R=W()(J,[["render",_]]);var q=R,H={data:function(){return{value1:null,value2:null,value3:null}},components:{ChipsDoc:q}};const K=W()(H,[["render",b]]);t["default"]=K}}]);