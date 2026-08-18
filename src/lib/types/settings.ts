import type { UmbracoMedia } from './umbraco';

export type SiteInfoProperties = {
	siteName: string;
	logo: UmbracoMedia[];
	ownerName: string;
};

export type SocialMediaProperties = {
	instagramUrl?: string;
	facebookUrl?: string;
};

export type AnnouncementBarProperties = {
	announcementEnabled?: boolean;
	announcementText?: string;
	announcementLinkText?: string;
	announcementLinkUrl?: string;
};

export type SettingsProperties = SiteInfoProperties &
	SocialMediaProperties &
	AnnouncementBarProperties;

export type Settings = {
	id: string;
	name: string;
	contentType: string;
	properties: SettingsProperties;
};
