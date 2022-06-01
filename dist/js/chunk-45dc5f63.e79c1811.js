(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45dc5f63"],{"07c2":function(e,t,a){var n=a("2947");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("499e").default;i("4c7b43c5",n,!0,{sourceMap:!1,shadowMode:!1})},2947:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".architecture-image[data-v-6098a078],.designer-image[data-v-6098a078]{width:75%;margin:0 auto;display:block;margin-top:2rem;margin-bottom:2rem}@media screen and (max-width:960px){.architecture-image[data-v-6098a078],.designer-image[data-v-6098a078]{width:100%}}",""]),e.exports=t},3548:function(e,t,a){e.exports=a.p+"img/architecture.17dfb1df.jpg"},6463:function(e,t,a){e.exports=a.p+"img/primevue-designer.d6ff1b06.jpg"},"711b":function(e,t,a){"use strict";a.r(t);var n=a("7a23"),i=a("3548"),r=a.n(i),o=a("6463"),s=a.n(o),d=function(e){return Object(n["J"])("data-v-6098a078"),e=e(),Object(n["H"])(),e},c={class:"content-section documentation"},l=Object(n["m"])('<h1 data-v-6098a078>Theming</h1><p data-v-6098a078>Choose from a variety of themes or develop your own theme easily.</p><h5 data-v-6098a078>Architecture</h5><img alt="Architecture" src="'+r.a+'" class="architecture-image" data-v-6098a078><p data-v-6098a078>PrimeVue is a design agnostic library so unlike other UI libraries it does not enforce a certain styling such as material or bootstrap. In order to achieve this, styling has been separated into core and theme. Core resides inside PrimeVue to implement the structure of the components such as positioning whereas theme brings the colors, paddings and margins.</p><h5 data-v-6098a078>Themes</h5><p data-v-6098a078>PrimeVue offers various free themes and premium themes along with premium templates that provide an application layout as well. All the free themes are built with the <a href="https://www.primefaces.org/designer/primevue" data-v-6098a078>Theme Designer</a> and the npm package brings the CSS output of the theme whereas SCSS is kept as a premium feature in the designer. This means free themes are open source and for customization with SASS, a designer license needs to be acquired.</p><h5 data-v-6098a078>Customization</h5><p data-v-6098a078>CSS of the themes share the same license as PrimeVue which is MIT, this means the generated CSS can be customized per your needs however this should be avoided if your customizations are not simple. For instance even to change a primary color, since there is no variable a find and replace should be performed various times. On the other hand, this can be achieved by changing a single variable e.g. $primaryColor. Visit the <a href="https://www.primefaces.org/designer/api/primevue/3.5.0" data-v-6098a078>SASS API</a> for the documentation of available customization options.</p><p data-v-6098a078><a href="https://www.primefaces.org/designer/primevue" data-v-6098a078>Designer</a> is the ultimate tool to create your own PrimeVue experience powered by a SASS based theme engine with 500+ variables and a Visual Designer. PrimeVue only ships the generated CSS of <b data-v-6098a078>Material</b>, <b data-v-6098a078>Bootstrap</b>, <b data-v-6098a078>Tailwind</b>, <b data-v-6098a078>FluentUI</b>, <b data-v-6098a078>Saga</b>, <b data-v-6098a078>Vela</b>, <b data-v-6098a078>Arya</b> and legacy themes whereas Designer provides full access to the whole SASS structure and the variables of these pre-built themes for easier customization. In addition, designer provides exclusive premium themes to subscribers including Soho, Viva, Mira and Nano that are not available in core PrimeVue distribution.</p><p data-v-6098a078>Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence.</p><p data-v-6098a078>Visit <a href="https://www.primefaces.org/designer/primevue" data-v-6098a078>Designer API HomePage</a> for more information and live demos.</p>',12),u=d((function(){return Object(n["k"])("div",{class:"video-container text-center"},[Object(n["k"])("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/7SqoSutntcE",frameborder:"0",allowfullscreen:""})],-1)})),h=d((function(){return Object(n["k"])("a",{href:"http://www.primefaces.org/designer/primevue",class:"designer-image"},[Object(n["k"])("img",{alt:"PrimeVue Designer",src:s.a,style:{width:"100%"}})],-1)})),p=d((function(){return Object(n["k"])("h5",null,"Scaling",-1)})),m=d((function(){return Object(n["k"])("p",null,"PrimeVue utilizes rem units to make sure the components blend in with the rest of your UI perfectly. This also enables scaling, for example changing the size of the components is easy as configuring the font size of your document. Code below sets the scale of the components based on 16px. If you reqire bigger or smaller components, just change this variable and components will scale accordingly.",-1)})),b=d((function(){return Object(n["k"])("code",null,"\nhtml {\n    font-size: 16px;\n}\n\n",-1)})),v=[b],g=d((function(){return Object(n["k"])("p",null,"Some commonly used components such as inputs, buttons and datatable also provide per component scaling with special classes. Components with specific scaling options are documented in their own documentation.",-1)})),f=d((function(){return Object(n["k"])("code",null,'\n<InputText type="text" class="p-inputtext-sm" />\n<Button label="Button" class="p-button-lg" />\n\n',-1)})),w=[f],y=d((function(){return Object(n["k"])("h5",null,"Local Styling",-1)})),j=d((function(){return Object(n["k"])("p",null,"Theming styles the components globally, in case you required to change the style of a certain component for a specific use case use the class property and override the defaults. Example below changes the background of the panel. Note that this is only for local styling, if you require to change the background color of all the panels, a custom theme is a far better choice.",-1)})),O=d((function(){return Object(n["k"])("code",null,'\n<Panel header="Custom Header" class="dark-panel"/>\n\n',-1)})),S=[O],k=d((function(){return Object(n["k"])("code",null,'\n<style lang="scss" scoped>\n::v-deep(.dark-panel.p-panel) {\n    .p-panel-titlebar {\n        background: #212121;\n    }\n\n}\n</style>\n\n',-1)})),x=[k],A=Object(n["m"])('<h5 data-v-6098a078>Utility Classes</h5><p data-v-6098a078>A couple of utility classes are provided as a solution to common requirements.</p><div class="doc-tablewrapper" data-v-6098a078><table class="doc-table" data-v-6098a078><thead data-v-6098a078><tr data-v-6098a078><th data-v-6098a078>Name</th><th data-v-6098a078>Description</th></tr></thead><tbody data-v-6098a078><tr data-v-6098a078><td data-v-6098a078>p-component</td><td data-v-6098a078>Applies component theming such as font-family and font-size to an element.</td></tr><tr data-v-6098a078><td data-v-6098a078>p-disabled</td><td data-v-6098a078>Applies an opacity to display as disabled.</td></tr><tr data-v-6098a078><td data-v-6098a078>p-sr-only</td><td data-v-6098a078>Element becomes visually hidden however accessibility is still available.</td></tr><tr data-v-6098a078><td data-v-6098a078>p-reset</td><td data-v-6098a078>Resets the browsers defaults.</td></tr><tr data-v-6098a078><td data-v-6098a078>p-link</td><td data-v-6098a078>Renders a button as a link.</td></tr><tr data-v-6098a078><td data-v-6098a078>p-error</td><td data-v-6098a078>Indicates an error text.</td></tr><tr data-v-6098a078><td data-v-6098a078>p-invalid</td><td data-v-6098a078>Styles an form element as invalid.</td></tr><tr data-v-6098a078><td data-v-6098a078>p-text-secondary</td><td data-v-6098a078>Applies the text color of the theme with the secondary priority.</td></tr></tbody></table></div>',3);function P(e,t,a,i,r,o){var s=Object(n["P"])("code");return Object(n["G"])(),Object(n["j"])("div",null,[Object(n["k"])("div",c,[l,u,h,p,m,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,v)),[[s,void 0,void 0,{css:!0}]]),g,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,w)),[[s]]),y,j,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,S)),[[s]]),Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,x)),[[s]]),A])])}var V={},C=(a("a694"),a("6b0d")),I=a.n(C);const z=I()(V,[["render",P],["__scopeId","data-v-6098a078"]]);t["default"]=z},a694:function(e,t,a){"use strict";a("07c2")}}]);