(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4051],{97627:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/claim-portal-inner",function(){return l(72647)}])},68186:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var n=l(85893),a=l(16938),s=l(54592),o=l(60421),i=l(51800);function r(e){let{is:t,ColProps:l,RowProps:r,GridProps:c,...m}=e;return"Row"===t?(0,n.jsx)(i.Z,{...m,...r}):"Col"===t?(0,n.jsx)(s.Z,{...m,...l}):"Grid"===t?(0,n.jsx)(o.Z,{...m,...c}):"div"===t?(0,n.jsx)("div",{...(0,a.CE)(m,["domRef"]),ref:m.domRef}):(0,n.jsx)(n.Fragment,{children:m.children})}},99645:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(85893);function a(e){let{className:t}=e;return(0,n.jsxs)("div",{className:"lds-roller ".concat(null!=t?t:""," mobile:scale-75"),children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})}},33674:function(e,t,l){"use strict";l.d(t,{Z:function(){return x}});var n=l(85893),a=l(67294),s=l(66180),o=l(91371),i=l(14431),r=l(85503);function c(){let{run:e=!0,initPercent:t=0,componentRef:l,className:o,duration:c=6e4,strokeWidth:m=3,updateDelay:d=1e3,svgWidth:u=36,loop:f=!0,onEnd:h,onClick:x}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p=.5*u/2,b=2*p*Math.PI,v=(0,a.useRef)(!1),{documentVisible:j}=(0,r.x)(),[g,N]=(0,a.useState)(t),w=(0,a.useRef)(),Z=(0,a.useRef)(null);(0,i.e)(Z,{onClick:x,disable:!x}),(0,a.useEffect)(()=>{if(e&&j){let t=globalThis.setInterval(()=>{e&&j&&N(e=>e+1/c*d)},d);return w.current=t,()=>globalThis.clearInterval(t)}globalThis.clearInterval(w.current)},[c,d,e&&j]);let y=(0,a.useRef)();return(0,a.useEffect)(()=>{if(j&&y.current){let e=Date.now()-y.current;N(t=>t+1/c*e)}j||(y.current=Date.now())},[j]),(0,a.useEffect)(()=>{if(0==Math.floor(g))return;let e=setTimeout(()=>{v.current||(v.current=!0,null==h||h(),setTimeout(()=>{v.current=!1},0))},0);return()=>clearTimeout(e)},[Math.floor(g)]),(0,a.useImperativeHandle)(l,()=>({currentProgressPercent:g%1,restart(){N(0)}})),(0,n.jsx)("div",{className:(0,s.m)("w-full h-full rounded",o),children:(0,n.jsxs)("svg",{ref:Z,width:u,height:u,viewBox:"0 0 ".concat(u," ").concat(u),children:[(0,n.jsx)("circle",{r:p,cx:"50%",cy:"50%",fill:"transparent",style:{strokeWidth:m,stroke:"#ffffff2e"}}),(0,n.jsx)("circle",{id:"bar",r:p,cx:"50%",cy:"50%",fill:"transparent",strokeDasharray:b,strokeDashoffset:b-(f?g%1:Math.min(g,1))*b,style:{strokeWidth:m,stroke:"#92e1ffd9",transform:"rotate(-90deg)",transformOrigin:"center",strokeLinecap:"round",transition:"200ms"}})]})})}var m=l(92618),d=l(12839),u=l(43066),f=l(96398),h=l(62361);function x(e){var t,l,i,x;let{run:p=!0,refreshKey:b,popPlacement:v,forceOpen:j,freshFunction:g,freshEach:N=1e3,totalDuration:w=6e4,className:Z,circleBodyClassName:y,disabled:C=!1}=e,P=(0,a.useRef)(),[k,T]=(0,a.useState)(!1);(0,u.N)({loop:N,disable:!k});let{documentVisible:A,documentVisibleRef:I}=(0,r.x)(),[L,S,R]=(0,h.$)(!1),E=()=>S(!0),D=()=>S(!1),O=(0,o.ZP)(e=>e.isMobile),B=null===(t=o.ZP.getState().refreshCircleLastTimestamp[b])||void 0===t?void 0:t.endTimestamp,M=null===(l=o.ZP.getState().refreshCircleLastTimestamp[b])||void 0===l?void 0:l.endProcessPercent,_=B&&M&&(Date.now()-B)/w+M;return(0,f.L)(()=>{if(!d.N9)return _&&_>1&&(null==g||g()),()=>{var e;o.ZP.setState(t=>{var l;return{refreshCircleLastTimestamp:{...t.refreshCircleLastTimestamp,[b]:{endTimestamp:Date.now(),endProcessPercent:null!==(e=null===(l=P.current)||void 0===l?void 0:l.currentProgressPercent)&&void 0!==e?e:0}}}})}},[]),(0,a.useEffect)(()=>{if(C||!R()||!I.current)return;let e=setTimeout(()=>{!C&&R()&&I.current&&(null==g||g(),D())},0);return()=>clearTimeout(e)},[L,A,C]),(0,n.jsxs)(m.Z,{className:(0,s.m)("select-none",Z),placement:v,forceOpen:j,triggerBy:O?"press":void 0,autoClose:!0,onOpen:()=>T(!0),onClose:()=>T(!1),children:[(0,n.jsx)(c,{run:p&&!C,initPercent:_&&_%1,duration:w,componentRef:P,className:(0,s.m)("clickable clickable-filter-effect",y),onClick:()=>{var e;E(),null===(e=P.current)||void 0===e||e.restart()},onEnd:()=>{var e;E(),null===(e=P.current)||void 0===e||e.restart()}}),(0,n.jsx)(m.Z.Panel,{children:(0,n.jsxs)("div",{className:"w-60",children:["Displayed data will auto-refresh after"," ",Math.round(w/1e3*(1-(null!==(x=null===(i=P.current)||void 0===i?void 0:i.currentProgressPercent)&&void 0!==x?x:0)))," seconds. Click this circle to update manually."]})})]})}},92618:function(e,t,l){"use strict";l.d(t,{Z:function(){return f}});var n=l(85893),a=l(91371),s=l(37012),o=l(31139),i=l(50352),r=l(27993),c=l(67294),m=l(66180),d=l(6994),u=l(36868);function f(e){let{componentRef:t,className:l,panelClassName:r,arrowClassName:f,children:x,forceOpen:p,placement:b="top",triggerBy:v,closeBy:j="click-outside-but-trigger",disable:g,defaultOpen:N,darkGradient:w=!1,autoClose:Z,...y}=e,C=(0,c.useRef)(),P=(0,c.useMemo)(()=>(0,i.kp)(x,h,e=>(0,s.Z)(e,{$isRenderByMain:!0,$popoverRef:C})),[x]),k=(0,a.ZP)(e=>e.isMobile);return(0,n.jsxs)(u.Z,{componentRef:(0,o.Z)(t,C),canOpen:!g,placement:k?"top":b,defaultOpen:N,triggerBy:null!=v?v:k?"click":"hover",forceOpen:p,className:l,triggerDelay:100,closeBy:j,closeDelay:100,autoClose:Z,...y,children:[(0,n.jsx)(u.Z.Button,{children:x}),(0,n.jsx)(u.Z.Panel,{children:e=>{let{locationInfo:t}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:(0,m.m)("w-2 h-2 absolute bg-[#0C0926] rotate-45 -translate-x-1 -translate-y-1",w?"bg-[transparent]":"",f),style:t?{top:t.arrowTopRelativeToPanel,left:t.arrowLeftRelativeToPanel}:{visibility:"hidden"}}),(0,n.jsx)(d.Z,{className:(0,m.m)("TooltipPanel p-4 bg-[#0C0926] rounded-lg text-xs text-white",r),style:{background:w?"linear-gradient(140.14deg, rgba(0, 182, 191, 0.15) 0%, rgba(27, 22, 89, 0.1) 86.61%), linear-gradient(321.82deg, #18134D 0%, #1B1659 100%)":"default",border:w?"1px solid  rgba(171, 196, 255, 0.2)":"none"},children:P})]})}})]})}function h(e){var t;let{$isRenderByMain:l,$popoverRef:a,children:s,className:o}=e;return l?(0,n.jsx)("div",{className:o,children:(0,r.u)(s,[null!==(t=null==a?void 0:a.current)&&void 0!==t?t:{}])}):null}f.Panel=h},99881:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(72573);function a(e){let{groupSeparator:t=",",fractionLength:l=2,groupSize:a=3}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e?"0":[e=>(0,n.B)(e),e=>"auto"===l?e:function(e,t){var l;let[,n="",a="",s=""]=null!==(l=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==l?l:[];return s?s.length<t?String(e):Number(e).toFixed(t):String(e)}(e,l),e=>{var l;let[,n="",s="",o=""]=null!==(l=e.match(/(-?)(\d*)\.?(\d*)/))&&void 0!==l?l:[],i=[...s].reduceRight((e,l,n,s)=>{let o=s.length-1-n;return l+(0!==o&&o%a==0?t:"")+e},"");return o?"".concat(n).concat(i,".").concat(o):"".concat(n).concat(i)}].reduce((e,t)=>t(e),e)}},18074:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});var n=l(81451),a=l(51523),s=l(84207),o=l(72573),i=l(99881);function r(e,t){try{var l,r;let c=(0,s.Z)(null!=e?e:0),m=c.mul((null==t?void 0:t.alreadyPercented)?1:100).toFixed(null!==(l=null==t?void 0:t.fixed)&&void 0!==l?l:2);if((0,n.eq)(c,0))return"0%";if(!(null==t?void 0:t.exact)&&m===0..toFixed(null!==(r=null==t?void 0:t.fixed)&&void 0!==r?r:2))return(null==t?void 0:t.alwaysSigned)?"<+0.01%":"<0.01%";return(null==t?void 0:t.alwaysSigned)?"".concat((0,n.gt)(m,0)?"+":"-").concat((0,i.Z)((0,n.gt)(m,0)?(0,o.B)(m):(0,o.B)((0,a.dC)(m,-1))),"%"):"".concat((0,i.Z)(m,{fractionLength:null==t?void 0:t.fixed}),"%")}catch(e){return"0%"}}},43066:function(e,t,l){"use strict";l.d(t,{N:function(){return s}});var n=l(67294),a=l(85503);function s(){let{loop:e,disable:t,disableWhenDocumentInvisiable:l=!0,onLoop:s}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{documentVisible:o}=(0,a.x)(),[i,r]=(0,n.useState)(0),c=(0,n.useCallback)(()=>r(e=>e+1),[]),m=(0,n.useRef)(),d=(0,n.useMemo)(()=>(!l||o)&&!t,[t,l,o]);return(0,n.useEffect)(()=>{if(e){if(d){let t=globalThis.setInterval(()=>{null==s||s(),c()},e);return m.current=t,()=>globalThis.clearInterval(t)}globalThis.clearInterval(m.current)}},[d,e]),[i,c]}},72647:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return U}});var n=l(85893),a=l(91371),s=l(72305),o=l(34003),i=l(79938),r=l(53002),c=l(64529);let m=(0,c.Ue)(e=>({dataLoaded:!1,refreshCount:0,refresh:()=>{e(e=>({refreshCount:e.refreshCount+1}))}})),d=(0,i.Kb)(function(){let{poolInfos:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return async t=>{let{transactionCollector:l,baseUtils:{connection:n,owner:a}}=t,{tokenAccountRawInfos:c,txVersion:d}=r.Z.getState();(0,o.Z)(e);let{innerTransactions:u}=await s.ov0.makeClaimAllInstructionSimple({connection:n,poolInfos:e.map(e=>e.rawInfo),ownerInfo:{wallet:a,tokenAccounts:c,associatedOnly:!0,checkCreateATAOwner:!0},lookupTableCache:i.eq,makeTxVersion:d}),f=u.map(e=>[e,{txHistoryInfo:{title:"Claim"}}]);l.add(f,{onTxAllSuccess(){m.getState().refresh()}})}}),u=(0,i.Kb)(function(){let{poolInfo:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return async t=>{let{transactionCollector:l,baseUtils:{connection:n,owner:a}}=t,{tokenAccountRawInfos:c,txVersion:d}=r.Z.getState();(0,o.Z)(e);let u=await s.ov0.makeClaimInstructionSimple({connection:n,poolInfo:e.rawInfo,ownerInfo:{wallet:a,tokenAccounts:c,associatedOnly:!0,checkCreateATAOwner:!0},makeTxVersion:d,lookupTableCache:i.eq}),f=u.innerTransactions.map(e=>[e,{txHistoryInfo:{title:"Claim"}}]);l.add(f,{onTxAllSuccess(){m.getState().refresh()}})}});var f=l(19132),h=l(26842),x=l(31166),p=l(62952),b=l(4465),v=l(51523),j=l(57435),g=l(59277),N=l(99522),w=l(68186),Z=l(43067),y=l(6994),C=l(70745),P=l(54592),k=l(60421),T=l(48162),A=l(66042),I=l(40471),L=l(99645),S=l(42885),R=l(51800),E=l(92618),D=l(65408),O=l(56419),B=l(3363),M=l(18074),_=l(72573),q=l(66180),F=l(33674),z=l(11601);function U(){!function(){var e;let t=(0,f.ZP)(e=>e.connection),l=null!==(e=(0,f.ZP)(e=>e.chainTimeOffset))&&void 0!==e?e:0,n=(0,r.Z)(e=>e.owner),{refreshCount:a}=m(),o=(0,x.ZP)(e=>e.lpTokens),i=(0,x.ZP)(e=>e.tokens),c=(0,g.ZP)(e=>e.programIds);(0,h.Z)(async()=>{if(!t)return;if(!n){m.getState().hydratedCompensationInfoItems&&m.setState({hydratedCompensationInfoItems:void 0});return}m.setState({dataLoaded:!1});let e={connection:t,chainTime:(Date.now()+l)/1e3,poolIds:s.ov0.DEFAULT_POOL_ID,programId:c.UTIL1216,wallet:n},a=await s.ov0.getAllInfo(e);a&&m.setState({dataLoaded:!0,hydratedCompensationInfoItems:a.map(e=>(function(e){var t,l;let{getToken:n}=x.ZP.getState(),{jsonInfos:a}=j.Z.getState(),s=a.find(t=>(0,b.$F)(t.id,e.ammId)),o=n(null==s?void 0:s.baseMint),i=n(null==s?void 0:s.quoteMint),r=n(null==s?void 0:s.lpMint)?(0,p.n)(n(null==s?void 0:s.lpMint),e.snapshotLpAmount):void 0;return{...e,rawInfo:e,poolName:"".concat(null!==(t=null==o?void 0:o.symbol)&&void 0!==t?t:"","-").concat(null!==(l=null==i?void 0:i.symbol)&&void 0!==l?l:""),snapshotLpAmount:r,openTime:new Date(1e3*e.openTime),endTime:new Date(1e3*e.endTime),tokenInfo:e.tokenInfo.map(e=>{let t=n(e.mintAddress);if(!t)return;let l=(0,p.n)(t,e.perLpLoss);return{...e,token:t,perLpLoss:l,ownerAllLossAmount:(0,p.n)(t,(0,v.dC)(r,l),{alreadyDecimaled:!0}),debtAmount:(0,p.n)(t,e.debtAmount)}})}})(e))})},[t,a,n,o,i])}();let{dataLoaded:e,hydratedCompensationInfoItems:t}=m(),l=!!(null==t?void 0:t.length),o=(0,a.ZP)(e=>e.isApprovePanelShown),i=(0,a.ZP)(e=>e.isMobile),c=(0,r.Z)(e=>e.connected);return(0,n.jsxs)(S.Z,{mobileBarTitle:"Claim portal",metaTitle:"Claim portal - Raydium",contentButtonPaddingShorter:!0,children:[(0,n.jsxs)(w.Z,{is:i?"Col":"Row",className:"items-center justify-between gap-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"title text-2xl mobile:text-lg font-bold justify-self-start text-white mb-4",children:"Claim Portal"}),(0,n.jsxs)("div",{className:"text-[#abc4ff] mobile:text-xs mb-4 space-y-4",children:[(0,n.jsx)("div",{children:"This portal is for claiming assets from pools affected by the December 16th exploit."}),(0,n.jsxs)("div",{children:["If you had LP positions that were affected, details can be viewed below and assets claimed. For full info,"," ",(0,n.jsx)(A.Z,{href:"https://docs.raydium.io/raydium/updates/claim-portal",children:"click here"}),"."]})]})]}),c&&l&&(0,n.jsxs)(P.Z,{className:"items-end mobile:items-center gap-4",children:[(0,n.jsx)(F.Z,{refreshKey:"compensation",freshFunction:()=>{m.getState().refresh()}}),(0,n.jsx)(Z.Z,{className:"w-[12em] frosted-glass-teal mb-8",size:i?"sm":"md",isLoading:o,validators:[{should:c,forceActive:!0,fallbackProps:{onClick:()=>a.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"}},{should:null==t?void 0:t.some(e=>e.canClaim),fallbackProps:{children:"Claimed"}}],onClick:()=>t&&d({poolInfos:t.filter(e=>e.canClaim)}),children:"Claim all"})]})]}),c?e||t?l?(0,n.jsx)("div",{className:"py-12",children:(0,n.jsx)(k.Z,{className:"gap-32 ",children:null==t?void 0:t.map(e=>(0,n.jsx)(W,{info:e},(0,B.ZP)(e.ownerAccountId)))})}):(0,n.jsxs)(k.Z,{className:"justify-center mt-24",children:[(0,n.jsx)(I.Z,{className:"mx-auto",src:"/backgroundImages/not-found.svg"}),(0,n.jsx)("div",{className:"mt-10 mx-auto text-[#abc4ff] text-sm",children:"You have no affected positions to claim"}),(0,n.jsx)("div",{className:"mt-3 mx-auto mobile:w-full",children:(0,n.jsx)(A.Z,{href:"/pools",children:"Go to Pools"})})]}):(0,n.jsx)(k.Z,{className:"justify-center",children:(0,n.jsx)(L.Z,{})}):(0,n.jsxs)(k.Z,{className:"justify-center mt-24",children:[(0,n.jsx)(I.Z,{className:"mx-auto",src:"/backgroundImages/not-found.svg"}),(0,n.jsx)("div",{className:"mt-10 mx-auto text-[#abc4ff] text-sm",children:"Connect wallet to see LP position details"}),(0,n.jsx)("div",{className:"mt-14 mx-auto w-[400px] mobile:w-full",children:(0,n.jsx)(Z.Z,{className:"w-full frosted-glass-teal mb-8",size:i?"sm":"md",onClick:()=>a.ZP.setState({isWalletSelectorShown:!0}),children:"Connect Wallet"})})]})]})}function W(e){let{info:t}=e,l=(0,a.ZP)(e=>e.isApprovePanelShown),s=(0,a.ZP)(e=>e.isMobile);return(0,x.ZP)(e=>e.tokenPrices),(0,n.jsxs)(P.Z,{className:"gap-6 mobile:gap-4 mx-auto w-full",children:[(0,n.jsxs)(w.Z,{is:s?"Col":"Row",className:"gap-4 mobile:gap-2 items-end mobile:items-start",children:[(0,n.jsxs)(P.Z,{className:"gap-1.5",children:[(0,n.jsxs)(P.Z,{className:"gap-1",children:[(0,n.jsxs)(R.Z,{className:"gap-4",children:[(0,n.jsxs)(R.Z,{className:"gap-2",children:[(0,n.jsx)("div",{className:"text-xl font-bold text-[#fff] ",children:t.poolName}),t.project&&(0,n.jsxs)(R.Z,{className:"items-center",children:[(0,n.jsxs)("div",{className:"text-lg mobile:text-base font-semibold text-[#fff]",children:["(",t.project,")"]}),(0,n.jsxs)(E.Z,{panelClassName:"bg-[#3b4146]",arrowClassName:"bg-[#3b4146]",children:[(0,n.jsx)(T.Z,{size:"sm",heroIconName:"question-mark-circle",className:(0,q.m)("mx-1 cursor-help text-[#fff]")}),(0,n.jsx)(E.Z.Panel,{children:(0,n.jsx)("p",{className:"w-60",children:"This position was opened on the third-party protocol listed here, and not on Raydium directly. Individual position data was provided by the protocol."})})]})]})]}),!t.canClaim&&"alreadyClaimIt"===t.canClaimErrorType&&(0,n.jsx)(z.C,{className:"w-fit text-sm",cssColor:"#39d0d8",children:"Claimed"})]}),(0,n.jsx)("div",{className:"w-fit",children:(0,n.jsx)(N.U,{showDigitCount:s?8:12,className:"text-[#abc4ff80] text-sm",children:t.ammId})})]}),(0,n.jsxs)("div",{className:"text-[#abc4ff80] text-sm",children:[(0,O.xn)(t.openTime)," - ",(0,O.xn)(t.endTime)]})]}),(0,n.jsxs)(P.Z,{className:"ml-auto mobile:ml-0 items-end mobile:items-start",children:[(0,n.jsxs)(R.Z,{className:"items-center gap-1",children:[(0,n.jsxs)(E.Z,{panelClassName:"bg-[#3b4146]",arrowClassName:"bg-[#3b4146]",children:[(0,n.jsx)(T.Z,{size:"sm",heroIconName:"question-mark-circle",className:(0,q.m)("mx-1 cursor-help text-[#abc4ff80]")}),(0,n.jsx)(E.Z.Panel,{children:(0,n.jsx)("p",{className:"w-60",children:"Your LP token balance at the time of the snapshot"})})]}),(0,n.jsx)("div",{className:"font-medium mobile:-order-1 text-base mobile:text-sm text-[#abc4ff80]",children:"Snapshot LP token balance"})]}),(0,n.jsxs)("div",{className:"font-medium mobile:text-sm text-[#abc4ff]",children:[(0,_.B)(t.snapshotLpAmount)," LP"]})]})]}),(0,n.jsxs)("div",{className:"w-full mx-auto",children:[(0,n.jsx)(k.Z,{className:"grid-cols-[repeat(auto-fit,minmax(min(400px,100%),1fr))] gap-10 ".concat(t.canClaim||"alreadyClaimIt"!==t.canClaimErrorType?"":"opacity-50"),children:t.tokenInfo.map((e,l,a)=>{var s,o,i,r,c,m,d,u,f,h,x;return e?(0,n.jsxs)(y.Z,{className:"p-6 mobile:py-4 mobile:px-2 rounded-2xl bg-cyberpunk-card-bg shadow-cyberpunk-card",size:"lg",children:[(0,n.jsxs)(R.Z,{className:"gap-6  mb-8",children:[(0,n.jsx)("div",{className:"text-lg mobile:text-sm text-[#fff] font-medium",children:0===l?"BASE":1===l?"QUOTE":"COMPENSATION"}),(0,n.jsxs)(R.Z,{className:"items-center gap-2",children:[(0,n.jsx)(C.Z,{token:e.token,size:"md"}),(0,n.jsx)("div",{className:"text-[#abc4ff] font-medium min-w-[2em]",children:null!==(c=e.token.symbol)&&void 0!==c?c:"--"})]})]}),(d=0===l?{label1:"Per LP loss",amount1:e.perLpLoss,tooltip1:"The amount of base tokens lost per LP token",label2:"Snapshot LP",amount2:t.snapshotLpAmount,tooltip2:"Your LP token balance at the time of the snapshot",symbol2:"LP",label3:"Total base",tooltip3:"The total base token amount lost. Total = (Per LP loss) * (Snapshot LP)",amount3:e.ownerAllLossAmount,label4:"Claimable (".concat((0,M.Z)((0,v.hi)(e.debtAmount,e.ownerAllLossAmount),{fixed:0}),")"),amount4:e.debtAmount}:1===l?{label1:"Per LP loss",amount1:e.perLpLoss,tooltip1:"The amount of quote tokens lost per LP token",label2:"Snapshot LP",amount2:t.snapshotLpAmount,symbol2:"LP",tooltip2:"Your LP token balance at the time of the snapshot",label3:"Total quote",tooltip3:"The total quote token amount lost. Total = (Per LP loss) * (Snapshot LP)",amount3:e.ownerAllLossAmount,label4:"Claimable (".concat((0,M.Z)((0,v.hi)(e.debtAmount,e.ownerAllLossAmount),{fixed:0}),")"),amount4:e.debtAmount}:{label1:"Remaining base",amount1:a[0]?(0,p.n)(a[0].token,(0,v.kg)((0,v.h9)(a[0].ownerAllLossAmount,a[0].debtAmount),0),{alreadyDecimaled:!0}):void 0,tooltip1:"This represents the remaining loss not claimable in original pool assets. Remaining = Total - Claimable",label2:"Remaining quote",amount2:a[1]?(0,p.n)(a[1].token,(0,v.kg)((0,v.h9)(a[1].ownerAllLossAmount,a[1].debtAmount),0),{alreadyDecimaled:!0}):void 0,tooltip2:"This represents the remaining loss not claimable in original pool assets. Remaining = Total - Claimable",label3:"Total value in ".concat(null!==(m=e.ownerAllLossAmount.token.symbol)&&void 0!==m?m:"--"),amount3:e.ownerAllLossAmount,tooltip3:"This is the value (at the time of the exploit) of the remaining 10% of lost assets denominated in ".concat(e.debtAmount.token.symbol," (at a 30-day TWAP price)."),label4:"Compensation",amount4:e.debtAmount,tooltip4:"This is the claimable amount of RAY as compensation and is equal to (Total value in RAY)*(1.2). This equates to 20% additional RAY as compensation."},(0,n.jsxs)(P.Z,{children:[(0,n.jsx)(Y,{className:"pb-2",name:d.label1,tooltip:d.tooltip1,renderFormItem:(0,n.jsxs)(R.Z,{children:[(0,n.jsx)("div",{className:"text-[#abc4ff80] min-w-[2em] mr-2",children:(0,_.B)(d.amount1)}),(0,n.jsx)("div",{className:"text-[#abc4ff] min-w-[3em]",children:null!==(s=d.symbol1)&&void 0!==s?s:null===(u=d.amount1)||void 0===u?void 0:u.token.symbol})]})}),(0,n.jsx)(Y,{className:"py-2 border-b border-[#abc4ff80]",name:d.label2,tooltip:d.tooltip2,renderFormItem:(0,n.jsxs)(R.Z,{children:[(0,n.jsx)("div",{className:"text-[#abc4ff80] min-w-[2em] mr-2",children:(0,_.B)(d.amount2)}),(0,n.jsx)("div",{className:"text-[#abc4ff] min-w-[3em]",children:null!==(o=d.symbol2)&&void 0!==o?o:null===(f=d.amount2)||void 0===f?void 0:f.token.symbol})]})}),(0,n.jsx)(Y,{className:"py-2 border-b border-[#abc4ff80] mb-1",name:d.label3,tooltip:d.tooltip3,renderFormItem:(0,n.jsxs)(R.Z,{children:[(0,n.jsx)("div",{className:"text-[#abc4ff80] min-w-[2em] mr-2",children:(0,_.B)(d.amount3)}),(0,n.jsx)("div",{className:"text-[#abc4ff] min-w-[3em]",children:null!==(i=d.symbol3)&&void 0!==i?i:null===(h=d.amount3)||void 0===h?void 0:h.token.symbol})]})}),(0,n.jsx)(Y,{className:"pt-2 border-t border-[#abc4ff80]",name:d.label4,tooltip:d.tooltip4,labelClassName:"text-[#fff] font-medium",tooltipClassName:"text-[#fff] font-medium",renderFormItem:(0,n.jsxs)(R.Z,{children:[(0,n.jsx)("div",{className:"text-[#fff] font-medium min-w-[2em] mr-2",children:(0,_.B)(d.amount4)}),(0,n.jsx)("div",{className:"text-white font-medium min-w-[3em]",children:null!==(r=d.symbol4)&&void 0!==r?r:null===(x=d.amount4)||void 0===x?void 0:x.token.symbol})]})})]}))]},l):null})}),(0,n.jsx)("div",{className:"mx-auto mt-10 w-[calc((100%-2*40px)/3)] mobile:w-full",children:(0,n.jsx)(Z.Z,{size:"lg",className:"w-full frosted-glass-teal",isLoading:t.canClaim&&l,validators:[{should:t.canClaim,fallbackProps:{children:"alreadyClaimIt"===t.canClaimErrorType?"Claimed":"outOfOperationalTime"===t.canClaimErrorType?"Claims currently closed":t.canClaimErrorType?(0,D.wR)(t.canClaimErrorType):"Unknown Error"}}],onClick:()=>u({poolInfo:t}),children:"Claim"})})]})]})}function Y(e){let{name:t,className:l,tooltip:a,renderFormItem:s,labelClassName:o,tooltipClassName:i}=e;return(0,n.jsxs)(k.Z,{className:(0,q.m)("grid-cols-[1fr,1fr] gap-8",l),children:[(0,n.jsxs)(R.Z,{className:"items-center",children:[(0,n.jsx)("div",{className:(0,q.m)("text-base mobile:text-sm text-[#abc4ff]",o),children:t}),a&&(0,n.jsxs)(E.Z,{panelClassName:"bg-[#3b4146]",arrowClassName:"bg-[#3b4146]",children:[(0,n.jsx)(T.Z,{size:"sm",heroIconName:"question-mark-circle",className:(0,q.m)("mx-1 cursor-help text-[#abc4ff]",i)}),(0,n.jsx)(E.Z.Panel,{children:(0,n.jsx)("p",{className:"w-60",children:a})})]})]}),(0,n.jsx)("div",{className:"justify-self-end mobile:text-sm",children:s})]})}}},function(e){e.O(0,[4740,2885,2820,9774,2888,179],function(){return e(e.s=97627)}),_N_E=e.O()}]);