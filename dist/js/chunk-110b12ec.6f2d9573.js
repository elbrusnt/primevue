(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-110b12ec"],{cbdc:function(e,n,t){"use strict";t.r(n);var o=t("7a23"),r={class:"content-section introduction"},c=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,[Object(o["n"])("DataTable "),Object(o["k"])("span",null,"Reorder")]),Object(o["k"])("p",null,"Order of the columns and rows can be changed using drag and drop.")],-1),d={class:"content-section implementation"},a={class:"card"};function s(e,n,t,s,u,l){var i=Object(o["O"])("AppDemoActions"),m=Object(o["O"])("Column"),p=Object(o["O"])("DataTable"),v=Object(o["O"])("AppDoc");return Object(o["G"])(),Object(o["j"])("div",null,[Object(o["k"])("div",r,[c,Object(o["o"])(i)]),Object(o["k"])("div",d,[Object(o["k"])("div",a,[Object(o["o"])(p,{value:u.products,reorderableColumns:!0,onColumnReorder:l.onColReorder,onRowReorder:l.onRowReorder,responsiveLayout:"scroll"},{default:Object(o["Y"])((function(){return[Object(o["o"])(m,{rowReorder:!0,headerStyle:"width: 3rem",reorderableColumn:!1}),(Object(o["G"])(!0),Object(o["j"])(o["a"],null,Object(o["M"])(u.columns,(function(e){return Object(o["G"])(),Object(o["h"])(m,{field:e.field,header:e.header,key:e.field},null,8,["field","header"])})),128))]})),_:1},8,["value","onColumnReorder","onRowReorder"])])]),Object(o["o"])(v,{name:"DataTableReorderDemo",sources:u.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableReorderDemo.vue"},null,8,["sources"])])}var u=t("e9c0"),l={data:function(){return{columns:null,products:null,sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n\t<div>\n        <Toast />\n\n        <DataTable :value=\"products\" :reorderableColumns=\"true\" @columnReorder=\"onColReorder\" @rowReorder=\"onRowReorder\" responsiveLayout=\"scroll\">\n            <Column :rowReorder=\"true\" headerStyle=\"width: 3rem\" :reorderableColumn=\"false\" />\n            <Column v-for=\"col of columns\" :field=\"col.field\" :header=\"col.header\" :key=\"col.field\"></Column>\n        </DataTable>\n\t</div>\n</template>\n\n<script>\nimport ProductService from './service/ProductService';\n\nexport default {\n    data() {\n        return {\n            columns: null,\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n\n        this.columns = [\n            {field: 'code', header: 'Code'},\n            {field: 'name', header: 'Name'},\n            {field: 'category', header: 'Category'},\n            {field: 'quantity', header: 'Quantity'}\n        ];\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    },\n    methods: {\n        onColReorder() {\n            this.$toast.add({severity:'success', summary: 'Column Reordered', life: 3000});\n        },\n        onRowReorder(event) {\n            this.products = event.value;\n            this.$toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});\n        }\n    }\n}\n<\\/script>                  \n"},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n\t<div>\n        <Toast />\n        <DataTable :value=\"products\" :reorderableColumns=\"true\" @columnReorder=\"onColReorder\" @rowReorder=\"onRowReorder\" responsiveLayout=\"scroll\">\n            <Column :rowReorder=\"true\" headerStyle=\"width: 3rem\" :reorderableColumn=\"false\" />\n            <Column v-for=\"col of columns\" :field=\"col.field\" :header=\"col.header\" :key=\"col.field\"></Column>\n        </DataTable>\n\t</div>\n</template>\n\n<script>\nimport { ref, onMounted } from 'vue';\nimport { useToast } from 'primevue/usetoast';\nimport ProductService from './service/ProductService';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        }) \n\n        const toast = useToast();\n        const columns = ref([\n            {field: 'code', header: 'Code'},\n            {field: 'name', header: 'Name'},\n            {field: 'category', header: 'Category'},\n            {field: 'quantity', header: 'Quantity'}\n        ]);\n        const products = ref();\n        const productService = ref(new ProductService());\n\n        const onColReorder = () => {\n            toast.add({severity:'success', summary: 'Column Reordered', life: 3000});\n        };\n        const onRowReorder = (event) => {\n            products.value = event.value;\n            toast.add({severity:'success', summary: 'Rows Reordered', life: 3000});\n        };\n\n        return { columns, products, onColReorder, onRowReorder }\n    }\n}\n<\\/script>                  \n"},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n            <p-toast></p-toast>\n            <p-datatable :value="products" :reorderable-columns="true" @column-reorder="onColReorder" @row-reorder="onRowReorder" responsive-layout="scroll">\n                <p-column :row-reorder="true" header-style="width: 3rem" :reorderable-column="false"></p-column>\n                <p-column v-for="col of columns" :field="col.field" :header="col.header" :key="col.field"></p-column>\n            </p-datatable>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n        const { useToast } = primevue.usetoast;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    productService.value.getProductsSmall().then(data => products.value = data);\n                }) \n\n                const toast = useToast();\n                const columns = ref([\n                    {field: \'code\', header: \'Code\'},\n                    {field: \'name\', header: \'Name\'},\n                    {field: \'category\', header: \'Category\'},\n                    {field: \'quantity\', header: \'Quantity\'}\n                ]);\n                const products = ref();\n                const productService = ref(new ProductService());\n\n                const onColReorder = () => {\n                    toast.add({severity:\'success\', summary: \'Column Reordered\', life: 3000});\n                };\n                const onRowReorder = (event) => {\n                    products.value = event.value;\n                    toast.add({severity:\'success\', summary: \'Rows Reordered\', life: 3000});\n                };\n\n                return { columns, products, onColReorder, onRowReorder }\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column,\n                "p-toast": primevue.toast\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .use(primevue.toastservice)\n            .mount("#app");\n        <\\/script>                  \n'}}}},productService:null,created:function(){this.productService=new u["a"],this.columns=[{field:"code",header:"Code"},{field:"name",header:"Name"},{field:"category",header:"Category"},{field:"quantity",header:"Quantity"}]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(n){return e.products=n}))},methods:{onColReorder:function(){this.$toast.add({severity:"success",summary:"Column Reordered",life:3e3})},onRowReorder:function(e){this.products=e.value,this.$toast.add({severity:"success",summary:"Rows Reordered",life:3e3})}}},i=t("6b0d"),m=t.n(i);const p=m()(l,[["render",s]]);n["default"]=p},e9c0:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t("d4ec"),r=t("bee2"),c=(t("d3b7"),function(){function e(){Object(o["a"])(this,e)}return Object(r["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);