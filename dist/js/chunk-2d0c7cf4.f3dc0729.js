(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c7cf4"],{"51ce":function(e,t,n){"use strict";n.r(t);var l=n("7a23"),a={class:"content-section introduction"},c=Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,"Textarea"),Object(l["k"])("p",null,"Textarea is a multi-line text input element.")],-1),u={class:"content-section implementation"},o={class:"card"},r=Object(l["k"])("h5",null,"Basic",-1),s=Object(l["k"])("h5",null,"Auto Resize",-1),i=Object(l["k"])("h5",null,"Disabled",-1);function b(e,t,n,b,d,p){var j=Object(l["O"])("AppDemoActions"),O=Object(l["O"])("Textarea"),v=Object(l["O"])("TextareaDoc");return Object(l["G"])(),Object(l["j"])("div",null,[Object(l["k"])("div",a,[c,Object(l["o"])(j)]),Object(l["k"])("div",u,[Object(l["k"])("div",o,[r,Object(l["o"])(O,{modelValue:d.value1,"onUpdate:modelValue":t[0]||(t[0]=function(e){return d.value1=e}),rows:"5",cols:"30"},null,8,["modelValue"]),s,Object(l["o"])(O,{modelValue:d.value2,"onUpdate:modelValue":t[1]||(t[1]=function(e){return d.value2=e}),autoResize:!0,rows:"5",cols:"30"},null,8,["modelValue"]),i,Object(l["o"])(O,{modelValue:d.value3,"onUpdate:modelValue":t[2]||(t[2]=function(e){return d.value3=e}),disabled:"",rows:"5",cols:"30"},null,8,["modelValue"])])]),Object(l["o"])(v)])}var d=Object(l["k"])("h5",null,"Import via Module",-1),p=Object(l["k"])("code",null,"\nimport Textarea from 'primevue/textarea';\n\n",-1),j=[p],O=Object(l["k"])("h5",null,"Import via CDN",-1),v=Object(l["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"><\/script>\n\n',-1),m=[v],k=Object(l["k"])("h5",null,"Getting Started",-1),h=Object(l["k"])("p",null,"A model can be bound using the standard v-model directive.",-1),x=Object(l["k"])("code",null,'\n<Textarea v-model="value" rows="5" cols="30" />\n\n',-1),f=[x],w=Object(l["k"])("h5",null,"AutoResize",-1),g=Object(l["k"])("p",null,"In auto resize mode, textarea grows instead of displaying a scrollbar.",-1),T=Object(l["k"])("code",null,'\n<Textarea v-model="value" :autoResize="true" rows="5" cols="30" />\n\n',-1),A=[T],D=Object(l["k"])("h5",null,"Properties",-1),y=Object(l["k"])("p",null,"Textarea passes any attribute to the underlying textarea element, additional attributes are the following.",-1),z=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Type"),Object(l["k"])("th",null,"Default"),Object(l["k"])("th",null,"Description")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"modelValue"),Object(l["k"])("td",null,"any"),Object(l["k"])("td",null,"null"),Object(l["k"])("td",null,"Value of the component.")]),Object(l["k"])("tr",null,[Object(l["k"])("td",null,"autoResize"),Object(l["k"])("td",null,"boolean"),Object(l["k"])("td",null,"false"),Object(l["k"])("td",null,"When present, height of textarea changes as being typed.")])])])],-1),V=Object(l["k"])("h5",null,"Events",-1),R=Object(l["k"])("p",null,"Any valid event such as focus, blur and input are passed to the underlying input element.",-1),G=Object(l["k"])("h5",null,"Styling",-1),N=Object(l["n"])("Following is the list of structural style classes, for theming classes visit "),B=Object(l["n"])("theming"),I=Object(l["n"])(" page."),S=Object(l["k"])("div",{class:"doc-tablewrapper"},[Object(l["k"])("table",{class:"doc-table"},[Object(l["k"])("thead",null,[Object(l["k"])("tr",null,[Object(l["k"])("th",null,"Name"),Object(l["k"])("th",null,"Element")])]),Object(l["k"])("tbody",null,[Object(l["k"])("tr",null,[Object(l["k"])("td",null,"p-inputtextarea"),Object(l["k"])("td",null,"Textarea element")])])])],-1),P=Object(l["k"])("h5",null,"Dependencies",-1),Z=Object(l["k"])("p",null,"None.",-1);function U(e,t,n,a,c,u){var o=Object(l["O"])("router-link"),r=Object(l["O"])("AppDoc"),s=Object(l["P"])("code");return Object(l["G"])(),Object(l["h"])(r,{name:"TextareaDemo",sources:c.sources,github:"textarea/TextareaDemo.vue"},{default:Object(l["Y"])((function(){return[d,Object(l["Z"])((Object(l["G"])(),Object(l["j"])("pre",null,j)),[[s,void 0,void 0,{script:!0}]]),O,Object(l["Z"])((Object(l["G"])(),Object(l["j"])("pre",null,m)),[[s]]),k,h,Object(l["Z"])((Object(l["G"])(),Object(l["j"])("pre",null,f)),[[s]]),w,g,Object(l["Z"])((Object(l["G"])(),Object(l["j"])("pre",null,A)),[[s]]),D,y,z,V,R,G,Object(l["k"])("p",null,[N,Object(l["o"])(o,{to:"/theming"},{default:Object(l["Y"])((function(){return[B]})),_:1}),I]),S,P,Z]})),_:1},8,["sources"])}var C={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <Textarea v-model="value1" rows="5" cols="30" />\n\n        <h5>Auto Resize</h5>\n        <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />\n\n        <h5>Disabled</h5>\n        <Textarea v-model="value3" disabled rows="5" cols="30" />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            value1: \'\',\n            value2: \'\',\n            value3: \'\'\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <Textarea v-model="value1" rows="5" cols="30" />\n\n        <h5>Auto Resize</h5>\n        <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />\n\n        <h5>Disabled</h5>\n        <Textarea v-model="value3" disabled rows="5" cols="30" />\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const value1 = ref(\'\');\n        const value2 = ref(\'\');\n        const value3 = ref(\'\');\n\n\t\treturn { value1, value2, value3 }\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/textarea/textarea.min.js"><\\/script>',content:'<div id="app">\n            <h5>Basic</h5>\n            <p-textarea v-model="value1" rows="5" cols="30"></p-textarea>\n\n            <h5>Auto Resize</h5>\n            <p-textarea v-model="value2" :auto-resize="true" rows="5" cols="30"></p-textarea>\n\n            <h5>Disabled</h5>\n            <p-textarea v-model="value3" disabled rows="5" cols="30"></p-textarea>\n        </div>\n\n        <script type="module">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const value1 = ref(\'\');\n                const value2 = ref(\'\');\n                const value3 = ref(\'\');\n\n                return { value1, value2, value3 }\n            },\n            components: {\n                "p-textarea": primevue.textarea\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}}},E=n("6b0d"),J=n.n(E);const Y=J()(C,[["render",U]]);var _=Y,F={data:function(){return{value1:"",value2:"",value3:""}},components:{TextareaDoc:_}};const M=J()(F,[["render",b]]);t["default"]=M}}]);