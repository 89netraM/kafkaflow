"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8392],{38125:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>o});var s=i(85893),l=i(11151);const a={},d="ConsumerMiddlewareConfigurationBuilder.AddSingleTypeDeserializer<TDeserializer> method (1 of 4)",n={id:"reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/AddSingleTypeDeserializer",title:"ConsumerMiddlewareConfigurationBuilder.AddSingleTypeDeserializer&lt;TDeserializer&gt; method (1 of 4)",description:"Register a middleware to deserialize the message to a fixed type",source:"@site/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/AddSingleTypeDeserializer.md",sourceDirName:"reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder",slug:"/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/AddSingleTypeDeserializer",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/AddSingleTypeDeserializer",draft:!1,unlisted:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/AddSingleTypeDeserializer.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ConsumerMiddlewareConfigurationBuilder.AddDeserializer&lt;TDeserializer&gt; method (1 of 4)",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/AddDeserializer"},next:{title:"ConsumerThrottlingConfigurationBuilderExtensions class",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerThrottlingConfigurationBuilderExtensions/"}},t={},o=[{value:"See Also",id:"see-also",level:2},{value:"See Also",id:"see-also-1",level:2},{value:"See Also",id:"see-also-2",level:2},{value:"See Also",id:"see-also-3",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"consumermiddlewareconfigurationbuilderaddsingletypedeserializertdeserializer-method-1-of-4",children:"ConsumerMiddlewareConfigurationBuilder.AddSingleTypeDeserializer<TDeserializer> method (1 of 4)"}),"\n",(0,s.jsx)(r.p,{children:"Register a middleware to deserialize the message to a fixed type"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:"public static IConsumerMiddlewareConfigurationBuilder AddSingleTypeDeserializer<TDeserializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares, Type messageType)\n    where TDeserializer : class, IDeserializer\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"parameter"}),(0,s.jsx)(r.th,{children:"description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TDeserializer"}),(0,s.jsx)(r.td,{children:"A class that implements IDeserializer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"middlewares"}),(0,s.jsx)(r.td,{children:"The middleware configuration builder"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"messageType"}),(0,s.jsx)(r.td,{children:"The message type"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"see-also",children:"See Also"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["class\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/",children:"ConsumerMiddlewareConfigurationBuilder"})]}),"\n",(0,s.jsxs)(r.li,{children:["namespace\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/",children:"KafkaFlow"})]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h1,{id:"consumermiddlewareconfigurationbuilderaddsingletypedeserializertdeserializer-method-2-of-4",children:"ConsumerMiddlewareConfigurationBuilder.AddSingleTypeDeserializer<TDeserializer> method (2 of 4)"}),"\n",(0,s.jsx)(r.p,{children:"Register a middleware to deserialize the message to a fixed type"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:"public static IConsumerMiddlewareConfigurationBuilder AddSingleTypeDeserializer<TDeserializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares, \n    Factory<TDeserializer> serializerFactory, Type messageType)\n    where TDeserializer : class, IDeserializer\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"parameter"}),(0,s.jsx)(r.th,{children:"description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TDeserializer"}),(0,s.jsx)(r.td,{children:"A class that implements IDeserializer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"middlewares"}),(0,s.jsx)(r.td,{children:"The middleware configuration builder"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"serializerFactory"}),(0,s.jsx)(r.td,{children:"A factory to create a IDeserializer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"messageType"}),(0,s.jsx)(r.td,{children:"The message type"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"see-also-1",children:"See Also"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["class\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/",children:"ConsumerMiddlewareConfigurationBuilder"})]}),"\n",(0,s.jsxs)(r.li,{children:["namespace\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/",children:"KafkaFlow"})]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h1,{id:"consumermiddlewareconfigurationbuilderaddsingletypedeserializertmessagetdeserializer-method-3-of-4",children:"ConsumerMiddlewareConfigurationBuilder.AddSingleTypeDeserializer<TMessage,TDeserializer> method (3 of 4)"}),"\n",(0,s.jsx)(r.p,{children:"Register a middleware to deserialize the message to a fixed type"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:"public static IConsumerMiddlewareConfigurationBuilder \n    AddSingleTypeDeserializer<TMessage, TDeserializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares)\n    where TDeserializer : class, IDeserializer\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"parameter"}),(0,s.jsx)(r.th,{children:"description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TMessage"}),(0,s.jsx)(r.td,{children:"The message type"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TDeserializer"}),(0,s.jsx)(r.td,{children:"A class that implements IDeserializer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"middlewares"}),(0,s.jsx)(r.td,{children:"The middleware configuration builder"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"see-also-2",children:"See Also"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["class\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/",children:"ConsumerMiddlewareConfigurationBuilder"})]}),"\n",(0,s.jsxs)(r.li,{children:["namespace\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/",children:"KafkaFlow"})]}),"\n"]}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h1,{id:"consumermiddlewareconfigurationbuilderaddsingletypedeserializertmessagetdeserializer-method-4-of-4",children:"ConsumerMiddlewareConfigurationBuilder.AddSingleTypeDeserializer<TMessage,TDeserializer> method (4 of 4)"}),"\n",(0,s.jsx)(r.p,{children:"Register a middleware to deserialize the message to a fixed type"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-csharp",children:"public static IConsumerMiddlewareConfigurationBuilder \n    AddSingleTypeDeserializer<TMessage, TDeserializer>(\n    this IConsumerMiddlewareConfigurationBuilder middlewares, \n    Factory<TDeserializer> serializerFactory)\n    where TDeserializer : class, IDeserializer\n"})}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"parameter"}),(0,s.jsx)(r.th,{children:"description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TMessage"}),(0,s.jsx)(r.td,{children:"The message type"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"TDeserializer"}),(0,s.jsx)(r.td,{children:"A class that implements IDeserializer"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"middlewares"}),(0,s.jsx)(r.td,{children:"The middleware configuration builder"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"serializerFactory"}),(0,s.jsx)(r.td,{children:"A factory to create a IDeserializer"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"see-also-3",children:"See Also"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["class\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow/ConsumerMiddlewareConfigurationBuilder/",children:"ConsumerMiddlewareConfigurationBuilder"})]}),"\n",(0,s.jsxs)(r.li,{children:["namespace\xa0",(0,s.jsx)(r.a,{href:"/kafkaflow/docs/reference/KafkaFlow/",children:"KafkaFlow"})]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,l.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,r,i)=>{i.d(r,{Z:()=>n,a:()=>d});var s=i(67294);const l={},a=s.createContext(l);function d(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);