"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9159],{49787:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=t(85893),n=t(11151);const r={},a="IMessageConsumer.GetPosition method",i={id:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetPosition",title:"IMessageConsumer.GetPosition method",description:"Gets the current position (offset) for the specified topic / partition. The offset field of each requested partition will be set to the offset of the last consumed message + 1, or Offset.Unset in case there was no previous message consumed by this consumer.",source:"@site/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetPosition.md",sourceDirName:"reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer",slug:"/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetPosition",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetPosition",draft:!1,unlisted:!1,editUrl:"https://github.com/farfetch/kafkaflow/tree/master/website/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetPosition.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IMessageConsumer.GetOffsets method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetOffsets"},next:{title:"IMessageConsumer.GetTopicPartitionsLag method",permalink:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/GetTopicPartitionsLag"}},c={},l=[{value:"Exceptions",id:"exceptions",level:2},{value:"See Also",id:"see-also",level:2}];function f(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"imessageconsumergetposition-method",children:"IMessageConsumer.GetPosition method"}),"\n",(0,o.jsx)(s.p,{children:"Gets the current position (offset) for the specified topic / partition. The offset field of each requested partition will be set to the offset of the last consumed message + 1, or Offset.Unset in case there was no previous message consumed by this consumer."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-csharp",children:"public Offset GetPosition(TopicPartition topicPartition)\n"})}),"\n",(0,o.jsx)(s.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"exception"}),(0,o.jsx)(s.th,{children:"condition"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"KafkaException"}),(0,o.jsx)(s.td,{children:"Thrown if the request failed."})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"see-also",children:"See Also"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["interface\xa0",(0,o.jsx)(s.a,{href:"/kafkaflow/docs/reference/KafkaFlow/KafkaFlow.Consumers/IMessageConsumer/",children:"IMessageConsumer"})]}),"\n",(0,o.jsxs)(s.li,{children:["namespace\xa0",(0,o.jsx)(s.a,{href:"/kafkaflow/docs/reference/KafkaFlow/",children:"KafkaFlow.Consumers"})]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var o=t(67294);const n={},r=o.createContext(n);function a(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);