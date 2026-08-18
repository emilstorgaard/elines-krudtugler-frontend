import type { RichTextValue } from './umbraco';
import type { SeoProperties } from './seo';
import type { BlockList, ScheduleItemBlock } from './elementTypes';

export type HeroProperties = {
	pageTitle: string;
	pageIntro?: string;
};

export type ScheduleProperties = {
	scheduleItems: BlockList<ScheduleItemBlock>;
	footerNote?: string;
};

export type ActivitiesProperties = {
	activitiesHeading?: string;
	activitiesContent?: RichTextValue;
	focusHeading?: string;
	focusAreas?: string;
};

export type WeekdayPageProperties = SeoProperties &
	HeroProperties &
	ScheduleProperties &
	ActivitiesProperties;

export type WeekdayPage = {
	id: string;
	name: string;
	contentType: string;
	properties: WeekdayPageProperties;
};
