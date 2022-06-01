(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d22fac5"],{6319:function(e,t,r){"use strict";r.r(t);var n=r("7a23"),o={class:"content-section introduction"},a=Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,[Object(n["n"])("DataTable "),Object(n["k"])("span",null,"Sort")]),Object(n["k"])("p",null,"Enabling sortable property on a column is enough to make a column sortable. Multiple column sorting is enabled using sortMode property and used with metaKey.")],-1),l={class:"content-section implementation"},u={class:"card"},c=Object(n["k"])("h5",null,"Single Column",-1),d={class:"card"},s=Object(n["k"])("h5",null,"Multiple Columns",-1),i=Object(n["k"])("p",null,"Use metakey to add a column to the sort selection.",-1),m={class:"card"},p=Object(n["k"])("h5",null,"Presort",-1),b={class:"card"},f=Object(n["k"])("h5",null,"Removable Sort",-1);function C(e,t,r,C,y,h){var v=Object(n["O"])("AppDemoActions"),j=Object(n["O"])("Column"),O=Object(n["O"])("DataTable"),P=Object(n["O"])("AppDoc");return Object(n["G"])(),Object(n["j"])("div",null,[Object(n["k"])("div",o,[a,Object(n["o"])(v)]),Object(n["k"])("div",l,[Object(n["k"])("div",u,[c,Object(n["o"])(O,{value:y.products,responsiveLayout:"scroll"},{default:Object(n["Y"])((function(){return[Object(n["o"])(j,{field:"code",header:"Code",sortable:!0}),Object(n["o"])(j,{field:"name",header:"Name",sortable:!0}),Object(n["o"])(j,{field:"category",header:"Category",sortable:!0}),Object(n["o"])(j,{field:"quantity",header:"Quantity",sortable:!0}),Object(n["o"])(j,{field:"price",header:"Price",sortable:!0},{body:Object(n["Y"])((function(e){return[Object(n["n"])(Object(n["S"])(h.formatCurrency(e.data.price)),1)]})),_:1})]})),_:1},8,["value"])]),Object(n["k"])("div",d,[s,i,Object(n["o"])(O,{value:y.products,sortMode:"multiple",responsiveLayout:"scroll"},{default:Object(n["Y"])((function(){return[Object(n["o"])(j,{field:"code",header:"Code",sortable:!0}),Object(n["o"])(j,{field:"name",header:"Name",sortable:!0}),Object(n["o"])(j,{field:"category",header:"Category",sortable:!0}),Object(n["o"])(j,{field:"quantity",header:"Quantity",sortable:!0}),Object(n["o"])(j,{field:"price",header:"Price",sortable:!0},{body:Object(n["Y"])((function(e){return[Object(n["n"])(Object(n["S"])(h.formatCurrency(e.data.price)),1)]})),_:1})]})),_:1},8,["value"])]),Object(n["k"])("div",m,[p,Object(n["o"])(O,{value:y.products,sortField:"category",sortOrder:-1,responsiveLayout:"scroll"},{default:Object(n["Y"])((function(){return[Object(n["o"])(j,{field:"code",header:"Code",sortable:!0}),Object(n["o"])(j,{field:"name",header:"Name",sortable:!0}),Object(n["o"])(j,{field:"category",header:"Category",sortable:!0}),Object(n["o"])(j,{field:"quantity",header:"Quantity",sortable:!0}),Object(n["o"])(j,{field:"price",header:"Price",sortable:!0},{body:Object(n["Y"])((function(e){return[Object(n["n"])(Object(n["S"])(h.formatCurrency(e.data.price)),1)]})),_:1})]})),_:1},8,["value"])]),Object(n["k"])("div",b,[f,Object(n["o"])(O,{value:y.products,removableSort:"",responsiveLayout:"scroll"},{default:Object(n["Y"])((function(){return[Object(n["o"])(j,{field:"code",header:"Code",sortable:!0}),Object(n["o"])(j,{field:"name",header:"Name",sortable:!0}),Object(n["o"])(j,{field:"category",header:"Category",sortable:!0}),Object(n["o"])(j,{field:"quantity",header:"Quantity",sortable:!0}),Object(n["o"])(j,{field:"price",header:"Price",sortable:!0},{body:Object(n["Y"])((function(e){return[Object(n["n"])(Object(n["S"])(h.formatCurrency(e.data.price)),1)]})),_:1})]})),_:1},8,["value"])])]),Object(n["o"])(P,{name:"DataTableSortDemo",sources:y.sources,service:["ProductService"],data:["products-small"],github:"datatable/DataTableSortDemo.vue"},null,8,["sources"])])}var y=r("e9c0"),h={data:function(){return{products:null,sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n\t<div>\n        <div class="card">\n            <h5>Single Column</h5>\n            <DataTable :value="products" responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Multiple Columns</h5>\n            <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Presort</h5>\n            <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Removable Sort</h5>\n            <DataTable :value="products" removableSort responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n    </div>\n</template>\n\n<script>\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    data() {\n        return {\n            products: null\n        }\n    },\n    productService: null,\n    created() {\n        this.productService = new ProductService();\n    },\n    mounted() {\n        this.productService.getProductsSmall().then(data => this.products = data);\n    },\n    methods: {\n        formatCurrency(value) {\n            return value.toLocaleString(\'en-US\', {style: \'currency\', currency: \'USD\'});\n        }\n    }\n}\n<\\/script>                   \n'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n\t<div>\n        <div class="card">\n            <h5>Single Column</h5>\n            <DataTable :value="products" responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Multiple Columns</h5>\n            <DataTable :value="products" sortMode="multiple" responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Presort</h5>\n            <DataTable :value="products" sortField="category" :sortOrder="-1" responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n\n        <div class="card">\n            <h5>Removable Sort</h5>\n            <DataTable :value="products" removableSort responsiveLayout="scroll">\n                <Column field="code" header="Code" :sortable="true"></Column>\n                <Column field="name" header="Name" :sortable="true"></Column>\n                <Column field="category" header="Category" :sortable="true"></Column>\n                <Column field="quantity" header="Quantity" :sortable="true"></Column>\n                <Column field="price" header="Price" :sortable="true">\n                    <template #body="slotProps">\n                        {{formatCurrency(slotProps.data.price)}}\n                    </template>\n                </Column>\n            </DataTable>\n        </div>\n    </div>\n</template>\n\n<script>\nimport { ref, onMounted } from \'vue\';\nimport ProductService from \'./service/ProductService\';\n\nexport default {\n    setup() {\n        onMounted(() => {\n            productService.value.getProductsSmall().then(data => products.value = data);\n        })\n\n        const products = ref();\n        const productService = ref(new ProductService());\n        \n        const formatCurrency = (value) => {\n            return value.toLocaleString(\'en-US\', {style: \'currency\', currency: \'USD\'});\n        };\n\n        return { products, formatCurrency }\n    }\n}\n<\\/script>                   \n'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/datatable/datatable.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/column/column.min.js"><\\/script>\n        <script src="./ProductService.js"><\\/script>',content:'<div id="app">\n            <div class="card">\n                <h5>Single Column</h5>\n                <p-datatable :value="products" responsive-layout="scroll">\n                    <p-column field="code" header="Code" :sortable="true"></p-column>\n                    <p-column field="name" header="Name" :sortable="true"></p-column>\n                    <p-column field="category" header="Category" :sortable="true"></p-column>\n                    <p-column field="quantity" header="Quantity" :sortable="true"></p-column>\n                    <p-column field="price" header="Price" :sortable="true">\n                        <template #body="slotProps">\n                            {{formatCurrency(slotProps.data.price)}}\n                        </template>\n                    </p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>Multiple Columns</h5>\n                <p-datatable :value="products" sort-mode="multiple" responsive-layout="scroll">\n                    <p-column field="code" header="Code" :sortable="true"></p-column>\n                    <p-column field="name" header="Name" :sortable="true"></p-column>\n                    <p-column field="category" header="Category" :sortable="true"></p-column>\n                    <p-column field="quantity" header="Quantity" :sortable="true"></p-column>\n                    <p-column field="price" header="Price" :sortable="true">\n                        <template #body="slotProps">\n                            {{formatCurrency(slotProps.data.price)}}\n                        </template>\n                    </p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>Presort</h5>\n                <p-datatable :value="products" sort-field="category" :sort-order="-1" responsive-layout="scroll">\n                    <p-column field="code" header="Code" :sortable="true"></p-column>\n                    <p-column field="name" header="Name" :sortable="true"></p-column>\n                    <p-column field="category" header="Category" :sortable="true"></p-column>\n                    <p-column field="quantity" header="Quantity" :sortable="true"></p-column>\n                    <p-column field="price" header="Price" :sortable="true">\n                        <template #body="slotProps">\n                            {{formatCurrency(slotProps.data.price)}}\n                        </template>\n                    </p-column>\n                </p-datatable>\n            </div>\n\n            <div class="card">\n                <h5>Removable Sort</h5>\n                <p-datatable :value="products" removable-sort responsive-layout="scroll">\n                    <p-column field="code" header="Code" :sortable="true"></p-column>\n                    <p-column field="name" header="Name" :sortable="true"></p-column>\n                    <p-column field="category" header="Category" :sortable="true"></p-column>\n                    <p-column field="quantity" header="Quantity" :sortable="true"></p-column>\n                    <p-column field="price" header="Price" :sortable="true">\n                        <template #body="slotProps">\n                            {{formatCurrency(slotProps.data.price)}}\n                        </template>\n                    </p-column>\n                </p-datatable>\n            </div>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    productService.value.getProductsSmall().then(data => products.value = data);\n                })\n\n                const products = ref();\n                const productService = ref(new ProductService());\n                \n                const formatCurrency = (value) => {\n                    return value.toLocaleString(\'en-US\', {style: \'currency\', currency: \'USD\'});\n                };\n\n                return { products, formatCurrency }\n            },\n            components: {\n                "p-datatable": primevue.datatable,\n                "p-column": primevue.column\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>                   \n'}}}},productService:null,created:function(){this.productService=new y["a"]},mounted:function(){var e=this;this.productService.getProductsSmall().then((function(t){return e.products=t}))},methods:{formatCurrency:function(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}}},v=r("6b0d"),j=r.n(v);const O=j()(h,[["render",C]]);t["default"]=O},e9c0:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("d4ec"),o=r("bee2"),a=(r("d3b7"),function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,[{key:"getProductsSmall",value:function(){return fetch("demo/data/products-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProducts",value:function(){return fetch("demo/data/products.json").then((function(e){return e.json()})).then((function(e){return e.data}))}},{key:"getProductsWithOrdersSmall",value:function(){return fetch("demo/data/products-orders-small.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);