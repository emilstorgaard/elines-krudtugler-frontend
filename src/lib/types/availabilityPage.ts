import type { SeoProperties } from './seo';
import type { BlockList, SpotBlock } from './elementTypes';

export type HeroProperties = {
	pageTitle: string;
	pageTitleHighlight: string;
	pageIntro: string;
};

export type AvailableSpotsProperties = {
	statusBadge: string;
	sectionHeading: string;
	descriptionParagraph1: string;
	descriptionParagraph2: string;
	buttonText: string;
	buttonLink: string;
	availableSpotsHeading: string;
	spotsList?: BlockList<SpotBlock>;
};

export type AvailabilityPageProperties = SeoProperties & HeroProperties & AvailableSpotsProperties;

export type AvailabilityPage = {
	id: string;
	name: string;
	contentType: string;
	properties: AvailabilityPageProperties;
};
