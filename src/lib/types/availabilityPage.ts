import type { SeoProperties } from './seo';
import type { BlockList } from './settings';

export type AvailabilityPageProperties = SeoProperties & {
    pageTitle: string;
    pageTitleHighlight: string;
    pageIntro: string;

    statusBadge: string;
    sectionHeading: string;
    descriptionParagraph1: string;
    descriptionParagraph2: string;
    buttonText: string;
    buttonLink: string;

    availableSpotsHeading: string;
    availableSpots?: BlockList<AvailableSpotBlock>;
};

export type AvailabilityPage = {
    id: string;
    name: string;
    contentType: string;
    properties: AvailabilityPageProperties;
};

export type AvailableSpot = {
    description: string;
    date: string;
    spots: number;
};

export type AvailableSpotBlock = {
    content: {
        contentType: string;
        id: string;
        properties: {
            description: string;
            date: string;
            spots: number;
        };
    };
    settings: unknown | null;
};