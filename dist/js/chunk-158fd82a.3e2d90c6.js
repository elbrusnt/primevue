(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-158fd82a"],{"41c6":function(e,n,s){var i=s("ddae");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var t=s("499e").default;t("0d290ad6",i,!0,{sourceMap:!1,shadowMode:!1})},"8a08":function(e,n,s){"use strict";s.r(n);s("b0c0");var i=s("7a23"),t=function(e){return Object(i["J"])("data-v-734008d4"),e=e(),Object(i["H"])(),e},a={class:"content-section introduction"},o=t((function(){return Object(i["k"])("div",{class:"feature-intro"},[Object(i["k"])("h1",null,"TreeTable - Responsive"),Object(i["k"])("p",null,"TreeTable display can be optimized according for different screen sizes.")],-1)})),l={class:"content-section implementation"},d={class:"card"},r=t((function(){return Object(i["k"])("h5",null,"Scroll",-1)})),p=t((function(){return Object(i["k"])("p",null,[Object(i["n"])("Built-in responsiveness using the "),Object(i["k"])("b",null,"responsiveLayout"),Object(i["n"])(" property set to scroll.")],-1)})),c={class:"card"},m=t((function(){return Object(i["k"])("h5",null,"Custom",-1)})),u=t((function(){return Object(i["k"])("p",null,"Custom implementation using media queries.",-1)})),v={class:"sm-visible"},b={class:"sm-visible"};function h(e,n,s,t,h,y){var f=Object(i["O"])("AppDemoActions"),C=Object(i["O"])("Column"),O=Object(i["O"])("TreeTable"),j=Object(i["O"])("AppDoc");return Object(i["G"])(),Object(i["j"])("div",null,[Object(i["k"])("div",a,[o,Object(i["o"])(f)]),Object(i["k"])("div",l,[Object(i["k"])("div",d,[r,p,Object(i["o"])(O,{value:h.nodes,responsiveLayout:"scroll"},{default:Object(i["Y"])((function(){return[Object(i["o"])(C,{field:"name",header:"Name",expander:!0,style:{"min-width":"200px"}}),Object(i["o"])(C,{field:"size",header:"Size",style:{"min-width":"200px"}}),Object(i["o"])(C,{field:"type",header:"Type",style:{"min-width":"200px"}})]})),_:1},8,["value"])]),Object(i["k"])("div",c,[m,u,Object(i["o"])(O,{value:h.nodes},{default:Object(i["Y"])((function(){return[Object(i["o"])(C,{field:"name",header:"Name",expander:!0},{body:Object(i["Y"])((function(e){return[Object(i["n"])(Object(i["S"])(e.node.data.name)+" ",1),Object(i["k"])("span",v,Object(i["S"])(e.node.data.size),1),Object(i["k"])("span",b,Object(i["S"])(e.node.data.type),1)]})),_:1}),Object(i["o"])(C,{field:"size",header:"Size",headerClass:"sm-invisible",bodyClass:"sm-invisible"}),Object(i["o"])(C,{field:"type",header:"Type",headerClass:"sm-invisible",bodyClass:"sm-invisible"})]})),_:1},8,["value"])])]),Object(i["o"])(j,{name:"TreeTableResponsiveDemo",sources:h.sources,service:["NodeService"],data:["treetablenodes"],github:"treetable/TreeTableResponsiveDemo.vue"},null,8,["sources"])])}var y=s("82f4"),f={data:function(){return{nodes:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Scroll</h5>\n            <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>\n            <TreeTable :value="nodes" responsiveLayout="scroll">\n                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>\n                <Column field="size" header="Size" style="min-width:200px"></Column>\n                <Column field="type" header="Type" style="min-width:200px"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Custom</h5>\n            <p>Custom implementation using media queries.</p>\n            <TreeTable :value="nodes">\n                <Column field="name" header="Name" :expander="true">\n                    <template #body="slotProps">\n                        {{slotProps.node.data.name}}\n                        <span class="sm-visible">{{slotProps.node.data.size}}</span>\n                        <span class="sm-visible">{{slotProps.node.data.type}}</span>\n                    </template>\n                </Column>\n                <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>\n                <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    data() {\n        return {\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeTableNodes().then(data => this.nodes = data);\n    }\n}\n<\\/script>\n\n<style scoped lang="scss">\n.sm-visible {\n    display: none;\n}\n\n@media screen and (max-width: 40em) {\n    ::v-deep(.sm-invisible) {\n        display: none;\n    }\n\n    ::v-deep(.sm-visible) {\n        display: inline;\n        margin-right: .5rem;\n    }\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Scroll</h5>\n            <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>\n            <TreeTable :value="nodes" responsiveLayout="scroll">\n                <Column field="name" header="Name" :expander="true" style="min-width:200px"></Column>\n                <Column field="size" header="Size" style="min-width:200px"></Column>\n                <Column field="type" header="Type" style="min-width:200px"></Column>\n            </TreeTable>\n        </div>\n\n        <div class="card">\n            <h5>Custom</h5>\n            <p>Custom implementation using media queries.</p>\n            <TreeTable :value="nodes">\n                <Column field="name" header="Name" :expander="true">\n                    <template #body="slotProps">\n                        {{slotProps.node.data.name}}\n                        <span class="sm-visible">{{slotProps.node.data.size}}</span>\n                        <span class="sm-visible">{{slotProps.node.data.type}}</span>\n                    </template>\n                </Column>\n                <Column field="size" header="Size" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>\n                <Column field="type" header="Type" headerClass="sm-invisible" bodyClass="sm-invisible"></Column>\n            </TreeTable>\n        </div>\n    </div>                    \n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            nodeService.value.getTreeTableNodes().then(data => nodes.value = data);\n        })\n\n        const nodes = ref();\n        const nodeService = ref(new NodeService());\n\n        return { nodes, nodeService }\n    }\n}\n<\\/script>\n\n<style scoped lang="scss">\n.sm-visible {\n    display: none;\n}\n\n@media screen and (max-width: 40em) {\n    ::v-deep(.sm-invisible) {\n        display: none;\n    }\n\n    ::v-deep(.sm-visible) {\n        display: inline;\n        margin-right: .5rem;\n    }\n}\n</style>'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/treetable/treetable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./NodeService.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <h5>Scroll</h5>\n                <p>Built-in responsiveness using the <b>responsiveLayout</b> property set to scroll.</p>\n                <p-treetable :value="nodes" responsive-layout="scroll">\n                    <p-column field="name" header="Name" :expander="true" style="min-width:200px"></p-column>\n                    <p-column field="size" header="Size" style="min-width:200px"></p-column>\n                    <p-column field="type" header="Type" style="min-width:200px"></p-column>\n                </p-treetable>\n            </div>\n\n            <div class="card">\n                <h5>Custom</h5>\n                <p>Custom implementation using media queries.</p>\n                <p-treetable :value="nodes">\n                    <p-column field="name" header="Name" :expander="true">\n                        <template #body="slotProps">\n                            {{slotProps.node.data.name}}\n                            <span class="sm-visible">{{slotProps.node.data.size}}</span>\n                            <span class="sm-visible">{{slotProps.node.data.type}}</span>\n                        </template>\n                    </p-column>\n                    <p-column field="size" header="Size" header-class="sm-invisible" body-class="sm-invisible"></p-column>\n                    <p-column field="type" header="Type" header-class="sm-invisible" body-class="sm-invisible"></p-column>\n                </p-treetable>\n            </div>\n        </div>                    \n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    nodeService.value.getTreeTableNodes().then(data => nodes.value = data);\n                })\n\n                const nodes = ref();\n                const nodeService = ref(new NodeService());\n\n                return { nodes, nodeService }\n            },\n            components: {\n                "p-treetable": primevue.treetable,\n                "p-column": primevue.column\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n        <style>\n        .sm-visible {\n            display: none;\n        }\n\n        @media screen and (max-width: 40em) {\n            .sm-invisible {\n                display: none;\n            }\n\n            .sm-visible {\n                display: inline;\n                margin-right: .5rem;\n            }\n        }\n        </style>'}}}},nodeService:null,created:function(){this.nodeService=new y["a"]},mounted:function(){var e=this;this.nodeService.getTreeTableNodes().then((function(n){return e.nodes=n}))}},C=(s("de56"),s("6b0d")),O=s.n(C);const j=O()(f,[["render",h],["__scopeId","data-v-734008d4"]]);n["default"]=j},ddae:function(e,n,s){var i=s("24fb");n=i(!1),n.push([e.i,".sm-visible[data-v-734008d4]{display:none}@media screen and (max-width:40em){[data-v-734008d4] .sm-invisible{display:none}[data-v-734008d4] .sm-visible{display:inline;margin-right:.5rem}}",""]),e.exports=n},de56:function(e,n,s){"use strict";s("41c6")}}]);