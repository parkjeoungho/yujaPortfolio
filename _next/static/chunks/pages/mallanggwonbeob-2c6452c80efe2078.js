(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[418],{5746:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mallanggwonbeob",function(){return i(781)}])},781:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return M}});var n=i(5893),l=i(6670),t=i(8949),a=i(7294),c=i(7620);function r(){let e=(0,a.useRef)(null),s=()=>{e&&e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})};return{ref:e,onMoveToSection:s}}var o=i(1722),d=i(6066),m={src:"/yujaPortfolio/_next/static/media/play.c0d07cab.svg",height:34,width:34,blurWidth:0,blurHeight:0},h={src:"/yujaPortfolio/_next/static/media/pause.6d6cc7ee.svg",height:34,width:34,blurWidth:0,blurHeight:0},u=i(4184),x=i.n(u),j=i(34);let p=(0,l.Pi)(e=>{let s=(0,a.useRef)(null),[i,l]=(0,a.useState)(!0),t=e=>{if(s&&s.current){if(e){s.current.slickPause(),l(!1);return}s.current.slickPlay(),l(!0)}},c={className:"main-slider",centerMode:!j.n.isSmallMobile,centerPadding:"0px",infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,speed:600,dots:!0,cssEase:"ease-in-out",arrows:!1,appendDots:e=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("button",{type:"button",className:x()("slide-controller",{play:i}),onClick:()=>t(i),children:[(0,n.jsx)("img",{src:h.src,alt:"정지"}),(0,n.jsx)("img",{src:m.src,alt:"재생"})]}),(0,n.jsxs)("ul",{children:[" ",e," "]})]})};return(0,n.jsxs)("div",{className:"main-slider-container link",children:[(0,n.jsx)("div",{className:"slider-wrap",children:(0,n.jsx)(d.Z,{ref:s,...c,children:e.model.featureItems.map((e,s)=>(0,n.jsx)("div",{className:"slide-list",children:(0,n.jsx)("div",{className:"slide-list-image ",children:(0,n.jsx)("img",{src:e.featureImage,alt:"main-item"})})},"main-slider-list-".concat(s)))})}),(0,n.jsx)("div",{className:"gradient"}),(0,n.jsx)(v,{addClassName:"main-slide-arrow main-slide-next link",onClick:()=>{s&&s.current&&s.current.slickNext()}}),(0,n.jsx)(N,{addClassName:"main-slide-arrow main-slide-prev link",onClick:()=>{s&&s.current&&s.current.slickPrev()}})]})});function N(e){var s;return(0,n.jsx)("div",{className:"".concat(null!==(s=e.addClassName)&&void 0!==s?s:""),onClick:()=>e.onClick(),children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/main/main-prev.svg"),alt:"prev"})})}function v(e){var s;return(0,n.jsx)("div",{className:"".concat(null!==(s=e.addClassName)&&void 0!==s?s:""),onClick:()=>e.onClick(),children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/main/main-next.svg"),alt:"next"})})}var k=i(6486);let f=(0,l.Pi)(e=>{let s=(0,a.useRef)(null);(0,a.useEffect)(()=>{let i=()=>{(0,t.z)(()=>{s&&s.current&&(e.model.detailSize=s.current.offsetHeight)})};return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)});let i={className:"card-slider",centerMode:!1,centerPadding:"10px",infinite:!0,slidesToShow:e.model.sliderViewCount,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,speed:600,dots:!1,cssEase:"ease-in-out",nextArrow:(0,n.jsx)(w,{addClassName:"card-slide-arrow card-slide-next"}),prevArrow:(0,n.jsx)(g,{addClassName:"card-slide-arrow card-slide-prev"})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{ref:s,className:"card-container",children:[!e.model.isSlide&&(0,n.jsx)("div",{className:x()("not-slide-card",{wrap:e.model.isTwoLine}),children:e.model.featureItems.map((s,i)=>(0,n.jsx)("div",{className:"link",style:{width:"".concat(e.model.percent,"%"),padding:"3px 5px"},onClick:()=>e.onDetail(null,null),children:(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:s.featureImage,alt:"image"})})},"naver-card-new-".concat(i)))}),e.model.isSlide&&(0,n.jsx)("div",{className:"card-slide-box link",children:(0,n.jsx)("div",{children:(0,n.jsx)(d.Z,{...i,children:e.model.featureItems.map((s,i)=>(0,n.jsx)("div",{className:"slide-card",onClick:e.model.isHasDetail?()=>e.onDetail(s.featureId,e.model.sectionId):()=>e.onDetail(null,null),children:(0,n.jsxs)("div",{className:x()({"not-select":e.currentDetailSection===e.model.sectionId&&e.currentDetailItem!==s.featureId}),children:[(0,n.jsx)("img",{src:s.featureImage,alt:"slide-card-image"}),(0,n.jsx)("div",{})]})},"slide-".concat(e.model.sectionTitle,"-").concat(i)))})})})]}),(0,n.jsx)("div",{className:x()("card-detail-box",{on:e.currentDetailSection===e.model.sectionId,isWrap:e.model.isDetailTowLine}),style:{height:e.currentDetailSection===e.model.sectionId?e.model.getDetailSize(e.currentDetailItem):0},children:!(0,k.isNil)(e.model.sectionId)&&(0,n.jsxs)(n.Fragment,{children:[e.model.currentDetailList(e.currentDetailItem).map((s,i)=>(0,n.jsx)("div",{style:{width:"".concat(e.model.percent,"%"),height:e.model.isDetailTowLine?"".concat(e.model.detailSize,"px"):"100%",marginBottom:e.model.isDetailTowLine?"10px !important":0},children:(0,n.jsx)("div",{className:"link",children:(0,n.jsx)("img",{src:s,alt:"detail-item"})})},"feature-".concat(e.currentDetailSection,"-").concat(i))),!(0,k.isNil)(e.currentDetailSection)&&(0,k.isEmpty)(e.model.currentDetailList(e.currentDetailItem))&&(0,n.jsx)("p",{className:"empty link",children:"세부 이미지가 없습니다"})]})})]})});function g(e){let{className:s,style:i,onClick:l,addClassName:t}=e;return(0,n.jsx)("div",{className:"".concat(s," ").concat(null!=t?t:""),style:{...i},onClick:l,children:(0,n.jsx)("div",{className:"inner-arrow-box",children:(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/main/main-prev.svg"),alt:"prev"})})})})}function w(e){let{className:s,style:i,onClick:l,addClassName:t}=e;return(0,n.jsx)("div",{className:"".concat(s," ").concat(null!=t?t:""),style:{...i},onClick:l,children:(0,n.jsx)("div",{className:"inner-arrow-box",children:(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/main/main-next.svg"),alt:"next"})})})})}let D=(0,l.Pi)(e=>{var s;return(0,n.jsxs)("div",{className:"main-content section-content ".concat(null!==(s=e.className)&&void 0!==s?s:""),children:[(0,n.jsxs)("div",{className:"section-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"link",children:e.title}),e.hasDetail&&(0,n.jsx)("p",{className:"detail-info link",children:"클릭하면 세부 내용이 보입니다"})]}),(0,n.jsx)("p",{className:"link",children:e.contribution})]}),(0,n.jsx)("div",{className:"content-wrap",children:e.children})]})}),I=(0,l.Pi)(e=>((0,a.useEffect)(()=>{e.model.isInit||(0,t.z)(()=>{e.model.isInit=!0,setTimeout(()=>{(0,t.z)(()=>e.model.isLoading=!0),setTimeout(()=>{(0,t.z)(()=>{e.model.isInit=!1,e.model.isOut=!0})},1500)},750)}),j.n.isIntro&&setTimeout(()=>e.onOff(),3400)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:x()("bg-white intro-bg",{out:e.model.isOut})}),(0,n.jsxs)("div",{className:x()("intro-container",{in:e.model.isInit,on:e.model.isLoading,out:e.model.isOut}),style:{height:j.n.vh+"px"},children:[(0,n.jsxs)("div",{className:"loading-text-box",children:[(0,n.jsxs)("div",{className:"bg-box",children:[(0,n.jsx)("span",{className:"link",children:"L"}),(0,n.jsx)("span",{className:"link",children:"O"}),(0,n.jsx)("span",{className:"link",children:"A"}),(0,n.jsx)("span",{className:"link",children:"D"}),(0,n.jsx)("span",{className:"link",children:"I"}),(0,n.jsx)("span",{className:"link",children:"N"}),(0,n.jsx)("span",{className:"link",children:"G"})]}),(0,n.jsxs)("div",{className:"top-box",children:[(0,n.jsx)("span",{className:"link",children:"L"}),(0,n.jsx)("span",{className:"link",children:"O"}),(0,n.jsx)("span",{className:"link",children:"A"}),(0,n.jsx)("span",{className:"link",children:"D"}),(0,n.jsx)("span",{className:"link",children:"I"}),(0,n.jsx)("span",{className:"link",children:"N"}),(0,n.jsx)("span",{className:"link",children:"G"})]})]}),(0,n.jsxs)("div",{className:"loading-num-box",children:[(0,n.jsxs)("div",{className:"num-container",children:[(0,n.jsxs)("div",{className:"num-box first",children:[(0,n.jsx)("p",{className:"link",children:"0"}),(0,n.jsx)("p",{className:"link",children:"1"}),(0,n.jsx)("p",{className:"link",children:"2"}),(0,n.jsx)("p",{className:"link",children:"3"}),(0,n.jsx)("p",{className:"link",children:"4"}),(0,n.jsx)("p",{className:"link",children:"5"}),(0,n.jsx)("p",{className:"link",children:"6"}),(0,n.jsx)("p",{className:"link",children:"8"}),(0,n.jsx)("p",{className:"link",children:"9"})]}),(0,n.jsxs)("div",{className:"num-box second",children:[(0,n.jsx)("p",{className:"link",children:"0"}),(0,n.jsx)("p",{className:"link",children:"1"}),(0,n.jsx)("p",{className:"link",children:"2"}),(0,n.jsx)("p",{className:"link",children:"3"}),(0,n.jsx)("p",{className:"link",children:"4"}),(0,n.jsx)("p",{className:"link",children:"5"}),(0,n.jsx)("p",{className:"link",children:"6"}),(0,n.jsx)("p",{className:"link",children:"8"}),(0,n.jsx)("p",{className:"link",children:"9"})]})]}),(0,n.jsx)("p",{className:"last link",children:"%"})]})]})]})));class b{constructor(){this.isInit=!1,this.isLoading=!1,this.isOut=!1,(0,t.ky)(this)}}let S=(0,l.Pi)(e=>((0,a.useEffect)(()=>{e.model.isInit&&setTimeout(()=>{(0,t.z)(()=>e.model.isInitEnd=!0)},1500)},[e.model,e.model.isInit]),(0,n.jsxs)("div",{className:x()("main",{on:e.model.isInit}),children:[(0,n.jsxs)("div",{className:x()("inner-content",{on:e.model.isInit,end:e.model.isInitEnd}),children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("div",{className:"inner",children:(0,n.jsx)("span",{className:"link",children:"Hello, I am"})})}),(0,n.jsx)("div",{className:"mid",children:(0,n.jsx)("div",{className:"inner",children:(0,n.jsx)("span",{className:"link",children:"Designer"})})}),(0,n.jsx)("div",{className:"bottom",children:(0,n.jsx)("div",{className:"inner",children:(0,n.jsx)("span",{className:"link",children:"Shin yujin"})})}),(0,n.jsx)("div",{className:"info-text-box",children:(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"link",children:"안녕하세요, 디자이너 신유진의 포트폴리오입니다."})})})]}),(0,n.jsxs)("div",{className:"scroll",children:[(0,n.jsx)("div",{className:"scroll-image link",children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/scroll.svg"),alt:"scroll"})}),(0,n.jsx)("p",{className:"link",children:"아래로 스크롤"})]})]})));class T{onInit(){this.isInit=!this.isInit}constructor(){this.isInit=!1,this.isInitEnd=!1,(0,t.ky)(this)}}let y=(0,l.Pi)(e=>{let[s,i]=(0,a.useState)(!1),[l,t]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(e.isShow){i(!0),setTimeout(()=>t(!0),20);return}t(!1),setTimeout(()=>i(!1),500)},[e.isShow]),(0,n.jsxs)("div",{className:x()("modal",{block:s,"is-open":l}),children:[(0,n.jsx)("div",{className:"black",onClick:()=>e.onOff()}),(0,n.jsx)("div",{className:"modal-content",children:(0,n.jsxs)("div",{className:"contact-image",children:[(0,n.jsx)("button",{type:"button",onClick:()=>e.onOff(),children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/x.png"),alt:"close"})}),(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/yujin_pop_up.png"),alt:"contact"})]})})]})}),C=(0,l.Pi)(()=>{let e=(0,a.useRef)(null),s=(0,a.useRef)(null),i=(0,a.useState)(()=>new L)[0];(0,a.useEffect)(()=>{let n=()=>{if((0,k.isNil)(s)||(0,k.isNil)(s.current)||(0,k.isNil)(e)||(0,k.isNil)(e.current))return;let n=window.scrollY;window.scrollY,window.innerHeight;let l=s.current.offsetTop+s.current.scrollHeight,a=e.current.offsetTop+e.current.scrollHeight/1.15;if(j.n.isIntro||(n>=a&&i.mainModel.isInit&&(0,t.z)(()=>i.mainModel.isInit=!1),a>=n&&!i.mainModel.isInit&&(0,t.z)(()=>i.mainModel.isInit=!0)),n>l){(0,t.z)(()=>i.isShowTopButton=!0);return}(0,t.z)(()=>i.isShowTopButton=!1)};return n(),window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}},[i]);let l={[c.L0.naver]:r(),[c.L0.instagram]:r(),[c.L0.shoppingLive]:r(),[c.L0.etc]:r()};return i.init(),(0,n.jsxs)(n.Fragment,{children:[j.n.isIntro&&!j.n.isSmallMobile&&(0,n.jsx)(I,{model:i.introModel,onOff:(0,t.aD)(()=>{i.mainModel.isInit=!0,setTimeout(()=>{j.n.onIntroOff()},500)})}),(0,n.jsx)("div",{ref:e,children:(0,n.jsx)(S,{model:i.mainModel})}),(0,n.jsxs)("div",{ref:s,className:"select-section",children:[(0,n.jsx)("h2",{className:"link",children:"감상을 원하는 아이콘을 선택하세요."}),(0,n.jsx)("div",{className:"select-list-box",children:o.ku.contentSet.map((e,s)=>(0,n.jsxs)("div",{className:"select-list link",onClick:()=>l[e.featureType].onMoveToSection(),children:[(0,n.jsx)("div",{className:"select-list-image",children:(0,n.jsx)("img",{src:e.featureIcon,alt:e.featureName})}),(0,n.jsx)("p",{children:e.featureName})]},"select-menu-".concat(s)))})]}),(0,n.jsx)("div",{className:"section-wrap",children:o.ku.contentSet.map((e,s)=>(0,n.jsx)("div",{ref:l[e.featureType].ref,className:"section",children:(0,n.jsx)("div",{className:"inner-container",children:e.items.map((s,l)=>e.featureType===c.L0.naver?(0,n.jsx)("div",{style:{paddingTop:1===l&&(j.n.isMid||j.n.isMobile||j.n.isSmallMobile)?"70px":0},children:(0,n.jsxs)(D,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:[0===l&&(0,n.jsx)(p,{model:s}),0!==l&&(0,n.jsx)(f,{model:s,onDetail:(e,s)=>i.setCurrentDetailSection(e,s),currentDetailSection:i.currentDetailSection,currentDetailItem:i.currentDetailItem})]})},"naver-".concat(l)):e.featureType===c.L0.instagram?(0,n.jsx)(D,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:(0,n.jsx)(f,{model:s,onDetail:(e,s)=>i.setCurrentDetailSection(e,s),currentDetailSection:i.currentDetailSection,currentDetailItem:i.currentDetailItem})},"instagram-".concat(l)):e.featureType===c.L0.shoppingLive?(0,n.jsx)(D,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:(0,n.jsx)(f,{model:s,onDetail:(e,s)=>i.setCurrentDetailSection(e,s),currentDetailSection:i.currentDetailSection,currentDetailItem:i.currentDetailItem})},"shoppingLive-".concat(l)):e.featureType===c.L0.etc?(0,n.jsx)(D,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:(0,n.jsx)(f,{model:s,onDetail:(e,s)=>i.setCurrentDetailSection(e,s),currentDetailSection:i.currentDetailSection,currentDetailItem:i.currentDetailItem})},"shoppingLive-".concat(l)):void 0)})},"content-".concat(s)))}),(0,n.jsxs)("div",{className:"footer section",children:[(0,n.jsx)("div",{className:"footer-header",children:(0,n.jsx)("p",{className:"link",children:"ABOUT ME"})}),(0,n.jsxs)("div",{className:"footer-content",children:[(0,n.jsxs)("p",{className:"link",children:["안녕하세요. 원만한 소통&공감 능력을 갖춘 ",(0,n.jsx)("br",{}),"섬세한 ",(0,n.jsx)("b",{children:"디자이너 신유진"}),"입니다."]}),(0,n.jsxs)("p",{className:"link",children:["SNS 콘텐츠, 이벤트 프로모션, 상세 페이지 디자인 등을",(0,n.jsx)("br",{}),"전문으로 하며 디자인하는 것을 좋아하고"]}),(0,n.jsxs)("p",{className:"link",children:["머릿 속에서 상상하는 것을 시각적으로 표현하여",(0,n.jsx)("br",{}),"디자인의 가치를 제공합니다."]})]})]}),(0,n.jsx)("button",{type:"button",className:x()("top-btn",{on:i.isShowTopButton}),onClick:()=>{(0,k.isNil)(s)||(0,k.isNil)(s.current)||s.current.scrollIntoView({behavior:"smooth",block:"center"})},children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/top_arrow.png"),alt:"top-btn"})}),(0,n.jsxs)("button",{type:"button",className:x()("contact-btn",{on:i.isShowTopButton}),onClick:(0,t.aD)(()=>i.isModalShow=!0),children:[(0,n.jsx)("p",{children:"Contact"}),(0,n.jsx)("div",{className:"arrow-image",children:(0,n.jsx)("img",{src:"".concat(o.O4,"/assets/images/arrow.svg"),alt:"arrow"})})]}),(0,n.jsx)(y,{isShow:i.isModalShow,onOff:(0,t.aD)(()=>i.isModalShow=!1)})]})});class L{init(){j.n.isIntro&&j.n.isSmallMobile&&(0,t.z)(()=>{j.n.isIntro=!1,this.mainModel.isInit=!0})}setCurrentDetailSection(e,s){if(this.currentDetailSection===s&&this.currentDetailItem===e){this.currentDetailSection=null,this.currentDetailItem=null;return}this.currentDetailSection=s,this.currentDetailItem=e}constructor(){this.isInit=!1,this.isShowTopButton=!1,this.currentDetailSection=null,this.currentDetailItem=null,this.isIntro=!0,this.isModalShow=!1,this.introModel=new b,this.mainModel=new T,(0,t.ky)(this)}}var M=C}},function(e){e.O(0,[66,774,888,179],function(){return e(e.s=5746)}),_N_E=e.O()}]);