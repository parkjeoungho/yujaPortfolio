import { makeAutoObservable, runInAction } from "mobx";
import { isEmpty, isNil } from "lodash";
import { frontModel } from "../model/model";

export enum Feature {
  naver = "NAVER",
  instagram = "INSTAGRAM",
  shoppingLive = "SHOPPING_LIVE",
  etc = "ETC",
}

export class ContentModel {
  contentSet: FeatureModel[];

  constructor(props: { contentSet: FeatureModel[] }) {
    this.contentSet = props.contentSet;
    makeAutoObservable(this);
  }
}

export class FeatureModel {
  featureType: Feature;
  featureName: string;
  featureIcon: string;
  items: FeatureSectionModel[];

  constructor(props: {
    featureType: Feature;
    featureName: string;
    featureIcon: string;
    items: FeatureSectionModel[];
  }) {
    this.featureType = props.featureType;
    this.featureName = props.featureName;
    this.featureIcon = props.featureIcon;
    this.items = props.items;
    makeAutoObservable(this);
  }
}

export class FeatureSectionModel {
  isSlide: boolean;
  isHasDetail: boolean;
  sectionId: string;
  sectionTitle: string;
  contribution: string;
  isTwoLine?: boolean | null;
  viewCount: number;
  midViewCount: number;
  mobileViewCount: number;
  smallMobileViewCount: number;
  size: number;
  featureItems: FeatureItemModel[];
  currentItem?: number | null;
  detailSize = 0;
  isDetailTowLine = false;

  constructor(props: {
    isSlide: boolean;
    isHasDetail: boolean;
    sectionId: string;
    sectionTitle: string;
    contribution: string;
    featureItems: FeatureItemModel[];
    isTwoLine?: boolean;
    viewCount: number;
    midViewCount: number;
    mobileViewCount: number;
    smallMobileViewCount: number;
    size: number;
    currentItem?: number | null;
  }) {
    this.isSlide = props.isSlide;
    this.isHasDetail = props.isHasDetail;
    this.sectionId = props.sectionId;
    this.sectionTitle = props.sectionTitle;
    this.contribution = props.contribution;
    this.featureItems = props.featureItems;
    this.isTwoLine = props.isTwoLine ?? null;
    this.viewCount = props.viewCount;
    this.midViewCount = props.midViewCount;
    this.mobileViewCount = props.mobileViewCount;
    this.smallMobileViewCount = props.smallMobileViewCount;
    this.size = props.size;
    this.currentItem = props.currentItem ?? null;
    makeAutoObservable(this);
  }

  get percent() {
    if (frontModel.isMid) {
      return 100 / this.midViewCount;
    }

    if (frontModel.isMobile) {
      return 100 / this.mobileViewCount;
    }

    if (frontModel.isSmallMobile) {
      return 100 / this.smallMobileViewCount;
    }

    return 100 / this.viewCount;
  }

  get sliderViewCount() {
    if (frontModel.isMid) {
      return this.midViewCount;
    }

    if (frontModel.isMobile) {
      return this.mobileViewCount;
    }

    if (frontModel.isSmallMobile) {
      return this.smallMobileViewCount;
    }

    return this.viewCount;
  }

  getDetailSize(id: string | null) {
    // const padding =
    //   frontModel.isMobile || frontModel.isSmallMobile ? (frontModel.isMobile ? 3 : 8) : 8;

    if (isEmpty(this.currentDetailList(id))) {
      runInAction(() => (this.isDetailTowLine = false));
      return this.detailSize;
    }

    if (this.sliderViewCount >= this.currentDetailList(id).length) {
      runInAction(() => (this.isDetailTowLine = false));
      return this.detailSize;
    }

    runInAction(() => (this.isDetailTowLine = true));

    if (this.currentDetailList(id).length > 4 && this.sliderViewCount === 2) {
      return this.detailSize * 3 + 20;
    }

    return this.detailSize * 2 + 20;
  }

  currentDetailList(id: string | null) {
    if (isNil(id)) {
      return [];
    }

    const detail = this.featureItems.find((item) => item.featureId === id);

    if (isNil(detail)) {
      return [];
    }

    return detail.featureDetailImages;
  }
}

export class FeatureItemModel {
  featureId: string;
  featureImage: string;
  featureDetailImages: string[];

  constructor(props: { featureId: string; featureImage: string; featureDetailImages?: string[] }) {
    this.featureId = props.featureId;
    this.featureImage = props.featureImage;
    this.featureDetailImages = props.featureDetailImages ?? [];
    makeAutoObservable(this);
  }
}
