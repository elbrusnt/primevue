(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee414482"],{1558:function(e,t,l){var n=l("45f6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var c=l("499e").default;c("2bace394",n,!0,{sourceMap:!1,shadowMode:!1})},"45f6":function(e,t,l){var n=l("24fb");t=n(!1),t.push([e.i,".p-treeselect[data-v-694ebc05]{width:20rem}@media screen and (max-width:640px){.p-treeselect[data-v-694ebc05]{width:100%}}",""]),e.exports=t},"5b51":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),c=function(e){return Object(n["J"])("data-v-694ebc05"),e=e(),Object(n["H"])(),e},o={class:"content-section introduction"},d=c((function(){return Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,"TreeSelect"),Object(n["k"])("p",null,"TreeSelect is a form component to choose from hierarchical data.")],-1)})),s={class:"content-section implementation"},i={class:"card"},a=c((function(){return Object(n["k"])("h5",null,"Single",-1)})),r=c((function(){return Object(n["k"])("h5",null,"Multiple",-1)})),u=c((function(){return Object(n["k"])("h5",null,"Checkbox",-1)}));function b(e,t,l,c,b,j){var O=Object(n["O"])("AppDemoActions"),p=Object(n["O"])("TreeSelect"),k=Object(n["O"])("TreeSelectDoc");return Object(n["G"])(),Object(n["j"])("div",null,[Object(n["k"])("div",o,[d,Object(n["o"])(O)]),Object(n["k"])("div",s,[Object(n["k"])("div",i,[a,Object(n["o"])(p,{modelValue:b.selectedNode,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.selectedNode=e}),options:b.nodes,placeholder:"Select Item"},null,8,["modelValue","options"]),r,Object(n["o"])(p,{modelValue:b.selectedNodes1,"onUpdate:modelValue":t[1]||(t[1]=function(e){return b.selectedNodes1=e}),options:b.nodes,selectionMode:"multiple",metaKeySelection:!1,placeholder:"Select Items"},null,8,["modelValue","options"]),u,Object(n["o"])(p,{modelValue:b.selectedNodes2,"onUpdate:modelValue":t[2]||(t[2]=function(e){return b.selectedNodes2=e}),options:b.nodes,display:"chip",selectionMode:"checkbox",placeholder:"Select Items"},null,8,["modelValue","options"])])]),Object(n["o"])(k)])}var j=l("82f4"),O=Object(n["k"])("h5",null,"Import via Module",-1),p=Object(n["k"])("code",null,"\nimport TreeSelect from 'primevue/treeselect';\n\n",-1),k=[p],h=Object(n["k"])("h5",null,"Import via CDN",-1),m=Object(n["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/treeselect/treeselect.min.js"><\/script>\n\n',-1),v=[m],f=Object(n["k"])("h5",null,"Getting Started",-1),y=Object(n["k"])("p",null,[Object(n["n"])("TreeSelect component requires an array of TreeNode objects as its "),Object(n["k"])("i",null,"options"),Object(n["n"])(" and keys of the nodes as its value.")],-1),S=Object(n["k"])("code",null,'\n<TreeSelect v-model="selectedNodeKey" :options="nodes" placeholder="Select Item" />\n\n',-1),w=[S],N=Object(n["k"])("p",null,"In example below, nodes are retrieved from a remote data source.",-1),g=Object(n["k"])("code",null,"\nimport NodeService from '../../service/NodeService';\n\nexport default {\n    data() {\n        return {\n            selectedNodeKey: null,\n            nodes: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    }\n}\n\n",-1),T=[g],x=Object(n["k"])("code",null,"\nexport default class NodeService {\n\n    getTreeNodes() {\n        return fetch('demo/data/treenodes.json').then(res => res.json())\n                .then(d => d.root);\n    }\n\n}\n\n",-1),M=[x],I=Object(n["k"])("p",null,"The json response sample would be as following.",-1),D=Object(n["k"])("code",null,'\n{\n    "root": [\n        {\n            "key": "0",\n            "label": "Documents",\n            "data": "Documents Folder",\n            "icon": "pi pi-fw pi-inbox",\n            "children": [{\n                "key": "0-0",\n                "label": "Work",\n                "data": "Work Folder",\n                "icon": "pi pi-fw pi-cog",\n                "children": [{ "key": "0-0-0", "label": "Expenses.doc", "icon": "pi pi-fw pi-file", "data": "Expenses Document" }, { "key": "0-0-1", "label": "Resume.doc", "icon": "pi pi-fw pi-file", "data": "Resume Document" }]\n            },\n            {\n                "key": "0-1",\n                "label": "Home",\n                "data": "Home Folder",\n                "icon": "pi pi-fw pi-home",\n                "children": [{ "key": "0-1-0", "label": "Invoices.txt", "icon": "pi pi-fw pi-file", "data": "Invoices for this month" }]\n            }]\n        },\n        {\n            "key": "1",\n            "label": "Events",\n            "data": "Events Folder",\n            "icon": "pi pi-fw pi-calendar",\n            "children": [\n                { "key": "1-0", "label": "Meeting", "icon": "pi pi-fw pi-calendar-plus", "data": "Meeting" },\n                { "key": "1-1", "label": "Product Launch", "icon": "pi pi-fw pi-calendar-plus", "data": "Product Launch" },\n                { "key": "1-2", "label": "Report Review", "icon": "pi pi-fw pi-calendar-plus", "data": "Report Review" }]\n        },\n        {\n            "key": "2",\n            "label": "Movies",\n            "data": "Movies Folder",\n            "icon": "pi pi-fw pi-star-fill",\n            "children": [{\n                "key": "2-0",\n                "icon": "pi pi-fw pi-star-fill",\n                "label": "Al Pacino",\n                "data": "Pacino Movies",\n                "children": [{ "key": "2-0-0", "label": "Scarface", "icon": "pi pi-fw pi-video", "data": "Scarface Movie" }, { "key": "2-0-1", "label": "Serpico", "icon": "pi pi-fw pi-video", "data": "Serpico Movie" }]\n            },\n            {\n                "key": "2-1",\n                "label": "Robert De Niro",\n                "icon": "pi pi-fw pi-star-fill",\n                "data": "De Niro Movies",\n                "children": [{ "key": "2-1-0", "label": "Goodfellas", "icon": "pi pi-fw pi-video", "data": "Goodfellas Movie" }, { "key": "2-1-1", "label": "Untouchables", "icon": "pi pi-fw pi-video", "data": "Untouchables Movie" }]\n            }]\n        }\n    ]\n}\n\n',-1),C=[D],V=Object(n["k"])("h5",null,"TreeNode API utilized by the TreeSelect",-1),A=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Type"),Object(n["k"])("th",null,"Default"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"key"),Object(n["k"])("td",null,"any"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Mandatory unique key of the node.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"label"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Label of the node.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"data"),Object(n["k"])("td",null,"any"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Data represented by the node.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"type"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Type of the node to match a template.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"icon"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Icon of the node to display next to content.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"children"),Object(n["k"])("td",null,"TreeNode[]"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"An array of treenodes as children.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"style"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Inline style of the node.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"styleClass"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Style class of the node.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"selectable"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Whether the node is selectable when selection mode is enabled.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"leaf"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Specifies if the node has children. Used in lazy loading.")])])])],-1),G=Object(n["k"])("h5",null,"Selection Mode",-1),P=Object(n["k"])("p",null,[Object(n["n"])('TreeSelects offers "single", "multiple" and "checkbox" alternatives for the selection behavior that is defined by the '),Object(n["k"])("i",null,"selectionMode"),Object(n["n"])(" option.")],-1),Z=Object(n["k"])("code",null,'\n<TreeSelect v-model="selectedValue1" :options="nodes" selectionMode="single" placeholder="Select Item" />\n\n<TreeSelect v-model="selectedValue2" :options="nodes" selectionMode="multiple" placeholder="Select Items" />\n\n<TreeSelect v-model="selectedValue3" :options="nodes" selectionMode="checkbox" placeholder="Select Items" />\n\n',-1),L=[Z],E=Object(n["k"])("h5",null,"Value Format",-1),F=Object(n["k"])("p",null,'Value passed to and from the TreeSelect via the v-model directive should be a an object with key-value pairs where key is the node key and value is a boolean to indicate selection. On the other hand in "checkbox" mode, instead of a boolean, value should be an object that has "checked" and "partialChecked" properties to represent the checked state of a node. Best way to clarify it is prepopulating a TreeSelect with an existing value.',-1),K=Object(n["k"])("code",null,"\ndata() {\n    return {\n        selectedValue1: {'2-1': true},\n        selectedValue2: {'1-1': true, '0-0-0': true},\n        selectedValue2: {'1': {checked: true, partialChecked: true}, '1-0': {checked: true}}\n        nodes: null\n    }\n},\n",-1),H=[K],R=Object(n["k"])("h5",null,"Chips Display",-1),U=Object(n["k"])("p",null,[Object(n["n"])("A comma separated list is used by default to display selected items whereas alternative chip mode is provided using the "),Object(n["k"])("i",null,"display"),Object(n["n"])(" property to visualize the items as tokens.")],-1),_=Object(n["k"])("code",null,'\n<TreeSelect v-model="selectedValue" display="chip" :options="nodes" selectionMode="multiple" placeholder="Select Items" />\n\n',-1),z=[_],W=Object(n["k"])("h5",null,"Templating",-1),q=Object(n["k"])("p",null,[Object(n["n"])("Label of an option is used as the display text of an item by default, for custom content support define a "),Object(n["k"])("i",null,"value"),Object(n["n"])(" template that gets the selected nodes as a parameter. In addition "),Object(n["k"])("i",null,"header"),Object(n["n"])(", "),Object(n["k"])("i",null,"footer"),Object(n["n"])(" and "),Object(n["k"])("i",null,"empty"),Object(n["n"])(" slots are provided for further customization.")],-1),B=Object(n["k"])("code",null,[Object(n["k"])("template",null,[Object(n["n"])('\n<TreeSelect v-model="selectedNodes" :options="nodes" placeholder="Select Items">\n\t<template #value="{value}">\n\t\tCustom Content\n\t</template>\n</TreeSelect>\n')]),Object(n["n"])("\n")],-1),J=[B],Y=Object(n["k"])("h5",null,"Properties",-1),Q=Object(n["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),X=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Type"),Object(n["k"])("th",null,"Default"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"modelValue"),Object(n["k"])("td",null,"any"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Value of the component.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"options"),Object(n["k"])("td",null,"array"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"An array of treenodes.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"scrollHeight"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"200px"),Object(n["k"])("td",null,"Height of the viewport, a scrollbar is defined if height of list exceeds this value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"placeholder"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Label to display when there are no selections.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"disabled"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"false"),Object(n["k"])("td",null,"When present, it specifies that the component should be disabled.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"tabindex"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Index of the element in tabbing order.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"inputId"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Identifier of the underlying input element.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"ariaLabelledBy"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Establishes relationships between the component and label(s) where its value should be one or more element IDs.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"selectionMode"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,'Defines the selection mode, valid values "single", "multiple", and "checkbox".')]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"panelClass"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Style class of the overlay panel.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"appendTo"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"body"),Object(n["k"])("td",null,'A valid query selector or an HTMLElement to specify where the overlay gets attached. Special keywords are "body" for document body and "self" for the element itself.')]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"emptyMessage"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"No results found"),Object(n["k"])("td",null,"Text to display when there are no options available. Defaults to value from PrimeVue locale configuration.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"display"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"comma"),Object(n["k"])("td",null,'Defines how the selected items are displayed, valid values are "comma" and "chip".')]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"metaKeySelection"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"true"),Object(n["k"])("td",null,"Defines how multiple items can be selected, when true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.")])])])],-1),$=Object(n["k"])("h5",null,"Events",-1),ee=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"change"),Object(n["k"])("td",null,"event: Selected node keys"),Object(n["k"])("td",null,"Callback to invoke on value change.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"before-show"),Object(n["k"])("td",null,"-"),Object(n["k"])("td",null,"Callback to invoke before the overlay is shown.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"before-hide"),Object(n["k"])("td",null,"-"),Object(n["k"])("td",null,"Callback to invoke before the overlay is hidden.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"show"),Object(n["k"])("td",null,"-"),Object(n["k"])("td",null,"Callback to invoke when the overlay is shown.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"hide"),Object(n["k"])("td",null,"-"),Object(n["k"])("td",null,"Callback to invoke when the overlay is hidden.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"node-select"),Object(n["k"])("td",null,"node: Node instance"),Object(n["k"])("td",null,"Callback to invoke when a node is selected.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"node-unselect"),Object(n["k"])("td",null,"node: Node instance"),Object(n["k"])("td",null,"Callback to invoke when a node is unselected.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"node-expand"),Object(n["k"])("td",null,"node: Node instance"),Object(n["k"])("td",null,"Callback to invoke when a node is expanded.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"node-collapse"),Object(n["k"])("td",null,"node: Node instance"),Object(n["k"])("td",null,"Callback to invoke when a node is collapsed.")])])])],-1),te=Object(n["k"])("h5",null,"Methods",-1),le=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"show"),Object(n["k"])("td",null,"-"),Object(n["k"])("td",null,"Shows the overlay.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"hide"),Object(n["k"])("td",null,"-"),Object(n["k"])("td",null,"Hides the overlay.")])])])],-1),ne=Object(n["k"])("h5",null,"Slots",-1),ce=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"value"),Object(n["k"])("td",null,[Object(n["n"])("value: Selected nodes "),Object(n["k"])("br"),Object(n["n"])(" placeholder: Placeholder value")])]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"header"),Object(n["k"])("td",null,[Object(n["n"])("value: Value of the component "),Object(n["k"])("br"),Object(n["n"])(" options: TreeNode options")])]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"footer"),Object(n["k"])("td",null,[Object(n["n"])("value: Value of the component "),Object(n["k"])("br"),Object(n["n"])(" options: TreeNode options")])]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"empty"),Object(n["k"])("td",null,"-")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"indicator"),Object(n["k"])("td",null,"-")])])])],-1),oe=Object(n["k"])("h5",null,"Styling",-1),de=Object(n["n"])("Following is the list of structural style classes, for theming classes visit "),se=Object(n["n"])("theming"),ie=Object(n["n"])(" page."),ae=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Element")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-treeselect"),Object(n["k"])("td",null,"Container element.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-treeselect-label-container"),Object(n["k"])("td",null,"Container of the label to display selected items.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-treeselect-label"),Object(n["k"])("td",null,"Label to display selected items.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-treeselect-trigger"),Object(n["k"])("td",null,"Dropdown button.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-treeselect-panel"),Object(n["k"])("td",null,"Overlay panel for items.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-treeselect-items-wrapper"),Object(n["k"])("td",null,"List container of items.")])])])],-1),re=Object(n["k"])("h5",null,"Dependencies",-1),ue=Object(n["k"])("p",null,"None.",-1);function be(e,t,l,c,o,d){var s=Object(n["O"])("router-link"),i=Object(n["O"])("AppDoc"),a=Object(n["P"])("code");return Object(n["G"])(),Object(n["h"])(i,{name:"TreeSelectDemo",sources:o.sources,github:"treeselect/TreeSelectDemo.vue",service:["NodeService"],data:["treenodes"]},{default:Object(n["Y"])((function(){return[O,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,k)),[[a,void 0,void 0,{script:!0}]]),h,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,v)),[[a]]),f,y,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,w)),[[a]]),N,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,T)),[[a,void 0,void 0,{script:!0}]]),Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,M)),[[a,void 0,void 0,{script:!0}]]),I,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,C)),[[a,void 0,void 0,{script:!0}]]),V,A,G,P,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,L)),[[a]]),E,F,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,H)),[[a,void 0,void 0,{script:!0}]]),R,U,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,z)),[[a]]),W,q,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,J)),[[a]]),Y,Q,X,$,ee,te,le,ne,ce,oe,Object(n["k"])("p",null,[de,Object(n["o"])(s,{to:"/theming"},{default:Object(n["Y"])((function(){return[se]})),_:1}),ie]),ae,re,ue]})),_:1},8,["sources"])}var je={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Single</h5>\n        <TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item"></TreeSelect>\n\n        <h5>Multiple</h5>\n        <TreeSelect v-model="selectedNodes1" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Items"></TreeSelect>\n\n        <h5>Checkbox</h5>\n        <TreeSelect v-model="selectedNodes2" :options="nodes" display="chip" selectionMode="checkbox"  placeholder="Select Items"></TreeSelect>\n    </div>\n</template>\n\n<script>\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    data() {\n        return {\n            nodes: null,\n            selectedNode: null,\n            selectedNodes1: null,\n            selectedNodes2: null\n        }\n    },\n    nodeService: null,\n    created() {\n        this.nodeService = new NodeService();\n    },\n    mounted() {\n        this.nodeService.getTreeNodes().then(data => this.nodes = data);\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-treeselect {\n    width:20rem;\n}\n\n@media screen and (max-width: 640px) {\n    .p-treeselect {\n        width: 100%;\n    }\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Single</h5>\n        <TreeSelect v-model="selectedNode" :options="nodes" placeholder="Select Item"></TreeSelect>\n\n        <h5>Multiple</h5>\n        <TreeSelect v-model="selectedNodes1" :options="nodes" selectionMode="multiple" :metaKeySelection="false" placeholder="Select Items"></TreeSelect>\n\n        <h5>Checkbox</h5>\n        <TreeSelect v-model="selectedNodes2" :options="nodes" display="chip" selectionMode="checkbox"  placeholder="Select Items"></TreeSelect>\n    </div>\n</template>\n\n<script>\nimport { ref, onMounted } from "vue";\nimport NodeService from \'./service/NodeService\';\n\nexport default {\n    setup() {\n         onMounted(() => {\n            nodeService.value.getTreeNodes().then(data => nodes.value = data);\n        });\n\n        const nodes = ref();\n        const nodeService = ref(new NodeService());\n\n        const selectedNode = ref();\n        const selectedNodes1 = ref();\n        const selectedNodes2 = ref();\n\n        return { nodes, selectedNode, selectedNodes1, selectedNodes2 };\n    }\n}\n<\\/script>\n\n<style lang="scss" scoped>\n.p-treeselect {\n    width:20rem;\n}\n\n@media screen and (max-width: 640px) {\n    .p-treeselect {\n        width: 100%;\n    }\n}\n</style>'},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/treeselect/treeselect.min.js"><\\/script>\n        <script src="./NodeService.js"><\\/script>',content:'<div id="app">\n            <h5>Single</h5>\n            <p-treeselect v-model="selectedNode" :options="nodes" placeholder="Select Item"></p-treeselect>\n\n            <h5>Multiple</h5>\n            <p-treeselect v-model="selectedNodes1" :options="nodes" selection-mode="multiple" :meta-key-selection="false" placeholder="Select Items"></p-treeselect>\n\n            <h5>Checkbox</h5>\n            <p-treeselect v-model="selectedNodes2" :options="nodes" display="chip" selection-mode="checkbox" placeholder="Select Items"></p-treeselect>\n        </div>\n\n        <script type="module">\n        const { createApp, ref, onMounted } = Vue;\n\n        const App = {\n            setup() {\n                onMounted(() => {\n                    nodeService.value.getTreeNodes().then(data => nodes.value = data);\n                });\n\n                const nodes = ref();\n                const nodeService = ref(new NodeService());\n\n                const selectedNode = ref();\n                const selectedNodes1 = ref();\n                const selectedNodes2 = ref();\n\n                return { nodes, selectedNode, selectedNodes1, selectedNodes2 };\n            },\n            components: {\n                "p-treeselect": primevue.treeselect\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n        <style>\n        .p-treeselect {\n            width:20rem;\n        }\n\n        @media screen and (max-width: 640px) {\n            .p-treeselect {\n                width: 100%;\n            }\n        }\n        </style>'}}}}},Oe=l("6b0d"),pe=l.n(Oe);const ke=pe()(je,[["render",be]]);var he=ke,me={data:function(){return{nodes:null,selectedNode:null,selectedNodes1:null,selectedNodes2:null}},nodeService:null,created:function(){this.nodeService=new j["a"]},mounted:function(){var e=this;this.nodeService.getTreeNodes().then((function(t){return e.nodes=t}))},components:{TreeSelectDoc:he}};l("cb93");const ve=pe()(me,[["render",b],["__scopeId","data-v-694ebc05"]]);t["default"]=ve},cb93:function(e,t,l){"use strict";l("1558")}}]);