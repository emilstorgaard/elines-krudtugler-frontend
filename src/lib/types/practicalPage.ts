import type { SeoProperties } from './seo';
import type { BlockList, OpeningHourBlock, BringItemBlock, InfoCardBlock } from './elementTypes';
export type HeroProperties = {
	pageTitle: string;
};

export type OpeningHoursProperties = {
	openingHoursLabel?: string;
	openingHours?: BlockList<OpeningHourBlock>;
	openingHoursNote?: string;
};

export type HolidaysProperties = {
	holidaysLabel?: string;
	holidaysIntro?: string;
	holidaysHighlight?: string;
	holidaysHighlightSub?: string;
	holidaysStatement?: string;
	holidaysClosingNote?: string;
};

export type BringProperties = {
	bringLabel?: string;
	bringIntro?: string;
	bringParentsTitle?: string;
	bringParentsItems?: BlockList<BringItemBlock>;
	bringElineTitle?: string;
	bringElineItems?: BlockList<BringItemBlock>;
};

export type PricesProperties = {
	pricingLabel?: string;
	pricingIntro?: string;
	pricingTitle?: string;
	pricingValue?: string;
	pricingFinalLabel?: string;
	pricingFinalValue?: string;
	pricingFinalUnit?: string;
	economyTiles?: BlockList<InfoCardBlock>;
	pricingInfoTiles?: BlockList<InfoCardBlock>;
};

export type ParentCoopProperties = {
	parentCoopLabel?: string;
	parentCoopMainText?: string;
	parentCoopHighlight?: string;
	parentCoopClosingNote?: string;
};

export type ApprovalProperties = {
	approvalLabel?: string;
	approvalBannerIcon?: string;
	approvalBannerTitle?: string;
	approvalBannerSubtitle?: string;
	approvalCards?: BlockList<InfoCardBlock>;
};

export type PracticalPageProperties = SeoProperties &
	HeroProperties &
	OpeningHoursProperties &
	HolidaysProperties &
	BringProperties &
	PricesProperties &
	ParentCoopProperties &
	ApprovalProperties;

export type PracticalPage = {
	id: string;
	name: string;
	contentType: string;
	properties: PracticalPageProperties;
};
