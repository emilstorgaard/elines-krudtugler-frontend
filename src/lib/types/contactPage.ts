import type { SeoProperties } from './seo';
import type { BlockList, InfoCardBlock } from './elementTypes';

export type HeroProperties = {
	pageTitle: string;
	pageIntro?: string;
};

export type ContactInformationProperties = {
	contactSectionTitle?: string;
	email: string;
	phone?: string;
};

export type AvailabilityPanelProperties = {
	availabilityEnabled?: boolean;
	availabilityBadge?: string;
	availabilityTitle?: string;
	availabilityDescription?: string;
	availabilityCallButton?: string;
	availabilityEmailButton?: string;
};

export type DirectionsProperties = {
	// Directions
	directionsTitle?: string;
	directionsIntro?: string;
	addressCardLabel?: string;
	directionsButtonText?: string;

	// Address
	streetAddress?: string;
	postalCode?: string;
	city?: string;

	// Transport options
	transportOptions?: BlockList<InfoCardBlock>;
};

export type ContactPageProperties = SeoProperties &
	HeroProperties &
	ContactInformationProperties &
	AvailabilityPanelProperties &
	DirectionsProperties;

export type ContactPage = {
	id: string;
	name: string;
	contentType: string;
	properties: ContactPageProperties;
};
