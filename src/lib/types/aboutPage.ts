import type { UmbracoMedia, RichTextValue } from './umbraco';
import type { SeoProperties } from './seo';

export type AboutPageProperties = SeoProperties & {
    pageTitle: string;
    pageTitleHighlight: string;
    pageIntro: string;
    aboutLabel: string;
    aboutHeading: string;
    aboutHeadingHighlight: string;
    aboutText: RichTextValue;
    aboutImage: UmbracoMedia[];
    experienceLabel: string;
    experienceValue: string;
    familyLabel: string;
    familyText: RichTextValue;
    familyImage: UmbracoMedia[];
    locationLabel: string;
    locationText: RichTextValue;
    locationImage: UmbracoMedia[];
    animalsLabel: string;
    animalsText: RichTextValue;
    animalsImage: UmbracoMedia[];
    valuesHeading: string;
    valuesIntro: string;
    valuesList: string[];
    primaryValuesList: string[];
    educationalIntro: string;
    educationalImages: UmbracoMedia[];
    educationalQuote: string;
};

export type AboutPage = {
    id: string;
    name: string;
    contentType: string;
    properties: AboutPageProperties;
};