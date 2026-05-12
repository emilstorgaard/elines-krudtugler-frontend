import type { UmbracoMedia } from './umbraco';
import type { SeoProperties } from './seo';

export type HomePageProperties = SeoProperties & {
    heroTitle: string;
    heroSubtitle?: string;
    heroIntro: string;
    heroImages?: UmbracoMedia[];
};

export type HomePage = {
    id: string;
    name: string;
    contentType: string;
    properties: HomePageProperties;
};