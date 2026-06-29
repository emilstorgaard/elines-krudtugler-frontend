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
    spotsList?: BlockList<SpotBlock>;
};

export type AvailabilityPage = {
    id: string;
    name: string;
    contentType: string;
    properties: AvailabilityPageProperties;
};

export type SpotBlock = {
    content: {
        contentType: string;
        id: string;
        properties: {
            status: 'Ledig' | 'Reserveret' | 'Optaget';
            description: string;
            date: string;
            spots: number;
        };
    };
    settings: unknown | null;
};