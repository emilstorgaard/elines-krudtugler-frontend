import type { UmbracoMedia, RichTextValue } from './umbraco';
import type { SeoProperties } from './seo';

export type HeroProperties = {
	pageTitle: string;
	pageTitleHighlight: string;
	pageIntro: string;
};

export type MeProperties = {
	aboutLabel: string;
	aboutHeading: string;
	aboutHeadingHighlight: string;
	aboutText: RichTextValue;
	aboutImage: UmbracoMedia[];
	experienceLabel: string;
	experienceValue: string;
};

export type FamilyProperties = {
	familyLabel: string;
	familyText: RichTextValue;
	familyImage: UmbracoMedia[];
};

export type LocationProperties = {
	locationLabel: string;
	locationText: RichTextValue;
	locationImage: UmbracoMedia[];
};

export type AnimalsProperties = {
	animalsLabel: string;
	animalsText: RichTextValue;
	animalsImage: UmbracoMedia[];
};

export type ValuesProperties = {
	valuesHeading: string;
	valuesIntro: string;
	valuesList: string[];
	primaryValuesList: string[];
};

export type EducationalProperties = {
	educationalIntro: string;
	educationalImages: UmbracoMedia[];
	educationalQuote: string;
};

export type AboutPageProperties = SeoProperties &
	HeroProperties &
	MeProperties &
	FamilyProperties &
	LocationProperties &
	AnimalsProperties &
	ValuesProperties &
	EducationalProperties;

export type AboutPage = {
	id: string;
	name: string;
	contentType: string;
	properties: AboutPageProperties;
};
