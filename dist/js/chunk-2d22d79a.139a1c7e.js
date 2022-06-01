(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d79a"],{f83e:function(t,n,e){"use strict";e.r(n);var o=e("7a23"),l={class:"content-section introduction"},c=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,"Toolbar"),Object(o["k"])("p",null,"Toolbar is a grouping component for buttons and other content.")],-1),i={class:"content-section implementation"},p=Object(o["k"])("i",{class:"pi pi-bars p-toolbar-separator mr-2"},null,-1);function a(t,n,e,a,s,r){var b=Object(o["O"])("AppDemoActions"),u=Object(o["O"])("Button"),m=Object(o["O"])("SplitButton"),d=Object(o["O"])("Toolbar"),j=Object(o["O"])("ToolbarDoc");return Object(o["G"])(),Object(o["j"])("div",null,[Object(o["k"])("div",l,[c,Object(o["o"])(b)]),Object(o["k"])("div",i,[Object(o["o"])(d,null,{start:Object(o["Y"])((function(){return[Object(o["o"])(u,{label:"New",icon:"pi pi-plus",class:"mr-2"}),Object(o["o"])(u,{label:"Upload",icon:"pi pi-upload",class:"p-button-success"}),p,Object(o["o"])(m,{label:"Save",icon:"pi pi-check",model:s.items,class:"p-button-warning"},null,8,["model"])]})),end:Object(o["Y"])((function(){return[Object(o["o"])(u,{icon:"pi pi-search",class:"mr-2"}),Object(o["o"])(u,{icon:"pi pi-calendar",class:"p-button-success mr-2"}),Object(o["o"])(u,{icon:"pi pi-times",class:"p-button-danger"})]})),_:1})]),Object(o["o"])(j)])}var s=Object(o["k"])("h5",null,"Import via Module",-1),r=Object(o["k"])("code",null,"\nimport Toolbar from 'primevue/toolbar';\n\n",-1),b=[r],u=Object(o["k"])("h5",null,"Import via CDN",-1),m=Object(o["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/toolbar/toolbar.min.js"><\/script>\n\n',-1),d=[m],j=Object(o["k"])("h5",null,"Getting Started",-1),O=Object(o["k"])("p",null,[Object(o["n"])("Toolbar provides "),Object(o["k"])("i",null,"start"),Object(o["n"])(" and "),Object(o["k"])("i",null,"end"),Object(o["n"])(" templates to place content at these sections.")],-1),k=Object(o["k"])("code",null,'\n<Toolbar>\n    <template #start>\n        <Button label="New" icon="pi pi-plus" class="mr-2" />\n        <Button label="Upload" icon="pi pi-upload" class="p-button-success" />\n        <i class="pi pi-bars p-toolbar-separator mr-2" />\n        <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>\n    </template>\n\n    <template #end>\n        <Button icon="pi pi-search" class="mr-2" />\n        <Button icon="pi pi-calendar" class="p-button-success mr-2" />\n        <Button icon="pi pi-times" class="p-button-danger" />\n    </template>\n</Toolbar>\n\n',-1),h=[k],v=Object(o["k"])("h5",null,"Slots",-1),f=Object(o["k"])("div",{class:"doc-tablewrapper"},[Object(o["k"])("table",{class:"doc-table"},[Object(o["k"])("thead",null,[Object(o["k"])("tr",null,[Object(o["k"])("th",null,"Name"),Object(o["k"])("th",null,"Parameters")])]),Object(o["k"])("tbody",null,[Object(o["k"])("tr",null,[Object(o["k"])("td",null,"start"),Object(o["k"])("td",null,"-")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"end"),Object(o["k"])("td",null,"-")])])])],-1),g=Object(o["k"])("h5",null,"Styling",-1),w=Object(o["n"])("Following is the list of structural style classes, for theming classes visit "),B=Object(o["n"])("theming"),S=Object(o["n"])(" page."),T=Object(o["k"])("div",{class:"doc-tablewrapper"},[Object(o["k"])("table",{class:"doc-table"},[Object(o["k"])("thead",null,[Object(o["k"])("tr",null,[Object(o["k"])("th",null,"Name"),Object(o["k"])("th",null,"Element")])]),Object(o["k"])("tbody",null,[Object(o["k"])("tr",null,[Object(o["k"])("td",null,"p-toolbar"),Object(o["k"])("td",null,"Main container element.")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"p-toolbar-group-left"),Object(o["k"])("td",null,"Left content container.")]),Object(o["k"])("tr",null,[Object(o["k"])("td",null,"p-toolbar-group-right"),Object(o["k"])("td",null,"Right content container.")])])])],-1),U=Object(o["k"])("h5",null,"Dependencies",-1),D=Object(o["k"])("p",null,"None.",-1);function N(t,n,e,l,c,i){var p=Object(o["O"])("router-link"),a=Object(o["O"])("AppDoc"),r=Object(o["P"])("code");return Object(o["G"])(),Object(o["h"])(a,{name:"ToolbarDemo",sources:c.sources,github:"toolbar/ToolbarDemo.vue"},{default:Object(o["Y"])((function(){return[s,Object(o["Z"])((Object(o["G"])(),Object(o["j"])("pre",null,b)),[[r,void 0,void 0,{script:!0}]]),u,Object(o["Z"])((Object(o["G"])(),Object(o["j"])("pre",null,d)),[[r]]),j,O,Object(o["Z"])((Object(o["G"])(),Object(o["j"])("pre",null,h)),[[r]]),v,f,g,Object(o["k"])("p",null,[w,Object(o["o"])(p,{to:"/theming"},{default:Object(o["Y"])((function(){return[B]})),_:1}),S]),T,U,D]})),_:1},8,["sources"])}var y={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <Toolbar>\n            <template #start>\n                <Button label="New" icon="pi pi-plus" class="mr-2" />\n                <Button label="Upload" icon="pi pi-upload" class="p-button-success" />\n                <i class="pi pi-bars p-toolbar-separator mr-2" />\n                <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>\n            </template>\n\n            <template #end>\n                <Button icon="pi pi-search" class="mr-2" />\n                <Button icon="pi pi-calendar" class="p-button-success mr-2" />\n                <Button icon="pi pi-times" class="p-button-danger" />\n            </template>\n        </Toolbar>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            items: [\n                {\n                    label: \'Update\',\n                    icon: \'pi pi-refresh\'\n                },\n                {\n                    label: \'Delete\',\n                    icon: \'pi pi-times\'\n                },\n                {\n                    label: \'Vue Website\',\n                    icon: \'pi pi-external-link\',\n                    command: () => {\n                        window.location.href = \'https://vuejs.org/\'\n                    }\n                },\n                {   label: \'Upload\',\n                    icon: \'pi pi-upload\',\n                    command: () => {\n                        window.location.hash = "/fileupload"\n                    }\n                }\n            ]\n        }\n    }\n}\n<\\/script>\n\n<style scoped>\n.p-button,\n.p-splitbutton {\n    margin-bottom: 0.5rem;\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <Toolbar>\n            <template #start>\n                <Button label="New" icon="pi pi-plus" class="mr-2" />\n                <Button label="Upload" icon="pi pi-upload" class="p-button-success" />\n                <i class="pi pi-bars p-toolbar-separator mr-2" />\n                <SplitButton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></SplitButton>\n            </template>\n\n            <template #end>\n                <Button icon="pi pi-search" class="mr-2" />\n                <Button icon="pi pi-calendar" class="p-button-success mr-2" />\n                <Button icon="pi pi-times" class="p-button-danger" />\n            </template>\n        </Toolbar>\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const items = ref([\n            {\n                label: \'Update\',\n                icon: \'pi pi-refresh\'\n            },\n            {\n                label: \'Delete\',\n                icon: \'pi pi-times\'\n            },\n            {\n                label: \'Vue Website\',\n                icon: \'pi pi-external-link\',\n                command: () => {\n                    window.location.href = \'https://vuejs.org/\'\n                }\n            },\n            {   label: \'Upload\',\n                icon: \'pi pi-upload\',\n                command: () => {\n                    window.location.hash = "/fileupload"\n                }\n            }\n        ]);\n\n        return { items }\n    }\n}\n<\\/script>\n\n<style scoped>\n.p-button,\n.p-splitbutton {\n    margin-bottom: 0.5rem;\n}\n</style>'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/toolbar/toolbar.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/splitbutton/splitbutton.min.js"><\\/script>',content:'<div id="app">\n            <p-toolbar>\n                <template #start>\n                    <p-button label="New" icon="pi pi-plus" class="mr-2"></p-button>\n                    <p-button label="Upload" icon="pi pi-upload" class="p-button-success"></p-button>\n                    <i class="pi pi-bars p-toolbar-separator mr-2"></i>\n                    <p-splitbutton label="Save" icon="pi pi-check" :model="items" class="p-button-warning"></p-splitbutton>\n                </template>\n\n                <template #end>\n                    <p-button icon="pi pi-search" class="mr-2"></p-button>\n                    <p-button icon="pi pi-calendar" class="p-button-success mr-2"></p-button>\n                    <p-button icon="pi pi-times" class="p-button-danger"></p-button>\n                </template>\n            </p-toolbar>\n        </div>\n\n        <script type="module">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const items = ref([\n                    {\n                        label: \'Update\',\n                        icon: \'pi pi-refresh\'\n                    },\n                    {\n                        label: \'Delete\',\n                        icon: \'pi pi-times\'\n                    },\n                    {\n                        label: \'Vue Website\',\n                        icon: \'pi pi-external-link\',\n                        command: () => {\n                            window.location.href = \'https://vuejs.org/\'\n                        }\n                    },\n                    {   label: \'Upload\',\n                        icon: \'pi pi-upload\',\n                        command: () => {\n                            window.location.hash = "/fileupload"\n                        }\n                    }\n                ]);\n\n                return { items }\n            },\n            components: {\n                "p-toolbar": primevue.toolbar,\n                "p-splitbutton": primevue.splitbutton,\n                "p-button": primevue.button\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n        <style>\n        .p-button {\n            margin-bottom: 0.5rem;\n        }\n        </style>'}}}}},A=e("6b0d"),x=e.n(A);const G=x()(y,[["render",N]]);var V=G,I={data:function(){var t=this;return{items:[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Vue Website",icon:"pi pi-external-link",command:function(){window.location.href="https://vuejs.org/"}},{label:"Upload",icon:"pi pi-upload",command:function(){t.$router.push("fileupload")}}]}},components:{ToolbarDoc:V}};const P=x()(I,[["render",a]]);n["default"]=P}}]);