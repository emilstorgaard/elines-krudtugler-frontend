export type UmbracoMedia = {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
};

export type RichTextValue = {
    markup: string;
    blocks: unknown[];
};

export type AboutPageProperties = {
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

    animalsLabel: string;
    animalsText: RichTextValue;
    animalsImage: UmbracoMedia[];

    valuesHeading: string;
    valuesIntro: string;
    valuesList: string[];
    valuesQuote: string;
};

export type AboutPage = {
    id: string;
    name: string;
    contentType: string;
    properties: AboutPageProperties;
};