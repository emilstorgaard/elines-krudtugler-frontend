import type { SeoProperties } from './seo';
import type { BlockList } from './settings';

export type OpeningHourBlock = {
    content: {
        contentType: string;
        id: string;
        properties: {
            day: string;
            hours: string;
        };
    };
    settings: unknown | null;
};

export type BringItemBlock = {
    content: {
        contentType: string;
        id: string;
        properties: {
            text: string;
            subText?: string;
        };
    };
    settings: unknown | null;
};

export type InfoCardBlock = {
    content: {
        contentType: string;
        id: string;
        properties: {
            icon?: string;
            title: string;
            description: string;
        };
    };
    settings: unknown | null;
};

export type PracticalPageProperties = SeoProperties & {
    // Hero
    pageTitle: string;

    // Åbningstider
    openingHoursLabel?: string;
    openingHours?: BlockList<OpeningHourBlock>;
    openingHoursNote?: string;

    // Ferie og lukkedage
    holidaysLabel?: string;
    holidaysIntro?: string;
    holidaysHighlight?: string;
    holidaysHighlightSub?: string;
    holidaysStatement?: string;
    holidaysClosingNote?: string;

    // Forældresamarbejde
    parentCoopLabel?: string;
    parentCoopMainText?: string;
    parentCoopHighlight?: string;
    parentCoopClosingNote?: string;

    // Hvad skal medbringes
    bringLabel?: string;
    bringIntro?: string;
    bringParentsTitle?: string;
    bringParentsItems?: BlockList<BringItemBlock>;
    bringElineTitle?: string;
    bringElineItems?: BlockList<BringItemBlock>;

    // Godkendelse og tilsyn
    approvalLabel?: string;
    approvalBannerIcon?: string;
    approvalBannerTitle?: string;
    approvalBannerSubtitle?: string;
    approvalCards?: BlockList<InfoCardBlock>;

    // Priser
    pricingLabel?: string;
    pricingIntro?: string;
    pricingPriceValue?: string;
    pricingDiscountLabel?: string;
    pricingDiscountValue?: string;
    pricingFinalLabel?: string;
    pricingFinalValue?: string;
    pricingFinalUnit?: string;
    economyTiles?: BlockList<InfoCardBlock>;    
    pricingInfoTiles?: BlockList<InfoCardBlock>;
};

export type PracticalPage = {
    id: string;
    name: string;
    contentType: string;
    properties: PracticalPageProperties;
};