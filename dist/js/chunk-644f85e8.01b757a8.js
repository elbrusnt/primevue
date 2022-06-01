(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644f85e8"],{"21dc":function(e,n,t){"use strict";t.r(n);var o=t("7a23"),a={class:"content-section introduction"},r=Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,[Object(o["n"])("DataTable "),Object(o["k"])("span",null,"Column Resize")]),Object(o["k"])("p",null,'Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; "fit" and "expand". Fit is the default one and the overall table width does not change when a column is resized. In "expand" mode, table width also changes along with the column width.')],-1),c={class:"content-section implementation"},u={class:"card"},d=Object(o["k"])("h5",null,"Fit Mode",-1),l={class:"card"},i=Object(o["k"])("h5",null,"Expand Mode",-1);function s(e,n,t,s,m,p){var h=Object(o["O"])("AppDemoActions"),v=Object(o["O"])("Column"),f=Object(o["O"])("DataTable"),b=Object(o["O"])("AppDoc");return Object(o["G"])(),Object(o["j"])("div",null,[Object(o["k"])("div",a,[r,Object(o["o"])(h)]),Object(o["k"])("div",c,[Object(o["k"])("div",u,[d,Object(o["o"])(f,{value:m.products,resizableColumns:!0,columnResizeMode:"fit",showGridlines:"",responsiveLayout:"scroll"},{default:Object(o["Y"])((function(){return[Object(o["o"])(v,{field:"code",header:"Code"}),Object(o["o"])(v,{field:"name",header:"Name"}),Object(o["o"])(v,{field:"category",header:"Category"}),Object(o["o"])(v,{field:"quantity",header:"Quantity"})]})),_:1},8,["value"])]),Object(o["k"])("div",l,[i,Object(o["o"])(f,{value:m.products,resizableColumns:!0,columnResizeMode:"expand",showGridlines:"",responsiveLayout:"scroll"},{default:Object(o["Y"])((function(){return[Object(o["o"])(v,{field:"code",header:"Code"}),Object(o["o"])(v,{field:"name",header:"Name"}),Object(o["o"])(v,{field:"category",header:"Category"}),Object(o["o"])(v,{field:"quantity",header:"Quantity"})]})),_:1},8,["value"])])]),Object(o["o"])(b,{name:"DataTableColResizeDemo",sources:m.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableColResizeDemo.vue"},null,8,["sources"])])}var m=t("e9c0"),p={data:function(){return{products:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Fit Mode</h5>\n            <DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll">\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Expand Mode</h5>\n            <DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines responsiveLayout="scroll">\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>    \n    </div>\n</template>\n\n<script>\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    data() {\n        return {\n            products: null,\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <div class="card">\n            <h5>Fit Mode</h5>\n            <DataTable :value="products" :resizableColumns="true" columnResizeMode="fit" showGridlines responsiveLayout="scroll">\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Expand Mode</h5>\n            <DataTable :value="products" :resizableColumns="true" columnResizeMode="expand" showGridlines responsiveLayout="scroll">\n                <Column field="code" header="Code"></Column>\n                <Column field="name" header="Name"></Column>\n                <Column field="category" header="Category"></Column>\n                <Column field="quantity" header="Quantity"></Column>\n            </DataTable>\n        </div>    \n    </div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const products = ref();\n        const productService = ref(new ProductService());\n\n        return { products, productService }\n    }\n}\n<\\/script>\n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <h5>Fit Mode</h5>\n                <p-datatable :value="products" :resizable-columns="true" column-resize-mode="fit" show-gridlines responsive-layout="scroll">\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>Expand Mode</h5>\n                <p-datatable :value="products" :resizable-columns="true" column-resize-mode="expand" show-gridlines responsive-layout="scroll">\n                    <p-column field="code" header="Code"></p-column>\n                    <p-column field="name" header="Name"></p-column>\n                    <p-column field="category" header="Category"></p-column>\n                    <p-column field="quantity" header="Quantity"></p-column>\n                </p-datatable>\n            </div>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    productService.value.getProductsSmall().then(data => products.value = data);\n                })\n\n                const products = ref();\n                const productService = ref(new ProductService());\n\n                return { products, productService }\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n'}}}},productService:null,created:function(){this.productService=new m["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(n){return e.products=n}))}},h=t("6b0d"),v=t.n(h);const f=v()(p,[["render",s]]);n["default"]=f},e9c0:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("d4ec"),a=t("bee2"),r=(t("d3b7"),function(){function e(){Object(o["a"])(this,e)}return Object(a["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);