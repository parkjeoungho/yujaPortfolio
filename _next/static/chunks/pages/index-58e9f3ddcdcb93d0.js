(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2941)}])},2941:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return A}});var i,a,n=t(5893),c=t(6670),o=t(8949),r=t(7294),l=t(6486),m=t(34);(i=a||(a={})).naver="NAVER",i.instagram="INSTAGRAM",i.shoppingLive="SHOPPING_LIVE",i.etc="ETC";class u{constructor(e){this.featureType=e.featureType,this.featureName=e.featureName,this.featureIcon=e.featureIcon,this.items=e.items,(0,o.ky)(this)}}class d{get percent(){return m.n.isMid?100/this.midViewCount:m.n.isMobile?100/this.mobileViewCount:m.n.isSmallMobile?100/this.smallMobileViewCount:100/this.viewCount}get sliderViewCount(){return m.n.isMid?this.midViewCount:m.n.isMobile?this.mobileViewCount:m.n.isSmallMobile?this.smallMobileViewCount:this.viewCount}getDetailSize(e){return(0,l.isEmpty)(this.currentDetailList(e))||this.sliderViewCount>=this.currentDetailList(e).length?((0,o.z)(()=>this.isDetailTowLine=!1),this.detailSize):((0,o.z)(()=>this.isDetailTowLine=!0),this.currentDetailList(e).length>4&&2===this.sliderViewCount)?3*this.detailSize+20:2*this.detailSize+20}currentDetailList(e){if((0,l.isNil)(e))return[];let s=this.featureItems.find(s=>s.featureId===e);return(0,l.isNil)(s)?[]:s.featureDetailImages}constructor(e){var s,t;this.detailSize=0,this.isDetailTowLine=!1,this.isSlide=e.isSlide,this.isHasDetail=e.isHasDetail,this.sectionId=e.sectionId,this.sectionTitle=e.sectionTitle,this.contribution=e.contribution,this.featureItems=e.featureItems,this.isTwoLine=null!==(s=e.isTwoLine)&&void 0!==s?s:null,this.viewCount=e.viewCount,this.midViewCount=e.midViewCount,this.mobileViewCount=e.mobileViewCount,this.smallMobileViewCount=e.smallMobileViewCount,this.size=e.size,this.currentItem=null!==(t=e.currentItem)&&void 0!==t?t:null,(0,o.ky)(this)}}class g{constructor(e){var s;this.featureId=e.featureId,this.featureImage=e.featureImage,this.featureDetailImages=null!==(s=e.featureDetailImages)&&void 0!==s?s:[],(0,o.ky)(this)}}function h(){let e=(0,r.useRef)(null),s=()=>{e&&e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})};return{ref:e,onMoveToSection:s}}let p="https://parkjeoungho.github.io/yujaPortfolio/",f=new u({featureType:a.naver,featureName:"스마트스토어",featureIcon:"".concat(p,"/assets/images/index_icon/naver.png"),items:[new d({isSlide:!0,isHasDetail:!1,sectionId:"naver-pc",sectionTitle:"네이버스토어 농협식품 배너 PC",contribution:"디자인 제작 기여도 100%",viewCount:1,midViewCount:1,mobileViewCount:1,smallMobileViewCount:1,size:383,featureItems:[new g({featureId:"naver-juicy",featureImage:"".concat(p,"/assets/images/main/juicy_1200x490.png")}),new g({featureId:"naver-coolness",featureImage:"".concat(p,"/assets/images/main/coolness_1200x490.png")}),new g({featureId:"naver-diet",featureImage:"".concat(p,"/assets/images/main/diet_1200x490.png")}),new g({featureId:"naver-summer",featureImage:"".concat(p,"/assets/images/main/summer_1200x490.png")}),new g({featureId:"naver-choose",featureImage:"".concat(p,"/assets/images/main/choose_1200x490.png")}),new g({featureId:"naver-kimchi",featureImage:"".concat(p,"/assets/images/main/kimchi_1200x490.png")}),new g({featureId:"naver-notice",featureImage:"".concat(p,"/assets/images/main/notice_1200x490.jpg")}),new g({featureId:"naver-dumpling",featureImage:"".concat(p,"/assets/images/main/dumpling_1200x490.png")})]}),new d({isSlide:!0,isHasDetail:!1,isTwoLine:!1,sectionId:"naver-mobile",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:260,sectionTitle:"네이버스토어 농협식품 배너 모바일",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"naver-mobile-dumpling",featureImage:"".concat(p,"/assets/images/section_02/dumpling.png")}),new g({featureId:"naver-mobile-choose",featureImage:"".concat(p,"/assets/images/section_02/choose.png")}),new g({featureId:"naver-mobile-notice",featureImage:"".concat(p,"/assets/images/section_02/notice.png")}),new g({featureId:"naver-mobile-deliciousdiet",featureImage:"".concat(p,"/assets/images/section_02/deliciousdiet.png")}),new g({featureId:"naver-mobile-HomeCance",featureImage:"".concat(p,"/assets/images/section_02/HomeCance.png")}),new g({featureId:"naver-mobile-juicy",featureImage:"".concat(p,"/assets/images/section_02/juicy.png")}),new g({featureId:"naver-mobile-diet",featureImage:"".concat(p,"/assets/images/section_02/diet.png")}),new g({featureId:"naver-mobile-NonghyupJuice",featureImage:"".concat(p,"/assets/images/section_02/NonghyupJuice.png")}),new g({featureId:"naver-mobile-Holidays",featureImage:"".concat(p,"/assets/images/section_02/Holidays.jpg")}),new g({featureId:"naver-mobile-summer",featureImage:"".concat(p,"/assets/images/section_02/summer.png")})]})]}),I=new u({featureType:a.instagram,featureName:"인스타그램",featureIcon:"".concat(p,"/assets/images/index_icon/instagram.png"),items:[new d({isSlide:!0,isHasDetail:!0,sectionId:"instagram-parenting",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:327,sectionTitle:"보건복지부 육아 인스타그램 카드뉴스",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"instagram-integrated",featureImage:"".concat(p,"/assets/images/section_03/01/h/integrated_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/01/h/integrated_02.png"),"".concat(p,"/assets/images/section_03/01/h/integrated_03.png"),"".concat(p,"/assets/images/section_03/01/h/integrated_04.png"),"".concat(p,"/assets/images/section_03/01/h/integrated_05.png")]}),new g({featureId:"instagram-Supporters",featureImage:"".concat(p,"/assets/images/section_03/02/h/Supporters_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/02/h/Supporters_02.png"),"".concat(p,"/assets/images/section_03/02/h/Supporters_03.png")]}),new g({featureId:"instagram-submit",featureImage:"".concat(p,"/assets/images/section_03/03/h/submit_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/03/h/submit_02.png"),"".concat(p,"/assets/images/section_03/03/h/submit_03.png"),"".concat(p,"/assets/images/section_03/03/h/submit_04.png")]}),new g({featureId:"instagram-payment",featureImage:"".concat(p,"/assets/images/section_03/04/h/payment_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/04/h/payment_02.png"),"".concat(p,"/assets/images/section_03/04/h/payment_03.png"),"".concat(p,"/assets/images/section_03/04/h/payment_04.png"),"".concat(p,"/assets/images/section_03/04/h/payment_05.png")]}),new g({featureId:"instagram-cancellation",featureImage:"".concat(p,"/assets/images/section_03/05/h/cancellation_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/05/h/cancellation_02.png"),"".concat(p,"/assets/images/section_03/05/h/cancellation_03.png")]}),new g({featureId:"instagram-event",featureImage:"".concat(p,"/assets/images/section_03/06/h/event_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/06/h/event_02.png"),"".concat(p,"/assets/images/section_03/06/h/event_03.png")]}),new g({featureId:"instagram-map",featureImage:"".concat(p,"/assets/images/section_03/07/h/map_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/07/h/map_02.png"),"".concat(p,"/assets/images/section_03/07/h/map_03.png"),"".concat(p,"/assets/images/section_03/07/h/map_04.png"),"".concat(p,"/assets/images/section_03/07/h/map_05.png")]}),new g({featureId:"instagram-book",featureImage:"".concat(p,"/assets/images/section_03/08/h/book_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/08/h/book_02.png"),"".concat(p,"/assets/images/section_03/08/h/book_03.png"),"".concat(p,"/assets/images/section_03/08/h/book_04.png")]}),new g({featureId:"instagram-house",featureImage:"".concat(p,"/assets/images/section_03/09/h/house_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_03/09/h/house_02.png"),"".concat(p,"/assets/images/section_03/09/h/house_03.png")]})]}),new d({isSlide:!0,isHasDetail:!0,sectionId:"instagram-advertisement",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:327,sectionTitle:"다양한 광고 디자인",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"advertisement-konjac",featureImage:"".concat(p,"/assets/images/section_05/h/konjac_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_05/h/konjac_02.png"),"".concat(p,"/assets/images/section_05/h/konjac_03.png")]}),new g({featureId:"advertisement-refrigerator",featureImage:"".concat(p,"/assets/images/section_05/h/refrigerator_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_05/h/refrigerator_02.png"),"".concat(p,"/assets/images/section_05/h/refrigerator_03.png")]}),new g({featureId:"advertisement-Samgyetang",featureImage:"".concat(p,"/assets/images/section_05/h/Samgyetang_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_05/h/Samgyetang_02.png"),"".concat(p,"/assets/images/section_05/h/Samgyetang_03.png")]}),new g({featureId:"advertisement-foodweek",featureImage:"".concat(p,"/assets/images/section_05/h/foodweek.png")}),new g({featureId:"advertisement-coupon",featureImage:"".concat(p,"/assets/images/section_05/h/coupon.png")}),new g({featureId:"advertisement-happynewyear",featureImage:"".concat(p,"/assets/images/section_05/h/happynewyear.png")})]}),new d({isSlide:!0,isHasDetail:!0,sectionId:"instagram-pet",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:327,sectionTitle:"일룸 PET의 펫 관점형 리뷰 프로젝트",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"iloom-appointment",featureImage:"".concat(p,"/assets/images/section_04/h/appointment_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_04/h/appointment_02.png")]}),new g({featureId:"iloom-honey",featureImage:"".concat(p,"/assets/images/section_04/h/honey_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_04/h/honey_02.png"),"".concat(p,"/assets/images/section_04/h/honey_03.png")]}),new g({featureId:"iloom-keyword",featureImage:"".concat(p,"/assets/images/section_04/h/keyword_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_04/h/keyword_02.png")]}),new g({featureId:"iloom-secret",featureImage:"".concat(p,"/assets/images/section_04/h/secret_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_04/h/secret_02.png")]}),new g({featureId:"iloom-test",featureImage:"".concat(p,"/assets/images/section_04/h/test_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_04/h/test_02.png"),"".concat(p,"/assets/images/section_04/h/test_03.png"),"".concat(p,"/assets/images/section_04/h/test_04.png"),"".concat(p,"/assets/images/section_04/h/test_05.png"),"".concat(p,"/assets/images/section_04/h/test_06.png")]})]}),new d({isSlide:!0,isHasDetail:!1,sectionId:"instagram-Eco",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:327,sectionTitle:"친환경 브랜드의 청량함이 느껴지는 콘텐츠",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"eco-brandweek",featureImage:"".concat(p,"/assets/images/section_06/h/brandweek.png")}),new g({featureId:"eco-experiencegroup",featureImage:"".concat(p,"/assets/images/section_06/h/experiencegroup.png")}),new g({featureId:"eco-handwash",featureImage:"".concat(p,"/assets/images/section_06/h/handwash.png")}),new g({featureId:"eco-Herb",featureImage:"".concat(p,"/assets/images/section_06/h/Herb.png")}),new g({featureId:"eco-oclean",featureImage:"".concat(p,"/assets/images/section_06/h/oclean.png")}),new g({featureId:"eco-ocleanreview",featureImage:"".concat(p,"/assets/images/section_06/h/ocleanreview.png")}),new g({featureId:"eco-soap",featureImage:"".concat(p,"/assets/images/section_06/h/soap.png")}),new g({featureId:"eco-soki",featureImage:"".concat(p,"/assets/images/section_06/h/soki.png")}),new g({featureId:"eco-tissue",featureImage:"".concat(p,"/assets/images/section_06/h/tissue.png")})]}),new d({isSlide:!0,isHasDetail:!1,sectionId:"instagram-health",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:327,sectionTitle:"건강기능식품 광고 이미지",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"health-advertisement-01",featureImage:"".concat(p,"/assets/images/section_07/h/advertisement_01.png")}),new g({featureId:"health-advertisement-02",featureImage:"".concat(p,"/assets/images/section_07/h/advertisement_02.png")}),new g({featureId:"health-advertisement-03",featureImage:"".concat(p,"/assets/images/section_07/h/advertisement_03.png")}),new g({featureId:"health-advertisement-04",featureImage:"".concat(p,"/assets/images/section_07/h/advertisement_04.png")}),new g({featureId:"health-advertisement-05",featureImage:"".concat(p,"/assets/images/section_07/h/advertisement_05.png")}),new g({featureId:"health-advertisement-06",featureImage:"".concat(p,"/assets/images/section_07/h/advertisement_06.png")})]}),new d({isSlide:!0,isHasDetail:!1,sectionId:"instagram-fruit",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:327,sectionTitle:"당장 깨물어 먹고 싶은 귀여운 과일 프로젝트",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"fruit-dif",featureImage:"".concat(p,"/assets/images/section_08/h/dif.png")}),new g({featureId:"fruit-cherry",featureImage:"".concat(p,"/assets/images/section_08/h/cherry.png")}),new g({featureId:"fruit-peach",featureImage:"".concat(p,"/assets/images/section_08/h/peach.png")}),new g({featureId:"fruit-persimmon",featureImage:"".concat(p,"/assets/images/section_08/h/persimmon.png")}),new g({featureId:"fruit-watermelon",featureImage:"".concat(p,"/assets/images/section_08/h/watermelon.png")})]})]}),w=new u({featureType:a.shoppingLive,featureName:"쇼핑 라이브",featureIcon:"".concat(p,"/assets/images/index_icon/live.png"),items:[new d({isSlide:!0,isHasDetail:!0,sectionId:"live-Myeonsarang",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:555,sectionTitle:"국민 면요리 면사랑 쇼핑라이브 송출배너",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"live-sandybeach",featureImage:"".concat(p,"/assets/images/section_09/01/h/sandybeach_01.png"),featureDetailImages:["/".concat(p,"/assets/images/section_09/01/h/sandybeach_02.png"),"/".concat(p,"/assets/images/section_09/01/h/sandybeach_03.png"),"/".concat(p,"/assets/images/section_09/01/h/sandybeach_04.png"),"/".concat(p,"/assets/images/section_09/01/h/sandybeach_05.png")]}),new g({featureId:"live-brick",featureImage:"".concat(p,"/assets/images/section_09/02/h/brick_01.png"),featureDetailImages:["/".concat(p,"/assets/images/section_09/02/h/brick_02.png"),"/".concat(p,"/assets/images/section_09/02/h/brick_03.png")]}),new g({featureId:"live-rainy",featureImage:"".concat(p,"/assets/images/section_09/03/h/rainy_01.png"),featureDetailImages:["/".concat(p,"/assets/images/section_09/03/h/rainy_02.png"),"/".concat(p,"/assets/images/section_09/03/h/rainy_03.png"),"/".concat(p,"/assets/images/section_09/03/h/rainy_04.png")]}),new g({featureId:"live-px",featureImage:"".concat(p,"/assets/images/section_09/05/h/px_01.png"),featureDetailImages:["/".concat(p,"/assets/images/section_09/05/h/px_02.png"),"/".concat(p,"/assets/images/section_09/05/h/px_03.png"),"/".concat(p,"/assets/images/section_09/05/h/px_04.png")]}),new g({featureId:"live-quiz",featureImage:"".concat(p,"/assets/images/section_09/04/h/quiz_01.png"),featureDetailImages:["".concat(p,"/assets/images/section_09/04/h/quiz_02.png"),"".concat(p,"/assets/images/section_09/04/h/quiz_03.png")]})]})]}),_=new u({featureType:a.etc,featureName:"기타",featureIcon:"".concat(p,"/assets/images/index_icon/etc.png"),items:[new d({isSlide:!0,isHasDetail:!1,sectionId:"etc-advertisement",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:610,sectionTitle:"다양한 광고 포스터",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"etc-supporters",featureImage:"".concat(p,"/assets/images/section_10/h/supporters.png")}),new g({featureId:"etc-money",featureImage:"".concat(p,"/assets/images/section_10/h/money.png")}),new g({featureId:"etc-online",featureImage:"".concat(p,"/assets/images/section_10/h/online.png")}),new g({featureId:"etc-golden",featureImage:"".concat(p,"/assets/images/section_10/h/golden.png")}),new g({featureId:"etc-Sight",featureImage:"".concat(p,"/assets/images/section_10/h/Sight.png")}),new g({featureId:"etc-live",featureImage:"".concat(p,"/assets/images/section_10/h/live.png")})]}),new d({isSlide:!0,isHasDetail:!1,sectionId:"etc-global",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:610,sectionTitle:"글로벌 수입수철 뉴스를 포스터로",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"news-map",featureImage:"".concat(p,"/assets/images/section_11/h/map.png")}),new g({featureId:"news-lalaland",featureImage:"".concat(p,"/assets/images/section_11/h/lalaland.png")}),new g({featureId:"news-organic",featureImage:"".concat(p,"/assets/images/section_11/h/organic.png")}),new g({featureId:"news-foodpoisoning",featureImage:"".concat(p,"/assets/images/section_11/h/foodpoisoning.png")}),new g({featureId:"news-airplane",featureImage:"".concat(p,"/assets/images/section_11/h/airplane.png")}),new g({featureId:"news-application",featureImage:"".concat(p,"/assets/images/section_11/h/application.png")})]}),new d({isSlide:!0,isHasDetail:!1,sectionId:"etc-summer",viewCount:5,midViewCount:4,mobileViewCount:3,smallMobileViewCount:2,size:610,sectionTitle:"여름특집 광고 포스터",contribution:"디자인 제작 기여도 100%",featureItems:[new g({featureId:"summer-summer",featureImage:"".concat(p,"/assets/images/section_12/h/summer.png")}),new g({featureId:"summer-swimming",featureImage:"".concat(p,"/assets/images/section_12/h/swimming.png")}),new g({featureId:"summer-11stsummer",featureImage:"".concat(p,"/assets/images/section_12/h/11stsummer.png")}),new g({featureId:"summer-daisosummer",featureImage:"".concat(p,"/assets/images/section_12/h/daisosummer.png")}),new g({featureId:"summer-ocean",featureImage:"".concat(p,"/assets/images/section_12/h/ocean.png")})]})]}),x=new class{constructor(e){this.contentSet=e.contentSet,(0,o.ky)(this)}}({contentSet:[f,I,w,_]});var v=t(6066),j={src:"/yujaPortfolio/_next/static/media/play.c0d07cab.svg",height:34,width:34,blurWidth:0,blurHeight:0},N={src:"/yujaPortfolio/_next/static/media/pause.6d6cc7ee.svg",height:34,width:34,blurWidth:0,blurHeight:0},b=t(4184),D=t.n(b);let k=(0,c.Pi)(e=>{let s=(0,r.useRef)(null),[t,i]=(0,r.useState)(!0),a=e=>{if(s&&s.current){if(e){s.current.slickPause(),i(!1);return}s.current.slickPlay(),i(!0)}},c={className:"main-slider",centerMode:!m.n.isSmallMobile,centerPadding:"0px",infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,speed:600,dots:!0,cssEase:"ease-in-out",arrows:!1,appendDots:e=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("button",{type:"button",className:D()("slide-controller",{play:t}),onClick:()=>a(t),children:[(0,n.jsx)("img",{src:N.src,alt:"정지"}),(0,n.jsx)("img",{src:j.src,alt:"재생"})]}),(0,n.jsxs)("ul",{children:[" ",e," "]})]})};return(0,n.jsxs)("div",{className:"main-slider-container link",children:[(0,n.jsx)("div",{className:"slider-wrap",children:(0,n.jsx)(v.Z,{ref:s,...c,children:e.model.featureItems.map((e,s)=>(0,n.jsx)("div",{className:"slide-list",children:(0,n.jsx)("div",{className:"slide-list-image ",children:(0,n.jsx)("img",{src:e.featureImage,alt:"main-item"})})},"main-slider-list-".concat(s)))})}),(0,n.jsx)("div",{className:"gradient"}),(0,n.jsx)(y,{addClassName:"main-slide-arrow main-slide-next link",onClick:()=>{s&&s.current&&s.current.slickNext()}}),(0,n.jsx)(C,{addClassName:"main-slide-arrow main-slide-prev link",onClick:()=>{s&&s.current&&s.current.slickPrev()}})]})});function C(e){var s;return(0,n.jsx)("div",{className:"".concat(null!==(s=e.addClassName)&&void 0!==s?s:""),onClick:()=>e.onClick(),children:(0,n.jsx)("img",{src:"".concat(p,"/assets/images/main/main-prev.svg"),alt:"prev"})})}function y(e){var s;return(0,n.jsx)("div",{className:"".concat(null!==(s=e.addClassName)&&void 0!==s?s:""),onClick:()=>e.onClick(),children:(0,n.jsx)("img",{src:"".concat(p,"/assets/images/main/main-next.svg"),alt:"next"})})}let S=(0,c.Pi)(e=>{let s=(0,r.useRef)(null);(0,r.useEffect)(()=>{let t=()=>{(0,o.z)(()=>{s&&s.current&&(e.model.detailSize=s.current.offsetHeight)})};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)});let t={className:"card-slider",centerMode:!1,centerPadding:"10px",infinite:!0,slidesToShow:e.model.sliderViewCount,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,speed:600,dots:!1,cssEase:"ease-in-out",nextArrow:(0,n.jsx)(V,{addClassName:"card-slide-arrow card-slide-next"}),prevArrow:(0,n.jsx)(T,{addClassName:"card-slide-arrow card-slide-prev"})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{ref:s,className:"card-container",children:[!e.model.isSlide&&(0,n.jsx)("div",{className:D()("not-slide-card",{wrap:e.model.isTwoLine}),children:e.model.featureItems.map((s,t)=>(0,n.jsx)("div",{className:"link",style:{width:"".concat(e.model.percent,"%"),padding:"3px 5px"},onClick:()=>e.onDetail(null,null),children:(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:s.featureImage,alt:"image"})})},"naver-card-new-".concat(t)))}),e.model.isSlide&&(0,n.jsx)("div",{className:"card-slide-box link",children:(0,n.jsx)("div",{children:(0,n.jsx)(v.Z,{...t,children:e.model.featureItems.map((s,t)=>(0,n.jsx)("div",{className:"slide-card",onClick:e.model.isHasDetail?()=>e.onDetail(s.featureId,e.model.sectionId):()=>e.onDetail(null,null),children:(0,n.jsxs)("div",{className:D()({"not-select":e.currentDetailSection===e.model.sectionId&&e.currentDetailItem!==s.featureId}),children:[(0,n.jsx)("img",{src:s.featureImage,alt:"slide-card-image"}),(0,n.jsx)("div",{})]})},"slide-".concat(e.model.sectionTitle,"-").concat(t)))})})})]}),(0,n.jsx)("div",{className:D()("card-detail-box",{on:e.currentDetailSection===e.model.sectionId,isWrap:e.model.isDetailTowLine}),style:{height:e.currentDetailSection===e.model.sectionId?e.model.getDetailSize(e.currentDetailItem):0},children:!(0,l.isNil)(e.model.sectionId)&&(0,n.jsxs)(n.Fragment,{children:[e.model.currentDetailList(e.currentDetailItem).map((s,t)=>(0,n.jsx)("div",{style:{width:"".concat(e.model.percent,"%"),height:e.model.isDetailTowLine?"".concat(e.model.detailSize,"px"):"100%",marginBottom:e.model.isDetailTowLine?"10px !important":0},children:(0,n.jsx)("div",{className:"link",children:(0,n.jsx)("img",{src:s,alt:"detail-item"})})},"feature-".concat(e.currentDetailSection,"-").concat(t))),!(0,l.isNil)(e.currentDetailSection)&&(0,l.isEmpty)(e.model.currentDetailList(e.currentDetailItem))&&(0,n.jsx)("p",{className:"empty link",children:"세부 이미지가 없습니다"})]})})]})});function T(e){let{className:s,style:t,onClick:i,addClassName:a}=e;return(0,n.jsx)("div",{className:"".concat(s," ").concat(null!=a?a:""),style:{...t},onClick:i,children:(0,n.jsx)("div",{className:"inner-arrow-box",children:(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"".concat(p,"/assets/images/main/main-prev.svg"),alt:"prev"})})})})}function V(e){let{className:s,style:t,onClick:i,addClassName:a}=e;return(0,n.jsx)("div",{className:"".concat(s," ").concat(null!=a?a:""),style:{...t},onClick:i,children:(0,n.jsx)("div",{className:"inner-arrow-box",children:(0,n.jsx)("div",{children:(0,n.jsx)("img",{src:"".concat(p,"/assets/images/main/main-next.svg"),alt:"next"})})})})}let M=(0,c.Pi)(e=>{var s;return(0,n.jsxs)("div",{className:"main-content section-content ".concat(null!==(s=e.className)&&void 0!==s?s:""),children:[(0,n.jsxs)("div",{className:"section-head",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"link",children:e.title}),e.hasDetail&&(0,n.jsx)("p",{className:"detail-info link",children:"클릭하면 세부 내용이 보입니다"})]}),(0,n.jsx)("p",{className:"link",children:e.contribution})]}),(0,n.jsx)("div",{className:"content-wrap",children:e.children})]})}),z=(0,c.Pi)(e=>((0,r.useEffect)(()=>{e.model.isInit||(0,o.z)(()=>{e.model.isInit=!0,setTimeout(()=>{(0,o.z)(()=>e.model.isLoading=!0),setTimeout(()=>{(0,o.z)(()=>{e.model.isInit=!1,e.model.isOut=!0})},1500)},750)}),m.n.isIntro&&setTimeout(()=>e.onOff(),3400)},[e]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:D()("bg-white intro-bg",{out:e.model.isOut})}),(0,n.jsxs)("div",{className:D()("intro-container",{in:e.model.isInit,on:e.model.isLoading,out:e.model.isOut}),style:{height:m.n.vh+"px"},children:[(0,n.jsxs)("div",{className:"loading-text-box",children:[(0,n.jsxs)("div",{className:"bg-box",children:[(0,n.jsx)("span",{className:"link",children:"L"}),(0,n.jsx)("span",{className:"link",children:"O"}),(0,n.jsx)("span",{className:"link",children:"A"}),(0,n.jsx)("span",{className:"link",children:"D"}),(0,n.jsx)("span",{className:"link",children:"I"}),(0,n.jsx)("span",{className:"link",children:"N"}),(0,n.jsx)("span",{className:"link",children:"G"})]}),(0,n.jsxs)("div",{className:"top-box",children:[(0,n.jsx)("span",{className:"link",children:"L"}),(0,n.jsx)("span",{className:"link",children:"O"}),(0,n.jsx)("span",{className:"link",children:"A"}),(0,n.jsx)("span",{className:"link",children:"D"}),(0,n.jsx)("span",{className:"link",children:"I"}),(0,n.jsx)("span",{className:"link",children:"N"}),(0,n.jsx)("span",{className:"link",children:"G"})]})]}),(0,n.jsxs)("div",{className:"loading-num-box",children:[(0,n.jsxs)("div",{className:"num-container",children:[(0,n.jsxs)("div",{className:"num-box first",children:[(0,n.jsx)("p",{className:"link",children:"0"}),(0,n.jsx)("p",{className:"link",children:"1"}),(0,n.jsx)("p",{className:"link",children:"2"}),(0,n.jsx)("p",{className:"link",children:"3"}),(0,n.jsx)("p",{className:"link",children:"4"}),(0,n.jsx)("p",{className:"link",children:"5"}),(0,n.jsx)("p",{className:"link",children:"6"}),(0,n.jsx)("p",{className:"link",children:"8"}),(0,n.jsx)("p",{className:"link",children:"9"})]}),(0,n.jsxs)("div",{className:"num-box second",children:[(0,n.jsx)("p",{className:"link",children:"0"}),(0,n.jsx)("p",{className:"link",children:"1"}),(0,n.jsx)("p",{className:"link",children:"2"}),(0,n.jsx)("p",{className:"link",children:"3"}),(0,n.jsx)("p",{className:"link",children:"4"}),(0,n.jsx)("p",{className:"link",children:"5"}),(0,n.jsx)("p",{className:"link",children:"6"}),(0,n.jsx)("p",{className:"link",children:"8"}),(0,n.jsx)("p",{className:"link",children:"9"})]})]}),(0,n.jsx)("p",{className:"last link",children:"%"})]})]})]})));class H{constructor(){this.isInit=!1,this.isLoading=!1,this.isOut=!1,(0,o.ky)(this)}}let L=(0,c.Pi)(e=>((0,r.useEffect)(()=>{e.model.isInit&&setTimeout(()=>{(0,o.z)(()=>e.model.isInitEnd=!0)},1500)},[e.model,e.model.isInit]),(0,n.jsxs)("div",{className:D()("main",{on:e.model.isInit}),children:[(0,n.jsxs)("div",{className:D()("inner-content",{on:e.model.isInit,end:e.model.isInitEnd}),children:[(0,n.jsx)("div",{className:"top",children:(0,n.jsx)("div",{className:"inner",children:(0,n.jsx)("span",{className:"link",children:"Hello, I Am"})})}),(0,n.jsx)("div",{className:"mid",children:(0,n.jsx)("div",{className:"inner",children:(0,n.jsx)("span",{className:"link",children:"Designer"})})}),(0,n.jsx)("div",{className:"bottom",children:(0,n.jsx)("div",{className:"inner",children:(0,n.jsx)("span",{className:"link",children:"Shin yujin"})})}),(0,n.jsx)("div",{className:"info-text-box",children:(0,n.jsx)("div",{children:(0,n.jsx)("p",{className:"link",children:"안녕하세요, 디자이너 신유진의 포트폴리오입니다."})})})]}),(0,n.jsxs)("div",{className:"scroll",children:[(0,n.jsx)("div",{className:"scroll-image link",children:(0,n.jsx)("img",{src:"".concat(p,"/assets/images/scroll.svg"),alt:"scroll"})}),(0,n.jsx)("p",{className:"link",children:"아래로 스크롤"})]})]})));class E{onInit(){this.isInit=!this.isInit}constructor(){this.isInit=!1,this.isInitEnd=!1,(0,o.ky)(this)}}let P=(0,c.Pi)(()=>{let e=(0,r.useRef)(null),s=(0,r.useRef)(null),t=(0,r.useState)(()=>new O)[0];(0,r.useEffect)(()=>{if(!t.isInit){t.isInit=!0;return}let i=()=>{if((0,l.isNil)(s)||(0,l.isNil)(s.current)||(0,l.isNil)(e)||(0,l.isNil)(e.current))return;let i=window.scrollY;window.scrollY,window.innerHeight;let a=s.current.offsetTop+s.current.scrollHeight,n=e.current.offsetTop+e.current.scrollHeight/1.15;if(m.n.isIntro||(i>=n&&t.mainModel.isInit&&(0,o.z)(()=>t.mainModel.isInit=!1),n>=i&&!t.mainModel.isInit&&(0,o.z)(()=>t.mainModel.isInit=!0)),i>a){(0,o.z)(()=>t.isShowTopButton=!0);return}(0,o.z)(()=>t.isShowTopButton=!1)};return m.n.isIntro&&t.isInit&&m.n.isSmallMobile&&(0,o.z)(()=>{m.n.isIntro=!1,t.mainModel.isInit=!0}),i(),window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[t]);let i={[a.naver]:h(),[a.instagram]:h(),[a.shoppingLive]:h(),[a.etc]:h()};return(0,n.jsxs)(n.Fragment,{children:[m.n.isIntro&&!m.n.isSmallMobile&&(0,n.jsx)(z,{model:t.introModel,onOff:(0,o.aD)(()=>{t.mainModel.isInit=!0,setTimeout(()=>{m.n.onIntroOff()},500)})}),(0,n.jsx)("div",{ref:e,children:(0,n.jsx)(L,{model:t.mainModel})}),(0,n.jsxs)("div",{ref:s,className:"select-section",children:[(0,n.jsx)("h2",{className:"link",children:"감상을 원하는 아이콘을 선택하세요."}),(0,n.jsx)("div",{className:"select-list-box",children:x.contentSet.map((e,s)=>(0,n.jsxs)("div",{className:"select-list link",onClick:()=>i[e.featureType].onMoveToSection(),children:[(0,n.jsx)("div",{className:"select-list-image",children:(0,n.jsx)("img",{src:e.featureIcon,alt:e.featureName})}),(0,n.jsx)("p",{children:e.featureName})]},"select-menu-".concat(s)))})]}),(0,n.jsx)("div",{className:"section-wrap",children:x.contentSet.map((e,s)=>(0,n.jsx)("div",{ref:i[e.featureType].ref,className:"section",children:(0,n.jsx)("div",{className:"inner-container",children:e.items.map((s,i)=>e.featureType===a.naver?(0,n.jsx)("div",{style:{paddingTop:1===i&&(m.n.isMid||m.n.isMobile||m.n.isSmallMobile)?"70px":0},children:(0,n.jsxs)(M,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:[0===i&&(0,n.jsx)(k,{model:s}),0!==i&&(0,n.jsx)(S,{model:s,onDetail:(e,s)=>t.setCurrentDetailSection(e,s),currentDetailSection:t.currentDetailSection,currentDetailItem:t.currentDetailItem})]})},"naver-".concat(i)):e.featureType===a.instagram?(0,n.jsx)(M,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:(0,n.jsx)(S,{model:s,onDetail:(e,s)=>t.setCurrentDetailSection(e,s),currentDetailSection:t.currentDetailSection,currentDetailItem:t.currentDetailItem})},"instagram-".concat(i)):e.featureType===a.shoppingLive?(0,n.jsx)(M,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:(0,n.jsx)(S,{model:s,onDetail:(e,s)=>t.setCurrentDetailSection(e,s),currentDetailSection:t.currentDetailSection,currentDetailItem:t.currentDetailItem})},"shoppingLive-".concat(i)):e.featureType===a.etc?(0,n.jsx)(M,{title:s.sectionTitle,contribution:s.contribution,hasDetail:s.isHasDetail,children:(0,n.jsx)(S,{model:s,onDetail:(e,s)=>t.setCurrentDetailSection(e,s),currentDetailSection:t.currentDetailSection,currentDetailItem:t.currentDetailItem})},"shoppingLive-".concat(i)):void 0)})},"content-".concat(s)))}),(0,n.jsxs)("div",{className:"footer section",children:[(0,n.jsx)("div",{className:"footer-header",children:(0,n.jsx)("p",{className:"link",children:"ABOUT ME"})}),(0,n.jsxs)("div",{className:"footer-content",children:[(0,n.jsxs)("p",{className:"link",children:["안녕하세요. ",(0,n.jsx)("b",{children:"디자이너 신유진"}),"입니다."]}),(0,n.jsxs)("p",{className:"link",children:["원만한 소통&공감 능력을 갖춘 섬세한 디자이너 신유진입니다.",(0,n.jsx)("br",{}),"SNS 콘텐츠, 이벤트 프로모션, 상세 페이지 디자인 등을",(0,n.jsx)("br",{}),"전문으로 하는 그래픽 디자이너 신유진입니다."]}),(0,n.jsxs)("p",{className:"link",children:["디자인하는 것을 좋아하고 머릿 속에서 상상하는 것을",(0,n.jsx)("br",{}),"시각적으로 표현하여 디자인의 가치를 재공합니다."]})]})]}),(0,n.jsx)("button",{type:"button",className:D()("top-btn",{on:t.isShowTopButton}),onClick:()=>{(0,l.isNil)(s)||(0,l.isNil)(s.current)||s.current.scrollIntoView({behavior:"smooth",block:"center"})},children:(0,n.jsx)("img",{src:"".concat(p,"/assets/images/top_arrow.png"),alt:"top-btn"})})]})});class O{setCurrentDetailSection(e,s){if(this.currentDetailSection===s&&this.currentDetailItem===e){this.currentDetailSection=null,this.currentDetailItem=null;return}this.currentDetailSection=s,this.currentDetailItem=e}constructor(){this.isInit=!1,this.isShowTopButton=!1,this.currentDetailSection=null,this.currentDetailItem=null,this.isIntro=!0,this.introModel=new H,this.mainModel=new E,(0,o.ky)(this)}}var A=P}},function(e){e.O(0,[66,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);