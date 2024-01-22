"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5987],{93574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(85893),o=n(11151);const a={sidebar_position:10,sidebar_label:"OpenTelemetry"},s="OpenTelemetry instrumentation",r={id:"guides/open-telemetry",title:"OpenTelemetry instrumentation",description:"In this section, we will explore how to enable OpenTelemetry instrumentation when using KafkaFlow.",source:"@site/docs/guides/open-telemetry.md",sourceDirName:"guides",slug:"/guides/open-telemetry",permalink:"/kafkaflow/docs/guides/open-telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/guides/open-telemetry.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"OpenTelemetry"},sidebar:"tutorialSidebar",previous:{title:"Global Events",permalink:"/kafkaflow/docs/guides/global-events"},next:{title:"Dependency Injection",permalink:"/kafkaflow/docs/guides/dependency-injection"}},l={},c=[{value:"Including OpenTelemetry instrumentation in your code",id:"including-opentelemetry-instrumentation-in-your-code",level:2},{value:"Using .NET Automatic Instrumentation",id:"using-net-automatic-instrumentation",level:2},{value:"Propagation",id:"propagation",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"opentelemetry-instrumentation",children:"OpenTelemetry instrumentation"}),"\n",(0,i.jsx)(t.p,{children:"In this section, we will explore how to enable OpenTelemetry instrumentation when using KafkaFlow."}),"\n",(0,i.jsxs)(t.p,{children:["KafkaFlow includes support for ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/signals/traces/",children:"Traces"})," and ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/concepts/signals/baggage/",children:"Baggage"})," signals using ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/net/",children:"OpenTelemetry instrumentation"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["You can find a sample on how to enable OpenTelemetry ",(0,i.jsx)(t.a,{href:"https://github.com/Farfetch/kafkaflow/tree/master/samples/KafkaFlow.Sample.OpenTelemetry",children:"here"}),"."]})}),"\n",(0,i.jsx)(t.h2,{id:"including-opentelemetry-instrumentation-in-your-code",children:"Including OpenTelemetry instrumentation in your code"}),"\n",(0,i.jsxs)(t.p,{children:["Add the package ",(0,i.jsx)(t.a,{href:"https://www.nuget.org/packages/KafkaFlow.OpenTelemetry/",children:"KafkaFlow.OpenTelemetry"})," to the project and add the extension method ",(0,i.jsx)(t.code,{children:"AddOpenTelemetryInstrumentation"})," in your ",(0,i.jsx)(t.a,{href:"/kafkaflow/docs/guides/configuration",children:"configuration"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-csharp",children:"services.AddKafka(\n    kafka => kafka\n        .AddCluster(...)\n        .AddOpenTelemetryInstrumentation()\n);\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Once you have your .NET application instrumentation configured (",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/net/getting-started/",children:"see here"}),"), you just need to subscribe to the source ",(0,i.jsx)(t.code,{children:"KafkaFlow.OpenTelemetry"})," that is accessible through a constant at ",(0,i.jsx)(t.code,{children:"KafkaFlowInstrumentation.ActivitySourceName"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"using-net-automatic-instrumentation",children:"Using .NET Automatic Instrumentation"}),"\n",(0,i.jsxs)(t.p,{children:["When using ",(0,i.jsx)(t.a,{href:"https://github.com/open-telemetry/opentelemetry-dotnet-instrumentation",children:".NET automatic instrumentation"}),", the KafkaFlow activity can be captured by including the ActivitySource name ",(0,i.jsx)(t.code,{children:"KafkaFlow.OpenTelemetry"})," as a parameter to the variable ",(0,i.jsx)(t.code,{children:"OTEL_DOTNET_AUTO_TRACES_ADDITIONAL_SOURCES"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"propagation",children:"Propagation"}),"\n",(0,i.jsxs)(t.p,{children:["KafkaFlow uses ",(0,i.jsx)(t.a,{href:"https://opentelemetry.io/docs/specs/otel/context/api-propagators/",children:"Propagation"}),", the mechanism that moves context information data between services and processes.\nWhen a message is produced using a KafkaFlow producer and consumed by a KafkaFlow consumer, the context will automatically be propagated."]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(67294);const o={},a=i.createContext(o);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);