export type AvailabilityPageProperties = {
    mainHeading: string;
    mainHeadingHighlight: string;
    introText: string;
    statusBadge: string;
    sectionHeading: string;
    descriptionParagraph1: string;
    descriptionParagraph2: string;
    buttonText: string;
    buttonLink: string;
};

export type AvailabilityPage = {
    id: string;
    name: string;
    contentType: string;
    properties: AvailabilityPageProperties;
};