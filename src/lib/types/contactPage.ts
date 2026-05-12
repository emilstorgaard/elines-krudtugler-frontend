import type { SeoProperties } from './seo';
import type { BlockList } from './settings';
import type { InfoCardBlock } from './practicalPage';

export type ContactPageProperties = SeoProperties & {
    // Hero - Kontakt
    pageTitle: string;
    pageIntro?: string;

    // Kontaktoplysninger
    contactSectionTitle?: string;

    // Ledige pladser panel
    availabilityEnabled?: boolean;
    availabilityBadge?: string;
    availabilityTitle?: string;
    availabilityDescription?: string;
    availabilityNote?: string;
    availabilityCallButton?: string;
    availabilityEmailButton?: string;

    // Hero - Sådan finder du os
    directionsTitle?: string;
    directionsIntro?: string;

    // Kort og adresse
    mapsEmbedUrl?: string;
    addressCardLabel?: string;
    directionsButtonText?: string;
    directionsButtonUrl?: string;

    // Transport muligheder
    transportOptions?: BlockList<InfoCardBlock>;
};

export type ContactPage = {
    id: string;
    name: string;
    contentType: string;
    properties: ContactPageProperties;
};