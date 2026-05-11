import type { UmbracoMedia } from './umbraco';

export type SettingsProperties = {
    siteName: string;
    logo: UmbracoMedia[];
    ownerName: string;

    phone: string;
    email: string;
    address?: string;

    instagramUrl?: string;
    facebookUrl?: string;

    openingHours?: string;
};

export type Settings = {
    id: string;
    name: string;
    contentType: string;
    properties: SettingsProperties;
};