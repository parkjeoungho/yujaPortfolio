import { makeAutoObservable } from "mobx";
import { isNil } from "lodash";

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
  size: number;
  featureItems: FeatureItemModel[];
  currentItem?: number | null;
  detailSize = 0;

  constructor(props: {
    isSlide: boolean;
    isHasDetail: boolean;
    sectionId: string;
    sectionTitle: string;
    contribution: string;
    featureItems: FeatureItemModel[];
    isTwoLine?: boolean;
    viewCount: number;
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
    this.size = props.size;
    this.currentItem = props.currentItem ?? null;
    makeAutoObservable(this);
  }

  get percent() {
    return 100 / this.viewCount;
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
