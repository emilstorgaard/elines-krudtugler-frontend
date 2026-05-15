import type { SeoProperties } from './seo';

export type GalleryPageProperties = SeoProperties & {
    pageTitle: string;
    pageTitleHighlight: string;
    pageIntro: string;

    imageFolder?: { id: string; path: string };

    bottomHeading?: string;
    bottomText?: string;
};

export type GalleryPage = {
    id: string;
    name: string;
    contentType: string;
    properties: GalleryPageProperties;
};