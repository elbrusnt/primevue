(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28421448"],{c235:function(e,t,i){"use strict";i.r(t);var n=i("7a23"),l=Object(n["k"])("div",{class:"content-section introduction"},[Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,[Object(n["n"])("Galleria "),Object(n["k"])("span",null,"FullScreen")]),Object(n["k"])("p",null,"In fullscreen mode content covers the whole page over a mask..")])],-1),a={class:"content-section implementation"},s={class:"card"},c=Object(n["k"])("h5",null,"With Thumbnails",-1),o=["src","alt"],r=["src","alt"],u={class:"card"},m=Object(n["k"])("h5",null,"Without Thumbnails",-1),p=["src","alt"],b=["src","alt"],d={class:"card"},v=Object(n["k"])("h5",null,"Custom Content",-1),h=["src","alt"],O=["src","alt"],j={key:0,class:"grid",style:{"max-width":"400px"}},k=["src","alt","onClick"],g={class:"content-section documentation"},y=Object(n["k"])("code",null,[Object(n["k"])("template",null,[Object(n["n"])('\n<h3>With Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions2" :numVisible="9" containerStyle="max-width: 50%"\n    :circular="true" :fullScreen="true" :showItemNavigators="true" v-model:visible="displayBasic">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />\n\n<h3>Without Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"\n    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayBasic2">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<Button label="Show" icon="pi pi-external-link" @click="displayBasic2 = true" />\n\n<h3>Custom Content</h3>\n<Galleria :value="images" v-model:activeIndex="activeIndex" :responsiveOptions="responsiveOptions" :numVisible="7" containerStyle="max-width: 850px"\n    :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false" v-model:visible="displayCustom">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<div v-if="images" class="grid" style="max-width: 400px;">\n    <div v-for="(image, index) of images" class="col-3" :key="index">\n        <img :src="image.thumbnailImageSrc" :alt="image.alt" style="cursor: pointer" @click="imageClick(index)"/>\n    </div>\n</div>\n')]),Object(n["n"])("\n")],-1),f=[y],x=Object(n["k"])("code",null,"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n            activeIndex: 0,\n\t\t\tresponsiveOptions: [\n\t\t\t\t{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n            ],\n            responsiveOptions2: [\n                {\n                    breakpoint: '1500px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '1024px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 2\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n            ],\n            displayBasic: false,\n            displayBasic2: false,\n            displayCustom: false\n        }\n    },\n    galleriaService: null,\n\tcreated() {\n\t\tthis.galleriaService = new PhotoService();\n\t},\n\tmounted() {\n\t\tthis.galleriaService.getImages().then(data => this.images = data);\n    },\n    methods: {\n        imageClick(index) {\n            this.activeIndex = index;\n            this.displayCustom = true;\n        }\n    }\n}\n\n",-1),S=[x];function w(e,t,i,y,x,w){var I=Object(n["O"])("Galleria"),P=Object(n["O"])("Button"),V=Object(n["O"])("TabPanel"),C=Object(n["O"])("TabView"),B=Object(n["P"])("code");return Object(n["G"])(),Object(n["j"])("div",null,[l,Object(n["k"])("div",a,[Object(n["k"])("div",s,[c,Object(n["o"])(I,{value:x.images,responsiveOptions:x.responsiveOptions2,numVisible:9,containerStyle:"max-width: 50%",circular:!0,fullScreen:!0,showItemNavigators:!0,visible:x.displayBasic,"onUpdate:visible":t[0]||(t[0]=function(e){return x.displayBasic=e})},{item:Object(n["Y"])((function(e){return[Object(n["k"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:{width:"100%",display:"block"}},null,8,o)]})),thumbnail:Object(n["Y"])((function(e){return[Object(n["k"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,r)]})),_:1},8,["value","responsiveOptions","visible"]),Object(n["o"])(P,{label:"Show",icon:"pi pi-external-link",onClick:t[1]||(t[1]=function(e){return x.displayBasic=!0})})]),Object(n["k"])("div",u,[m,Object(n["o"])(I,{value:x.images,responsiveOptions:x.responsiveOptions,numVisible:7,containerStyle:"max-width: 850px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1,visible:x.displayBasic2,"onUpdate:visible":t[2]||(t[2]=function(e){return x.displayBasic2=e})},{item:Object(n["Y"])((function(e){return[Object(n["k"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:{width:"100%",display:"block"}},null,8,p)]})),thumbnail:Object(n["Y"])((function(e){return[Object(n["k"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,b)]})),_:1},8,["value","responsiveOptions","visible"]),Object(n["o"])(P,{label:"Show",icon:"pi pi-external-link",onClick:t[3]||(t[3]=function(e){return x.displayBasic2=!0})})]),Object(n["k"])("div",d,[v,Object(n["o"])(I,{value:x.images,activeIndex:x.activeIndex,"onUpdate:activeIndex":t[4]||(t[4]=function(e){return x.activeIndex=e}),responsiveOptions:x.responsiveOptions,numVisible:7,containerStyle:"max-width: 850px",circular:!0,fullScreen:!0,showItemNavigators:!0,showThumbnails:!1,visible:x.displayCustom,"onUpdate:visible":t[5]||(t[5]=function(e){return x.displayCustom=e})},{item:Object(n["Y"])((function(e){return[Object(n["k"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:{width:"100%",display:"block"}},null,8,h)]})),thumbnail:Object(n["Y"])((function(e){return[Object(n["k"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,O)]})),_:1},8,["value","activeIndex","responsiveOptions","visible"]),x.images?(Object(n["G"])(),Object(n["j"])("div",j,[(Object(n["G"])(!0),Object(n["j"])(n["a"],null,Object(n["M"])(x.images,(function(e,t){return Object(n["G"])(),Object(n["j"])("div",{class:"col-3",key:t},[Object(n["k"])("img",{src:e.thumbnailImageSrc,alt:e.alt,style:{cursor:"pointer"},onClick:function(e){return w.imageClick(t)}},null,8,k)])})),128))])):Object(n["i"])("",!0)])]),Object(n["k"])("div",g,[Object(n["o"])(C,null,{default:Object(n["Y"])((function(){return[Object(n["o"])(V,{header:"Source"},{default:Object(n["Y"])((function(){return[Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,f)),[[B]]),Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,S)),[[B,void 0,void 0,{script:!0}]])]})),_:1})]})),_:1})])])}var I=i("cc2b"),P={data:function(){return{images:null,activeIndex:0,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}],responsiveOptions2:[{breakpoint:"1500px",numVisible:5},{breakpoint:"1024px",numVisible:3},{breakpoint:"768px",numVisible:2},{breakpoint:"560px",numVisible:1}],displayBasic:!1,displayBasic2:!1,displayCustom:!1}},galleriaService:null,created:function(){this.galleriaService=new I["a"]},mounted:function(){var e=this;this.galleriaService.getImages().then((function(t){return e.images=t}))},methods:{imageClick:function(e){this.activeIndex=e,this.displayCustom=!0}}},V=i("6b0d"),C=i.n(V);const B=C()(P,[["render",w]]);t["default"]=B},cc2b:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var n=i("d4ec"),l=i("bee2"),a=(i("d3b7"),function(){function e(){Object(n["a"])(this,e)}return Object(l["a"])(e,[{key:"getImages",value:function(){return fetch("demo/data/photos.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);