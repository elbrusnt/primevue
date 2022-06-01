(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2408c38d"],{"3d62":function(e,l,t){var n=t("f0c9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=t("499e").default;c("48eab6c0",n,!0,{sourceMap:!1,shadowMode:!1})},ae37:function(e,l,t){"use strict";t("3d62")},c46f:function(e,l,t){"use strict";t.r(l);var n=t("7a23"),c=function(e){return Object(n["J"])("data-v-96b7b87a"),e=e(),Object(n["H"])(),e},a={class:"content-section introduction"},i=c((function(){return Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,"Chip"),Object(n["k"])("p",null,"Chip represents entities using icons, labels and images.")],-1)})),p={class:"content-section implementation"},o={class:"card"},s=c((function(){return Object(n["k"])("h5",null,"Basic",-1)})),r={class:"flex align-items-center"},b=c((function(){return Object(n["k"])("h5",null,"Icon",-1)})),m={class:"flex align-items-center"},u=c((function(){return Object(n["k"])("h5",null,"Image",-1)})),h={class:"flex align-items-center"},d=c((function(){return Object(n["k"])("h5",null,"Styling",-1)})),O={class:"flex align-items-center"};function j(e,l,t,c,j,g){var k=Object(n["O"])("AppDemoActions"),v=Object(n["O"])("Chip"),f=Object(n["O"])("ChipDoc");return Object(n["G"])(),Object(n["j"])("div",null,[Object(n["k"])("div",a,[i,Object(n["o"])(k)]),Object(n["k"])("div",p,[Object(n["k"])("div",o,[s,Object(n["k"])("div",r,[Object(n["o"])(v,{label:"Action",class:"mr-2"}),Object(n["o"])(v,{label:"Comedy",class:"mr-2"}),Object(n["o"])(v,{label:"Mystery",class:"mr-2"}),Object(n["o"])(v,{label:"Thriller",removable:""})]),b,Object(n["k"])("div",m,[Object(n["o"])(v,{label:"Apple",icon:"pi pi-apple",class:"mr-2"}),Object(n["o"])(v,{label:"Facebook",icon:"pi pi-facebook",class:"mr-2"}),Object(n["o"])(v,{label:"Google",icon:"pi pi-google",class:"mr-2"}),Object(n["o"])(v,{label:"Microsoft",icon:"pi pi-microsoft",removable:""})]),u,Object(n["k"])("div",h,[Object(n["o"])(v,{label:"Amy Elsner",image:"demo/images/avatar/amyelsner.png",class:"mr-2"}),Object(n["o"])(v,{label:"Asiya Javayant",image:"demo/images/avatar/asiyajavayant.png",class:"mr-2"}),Object(n["o"])(v,{label:"Onyama Limba",image:"demo/images/avatar/onyamalimba.png",class:"mr-2"}),Object(n["o"])(v,{label:"Xuxue Feng",image:"demo/images/avatar/xuxuefeng.png",removable:""})]),d,Object(n["k"])("div",O,[Object(n["o"])(v,{label:"Action",class:"mr-2 custom-chip"}),Object(n["o"])(v,{label:"Apple",icon:"pi pi-apple",class:"mr-2 custom-chip"}),Object(n["o"])(v,{label:"Onyama Limba",image:"demo/images/avatar/onyamalimba.png",class:"mr-2 custom-chip"}),Object(n["o"])(v,{label:"Xuxue Feng",image:"demo/images/avatar/xuxuefeng.png",class:"custom-chip",removable:""})])])]),Object(n["o"])(f)])}var g=Object(n["k"])("h5",null,"Import via Module",-1),k=Object(n["k"])("code",null,"\nimport Chip from 'primevue/chip';\n\n",-1),v=[k],f=Object(n["k"])("h5",null,"Import via CDN",-1),w=Object(n["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/chip/chip.min.js"><\/script>\n\n',-1),y=[w],x=Object(n["k"])("h5",null,"Getting Started",-1),C=Object(n["k"])("p",null,"Chip can display labels, icons and images.",-1),A=Object(n["k"])("code",null,'\n<Chip label="Text Only" />\n<Chip label="Text with icon" icon="pi pi-check" />\n<Chip label="Text with image" image="user.png" />\n\n',-1),I=[A],D=Object(n["k"])("h5",null,"Removable",-1),F=Object(n["k"])("p",null,[Object(n["n"])("Setting "),Object(n["k"])("i",null,"removable"),Object(n["n"])(" property displays an icon to close the chip, the optional "),Object(n["k"])("i",null,"remove"),Object(n["n"])(" event is available to get notified when a chip is hidden.")],-1),G=Object(n["k"])("code",null,'\n<Chip label="Text" removable />\n\n',-1),M=[G],T=Object(n["k"])("h5",null,"Templating",-1),S=Object(n["k"])("p",null,"Content can easily be customized with the default slot instead of using the built-in modes.",-1),L=Object(n["k"])("code",null,"\n<Chip>\n   Content\n</Chip>\n\n",-1),N=[L],X=Object(n["k"])("h5",null,"Properties",-1),J=Object(n["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),B=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Type"),Object(n["k"])("th",null,"Default"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"label"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Defines the text to display.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"icon"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Defines the icon to display.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"image"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Defines the image to display.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"removable"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"false"),Object(n["k"])("td",null,"Whether to display a remove icon.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"removeIconClass"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"pi pi-times-circle"),Object(n["k"])("td",null,"Icon of the remove element.")])])])],-1),E=Object(n["k"])("h5",null,"Events",-1),_=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"remove"),Object(n["k"])("td",null,"event: Browser event"),Object(n["k"])("td",null,"Callback to invoke when a chip is removed.")])])])],-1),P=Object(n["k"])("h5",null,"Styling",-1),Z=Object(n["n"])("Following is the list of structural style classes, for theming classes visit "),R=Object(n["n"])("theming"),Y=Object(n["n"])(" page."),z=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Element")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chip"),Object(n["k"])("td",null,"Container element.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chip-image"),Object(n["k"])("td",null,"Container element in image mode.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chip-text"),Object(n["k"])("td",null,"Text of the chip.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-chip-remove-icon"),Object(n["k"])("td",null,"Remove icon.")])])])],-1),H=Object(n["k"])("h5",null,"Dependencies",-1),V=Object(n["k"])("p",null,"None.",-1);function W(e,l,t,c,a,i){var p=Object(n["O"])("router-link"),o=Object(n["O"])("AppDoc"),s=Object(n["P"])("code");return Object(n["G"])(),Object(n["h"])(o,{name:"ChipDemo",sources:a.sources,github:"chip/ChipDemo.vue"},{default:Object(n["Y"])((function(){return[g,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,v)),[[s,void 0,void 0,{script:!0}]]),f,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,y)),[[s]]),x,C,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,I)),[[s]]),D,F,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,M)),[[s]]),T,S,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,N)),[[s]]),X,J,B,E,_,P,Object(n["k"])("p",null,[Z,Object(n["o"])(p,{to:"/theming"},{default:Object(n["Y"])((function(){return[R]})),_:1}),Y]),z,H,V]})),_:1},8,["sources"])}var q={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Action" class="mr-2 mb-2" />\n            <Chip label="Comedy" class="mr-2 mb-2" />\n            <Chip label="Mystery" class="mr-2 mb-2" />\n            <Chip label="Thriller" class="mb-2" removable />\n        </div>\n\n        <h5>Icon</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2" />\n            <Chip label="Facebook" icon="pi pi-facebook" class="mr-2 mb-2" />\n            <Chip label="Google" icon="pi pi-google" class="mr-2 mb-2" />\n            <Chip label="Microsoft" icon="pi pi-microsoft" class="mb-2" removable />\n        </div>\n\n        <h5>Image</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Amy Elsner" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2" />\n            <Chip label="Asiya Javayant" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2" />\n            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2" />\n            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mb-2" removable />\n        </div>\n\n        <h5>Styling</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Action" class="mr-2 mb-2 custom-chip" />\n            <Chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2 custom-chip" />\n            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2 custom-chip" />\n            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="custom-chip mb-2" removable />\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-chip.custom-chip {\n    background: var(--primary-color);\n    color: var(--primary-color-text);\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Action" class="mr-2 mb-2" />\n            <Chip label="Comedy" class="mr-2 mb-2" />\n            <Chip label="Mystery" class="mr-2 mb-2" />\n            <Chip label="Thriller" class="mb-2" removable />\n        </div>\n\n        <h5>Icon</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2" />\n            <Chip label="Facebook" icon="pi pi-facebook" class="mr-2 mb-2" />\n            <Chip label="Google" icon="pi pi-google" class="mr-2 mb-2" />\n            <Chip label="Microsoft" icon="pi pi-microsoft" class="mb-2" removable />\n        </div>\n\n        <h5>Image</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Amy Elsner" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2" />\n            <Chip label="Asiya Javayant" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2" />\n            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2" />\n            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mb-2" removable />\n        </div>\n\n        <h5>Styling</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <Chip label="Action" class="mr-2 mb-2 custom-chip" />\n            <Chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2 custom-chip" />\n            <Chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2 custom-chip" />\n            <Chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="custom-chip mb-2" removable />\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-chip.custom-chip {\n    background: var(--primary-color);\n    color: var(--primary-color-text);\n}\n</style>'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/chip/chip.min.js"><\\/script>',content:'<div id="app">\n\t\t<h5>Basic</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <p-chip label="Action" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Comedy" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Mystery" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Thriller" class="mb-2" removable></p-chip>\n        </div>\n\n        <h5>Icon</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <p-chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Facebook" icon="pi pi-facebook" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Google" icon="pi pi-google" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Microsoft" icon="pi pi-microsoft" class="mb-2" removable></p-chip>\n        </div>\n\n        <h5>Image</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <p-chip label="Amy Elsner" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Asiya Javayant" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2"></p-chip>\n            <p-chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mb-2" removable></p-chip>\n        </div>\n\n        <h5>Styling</h5>\n        <div class="flex align-items-center flex-column sm:flex-row">\n            <p-chip label="Action" class="mr-2 mb-2 custom-chip"></p-chip>\n            <p-chip label="Apple" icon="pi pi-apple" class="mr-2 mb-2 custom-chip"></p-chip>\n            <p-chip label="Onyama Limba" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="mr-2 mb-2 custom-chip"></p-chip>\n            <p-chip label="Xuxue Feng" image="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="custom-chip mb-2" removable></p-chip>\n        </div>\n\t</div>\n\n\t<script type="module">\n\t\tconst { createApp } = Vue;\n\n\t\tconst App = {\n\t\t\tcomponents: {\n\t\t\t\t"p-chip": primevue.chip\n\t\t\t}\n\t\t};\n\n\t\tcreateApp(App).mount(\'#app\');\n\t<\\/script>\n\n\t<style>\n\t.p-chip.custom-chip {\n\t    background: var(--primary-color);\n\t    color: var(--primary-color-text);\n\t}\n\t</style>\n'}}}}},K=t("6b0d"),Q=t.n(K);const U=Q()(q,[["render",W]]);var $=U,ee={components:{ChipDoc:$}};t("ae37");const le=Q()(ee,[["render",j],["__scopeId","data-v-96b7b87a"]]);l["default"]=le},f0c9:function(e,l,t){var n=t("24fb");l=n(!1),l.push([e.i,".p-chip.custom-chip[data-v-96b7b87a]{background:var(--primary-color);color:var(--primary-color-text)}",""]),e.exports=l}}]);