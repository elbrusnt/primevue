(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d262efb"],{"7de6":function(t,e,i){"use strict";i.r(e);var n=i("7a23"),a=Object(n["k"])("div",{class:"content-section introduction"},[Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,[Object(n["n"])("Galleria "),Object(n["k"])("span",null,"Navigator")]),Object(n["k"])("p",null,"Combining item navigators, thumbnails and indicators provide various UI alternatives.")])],-1),l={class:"content-section implementation"},s={class:"card"},r=Object(n["k"])("h5",null,"Item Navigators and Thumbnails",-1),o=["src","alt"],c=["src","alt"],m={class:"card"},u=Object(n["k"])("h5",null,"Item Navigators without Thumbnails",-1),p=["src","alt"],b=["src","alt"],h={class:"card"},v=Object(n["k"])("h5",null,"Item Navigators on Hover",-1),d=["src","alt"],O=["src","alt"],g={class:"card"},j=Object(n["k"])("h5",null,"Item Navigators and Indicators",-1),k=["src","alt"],w=["src","alt"],I={class:"content-section documentation"},y=Object(n["k"])("code",null,[Object(n["k"])("template",null,[Object(n["n"])('\n<h3>Item Navigators and Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators without Thumbnails</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true" :showThumbnails="false">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators on Hover</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true" :showItemNavigatorsOnHover="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n\n<h3>Item Navigators and Indicators</h3>\n<Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"\n    :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />\n    </template>\n    <template #thumbnail="slotProps">\n            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n    </template>\n</Galleria>\n')]),Object(n["n"])("\n")],-1),S=[y],f=Object(n["k"])("code",null,"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n\t\t\tresponsiveOptions: [\n\t\t\t\t{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n\t\t\t]\n        }\n    },\n    galleriaService: null,\n\tcreated() {\n\t\tthis.galleriaService = new PhotoService();\n\t},\n\tmounted() {\n\t\tthis.galleriaService.getImages().then(data => this.images = data);\n    }\n}\n\n",-1),P=[f];function x(t,e,i,y,f,x){var N=Object(n["O"])("Galleria"),V=Object(n["O"])("TabPanel"),G=Object(n["O"])("TabView"),T=Object(n["P"])("code");return Object(n["G"])(),Object(n["j"])("div",null,[a,Object(n["k"])("div",l,[Object(n["k"])("div",s,[r,Object(n["o"])(N,{value:f.images,responsiveOptions:f.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0},{item:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,o)]})),thumbnail:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,c)]})),_:1},8,["value","responsiveOptions"])]),Object(n["k"])("div",m,[u,Object(n["o"])(N,{value:f.images,responsiveOptions:f.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showThumbnails:!1},{item:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,p)]})),thumbnail:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,b)]})),_:1},8,["value","responsiveOptions"])]),Object(n["k"])("div",h,[v,Object(n["o"])(N,{value:f.images,responsiveOptions:f.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showItemNavigatorsOnHover:!0},{item:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,d)]})),thumbnail:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,O)]})),_:1},8,["value","responsiveOptions"])]),Object(n["k"])("div",g,[j,Object(n["o"])(N,{value:f.images,responsiveOptions:f.responsiveOptions,numVisible:5,circular:!0,containerStyle:"max-width: 640px",showItemNavigators:!0,showThumbnails:!1,showItemNavigatorsOnHover:!0,showIndicators:!0},{item:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.itemImageSrc,alt:t.item.alt,style:{width:"100%",display:"block"}},null,8,k)]})),thumbnail:Object(n["Y"])((function(t){return[Object(n["k"])("img",{src:t.item.thumbnailImageSrc,alt:t.item.alt,style:{display:"block"}},null,8,w)]})),_:1},8,["value","responsiveOptions"])])]),Object(n["k"])("div",I,[Object(n["o"])(G,null,{default:Object(n["Y"])((function(){return[Object(n["o"])(V,{header:"Source"},{default:Object(n["Y"])((function(){return[Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,S)),[[T]]),Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,P)),[[T,void 0,void 0,{script:!0}]])]})),_:1})]})),_:1})])])}var N=i("cc2b"),V={data:function(){return{images:null,responsiveOptions:[{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]}},galleriaService:null,created:function(){this.galleriaService=new N["a"]},mounted:function(){var t=this;this.galleriaService.getImages().then((function(e){return t.images=e}))}},G=i("6b0d"),T=i.n(G);const Y=T()(V,[["render",x]]);e["default"]=Y},cc2b:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i("d4ec"),a=i("bee2"),l=(i("d3b7"),function(){function t(){Object(n["a"])(this,t)}return Object(a["a"])(t,[{key:"getImages",value:function(){return fetch("demo/data/photos.json").then((function(t){return t.json()})).then((function(t){return t.data}))}}]),t}())}}]);