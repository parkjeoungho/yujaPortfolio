import {
  ContentModel,
  Feature,
  FeatureItemModel,
  FeatureModel,
  FeatureSectionModel,
} from "./feature";

export const prefix = "https://parkjeoungho.github.io/yujaPortfolio/";

export const featureNaver: FeatureModel = new FeatureModel({
  featureType: Feature.naver,
  featureName: "스마트스토어",
  featureIcon: `${prefix}/assets/images/index_icon/naver.png`,
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
          featureImage: `${prefix}/assets/images/main/juicy_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-coolness",
          featureImage: `${prefix}/assets/images/main/coolness_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-diet",
          featureImage: `${prefix}/assets/images/main/diet_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-summer",
          featureImage: `${prefix}/assets/images/main/summer_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-choose",
          featureImage: `${prefix}/assets/images/main/choose_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-kimchi",
          featureImage: `${prefix}/assets/images/main/kimchi_1200x490.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-notice",
          featureImage: `${prefix}/assets/images/main/notice_1200x490.jpg`,
        }),
        new FeatureItemModel({
          featureId: "naver-dumpling",
          featureImage: `${prefix}/assets/images/main/dumpling_1200x490.png`,
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
          featureImage: `${prefix}/assets/images/section_02/dumpling.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-choose",
          featureImage: `${prefix}/assets/images/section_02/choose.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-notice",
          featureImage: `${prefix}/assets/images/section_02/notice.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-deliciousdiet",
          featureImage: `${prefix}/assets/images/section_02/deliciousdiet.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-HomeCance",
          featureImage: `${prefix}/assets/images/section_02/HomeCance.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-juicy",
          featureImage: `${prefix}/assets/images/section_02/juicy.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-diet",
          featureImage: `${prefix}/assets/images/section_02/diet.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-NonghyupJuice",
          featureImage: `${prefix}/assets/images/section_02/NonghyupJuice.png`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-Holidays",
          featureImage: `${prefix}/assets/images/section_02/Holidays.jpg`,
        }),
        new FeatureItemModel({
          featureId: "naver-mobile-summer",
          featureImage: `${prefix}/assets/images/section_02/summer.png`,
        }),
      ],
    }),
  ],
});

export const featureInstagram: FeatureModel = new FeatureModel({
  featureType: Feature.instagram,
  featureName: "인스타그램",
  featureIcon: `${prefix}/assets/images/index_icon/instagram.png`,
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
          featureImage: `${prefix}/assets/images/section_03/01/h/integrated_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/01/h/integrated_02.png`,
            `${prefix}/assets/images/section_03/01/h/integrated_03.png`,
            `${prefix}/assets/images/section_03/01/h/integrated_04.png`,
            `${prefix}/assets/images/section_03/01/h/integrated_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-Supporters",
          featureImage: `${prefix}/assets/images/section_03/02/h/Supporters_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/02/h/Supporters_02.png`,
            `${prefix}/assets/images/section_03/02/h/Supporters_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-submit",
          featureImage: `${prefix}/assets/images/section_03/03/h/submit_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/03/h/submit_02.png`,
            `${prefix}/assets/images/section_03/03/h/submit_03.png`,
            `${prefix}/assets/images/section_03/03/h/submit_04.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-payment",
          featureImage: `${prefix}/assets/images/section_03/04/h/payment_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/04/h/payment_02.png`,
            `${prefix}/assets/images/section_03/04/h/payment_03.png`,
            `${prefix}/assets/images/section_03/04/h/payment_04.png`,
            `${prefix}/assets/images/section_03/04/h/payment_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-cancellation",
          featureImage: `${prefix}/assets/images/section_03/05/h/cancellation_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/05/h/cancellation_02.png`,
            `${prefix}/assets/images/section_03/05/h/cancellation_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-event",
          featureImage: `${prefix}/assets/images/section_03/06/h/event_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/06/h/event_02.png`,
            `${prefix}/assets/images/section_03/06/h/event_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-map",
          featureImage: `${prefix}/assets/images/section_03/07/h/map_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/07/h/map_02.png`,
            `${prefix}/assets/images/section_03/07/h/map_03.png`,
            `${prefix}/assets/images/section_03/07/h/map_04.png`,
            `${prefix}/assets/images/section_03/07/h/map_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-book",
          featureImage: `${prefix}/assets/images/section_03/08/h/book_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/08/h/book_02.png`,
            `${prefix}/assets/images/section_03/08/h/book_03.png`,
            `${prefix}/assets/images/section_03/08/h/book_04.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "instagram-house",
          featureImage: `${prefix}/assets/images/section_03/09/h/house_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_03/09/h/house_02.png`,
            `${prefix}/assets/images/section_03/09/h/house_03.png`,
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
          featureImage: `${prefix}/assets/images/section_05/h/konjac_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_05/h/konjac_02.png`,
            `${prefix}/assets/images/section_05/h/konjac_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "advertisement-refrigerator",
          featureImage: `${prefix}/assets/images/section_05/h/refrigerator_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_05/h/refrigerator_02.png`,
            `${prefix}/assets/images/section_05/h/refrigerator_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "advertisement-Samgyetang",
          featureImage: `${prefix}/assets/images/section_05/h/Samgyetang_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_05/h/Samgyetang_02.png`,
            `${prefix}/assets/images/section_05/h/Samgyetang_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "advertisement-foodweek",
          featureImage: `${prefix}/assets/images/section_05/h/foodweek.png`,
        }),
        new FeatureItemModel({
          featureId: "advertisement-coupon",
          featureImage: `${prefix}/assets/images/section_05/h/coupon.png`,
        }),
        new FeatureItemModel({
          featureId: "advertisement-happynewyear",
          featureImage: `${prefix}/assets/images/section_05/h/happynewyear.png`,
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
          featureImage: `${prefix}/assets/images/section_04/h/appointment_01.png`,
          featureDetailImages: [`${prefix}/assets/images/section_04/h/appointment_02.png`],
        }),
        new FeatureItemModel({
          featureId: "iloom-honey",
          featureImage: `${prefix}/assets/images/section_04/h/honey_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_04/h/honey_02.png`,
            `${prefix}/assets/images/section_04/h/honey_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "iloom-keyword",
          featureImage: `${prefix}/assets/images/section_04/h/keyword_01.png`,
          featureDetailImages: [`${prefix}/assets/images/section_04/h/keyword_02.png`],
        }),
        new FeatureItemModel({
          featureId: "iloom-secret",
          featureImage: `${prefix}/assets/images/section_04/h/secret_01.png`,
          featureDetailImages: [`${prefix}/assets/images/section_04/h/secret_02.png`],
        }),
        new FeatureItemModel({
          featureId: "iloom-test",
          featureImage: `${prefix}/assets/images/section_04/h/test_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_04/h/test_02.png`,
            `${prefix}/assets/images/section_04/h/test_03.png`,
            `${prefix}/assets/images/section_04/h/test_04.png`,
            `${prefix}/assets/images/section_04/h/test_05.png`,
            `${prefix}/assets/images/section_04/h/test_06.png`,
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
          featureImage: `${prefix}/assets/images/section_06/h/brandweek.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-experiencegroup",
          featureImage: `${prefix}/assets/images/section_06/h/experiencegroup.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-handwash",
          featureImage: `${prefix}/assets/images/section_06/h/handwash.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-Herb",
          featureImage: `${prefix}/assets/images/section_06/h/Herb.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-oclean",
          featureImage: `${prefix}/assets/images/section_06/h/oclean.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-ocleanreview",
          featureImage: `${prefix}/assets/images/section_06/h/ocleanreview.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-soap",
          featureImage: `${prefix}/assets/images/section_06/h/soap.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-soki",
          featureImage: `${prefix}/assets/images/section_06/h/soki.png`,
        }),
        new FeatureItemModel({
          featureId: "eco-tissue",
          featureImage: `${prefix}/assets/images/section_06/h/tissue.png`,
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
          featureImage: `${prefix}/assets/images/section_07/h/advertisement_01.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-02",
          featureImage: `${prefix}/assets/images/section_07/h/advertisement_02.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-03",
          featureImage: `${prefix}/assets/images/section_07/h/advertisement_03.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-04",
          featureImage: `${prefix}/assets/images/section_07/h/advertisement_04.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-05",
          featureImage: `${prefix}/assets/images/section_07/h/advertisement_05.png`,
        }),
        new FeatureItemModel({
          featureId: "health-advertisement-06",
          featureImage: `${prefix}/assets/images/section_07/h/advertisement_06.png`,
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
          featureImage: `${prefix}/assets/images/section_08/h/dif.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-cherry",
          featureImage: `${prefix}/assets/images/section_08/h/cherry.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-peach",
          featureImage: `${prefix}/assets/images/section_08/h/peach.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-persimmon",
          featureImage: `${prefix}/assets/images/section_08/h/persimmon.png`,
        }),
        new FeatureItemModel({
          featureId: "fruit-watermelon",
          featureImage: `${prefix}/assets/images/section_08/h/watermelon.png`,
        }),
      ],
    }),
  ],
});

export const featureShoppingLive: FeatureModel = new FeatureModel({
  featureType: Feature.shoppingLive,
  featureName: "쇼핑 라이브",
  featureIcon: `${prefix}/assets/images/index_icon/live.png`,
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
          featureImage: `${prefix}/assets/images/section_09/01/h/sandybeach_01.png`,
          featureDetailImages: [
            `/${prefix}/assets/images/section_09/01/h/sandybeach_02.png`,
            `/${prefix}/assets/images/section_09/01/h/sandybeach_03.png`,
            `/${prefix}/assets/images/section_09/01/h/sandybeach_04.png`,
            `/${prefix}/assets/images/section_09/01/h/sandybeach_05.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "live-brick",
          featureImage: `${prefix}/assets/images/section_09/02/h/brick_01.png`,
          featureDetailImages: [
            `/${prefix}/assets/images/section_09/02/h/brick_02.png`,
            `/${prefix}/assets/images/section_09/02/h/brick_03.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "live-rainy",
          featureImage: `${prefix}/assets/images/section_09/03/h/rainy_01.png`,
          featureDetailImages: [
            `/${prefix}/assets/images/section_09/03/h/rainy_02.png`,
            `/${prefix}/assets/images/section_09/03/h/rainy_03.png`,
            `/${prefix}/assets/images/section_09/03/h/rainy_04.png`,
          ],
        }),

        new FeatureItemModel({
          featureId: "live-px",
          featureImage: `${prefix}/assets/images/section_09/05/h/px_01.png`,
          featureDetailImages: [
            `/${prefix}/assets/images/section_09/05/h/px_02.png`,
            `/${prefix}/assets/images/section_09/05/h/px_03.png`,
            `/${prefix}/assets/images/section_09/05/h/px_04.png`,
          ],
        }),
        new FeatureItemModel({
          featureId: "live-quiz",
          featureImage: `${prefix}/assets/images/section_09/04/h/quiz_01.png`,
          featureDetailImages: [
            `${prefix}/assets/images/section_09/04/h/quiz_02.png`,
            `${prefix}/assets/images/section_09/04/h/quiz_03.png`,
          ],
        }),
      ],
    }),
  ],
});

export const featureEtc: FeatureModel = new FeatureModel({
  featureType: Feature.etc,
  featureName: "기타",
  featureIcon: `${prefix}/assets/images/index_icon/etc.png`,
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
          featureImage: `${prefix}/assets/images/section_10/h/supporters.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-money",
          featureImage: `${prefix}/assets/images/section_10/h/money.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-online",
          featureImage: `${prefix}/assets/images/section_10/h/online.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-golden",
          featureImage: `${prefix}/assets/images/section_10/h/golden.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-Sight",
          featureImage: `${prefix}/assets/images/section_10/h/Sight.png`,
        }),
        new FeatureItemModel({
          featureId: "etc-live",
          featureImage: `${prefix}/assets/images/section_10/h/live.png`,
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
          featureImage: `${prefix}/assets/images/section_11/h/map.png`,
        }),
        new FeatureItemModel({
          featureId: "news-lalaland",
          featureImage: `${prefix}/assets/images/section_11/h/lalaland.png`,
        }),
        new FeatureItemModel({
          featureId: "news-organic",
          featureImage: `${prefix}/assets/images/section_11/h/organic.png`,
        }),
        new FeatureItemModel({
          featureId: "news-foodpoisoning",
          featureImage: `${prefix}/assets/images/section_11/h/foodpoisoning.png`,
        }),
        new FeatureItemModel({
          featureId: "news-airplane",
          featureImage: `${prefix}/assets/images/section_11/h/airplane.png`,
        }),
        new FeatureItemModel({
          featureId: "news-application",
          featureImage: `${prefix}/assets/images/section_11/h/application.png`,
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
          featureImage: `${prefix}/assets/images/section_12/h/summer.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-swimming",
          featureImage: `${prefix}/assets/images/section_12/h/swimming.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-11stsummer",
          featureImage: `${prefix}/assets/images/section_12/h/11stsummer.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-daisosummer",
          featureImage: `${prefix}/assets/images/section_12/h/daisosummer.png`,
        }),
        new FeatureItemModel({
          featureId: "summer-ocean",
          featureImage: `${prefix}/assets/images/section_12/h/ocean.png`,
        }),
      ],
    }),
  ],
});

export const contentSets = new ContentModel({
  contentSet: [featureNaver, featureInstagram, featureShoppingLive, featureEtc],
});
