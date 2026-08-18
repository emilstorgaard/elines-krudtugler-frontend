import type { SeoProperties } from './seo';
import type { BlockList, ErrorSuggestionBlock } from './elementTypes';

export type HeroProperties = {
	notFoundLabel?: string;
	notFoundTitle?: string;
	notFoundDescription?: string;
	notFoundEmoji?: string;
	notFoundCardLabel?: string;
};

export type GeneralErrorProperties = {
	errorLabel?: string;
	errorTitle?: string;
	errorDescription?: string;
	errorEmoji?: string;
	errorCardLabel?: string;
};

export type ButtonsAndSuggestionsProperties = {
	homeButtonText?: string;
	backButtonText?: string;
	showSuggestions?: boolean;
	suggestionsHeading?: string;
	suggestions?: BlockList<ErrorSuggestionBlock>;
};

export type ErrorPageProperties = SeoProperties &
	HeroProperties &
	GeneralErrorProperties &
	ButtonsAndSuggestionsProperties;

export type ErrorPage = {
	id: string;
	name: string;
	contentType: string;
	properties: ErrorPageProperties;
};
