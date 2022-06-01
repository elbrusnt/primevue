(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e6521"],{"97f3":function(n,a,e){"use strict";e.r(a);var t=e("7a23"),o={class:"content-section introduction"},s=Object(t["k"])("div",{class:"feature-intro"},[Object(t["k"])("h1",null,"BarChart"),Object(t["k"])("p",null,"A bar chart or bar graph is a chart that presents grouped data with rectangular bars with lengths proportional to the values that they represent.")],-1),r={class:"content-section implementation"},i={class:"card"},l=Object(t["k"])("h5",null,"Vertical",-1),c={class:"card"},d=Object(t["k"])("h5",null,"Horizontal",-1),b={class:"card"},p=Object(t["k"])("h5",null,"Multi Axis",-1),u={class:"card"},y=Object(t["k"])("h5",null,"Stacked",-1);function h(n,a,e,h,g,k){var A=Object(t["O"])("AppDemoActions"),f=Object(t["O"])("Chart"),m=Object(t["O"])("BarChartDoc");return Object(t["G"])(),Object(t["j"])("div",null,[Object(t["k"])("div",o,[s,Object(t["o"])(A)]),Object(t["k"])("div",r,[Object(t["k"])("div",i,[l,Object(t["o"])(f,{type:"bar",data:g.basicData,options:g.basicOptions},null,8,["data","options"])]),Object(t["k"])("div",c,[d,Object(t["o"])(f,{type:"bar",data:g.basicData,options:g.horizontalOptions},null,8,["data","options"])]),Object(t["k"])("div",b,[p,Object(t["o"])(f,{type:"bar",data:g.multiAxisData,options:g.multiAxisOptions},null,8,["data","options"])]),Object(t["k"])("div",u,[y,Object(t["o"])(f,{type:"bar",data:g.stackedData,options:g.stackedOptions},null,8,["data","options"])])]),Object(t["o"])(m)])}function g(n,a,e,o,s,r){var i=Object(t["O"])("AppDoc");return Object(t["G"])(),Object(t["h"])(i,{name:"ChartDemo",sources:s.sources,dependencies:{"chart.js":"3.3.2"},component:"Chart",github:"chart/BarChartDemo.vue"},null,8,["sources","dependencies"])}var k={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <div class=\"card\">\n            <h5>Vertical</h5>\n            <Chart type=\"bar\" :data=\"basicData\" :options=\"basicOptions\" />\n        </div>\n\n        <div class=\"card\">\n            <h5>Horizontal</h5>\n            <Chart type=\"bar\" :data=\"basicData\" :options=\"horizontalOptions\" />\n        </div>\n\n        <div class=\"card\">\n            <h5>Multi Axis</h5>\n            <Chart type=\"bar\" :data=\"multiAxisData\" :options=\"multiAxisOptions \"/>\n        </div>\n\n        <div class=\"card\">\n            <h5>Stacked</h5>\n            <Chart type=\"bar\" :data=\"stackedData\" :options=\"stackedOptions\" />\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            basicData: {\n                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n                datasets: [\n                    {\n                        label: 'My First dataset',\n                        backgroundColor: '#42A5F5',\n                        data: [65, 59, 80, 81, 56, 55, 40]\n                    },\n                    {\n                        label: 'My Second dataset',\n                        backgroundColor: '#FFA726',\n                        data: [28, 48, 40, 19, 86, 27, 90]\n                    }\n                ]\n            },\n            multiAxisData: {\n                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n                datasets: [{\n                    label: 'Dataset 1',\n                    backgroundColor: ['#EC407A','#AB47BC','#42A5F5','#7E57C2','#66BB6A','#FFCA28','#26A69A'],\n                    yAxisID: 'y-axis-1',\n                    data: [65, 59, 80, 81, 56, 55, 10]\n                }, {\n                    label: 'Dataset 2',\n                    backgroundColor: '#78909C',\n                    yAxisID: 'y-axis-2',\n                    data: [28, 48, 40, 19, 86, 27, 90]\n                }]\n            },\n            stackedData: {\n                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n                datasets: [{\n                    type: 'bar',\n                    label: 'Dataset 1',\n                    backgroundColor: '#42A5F5',\n                    data: [50,25,12,48,90,76,42]\n                }, {\n                    type: 'bar',\n                    label: 'Dataset 2',\n                    backgroundColor: '#66BB6A',\n                    data: [21,84,24,75,37,65,34]\n                }, {\n                    type: 'bar',\n                    label: 'Dataset 3',\n                    backgroundColor: '#FFA726',\n                    data: [41,52,24,74,23,21,32]\n                }]\n            },\n            basicOptions: {\n                plugins: {\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    }\n                },\n                scales: {\n                    x: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    }\n                }\n            },\n            horizontalOptions: {\n                indexAxis: 'y',\n                plugins: {\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    }\n                },\n                scales: {\n                    x: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    }\n                }\n            },\n            multiAxisOptions: {\n                plugins: {\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    },\n                    tooltips: {\n                        mode: 'index',\n                        intersect: true\n                    }\n                },\n                scales: {\n                    x: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        type: 'linear',\n                        display: true,\n                        position: 'left',\n                        ticks: {\n                            min: 0,\n                            max: 100,\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y1: {\n                        type: 'linear',\n                        display: true,\n                        position: 'right',\n                        grid: {\n                            drawOnChartArea: false,\n                            color: '#ebedef'\n                        },\n                        ticks: {\n                            min: 0,\n                            max: 100,\n                            color: '#495057'\n                        }\n                    }\n                }\n            },\n            stackedOptions: {\n                plugins: {\n                    tooltips: {\n                        mode: 'index',\n                        intersect: false\n                    },\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    }\n                },\n                scales: {\n                    x: {\n                        stacked: true,\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        stacked: true,\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n<\\/script>"},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n    <div>\n        <div class=\"card\">\n            <h5>Vertical</h5>\n            <Chart type=\"bar\" :data=\"basicData\" :options=\"basicOptions\" />\n        </div>\n\n        <div class=\"card\">\n            <h5>Horizontal</h5>\n            <Chart type=\"bar\" :data=\"basicData\" :options=\"horizontalOptions\" />\n        </div>\n\n        <div class=\"card\">\n            <h5>Multi Axis</h5>\n            <Chart type=\"bar\" :data=\"multiAxisData\" :options=\"multiAxisOptions \"/>\n        </div>\n\n        <div class=\"card\">\n            <h5>Stacked</h5>\n            <Chart type=\"bar\" :data=\"stackedData\" :options=\"stackedOptions\" />\n        </div>\n    </div>\n</template>\n\n<script>\nimport { ref } from 'vue';\n\nexport default {\n    setup() {\n        const basicData = ref({\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n            datasets: [\n                {\n                    label: 'My First dataset',\n                    backgroundColor: '#42A5F5',\n                    data: [65, 59, 80, 81, 56, 55, 40]\n                },\n                {\n                    label: 'My Second dataset',\n                    backgroundColor: '#FFA726',\n                    data: [28, 48, 40, 19, 86, 27, 90]\n                }\n            ]\n        });\n\n        const multiAxisData = ref({\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n            datasets: [{\n                label: 'Dataset 1',\n                backgroundColor: ['#EC407A','#AB47BC','#42A5F5','#7E57C2','#66BB6A','#FFCA28','#26A69A'],\n                yAxisID: 'y-axis-1',\n                data: [65, 59, 80, 81, 56, 55, 10]\n            }, {\n                label: 'Dataset 2',\n                backgroundColor: '#78909C',\n                yAxisID: 'y-axis-2',\n                data: [28, 48, 40, 19, 86, 27, 90]\n            }]\n        });\n\n        const stackedData = ref({\n            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n            datasets: [{\n                type: 'bar',\n                label: 'Dataset 1',\n                backgroundColor: '#42A5F5',\n                data: [50,25,12,48,90,76,42]\n            }, {\n                type: 'bar',\n                label: 'Dataset 2',\n                backgroundColor: '#66BB6A',\n                data: [21,84,24,75,37,65,34]\n            }, {\n                type: 'bar',\n                label: 'Dataset 3',\n                backgroundColor: '#FFA726',\n                data: [41,52,24,74,23,21,32]\n            }]\n        });\n        \n        const basicOptions = ref(\n            {\n                plugins: {\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    }\n                },\n                scales: {\n                    x: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    }\n                }\n            }\n        );\n\n        const horizontalOptions = ref(\n            {\n                indexAxis: 'y',\n                plugins: {\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    }\n                },\n                scales: {\n                    x: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    }\n                }\n            }\n        );\n\n        const multiAxisOptions = ref(\n            {\n                plugins: {\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    },\n                    tooltips: {\n                        mode: 'index',\n                        intersect: true\n                    }\n                },\n                scales: {\n                    x: {\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        type: 'linear',\n                        display: true,\n                        position: 'left',\n                        ticks: {\n                            min: 0,\n                            max: 100,\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y1: {\n                        type: 'linear',\n                        display: true,\n                        position: 'right',\n                        grid: {\n                            drawOnChartArea: false,\n                            color: '#ebedef'\n                        },\n                        ticks: {\n                            min: 0,\n                            max: 100,\n                            color: '#495057'\n                        }\n                    }\n                }\n            }\n        );\n\n        const stackedOptions = ref(\n            {\n                plugins: {\n                    tooltips: {\n                        mode: 'index',\n                        intersect: false\n                    },\n                    legend: {\n                        labels: {\n                            color: '#495057'\n                        }\n                    }\n                },\n                scales: {\n                    x: {\n                        stacked: true,\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    },\n                    y: {\n                        stacked: true,\n                        ticks: {\n                            color: '#495057'\n                        },\n                        grid: {\n                            color: '#ebedef'\n                        }\n                    }\n                }\n            }\n        );\n\n\t\treturn { basicData, multiAxisData, stackedData, \n            basicOptions, horizontalOptions, multiAxisOptions, stackedOptions }\n    }\n}\n<\\/script>\n"}}}}},A=e("6b0d"),f=e.n(A);const m=f()(k,[["render",g]]);var O=m,x=e("11f3"),C={themeChangeListener:null,mounted:function(){var n=this;this.themeChangeListener=function(a){a.dark?n.applyDarkTheme():n.applyLightTheme()},x["a"].on("theme-change",this.themeChangeListener),this.isDarkTheme()?this.applyDarkTheme():this.applyLightTheme()},beforeUnmount:function(){x["a"].off("change-theme",this.themeChangeListener)},data:function(){return{basicData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"#42A5F5",data:[65,59,80,81,56,55,40]},{label:"My Second dataset",backgroundColor:"#FFA726",data:[28,48,40,19,86,27,90]}]},multiAxisData:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Dataset 1",backgroundColor:["#EC407A","#AB47BC","#42A5F5","#7E57C2","#66BB6A","#FFCA28","#26A69A"],yAxisID:"y",data:[65,59,80,81,56,55,10]},{label:"Dataset 2",backgroundColor:"#78909C",yAxisID:"y1",data:[28,48,40,19,86,27,90]}]},stackedData:{labels:["January","February","March","April","May","June","July"],datasets:[{type:"bar",label:"Dataset 1",backgroundColor:"#42A5F5",data:[50,25,12,48,90,76,42]},{type:"bar",label:"Dataset 2",backgroundColor:"#66BB6A",data:[21,84,24,75,37,65,34]},{type:"bar",label:"Dataset 3",backgroundColor:"#FFA726",data:[41,52,24,74,23,21,32]}]},basicOptions:null,horizontalOptions:null,multiAxisOptions:null,stackedOptions:null}},methods:{isDarkTheme:function(){return!0===this.$appState.darkTheme},applyLightTheme:function(){this.basicOptions={plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}},this.horizontalOptions={indexAxis:"y",plugins:{legend:{labels:{color:"#495057"}}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{ticks:{color:"#495057"},grid:{color:"#ebedef"}}}},this.multiAxisOptions={plugins:{legend:{labels:{color:"#495057"}},tooltips:{mode:"index",intersect:!0}},scales:{x:{ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{type:"linear",display:!0,position:"left",ticks:{min:0,max:100,color:"#495057"},grid:{color:"#ebedef"}},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1,color:"#ebedef"},ticks:{min:0,max:100,color:"#495057"}}}},this.stackedOptions={plugins:{tooltips:{mode:"index",intersect:!1},legend:{labels:{color:"#495057"}}},scales:{x:{stacked:!0,ticks:{color:"#495057"},grid:{color:"#ebedef"}},y:{stacked:!0,ticks:{color:"#495057"},grid:{color:"#ebedef"}}}}},applyDarkTheme:function(){this.basicOptions={plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}}}},this.horizontalOptions={indexAxis:"y",plugins:{legend:{labels:{color:"#ebedef"}}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}},y:{ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}}}},this.multiAxisOptions={plugins:{legend:{labels:{color:"#ebedef"}},tooltips:{mode:"index",intersect:!0}},scales:{x:{ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}},y:{type:"linear",display:!0,position:"left",ticks:{min:0,max:100,color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1,color:"rgba(255,255,255,0.2)"},ticks:{min:0,max:100,color:"#ebedef"}}}},this.stackedOptions={plugins:{legend:{labels:{color:"#ebedef"}},tooltips:{mode:"index",intersect:!1}},scales:{x:{stacked:!0,ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}},y:{stacked:!0,ticks:{color:"#ebedef"},grid:{color:"rgba(255,255,255,0.2)"}}}}}},components:{BarChartDoc:O}};const D=f()(C,[["render",h]]);a["default"]=D}}]);