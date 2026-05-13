import type { SeoProperties } from './seo';
import type { BlockList } from './settings';

export type ErrorSuggestionBlock = {
    content: {
        contentType: string;
        id: string;
        properties: {
            icon?: string;
            title: string;
            description?: string;
            link: string;
        };
    };
    settings: unknown | null;
};

export type ErrorPageProperties = SeoProperties & {
    // 404
    notFoundLabel?: string;
    notFoundTitle?: string;
    notFoundDescription?: string;
    notFoundEmoji?: string;
    notFoundCardLabel?: string;

    // Generel fejl
    errorLabel?: string;
    errorTitle?: string;
    errorDescription?: string;
    errorEmoji?: string;
    errorCardLabel?: string;

    // Knapper og forslag
    homeButtonText?: string;
    backButtonText?: string;
    showSuggestions?: boolean;
    suggestionsHeading?: string;
    suggestions?: BlockList<ErrorSuggestionBlock>;
};

export type ErrorPage = {
    id: string;
    name: string;
    contentType: string;
    properties: ErrorPageProperties;
};