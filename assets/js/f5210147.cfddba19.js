"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2384],{64421:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>D,frontMatter:()=>r,metadata:()=>c,toc:()=>g});var l=i(87462),o=(i(67294),i(3905)),n=i(6271),a=i(47582),s=(i(58764),i(29518));const r={title:"Dialog.Title"},p=void 0,c={unversionedId:"components/Dialog/DialogTitle",id:"components/Dialog/DialogTitle",title:"Dialog.Title",description:"A component to show a title in a Dialog.",source:"@site/docs/components/Dialog/DialogTitle.mdx",sourceDirName:"components/Dialog",slug:"/components/Dialog/DialogTitle",permalink:"/react-native-paper/docs/components/Dialog/DialogTitle",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/src/components/Dialog/DialogTitle.tsx",tags:[],version:"current",frontMatter:{title:"Dialog.Title"},sidebar:"components",previous:{title:"Dialog.ScrollArea",permalink:"/react-native-paper/docs/components/Dialog/DialogScrollArea"},next:{title:"Divider",permalink:"/react-native-paper/docs/components/Divider"}},d={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2},{value:"children (required)",id:"children-required",level:3},{value:"style",id:"style",level:3},{value:"theme",id:"theme",level:3}],m={toc:g};function D(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,l.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A component to show a title in a Dialog."),(0,o.kt)(s.Z,{screenshotData:"screenshots/dialog-title.png",baseUrl:"/react-native-paper/",mdxType:"ScreenshotTabs"}),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Dialog, Portal, Text } from 'react-native-paper';\n\nconst MyComponent = () => {\n  const [visible, setVisible] = React.useState(false);\n\n  const hideDialog = () => setVisible(false);\n\n  return (\n    <Portal>\n      <Dialog visible={visible} onDismiss={hideDialog}>\n        <Dialog.Title>This is a title</Dialog.Title>\n        <Dialog.Content>\n          <Text variant=\"bodyMedium\">This is simple dialog</Text>\n        </Dialog.Content>\n      </Dialog>\n    </Portal>\n  );\n};\n\nexport default MyComponent;\n")),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(a.Z,{componentLink:"Dialog/DialogTitle",mdxType:"ExtendsLink"}),(0,o.kt)("hr",null),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"children-required"},"children (required)")),(0,o.kt)(n.Z,{componentLink:"Dialog/DialogTitle",prop:"children",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"style"},"style")),(0,o.kt)(n.Z,{componentLink:"Dialog/DialogTitle",prop:"style",mdxType:"PropTable"}),(0,o.kt)("div",null,(0,o.kt)("h3",{id:"theme"},"theme")),(0,o.kt)(n.Z,{componentLink:"Dialog/DialogTitle",prop:"theme",mdxType:"PropTable"}),(0,o.kt)("span",null),(0,o.kt)("span",null),(0,o.kt)("span",null))}D.isMDXComponent=!0}}]);