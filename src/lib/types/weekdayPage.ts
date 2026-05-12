import type { RichTextValue } from './umbraco';
import type { SeoProperties } from './seo';
import type { BlockList } from './settings';

export type ScheduleItemBlock = {
    content: {
        contentType: string;
        id: string;
        properties: {
            time: string;
            activity: string;
        };
    };
    settings: unknown | null;
};

export type WeekdayPageProperties = SeoProperties & {
    pageTitle: string;
    pageIntro: string;

    scheduleItems: BlockList<ScheduleItemBlock>;

    footerNote?: string;

    activitiesHeading?: string;
    activitiesContent?: RichTextValue;
    focusHeading?: string;
    focusAreas?: string;
};

export type WeekdayPage = {
    id: string;
    name: string;
    contentType: string;
    properties: WeekdayPageProperties;
};