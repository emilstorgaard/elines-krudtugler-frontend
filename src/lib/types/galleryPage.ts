import type { SeoProperties } from './seo';

export type HeroProperties = {
	pageTitle: string;
	pageTitleHighlight: string;
	pageIntro: string;
};

export type GalleryProperties = {
	// Gallery
	imageFolder?: { id: string; path: string };

	// Bottom CTA
	bottomHeading?: string;
	bottomText?: string;
};

export type GalleryPageProperties = SeoProperties & HeroProperties & GalleryProperties;

export type GalleryPage = {
	id: string;
	name: string;
	contentType: string;
	properties: GalleryPageProperties;
};
