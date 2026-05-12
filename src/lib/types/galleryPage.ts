import type { UmbracoMedia } from './umbraco';
import type { SeoProperties } from './seo';

export type GalleryPageProperties = SeoProperties & {
    pageTitle: string;
    pageTitleHighlight: string;
    pageIntro: string;

    images?: UmbracoMedia[];

    bottomHeading?: string;
    bottomText?: string;
};

export type GalleryPage = {
    id: string;
    name: string;
    contentType: string;
    properties: GalleryPageProperties;
};