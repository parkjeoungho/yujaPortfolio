import { config } from "../config";
import { frontModel } from "../model/model";
import {
  ContentModel,
  Feature,
  FeatureItemModel,
  FeatureModel,
  FeatureSectionModel,
} from "./feature";

export const featureNaver: FeatureModel = new FeatureModel({
  featureType: Feature.naver,
  featureName: "스마트스토어",
  featureIcon: `${config.prefix}/assets/images/index_icon/naver.png`,
  items: [
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      sectionId: "naver-pc",
      sectionTitle: "네이버스토어 농협식품 배너 PC",
      contribution: "디자인 제작 기여도 100%",
      viewCount: 1,
      midViewCount: 1,
      mobileViewCount: 1,
      smallMobileViewCount: 1,
      size: 383,
      featureItems: [
        new FeatureItemModel({
          featureId: "naver-juicy",
          featureImage: "/assets/images/main/juicy_1200x490.png",
        }),
        new FeatureItemModel({
          featureId: "naver-coolness",
          featureImage: `${config.prefix}/assets/images/main/coolness_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-diet",
          featureImage: `${config.prefix}/assets/images/main/diet_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-summer",
          featureImage: `${config.prefix}/assets/images/main/summer_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-choose",
          featureImage: `${config.prefix}/assets/images/main/choose_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-kimchi",
          featureImage: `${config.prefix}/assets/images/main/kimchi_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-notice",
          featureImage: `${config.prefix}/assets/images/main/notice_1200x490.jpg`,
        }),
        new FeatureItemModel({
          featureId: "naver-dumpling",
          featureImage: `${config.prefix}/assets/images/main/dumpling_1200x490.png`,
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      isTwoLine: false,
      sectionId: "naver-mobile",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 260,
      sectionTitle: "네이버스토어 농협식품 배너 모바일",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "naver-mobile-dumpling",
          featureImage: `${config.prefix}/assets/images/section_02/dumpling.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-choose",
          featureImage: `${config.prefix}/assets/images/section_02/choose.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-notice",
          featureImage: `${config.prefix}/assets/images/section_02/notice.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-deliciousdiet",
          featureImage: `${config.prefix}/assets/images/section_02/deliciousdiet.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-HomeCance",
          featureImage: `${config.prefix}/assets/images/section_02/HomeCance.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-juicy",
          featureImage: `${config.prefix}/assets/images/section_02/juicy.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-diet",
          featureImage: `${config.prefix}/assets/images/section_02/diet.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-NonghyupJuice",
          featureImage: `${config.prefix}/assets/images/section_02/NonghyupJuice.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-Holidays",
          featureImage: `${config.prefix}/assets/images/section_02/Holidays.jpg`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-summer",
          featureImage: `${config.prefix}/assets/images/section_02/summer.png`,
        }),
      ],
    }),
  ],
});

export const featureInstagram: FeatureModel = new FeatureModel({
  featureType: Feature.instagram,
  featureName: "인스타그램",
  featureIcon: `${config.prefix}/assets/images/index_icon/instagram.png`,
  items: [
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: true,
      sectionId: "instagram-parenting",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 327,
      sectionTitle: "보건복지부 육아 인스타그램 카드뉴스",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "instagram-integrated",
          featureImage: `${config.prefix}/assets/images/section_03/01/h/integrated_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/01/h/integrated_02.png`,
            `${config.prefix}/assets/images/section_03/01/h/integrated_03.png`,
            `${config.prefix}/assets/images/section_03/01/h/integrated_04.png`,
            `${config.prefix}/assets/images/section_03/01/h/integrated_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-Supporters",
          featureImage: `${config.prefix}/assets/images/section_03/02/h/Supporters_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/02/h/Supporters_02.png`,
            `${config.prefix}/assets/images/section_03/02/h/Supporters_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-submit",
          featureImage: `${config.prefix}/assets/images/section_03/03/h/submit_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/03/h/submit_02.png`,
            `${config.prefix}/assets/images/section_03/03/h/submit_03.png`,
            `${config.prefix}/assets/images/section_03/03/h/submit_04.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-payment",
          featureImage: `${config.prefix}/assets/images/section_03/04/h/payment_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/04/h/payment_02.png`,
            `${config.prefix}/assets/images/section_03/04/h/payment_03.png`,
            `${config.prefix}/assets/images/section_03/04/h/payment_04.png`,
            `${config.prefix}/assets/images/section_03/04/h/payment_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-cancellation",
          featureImage: `${config.prefix}/assets/images/section_03/05/h/cancellation_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/05/h/cancellation_02.png`,
            `${config.prefix}/assets/images/section_03/05/h/cancellation_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-event",
          featureImage: `${config.prefix}/assets/images/section_03/06/h/event_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/06/h/event_02.png`,
            `${config.prefix}/assets/images/section_03/06/h/event_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-map",
          featureImage: `${config.prefix}/assets/images/section_03/07/h/map_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/07/h/map_02.png`,
            `${config.prefix}/assets/images/section_03/07/h/map_03.png`,
            `${config.prefix}/assets/images/section_03/07/h/map_04.png`,
            `${config.prefix}/assets/images/section_03/07/h/map_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-book",
          featureImage: `${config.prefix}/assets/images/section_03/08/h/book_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/08/h/book_02.png`,
            `${config.prefix}/assets/images/section_03/08/h/book_03.png`,
            `${config.prefix}/assets/images/section_03/08/h/book_04.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-house",
          featureImage: `${config.prefix}/assets/images/section_03/09/h/house_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_03/09/h/house_02.png`,
            `${config.prefix}/assets/images/section_03/09/h/house_03.png`,
          ],
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: true,
      sectionId: "instagram-advertisement",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 327,
      sectionTitle: "다양한 광고 디자인",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "advertisement-konjac",
          featureImage: `${config.prefix}/assets/images/section_05/h/konjac_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_05/h/konjac_02.png`,
            `${config.prefix}/assets/images/section_05/h/konjac_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "advertisement-refrigerator",
          featureImage: `${config.prefix}/assets/images/section_05/h/refrigerator_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_05/h/refrigerator_02.png`,
            `${config.prefix}/assets/images/section_05/h/refrigerator_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "advertisement-Samgyetang",
          featureImage: `${config.prefix}/assets/images/section_05/h/Samgyetang_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_05/h/Samgyetang_02.png`,
            `${config.prefix}/assets/images/section_05/h/Samgyetang_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "advertisement-foodweek",
          featureImage: `${config.prefix}/assets/images/section_05/h/foodweek.png`,
        }),
        new FeatureItemModel({
          featureId: "advertisement-coupon",
          featureImage: `${config.prefix}/assets/images/section_05/h/coupon.png`,
        }),
        new FeatureItemModel({
          featureId: "advertisement-happynewyear",
          featureImage: `${config.prefix}/assets/images/section_05/h/happynewyear.png`,
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: true,
      sectionId: "instagram-pet",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 327,
      sectionTitle: "일룸 PET의 펫 관점형 리뷰 프로젝트",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "iloom-appointment",
          featureImage: `${config.prefix}/assets/images/section_04/h/appointment_01.png`,
          featureDetailImages: [`${config.prefix}/assets/images/section_04/h/appointment_02.png`],
        }),
        new FeatureItemModel({
          featureId: "iloom-honey",
          featureImage: `${config.prefix}/assets/images/section_04/h/honey_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_04/h/honey_02.png`,
            `${config.prefix}/assets/images/section_04/h/honey_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "iloom-keyword",
          featureImage: `${config.prefix}/assets/images/section_04/h/keyword_01.png`,
          featureDetailImages: [`${config.prefix}/assets/images/section_04/h/keyword_02.png`],
        }),
        new FeatureItemModel({
          featureId: "iloom-secret",
          featureImage: `${config.prefix}/assets/images/section_04/h/secret_01.png`,
          featureDetailImages: [`${config.prefix}/assets/images/section_04/h/secret_02.png`],
        }),
        new FeatureItemModel({
          featureId: "iloom-test",
          featureImage: `${config.prefix}/assets/images/section_04/h/test_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_04/h/test_02.png`,
            `${config.prefix}/assets/images/section_04/h/test_03.png`,
            `${config.prefix}/assets/images/section_04/h/test_04.png`,
            `${config.prefix}/assets/images/section_04/h/test_05.png`,
            `${config.prefix}/assets/images/section_04/h/test_06.png`,
          ],
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      sectionId: "instagram-Eco",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 327,
      sectionTitle: "친환경 브랜드의 청량함이 느껴지는 콘텐츠",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "eco-brandweek",
          featureImage: `${config.prefix}/assets/images/section_06/h/brandweek.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-experiencegroup",
          featureImage: `${config.prefix}/assets/images/section_06/h/experiencegroup.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-handwash",
          featureImage: `${config.prefix}/assets/images/section_06/h/handwash.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-Herb",
          featureImage: `${config.prefix}/assets/images/section_06/h/Herb.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-oclean",
          featureImage: `${config.prefix}/assets/images/section_06/h/oclean.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-ocleanreview",
          featureImage: `${config.prefix}/assets/images/section_06/h/ocleanreview.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-soap",
          featureImage: `${config.prefix}/assets/images/section_06/h/soap.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-soki",
          featureImage: `${config.prefix}/assets/images/section_06/h/soki.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-tissue",
          featureImage: `${config.prefix}/assets/images/section_06/h/tissue.png`,
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      sectionId: "instagram-health",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 327,
      sectionTitle: "건강기능식품 광고 이미지",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "health-advertisement-01",
          featureImage: `${config.prefix}/assets/images/section_07/h/advertisement_01.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-02",
          featureImage: `${config.prefix}/assets/images/section_07/h/advertisement_02.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-03",
          featureImage: `${config.prefix}/assets/images/section_07/h/advertisement_03.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-04",
          featureImage: `${config.prefix}/assets/images/section_07/h/advertisement_04.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-05",
          featureImage: `${config.prefix}/assets/images/section_07/h/advertisement_05.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-06",
          featureImage: `${config.prefix}/assets/images/section_07/h/advertisement_06.png`,
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      sectionId: "instagram-fruit",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 327,
      sectionTitle: "당장 깨물어 먹고 싶은 귀여운 과일 프로젝트",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "fruit-dif",
          featureImage: `${config.prefix}/assets/images/section_08/h/dif.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-cherry",
          featureImage: `${config.prefix}/assets/images/section_08/h/cherry.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-peach",
          featureImage: `${config.prefix}/assets/images/section_08/h/peach.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-persimmon",
          featureImage: `${config.prefix}/assets/images/section_08/h/persimmon.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-watermelon",
          featureImage: `${config.prefix}/assets/images/section_08/h/watermelon.png`,
        }),
      ],
    }),
  ],
});

export const featureShoppingLive: FeatureModel = new FeatureModel({
  featureType: Feature.shoppingLive,
  featureName: "쇼핑 라이브",
  featureIcon: `${config.prefix}/assets/images/index_icon/live.png`,
  items: [
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: true,
      sectionId: "live-Myeonsarang",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 555,
      sectionTitle: "국민 면요리 면사랑 쇼핑라이브 송출배너",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "live-sandybeach",
          featureImage: `${config.prefix}/assets/images/section_09/01/h/sandybeach_01.png`,
          featureDetailImages: [
            `/${config.prefix}/assets/images/section_09/01/h/sandybeach_02.png`,
            `/${config.prefix}/assets/images/section_09/01/h/sandybeach_03.png`,
            `/${config.prefix}/assets/images/section_09/01/h/sandybeach_04.png`,
            `/${config.prefix}/assets/images/section_09/01/h/sandybeach_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "live-brick",
          featureImage: `${config.prefix}/assets/images/section_09/02/h/brick_01.png`,
          featureDetailImages: [
            `/${config.prefix}/assets/images/section_09/02/h/brick_02.png`,
            `/${config.prefix}/assets/images/section_09/02/h/brick_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "live-rainy",
          featureImage: `${config.prefix}/assets/images/section_09/03/h/rainy_01.png`,
          featureDetailImages: [
            `/${config.prefix}/assets/images/section_09/03/h/rainy_02.png`,
            `/${config.prefix}/assets/images/section_09/03/h/rainy_03.png`,
            `/${config.prefix}/assets/images/section_09/03/h/rainy_04.png`,
          ],
        }),

        new FeatureItemModel({
          featureId: "live-px",
          featureImage: `${config.prefix}/assets/images/section_09/05/h/px_01.png`,
          featureDetailImages: [
            `/${config.prefix}/assets/images/section_09/05/h/px_02.png`,
            `/${config.prefix}/assets/images/section_09/05/h/px_03.png`,
            `/${config.prefix}/assets/images/section_09/05/h/px_04.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "live-quiz",
          featureImage: `${config.prefix}/assets/images/section_09/04/h/quiz_01.png`,
          featureDetailImages: [
            `${config.prefix}/assets/images/section_09/04/h/quiz_02.png`,
            `${config.prefix}/assets/images/section_09/04/h/quiz_03.png`,
          ],
        }),
      ],
    }),
  ],
});

export const featureEtc: FeatureModel = new FeatureModel({
  featureType: Feature.etc,
  featureName: "기타",
  featureIcon: `${config.prefix}/assets/images/index_icon/etc.png`,
  items: [
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      sectionId: "etc-advertisement",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 610,
      sectionTitle: "다양한 광고 포스터",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "etc-supporters",
          featureImage: `${config.prefix}/assets/images/section_10/h/supporters.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-money",
          featureImage: `${config.prefix}/assets/images/section_10/h/money.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-online",
          featureImage: `${config.prefix}/assets/images/section_10/h/online.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-golden",
          featureImage: `${config.prefix}/assets/images/section_10/h/golden.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-Sight",
          featureImage: `${config.prefix}/assets/images/section_10/h/Sight.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-live",
          featureImage: `${config.prefix}/assets/images/section_10/h/live.png`,
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      sectionId: "etc-global",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 610,
      sectionTitle: "글로벌 수입수철 뉴스를 포스터로",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "news-map",
          featureImage: `${config.prefix}/assets/images/section_11/h/map.png`,
        }),
        new FeatureItemModel({
          featureId: "news-lalaland",
          featureImage: `${config.prefix}/assets/images/section_11/h/lalaland.png`,
        }),
        new FeatureItemModel({
          featureId: "news-organic",
          featureImage: `${config.prefix}/assets/images/section_11/h/organic.png`,
        }),
        new FeatureItemModel({
          featureId: "news-foodpoisoning",
          featureImage: `${config.prefix}/assets/images/section_11/h/foodpoisoning.png`,
        }),
        new FeatureItemModel({
          featureId: "news-airplane",
          featureImage: `${config.prefix}/assets/images/section_11/h/airplane.png`,
        }),
        new FeatureItemModel({
          featureId: "news-application",
          featureImage: `${config.prefix}/assets/images/section_11/h/application.png`,
        }),
      ],
    }),
    new FeatureSectionModel({
      isSlide: true,
      isHasDetail: false,
      sectionId: "etc-summer",
      viewCount: 5,
      midViewCount: 4,
      mobileViewCount: 3,
      smallMobileViewCount: 2,
      size: 610,
      sectionTitle: "여름특집 광고 포스터",
      contribution: "디자인 제작 기여도 100%",
      featureItems: [
        new FeatureItemModel({
          featureId: "summer-summer",
          featureImage: `${config.prefix}/assets/images/section_12/h/summer.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-swimming",
          featureImage: `${config.prefix}/assets/images/section_12/h/swimming.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-11stsummer",
          featureImage: `${config.prefix}/assets/images/section_12/h/11stsummer.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-daisosummer",
          featureImage: `${config.prefix}/assets/images/section_12/h/daisosummer.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-ocean",
          featureImage: `${config.prefix}/assets/images/section_12/h/ocean.png`,
        }),
      ],
    }),
  ],
});

export const contentSets = new ContentModel({
  contentSet: [featureNaver, featureInstagram, featureShoppingLive, featureEtc],
});
