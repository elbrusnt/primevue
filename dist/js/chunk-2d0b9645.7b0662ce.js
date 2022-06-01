(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b9645"],{"336e":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"content-section introduction"},c=Object(r["k"])("div",{class:"feature-intro"},[Object(r["k"])("h1",null,[Object(r["n"])("DataTable "),Object(r["k"])("span",null,"Flex Scroll")])],-1),o={class:"content-section implementation"},s={class:"card",style:{height:"calc(100vh - 143px)"}};function u(e,t,n,u,l,i){var m=Object(r["O"])("AppDemoActions"),p=Object(r["O"])("Column"),d=Object(r["O"])("DataTable"),v=Object(r["O"])("AppDoc");return Object(r["G"])(),Object(r["j"])("div",null,[Object(r["k"])("div",a,[c,Object(r["o"])(m)]),Object(r["k"])("div",o,[Object(r["k"])("div",s,[Object(r["o"])(d,{value:l.customers,scrollable:!0,scrollHeight:"flex"},{default:Object(r["Y"])((function(){return[Object(r["o"])(p,{field:"name",header:"Name"}),Object(r["o"])(p,{field:"country.name",header:"Country"}),Object(r["o"])(p,{field:"representative.name",header:"Representative"}),Object(r["o"])(p,{field:"status",header:"Status"})]})),_:1},8,["value"])])]),Object(r["o"])(v,{name:"DataTableFlexScrollDemo",sources:l.sources,service:["CustomerService"],data:["customers-large"],github:"datatable/DataTableFlexScrollDemo.vue"},null,8,["sources"])])}var l=n("9fa9"),i={data:function(){return{customers:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div class="card" style="height: calc(100vh - 143px)">\n        <DataTable :value="customers" :scrollable="true" scrollHeight="flex">\n            <Column field="name" header="Name"></Column>\n            <Column field="country.name" header="Country"></Column>\n            <Column field="representative.name" header="Representative"></Column>\n            <Column field="status" header="Status"></Column>\n        </DataTable>\n    </div>\n</template>\n\n<script>\nimport CustomerService from \'./service/CustomerService\';\n\nexport default {\n    data() {\n        return {\n            customers: null\n        }\n    },\n    customerService: null,\n    created() {\n        this.customerService = new CustomerService();\n    },\n    mounted() {\n        this.customerService.getCustomersLarge().then(data => this.customers = data);\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div class="card" style="height: calc(100vh - 143px)">\n        <DataTable :value="customers" :scrollable="true" scrollHeight="flex">\n            <Column field="name" header="Name"></Column>\n            <Column field="country.name" header="Country"></Column>\n            <Column field="representative.name" header="Representative"></Column>\n            <Column field="status" header="Status"></Column>\n        </DataTable>\n    </div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport CustomerService from \'./service/CustomerService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            customerService.value.getCustomersLarge().then(data => customers.value = data);\n        })\n\n        const customers = ref(null);\n        const customerService = ref(new CustomerService());\n\n        return { customers }\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./CustomerService.js"><\\/script>',content:'<div id="app">\n            <div class="card" style="height: calc(100vh - 143px)">\n                <p-datatable :value="customers" :scrollable="true" scroll-height="flex">\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="country.name" header="Country"></p-column>\n                    <p-column field="representative.name" header="Representative"></p-column>\n                    <p-column field="status" header="Status"></p-column>\n                </p-datatable>\n            </div>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    customerService.value.getCustomersLarge().then(data => customers.value = data);\n                })\n\n                const customers = ref(null);\n                const customerService = ref(new CustomerService());\n\n                return { customers }\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}},customerService:null,created:function(){this.customerService=new l["a"]},mounted:function(){var e=this;this.customerService.getCustomersLarge().then((function(t){return e.customers=t}))}},m=n("6b0d"),p=n.n(m);const d=p()(i,[["render",u]]);t["default"]=d}}]);